'use strict';

const basketCounter = document.querySelector('.cartIconWrap span');
const basketTotalValue = document.querySelector('.basketTotalValue');
const basketEl = document.querySelector('.basket');
const basketTotal = document.querySelector('.basketTotal');

document.querySelector('.cartIconWrap').addEventListener('click', () => {
    basketEl.classList.toggle('hidden');
});

const basket = {};

document.querySelector('.featuredItems').addEventListener('click', event => {
    if (!event.target.closest('.addToCard')) {
        return;
    }
    const featuredItem = event.target.closest('.featuredItem');
    const id = +featuredItem.dataset.id;
    const name = featuredItem.dataset.name;
    const price = +featuredItem.dataset.price;
    addToCard(id, name, price);
});

function addToCard(id, name, price) {
    if (!(id in basket)) {
        basket[id] = {
            id: id,
            name: name,
            price: price,
            count: 0
        };
    }
    basket[id].count++;
    basketCounter.textContent = getBasketCount().toString();
    basketTotalValue.textContent = getBasketPrice().toFixed(2);
    renderProductInBasket(id);
}

function getBasketCount() {
    return Object.values(basket)
        .reduce((acc, product) => acc + product.count, 0);
}

function getBasketPrice() {
    return Object.values(basket)
        .reduce((acc, product) => acc + product.count * product.price, 0);
}

function renderProductInBasket(id) {
    const basketRowEl = basketEl
        .querySelector(`.basketRow[data-productId="${id}"]`);
    if (!basketRowEl) {
        renderNewProductInBasket(id);
        return;
    }
    basketRowEl.querySelector('.productCount').textContent = basket[id].count;
    basketRowEl.querySelector('.productTotalRow').textContent = basket[id].price * basket[id].count;
}

function renderNewProductInBasket(productId) {
    const productRow = `
        <div class='basketRow' data-productId='${productId}'>
            <div>${basket[productId].name}</div>
            <div>
                <span class='productCount'>${basket[productId].count}</span>
            </div>
            <div>$${basket[productId].price}</div>
            <div>
                $<span class='productTotalRow'>${(basket[productId]
            .price * basket[productId].count)}</span>
            </div>
        </div>
    `;
    basketTotal.insertAdjacentHTML('beforebegin', productRow);
}
