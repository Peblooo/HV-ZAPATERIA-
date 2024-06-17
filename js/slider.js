let currentIndex = 0;
        const slides = document.querySelector('.slides');
        const totalSlides = document.querySelectorAll('.slide').length;

        document.getElementById('next').addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlidePosition();
        });

        document.getElementById('prev').addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlidePosition();
        });

        function updateSlidePosition() {
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        // Cambio automático de imágenes
        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlidePosition();
        }, 8000); // Cambia de imagen cada 5 segundos

        