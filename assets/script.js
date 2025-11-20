// Curseur personnalisé
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    follower.style.left = e.clientX + 'px';
    follower.style.top = e.clientY + 'px';
});

// Modale commande
function openOrder() {
    document.getElementById('orderModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeOrder() {
    document.getElementById('orderModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Fermer avec Échap
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeOrder();
});

// Slider portfolio
const portfolioScroll = document.querySelector(".portfolio-container");

function slideLeft() {
    portfolioScroll.scrollBy({ left: -400, behavior: "smooth" });
}

function slideRight() {
    portfolioScroll.scrollBy({ left: 400, behavior: "smooth" });
}

// Changer viewport (PREVIEW RESPONSIVE)
function setViewport(device) {
    let meta = document.querySelector('meta[name="viewport"]');

    // Si absent → créer auto
    if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "viewport");
        document.head.appendChild(meta);
    }

    if (device === 'mobile') {
        meta.setAttribute('content', 'width=375, initial-scale=1');
    } 
    else if (device === 'tablet') {
        meta.setAttribute('content', 'width=768, initial-scale=1');
    } 
    else {
        meta.setAttribute('content', 'width=device-width, initial-scale=1');
    }
}
document.getElementById("toggleTablet").addEventListener("click", () => {
    document.body.classList.toggle("tablet-mode");
});
// Slider portfolio
function slideLeft() {
    const container = document.getElementById("portfolioContainer");
    container.scrollBy({
        left: -350,
        behavior: "smooth"
    });
}

function slideRight() {
    const container = document.getElementById("portfolioContainer");
    container.scrollBy({
        left: 350,
        behavior: "smooth"
    });
}
