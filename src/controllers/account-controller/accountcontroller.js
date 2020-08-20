import accountmodel from '../../models/usermodels/Accountmodel'

export default class Usercontroller {
    constructor(){
    }
    createUser(req , res) {
        try {
            const body = req.body;
            const data =  accountmodel.create(body).then((data) =>{
                return data;
            }) 
            return data;
        } catch (error) {
            return error;
        }

    }
}



