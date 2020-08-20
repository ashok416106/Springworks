import express from 'express';
 import bodyparser from 'body-parser';
 import session from 'express-session';
 import mongoose from 'mongoose';
 import router from './routers/router';
const app = express();
app.use(bodyparser.json())
app.use(express.static('public'))
mongoose.connect('mongodb://localhost:27017/springworks',{ useUnifiedTopology: true,useNewUrlParser: true  },function (err, result) {
    if(err){
    console.log(err)
    }
   console.log("successfully connected",result);
})

app.use('/',router)

export default app ;