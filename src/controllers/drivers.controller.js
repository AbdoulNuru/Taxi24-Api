import { Op } from "sequelize";
import Distance from "geo-distance";
import Models from "../database/models";

const { Users } = Models;

/**
 *
 * @author Abdou Nuru
 * @param {*} req
 * @param {*} res
 * @description This is a function that is used to get a list of all drivers
 * @returns {object} response
 */
const GetAllDrivers = async (req, res) => {
  try {
    const allDrivers = await Users.findAll({
      where: { role: { [Op.eq]: "driver" } },
    });

    if (allDrivers.length === 0) {
      return res.status(200).json({
        status: 200,
        message: "No Drivers records were found",
      });
    }

    return res.status(200).json({
      status: 200,
      message: "All Drivers have been retrieved successfully",
      drivers: allDrivers,
    });
  } catch (error) {
    return res.status(500).json({
      error: "There was an internal server error",
    });
  }
};

/**
 *
 * @author Abdou Nuru
 * @param {*} req
 * @param {*} res
 * @description This is a function that is used to get all available drivers
 * @returns {object} response
 */
const GetAvailableDrivers = async (req, res) => {
  try {
    const availableDrivers = await Users.findAll({
      where: {
        role: { [Op.eq]: "driver" },
        [Op.not]: [{ status: "booked" }],
      },
    });

    if (availableDrivers.length === 0) {
      return res.status(200).json({
        status: 200,
        message: "No available Drivers at the moment",
      });
    }

    return res.status(200).json({
      status: 200,
      message: "All Available Drivers have been retrieved successfully",
      AvailableDrivers: availableDrivers,
    });
  } catch (error) {
    return res.status(500).json({
      error: "There was an internal server error",
    });
  }
};

const GetNearestDrivers = async (req, res) => {
  try {
    const { id } = req.headers,
      rider = Users.findOne({ where: { id } }),
      riderCoordinates = {
        lat: rider.latitude,
        lon: rider.longitude,
      },
      drivers = await Users.findAll({
        where: {
          role: { [Op.eq]: "driver" },
          [Op.not]: [{ status: "booked" }],
        },
      });

    if (drivers) {
      const availableDrivers = drivers.map(async (driver) => {
        const driverLocation = await Users.findOne({
            where: { id: driver.id },
          }),
          driverCoordinates = {
            lat: driverLocation.latitude,
            lon: driverLocation.longitude,
          },
          nearestDrivers = Distance.between(
            driverCoordinates,
            riderCoordinates
          );

        if (nearestDrivers < Distance("3 km")) {
          return driver.dataValues;
        }
      });

      if (availableDrivers.length === 0) {
        return res.status(200).json({
          status: 200,
          message: "No available Drivers near you at the moment",
        });
      }

      return res.status(200).json({
        status: 200,
        message: "Available drivers within 3km from your location",
        drivers: availableDrivers,
      });
    }
  } catch (error) {
    return res.status(500).json({
      error: "There was an internal server error",
    });
  }
};

/**
 *
 * @author Abdou Nuru
 * @param {*} req
 * @param {*} res
 * @description This is a function that is used to get a driver by id
 * @returns {object} response
 */
const GetDriverById = async (req, res) => {
  try {
    const { id } = req.params,
      driver = await Users.findOne({ where: { id } });

    if (!driver) {
      return res.status(404).json({
        status: 404,
        error: "No driver found by the given id",
      });
    }

    return res.status(200).json({
      status: 200,
      message: "The driver informations were retrieved",
      driver,
    });
  } catch (error) {
    return res.status(500).json({
      error: "There was an internal server error",
    });
  }
};

export default {
  GetAllDrivers,
  GetAvailableDrivers,
  GetNearestDrivers,
  GetDriverById,
};
