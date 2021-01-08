import Search from './modules/search';
import Product from './modules/product';
import * as searchView from './views/searchView'
import * as productView from './views/productView'
import { elements,renderLoader,clearLoader } from './views/base';




const state = {};


/* SEARCH CONTROLER */
const controlSearch = async () => {
    //1 get query from view

    const query = searchView.getInput();
    console.log(query);
    if(query){
        //2 new search object and add to state
        state.search = new Search(query);

        //3 prepare UI for results
        searchView.clearInput();
        searchView.clearResults()
        renderLoader(elements.searchResList);
        try {
        //4 search for products
        await state.search.getResults();

        //5 render results on UI
        clearLoader();
        searchView.renderResults(state.search.result);
        } catch (error) {
            clearLoader();
            alert('something went wrong with the search :(')
        }
     
    }
};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

const controlCategory = async () => {
    //1 get query from view

    let query = searchView.getcateg();
          console.log(query);
    
    if(query){
        //2 new search object and add to state
        state.search = new Search(query);

        //3 prepare UI for results
        searchView.clearInput();
        searchView.clearResults()
        renderLoader(elements.searchResList);
        try {
        //4 search for products
        await state.search.getResults();

        //5 render results on UI
        clearLoader();
        searchView.renderResults(state.search.result);
        } catch (error) {
            clearLoader();
            alert('something went wrong with the search :(')
        }
       
    }
  
};
 
elements.getCategory.addEventListener('click', e => {
    e.preventDefault();
    controlCategory();
});

elements.contactMarkapPage.addEventListener('click', e => {
    e.preventDefault();
    searchView.clearMainPage();
    searchView.renderContactPage();
    searchView.clearPagination();
    searchView.clearSumRes();
});
elements.blogPage.addEventListener('click', e => {
    e.preventDefault();
    searchView.clearMainPage();
    searchView.renderBlogPage();
    searchView.clearPagination();
    searchView.clearSumRes();

});
elements.shopGridPage.addEventListener('click', e => {
    e.preventDefault();
    searchView.clearMainPage();
    searchView.renderShopGridPage();
    searchView.clearPagination();
    searchView.clearSumRes();

});
/* elements.shopDetailPage.addEventListener('click', e => {
    e.preventDefault();
    searchView.clearMainPage();
    searchView.renderShopDetailPage();
    searchView.clearPagination();
    searchView.clearSumRes();

}); */
elements.shopDetailPage.addEventListener('click', e => {
    e.preventDefault();
    searchView.clearMainPage();
    productView.renderProduct(state.product);
    searchView.clearPagination();
    searchView.clearSumRes();

}); 

elements.shopingVCartPage.addEventListener('click', e => {
    e.preventDefault();
    searchView.clearMainPage();
    searchView.renderShopingCartPage();
    searchView.clearPagination();
    searchView.clearSumRes();

});
elements.checkOutPage.addEventListener('click', e => {
    e.preventDefault();
    searchView.clearMainPage();
    searchView.renderCheckOutPage();
    searchView.clearPagination();
    searchView.clearSumRes();

});
elements.blogDetailsPage.addEventListener('click', e => {
    e.preventDefault();
    searchView.clearMainPage();
    searchView.renderBlogDetailsPage();
    searchView.clearPagination();
    searchView.clearSumRes();

});
elements.paginatetion.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if(btn){
        const goToPage = +btn.dataset.goto;
        searchView.clearResults();
        searchView(searchView.renderResults(state.search.result, goToPage));
    }

});


 
       

/* let items = document.querySelectorAll('.CATEGORY li');
let tab = [];

for(var i = 0; i <= items.length; i++){
    tab.push(items[i]);
    tab[i].onclick = function(){
   
        const query = this.innerText
        
        console.log(query);
        
        
    }

}  */
    
/* PRODUCT CONTROLER */

const controlProduct = async () => {

    //get id from url
    const id = window.location.hash.replace('#', '');
    console.log(id);

    if(id){
        //prepare UI for change


        //create new product obj
        state.product = new Product(id);

        try {
        //get product information
        await state.product.getProduct();

        //render  UI
        console.log(state.product);
        } catch (error) {
           alert('Error processing product! :(') 
        }
       
    }
}
/* 
window.addEventListener('hashchange', controlProduct);
window.addEventListener('load', controlProduct); */



['hashchange','load'].forEach(event => window.addEventListener(event, controlProduct));