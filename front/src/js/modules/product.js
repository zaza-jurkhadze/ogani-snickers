import axios from 'axios';


export default class product {
    constructor(id){
        this.id = id;
    }
    async getProduct(){
        try {
            const res = await axios(`http://127.0.0.1:3000/api/v1/chocolates/${this.id}`);
            this.name = res.data.data.chocResult.name;
            this.price = res.data.data.chocResult.price;
            this.description = res.data.data.chocResult.description;
            this.quantity = res.data.data.chocResult.quantity;
            this.weight = res.data.data.chocResult.weight;
            this.url = res.data.data.chocResult.imageCover;


        } catch (error) {
            alert('something went wrong :(')
        }
    }
}

