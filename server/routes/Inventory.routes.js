module.exports = (app) => {
  const Inventory = require("../controller/Inventory.controller.js");

  var router = require("express").Router();

  // Create a new Item
  router.post("/", Inventory.create);

  // Retrieve all items
  router.get("/", Inventory.findAll);

  // Retrieve all published Items
  router.get("/published", Inventory.findAllPublished);

  // Retrieve a single item with id
  router.get("/:Item_Code", Inventory.findOne);

  // Update a Item with id
  router.put("/:id", Inventory.update);

  // Delete a item with id
  router.delete("/:id", Inventory.delete);

  // Delete all Tutorials
  //   router.delete("/", tutorials.deleteAll);

  app.use("/api/Inventory", router);
};
