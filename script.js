//Array de imagenes
const imagesCarousel=["assets/img/hyperL.jpg",`assets/img/fastFill.jpg`,"assets/img/FLOW.jpg","assets/img/Extrem.jpg"]
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
element.style.border=`solid .2vw #000`})
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