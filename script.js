//Array de imagenes
const imagesCarousel=[`assets/img/sss.jpeg`,"assets/img/Sin título.jpeg","assets/img/1456.jpg","assets/img/123.heif"]
const carousel=document.querySelector('.carouselImg')
const indicador=document.querySelector(".indicate")
indicador.innerHTML=(`<i class="indicador fa-solid fa-minus"></i>`.repeat(imagesCarousel.length))
let indexImages=0
let preloadedImages=[]
imagesCarousel.forEach(path => {
    const img = new Image();
    img.src = path;
    preloadedImages.push(img);
});
const changeSelector=()=>{
    const indicadores=document.querySelectorAll(".indicador")
    indicadores.forEach(element=>{element.style.color=`#000`})
    indicadores[indexImages].style.color=`#4467`
}

const backImg=()=>{
    if(indexImages==0){
        indexImages=imagesCarousel.length-1
    }else{
        indexImages-=1
    }
    carousel.src=preloadedImages[indexImages].src
    changeSelector()
}
const passImg=()=>{
    if(indexImages==imagesCarousel.length-1){
        indexImages=0
    }else{
        indexImages+=1
    }
    carousel.src=preloadedImages[indexImages].src
    changeSelector()
}
