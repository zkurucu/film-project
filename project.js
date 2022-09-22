const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

// UI objesini başlatma
const ui = new UI();

// Tüm eventleri yükleme
eventListeners();

function eventListeners() {
  form.addEventListener("submit", addFilm);
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
    ui.displayMessages("Film başarıyla eklendi...", "success");
  }

  ui.clearInputs(titleElement, urlElement, directorElement);

  e.preventDefault();
}
