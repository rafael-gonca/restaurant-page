import photo from './imgs/inside.png'
import logoChilis from './imgs/logo.png'
export function home() {
    const contents = document.querySelector('#contents')

    const title = document.createElement('div')
    title.classList.add('title')
    title.textContent = 'Welcome to Chili’s!'
    contents.appendChild(title)

    const content = document.createElement('div')
    content.classList.add('content')

    const div = document.createElement('div')

    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const logo = document.createElement('img')
    p2.classList.add('center')
    p2.classList.add('white')
    logo.classList.add('card-logo')
    const div1 = document.createElement('div')
    div1.classList.add('center')
    const div2 = document.createElement('div')
    div2.classList.add('center')
    const div3 = document.createElement('div')
    div3.classList.add('center')
    logo.src = logoChilis
    logo.alt = "chilis logo"
    p1.textContent = 'at chili’s, you will find the best of bold flavors and high-quality ingredients. our restaurant is the perfect place to gather with family, meet up with friends, or simply enjoy a delicious meal in a warm and friendly atmosphere.'
    p2.textContent = 'our hours'
    div1.textContent = 'Mon-Wed: 8am - 7pm'
    div2.textContent = 'Thu-Fri: 8am - 10pm'
    div3.textContent = 'Sat-Sun: 9am - 12pm'
    
    div.appendChild(logo)
    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(div1)
    div.appendChild(div2)
    div.appendChild(div3)
    content.appendChild(div)

    const img = document.createElement('img')
    img.src = photo
    img.alt = "restaurant image"
    img.classList.add('img-home')

    content.appendChild(img)

    contents.appendChild(content)
}

// <!-- <div class="title">welcome to chili<span>’</span>s!</div>
// <div class="content">
//     <div>
//         <p>at chili’s, you will find the best of bold flavors and high-quality ingredients. our restaurant is the perfect place to gather with family, meet up with friends, or simply enjoy a delicious meal in a warm and friendly atmosphere.</p>
//         <p>our hours</p>
//         <div>Mon-Fri: 8am - 10pm</div>
//         <div>Sat-Sun: 9am - 12pm</div>
//     </div>
//     <img src="imgs/restaurant.jpg" alt="restaurant image">
// </div> -->