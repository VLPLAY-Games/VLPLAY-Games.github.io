let currentImages = [];
let currentIndex = 0;

function openModal(element) {
    try {
        const modal = document.getElementById('image-modal');
        const modalImg = document.getElementById('modal-image');
        const modalCounter = document.getElementById('modal-counter');
        
        // Проверяем, что все необходимые элементы существуют
        if (!modal || !modalImg) {
            console.error('Modal elements not found');
            return;
        }
        
        // Получаем все изображения в текущей сетке скриншотов
        const parentGrid = element.closest('.screenshots-grid');
        const screenshotCards = parentGrid.querySelectorAll('.screenshot-card');
        currentImages = Array.from(screenshotCards).map(card => card.querySelector('img').src);
        
        // Находим индекс текущего изображения
        const clickedImgSrc = element.querySelector('img').src;
        currentIndex = currentImages.indexOf(clickedImgSrc);
        
        if (currentIndex === -1) {
            console.error('Image not found in collection');
            return;
        }
        
        // Устанавливаем изображение и обновляем счетчик
        modalImg.src = currentImages[currentIndex];
        updateCounter();
        
        // Показываем модальное окно
        modal.style.display = 'block';
        // Небольшая задержка для применения display:block перед анимацией
        setTimeout(() => {
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        }, 10);
        
    } catch (error) {
        console.error('Error opening modal:', error);
    }
}

function closeModal() {
    try {
        const modal = document.getElementById('image-modal');
        if (!modal) return;
        
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }, 300);
    } catch (error) {
        console.error('Error closing modal:', error);
    }
}

function navigateModal(direction) {
    try {
        const modalImg = document.getElementById('modal-image');
        if (!modalImg || currentImages.length === 0) return;
        
        currentIndex += direction;
        
        // Зацикливание навигации
        if (currentIndex >= currentImages.length) {
            currentIndex = 0;
        } else if (currentIndex < 0) {
            currentIndex = currentImages.length - 1;
        }
        
        // Анимация смены изображения
        modalImg.style.opacity = '0';
        
        setTimeout(() => {
            modalImg.src = currentImages[currentIndex];
            modalImg.style.opacity = '1';
            updateCounter();
        }, 200);
    } catch (error) {
        console.error('Error navigating modal:', error);
    }
}

function updateCounter() {
    try {
        const modalCounter = document.getElementById('modal-counter');
        if (modalCounter && currentImages.length > 0) {
            modalCounter.textContent = `${currentIndex + 1} / ${currentImages.length}`;
        }
    } catch (error) {
        console.error('Error updating counter:', error);
    }
}

// Инициализация после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('image-modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }
    
    // Навигация клавишами клавиатуры
    document.addEventListener('keydown', function(e) {
        const modal = document.getElementById('image-modal');
        if (modal && modal.style.display === 'block') {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowLeft') navigateModal(-1);
            if (e.key === 'ArrowRight') navigateModal(1);
        }
    });
});