module.exports = {
  HOST: "localhost",
  PORT: "49693", // sql server port need to update base on host
  USER: "sa",
  PASSWORD: "anthonyoling",
  // server: "DESKTOP-8PPU7BJ",
  DB: "SEANLUC_LIVE",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
