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
            lowercase: true,
            // uppercase: true,
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

module.exports = mongoose.model("User", userSchema)