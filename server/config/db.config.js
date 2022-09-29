module.exports = {
    HOST: "localhost",
    USER: "anthony",
    PASSWORD: "Anthony@123456789",
    DB: "test",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };