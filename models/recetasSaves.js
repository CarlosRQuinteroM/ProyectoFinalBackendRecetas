const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");

const recetaSaveSchema = new mongoose.Schema({
  idUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: Schema.Types.String,
    requited: true,
    lowercase: true,
  },
  idReceta: {
    type: Number,
    required: true,
    unique: true,
  },
  imgReceta: {
    type: String,
    requited: true,
  },
  favorite: {
    type: Boolean,
    default:false,
  },
  comentarios: {
    type: String,
    required: false,
  },
  saveDate:{
    type: Date,
    default:Date.now()
  },
});

const RecetaSaves = mongoose.model("RecetaSave", recetaSaveSchema);
module.exports = RecetaSaves;
