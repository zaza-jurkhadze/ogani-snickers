const Choco = require('../models/chocoModel');
const APIFeatures = require('../utilis/APIFeatures');

exports.latestProduct = (req,res,next) => {
    req.query.limit = '5';
    req.query.sort = '-createdAt';

    next();
}



exports.getAllChocolate = async (req,res) => {
    try {
      
        //EXECUTE QUERY
        const features = new APIFeatures(Choco.find(), req.query).filter().sort().limitFields().paginate();
        const chocolates = await features.query;


        //SEND RESPONSE

         console.log(req.requestTime);
    res.status(200).json({
        status: "success",
        results: chocolates.length,
        requestedAt: req.requestTime,
        data: {

            chocolates
        }
    }); 
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        });
    };
    
   
};


/* exports.checkID = (req,res,next,val) => {
    console.log(val);
    if(req.params.id * 1 > chocolates.length){
        return res.status(404).json({ 
            status: 'fail',
            message: 'invalid id'
        });
       
    }
     next();
} */
exports.getChocolate = async (req,res) => {
   
   try {
       const chocResult = await Choco.findById(req.params.id);
       res.status(200).json({
        status: "success",
        data: {
            chocResult
        
        }
    }); 
   } catch (error) {
       res.status(404).json({
        status: 'fail',
        message: error
       });
   }
    
};
exports.createChocolate = async (req,res) => {

    try {
    const newChoco = await Choco.create(req.body);
       res.status(201).json({
    status: "succes",
     data: {
        chocolate: newChoco
    } 
});
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        });
    }
}; 
exports.updateChocolate = async (req,res) => {
    try {
           const chocos = await Choco.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators:true
    });
    

    res.status(200).json({
        status: "succes",
         data: {
         chocos
        } 
    });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        });
    }
 
};

exports.deleteChocolate = async (req,res) => {
    try { 
        await Choco.findByIdAndDelete(req.params.id);
    res.status(204).json({
        status: "succes",
        data: null
    });
        
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        })
    }
    

};
