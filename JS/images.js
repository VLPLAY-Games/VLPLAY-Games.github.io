function openModal(imgElement) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    modalImg.src = imgElement.src;
  
    modal.style.display = 'block';
    setTimeout(function () {
      modal.classList.add('show');
    }, 50); // Добавляем небольшую задержку для плавного появления
}
  
function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.classList.remove('show');
    setTimeout(function () {
      modal.style.display = 'none';
    }, 300);
}