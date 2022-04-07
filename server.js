const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const demoSchema = new mongoose.Schema({
    itemName : { type: String, required: true},
    itemID : { type: String, unique: true, required: true},
    catalogID : { type: String, type: Boolean, default: true},
    available : { type: Boolean, default: true},
    created_at: {timestamps: true},
    updated_at:{timestamps: true}

})
const DataEntry = new mongoose.model("DataEntry", demoSchema);
//creating document to insert
const createData =  DataEntry.create ({
    itemName: "Apple Mac",
    itemID: "2040404",
    catalogID: "fhsldfhslfdg3456",
    description: "Newly Launched",
    available: true,
    createData:created_at,
    createData:updated_at 
    
    

}) 
createData.save();
const app = express();


const PORT = process.env.PORT || 8000;

if(process.env.NODE_ENV !=='production') {
    require ('dotenv').config()
}

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello from express")
})


try{
    mongoose.connect(process.env.MONGO_DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('MongoDB Connected')
}catch (error){
    console.log('error')

}


app.listen(PORT, () =>{
    console.log('Listening on ${PORT}')
})