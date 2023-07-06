import { Sequelize } from "sequelize";

const sequelize = new Sequelize("leoAutoras", "root", "mi-biblioteca", {
  host: "localhost",
  port: 3388,
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});
sequelize
  .authenticate()
  .then(function (err) {
    console.log("Connection has been established successfully.");
  })
  .catch(function (err) {
    console.log("Unable to connect to the database:", err);
  });

export default sequelize;
