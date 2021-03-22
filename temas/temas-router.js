const express = require("express");
const dbConfig = require("../data/db-config");

const temas = require("./temas-model");

const router = express.Router();

router.get("/", (req, res) => {
  temas
    .gettemas()
    .then((temas) => {
      res.json(temas);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ errorMessage: "Database failed to get temas. " });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  temas
    .findtemasById(id)
    .then((temas) => {
      if (temas) {
        res.json(temas);
      } else {
        res.status(404).json({ message: "There is no tema with that id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "Failed to get tema. " });
    });
});

// router.put("/:id", (req, res) => {
//   const {id} = req.params;
//   const changes = req.body;

//   temas
//     .findtemasById(id)
//     .then(temas => {
//       if (temas) {
//         temas.updatetemas(id, changes)
//           .then(updatedtemas => {
//          res.status(200).json(updatedtemas);
//         });
//       } else {
//         res.status(404).json({ message: "No tema with that id exists" });
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({ message: "Failed to update tema" });
//     })
// });

router.put("/:id", (req, res) => {
  dbConfig("temas")
    .where({ id: req.params.id })
    .update(req.body)
    .then((temas) => {
      res.status(200).json(temas);
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  temas
    .removetemas(id)
    .then((deleted) => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: "No temas with that id exists" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errorMessage: "Failed to delete temas. You done mest up" });
    });
});

router.post("/", (req, res) => {
  // implement registration
  let userData = req.body;

  temas
    .insert(userData)
    .then((user) => {
      res.status(200).json({
        message: "Thanks for posting temas!",
      });
    })
    .catch((err) => {
      res.status(500).json({ Error: "failed to retrieve database", err });
    });
});

module.exports = router;
