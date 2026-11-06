import mongoose from 'mongoose'

const schema = new mongoose.Schema(
  {
    app_name: {
      type: String,
      required: true,
      unique: true,
    },
    reviewer_name: {
      type: String,
      required: true,
      unique: true,
    },
    rating: {
      type: double,
      required: true,
      unique: true,
    },
    comment: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
)

const ulasanModel = mongoose.model('Ulasan Aplikasi', schema)
export default ulasanModel