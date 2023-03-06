var express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
//var random = require('random');

mongoose.connect('mongodb+srv://anshikaagarwal92:Geeks123@cluster0.pdbmw9c.mongodb.net/?retryWrites=true&w=majority')

var app = express();

var db = mongoose.connection;

db.on('error', () => {
    console.log('Unable to connect to database');
})

db.once('open', () => {
    console.log("Connection Successful");
})

app.use(bodyParser.json());

// const users = [
//     {id: 1, name: 'Rahul', age: '34'},
//     {id: 2, name: 'Ravi', age: '23'},
//     {id: 3 , name: 'Anshul', age: '31'},
//     {id: 4 , name: 'Ankit', age: '15'},
// ];

app.listen(8000, () =>{
    console.log("Your server is running on port 8000");
})

// app.get("/", (req, res) => {
//     console.log(req.body);
//     res.send("Hello");
// })

// app.get("/api/users", (req, res) => {
//     res.json(users);
// })

// app.get("/api/users/:id", (req, res) => {
//     const id = req.params.id;
//     const user = users.find(user => user.id == id);

//     if (!user) {
//         res.status(404).json({message: "User does not exist"});
//     }
//     res.send(user);
// });

// //create a new user
// app.post('/api/users', (req, res) => {

//     const name = req.body.name;
//     const age = req.body.age;

//     const user = {name: name, age: age, id: Math.random() * 10000 };

//     users.push(user);

//     res.json(user);
// });

// //update user by id

// app.put("/api/users/:id", (req, res) => {

//     const id = req.params.id;
//     const user = users.find(user => user.id == id);

//     if (!user) {
//         res.status(404).send({message: "Invalid User Id"});
//     }

//     const keys =  Object.keys(req.body);

//     keys.forEach(key => {
//         if(!user[key]) {
//             res.status(404).send({message: "Invalid details passed in body"});
//         }

//         user[key] = req.body[key];
//     })

//     res.send(user);
// })

// // delete user by id

// app.delete("/api/users/:id", (req, res) => {

//     const id = req.params.id;

//     console.log(id);
//     const user = users.find(user => user.id == id);

//     if (!user) {
//         res.status(404).send({message: "Invalid User Id"});
//     }

//     var filteredUsers = users.filter(user => user.id != id);
//     res.send(filteredUsers);
// })

const blogSchema = mongoose.Schema({
    title:  String, // String is shorthand for {type: String}
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
  });

const Blog = mongoose.model('Blog', blogSchema);

// POST    Create a blog     /api/blogs
// GET     Get blogs         /api/blogs
// GET     Get blog by id    /api/blogs/:id
// PUT     Update blog by id /api/blogs/:id
// DELETE  delete blog by id /api/blobs/:id

app.post("/api/blogs", (req, res) => {

    const {title, author, body, comments, meta} = req.body;
    const newblog = new Blog({title, author, body, comments, meta});

    newblog.save()
    .then(data => {
        if (!data) {
            res.status(400).send({message: "something went wrong"})
        }
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({message: "server not available"})
    })
})

app.get("/api/blogs", (req, res) => {
    Blog.find()
    .then(data => {
        if (!data) {
            res.status(400).send({message: "something went wrong"})
        }
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({message: err})
    })
})

app.get('/api/blogs/:id', (req, res) => {

    var _id = req.params.id;
    Blog.find({_id})
    .then(data => {
        if (!data) {
            res.status(400).send({message: "something went wrong"})
        }
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({message: err})
    })
})

app.put('/api/blogs/:id', (req, res) => {

    var _id = req.params.id;

    console.log(_id);
    Blog.findByIdAndUpdate(_id, { author: 'jason bourne' }, {})
    .then(data => {
        if (!data) {
            res.status(400).send({message: "something went wrong"})
        }
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({message: err})
    })
})

app.delete('/api/blogs/:id', (req, res) => {

    var _id = req.params.id;

    console.log(_id);
    Blog.findByIdAndRemove(_id, {})
    .then(data => {
        if (!data) {
            res.status(400).send({message: "something went wrong"})
        }
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({message: err})
    })
})





