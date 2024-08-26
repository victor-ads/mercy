document.addEventListener('DOMContentLoaded', function() {
    const engineersData = [
        { 
            name: "John Doe", 
            role: "MARINE ENG.", 
            skypeId: "john.UZO", 
            picture: "./image/expert/1.png",
            Price: "₦50,000"
        },
        { 
            name: "Jane Smith", 
            role: " Architect", 
            Price: "₦20,000",
            skypeId: "jane.smith", 
            picture: "./image/expert/images (1).jpg"
        },
        { 
            name: "Bob Johnson", 
            role: "BUILDING TECH ENG.", 
            Price: "₦80,000",
            skypeId: "bob.johnson", 
            picture: "./image/expert/1 (6).jpg"
        },
        { 
            name: "Alice Brown", 
            role: "STRUCTUAL ENG.",
            Price: "₦80,000", 
            skypeId: "alice.brown", 
            picture: "./image/expert/images (1).jpg"
        },
        { 
            name: "Eve Green", 
            role: "CIVIL ENG.", 
            Price: "₦25,000",
            skypeId: "eve.green", 
            picture: "./image/expert/33447_hd.jpg"
        },
        

    ];

    const engineersContainer = document.getElementById('engineers-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentPage = 0;
    let cardsPerPage = calculateCardsPerPage()

    function displayEngineers() {
        engineersContainer.innerHTML = '';

        const startIndex = currentPage * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;

        const engineersToShow = engineersData.slice(startIndex, endIndex);

        engineersToShow.forEach(engineer => {
            const card = document.createElement('div');
            card.classList.add('engineer-card');
            card.innerHTML = `
                <div class="engineer-picture">
                    <img src="${engineer.picture}" alt="${engineer.name}">
                </div>
                <div class="engineer-info">
                    <h3>${engineer.name}</h3>
                    <p>${engineer.role}</p>
                    <p>Price: ${engineer.Price}</p>
                    <button class="hire-me-btn" data-name="${engineer.name}" data-price="${engineer.Price}">Hire Me</button>
                </div>
            `;
            engineersContainer.appendChild(card);

            const hireMeBtn = card.querySelector('.hire-me-btn');
            hireMeBtn.addEventListener('click', () => {
                const name = hireMeBtn.getAttribute('data-name');
                const price = hireMeBtn.getAttribute('data-price');
                window.location.href = `payment.html?name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}`;
            });
        });

        prevBtn.disabled = currentPage === 0;
        nextBtn.disabled = endIndex >= engineersData.length;
    }

    function calculateCardsPerPage() {
        const viewportWidth = window.innerWidth;
        if (viewportWidth >= 1024) {
            return 5;
        } else if (viewportWidth >= 768) {
            return 4;
        } else {
            return 1 ;
        }
    }

    function updateSlideAnimation() {
        const containerWidth = engineersContainer.scrollWidth;
        const itemWidth = engineersContainer.clientWidth;
        const numberOfSlides = Math.ceil(containerWidth / itemWidth);

        engineersContainer.style.setProperty('--slide-count', numberOfSlides);
    }

    function startAutoSlide() {
        engineersContainer.classList.remove('paused');
    }

    function stopAutoSlide() {
        engineersContainer.classList.add('paused');
    }

    engineersContainer.addEventListener('mouseenter', stopAutoSlide);
    engineersContainer.addEventListener('mouseleave', startAutoSlide);

    prevBtn.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            displayEngineers();
        }
    });

    nextBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(engineersData.length / cardsPerPage);
        if (currentPage < totalPages - 1) {
            currentPage++;
            displayEngineers();
        }
    });

    window.addEventListener('resize', () => {
        cardsPerPage = calculateCardsPerPage();
        displayEngineers();
        updateSlideAnimation();
    });

    displayEngineers();
    updateSlideAnimation();
    startAutoSlide();
});
