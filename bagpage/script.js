const addToCart = document.querySelectorAll('.addToCart');
let cartQty = document.querySelector('.cartQty span');

const products = document.querySelectorAll('.product')

const openLoginModal = document.querySelector('.loginPopup');
const closeLoginModal = document.querySelector('.btnCloseLoginModal');
const loginModal = document.querySelector('.loginModal');

const openSizeChartModal = document.querySelector('.sizeChartPopup');
const closeSizeChartModal = document.querySelector('.btnCloseSizeChartModal');
const sizeChartModal = document.querySelector('.sizeChartModal');

const modalFadeBackContent = document.querySelector('.fade');
const body = document.querySelector('body');

addToCart.forEach(card => {
    card.addEventListener('click', () => {
        (document.querySelector('.cartQty')).style.display = 'flex';
    })
})

function sumFunction() {
    cartQty.innerHTML = parseInt(cartQty.innerHTML) + 1
}

openLoginModal.addEventListener('click', function(){
    loginModal.classList.replace("loginModal", "loginModalVisible");
    body.style.overflow = "hidden";
    modalFadeBackContent.style.display = "flex";
    sizeChartModal.classList.replace("sizeChartModalVisible", "sizeChartModal")
})

closeLoginModal.addEventListener('click', function(){
    loginModal.classList.replace("loginModalVisible", "loginModal");
    body.style.overflow = "visible";
    modalFadeBackContent.style.display = "none";
})

openSizeChartModal.addEventListener('click', function() {
    sizeChartModal.classList.replace("sizeChartModal", "sizeChartModalVisible");
})

closeSizeChartModal.addEventListener('click', function(){
    sizeChartModal.classList.replace("sizeChartModalVisible", "sizeChartModal");
})

products.forEach(product => {
    product.addEventListener('mouseover', () => {
        (product.querySelector('.addToCart')).style.visibility = 'visible';
        (product.querySelector('.blur').style.filter = 'blur(1.5px');
        (product.querySelector('.sliders').style.visibility = 'visible');
    })
})

products.forEach(product => {
    product.addEventListener('mouseout', () => {
        (product.querySelector('.addToCart')).style.visibility = 'hidden';
        (product.querySelector('.blur')).style.filter = 'none';
        (product.querySelector('.sliders').style.visibility = 'hidden');
    })
})

let mousePosition;
let offset = [0,0];
let isDown = false;
const divHead = document.querySelector('.sizeChartHead');

divHead.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [
        sizeChartModal.offsetLeft - e.clientX,
        sizeChartModal.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    isDown = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {
    
            x : event.clientX,
            y : event.clientY
    
        };
        sizeChartModal.style.left = (mousePosition.x + offset[0]) + 'px';
        sizeChartModal.style.top  = (mousePosition.y + offset[1]) + 'px';
    }
}, true);