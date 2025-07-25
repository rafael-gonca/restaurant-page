import './styles.css';
import { home } from './home';
import { about } from './about';
import { menu } from './menu';

home()

const homeBtn = document.querySelector('#home')
const homeBtnClick = homeBtn.addEventListener('click', () => {
    const contents = document.querySelector('#contents')
    contents.textContent = ''
    home()
})

const aboutBtn = document.querySelector('#about')
const aboutBtnClick = aboutBtn.addEventListener('click', () => {
    const contents = document.querySelector('#contents')
    contents.textContent = ''
    about()
})

const menuBtn = document.querySelector('#menu')
const menuBtnClick = menuBtn.addEventListener('click', () => {
    const contents = document.querySelector('#contents')
    contents.textContent = ''
    menu()
})