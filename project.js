const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];

// UI objesini başlatma
const ui = new UI();
// Storage objesi üret
const storage = new Storage();

// Tüm eventleri yükleme
eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
  document.addEventListener("DOMContentLoaded", function () {
    let films = storage.getFilmsFromStorage();

    ui.loadAllFilms(films);
  });
  cardBody.addEventListener("click", deleteFilm);
}
function addFilm(e) {
  const title = titleElement.value;
  const director = directorElement.value;
  const url = urlElement.value;

  if (title === "" || director === "" || url === "") {
    // Hata
    ui.displayMessages("Tüm alanları doldurun...", "danger");
  } else {
    // Yeni Film
    const newFilm = new Film(title, director, url);

    // Yeni filmi arayüze ekleme
    ui.addFilmToUI(newFilm);
    // Storage'a film ekleme
    storage.addFilmToStorage(newFilm);

    ui.displayMessages("Film başarıyla eklendi...", "success");
  }

  ui.clearInputs(titleElement, urlElement, directorElement);

  e.preventDefault();
}
function deleteFilm(e) {
  if (e.target.id === "delete-film") {
    ui.deleteFilmFromUI(e.target);
    storage.deleteFilmFromStorage(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent
    );
    ui.displayMessages("Silme işlemi başarılı...", "success");
  }
}
