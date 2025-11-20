import { Sequelize } from "sequelize-typescript";
//importar modelos
import { ShirtModel } from "../models/shirtModel";
import { JeanModel } from "../models/jeanModel";

export const sequelize = new Sequelize({
  dialect: "mysql",
  host: 'db',          // nombre del servicio en docker-compose
  port: 3306,
  username: "root",
  password: "password",
  database: "central",
  models: [ShirtModel, JeanModel],
  logging: false,
});
