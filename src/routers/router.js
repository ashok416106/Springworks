import express from 'express';
var router  =  express.Router();
import  Usercontroller from '../controllers/account-controller/accountcontroller';
var Uc = new  Usercontroller();
router.post('/api/account/create',function (req, res) {
 Uc.createUser(req, res).then((data) =>{
    res.send(data);
}).catch((error)=>{
 res.send(error)
})
})


export default router;