
let screenHeight = $(window).height();
//console.log(screenHeight);

$(window).scroll(function (){
    let currentPosition = $(this).scrollTop();
    console.log(currentPosition);

    if(currentPosition >= screenHeight-280){
        $(".header-nav").addClass("header-nav-scroll");
    }else{
        $(".header-nav").removeClass("header-nav-scroll");
        setActive("home");
    }
});

$(".navbar-toggler").click(function (){
    let result = $(".navbar-collapse").hasClass("show");
    //console.log(result);

    if(result){

        $(".menu-icon").removeClass("fa-times").addClass("fa-bars");

    }else{

        $(".menu-icon").removeClass("fa-bars").addClass("fa-times");
    }
});

function setActive(current){
    $(`.nav-link`).removeClass("active");
    $(`.nav-link[href='#${current}']`).addClass("active");
}

function navScroll(){
    let currentSection = $("section[id]");
    currentSection.waypoint(function (direction){

        if(direction == "down"){
            let currentSectionId = $(this.element).attr('id');
            //console.log(currentSectionId);
            setActive(currentSectionId);
        }

    },{
        offset: '180px'
    });

    currentSection.waypoint(function (direction){

        if(direction == "up"){
            let currentSectionId = $(this.element).attr('id');
            //console.log(currentSectionId);
            setActive(currentSectionId);
        }

    },{
        offset: '180px'
    });
}
navScroll();

document.home = undefined;

document.nav = undefined;

function changeMode(){
    document.body.classList.toggle("night-mode");
    document.home.classList.toggle("home-shape");
    document.nav.classList.toggle("header-nav");
}

wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }
)
wow.init();