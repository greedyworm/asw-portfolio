const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');


// SHOW AND HIDDEN MENU============================

    if(navToggle) {
        navToggle.addEventListener('click', ()=> {
            navMenu.classList.add('show-menu')
        })
    };

    if(navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })
    }


    // REMOVE MENU MOBILE================================

    const navLink = document.querySelectorAll('.nav__link');

    navLink.forEach(n => n.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    }))

    // BAGIAN SKILLS=============================================

    const skillsContent = document.getElementsByClassName('skills__content'),
          skillsHeader = document.querySelectorAll('.skills__header');

    function toggleSkills() {
        let itemClass = this.parentNode.className

        for(i= 0; i < skillsContent.length; i++) {
            skillsContent[i].className = 'skills__content skills__close' 
        }
        if(itemClass === 'skills__content skills__close') {
            this.parentNode.className = 'skills__content skills__open'
        }
    }

    skillsHeader.forEach((el) => {
        el.addEventListener('click', toggleSkills)
    })