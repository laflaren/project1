var express = require("express");
var router = express.Router();
const db = require("../model/helper");
// CRUD Create/Post, Read/Get, Update/Put, Delete
router.get("/", (req, res) => {
  res.send("Welcome to the API");
});

router.get("/todos", (req, res) => {
  // Send back the full list of items
  db("SELECT * FROM items ORDER BY id ASC;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.post("/todos", (req, res) => {
  // The request's body is available in req.body
  // If the query is successfull you should send back the full list of items
  db(`INSERT into items (text, complete) values("${req.body.text}", 0);`)
    .then(ignoredResults => {
      //
      db("SELECT * FROM items ORDER BY id ASC;")
        .then(results => {
          res.send(results.data);
        })
        .catch(err => res.status(500).send(err));
    })
    .catch(err => res.status(500).send(err));
});
router.put("/todos/:id", (req, res) => {
  // The request's body is available in req.body
  // URL params are available in req.params
  // If the query is successfull you should send back the full list of items
  console.log(req.body);
  db(
    `UPDATE items SET complete=${req.body.complete} WHERE id=${req.params.id};`
  ).then(result => {
    if (result === 0) {
      return res.status(404).send("Not found. Does not exist... yet.");
    }
    db("SELECT * FROM items ORDER BY id ASC;")
      .then(results => {
        res.send(results.data);
      })
      .catch(err => res.status(500).send(err));
  });
});

router.delete("/todos/:id", (req, res) => {
  // URL params are available in req.params
  // Add your code here
  console.log("***********", req.params);
  // const index = data.findIndex(e => +e.id === +req.params.id);
  // if (index < 0) {
  //   return res.status(404).send("Not found. Does not exist... yet.");
  // }
  // data.splice(index, 1);
  db(`DELETE FROM items WHERE id=${req.params.id};`).then(result => {
    if (result === 0) {
      return res.status(404).send("Not found. Does not exist... yet.");
    }
    db("SELECT * FROM items ORDER BY id ASC;")
      .then(results => {
        res.send(results.data);
      })
      .catch(err => res.status(500).send(err));
  });
});

module.exports = router;
