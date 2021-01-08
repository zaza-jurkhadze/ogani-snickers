import Search from '../modules/search';
import { elements } from './base';
export const getInput = () => elements.searchInput.value;
export const clearInput = () => elements.searchInput.value = '';
export const clearMainPage = () => elements.mainPageMarkup.innerHTML = '';
export const clearResults = () => {
    elements.searchResList.innerHTML = '';
    elements.paginatetion.innerHTML = '';
};
export const getcateg = () => elements.getCategory.textContent;
export const clearPagination = () => elements.paginatetion.innerHTML = '';
export const clearSumRes = () => elements.resultSumPage.innerHTML = '';
const renderProduct = chocolates => {
    const resultMarkup = `
<div class="filter__item">
    <div class="row">
        <div class="col-lg-4 col-md-5">
            <div class="filter__sort">
                <span>დალაგება</span>
                <select>
                    <option value="0">ფასი</option>
                    <option value="0">წონა</option>
                </select>
            </div>
        </div>
        <div class="col-lg-4 col-md-4">
            <div class="filter__found">
                <h6>ნაპოვნია   <span>9</span>   პროდუქტი </h6>
            </div>
        </div>
        
    </div>
</div>
    `;
    elements.resultSumPage.innerHTML = resultMarkup;

    const markup = `
    
    <div class="col-lg-3 col-md-4 col-sm-6 mix chocolate">
     <div class="featured__item">
        <div class="featured__item__pic set-bg" data-setbg="${chocolates.imageCover}" style="background-image: url(${chocolates.imageCover});">
            <ul class="featured__item__pic__hover">
                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                <li><a href="#${chocolates._id}"><i class="fa fa-retweet"></i></a></li>
                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
            </ul>           
        </div>
        <div class="featured__item__text">
            <h6><a href="#${chocolates._id}">${chocolates.name}</a></h6>
            <h5>${chocolates.price}  ლ </h5>
        </div>
     </div>
    </div>
          
    `;
    elements.searchResList.insertAdjacentHTML('beforeend', markup);

};


const  createBurtton = (page, type) => `

<button class="btn-inline results__btn--${type}" data-goto="${type == 'prev' ? page - 1: page + 1 }">
    <span>Page ${type == 'prev' ? page - 1: page + 1 }</span>
    <svg class="search__icon">
        <use href="img/icons.svg#icon-triangle-${type == 'prev'?'left':'right' }"></use>
    </svg>
</button>
   
`;

 const renderButtons = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage)


    let button;
    if(page == 1 && pages > 1){
       button = createBurtton(page,'next');
    }else if(page < pages){
        button = `
        ${createBurtton(page,'prev')}
        ${createBurtton(page,'next')}
        `;
    }else if(page == pages && pages > 1){
       button = createBurtton(page, 'prev');
    }
    elements.paginatetion.insertAdjacentHTML('afterbegin', button);

}; 

export const renderResults =  (chocolates, page = 1, resPerPage = 3) => {
    //render rtesults 
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage
    chocolates.slice(start,end).forEach(renderProduct);
   // render pagination
   renderButtons(page, chocolates.length, resPerPage)
};




