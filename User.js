const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
})

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            min: 10,
            max: 31,
            validate: {
                validator: v => v%2 === 1,
                message: e => `${e.value} is not an even number`
            }
        },
        email: {
            type: String,
            required: true,
            minLength: 10,
            // lowercase: true,
            // uppercase: true,
        },
        bestFriend: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "User"
        },
        hobies: [String],
        address: addressSchema,
    },
    {
        timestamps: true,
        // versionKey: false,
        strict: true
    }
)

userSchema.methods.sayHi = function () {
    console.log(`Hi . My name is ${this.name}`)
}

// userSchema.statics.findByName = function(name) {
//     return this.where({
//         name: new RegExp(name, 'i')
//     })
// }

userSchema.statics.findByName = function(name) {
    return this.find({
        name: new RegExp(name, 'i')
    })
}

userSchema.query.byName = function(name) {
    return this.where({
        name: new RegExp(name, 'i')
    })
}

userSchema.virtual('nameEmail').get(function () {
    return `${this.name} <${this.email}>`
})

userSchema.pre('save', async function () {
    this.email = this.email.toUpperCase()
    console.log('Before Save')
})

userSchema.post('save', async function(doc) {
    doc.sayHi()
    console.log('After Saved')
})

// pre("save")       // save() এর আগে
// post("save")      // save() এর পরে

// pre("validate")   // validation-এর আগে
// post("validate")  // validation-এর পরে

// pre("deleteOne")  // delete-এর আগে
// post("deleteOne") // delete-এর পরে

module.exports = mongoose.model("User", userSchema)



