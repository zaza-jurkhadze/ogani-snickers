export const elements = {
    searchForm: document.querySelector('.SEARCH'),
    searchInput: document.querySelector('.SEARCH-FIELD'),
    searchResList: document.querySelector('.SEARCH-RESULT'),
    mainPageMarkup: document.querySelector('.CATEGORIES'),
    getCategory: document.querySelector('.CATEGORY li'),
    paginatetion: document.querySelector('.SHOPINGPAGE'),
    contactMarkapPage: document.querySelector('.CONTACT'),
    resultSumPage: document.querySelector('.RESULT-SUM'),
    blogPage: document.querySelector('.BLOG'),
    shopGridPage: document.querySelector('.SHOP_GRID'),
    shopDetailPage: document.querySelector('.SHOP_DETAILS'),
    shopingVCartPage: document.querySelector('.SHOPING-CART'),
    checkOutPage: document.querySelector('.CHECKOUT'),
    blogDetailsPage: document.querySelector('.BLOG-DETAILS'),
}
 export const elementStrings = {
    loader: 'loader'
}
export const renderLoader = parent => {
    const loaderMarkup = `
    <div class="${elementStrings.loader}">
       <svg>
        <use href="img/icons.svg#icon-cw"></use>
       </svg>
    </div>

    `
    parent.insertAdjacentHTML('afterbegin', loaderMarkup);
};
export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if(loader) loader.parentElement.removeChild(loader);
} 