//SHOP - ITEM CATERGORIES 
const candlesContainer = document.querySelector('.candles');
const waxMeltsContainer = document.querySelector('.wax-melts');
const waxMeltBoxesContainer = document.querySelector('.wax-melt-boxes');
const personalisedContainer = document.querySelector('.personalised');

//SHOP - SCENT CATERGORIES 
const woodyContainer = document.querySelector('.woody');
const floralContainer = document.querySelector('.floral');
const hibiscusContainer = document.querySelector('.hibiscus');
const fruityContainer = document.querySelector('.fruity');
const deepContainer = document.querySelector('.deep');

//ITEM CLASSES
class Item {
    constructor(productType, scentType, product, desc, productInfo, price, stock, imgSrc) {
        this.productType = productType;
        this.scentType = scentType;
        this.imgSrc = imgSrc;
        this.productInfo = productInfo;
        this.productCard = `
        <div class="card">
            <div class="card-body shadow-lg">
                <div class="card-img-container">
                    <img src="${imgSrc}" class="shadow-lg rounded-3">
                </div>
                <h3 class="card-title d-flex justify-content-center align-items-center text-primary">${product}</h3>
                <ul class="card-text list-unstyled m-0">
                    <li class="">Scent Type: ${scentType}</li>
                    <li class="desc d-flex justify-content-center align-items-center">${desc}</li>
                    <li class="text-danger">${stock} left!</li>
                    <li class="d-none">${productType}</li>
                </ul>
                <h6 class="card-text">From £${price}</h6>
                <a class="btn btn-primary">Shop Now</a>
                <p class="d-none text-center">${productInfo}</p>
            </div>
        </div>`;
    }
}

//CATERGORY PRODUCT DETAILS
//Candles & Ritual Bowl
const productCandles = [
    new Item('candle', 'Woody', 'Forest Calm', 'NOTES: Vanilla and Sandalwood.', 'A soothing lavender and bergamot essential oil aromatherapy candle with hints of vanilla and sandalwood. Inspired by lavender fields within a wood, designed to calm an anxious mind. Burn time: 120ml up to 25hs / 180ml up to 40hs.', 8, 100, 'assets/imgs/productImgs/candles/forestCalm.jpg'),

    new Item('candle', 'Hibiscus', 'Forest Herbs', 'NOTES: Rosemary, Basil, Eucalyptus and Vanilla.', 'A herbal aromatherapy essential oil blend with notes of rosemary, basil and eucalyptus. Inspired by foraging in the woodlands for herbs to use for both foods and medicine, designed to create a focused environment. Burn time: 120ml up to 25hs / 180ml up to 40hs.', 12.99, 100, 'assets/imgs/productImgs/candles/forestHerbs.jpg'),

    new Item('candle', 'Woody', 'Forest Path', 'NOTES: Oakmoss Earth and Fresh Air.', 'A pine forest scented candle in an apothecary jar perfect for autumn. An earthy yet light scent reminiscent of that after rain fall scent inspired by long walks  amongst the tree canopies, designed to give you that grounded feeling. Burn time: 120ml up to 25hs / 180ml up to 40hs', 8, 100, 'assets/imgs/productImgs/candles/forestPath.jpg'),

    new Item('candle', 'Floral', 'Sweet Honeysuckle', 'NOTES: Honeysuckle and Howood.', 'Sweet Honeysuckle is a floral aromatherapy essential oil relaxing candle . A blend of honeysuckle and the essential oil howood creates a sensual yet calming scent designed to help you unwind and relax. This is an earthy yet floral scent. Burn time:120ml up to 25hs/ 180ml up to 40hs.', 8, 100, 'assets/imgs/productImgs/candles/sweetHoneysuckle.jpg'),

    new Item('candle', 'Floral', 'Wild Bluebells', 'NOTES: Bluebells and Woods.', 'Wild bluebell is a floral scented soy candle perfect as a gift for her. This scent combines beautiful english bluebells, moss and pinewood to create a light and floral smell. Designed to make you feel balanced just like when the spring returns after a long winter. Burn time: 120ml up to 25hs / 180ml up to 40hs.', 8, 100, 'assets/imgs/productImgs/candles/wildBluebells.jpg'),

    new Item('candle', 'Fruity', 'Blackberry Bush', 'NOTES: Blackberries and Bay Leaf.', 'This beautiful soy candle blend of blackberries and bay is inspired by days spent picking wild berries and coming home to bake them into a pie. This fruity smelling candle is designed to give you the same restoring feeling as that first slice of pie after a long day foraging. Burn time: 120ml up to 25hs / 180ml up to 40hs.', 8, 100, 'assets/imgs/productImgs/candles/blackberryBush.jpg'),

    new Item('candle', 'Deep', 'Love Letters', 'NOTES: Rose, Jasmine and Sandalwood.', 'A perfect romantic rose scented candle gift that provides a sensual aroma.  Inspired by the feeling and scent of slow walks through rose gardens with the one you love, all bottled up. Valentines/ romantic night in sets also available here. Burn time: 60ml up to 10hs/ 120ml up to 25hs / 180ml up to 40hs', 8, 100, 'assets/imgs/productImgs/candles/loveLetters.jpg'),

    new Item('candle', 'Deep', 'Baltic Amber', 'NOTES: Amber, Clove and Bergamot.', 'A blend of cosy amber, clove and bergamot essential oil create warming candle that is perfect for autumn and winter nights. Burn time: 120ml up to 25hs / 180ml up to 40hs', 8, 100, 'assets/imgs/productImgs/candles/balticAmber.jpg'),

    new Item('ritual-bowl', 'Woody', 'Forest Calm Ritual Bowl', 'NOTES: Vanilla and Sandalwood.', 'A soothing lavender and bergamot essential oil aromatherapy candle with hints of vanilla and sandalwood. Inspired by lavender fields within a wood, designed to calm an anxious mind.', 8, 100, 'assets/imgs/productImgs/candles/ritualBowl.jpg')
];

