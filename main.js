function bos1(r){
    let rasmlar =document.querySelectorAll("#rasmlar")
    kattarasm.src=r.src
    for (let i = 0; i < rasmlar.length; i++) {
        rasmlar[i].classList.remove("active")
    }
    r.classList.add("active" )
}





window.addEventListener('DOMContentLoaded' , function(){

    window.addEventListener("scroll", function () {
        let header =this.document.querySelector("header");
        header.classList.toggle('sticky' , window.scrollY > 5)
    })

    let menuBtn=document.querySelector(".menu-btn")
    let navigation =document.querySelector(".navigation")
    let navigationItems =document.querySelectorAll(".navigation a")
    let contain =document.querySelector(".container")

    menuBtn.addEventListener('click' , () => {
        navigation.classList.toggle('active2')
        menuBtn.classList.toggle('active2')
        contain.classList.toggle("active")
    })

    navigationItems.forEach(navItem => {
        navItem.addEventListener('click' , () => {
            menuBtn.classList.remove('active2')
            navigation.classList.remove('active2')
            contain.classList.remove('active')
        })
    })

    let scrollBtn = document.querySelector(".scrollTop-btn")
    window.addEventListener('scroll',() =>{
        scrollBtn.classList.toggle('active3' , window.scrollY > 500)
    })
    scrollBtn.addEventListener("click", () => {
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0;
    })
})

