const zod = require("zod")

const titleSchema = zod.string()
const bodySchema = zod.string()
const idSchema = zod.object({
    _id: zod.string()
})


function inputValidation(req, res, next){
    const { title, body } = req.body
    const parseTitle = titleSchema.safeParse(title) 
    const parseBody = bodySchema.safeParse(body)
    if(parseBody.success && parseTitle.success){
        next()
        return 
    }
    res.json({
        msg: "Invalid input"
    })
}

function idValidation(req, res, next){
    const id = req.headers
    const parseid = idSchema.safeParse(id)
    if(parseid.success){
        next()
        return
    }
    res.json({
        msg: "Invalid input"
    })
}


module.exports = {
    inputValidation,
    idValidation
}