//wax-melts
const productWaxMelts = [
    new Item('wax-melts', 'Woody', 'Forest Calm', 'NOTES: Vanilla and Sandalwood.', 'A soothing lavender and bergamot essential oil aromatherapy wax melt  with hints of vanilla and sandalwood. Inspired by lavender fields within a wood, designed to calm an anxious mind. Our mix of spicey, warming and fresh scents are packaged in pine themed kraft paper and posted in a recycled box.  Hand poured, vegan wax melts, made with pure soy wax, paraben free, fragrance oils and presented in plastic free packaging! Each 30g melt bar lasts up to 40 hrs.', 3.50, 100, 'assets/imgs/productImgs/waxMelts/forestCalmMelt.jpg'),

    new Item('wax-melts', 'Hibiscus', 'Forest Herbs', 'NOTES: Rosemary, Basil, Eucalyptus and Vanilla.', 'A herbal aromatherapy essential oil blend with notes of rosemary, basil and eucalyptus. Inspired by foraging in the woodlands for herbs to use for both foods and medicine, designed to create a focused environment. Our mix of spicey, warming and fresh scents are packaged in pine themed kraft paper and posted in a recycled box.  Hand poured, vegan wax melts, made with pure soy wax, paraben free, fragrance oils and presented in plastic free packaging! Each 30g melt bar lasts up to 40 hrs.', 3.50, 100, 'assets/imgs/productImgs/waxMelts/forestHerbMelt.jpg'),

    new Item('wax-melts', 'Woody', 'Forest Path', 'NOTES: Oakmoss Earth and Fresh Air.', 'A pine forest scented wax melt. An earthy yet light scent reminiscent of that after rain fall scent inspired by long walks  amongst the tree canopies, designed to give you that grounded feeling. Our mix of spicey, warming and fresh scents are packaged in pine themed kraft paper and posted in a recycled box.  Hand poured, vegan wax melts, made with pure soy wax, paraben free, fragrance oils and presented in plastic free packaging! Each 30g melt bar lasts up to 40 hrs.', 3.50, 100, 'assets/imgs/productImgs/waxMelts/forestPathMelt.jpg'),

    new Item('wax-melts', 'Floral', 'Sweet Honeysuckle', 'NOTES: Honeysuckle and Howood.', 'Sweet Honeysuckle is a floral aromatherapy essential oil relaxing melt . A blend of honeysuckle and the essential oil howood creates a sensual yet calming scent designed to help you unwind and relax. This is an earthy yet floral scent. Our mix of spicey, warming and fresh scents are packaged in pine themed kraft paper and posted in a recycled box.  Hand poured, vegan wax melts, made with pure soy wax, paraben free, fragrance oils and presented in plastic free packaging! Each 30g melt bar lasts up to 40 hrs.', 3.50, 100, 'assets/imgs/productImgs/waxMelts/sweetHoneysuckleMelt.jpg'),

    new Item('wax-melts', 'Floral', 'Wild Bluebells', 'NOTES: Bluebells and Woods.', 'Wild bluebell is a floral scented soy candle perfect as a gift for her. This scent combines beautiful english bluebells, moss and pinewood to create a light and floral smell. Designed to make you feel balanced just like when the spring returns after a long winter. Our mix of spicey, warming and fresh scents are packaged in pine themed kraft paper and posted in a recycled box.  Hand poured, vegan wax melts, made with pure soy wax, paraben free, fragrance oils and presented in plastic free packaging! Each 30g melt bar lasts up to 40 hrs.', 3.50, 100, 'assets/imgs/productImgs/waxMelts/wildBluebellsMelt.jpg'),

    new Item('wax-melts', 'Floral', 'Love Letters', 'NOTES: Cade, Chocolate, Pine, Tobacco and Oak.', 'A perfect romantic rose scented wax melt that provides a sensual aroma.  Inspired by the feeling and scent of slow walks through rose gardens with the one you love, all bottled up. Our mix of spicey, warming and fresh scents are packaged in pine themed kraft paper and posted in a recycled box.  Hand poured, vegan wax melts, made with pure soy wax, paraben free, fragrance oils and presented in plastic free packaging! Each 30g melt bar lasts up to 40 hrs.', 3.50, 100, 'assets/imgs/productImgs/waxMelts/loveLettersMelt.jpg')
];

