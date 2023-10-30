//Array de imagenes
const imagesCarousel=[`assets/img/logo.png`,"assets/img/Sin título.jpeg","assets/img/1456.jpg","assets/img/123.jpg"]
const carousel=document.querySelector('.carouselImg')
const indicador=document.querySelector(".indicate")
indicador.innerHTML=(`<div class="indicador"></div>`.repeat(imagesCarousel.length))
let indexImages=0
let preloadedImages=[]
imagesCarousel.forEach(path => {
    const img = new Image();
    img.src = path;
    preloadedImages.push(img);
});
const changeSelector=()=>{
    const indicadores=document.querySelectorAll(".indicador")
    indicadores.forEach(element=>{element.style.backgroundColor=`#000`
element.style.border=`solid .2vw #900`})
    indicadores[indexImages].style.backgroundColor=`#fff`
    indicadores[indexImages].style.border=`solid .2vw #090`
}

const carouselAutomatic=()=>{
   intervalId=setInterval(() => {
        passImg()
    }, 5000);
}

const backImg=()=>{
    if(indexImages==0){
        indexImages=imagesCarousel.length-1
    }else{
        indexImages-=1
    }
    carousel.src=preloadedImages[indexImages].src
    clearInterval(intervalId)
    carouselAutomatic()
    changeSelector()
}
const passImg=()=>{
    if(indexImages==imagesCarousel.length-1){
        indexImages=0
    }else{
        indexImages+=1
    }
    carousel.src=preloadedImages[indexImages].src
    clearInterval(intervalId)
    carouselAutomatic()
    changeSelector()
}
carouselAutomatic()