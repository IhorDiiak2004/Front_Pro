
const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const TodoModel = require("./mongo/todo.model");

const connect = mongoose.connect("mongodb+srv://ihordiiakfi2022_db_user:4Bk2ktFIDZ5K2tc6@cluster0.tovo9hc.mongodb.net/?appName=Cluster0");
connect.then(() => console.log("DB connected!"));

app.use(cors());
app.use(express.json());

app.listen(8080, () => {
    console.log('Server is running on localhost:8080...')
})

app.get('/', (req, res) => {
    res.send({
        name: 'Test'
    });
})

// let todos = [{
//     id: 12533425,
//     text: 'Learn NodeJS',
//     checked: false,
// }]

app.get("/todos", (request, response) => {
    // response.send(todos);

    TodoModel.find().then((data) => response.send(data));
});

app.post("/todos", (request, response) => {
    
//   todos.push({
//       ...request.body,
//       id: +new Date()
//   });
//   response.send(todos);

    const todo = new TodoModel(request.body);
    todo.save().then((data) => response.send(data));
});

app.delete("/todos/:id", (request, response) => {
  const id = request.params.id;

//   todos = todos.filter(todo => todo.id !== +id);
//   response.send(todos);

   TodoModel.deleteOne({ _id: id }).then((data) => {
       if (!data.deletedCount) {
         response.status(404).send({ message: "Todo were not found" });
       } else {
         response.send(data);
       }
     });
});

app.put("/todos/:id", (request, response) => {
  const id = request.params.id;

//   todos = todos.map(todo => {
//       if(todo.id === +id) {
//           return {
//               ...todo,
//               ...request.body
//           }
//       }
//       return todo
//   })

//   response.send(todos);
  TodoModel.updateOne({ _id: id }, request.body).then((data) =>
    response.send(data)
  );
});