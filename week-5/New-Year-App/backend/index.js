const express = require("express");
const cors = require('cors')

const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You send the wrong inputs",
    });
    return;
  }

  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
  });

  res.json({
    msg: 'Todo created successfully'
  })

});

app.get("/todo", async(req, res) => {
    const todos = await todo.find();

    res.json({
        todos: todos
    })
});


app.put("/completed", async(req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You send the wrong inputs",
    });
    return;
  }

  await todo.update({
    _id: req.body.id
  }, {
    completed: true
  })
  

  res.json({
    msg: "Todo marked as completed"
  })
});

// app.put('/todos/:todoId', (req, res) => {

// })
// app.delete('/todos/:todoId', (req, res) => {

// })


app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`)
})