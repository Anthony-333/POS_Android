module.exports = (sequelize, Sequelize) => {
  const Inventory = sequelize.define("Item", {
    //data models
    Item_Code: {
      type: Sequelize.STRING,
      unique: true,
      // allowNull: false,
      // validate: {
      //   notNull: { msg: "Item code is required." },
      // },
    },
    Item_Name: {
      type: Sequelize.STRING,
      // allowNull: false,
      // validate: {
      //   notNull: { msg: "Item name is required." },
      // },
    },
    Item_Description: {
      type: Sequelize.STRING,
      // allowNull: false,
      // validate: {
      //   notNull: { msg: "Item description is required" },
      // },
    },
    Item_UnitPrice: {
      type: Sequelize.FLOAT,
      // allowNull: false,
      // validate: {
      //   notNull: { msg: "Unit price is required" },
      // },
    },
  });

  return Inventory;
};
