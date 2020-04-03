import { sequelize } from "../models";

const {
  models: { messages },
} = sequelize;

module.exports = {
  index: async (req, res) => {
    try {
      const response = await messages.findAll();

      return res.json(response);
    } catch (error) {
      return res.status(500).json(error.toString());
    }
  },
  show: async (req, res) => {},
  create: async (req, res) => {
    const { text, roomId, userId } = req.body;
    try {
      const response = await messages.create({
        text,
        roomId,
        userId,
      });

      return res.json(response);
    } catch (error) {
      return res.status(500).json(error.toString());
    }
  },
  update: async (req, res) => {},
  destroy: async (req, res) => {},
};
