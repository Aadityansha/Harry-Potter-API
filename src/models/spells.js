const mongoose = require("mongoose");

const spellSchema = new mongoose.Schema({
    Name: {
      type: String,
      required: true,
      trim: true,
    },
    Incantation: {
      type: String,
      trim: true,
    },
    Type: {
      type: String,
      trim: true,
    },
    Effect: {
      type: String,
      trim: true,
    },
    Light: {
      type: String,
      trim: true,
    }
});

const SpellModel = new mongoose.model("Spell", spellSchema);

module.exports = SpellModel;
