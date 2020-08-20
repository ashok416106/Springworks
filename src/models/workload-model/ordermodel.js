import mongoose from 'mongoose';
const schema = mongoose.Schema;
const orderSchema = new schema({
    inventoryid : {type : Number, required: true},
    productname: {type: String,required: true},
    quantity: {type: Number,required: true},
    userid : {type: Number,required: true},
    price : {type: Number,required: true},
    createdDate : {type : Date}
    })
const ordermodel = mongoose.model('orders',orderSchema);
ordermodel.create =  (req, body) =>{
    try {
     let result =  ordermodel.create(body).then((data) =>{
         return data;
     }) 
     return result;
    } catch (error) {    
       throw error;  
    }           
}


export default ordermodel;