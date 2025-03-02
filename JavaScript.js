const menu=document.querySelector(".menu");
const menu1=document.querySelector(".menu1");
const source0=document.querySelector(".source0");
const source1=document.querySelector(".source1");
const source2=document.querySelector(".source2");
const source3=document.querySelector(".source3");
const titleBlock1=document.querySelector(".titleBlock1");
const titleBlock2=document.querySelector(".titleBlock2");
const titleBlock3=document.querySelector(".titleBlock3");
menu.addEventListener("click",function(){
    menu1.style.display="block";
menu1.style.display="block";
menu1.style.width="100vw";
menu1.style.height="100vh";
menu1.style.display="flex";
menu1.style.flexDirection="column";
menu1.style.justifyContent="space-around";
menu1.style.alignItems="center";
menu1.style.fontSize="4vw";
menu1.style.textAlign="center";
body.style.overflow="hidden";
window.scrollTo(0,0);
});
source1.addEventListener("click",function(){
titleBlock1.scrollIntoView({
    block:"start",
    inline:"nearest",
    behavior:"smooth"
});
menu1.style.backgroundImage="url('./icons8-меню.svg')";
menu1.style.display="none";
menu.style.display="block";
});

source2.addEventListener("click",function(){
    titleBlock2.scrollIntoView({
        block:"start",
        inline:"nearest",
        behavior:"smooth"
    });
    menu1.style.backgroundImage="url('./icons8-меню.svg')";
    menu1.style.display="none";
    menu.style.display="block";
    });
source3.addEventListener("click",function(){
    titleBlock3.scrollIntoView({
        block:"start",
        inline:"nearest",
        behavior:"smooth"
    });
    menu1.style.backgroundImage="url('./icons8-меню.svg')";
    menu1.style.display="none";
    menu.style.display="block";
    });
    source0.addEventListener("click",function(){
window.scrollTo(0,0);
        menu1.style.backgroundImage="url('./icons8-меню.svg')";
        menu1.style.display="none";
        menu.style.display="block";
        });