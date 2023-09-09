const mongoose = require("mongoose")


const DB="mongodb+srv://avanibaheti7:12345@cluster0.ozgi15m.mongodb.net/Auyhusers?retryWrites=true&w=majority"
mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("DataBase Connected")).catch((errr)=>{
    console.log(errr);
})