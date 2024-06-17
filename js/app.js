var books = document.querySelectorAll('.book');
var currentPage = 0;
var zIndexCounter = 2;
var bookContainer = document.querySelector('.book-content');

document.querySelector('.next-btn').addEventListener('click', function() {
    if (currentPage < books.length - 1) {
        books[currentPage].style.zIndex = zIndexCounter;
        zIndexCounter++;
        books[currentPage].style.transform = 'rotateY(-180deg)';
        currentPage++;

        // Desplazar el contenedor hacia la derecha
        if (currentPage === books.length - 12) {
            bookContainer.classList.add('opened');
        }
    }
});

document.querySelector('.prev-btn').addEventListener('click', function() {
    if (currentPage > 0) {
        currentPage--;
        books[currentPage].style.zIndex = zIndexCounter;
        zIndexCounter++;
        books[currentPage].style.transform = 'rotateY(0deg)';

        // Mover el contenedor al centro cuando se esté en la portada
        if (currentPage === 0) {
            bookContainer.classList.remove('opened');
        }
    }
});

var middleBookIndex = Math.floor(books.length / 2);
books[middleBookIndex].classList.add('middle');

// Inicializa el z-index para todas las páginas
for (var i = 0; i < books.length; i++) {
    books[i].style.zIndex = books.length - i;
}