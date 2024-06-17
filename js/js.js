// scripts.js
let currentPage = 1;
const totalPages = 72;
const container = document.getElementById('back-img');
const faceFront = document.getElementById('face-front');
const faceBack = document.getElementById('face-back');

// Posiciones de los botones para cada página (puedes ajustar estas posiciones según tus necesidades)
const buttonPositions = {
    1: [
        { top: '100px', left: '50px' },
        { top: '200px', left: '150px' },
        { top: '300px', left: '250px' }
    ],
    2: [
        { top: '150px', left: '100px' },
        { top: '250px', left: '200px' }
    ],
    // Agrega más configuraciones de botones para otras páginas según sea necesario
};

function updatePage() {
    faceFront.innerHTML = `<img src="/ilovepdf_pages-to-jpg/HV-CATALO-DIGITAL_310723 (1)_page-${currentPage.toString().padStart(4, '0')}.jpg" alt="Página ${currentPage}">`;
    faceBack.innerHTML = `<img src="/ilovepdf_pages-to-jpg/HV-CATALO-DIGITAL_310723 (1)_page-${(currentPage + 1).toString().padStart(4, '0')}.jpg" alt="Página ${(currentPage + 1)}">`;

    container.style.backgroundImage = `url('/ilovepdf_pages-to-jpg/HV-CATALO-DIGITAL_310723 (1)_page-${currentPage.toString().padStart(4, '0')}.jpg')`;

    container.innerHTML = ''; // Limpiar botones anteriores

    // Obtener posiciones de botones para la página actual
    const buttons = buttonPositions[currentPage] || [];
    
    // Crear y agregar botones dinámicamente
    buttons.forEach((btn, index) => {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.style.top = btn.top;
        button.style.left = btn.left;
        button.textContent = `Agregar ${index + 1}`;
        container.appendChild(button);
    });
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        updatePage();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        updatePage();
    }
}

window.onload = updatePage;
