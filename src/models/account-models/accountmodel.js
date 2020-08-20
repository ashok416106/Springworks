import mongoose from 'mongoose';
const schema = mongoose.Schema;
const accountSchema = new schema({
    username:  {type : String, required: true},
    email : {type : String, required: true},
    password: {type: String,required: true},
    createdDate : {type : Date}
    })
const accountmodel = mongoose.model('Accounts',accountSchema);
accountmodel.create = (body)=> {
    try {
     let result = accountmodel.create(body).then((data) =>{
        return data;
    }) 
    return result;  
    } catch (error) {    
       throw error;  
    }           
}


export default accountmodel;