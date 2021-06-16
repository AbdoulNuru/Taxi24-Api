import { Op } from "sequelize";
import Models from "../database/models";

const { Driver } = Models;

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
    const allDrivers = await Driver.findAll();

    if (!allDrivers) {
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
    const availableDrivers = await Driver.findAll({
      where: { [Op.not]: [{ isBooked: "No" }] },
    });

    if (!availableDrivers) {
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
    const { id } = req.body,
      driver = await Driver.findOne({ where: id });

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

export default { GetAllDrivers, GetAvailableDrivers, GetDriverById };