export const renderContactPage = () => {
    const contactMarkup = `
    <section class="breadcrumb-section set-bg" data-setbg="img/background.jpeg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="breadcrumb__text">
                        <h2>დაგვიკავშირდით</h2>
                        <div class="breadcrumb__option">
                            <a href="./index.html">მთავარი</a>
                            <span>კონტაქტი</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Breadcrumb Section End -->
    <!-- Contact Section Begin -->
    <section class="contact spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div class="contact__widget">
                        <span class="icon_phone"></span>
                        <h4>ტელეფონი</h4>
                        <p>+995595531007</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div class="contact__widget">
                        <span class="icon_pin_alt"></span>
                        <h4>მისამართი</h4>
                        <p>თბილისი ბელიაშვილის 95</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div class="contact__widget">
                        <span class="icon_clock_alt"></span>
                        <h4>გახსნის დრო</h4>
                        <p>10:00 დან 23:00 მდე</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                    <div class="contact__widget">
                        <span class="icon_mail_alt"></span>
                        <h4>Email</h4>
                        <p>mars@master-trade.ge</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Contact Section End -->

    <!-- Map Begin -->
    <div class="map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7230.481041516833!2d42.71713552541271!3d42.24651386601116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405c8d098cd6102f%3A0xe31530a53687e6d4!2sRERO%20music-hall!5e0!3m2!1ska!2sge!4v1606415493407!5m2!1ska!2sge" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"
            height="500" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        <div class="map-inside">
            <i class="icon_pin"></i>
            <div class="inside-widget">
                <h4>ქუთაისი</h4>
                <ul>
                    <li>ტელეფონი: +995599181919</li>
                    <li>მის: საქართველო ქუთაისი გრ.აბაშიძის 5</li>
                </ul>
            </div>
        </div>
    </div>
    <!-- Map End -->

    <!-- Contact Form Begin -->
    <div class="contact-form spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="contact__form__title">
                        <h2>დატოვეთ შეტყობინება</h2>
                    </div>
                </div>
            </div>
            <form action="#">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <input type="text" placeholder="თქვენი სახელი">
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <input type="text" placeholder="თქვენი Email">
                    </div>
                    <div class="col-lg-12 text-center">
                        <textarea placeholder="შეტყობინება"></textarea>
                        <button type="submit" class="site-btn">გაგზავნეთ შეტყობინება</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    `
    elements.searchResList.innerHTML = contactMarkup;

};
export const renderBlogPage = () => {
    const blogMarkup = `
    <section class="blog spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-5">
                <div class="blog__sidebar">
                    <div class="blog__sidebar__search">
                        <form action="#">
                            <input type="text" placeholder="ძებნა...">
                            <button type="submit"><span class="icon_search"></span></button>
                        </form>
                    </div>
                    <div class="blog__sidebar__item">
                        <h4>კატეგორია</h4>
                        <ul>
                            <li><a href="#">ყველა</a></li>
                            <li><a href="#">შოკოლადის ნამცხვარი</a></li>
                            <li><a href="#">მარწყვის ტორტი</a></li>
                        
                    </div>
                    
                   
                </div>
            </div>
            <div class="col-lg-8 col-md-7">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6">
                        <div class="blog__item">
                            <div class="blog__item__pic">
                                <img src="img/blog/blog-2.jpg" alt="">
                            </div>
                            <div class="blog__item__text">
                                <ul>
                                    <li><i class="fa fa-calendar-o"></i>  4 მაისი 2019</li>
                                    <li><i class="fa fa-comment-o"></i> 5</li>
                                </ul>
                                <h5><a href="https://gemrielia.ge/recipe/2074-moamzadeT-Sokoladi-saxlSi-10-wuTSi/" target="blank"> შოკოლადის მომზადება სახლის პირობებში</a></h5>
                               
                                <a href="https://gemrielia.ge/recipe/2074-moamzadeT-Sokoladi-saxlSi-10-wuTSi/" target="blank" class="blog__btn">მეტის ნახვა <span class="arrow_right"></span></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6">
                        <div class="blog__item">
                            <div class="blog__item__pic">
                                <img src="img/blog/blog-3.jpg" alt="">
                            </div>
                            <div class="blog__item__text">
                                <ul>
                                    <li><i class="fa fa-calendar-o"></i>11 ივლისი 2019</li>
                                    <li><i class="fa fa-comment-o"></i> 5</li>
                                </ul>
                                <h5><a href="http://mzareuli.info/deserti/529" target="blank">თავად მოამზადე თეთრი შოკოლადის ფილა</a></h5>
                                
                                <a href="http://mzareuli.info/deserti/529" target="blank" class="blog__btn">მეტის ნახვა <span class="arrow_right"></span></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6">
                        <div class="blog__item">
                            <div class="blog__item__pic">
                                <img src="img/blog/blog-1.jpg" alt="">
                            </div>
                            <div class="blog__item__text">
                                <ul>
                                    <li><i class="fa fa-calendar-o"></i> 4 სექტემბერი 2020</li>
                                    <li><i class="fa fa-comment-o"></i> 5</li>
                                </ul>
                                <h5><a href="http://www.gurmania.ge/geo/main/index/84" target="blank">უგემრიელესი შოკოლადის ნამცხვრის რეცეპტი</a></h5>
                              
                                <a href="http://www.gurmania.ge/geo/main/index/84" target="blank" class="blog__btn">მეტის ნახვა <span class="arrow_right"></span></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6">
                        <div class="blog__item">
                            <div class="blog__item__pic">
                                <img src="img/blog/blog-4.jpg" alt="">
                            </div>
                            <div class="blog__item__text">
                                <ul>
                                    <li><i class="fa fa-calendar-o"></i> 24 აგვისტო 2019</li>
                                    <li><i class="fa fa-comment-o"></i> 5</li>
                                </ul>
                                <h5><a href="http://gastronomia.ge/%E1%83%9B%E1%83%90%E1%83%A0%E1%83%AC%E1%83%A7%E1%83%95%E1%83%98%E1%83%A1-%E1%83%A2%E1%83%9D%E1%83%A0%E1%83%A2%E1%83%98%E1%83%A1-%E1%83%9B%E1%83%90%E1%83%A0%E1%83%A2%E1%83%98%E1%83%95%E1%83%98/" target="blank">მარწყვის ტორტი</a></h5>
                      
                                <a href="http://gastronomia.ge/%E1%83%9B%E1%83%90%E1%83%A0%E1%83%AC%E1%83%A7%E1%83%95%E1%83%98%E1%83%A1-%E1%83%A2%E1%83%9D%E1%83%A0%E1%83%A2%E1%83%98%E1%83%A1-%E1%83%9B%E1%83%90%E1%83%A0%E1%83%A2%E1%83%98%E1%83%95%E1%83%98/" target="blank" class="blog__btn">მეტის ნახვა <span class="arrow_right"></span></a>
                            </div>
                        </div>
                    </div>
    `;
    elements.searchResList.innerHTML = blogMarkup;
};
export const renderShopGridPage = () => {
    const shopGridMarkup = `
    <section class="product spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-5">
                <div class="sidebar">
                    <div class="sidebar__item">
                        <h4>კატეგორია</h4>
                        <ul>
                            <li><a href="#">შოკოლადი</a></li>
                            <li><a href="#">საღეჭი რეზინი</a></li>
                            <li><a href="#">ცხოველთა კვება</a></li>
                            <li><a href="#">ხილის დრაჟე</a></li>
                            
                        </ul>
                    </div>
                    <div class="sidebar__item">
                        <h4>ფასი</h4>
                        <div class="price-range-wrap">
                            <div class="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                data-min="10" data-max="540">
                                <div class="ui-slider-range ui-corner-all ui-widget-header"></div>
                                <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span>
                                <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span>
                            </div>
                            <div class="range-slider">
                                <div class="price-input">
                                    <input type="text" id="minamount">
                                    <input type="text" id="maxamount">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sidebar__item sidebar__item__color--option">
                        <h4>ფერები</h4>
                        <div class="sidebar__item__color sidebar__item__color--white">
                            <label for="white">
                                თეთრი
                                <input type="radio" id="white">
                            </label>
                        </div>
                        <div class="sidebar__item__color sidebar__item__color--gray">
                            <label for="gray">
                                ნაცრისფერი
                                <input type="radio" id="gray">
                            </label>
                        </div>
                        <div class="sidebar__item__color sidebar__item__color--red">
                            <label for="red">
                                წითელი
                                <input type="radio" id="red">
                            </label>
                        </div>
                        <div class="sidebar__item__color sidebar__item__color--black">
                            <label for="black">
                                შავი
                                <input type="radio" id="black">
                            </label>
                        </div>
                        <div class="sidebar__item__color sidebar__item__color--blue">
                            <label for="blue">
                                ლურჯი
                                <input type="radio" id="blue">
                            </label>
                        </div>
                        <div class="sidebar__item__color sidebar__item__color--green">
                            <label for="green">
                                მწვანე
                                <input type="radio" id="green">
                            </label>
                        </div>
                    </div>
                    <div class="sidebar__item">
                        <h4> ზომა</h4>
                        <div class="sidebar__item__size">
                            <label for="large">
                                დიდი
                                <input type="radio" id="large">
                            </label>
                        </div>
                        <div class="sidebar__item__size">
                            <label for="medium">
                                საშუალო
                                <input type="radio" id="medium">
                            </label>
                        </div>
                        <div class="sidebar__item__size">
                            <label for="small">
                                პატარა
                                <input type="radio" id="small">
                            </label>
                        </div>
                        <div class="sidebar__item__size">
                            <label for="tiny">
                                თხელი
                                <input type="radio" id="tiny">
                            </label>
                        </div>
                    </div>
                    <div class="sidebar__item">
                        <div class="latest-product__text">
                            <h4>სიახლე</h4>
                            <div class="latest-product__slider owl-carousel">
                                <div class="latest-prdouct__slider__item">
                                    <a href="#" class="latest-product__item">
                                        <div class="latest-product__item__pic">
                                            <img src="img/latest-product/lp-19.jpeg" alt="">
                                        </div>
                                        <div class="latest-product__item__text">
                                            <h6>საღ. რეზ. მეგა მარწყვი 16,4გრ</h6>
                                            <span>1.50 ლ</span>
                                        </div>
                                    </a>
                                    <a href="#" class="latest-product__item">
                                        <div class="latest-product__item__pic">
                                            <img src="img/latest-product/lp-20.jpeg" alt="">
                                        </div>
                                        <div class="latest-product__item__text">
                                            <h6>საღ.რეზ. მეგა პიტნა 16,4გრ</h6>
                                            <span>1.50 ლ</span>
                                        </div>
                                    </a>
                                    <a href="#" class="latest-product__item">
                                        <div class="latest-product__item__pic">
                                            <img src="img/latest-product/lp-21.jpeg" alt="">
                                        </div>
                                        <div class="latest-product__item__text">
                                            <h6>საღ. რეზ. მეგა ბაბლიმენტი 16,4გრ</h6>
                                            <span>1.50 ლ</span>
                                        </div>
                                    </a>
                                </div>
                                <div class="latest-prdouct__slider__item">
                                    <a href="#" class="latest-product__item">
                                        <div class="latest-product__item__pic">
                                            <img src="img/latest-product/lp-22.jpeg" alt="">
                                        </div>
                                        <div class="latest-product__item__text">
                                            <h6>შოკოლადი სნიკერსი პლომბირი 81გრ</h6>
                                            <span>2.20 ლ</span>
                                        </div>
                                    </a>
                                    <a href="#" class="latest-product__item">
                                        <div class="latest-product__item__pic">
                                            <img src="img/latest-product/lp-23.jpeg" alt="">
                                        </div>
                                        <div class="latest-product__item__text">
                                            <h6>შოკოლადი ბაუნტი მანგო 50გრ</h6>
                                            <span>1.50 ლ</span>
                                        </div>
                                    </a>
                                    <a href="#" class="latest-product__item">
                                        <div class="latest-product__item__pic">
                                            <img src="img/latest-product/lp-24.jpeg" alt="">
                                        </div>
                                        <div class="latest-product__item__text">
                                            <h6>M&M კრისპი 36გრ</h6>
                                            <span>1.60 ლ</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-9 col-md-7">
                <div class="product__discount">
                    <div class="section-title product__discount__title">
                        <h2>ფასდაკლება</h2>
                    </div>
                    <div class="row">
                        <div class="product__discount__slider owl-carousel">
                            <div class="col-lg-4">
                                <div class="product__discount__item">
                                    <div class="product__discount__item__pic set-bg"
                                        data-setbg="img/product/discount/pd-1.jpeg">
                                        <div class="product__discount__percent">-20%</div>
                                        <ul class="product__item__pic__hover">
                                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="product__discount__item__text">
                                        <span>შოკოლადი</span>
                                        <h5><a href="#">სნიკერსი 200გრ</a></h5>
                                        <div class="product__item__price">5.00 ლ <span>5.50 ლ </span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="product__discount__item">
                                    <div class="product__discount__item__pic set-bg"
                                        data-setbg="img/product/discount/pd-2.jpeg">
                                        <div class="product__discount__percent">-20%</div>
                                        <ul class="product__item__pic__hover">
                                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="product__discount__item__text">
                                        <span>შოკოლადი</span>
                                        <h5><a href="#">ტვიქსი 220გრ</a></h5>
                                        <div class="product__item__price">5.00 ლ     <span>=5.50 ლ</span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="product__discount__item">
                                    <div class="product__discount__item__pic set-bg"
                                        data-setbg="img/product/discount/pd-3.jpeg">
                                        <div class="product__discount__percent">-20%</div>
                                        <ul class="product__item__pic__hover">
                                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="product__discount__item__text">
                                        <span>შოკოლადი</span>
                                        <h5><a href="#">მარსი 200გრ </a></h5>
                                        <div class="product__item__price">5,00 ლ <span>5.50ლ</span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="product__discount__item">
                                    <div class="product__discount__item__pic set-bg"
                                        data-setbg="img/product/discount/pd-4.jpeg">
                                        <div class="product__discount__percent">-20%</div>
                                        <ul class="product__item__pic__hover">
                                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="product__discount__item__text">
                                        <span>შოკოლადი</span>
                                        <h5><a href="#">მილკი ვეი</a></h5>
                                        <div class="product__item__price">3.00 ლ <span>3.50 ლ</span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="product__discount__item">
                                    <div class="product__discount__item__pic set-bg"
                                        data-setbg="img/product/discount/pd-5.jpeg">
                                        <div class="product__discount__percent">-20%</div>
                                        <ul class="product__item__pic__hover">
                                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="product__discount__item__text">
                                        <span>შოკოლადი</span>
                                        <h5><a href="#">ტვიქსი მინი 184გრ</a></h5>
                                        <div class="product__item__price">5.00 ლ <span>5.50 ლ</span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="product__discount__item">
                                    <div class="product__discount__item__pic set-bg"
                                        data-setbg="img/product/discount/pd-6.jpeg">
                                        <div class="product__discount__percent">-20%</div>
                                        <ul class="product__item__pic__hover">
                                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="product__discount__item__text">
                                        <span>შოკოლადი</span>
                                        <h5><a href="#">მარსი მინი 182გრ</a></h5>
                                        <div class="product__item__price">5.00 ლ <span>5.50 ლ</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="product__item">
                            <div class="product__item__pic set-bg" data-setbg="img/product/product-1.jpeg" style="background-image: url(img/product/product-1.jpeg);">                            
                                <ul class="product__item__pic__hover">
                                    <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                </ul>                               
                            </div>
                            <div class="product__item__text">
                                <h6><a href="#">შოკოლადი სნიკერსი 50.5გრ</a></h6>
                                <h5>1.50 ლ</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="product__item">
                            <div class="product__item__pic set-bg" data-setbg="img/product/product-2.jpeg" style="background-image: url(img/product/product-2.jpeg);">
                                <ul class="product__item__pic__hover">
                                    <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div class="product__item__text">
                                <h6><a href="#">შოკოლადი სნიკერსი სუპერი 95გრ</a></h6>
                                <h5>2.20 ლ</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="product__item">
                            <div class="product__item__pic set-bg" data-setbg="img/product/product-3.jpeg" style="background-image: url(img/product/product-3.jpeg);">
                                <ul class="product__item__pic__hover">
                                    <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div class="product__item__text">
                                <h6><a href="#">შოკოლადი სნიკერსი ტყის თხილით 81გრ</a></h6>
                                <h5>2.20 ლ</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="product__item">
                            <div class="product__item__pic set-bg" data-setbg="img/product/product-4.jpeg" style="background-image: url(img/product/product-4.jpeg);">
                                <ul class="product__item__pic__hover">
                                    <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div class="product__item__text">
                                <h6><a href="#">M & M მიწის თხილით 45გრ</a></h6>
                                <h5>1.60 ლ</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="product__item">
                            <div class="product__item__pic set-bg" data-setbg="img/product/product-5.jpeg" style="background-image: url(img/product/product-5.jpeg);">
                                <ul class="product__item__pic__hover">
                                    <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div class="product__item__text">
                                <h6><a href="#"></a>M & M შოკოლადით 45გრ</a></h6>
                                <h5>1.60 ლ</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="product__item">
                            <div class="product__item__pic set-bg" data-setbg="img/product/product-6.jpeg" style="background-image: url(img/product/product-6.jpeg);">
                                <ul class="product__item__pic__hover">
                                    <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div class="product__item__text">
                                <h6><a href="#">შოკოლადი ტვიქსი 50გრ</a></h6>
                                <h5>1,40 ლ</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="product__item">
                            <div class="product__item__pic set-bg" data-setbg="img/product/product-7.jpeg" style="background-image: url(img/product/product-7.jpeg);">
                                <ul class="product__item__pic__hover">
                                    <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div class="product__item__text">
                                <h6><a href="#">შოკოლადი ტვიქსი ექსტრა 81გრ</a></h6>
                                <h5>2.20 ლ</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="product__item">
                            <div class="product__item__pic set-bg" data-setbg="img/product/product-8.jpeg" style="background-image: url(img/product/product-8.jpeg);">
                                <ul class="product__item__pic__hover">
                                    <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div class="product__item__text">
                                <h6><a href="#">შოკოლადი ბაუნტი 50გრ/a></h6>
                                <h5>1.50 ლ</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="product__item">
                            <div class="product__item__pic set-bg" data-setbg="img/product/product-9.jpeg" style="background-image: url(img/product/product-9.jpeg);">
                                <ul class="product__item__pic__hover">
                                    <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div class="product__item__text">
                                <h6><a href="#">შოკოლადი ბაუნტი ტრიო 81,5გრ</a></h6>
                                <h5>2.20 ლ</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="product__item">
                            <div class="product__item__pic set-bg" data-setbg="img/product/product-10.jpeg" style="background-image: url(img/product/product-10.jpeg);">
                                <ul class="product__item__pic__hover">
                                    <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div class="product__item__text">
                                <h6><a href="#">შოკოლადი მარსი 50გრ</a></h6>
                                <h5>1.40 ლ</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="product__item">
                            <div class="product__item__pic set-bg" data-setbg="img/product/product-11.jpeg" style="background-image: url(img/product/product-11.jpeg);">
                                <ul class="product__item__pic__hover">
                                    <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div class="product__item__text">
                                <h6><a href="#">შოკოლადი მილკი ვეი</a></h6>
                                <h5>0.80 ლ</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="product__item">
                            <div class="product__item__pic set-bg" data-setbg="img/product/product-12.jpeg" style="background-image: url(img/product/product-12.jpeg);">
                                <ul class="product__item__pic__hover">
                                    <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                    <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div class="product__item__text">
                                <h6><a href="#">შოკოლადი სნიკერსი მინის 180გრ</a></h6>
                                <h5>5.50 ლ</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="results__pages">       
            </div>
            </div>
        </div>
    </div>
</section>
    `;
    elements.searchResList.innerHTML = shopGridMarkup;
 
};



