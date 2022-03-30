const mongoose = require("mongoose");

const charaterSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    trim: true,
  },
  Job: {
    type: String,
    trim: true,
  },
  House: {
    type: String,
    trim: true,
  },
  Wand: {
    type: String,
    lowercase: true,
    trim: true,
  },
  Patronus: {
    type: String,
    lowercase: true,
    trim: true,
  },
  Species: {
    type: String,
    trim: true,
  },
  BloodStatus: {
    type: String,
    trim: true,
  },
  HairColour: {
    type: String,
    lowercase: true,
    trim: true,
  },
  EyeColour: {
    type: String,
    lowercase: true,
    trim: true,
  },
  Loyalty: {
    type: String,
    trim: true,
  },
  Skills: {
    type: String,
    trim: true,
  },
  Birth: {
    type: String,
    trim: true,
  },
  Death: {
    type: String,
    trim: true,
  },
});

const CharacterModel = new mongoose.model("Character", charaterSchema);

module.exports = CharacterModel;
