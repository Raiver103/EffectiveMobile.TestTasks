module.exports = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "raiver031105",
  database: "EffectiveMobile.historydb",
  entities: [__dirname + "/models/*.js"],
  synchronize: true,
};