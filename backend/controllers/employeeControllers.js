const EmpModel=require("../models/employeeModels")
 
const userRegistration=async(req,res)=>{
    const{name, email, password}=req.body;
    const empdata=await EmpModel.create({
        name:name,
        email:email,
        password:password
    })
    res.send("Succesfully Registered!!")
    console.log(empdata)
    

}
   const userLogin=async(req,res)=>{
    const {email,password}=req.body;
    const empdata=await EmpModel.find({email:email});
    if(empdata.length<1)
        {
        res.status(401).send("Inavalide Eamil!")
    }
    else
    {
        if(empdata[0].password!=password)
        {
        res.status(401).send("Invalide Credentails!");

        }
        else
        {
            res.status(200).send(empdata);
            
        }
    }
   }


module.exports={
    userRegistration,
    userLogin
}