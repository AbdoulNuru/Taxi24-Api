// import { Op } from "sequelize";
// import Models from "../database/models";

// const { Rider } = Models;

// /**
//  *
//  * @author Abdou Nuru
//  * @param {*} req
//  * @param {*} res
//  * @description This is a function that is used to get a list of all drivers
//  * @returns {object} response
//  */
// const GetAllDrivers = async (req, res) => {
//   try {
//     const allDrivers = await  .findAll();

//     if (!allDrivers) {
//       return res.status(200).json({
//         status: 200,
//         message: "No Drivers records were found",
//       });
//     }

//     return res.status(200).json({
//       status: 200,
//       message: "All Drivers have been retrieved successfully",
//       drivers: allDrivers,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       error: "There was an internal server error",
//     });
//   }
// };

// /**
//  *
//  * @author Abdou Nuru
//  * @param {*} req
//  * @param {*} res
//  * @description This is a function that is used to get a driver by id
//  * @returns {object} response
//  */
// const GetRiderById = async (req, res) => {
//   try {
//     const { id } = req.body,
//       driver = await Rider.findOne({ where: id });

//     if (!driver) {
//       return res.status(404).json({
//         status: 404,
//         error: "No driver found by the given id",
//       });
//     }

//     return res.status(200).json({
//       status: 200,
//       message: "The driver informations were retrieved",
//       driver,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       error: "There was an internal server error",
//     });
//   }
// };
