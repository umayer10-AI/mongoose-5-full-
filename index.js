const mongoose = require('mongoose')
const User = require('./User')

mongoose.connect('mongodb://127.0.0.1:27017/testdb')

const run = async() => {
    try{
        
        const user = await User.create({
            name: "umayer",
            age: 21,
            email: "umayer@gmail.com",
            address: {
                street: "Fatullah",
                city: "Dhaka"
            }
        })

        // const user = new User({
        //     name: "umayer",
        //     age: 21,
        //     email: "umayer@gmail.com"
        // })
        // await user.save()

        console.log("Save")
    }
    catch(e){
        console.log(e.message)
    }
}
run()