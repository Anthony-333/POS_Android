module.exports = (sequelize, Sequelize) => {
  const Inventory = sequelize.define("Item", {
    Item_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Item name is required." },
      },
    },
    Item_description: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Item description is required" },
      },
    },
    Item_unitPrice: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: "Unit price is required" },
      },
    },
  });

  return Inventory;
};
