const Satelite = require("../models/Satelite");
const Planet = require("../models/Planet");

module.exports = {
  async store(req, res) {
    try {
      const { planetId } = req.params;
      const { name, serial_number } = req.body;

      const planet = await Planet.findByPk(planetId);

      if (!planet) {
        return res.status(404).json({ error: "Esse planeta não existe" });
      }

      const satelite = await Satelite.create({ name, serial_number, planetId });
      return res.status(201).json(satelite);
    } catch (error) {
      console.error("Erro ao criar satélite:", error);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  },

  async index(req, res) {
    try {
      const { planetId } = req.params;

      if (!planetId) {
        return res.status(400).json({ error: "ID do planeta não fornecido" });
      }

      const planet = await Planet.findByPk(planetId, {
        include: Satelite,
      });

      if (!planet) {
        return res.status(404).json({ error: "Esse planeta não existe" });
      }

      return res.json(planet);
    } catch (error) {
      console.error("Erro ao buscar satélites do planeta:", error);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  },
};
