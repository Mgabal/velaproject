// Array of product objects
const products = [
    { name: "Product 1", price: "$99", img: "IMG_20231005_142315_538.jpg" },
    { name: "Product 2", price: "$109", img: "IMG_20231005_142315_538.jpg" },
    { name: "Product 3", price: "$89", img: "IMG_20231005_142315_538.jpg" },
    { name: "Product 4", price: "$120", img: "IMG_20231005_142315_538.jpg" },
    { name: "Product 5", price: "$130", img: "IMG_20231005_142315_538.jpg" },
    { name: "Product 6", price: "$140", img: "IMG_20231005_142315_538.jpg" },
    { name: "Product 7", price: "$150", img: "IMG_20231005_142315_538.jpg" },
    { name: "Product 8", price: "$160", img: "IMG_20231005_142315_538.jpg" },
];

// Pagination settings
let currentPage = 1;
const itemsPerPage = 4;

function displayProducts() {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; // Clear previous products

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);

    currentProducts.forEach(product => {
        const productCard = `
            <div class="product-item">
                <img src="${product.img}" alt="${product.name}">
                <p>Brand Name</p>
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            </div>
        `;
        productContainer.innerHTML += productCard;
    });

    // Update button states
    document.getElementById('prev-btn').disabled = currentPage === 1;
    document.getElementById('next-btn').disabled = endIndex >= products.length;
}

function nextPage() {
    currentPage++;
    displayProducts();
}

function prevPage() {
    currentPage--;
    displayProducts();
}

// Initial display
displayProducts();


// Intersection Observer for Fade-in Effect
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.fade-in').forEach(section => {
        observer.observe(section);
    });
});
