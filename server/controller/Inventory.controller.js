const db = require("../models/index.js");
const Inventory = db.Inventory;
const Op = db.Sequelize.Op;

// Create and Save a new Item
exports.create = async (req, res) => {
  const Item_Code = req.body.Item_Code;

  // Create a item
  const InventoryItem = {
    Item_Code: req.body.Item_Code,
    Item_Name: req.body.Item_Name,
    Item_Description: req.body.Item_Description,
    Item_UnitPrice: req.body.Item_UnitPrice,
  };

  // Validate request
  if (
    !req.body.Item_Code ||
    !req.body.Item_Name ||
    !req.body.Item_Description ||
    !req.body.Item_UnitPrice
  ) {
    res.status(400).send({
      message: "Required Items cannot be blank",
    });
  }

  // //Check if the same item code exist
  const existing = await Inventory.findOne({
    where: { Item_Code: Item_Code },
  });
  if (existing === null) {
    // Save Tutorial in the database
    Inventory.create(InventoryItem)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "Some error occurred while creating the Inventory Item.",
        });
      });
  } else {
    res.status(500).send({
      message: "Item with same Item Code exist",
    });
  }
};

// Retrieve all Item from the database.
exports.findAll = (req, res) => {
  const Item_Code = req.query.Item_Code;
  var condition = Item_Code
    ? { Item_Code: { [Op.like]: `%${Item_Code}%` } }
    : null;

  Inventory.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving tutorials",
      });
    });
};

// Find a single Item with an Item Code
exports.findOne = (req, res) => {
  const Item_Code = req.body.Item_Code;

  Inventory.findOne({ where: { Item_Code: Item_Code } })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Item with Item_Code=${Item_Code}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Item with Item_Code=" + Item_Code,
      });
    });
};

// Update a Item by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Inventory.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Item updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Item is not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating item with id=" + id,
      });
    });
};

// Delete a Item with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Inventory.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Item is deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete item with id=${id}. Possible item is not found`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Cannot delete item with id=" + id,
      });
    });
};

// Delete all Items from the database.
// exports.deleteAll = (req, res) => {
//     Inventory.destroy({
//       where: {},
//       truncate: false
//     })
//       .then(nums => {
//         res.send({ message: `${nums} All items is deleted successfully!` });
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while removing all items."
//         });
//       });
//   };

// Find all published Item
// exports.findAllPublished = (req, res) => {
//   Inventory.findAll({ where: { published: true } })
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || "Some error occurred while retrieving Items.",
//       });
//     });
// };