/* export const renderShopDetailPage = () => {
    const shopDetailMarkup =`
    <section class="product-details spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-md-6">
                <div class="product__details__pic">
                    <div class="product__details__pic__item">
                        <img class="product__details__pic__item--large"
                            src="img/product/details/product-details-1.jpg" alt="">
                    </div>
                    
                </div>
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="product__details__text">
                    <h3>ძაღლის საჭმელი პედიგრი</h3>
                    <div class="product__details__rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-half-o"></i>
                    
                    </div>
                    <div class="product__details__price">83.00 ლ</div>
                    <p>მშრალი  ჯანსაღი საკვები. დამზადებულია სპეციალური რეცეპტით ზრდასრული ძაღლის ფიზიოლოგიიდან გამომდინარე. შეიცავს ვიტამინებს. შემადგენლობა: სიმინდი, ბრინჯი, ქათმის ფქვილი, ხორბლის ფქვილი, ხორცის ფქვილი (მათ შორის ძროხის მინიმუმ 4%), ჭარხლის რბილობი, სტაფილო (მინიმუმ 4%), მზესუმზირის ზეთი, ცხოველური ცხიმი, ვიტამინები და მინერალები. 100 გრამში კვებითი ღირებულება: ცილები - 22 გ, ცხიმი - 11 გ, ნაცარი - 7 გ, ბოჭკოვანი - 5 გ, ტენიანობა - არაუმეტეს 10 გ, კალციუმის - 1.0 გ, ფოსფორის - 0.9 გ, ნატრიუმი - 0 0.7 გ, მაგნიუმის 0,1 გ, თუთია - 18 მგ, სპილენძი - 1.5 მგ, ვიტამინი A - 1500 სე, ვიტამინი E - 30 მგ, ვიტამინი D3 - 120 სე, და ვიტამინები B2, B4, B5, B12, niacin, ომეგა -6, ომეგა -3.
                           მოცულობა: 13 კგ</p>
                    <div class="product__details__quantity">
                        <div class="quantity">
                            <div class="pro-qty">
                                <input type="text" value="1">
                            </div>
                        </div>
                    </div>
                    <a href="#" class="primary-btn">კალათაში დამატება</a>
                    <a href="#" class="heart-icon"><span class="icon_heart_alt"></span></a>
                    <ul>
                        <li><b>ხელმის. რაოდენობა</b> <span>250</span></li>
                        <li><b>ტრანსპორტირება</b> <span> <samp>უფასო</samp></span></li>
                        <li><b>წონა</b> <span>13 კგ</span></li>
                        <li><b>გააზიარე</b>
                            <div class="share">
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-instagram"></i></a>
                                
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-12">
                <div class="product__details__tab">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab"
                                aria-selected="true">განმარტება</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab"
                                aria-selected="false">ინფორმაცია</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab"
                                aria-selected="false">გადახედვა <span>(1)</span></a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane active" id="tabs-1" role="tabpanel">
                            <div class="product__details__tab__desc">
                                <h6>ზოგადი ინფორმაცია</h6>
                                <p> <strong>რა ვაჭამოთ  ძაღლს?</strong> <br>
                                    საკვები არის ყველაზე მთავარი ელემენტი, რადგან მასზეა დამოკიდებული რამდენად ჯანმრთელი და ენერგიული იქნება თქვენი ძაღლი. პირველად გყავთ ძაღლი და არ იცით რომელი საჭმელი აჭამოთ? ქათმით, ინდაურით თუ საქონლის ხორცით? მშრალი თუ სველი კვება? არც ისეთი რთულია ძაღლის ან ლეკვის საკვების არჩევა როგორიც შეიძლება ერთი შეხედვით ჩანდეს. ზოგი რჩევას იღებს მეგობრისგან რომელსაც ჰყავს ძაღლი, ზოგი ნახულობს რომელი ჯიშისთვის რომელია რეკომენდირებული, ზოგიც ვეტ ექიმს მიმართავს</p>
                            </div>
                        </div>
                        <div class="tab-pane" id="tabs-2" role="tabpanel">
                            <div class="product__details__tab__desc">
                                <h6>ზოგადი ინფორმაცია</h6>
                                <p><strong>ძაღლის სველი საკვები</strong> <br>


                                    თუ თქვენი ძაღლი არ სვავს საკმარის წყალს, მაშინ სველი საკვები, როგორებიცაა კონსერვები 
                                    და პაუჩები კარგი საშუალება რომ მათ არ განიცადონ დეჰიდრაცია. უფროსი ასაკის ძაღლები უფრო
                                     ხშირად იღებენ სველ საჭმელს უფრო ძლიერი არომატით რადგან, მათი მგრძნობელობა მცირედით დაქვეითებულია. 
                                     ასევე, ძაღლები რომელთაც ცუდი მადა აქვთ, შეიძლება უფრო ამჯობინონ სველი კვება. თუმცა, ხშირ შემთხვევაში
                                      სველი საჭმელი უფრო ძვირი ჯდება ვიდრე მშრალი. რათქმაუნდა ფასები სხვადასხვაა მაგრამ თუ იგივე კლასის პროდუქციას 
                                      ვადარებით სველი აშკარად ძვირი გამოდის და არ არის დიდი შეფუთვები როგორებიცაა მაგალითად მშრალი კვების
                                       შემთხვევაში – 20კგ.
                                    
                                    მშრალი საჭმელი
                                    ყველაზე მარტივი შესანახად და საკვებად ნამდვილად არის მშრალი საჭმელი
                                     (მაგ: პედიგრი,  ჩაპი და სხვა). ჩვენს საიტზე შეგიძლიათ
                                      იხილოთ მშრალი კვების ფართო არჩევანი ლეკვეისთვის და ზრდასრული ძაღლებისთვის. 
                                      მხოლოდ რამოდენიმე წუთია საჭირო რომ დაუყაროთ ძაღლს საჭმელი და მათი სადილი მზადაა. 
                                      ფინანსურადაც იაფია და ბევრად პრაქტიკულია მისი ყიდვა. ასევე, თუ შევხედავთ არჩევანს, მშრალი 
                                      საჭმელის ბევრად ფართო არჩევანია ბაზარზე, რადგან ის უფრო პოპულარულია და ხელმისაწვდომი. 
                                      მაგრამ ასევე მნიშვნელოვანია აღინიშნოს რომ მშრალმა საჭმელმა შეიძლება დეჰიდრაცია გამოიწვიოს 
                                      როცა ძალიან ცხელა და მადა დაუკარგოს თქვენს ოთხფეხა მეგობარს. ამიტომ, რეკომენდირებულია
                                       რომ ძლიერი სიცხის დროს ძაღლმა მიიღოს ბევრი წყალი ან პერიოდულად მისცეთ სველი საკვები.
                                    
                                    შეიძლება ითქვას რომ ორივე ტიპის საკვები შეიცავს ყველა საჭირო ნუტრიციას, ინგრედიენტებს,
                                     პროტეინებს, ნახშირწყლებს და მინერალებს რომ თქვენს ძაღლს ან ლეკვს ჰქონდეს დაბალანსებული 
                                     დიეტა. უფრო რომელია უმჯობესი ეს უკვე ინდივიდუალური საკითხია და დამოკიდებულია ცხოველზე.
                                     დააკვირდით რომელი უფრო უხდება, რომელი უფრო ენერგიულს და ჯანმრთელს ხდის მას და იმის 
                                     მიხედვით გამოკვებეთ. ასევე, შესაძლებელია ორივეს ტიპის საკვების მიცემაც.</p>
                            </div>
                        </div>
                        <div class="tab-pane" id="tabs-3" role="tabpanel">
                            <div class="product__details__tab__desc">
                                <h6>ზოგადი ინფორმაცია</h6>
                                <p><strong>რეკომენდირებული პორცია ძაღლისთვის</strong> <br>



                                    კვების რაციონი ისეთივე მნიშვნელოვანია როგორიც თუ რას აჭმევთ თქვენს  
                                    ოთხფეხა მეგობარს. თქვენ შეგიძლიათ იხილოთ რაციონის რაოდენობა შეკვრაზე,
                                     მაგრამ აუცილებელია გაითვალისწინოთ თქვენი ძაღლის წონაც. პერიოდულად 
                                     აწონეთ რომ გაიგოთ სწორეა თუ არა განსაზღვრული კვება. თუ ძაღლი გამხდარია
                                      მაშინ შესაძლებელია 10%-ით მოუმატოთ საკვებს ან შეცვალოთ იგი უფრო კალორიულ
                                      საკვებზე. ასევე, შესაძლებელია როცა დიდი რაოდენობის საკვების მიცემის შემთხვევაში
                                       ძაღლი წონაში არ იმატებს, მაგრამ შეიძლება განუვითარდეს გადამუშავებს და 
                                       ჯანმრთელობის პრობელემები, ამიტომ გააკონტროლეთ ყოველდღიური მისაცემი რაციონი.

                                    
                                    უმეტეს ზრდასრულ ჯანმრთელ ძაღლებში არ არის მნიშვნელოვანი რამდენჯერ აჭმევთ,
                                     თუ თქვენ უკვე იცით დღეში მისაცემი საკვების რაოდენობა. ძირითადად 1-3 პორცია არის 
                                     რეკომენდირებული. მაგრამ ასევე ბევრი მეპატრონე არჩევს თავისუფალი გრაფიკის მეთოდს,
                                      როდესაც საჭმელ ჯამში მოთავსებულია მთელი დღის პორცია და თვითონ ირჩევს ძაღლი 
                                      რამდენი და როდის ჭამოს. მაგრამ ასევე გასათვალისწინებელია რამოდენიმე ფაქტორი. თუ
                                       თქვენ ძაღლს ადვილად შივდება, მაშინ უკეთესია მისცეთ რამოდენიმე პორცია დღის
                                        განმავლობაში, რომ არ იგრძნოს თავი მშიერად.

                                    
                                    ძაღლის კუჭ-ნაწლავს სჭირდება დრო რომ ბოლომდე შეეჩვიოს საკვების ცვლილებას.
                                     ამიტომ, რეკომენდირებულია რომ ნელ-ნელა მოხდეს მისი ჩანაცვლება რამოდენიმე დღის
                                      ინტერვალში. მაგალითად პირველი 2-3 დღე 70% ძველი და 30% ახალი საკვები შეურიეთ, 
                                      შემდეგი 2-3 დღე 50%/50% და ბოლოს 30% ძველი და 70% ახალი. ასევე, ყურადღება
                                       მიაქციეთ თუ თქვენს ძაღლს აქვს მგრძნობიარე კუჭი.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Product Details Section End -->

<!-- Related Product Section Begin -->
<section class="related-product">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-title related__product__title">
                    <h2>მსგავსი პროდუქტები</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="product__item">
                    <div class="product__item__pic set-bg" data-setbg="img/product/product-27.jpeg" style="background-image: url(img/product/product-27.jpeg);">
                        <ul class="product__item__pic__hover">
                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                            <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">ჩაპი ხორცის ასორტი 100გრ</a></h6>
                        <h5>1.00 ლ</h5>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="product__item">
                    <div class="product__item__pic set-bg" data-setbg="img/product/product-28.jpeg" style="background-image: url(img/product/product-28.jpeg);">
                        <ul class="product__item__pic__hover">
                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                            <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">ჩაპი ხორცის არომატით</a></h6>
                        <h5>1.00 ლ</h5>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="product__item">
                    <div class="product__item__pic set-bg" data-setbg="img/product/product-29.jpeg" style="background-image: url(img/product/product-29.jpeg);">
                        <ul class="product__item__pic__hover">
                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                            <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">პედიგრი ლეკვის 100 გრ ხორცით</a></h6>
                        <h5>1.00 ლ</h5>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div class="product__item">
                    <div class="product__item__pic set-bg" data-setbg="img/product/product-30.jpeg" style="background-image: url(img/product/product-30.jpeg);">
                        <ul class="product__item__pic__hover">
                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                            <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                            <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">პედიგრი დიდი ძაღლის პატარა ჯიში 100გრ</a></h6>
                        <h5>1.00 ლ</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    `;
    elements.searchResList.innerHTML = shopDetailMarkup;
}; */

