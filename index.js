const mongoose = require('mongoose')
const User = require('./User')

mongoose.connect('mongodb://127.0.0.1:27017/testdb')

const run = async() => {
    try{
        
        // const user = await User.create({
        //     name: "ahmad",
        //     age: 21,
        //     email: "umayer@gmail.com",
        //     address: {
        //         street: "Fatullah",
        //         city: "Dhaka"
        //     }
        // })

        // const user = new User({
        //     name: "umayer",
        //     age: 21,
        //     email: "umayer@gmail.com"
        // })
        // await user.save()

        // const user = await User.findById('6a40d6adadfa2d1f09d88955')
        // const user = await User.find({name: 'umayer'})
        // const user = await User.exists({name: 'umayer'})
        // const user = await User.deleteOne({name: 'umayer'})
        // const user = await User.where('age').gt(20).lt(35)
        // const user = await User.where('age').gt(20).lt(35).where('name').equals('ahmad')
        // const user = await User.where('age').gt(20).lt(35).where('name').equals('umayer')
        // .limit(5).select('name age')

        // const user = await User.findOne({name: 'umayer'})
        // user.bestFriend = '6a40d92ea5269dd53c6fa67d'
        // await user.save()

        // const user = await User.where('age').gt(20).lt(35).where('name').equals('umayer')
        // .limit(1).populate('bestFriend')

        // const user = await User.findOne({name: 'umayer'})
        // const friend = await User.findById(user.bestFriend)
        // user.bestFriend = friend

        // const user = await User.findOne({name: 'umayer'})
        // const user = await User.findByName('umayer')
        // const user = await User.find().byName('umayer')
        const user = await User.findOne({name: 'umayer'})

        console.log(user)
        // user.sayHi()
        console.log(user.nameEmail)
        // console.log(user.length)
        await user.save()
        console.log(user)
    }
    catch(e){
        console.log(e.message)
    }
}
run()











