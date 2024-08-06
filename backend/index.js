const express = require("express")
const app = express()
const todos = require("./db/todo.js")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const JWT_SECRET = "Digvijay-Pawar"
//Middleware
const { inputValidation } = require("./middleware/todo.js")
const userMiddleware = require("./middleware/user.js")
app.use(express.json())
app.use(cors())


app.post('/signup', async (req, res)=>{
    const {username, password} = req.headers;

    const newUser = await User.create({
        username,
        password
    });
    newUser.save();

    res.json({
        msg: "User created."
    });
});

app.post('/signin', async (req, res)=>{
    const {username, password} = req.headers;

    const existingUser = await User.findOne({username, password});

    if (!existingUser){
        res.status(404).json({
            msg: "User not found"
        });
        return;
    }
    const token = jwt.sign({username}, JWT_SECRET);
    res.json({
        msg: token
    });

});

app.post("/todo", inputValidation, async (req, res) => {
    try {
        const { title, body } = req.body
        await todos.create({
            title,
            body
        })
        res.json({
            msg: "Todo Created."
        })
    }catch{
        res.json({
            msg: "Todo not created"
        })
    }
})

app.get("/todo", async (req, res, next) => {
    const completed = await todos.find({completed: "true"})
    const live = await todos.find({completed: "false"})
    // console.log(todo)
    res.json({
        completed: completed,
        live: live
    }) 
})

app.post("/completed", async (req, res)=>{
    const { id } = req.body
    await todos.findOneAndUpdate({
        _id: id
    },{
        completed: true
    }
    )
    res.json({
        msg: "todo completed"
    })
})

app.post("/delete", async (req, res)=>{
    const { id } = req.body
    await todos.findOneAndDelete({_id: id})
    res.json({
        msg: "To do Deleted"
    })
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})