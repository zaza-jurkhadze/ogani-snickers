import axios from 'axios';


export default class Search {
    constructor(query, sort){
        this.query = query;
       
    }
    async getResults(){
        try {
              const res = await axios(`http://127.0.0.1:3000/api/v1/chocolates?category=${this.query}&sort=price`);
              this.result = res.data.data.chocolates;
           
        } catch (error) {
            alert(error);
        }
   
    }
}

