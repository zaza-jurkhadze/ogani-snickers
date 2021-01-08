class APIFeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filter(){
             //FILTERING
             const queryObj = {...this.queryString};
             const excludeFields = ['page','limit','sort','fields'];
             excludeFields.forEach(el => delete queryObj[el]);
            
                 //ADVENCES FILTERING
             let queryStr = JSON.stringify(queryObj);
             queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
             console.log(JSON.parse(queryStr));
     
             this.query =  this.query.find(JSON.parse(queryStr));

             return this;
    }
    sort(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy);
        }else{
            this.query = this.query.sort('price')
        }
        return this;
    }
    limitFields(){
        if(this.queryString.fields){
            const fields = this.queryString.fielfs.split(',').join(' ')
            this.query = this.query.select(fields);
        }else{
            this.query = this.query.select('-__v')
        }
        return this;
    }
    paginate(){
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 50;
        const skip = (page - 1) * limit; 

        this.query = this.query.skip(skip).limit(limit);
       /*  if(this.queryString.page){
            const numProducts = await this.query.countDocuments();
            if(skip >= numProducts) throw Error('this page does not exist');
        } */
        return this;
    }
    
}

module.exports = APIFeatures;