function openModal(imagePath) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");

  modal.style.display = "block";
  modalImage.src = imagePath;
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}
