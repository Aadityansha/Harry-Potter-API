const express = require("express");
const SpellModel = require("../../models/spells");
const db = require("../../database/db");

const router = express.Router();
router.use(express.json());

router.post("/", async (req, res) => {
  try {
    const addSpell = new SpellModel(req.body);
    const response = await addSpell.save();
    res.status(201).send(response);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await SpellModel.find({}, { __v: 0 });
    res.status(201).send(response);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const response = await SpellModel.findById(_id, { __v: 0 });
    res.send(response);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const response = await SpellModel.findByIdAndUpdate(_id, req.body, {
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
    const response = await SpellModel.findByIdAndDelete(_id);
    res.send(response);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
