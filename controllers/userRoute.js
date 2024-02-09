const express = require("express")
const router = express.Router()
const userEnteryModel = require("../models/userEntryModel")
const bcrypt = require("bcryptjs")


hashPasswordGenerator = async(pass)=>{
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/signup",async(req,res)=>
{
    let{data}={"data":req.body}
    let password=data.password
    hashPasswordGenerator(password).then(
        (hashedPassword)=>{
            console.log(hashedPassword)
            data.password=hashedPassword
            console.log(data)

            let users = new  userEntryModel(data)
            let result = users.save()
            res.join({
                status:"success"
            })
        }
    )

})


module.exports=router