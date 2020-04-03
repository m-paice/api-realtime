import { sequelize } from "../models";

const {
  models: { users },
} = sequelize;

module.exports = {
  index: async (req, res) => {
    try {
      const response = await users.findAll();

      return res.json(response);
    } catch (error) {
      return res.status(500).json(error.toString());
    }
  },
  show: async (req, res) => {},
  create: async (req, res) => {},
  update: async (req, res) => {},
  destroy: async (req, res) => {},
};