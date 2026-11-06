import mongoose from "mongoose";
import ProdiModel from "../models/Ulasan.model.js";
import { StoreUlasanSchema, UpdateUlasanSchema } from "../schemas/ulasan.schema.js";
import { apiResponse, apiResponseValidation } from "../utils/response.js";

class ulasanController {
  static async store(req, res) {
    const result = StoreUlasanSchema.safeParse(req.body);

    if (!result.success) {
      return apiResponseValidation({ res, errors: result.error });
    }

    const {app_name, reviewer_name, rating, comment } = result.data;

    const isExists = await ulasanModel.exists({
      _id: new mongoose.Types.ObjectId(app_name),
    });

    if (!isExists) {
      return apiResponse({ res, status: 404, message: "Aplikasi tidak ditemukan", data: null });
    }

    const newUlasan = await ulasanModel.create({
      app_name,
      reviewer_name,
      rating,
      ulasan: comment,
    });

    return apiResponse({ res, status: 201, message: "Ulasan berhasil diposting", data: newUlasan });
  }}

  static async index(req, res) {
    const listAplikasi = await ulasanModel.find().populate("ulasan");

    return apiResponse({
      res,
      status: 200,
      message: "List aplikasi",
      data: app_name,
    });
  }
export default ulasanController;