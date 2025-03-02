const menu=document.querySelector(".menu");
const menu1=document.querySelector(".menu1");
const source0=document.querySelector(".source0");
const source1=document.querySelector(".source1");
const source2=document.querySelector(".source2");
const source3=document.querySelector(".source3");
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
window.scrollTo(0,1);
window.onscroll=function(){
    window.scrollTo(0,0);
};
});
source1.addEventListener("click",function(){
    window.onscroll=function(){};
    const titleBlock1=document.querySelector(".titleBlock1");
titleBlock1.scrollIntoView({
    block:"start",
    inline:"nearest",
    behavior:"instant",
});
menu.style.backgroundImage="url('./icons8-меню.svg')";
menu1.style.display="none";
menu.style.display="block";
});
source2.addEventListener("click",function(){
    window.onscroll=function(){};
    const titleBlock2=document.querySelector(".titleBlock2");
    titleBlock2.scrollIntoView({
        block:"start",
        inline:"nearest",
        behavior:"auto",
    });
    menu.style.backgroundImage="url('./icons8-меню.svg')";
    menu1.style.display="none";
    menu.style.display="block";
    });
source3.addEventListener("click",function(){
    window.onscroll=function(){};
    const titleBlock3=document.querySelector(".titleBlock3");
    titleBlock3.scrollIntoView({
        block:"start",
        inline:"nearest",
        behavior:"instant",
    });
    menu.style.backgroundImage="url('./icons8-меню.svg')";
    menu1.style.display="none";
    menu.style.display="block";
    });
    source0.addEventListener("click",function(){
        window.onscroll=function(){};
        menu.style.backgroundImage="url('./icons8-меню.svg')";
        menu1.style.display="none";
        menu.style.display="block";
        });