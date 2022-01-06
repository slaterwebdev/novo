const carouselItems= document.querySelectorAll('.carousel-caption');

//Carousel content
setInterval(() => {
    carouselItems.forEach((item)=> {
        if(item.parentNode.parentNode.classList.contains('active')){
            item.style.opacity = '1';
        } else if (!item.parentNode.parentNode.classList.contains('active')) {
            item.style.opacity = '0';
        }
    });
}, 30)



