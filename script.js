// File JavaScript ini adalah otak dari game.
// Kode ini mengambil elemen-elemen dari halaman, memeriksa jawaban,
// dan memperbarui tampilan saat terjadi interaksi.

// Ambil elemen-elemen dari DOM
const clueImage = document.getElementById('clue-image');
const imageAltText = document.getElementById('image-alt-text');
const answerInput = document.getElementById('answer-input');
const submitButton = document.getElementById('submit-button');
const messageArea = document.getElementById('message-area');
const redirectButton = document.getElementById('redirect-button');
const redirectButtonContainer = document.getElementById('redirect-button-container');

// Ini adalah data clue saat ini
let gameData = {
    // Edit deskripsi petunjuk di sini
    clueDescription: 'wah paket dataku habis dan aku miskin.',
    // Edit jawaban benar di sini
    correctAnswer: 'asdfghjkl'
};

// Fungsi untuk memperbarui tampilan game dengan data baru
function updateGameDisplay() {
    // Menggunakan placeholder image yang benar
    clueImage.src = 'https://placehold.co/600x400/22c55e/ffffff?text=FOTO+CLUE';
    clueImage.alt = gameData.clueDescription;
    imageAltText.textContent = gameData.clueDescription;
    answerInput.value = '';
    messageArea.textContent = 'Menunggu jawaban...';
    messageArea.className = 'mt-4 text-center text-lg font-semibold text-gray-700';
    redirectButtonContainer.classList.add('hidden'); // Sembunyikan tombol redirect
}

// Fungsi untuk menangani klik tombol
function handleSubmit() {
    // Menggunakan try-catch untuk penanganan error yang lebih baik
    try {
        const userAnswer = answerInput.value.toLowerCase().trim();
        const correctAnswer = gameData.correctAnswer.toLowerCase().trim();

        if (userAnswer === correctAnswer) {
            messageArea.textContent = 'Benar! Jawabanmu tepat!';
            messageArea.className = 'mt-4 text-center text-lg font-semibold text-green-700';
            // Tampilkan tombol redirect baru
            redirectButtonContainer.classList.remove('hidden');
        } else {
            messageArea.textContent = 'Salah. Coba lagi!';
            messageArea.className = 'mt-4 text-center text-lg font-semibold text-red-600';
            // Sembunyikan tombol jika jawaban salah
            redirectButtonContainer.classList.add('hidden');
        }
    } catch (error) {
        // Tangani error dan tampilkan pesan
        messageArea.textContent = `Terjadi kesalahan: ${error.message}`;
        messageArea.className = 'mt-4 text-center text-lg font-semibold text-red-600';
        console.error("Terjadi kesalahan dalam fungsi handleSubmit:", error);
    }
}

// Tambahkan event listener untuk tombol Kirim Jawaban
submitButton.addEventListener('click', handleSubmit);

// Tambahkan event listener untuk tombol Buka Google
redirectButton.addEventListener('click', () => {
    window.location.href = 'https://www.google.com';
});

// Panggil fungsi untuk menampilkan clue awal saat halaman dimuat
updateGameDisplay();
