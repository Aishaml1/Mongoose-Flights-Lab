import mongoose from "mongoose"

// Everything in Mongoose starts with a Schema.
// Each schema maps to a MongoDB collection and defines the shape of 
// the documents within that collection.

const Schema = mongoose.Schema

const ticketSchema = new Schema({
    seat: { type: String, match: /[A-F][1-9]\d?/ },
    price: {
        type: Number,
        min: 0
    }
}, {
    timestamps: true
})

const flightSchema = new Schema({
    airline: {
        type: String,
        required: true,
        enum: ['American', 'Southwest', 'United'],
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN',
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function () {
            return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        }
        },
        tickets: [ticketSchema],
        destinations:[{type: Schema.Types.ObjectId, ref: "Destinations"}],
}, {

    timestamps: true
})




const Flight = mongoose.model("Flight", flightSchema)

export {
    Flight
}