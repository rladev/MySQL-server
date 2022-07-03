// const dbConfig = require("../config/db.config");
import { dbConfig } from '../config/db.config'
import { notesModel } from './notes.model';

import { Sequelize } from "sequelize";
const sequelize = new Sequelize("testdb", "root", "", {
  host: "localhost",
  port:  3306,
  dialect: "mysql",
  // operatorsAliases: 0,
});

// interface db {
//     sequelize: any,
//     Sequelize: any,
//     notes: any
// };

const db = {
    Sequelize : Sequelize,
    sequelize : sequelize,
    notes : notesModel(sequelize, Sequelize) //table name
} 
// db.Sequelize = Sequelize;
// db.sequelize = sequelize;


// db.notes = require("./notes.model.js")(sequelize, Sequelize);

export { db }
