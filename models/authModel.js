const mongoose = require('mongoose')

const authSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your name"]
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
              validator: function (value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
              },
              message: 'Invalid email address format',
            },
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Auth = mongoose.model('Auth', authSchema);

module.exports = Auth;