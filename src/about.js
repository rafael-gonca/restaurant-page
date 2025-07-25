import photo from './imgs/restaurant.jpg'
export function about() {
    const contents = document.querySelector('#contents')

    const title = document.createElement('div')
    title.classList.add('title')
    title.textContent = 'Welcome to Chili’s!'
    contents.appendChild(title)

    const content = document.createElement('div')
    content.classList.add('content')

    const div = document.createElement('div')

    const div1 = document.createElement('p')
    div1.classList.add('center')
    div1.classList.add('white')
    const div2 = document.createElement('p')
    div2.classList.add('justify')
    const div3 = document.createElement('div')
    div3.classList.add('justify')
    div1.textContent = 'about us'
    div2.textContent = "Founded with a passion for bold flavors and great company, Chili’s is more than just a restaurant — it’s a place where good food brings people together. From our sizzling specialties to our warm hospitality, everything we do is meant to make you feel right at home."
    div3.textContent = "Our mission is to serve high-quality meals with a smile, in a space where everyone feels welcome. Whether you're here for a quick bite or a family celebration, we’re proud to be part of your story."
    

    div.appendChild(div1)
    div.appendChild(div2)
    div.appendChild(div3)
    content.appendChild(div)

    const img = document.createElement('img')
    img.src = photo
    img.alt = "restaurant image"
    img.classList.add('img-about')

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