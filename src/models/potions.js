const mongoose = require("mongoose");

const potionSchema = new mongoose.Schema({
  Name: {
    type: String,
    trim: true,
    required: true,
  },
  KnownIngredients: {
    type: String,
    trim: true,
  },
  Effect: {
    type: String,
    trim: true,
  },
  Characteristics: {
    type: String,
    trim: true,
  },
  DifficultyLevel: {
    type: String,
    trim: true,
  },
});

const PotionModel = new mongoose.model("Potion", potionSchema);

module.exports = PotionModel;
