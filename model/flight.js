import mongoose from "mongoose"

// Everything in Mongoose starts with a Schema.
// Each schema maps to a MongoDB collection and defines the shape of 
// the documents within that collection.

const Schema = mongoose.Schema

const flightSchema = new Schema ({
airline:{
type: String,
enum:['American','Southwest', 'United'],
},
airport:{
type: String,
enum:['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
default:'DEN'
},
flightNo: {
type: Number,
min:10,
max: 9999
},
departs: {
type: Date, 
default:function() {
    return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
}
} 
})

const Flight = mongoose.model("Flight", flightSchema)

export {
    Flight
}