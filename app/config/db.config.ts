export const dbConfig = {
    HOST: "localhost:5432", // Replace it with your own host address
    USER: "root", // Replace with your own username
    PASSWORD: "1", // Replace with your own password
    DB: "testdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };