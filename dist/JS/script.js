const kamote = document.querySelectorAll(".item .item__top")
kamote.forEach((kamoteq) => {
    kamoteq.addEventListener("click", () => {
        kamoteq.nextElementSibling.classList.toggle("open");
        kamoteq.querySelector("i").classList.toggle("open");
        kamote.style
    })
})

const toggleMenuDev = document.querySelector(".toggle__menu");
const headerDev = document.querySelector(".header__nav");
toggleMenuDev.addEventListener("click", () => {
  toggleMenuDev.classList.toggle("open");
  headerDev.classList.toggle("open");
  headerDev.style=("transition:.5s ease");
});

const toggleDotsDev = document.querySelector(".toggle__dots");
const headerDots = document.querySelector(".header__dots");
toggleDotsDev.addEventListener("click", () => {
  toggleDotsDev.classList.toggle("open");
  headerDots.classList.toggle("open");
  headerDots.style=("transition:.5s ease");
});

const isa =document.querySelector("#isa");
const dalwa =document.querySelector("#dalwa");
const tatlo =document.querySelector("#tatlo");
const tex =document.querySelectorAll(".tex");
const gg =document.querySelectorAll(".nav_acc a");


const isa_content =document.querySelector("#isa_content");
const dalwa_content =document.querySelector("#dalwa_content");
const tatlo_content =document.querySelector("#tatlo_content");

isa.addEventListener("click",()=>{
  clearActive();
  isa_content.classList.toggle("active")
  isa.classList.toggle("active")
  
})
dalwa.addEventListener("click",()=>{
  clearActive();
  dalwa_content.classList.toggle("active")
  dalwa.classList.toggle("active")
  
})
tatlo.addEventListener("click",()=>{
  clearActive();
  tatlo_content.classList.toggle("active")
  tatlo.classList.toggle("active")
  
})

const clearActive = ()=>{
  tex.forEach((item)=>{
    item.classList.remove("active")
  })
  gg.forEach((item)=>{
    item.classList.remove("active")
  })
}


function removeActiveStar(){
  hoverNav.forEach((hover) =>{
      hover.classList.remove("active");
  })
}


// const discoverNav=document.querySelectorAll(".discover__nav__link");
// const starContent=document.querySelectorAll(".discover__tab__content");
// discoverNav.forEach((star) => {
//     star.addEventListener("click", () => {
//         removeActiveStar();
//         star.classList.add("active");
//         const activeContent= document.querySelector(`#${star.id}-content`);
//         removeActiveContent();
//         activeContent.classList.add("active");
//     })
// })

// function removeActiveStar(){
//   discoverNav.forEach((star) =>{
//       star.classList.remove("active");
//   })
// }
// function removeActiveContent(){
//   starContent.forEach((star) =>{
//       star.classList.remove("active");
//   })
// }











// //-------Links rewards--------//

// const barbecue = document.querySelectorAll(".linksR__item h4")
// barbecue.forEach((barbecueq) => {
//   barbecueq.addEventListener("click", () => {
//     barbecueq.nextElementSibling.classList.toggle("open");
//     barbecueq.querySelector("i").classList.toggle("open");
//     })
// })


// const headerB = document.querySelector(".header");
// window.addEventListener("scroll", () => {
//   console.log(window.pageYOffset);
//   if (window.pageYOffset >= 100){
//     headerB.classList.add("shadowB");
//   }else{
//     headerB.classList.remove("shadowB");
//   }
// })

// const backtotops = document.querySelector(".backtotop");
// window.addEventListener("scroll", () => {
//   console.log(window.pageYOffset);
//   if (window.pageYOffset >= 100){
//     backtotops.classList.add("show");
//   }else{
//     backtotops.classList.remove("show");
//   }
// })

// const kamote = document.querySelectorAll(".links__item h4")
// kamote.forEach((kamoteq) => {
//     kamoteq.addEventListener("click", () => {
//         kamoteq.nextElementSibling.classList.toggle("open");
//         kamoteq.querySelector("i").classList.toggle("open");
//     })
// })

// const toggleMenu = document.querySelector(".toggle__menu");
// const headerNav = document.querySelector(".header__NAV");
// toggleMenu.addEventListener("click", () => {
//   toggleMenu.classList.toggle("open");
//   headerNav.classList.toggle("open");
// });

// const starNav=document.querySelectorAll(".star__nav__link");
// const starContent=document.querySelectorAll(".coffee__tab__content");
// starNav.forEach((star) => {
//     star.addEventListener("click", () => {
//         removeActiveStar();
//         star.classList.add("active");
//         const activeContent= document.querySelector(`#${star.id}-content`);
//         removeActiveContent();
//         activeContent.classList.add("active");
//     })
// })

// function removeActiveStar(){
//   starNav.forEach((star) =>{
//       star.classList.remove("active");
//   })
// }
// function removeActiveContent(){
//   starContent.forEach((star) =>{
//       star.classList.remove("active");
//   })
// }

