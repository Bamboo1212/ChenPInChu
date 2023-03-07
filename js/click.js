const Menu = document.querySelector('#menu')
const Nav = document.querySelector('#nav')
const MenuClear = document.querySelector('.clear_wrap')
const Ahome = document.querySelector('#a_home')
const About = document.querySelector('#a_about')
const Aconatct = document.querySelector('#a_contact')

Menu.addEventListener('click', () =>{
    Nav.style.visibility = getComputedStyle(Nav).visibility === 'hidden' ? 'visible' : 'hidden';
})


const closeModal = () => {
    Nav.style.visibility = 'hidden';
}

MenuClear.addEventListener('click', closeModal)
Ahome.addEventListener('click', closeModal)
About.addEventListener('click', closeModal)
Aconatct.addEventListener('click', closeModal)
