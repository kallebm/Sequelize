const express = require("express");
const routes = express.Router();

const PlanetController = require("../Controllers/PlanetController");
const SateliteController = require("../Controllers/SateliteController");
const CapController = require("../Controllers/CapController");
const SpaceshipController = require("../Controllers/SpaceshipController");

// Rotas de Planets
routes.post("/planets", PlanetController.store);
routes.get("/planets", PlanetController.index);
routes.put("/planets/:id", PlanetController.put);
routes.delete("/planets/:id", PlanetController.delete);

routes.post("/planets/:planetId/satelites", SateliteController.store);
routes.get("/planets/:planetId/satelites", SateliteController.index);

routes.post("/cap", CapController.store);
routes.get("/cap", CapController.index);

routes.post("/caps/:capId/spaceships", SpaceshipController.store);
routes.get("/caps/:capId/spaceships", SpaceshipController.index);

module.exports = routes;
