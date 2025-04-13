const message = document.getElementById("message");
const resetBtn = document.getElementById("resetBtn");
const overlay = document.querySelector(".overlay");
const clickSound = document.getElementById("clickSound");
const ambientSound = document.getElementById("ambientSound");
const muteBtn = document.getElementById("muteBtn");
const volumeSlider = document.getElementById("volumeSlider");

let isMuted = false;  // Is the sound muted
let ambientSoundStarted = false; 

const messages = [
  "Ne postoji nemoguće, samo nije još vreme.",
  "Svaka greška je samo korak bliže tvom cilju.",
  "Ti si stvoritelj svog uspeha.",
  "Usmeravanje energije na pozitivno menja tvoju stvarnost.",
  "Nemoj da se plašiš da budeš drugačiji, to je tvoj najveći adut.",
  "Tvoje ideje su moćne, upotrebi ih.",
  "Sve što ti treba je već u tebi, samo trebaš da veruješ.",
  "Svaka odluka koju doneseš vodi ka tvojoj budućnosti.",
  "Upornost je važnija od savršenstva.",
  "Tvoj potencijal je neograničen, iskoristi ga.",
  "Veruj u svaki korak koji praviš, jer te on vodi ka cilju.",
  "Upornost i hrabrost su najjači saveznici na putu ka uspehu.",
  "Samo ti možeš da stvoriš svoju sreću.",
  "Tvoje mogućnosti nisu ograničene, samo tvoje misli mogu biti.",
  "Koraci koje praviš danas postavljaju temelje za sutra.",
  "Ništa nije bolje nego uspeh koji si postigao svojim trudom.",
  "Veruj u svoju unutrašnju snagu i sposobnosti.",
  "Svaki početak nosi nove mogućnosti.",
  "Tvoje strahove pretvori u motivaciju.",
  "Tvoj napredak je rezultat tvoje posvećenosti.",
  "Svaka prepreka je samo prilika da postaneš jači.",
  "Tvoj rad se uvek isplati, samo budi strpljiv.",
  "Veruj u svoje sposobnosti, jer samo ti znaš šta je moguće.",
  "Svaka odluka koju doneseš, vodi te bliže tvom cilju.",
  "Snaga nije u tome da ne padaš, već da se stalno podižeš.",
  "Postavi ciljeve i nemoj stati dok ih ne dostigneš.",
  "Svaka greška je samo prilika da budeš bolji.",
  "Upornost je tajna uspeha.",
  "Sve što ti treba je da veruješ u sebe.",
  "Snaga je u tome da nastaviš, uprkos svemu.",
  "Samopouzdanje je tvoje najveće bogatstvo.",
  "Tvoje misli kreiraju tvoje postupke.",
  "Tvoj uspeh zavisi od tvoje vere u sebe.",
  "Ništa nije nemoguće ako veruješ da možeš.",
  "Upornost je put do uspeha.",
  "Rad na sebi je najbolji investicija za tvoju budućnost.",
  "Samo onaj koji nikada ne odustaje, stiže do cilja.",
  "Tvoj napredak zavisi od tvoje posvećenosti.",
  "Usmeri svoju pažnju na ono što možeš da postigneš, a ne na ono što ne možeš.",
  "Svaka akcija vodi ka uspehu.",
  "Tvoj uspeh je odraz tvoje predanosti i truda.",
  "Usmerite energiju ka svojim ciljevima, a ne ka problemima.",
  "Tvoje misli stvaraju tvoju stvarnost.",
  "Samo onaj koji pokušava nešto novo može da postigne nešto veliko.",
  "Svaki korak, ma koliko mali, vodi te ka cilju.",
  "Veruj da možeš i već si na pola puta.",
  "Tvoje mogućnosti su neograničene, sve zavisi od tvoje vere u sebe.",
  "Svaka nova prilika je šansa za rast.",
  "Nemoj čekati savršen trenutak, stvori ga.",
  "Samo ti možeš da stvoriš svoj put.",
  "Svaka borba koju vodiš čini te jačim.",
  "Svi tvoji snovi su dostižni, ako se boriš za njih."
];

const gradients = [
  "linear-gradient(135deg, #fc466b, #3f5efb)",
  "linear-gradient(135deg, #00c6ff, #0072ff)",
  "linear-gradient(135deg, #f7971e, #ffd200)",
  "linear-gradient(135deg, #00b09b, #96c93d)",
  "linear-gradient(135deg, #eecda3, #ef629f)",
  "linear-gradient(135deg, #bdc3c7, #2c3e50)",
  "linear-gradient(135deg, #8360c3, #2ebf91)",
  "linear-gradient(135deg, #e96443, #904e95)",
  "linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b)",
  "linear-gradient(135deg, #a1ffce, #faffd1)",
  "linear-gradient(135deg, #667eea, #764ba2)"
];

// Function to randomly pick a message or gradient
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to apply a fade-in effect on the message
function fadeMessage(newText) {
  message.classList.remove("fade-in", "animate");
  void message.offsetWidth; // Reflow
  message.innerText = newText;
  message.classList.add("fade-in", "animate");
}

// Function to play ambient sound
function playAmbientSound() {
  if (!ambientSoundStarted) {
    ambientSound.play();  // Start playing sound
    ambientSoundStarted = true;  
  }
}

resetBtn.addEventListener("click", () => {
  const newMessage = getRandomItem(messages);
  const newGradient = getRandomItem(gradients);

  clickSound.currentTime = 0;
  clickSound.play();

  fadeMessage(newMessage);
  overlay.style.background = newGradient;

  playAmbientSound();
});

muteBtn.addEventListener("click", () => {
  isMuted = !isMuted;
  ambientSound.muted = isMuted;
  
  clickSound.currentTime = 0;
  clickSound.play();

  muteBtn.innerText = isMuted ? "Unmute Sound" : "Mute Sound";
});

volumeSlider.addEventListener("input", () => {
  ambientSound.volume = volumeSlider.value;
});