//wax-melt-boxes
const productWaxMeltBoxes = [
    new Item('wax-melt-boxes', 'Woody', 'Forest Bathing Box', 'Five of your favourite forest melts.', 'A perfect gift or treat for yourself that is easily posted through the letter box. No need to wait for someone to be in! Each scent box comes with 5 scents. If ordering as a gift, please state what you would like written on the gift note. Our mix of spicy, warming and fresh scents are packaged in pine themed kraft paper and posted in a recycled box.  Hand poured, vegan wax melts, made with pure soy wax, paraben free, fragrance oils and presented in plastic free packaging! Each 30g melt bar lasts up to 40 hrs. Ships free! How to use: Pop 1 or 2 cubes into your wax melter and light an unscented tea light underneath. Warning ⚠️ - Wax Melt Safety. Remove all packaging and place the melt in the well of your burner. Use with an unscented tea light. Keep out of the reach of children and pets. Do not expose to draughts and do not move while lit. Never leave a burning candle unattended', 12.50, 100, 'assets/imgs/productImgs/waxMeltBoxes/forestBathingBox.jpg'),

    new Item('wax-melt-boxes', 'Floral', 'Love Box', 'Five romantic scents for that special someone.', 'A perfect gift or treat for yourself that is easily posted through the letter box. No need to wait for someone to be in! Each scent box comes with 5 scents. If ordering as a gift, please state what you would like written on the gift note. Our mix of spicy, warming and fresh scents are packaged in pine themed kraft paper and posted in a recycled box.  Hand poured, vegan wax melts, made with pure soy wax, paraben free, fragrance oils and presented in plastic free packaging! Each 30g melt bar lasts up to 40 hrs. Ships free! How to use: Pop 1 or 2 cubes into your wax melter and light an unscented tea light underneath. Warning ⚠️ - Wax Melt Safety. Remove all packaging and place the melt in the well of your burner. Use with an unscented tea light. Keep out of the reach of children and pets. Do not expose to draughts and do not move while lit. Never leave a burning candle unattended', 12.50, 100, 'assets/imgs/productImgs/waxMeltBoxes/loveBox.jpg')
];

