AOS.init();

// HEADER SCRIPT
const menu = document.querySelector('.fa-bars');
const header = document.querySelector('.header');
const section1 = document.querySelector('#section1')
const body = document.querySelector('body');
const modes = document.querySelector('.fa-sun');
const closebtn = document.querySelector('.fa-xmark');
const color = document.querySelector('.fa-palette');
const bodyMode = document.querySelector('.body-mod');
const imgpage2 = document.querySelector('.img-page2');
const allcolor = document.querySelectorAll('.color1');


console.log(header)


closebtn.addEventListener('click', function () {
    section1.classList.toggle('active')
    body.classList.toggle('active')
    imgpage2.classList.toggle('active');
})


menu.addEventListener('click', function () {
    section1.classList.toggle('active')
    body.classList.toggle('active')
    imgpage2.classList.toggle('active');
})


modes.addEventListener('click', function () {
    body.classList.toggle('mode')
}) 

color.addEventListener('click', function () {
     bodyMode.classList.toggle('active')
})

//    the color changing codes
const colors = document.querySelectorAll('.color1');

let i;
for(i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', changecolor)
}

function changecolor () {
    let color = this.getAttribute('data-color');
    document.documentElement.style.setProperty('--color', color);
}


allcolor.forEach( function (color) {
    color.addEventListener('click', function () {
        bodyMode.classList.toggle('active')
    })
})
















// HEADER SCRIPT
// const menu = document.querySelector('.fa-bars');
// const header = document.querySelector('.header');
// const section1 = document.querySelector('#section1')

// menu.addEventListener('click', function () {
//     header.classList.toggle('active');
//     section1.classList.toggle('active')
//     menu.classList.toggle('fa-bars');
//     menu.classList.toggle('fa-xmark');

// })









////////////////////////////////////////////////////////////////////////////////////
// the scroll script

// const scrollNav = function () {
//     if(window.scrollY > header.offsetHeight + 150) {
//         header.classList.add('scroll')
//     }  else {
//         header.classList.remove('scroll')
//     }
// }
// window.addEventListener('scroll', scrollNav)








////////////////////////////////////////////////////////////////////////////////////////////////////
// The section1 script          //  the welcom page animation typing

const typing = document.querySelector('#section1 .job span')

new Typewriter(typing, {
    strings: ['Web Designer',
               'Web Manager',
              'Freelancer',
               'App Designer'],
    autoStart: true,
    loop: true
  })

//   new Typewriter(typing, {
//     strings: ['Web Designer',
//                'Web Manager',
//               'Freelancer',
//                'App Designer'],
//     autoStart: true,
//     loop: true
//   })







//////////////////////////////////////////////////////////////////////////////////////////////////////
//   the scrolling effect to the pages

// const section11 = document.querySelector('#section1');
// console.log(section11)

header.addEventListener('click', function (e) {
    console.log('you just click')
     e.preventDefault();
     const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth'})

})

// logo.addEventListener('click', function () {
//     console.log('you click')
// })


// header.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = e.target.getAttribute('href');
//    //  if (e.target.classList.contains('nav-bar')) {
//        document.querySelector(id).scrollIntoView({ behavior: 'smooth'})
//        // header.classList.remove('active')
//        // header.classList.add('scroll')
//        // menu.classList.toggle('fa-bars');
//        // menu.classList.toggle('fa-xmark');
//    //  }
// })











////////////////////////////////////////////////////////////////////////////////////////////
//  the scroll event to hide the header on scroll up
const logo = document.querySelector('.logo');

let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop < lastScrollTop) {
        logo.classList.add('scroll')
    } else {
        logo.classList.remove('scroll');
    }
    lastScrollTop  = scrollTop;
    
    if(window.scrollY < header.offsetHeight + 250) {
        logo.classList.add('scroll')
    }
})






// const navItems = document.querySelectorAll('header ul a')
// // const body = document.querySelector('body');

// menu.addEventListener('click', function () {
//     if (header.classList.contains('active')) {
//         body.style.overflow = 'hidden';
//     }  else {
//        body.style.overflow = 'visible';
//     }
// })

// navItems.forEach( function (e) {
//       e.addEventListener('click', function () {
//        body.style.overflow = 'visible';
//        header.classList.add('scroll')
//       })
// })



///////////////////////////////////////////////////////////////////////////////////////////////
// the scroll animation
// AOS.init();





// const mode = document.querySelector('.mode-jour-nuit');

// mode.addEventListener('click', function () {

//     body.style.backgroundColor = 'black';
// })





// const screen = document.querySelector('body').innerHTML = 1000;


// document.querySelector("body").innerHTML = 
// "Screen width is " + screen.width - 300;


// console.log(screen);





// console.log(window.innerWidth)

// if (window.innerWidth <= 1000) {
//     console.log('you got it')
//     // section1.classList.toggle('active')
//     body.classList.toggle('active')
//     document.querySelectorAll('ul li a').forEach(function (aa) {
//          aa.addEventListener('click', function () {
//             console.log('you juct clisc')
//             section1.classList.toggle('active');
//             body.classList.toggle('active');
//             imgpage2.classList.toggle('active');
//          })
//     })
        
//     }


    console.log(window.innerWidth)

if (window.innerWidth <= 1000) {
    console.log('you got it')
    // section1.classList.toggle('active')
    // body.classList.toggle('active')

        
    }

    document.querySelectorAll('ul li a').forEach(function (aa) {
         aa.addEventListener('click', function () {
            console.log('you juct clisc')
            section1.classList.toggle('active');
            body.classList.toggle('active');
            imgpage2.classList.toggle('active');
         })
    })






//    the send mail function

    function SendMail(e) {
        var params = {
            from_name : document.getElementById('name').value,
            email_id : document.getElementById('email').value,
            object : document.getElementById('object').value,
            message : document.getElementById('message').value
        }
        emailjs.send('service_me5p4tc','template_y25fwag',params).then(function () {
            alert('The message have been sent successfully, thanks for contacting us');
            // document.querySelector('.thanks').classList.add('active');
        })
    }        





   document.querySelector('.send-message').addEventListener('click', function (e) {
        e.preventDefault();
   })














// window.addEventListener('scroll', function () {
//     if(window.scrollY > header.offsetHeight + 150) {
//         header.classList.add('scroll')
//     }  else {
//         header.classList.remove('scroll')
//     }
// })



// const nav = document.querySelector('.header')
// window.addEventListener('scroll', fixNav)

// function fixNav() {
//     if(window.scrollY > nav.offsetHeight + 150) {
//         nav.classList.add('scroll')
//     } else {
//         nav.classList.remove('scroll')
//     }
// }