export const renderShopingCartPage = () => {
    const shopingCartMarkup =   `
    <section class="shoping-cart spad SHOPING-CART-HTML">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="shoping__cart__table">
                    <table>
                        <thead>
                            <tr>
                                <th class="shoping__product">პროდუქტი</th>
                                <th>ფასი</th>
                                <th>რაოდენობა</th>
                                <th>ჯამი</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="shoping__cart__item">
                                    <img src="img/cart/cart-1.jpeg" alt="">
                                    <h5>შოკოლადი M&M შოკოლადით</h5>
                                </td>
                                <td class="shoping__cart__price">
                                    1.60 ლ
                                </td>
                                <td class="shoping__cart__quantity">
                                    <div class="quantity">
                                        <div class="pro-qty">
                                            <input type="text" value="1">
                                        </div>
                                    </div>
                                </td>
                                <td class="shoping__cart__total">
                                    1.60 ლ
                                </td>
                                <td class="shoping__cart__item__close">
                                    <span class="icon_close"></span>
                                </td>
                            </tr>
                            <tr>
                                <td class="shoping__cart__item">
                                    <img src="img/cart/cart-2.jpeg" alt="">
                                    <h5>საღ.რეზ. ორბიტი ვინტერშრეში</h5>
                                </td>
                                <td class="shoping__cart__price">
                                    1.00 ლ
                                </td>
                                <td class="shoping__cart__quantity">
                                    <div class="quantity">
                                        <div class="pro-qty">
                                            <input type="text" value="2">
                                        </div>
                                    </div>
                                </td>
                                <td class="shoping__cart__total">
                                    2.00 ლ
                                </td>
                                <td class="shoping__cart__item__close">
                                    <span class="icon_close"></span>
                                </td>
                            </tr>
                            <tr>
                                <td class="shoping__cart__item">
                                    <img src="img/cart/cart-3.jpeg" alt="">
                                    <h5>შოკოლადი ტვიქსი ექსტრა 81,5გრ</h5>
                                </td>
                                <td class="shoping__cart__price">
                                   2.20 ლ
                                </td>
                                <td class="shoping__cart__quantity">
                                    <div class="quantity">
                                        <div class="pro-qty">
                                            <input type="text" value="1">
                                        </div>
                                    </div>
                                </td>
                                <td class="shoping__cart__total">
                                 2.20 ლ
                                </td>
                                <td class="shoping__cart__item__close">
                                    <span class="icon_close"></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="shoping__cart__btns">
                    <a href="#" class="primary-btn cart-btn">განაგრძე ყიდვა</a>
                    <a href="#" class="primary-btn cart-btn cart-btn-right"><span class="icon_loading"></span>
                        განახლება</a>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="shoping__continue">
                    <div class="shoping__discount">
                        <h5>ფასდაკლების კოდი</h5>
                        <form action="#">
                            <input type="text" placeholder="შეიყვანეთ თქვენი კუპონის კოდი">
                            <button type="submit" class="site-btn">დადასტურება</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="shoping__checkout">
                    <h5>პროდუქტები კალათაში</h5>
                    <ul>
                        <li>ჯამი <span>5.80 ლ</span></li>
                        <li>ჯამი <span>5.80 ლ</span></li>
                    </ul>
                    <a href="#" class="primary-btn">გადახდა</a>
                </div>
            </div>
        </div>
    </div>
</section>
    `;
    elements.searchResList.innerHTML = shopingCartMarkup;
};
export const renderCheckOutPage = () => {
    const checkoutMarkup = `
    <section class="checkout spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h6><span class="icon_tag_alt"></span> გაქვს კუპონი? <a href="#">დააჭირე აქ</a> 
                </h6>
            </div>
        </div>
        <div class="checkout__form">
            <h4>რეგისტრაცია</h4>
            <form action="#">
                <div class="row">
                    <div class="col-lg-8 col-md-6">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="checkout__input">
                                    <p>სახელი<span>*</span></p>
                                    <input type="text">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="checkout__input">
                                    <p>გვარი<span>*</span></p>
                                    <input type="text">
                                </div>
                            </div>
                        </div>
                        <div class="checkout__input">
                          
                           
                        </div>
                        <div class="checkout__input">
                            <p>მისამართი<span>*</span></p>
                            <input type="text" placeholder="ქუჩა" class="checkout__input__add">
                           
                        </div>
                        <div class="checkout__input">
                            <p>ქალაქი<span>*</span></p>
                            <input type="text">
                        </div>
                        <div class="checkout__input">
                            <p>ქვეყანა/შტატი<span>*</span></p>
                            <input type="text">
                        </div>
                        <div class="checkout__input">
                            <p>საფოსტო ინდექსი<span>*</span></p>
                            <input type="text">
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="checkout__input">
                                    <p>ტელეფონი<span>*</span></p>
                                    <input type="text">
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="checkout__input">
                                    <p>Email<span>*</span></p>
                                    <input type="text">
                                </div>
                            </div>
                        </div>
                        <div class="checkout__input__checkbox">
                            <label for="acc">
                               შექმენი ანგარიში?
                                <input type="checkbox" id="acc">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <p>შეიყვანეთ მოცემული ინფორმაცია და შექმენით ანგარიში. თუ თქვენ უკვე გაქვთ ანგარიში გთხოვთ 
                            გაიაროთ ავტორიზაცია გვერდის  მარჯვენა ზედა კუთხეში 
                          </p>
                        <div class="checkout__input">
                            <p>პაროლი<span>*</span></p>
                            <input type="text">
                        </div>
                        <div class="checkout__input__checkbox">
                            <label for="diff-acc">
                                სხვა მისამართზე აგზავნით?
                                <input type="checkbox" id="diff-acc">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="checkout__input">
                            <p>შენიშვნა<span>*</span></p>
                            <input type="text"
                                placeholder="შენიშვნები თქვენს შეკვეთაზე, მაგ: მიწოდების ადგილზე.">
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="checkout__order">
                            <h4>თქვენი შეკვეთა</h4>
                            <div class="checkout__order__products">პროდუქტი <span>ჯამი</span></div>
                            <ul>
                                <li> M&M შოკოლადით  <span>1.60 ლ</span></li>
                                <li>საღ.რეზ ორბიტი <span>2.00 ლ</span></li>
                                <li> ტვიქსი ექსტრა 81,5გრ <span>2.20 ლ</span></li>
                            </ul>
                            <div class="checkout__order__subtotal">ჯამი <span>5.80 ლ</span></div>
                            <div class="checkout__order__total">ჯამი <span>5.80 ლ</span></div>
                            <div class="checkout__input__checkbox">
                               
                            </div>
                      
                            <div class="checkout__input__checkbox">
                               
                            </div>
                            <div class="checkout__input__checkbox">
                               
                            </div>
                            <button type="submit" class="site-btn">შეუკვეთე</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</section>
    `;
    elements.searchResList.innerHTML = checkoutMarkup;
};