//personalised
const productPersonalised = [
    new Item('personalised', 'Any', 'Candle + Personalised Bag', 'Choice of candle and text on candle bag.', 'Choose your candle of choice and add a touch of personalisation with an eco friendly canvas candle bag. The perfect touch to a gift.', 10, 100, 'assets/imgs/productImgs/personalised/candlePersonalBag.jpg'),

    new Item('personalised', 'Any', 'Personalised Wax Melt Storage Bag', 'Store melts away in a large personalised bag.', 'Store your wax melts away in a personalised wax melt bag. Made from eco friendly recycled canvas. Choose your text and add some wax melts to store in them if you’d like.', 2, 100, 'assets/imgs/productImgs/personalised/waxMeltStorageBag.jpg'),
];

//POPULATING SHOP BY ALL, PRODUCT AND SCENT HTML PAGES
const productArr = [productCandles, productWaxMelts, productWaxMeltBoxes, productPersonalised];

productArr.forEach((arrItem) => {
    for (let i = 0; i < arrItem.length; i++) {
        //POPULATE SHOP BY PRODUCT PAGES
        if(arrItem[i].productType === 'candle' && candlesContainer){
            candlesContainer.innerHTML += arrItem[i].productCard;
        } else if (arrItem[i].productType === 'ritual-bowl' && candlesContainer) {
            candlesContainer.innerHTML += arrItem[i].productCard
        } else if (arrItem[i].productType === 'wax-melts' && waxMeltsContainer) {
            waxMeltsContainer.innerHTML += arrItem[i].productCard
        } else if (arrItem[i].productType === 'wax-melt-boxes' && waxMeltBoxesContainer) {
            waxMeltBoxesContainer.innerHTML += arrItem[i].productCard
        } else if (arrItem[i].productType === 'personalised' && personalisedContainer) {
            personalisedContainer.innerHTML += arrItem[i].productCard
        }

        //POPULATE SHOP BY SCENT PAGES
        if(arrItem[i].scentType === 'Woody' && woodyContainer){
            woodyContainer.innerHTML += arrItem[i].productCard;
        } else if (arrItem[i].scentType === 'Floral' && floralContainer) {
            floralContainer.innerHTML += arrItem[i].productCard
        } else if (arrItem[i].scentType === 'Hibiscus' && hibiscusContainer) {
            hibiscusContainer.innerHTML += arrItem[i].productCard;
            console.log(i);
        } else if (arrItem[i].scentType === 'Fruity' && fruityContainer) {
            fruityContainer.innerHTML += arrItem[i].productCard
        } else if (arrItem[i].scentType === 'Deep' && deepContainer) {
            deepContainer.innerHTML += arrItem[i].productCard
        }
      }
});

//CREATE SHOPPRODUCT.HTML OBJECT
const shop = document.querySelector('#shop');
const product = document.querySelector('#product');
//Check on each html page that its linked to if the element exists
if (shop) {
    shop.addEventListener('click' , (e) => {
        if(e.target.textContent === 'Shop Now'){
            const productObj = {
                productType: e.target.parentElement.children[2].children[3].textContent,
                scentType: e.target.parentElement.children[2].children[0].textContent.slice(11),
                product: e.target.parentElement.children[1].textContent,
                desc: e.target.parentElement.children[2].children[1].textContent,
                price: e.target.parentElement.children[3].textContent,
                stock: Number(e.target.parentElement.children[2].children[2].textContent.slice(0,3)),
                imgSrc: e.target.parentElement.children[0].children[0].getAttribute('src'),
                productInfo: e.target.parentElement.children[5].textContent
            }
            
            //SENDING LOCAL STORAGE - AVAILABLE ACROSS PAGES
            localStorage.setItem('product' , JSON.stringify(productObj));
            window.location.href="shopProduct.html";
        }
    });
}

