import { Op } from "sequelize";
import Models from "../database/models";

const { Users } = Models;

/**
 *
 * @author Abdou Nuru
 * @param {*} req
 * @param {*} res
 * @description This is a function that is used to get a list of all riders
 * @returns {object} response
 */
const GetAllRiders = async (req, res) => {
  try {
    const allRiders = await Users.findAll({
      where: { role: { [Op.eq]: "rider" } },
    });

    if (allRiders.length === 0) {
      return res.status(200).json({
        status: 200,
        message: "No Riders records were found",
      });
    }

    return res.status(200).json({
      status: 200,
      message: "All Riders have been retrieved successfully",
      riders: allRiders,
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
 * @description This is a function that is used to get a rider by id
 * @returns {object} response
 */
const GetRiderById = async (req, res) => {
  try {
    const { id } = req.params,
      rider = await Users.findOne({ where: { id } });

    if (!rider) {
      return res.status(404).json({
        status: 404,
        error: "No rider found by the given id",
      });
    }

    return res.status(200).json({
      status: 200,
      message: "The driver informations were retrieved",
      rider,
    });
  } catch (error) {
    return res.status(500).json({
      error: "There was an internal server error",
    });
  }
};

export default { GetAllRiders, GetRiderById };
