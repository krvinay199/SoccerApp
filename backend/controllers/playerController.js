import mongoose from "mongoose";
import { PlayerSchema } from "../models/playerModel";

const Player = mongoose.model("Player", PlayerSchema);

export const addNewPlayer = async (req, res) => {
  try {
    const newPlayer = new Player(req.body);
    await newPlayer.save(); // Use await here

    res.json(newPlayer);
  } catch (err) {
    res.status(500).send(err.message); // Handle any errors
  }
};

export const getPlayers = async (req, res) => {
  try {
    const players = await Player.find(); // Use await here

    res.json(players);
  } catch (err) {
    res.status(500).send(err.message); // Handle any errors
  }
};

export const getPlayerWithID = async (req, res) => {
  try {
    const players = await Player.findById(req.params.PlayerId); // Use await here

    res.json(players);
  } catch (err) {
    res.status(500).send(err.message); // Handle any errors
  }
};

export const UpdatePlayer = async (req, res) => {
  try {
    const players = await Player.findOneAndUpdate(
      { _id: req.params.PlayerId },
      req.body,
      { new: true }
    ); //Use await here

    res.json(players);
  } catch (err) {
    res.status(500).send(err.message); // Handle any errors
  }
};

export const deletePlayer = async (req, res) => {
  try {
    await Player.deleteOne({ _id: req.params.PlayerId }); // Use await here

    if (result.deletedCount === 1) {
      res.json({ message: "Player removed successfully" });
    } else {
      res.status(404).json({ message: "Player not found" });
    }
  } catch (err) {
    res.status(500).send(err.message); // Handle any errors
  }
};

export const deleteAllPlayer = async (req, res) => {
  try {
    await Player.deleteMany({});

    res.json({ success: true, message: "All Players deleted successfully." });
  } catch (error) {
    console.error("Error deleting players:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
