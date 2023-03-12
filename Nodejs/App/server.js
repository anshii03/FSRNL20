var express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const dbConfigs = require("./config/db.config");

mongoose.connect(dbConfigs.url)

var app = express();

app.use(cors());

var db = mongoose.connection;

db.on('error', () => {
    console.log('Unable to connect to database');
})

db.once('open', () => {
    console.log("Connection Successful");
})

app.use(bodyParser.json());

app.listen(8000, () => {
    console.log("Your server is running on port 8000");
})

require('./Routes/books.routes')(app);
require('./Routes/users.routes')(app);


// const blogSchema = mongoose.Schema({
//     title: String, // String is shorthand for {type: String}
//     author: String,
//     body: String,
//     comments: [{ body: String, date: Date }],
//     date: { type: Date, default: Date.now },
//     hidden: Boolean,
//     meta: {
//         votes: Number,
//         favs: Number
//     }
// });

// const Blog = mongoose.model('Blog', blogSchema);

// POST    Create a blog     /api/blogs
// GET     Get blogs         /api/blogs
// GET     Get blog by id    /api/blogs/:id
// PUT     Update blog by id /api/blogs/:id
// DELETE  delete blog by id /api/blobs/:id

// app.post("/api/blogs", (req, res) => {

//     const { title, author, body, comments, meta } = req.body;
//     const newblog = new Blog({ title, author, body, comments, meta });

//     newblog.save()
//         .then(data => {
//             if (!data) {
//                 res.status(400).send({ message: "something went wrong" })
//             }
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({ message: "server not available" })
//         })
// })

// app.get("/api/blogs", (req, res) => {
//     Blog.find()
//         .then(data => {
//             if (!data) {
//                 res.status(400).send({ message: "something went wrong" })
//             }
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({ message: err })
//         })
// })

// app.get('/api/blogs/:id', (req, res) => {

//     var _id = req.params.id;
//     Blog.find({ _id })
//         .then(data => {
//             if (!data) {
//                 res.status(400).send({ message: "something went wrong" })
//             }
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({ message: err })
//         })
// })

// app.put('/api/blogs/:id', (req, res) => {

//     var _id = req.params.id;

//     console.log(_id);
//     Blog.findByIdAndUpdate(_id, { author: 'jason bourne' }, {})
//         .then(data => {
//             if (!data) {
//                 res.status(400).send({ message: "something went wrong" })
//             }
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({ message: err })
//         })
// })

// app.delete('/api/blogs/:id', (req, res) => {

//     var _id = req.params.id;

//     console.log(_id);
//     Blog.findByIdAndRemove(_id, {})
//         .then(data => {
//             if (!data) {
//                 res.status(400).send({ message: "something went wrong" })
//             }
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({ message: err })
//         })
// })