export const renderBlogDetailsPage = () => {
    const blogDetailsMarkup = `
    <section class="blog-details spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-5 order-md-1 order-2">
                <div class="blog__sidebar">
                    <div class="blog__sidebar__search">
                        <form action="#">
                            <input type="text" placeholder="ძებნა...">
                            <button type="submit"><span class="icon_search"></span></button>
                        </form>
                    </div>
                    <div class="blog__sidebar__item">
                        <h4>კატეგორია</h4>
                        <ul>
                            <li><a href="#">ყველა</a></li>
                            <li><a href="#">შოკოლადი</a></li>
                            <li><a href="#">შოკოლადის ნამცხვრები</a></li>
                            <li><a href="#">ტორტები</a></li>
                            
                        </ul>
                    </div>
                   
                   
                </div>
            </div>
            <div class="col-lg-8 col-md-7 order-md-1 order-1">
                <div class="blog__details__text">
                    <img src="img/blog/details/details-pic.jpg" alt="">     
                       <h3>მარწყვის სქელი ჯემი</h3>
                    <p>მარწყვის ჯემის მარტივად მომზადებას შეძლებთ მარტივი მაჟელირებელი 
                        საშუალებებით (ჟელფიქსი, კვიტინი, აგარ-აგარი). ამ რეცეპტში ჩვენ ნატურალური
                         შემასქელებელი – პექტინი გამოვიყენეთ. სქელი მარწყვის ჯემი შეგიძლიათ დესერტების 
                          შიგთავსად გამოიყენოთ ან უბრალოდ პურზე წაუსვათ და ჩაისთან დატკბეთ.
                          ინგრედიენტები
                        <ul> <strong>ინგრედიენტები</strong> 

                            <li>500 გრ მარწყვი</li>
                            <li>250 გრ შაქარი</li>
                            <li> 10 გრ პექტინი</li>
                            <li>0,5 ჩ.კ. ლიმონის მჟავა</li>
                        </ul>
                          </p>

                      <strong>მომზადება</strong>
                         
                          <ul>1. გარეცხეთ და მოაცილეთ ყუნწები მარწყვს. ჩაყარეთ ქვაბში და დააბლენდერეთ.</ul>
                          <ul>2. დაუმატეთ პექტინი და ლიმონის მჟავა, დადგით ნელ ცეცხლზე და ურიეთ წამოდუღებამდე.</ul>          
                          <ul>3. დაუმატეთ შაქარი, კვლავ წამოადუღეთ და ხარშეთ 5 წუთის განმავლობაში.</ul>
                          <ul>4. მოხსენით ქაფი და ჩაასხით ჯემი სტერილურ ქილაში. მოხუფეთ და დადგით ცივ ადგილას.</ul>
                 
                        <P>სქელი მარწყვის ჯემი შესანიშნავია ზამთრის რაციონის გასამდიდრებლად. 
                            სანამ მარწყვის სეზონი გრძელდება, ეცადეთ მაქსიმალურად მიიღოთ მისგან სასარგებლო
                             ვიტამინების დოზა. მოამზადეთ სიამოვნებით და გაუზიარეთ რეცეპტი მეგორბებს!</P>
            
                </div>
                
            </div>
        </div>
    </div>
</section>
<!-- Blog Details Section End -->

<!-- Related Blog Section Begin -->
<section class="related-blog spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-title related-blog-title">
                    <h2>შესაძლოა მოგეწონოთ</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="blog__item">
                    <div class="blog__item__pic">
                        <img src="img/blog/blog-1.jpg" alt="">
                    </div>
                    <div class="blog__item__text">
                        <ul>
                            <li><i class="fa fa-calendar-o"></i>  4 სექტემბერი 2020</li>
                            <li><i class="fa fa-comment-o"></i> 5</li>
                        </ul>
                        <h5><a href="http://www.gurmania.ge/geo/main/index/84" target="blank">შოკოლადის ნამცხვარი</a></h5>
                        <p>როგორ მოვამზადოთ შოკოლადის უგემრიელესი ნამცხვარი სახლის პირობებში </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="blog__item">
                    <div class="blog__item__pic">
                        <img src="img/blog/blog-2.jpg" alt="">
                    </div>
                    <div class="blog__item__text">
                        <ul>
                            <li><i class="fa fa-calendar-o"></i>  4 მაისი 2019</li>
                            <li><i class="fa fa-comment-o"></i> 5</li>
                        </ul>
                        <h5><a href="https://gemrielia.ge/recipe/2074-moamzadeT-Sokoladi-saxlSi-10-wuTSi/" target="blank">შოკოლადის ფილა</a></h5>
                        <p>სახლიდან გაუსვლელად</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="blog__item">
                    <div class="blog__item__pic">
                        <img src="img/blog/blog-3.jpg" alt="">
                    </div>
                    <div class="blog__item__text">
                        <ul>
                            <li><i class="fa fa-calendar-o"></i> 11 ივლისი 2019</li>
                            <li><i class="fa fa-comment-o"></i> 5</li>
                        </ul>
                        <h5><a href="http://mzareuli.info/deserti/529" target="blank">თეთრი შოკოლადი</a></h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    `;
    elements.searchResList.innerHTML = blogDetailsMarkup;

};

