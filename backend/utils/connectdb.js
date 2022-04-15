import mongoose from 'mongoose'
import asyncHandler from 'express-async-handler'
import colors from 'colors'

const connectDB = asyncHandler(async (req , res) => {
    try {
        await mongoose.connect('mongodb+srv://prithivi:prithivi@cluster0.myqm7.mongodb.net/newbooking?retryWrites=true&w=majority' , { useUnifiedTopology: true , useNewUrlParser : true , useCreateIndex : true})
        console.log('SUCCESSFULLY TO CONNECTED DB'.blue.bold.underline)
    }
    catch (error){
        res.write('Mongo Not connecting')
        throw new Error(error);
    }
})

export default connectDB