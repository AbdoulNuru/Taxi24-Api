import { Op } from "sequelize";
import { v4 as uuid } from "uuid";
import Models from "../database/models";

const { Trip, Users } = Models;

/**
 *
 * @author Abdou Nuru
 * @param {*} req
 * @param {*} res
 * @description This is a function that is used to initiate a new trip
 * @returns {object} response
 */
const newTrip = async (req, res) => {
  try {
    const { riderId, from, to } = req.body;

    const isRiderNotFree = await Trip.findOne({
      where: { riderId, isActive: { [Op.eq]: "Yes" } },
    });

    if (!isRiderNotFree) {
      const freeDrivers = await Users.findAll({
          where: {
            role: { [Op.eq]: "driver" },
            [Op.not]: [{ status: "booked" }],
          },
        }),
        trip = await Trip.create({
          id: uuid(),
          driverId: freeDrivers[0].id,
          riderId,
          from,
          to,
          startTime: new Date(),
          isActive: "Yes",
        });

      return res.status(200).json({
        status: 200,
        message: "The new trip was initiated",
        trip,
      });
    }

    return res.status(400).json({
      status: 400,
      message:
        "The trip was not initiated, you can not initiate a new trip while you still have an active trip",
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
 * @description This is a function that is used to get a list of all active trips
 * @returns {object} response
 */
const completeTrip = async (req, res) => {
  try {
    const { tripId } = req.body,
      activeTrip = await Trip.findOne({
        where: { id: tripId, isActive: { [Op.eq]: "Yes" } },
      });

    if (!activeTrip) {
      return res.status(404).json({
        status: 404,
        message: "No active trip found with the given id",
      });
    }

    const completed = await Trip.update(
      {
        isActive: "No",
        endTime: new Date(),
      },
      {
        where: { id: tripId },
      }
    );

    return res.status(200).json({
      status: 200,
      message: "The trip was completed",
      completed,
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
 * @description This is a function that is used to get a list of all active trips
 * @returns {object} response
 */
const GetActiveTrips = async (req, res) => {
  try {
    const allActiveTrips = await Trip.findAll({
      where: { [Op.not]: [{ isActive: "No" }] },
    });

    if (allActiveTrips.length === 0) {
      return res.status(200).json({
        status: 200,
        message: "No Trips are active at the moment",
      });
    }

    return res.status(200).json({
      status: 200,
      message: "All active trips have been retrieved successfully",
      trips: allActiveTrips,
    });
  } catch (error) {
    return res.status(500).json({
      error: "There was an internal server error",
    });
  }
};

export default { newTrip, completeTrip, GetActiveTrips };
