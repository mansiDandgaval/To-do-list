const router = require("express").Router();
const Todo = require("../models/Todo");

// routes
router
  .post("/add/todo", (req, res) => {
    const { todo, desc, date } = req.body;
    const newTodo = new Todo({ todo, desc, date });

    // save the todo
    newTodo
      .save()
      .then(() => {
        console.log("Successfully added todo!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  })


  .get("/delete/todo/:_id", (req, res) => {
    const { _id } = req.params;
    Todo.deleteOne({ _id })
      .then(() => {
        console.log("Deleted Todo Successfully!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  });

  router.get("/edit/todo/:_id", async(req, res) => {
    const { _id } = req.params;

    const editone = await Todo.findOne({'_id':_id});
    res.render("index", {edit: editone})
})

  
  router.post("/edit/todo", (req, res) => {
    const { hid, todo, desc, date } = req.body;
    var myquery = { _id: hid };
    var newvalues = { $set: {todo: todo, desc: desc, date: date}};
    Todo.updateOne(myquery, newvalues)
      .then(() => {
        console.log("Deleted Todo Successfully!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));

    console.log("hgvjbk")
  });
module.exports = router;
