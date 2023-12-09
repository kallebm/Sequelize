const Planet = require("../models/Planet");

module.exports = {
  async store(req, res) {
    const { name, position } = req.body;
    const planet = await Planet.create({ name, position });

    return res.json(planet);
  },
  async index(req, res) {
    const planets = await Planet.findAll();

    return res.json(planets);
  },
  async put(req, res) {
    const { id } = req.params;
    const { name, position } = req.body;

    await Planet.update(
      { name, position },
      {
        where: {
          id: id,
        },
      }
    );

    return res.send("Planeta atualizado com sucesso");
  },

  async delete(req, res) {
    const { id } = req.params;
    await Planet.destroy({
      where: {
        id: id,
      },
    });
    res.send("Success! Planet deleted.");
  },
};