//POPULATING SHOPPRODUCT.HTML
const productLocalStorage = JSON.parse(localStorage.getItem('product'));
if(product && productLocalStorage){
    let sizeOption = '';
    if(productLocalStorage.productType === 'candle') {
        sizeOption = 
        `<option value="12.5">Mini (60ml)</option>
        <option value="13.98">Small (120ml)</option>
        <option value="15.5">Medium (180ml)</option>`;
    } else if (productLocalStorage.productType === 'wax-melts') {
        sizeOption =
        `<option value="3.5">Standard (30g)</option>`;
    } else if (productLocalStorage.productType === 'wax-melt-boxes') {
        sizeOption =
        `<option value="12">Standard</option>`;
    } else if (productLocalStorage.productType === 'ritual-bowl') {
        sizeOption =
        `<option value="34.99">Large (10x6x3 Inches)</option>`;
    } else if (productLocalStorage.productType === 'personalised') {
        sizeOption =
        `<option value="12">Standard</option>`;
    }

    product.innerHTML = `
    <div class="container-fluid">
        <div class="row product-card shadow-lg">
            <form class="col-sm-6 text-center my-4">
                <h2 class="my-4 text-primary">${productLocalStorage.product}</h2>
                <img src="${productLocalStorage.imgSrc}" class="w-75 product-image-small text-center mb-4 rounded-3 shadow-lg border border-primary border-3">
                <ul class="list-unstyled">
                    <li class="mb-3">Scent Type: ${productLocalStorage.scentType}</li>
                    <li class="mb-3">${productLocalStorage.desc}</li>
                    <li class="mb-3 d-none">${productLocalStorage.stock} left!</li>
                    <li class="mb-3 d-none">${productLocalStorage.productType}</li>
                </ul>

                <select name="size" class="form-select text-center mb-3" required>
                    <option label="Size" value=""></option>
                    ${sizeOption}
                </select>

                <select name="giftOption" class="form-select text-center mb-3" required>
                    <option label="Gift Wrap (Optional)" value=""></option>
                    <option value="0">None</option>
                    <option value="3">Gift Wrapping (+£3)</option>
                </select>

                <input name="quantity" type="number" class="form-control text-center mb-3" placeholder="Quantity" required>
                
                <h6 class="mb-3"></h6>
                <button class="btn btn-primary mb-5" type="submit">Add To Cart</button>

                <h6>DESCRIPTION:</h6>
                <p>${productLocalStorage.productInfo}</p>
            </form>
            <div class="col-sm-6 my-4 product-image-big">
                <img class="w-100 rounded-3 shadow-lg" src="${productLocalStorage.imgSrc}"  alt="...">
            </div>
        </div>
    </div>
    `;
}

//ADDING ITEM TO CART(LOCAL STORAGE) & UPDATING PRICE
const productForm = document.querySelector('.product-card form');
const addedCartModal = document.querySelector('#modal');
let cartItems = [];

if(productForm) {
    const updatePrice = () => {
        const sizeSelect = Number(productForm.size.value);
        const giftSelect = Number(productForm.giftOption.value);
        const quantity = Number(productForm.quantity.value);
        const price = productForm.children[6];
    
        price.textContent = '£' + ((sizeSelect + giftSelect) * quantity);
    };
    setInterval(updatePrice, 100);
    productForm.addEventListener('submit' , e => {
        e.preventDefault();
        const cartProduct = {
            productType: productLocalStorage.productType,
            product: productForm.children[0].textContent,
            size: productForm.size.value,
            quantity: Number(productForm.quantity.value),
            giftOption: productForm.giftOption.value,
            imgSrc: productLocalStorage.imgSrc,
            price: productForm.children[6].textContent.slice(1)
        };
        cartItems.push(cartProduct);
        localStorage.setItem('cart-items' , JSON.stringify(cartItems));
        //GENERATE ADDED TO CART MODAL
        addedCartModal.classList.remove('d-none');        
        productForm.reset();
    });
};

