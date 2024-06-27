function Product(item) {
    // a
    const box_cloth = document.createElement('div')
    const box_white = document.createElement('div')
    const img = document.createElement('img')
    const h1 = document.createElement('h1')
    const h6 = document.createElement('h6')
    const cost = document.createElement('div')

    const elem_one = document.createElement('div')
    const elem_two = document.createElement('div')
    const elem_three = document.createElement('div')

    const dollar = document.createElement('img')
    const star = document.createElement('img')
    const box = document.createElement('img')

    const dollar_a = document.createElement('a')
    const star_a = document.createElement('a')
    const box_a = document.createElement('a')
    const button = document.createElement('button')

    // b
    box_cloth.classList.add('box_cloth')
    box_cloth.id = item.id
    box_white.classList.add('box_white')
    h1.classList.add('h1')
    h6.classList.add('h6')
    h1.innerHTML = item.category
    h6.innerHTML = item.description.length > 100 ? item.description.slice(0, 100) + "...a" : item.description
    h6.title = item.description
    cost.classList.add('cost')
    dollar.src = './public/img/dollar.png'
    star.src = './public/img/star.png'
    box.src = './public/img/box.png'
    dollar_a.classList.add('a')
    star_a.classList.add('a')
    box_a.classList.add('a')
    dollar_a.innerHTML = item.price
    star_a.innerHTML = item.rating.rate
    box_a.innerHTML = item.rating.count
    button.classList.add('btn_cloth')
    button.innerHTML = 'В избранное'
    img.src = item.image
    img.classList.add('img_cloth')
    dollar.classList.add('img_svg')
    star.classList.add('img_svg')
    box.classList.add('img_svg')

    // c
    box_cloth.append(box_white, h1, h6, cost, button)
    box_white.append(img)
    cost.append(elem_one, elem_two, elem_three)
    elem_one.append(dollar, dollar_a)
    elem_two.append(star, star_a)
    elem_three.append(box, box_a)

    // d (functions)

    button.onclick = () => {
        const selected = Boolean(cart.find(el => el.id === item.id));

        if (selected) {
            const index = cart.findIndex(el => el.id === item.id);

            if (index !== -1) {
                cart.splice(index, 1);
            }

            button.classList.remove('active-btn');
            button.innerHTML = "В избранное";
        } else {
            cart.push(item);
            button.classList.add('active-btn');
            button.innerHTML = "Добавлено";
        }

        total_view.innerHTML = cart.length;
        reload(cart, cart_cont, CartItem)
    }

    return box_cloth;


   
}
