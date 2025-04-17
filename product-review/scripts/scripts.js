// scripts.js

const products = [
    { id: 'p001', name: 'Camping Tent' },
    { id: 'p002', name: 'Hiking Boots' },
    { id: 'p003', name: 'Backpack 45L' },
    { id: 'p004', name: 'Sleeping Bag Pro' }
];

const productSelect = document.getElementById('product');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

document.getElementById('year').textContent = new Date().getFullYear();
