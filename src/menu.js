import photo from './imgs/rest.jpeg'
export function menu() {
    const contents = document.querySelector('#contents')

    const title = document.createElement('div')
    title.classList.add('title')
    title.textContent = 'Welcome to Chili’s!'
    contents.appendChild(title)

    const content = document.createElement('div')
    content.classList.add('content')

    const div = document.createElement('div')

    const p3 = document.createElement('p')
    content.classList.add('center')
    content.classList.add('white')
    p3.textContent = `today's menu`

    div.appendChild(p3)

    const items = [
        { name: "spicy chicken wings", price: "$12.99" },
        { name: "cheeseburger deluxe", price: "$10.49" },
        { name: "classic caesar salad", price: "$8.99" },
        { name: "grilled salmon", price: "$16.50" },
        { name: "bbq ribs plate", price: "$18.75" },
        { name: "veggie quesadilla", price: "$9.99" },
        { name: "loaded nachos", price: "$11.49" },
        { name: "tex-mex tacos (3 pcs)", price: "$13.25" },
        { name: "chocolate lava cake", price: "$6.75" },
        { name: "homemade lemonade", price: "$3.50" },
    ];

    items.forEach(item => {
        const line = document.createElement('div');
        line.classList.add('menu-item');

        const name = document.createElement('span');
        name.classList.add('item-name');
        name.textContent = item.name;

        const dots = document.createElement('span');
        dots.classList.add('dots');
        dots.textContent = ".".repeat(200);

        const price = document.createElement('span');
        price.classList.add('item-price');
        price.textContent = item.price;

        line.appendChild(name);
        line.appendChild(dots);
        line.appendChild(price);
        div.appendChild(line);
    });

        content.appendChild(div)

        contents.appendChild(content);

    const img = document.createElement('img')
    img.src = photo
    img.alt = "restaurant image"
    img.classList.add('img-menu')

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