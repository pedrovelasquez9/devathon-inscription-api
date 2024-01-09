import express from "express";
export const routerDocs = express.Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../docs/swagger-output.json");

routerDocs.use("/api-docs", swaggerUi.serve);
routerDocs.get("/api-docs", swaggerUi.setup(swaggerDocument));