//GENERATING ARRAY ITEMS FROM LOCAL STORAGE
if(JSON.parse(localStorage.getItem("cart-items"))){
    cartItems = JSON.parse(localStorage.getItem("cart-items"));
} 

//CLOSE MODAL
if(addedCartModal){
    addedCartModal.addEventListener('click' , e => {
        if((e.target.id === 'modal')) {
            addedCartModal.classList.add('d-none');
        }  
    });
}

//POPULATING CHECKOUTCART.HTML
const cart = document.querySelector('.cart');
if(cart) {
    cartItems.forEach(item => {
        let giftOptionConfirm = '';
        if(item.giftOption === "0"){
            giftOptionConfirm = 'No';
        } else if (item.giftOption === '3') {
            giftOptionConfirm = 'Yes';
        }

        cart.innerHTML += `
        <div class="d-flex justify-content-between align-items-center mb-3 rounded-3 shadow-lg p-2">
          <img class="checkout-img" src="${item.imgSrc}">
          <h6 class="text-center mx-2">${item.product} X ${item.quantity}</h6>
          <h6 class="text-center mx-2">Gift Wrapped: ${giftOptionConfirm}</h6>
          <h6 class="text-center mx-2"><em>£${item.price}</em></h6>
          <button class="px-2 py-1 rounded cart-removal">X</button>
        </div>
        `;
    });

    //REMOVE FROM CART & LOCAL STORAGE & UPDATE TOTAL PRICE
    cart.addEventListener('click' , e => {
        if(e.target.textContent === 'X'){
            const currentCart = Array.from(e.target.parentElement.parentElement.children);
            const clickIndex = currentCart.indexOf(e.target.parentElement);
            cartItems.splice(clickIndex,clickIndex)
            if(clickIndex === 0){
                cartItems.pop()
            }
            localStorage.setItem('cart-items' , JSON.stringify(cartItems));
            e.target.parentElement.remove();
            totalPrice();
        }
    });
}

//TOTAL PRICE
const totalPrice = () => {
    const priceTotal = document.querySelector('.price-total');
    let total = 0;
    cartItems.forEach(item => {
        total += Number(item.price);
    });
    if (priceTotal){
        priceTotal.textContent = `£${total}`;
    }
};
totalPrice();

//FOOTER BOTTOM POSITIONING
const footer = document.querySelector('.footer-stockist-container');
 if(cartItems.length > 0){
     footer.classList.remove('bottom-0');
 } else if (cartItems.length === 0) {
    footer.classList.add('bottom-0');
 }

//CHECKOUT CART - CONTINUE
const continueBtn = document.querySelector('.continue');
const customerInfo = document.querySelector('#checkout-customer-info');
const checkoutCart = document.querySelector('#checkout-cart');
const returnBtn = document.querySelector('.return');
if(continueBtn) {
    continueBtn.addEventListener('click' , e => {
        checkoutCart.classList.add('d-none');
        customerInfo.classList.remove('d-none');
        returnBtn.style.color = 'white';
    });
}

//CHECKOUT CART - SHIPPING/ADDRESS
const paymentBtn = document.querySelector('.payment');
const payPalSection = document.querySelector('#checkout-paypal');

if(paymentBtn){
    paymentBtn.addEventListener('submit' , e => {
        e.preventDefault();
        customerInfo.classList.add('d-none');
        payPalSection.classList.add('d-none');
        e.reset();
    });
}

//CHECKOUT CART - PAYPAL INTERGRATION
