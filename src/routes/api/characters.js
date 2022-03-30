const express = require("express");
const CharacterModel = require("../../models/characters");
const db = require("../../database/db");

const router = express.Router();
router.use(express.json());

router.post("/", async (req, res) => {
  try {
    const addCharacter = new CharacterModel(req.body);
    const response = await addCharacter.save();
    res.status(201).send(response);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await CharacterModel.find({}, { __v: 0 });
    res.status(201).send(response);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const response = await CharacterModel.findById(_id, { __v: 0 });
    res.send(response);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const response = await CharacterModel.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(response);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const response = await CharacterModel.findByIdAndDelete(_id);
    res.send(response);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
