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

// Nonaktifkan fitur autocomplete browser pada input.
// Ini untuk mencegah browser menyimpan dan menyarankan riwayat pengetikan.
answerInput.setAttribute('autocomplete', 'off');

// Ini adalah data clue saat ini
let gameData = {
    // Edit deskripsi petunjuk di sini
    clueDescription: 'wah paket dataku habis dan aku miskin.',
    // Edit jawaban benar di sini
    correctAnswer: 'asdfghjkl'
};

// Fungsi untuk memperbarui tampilan game dengan data baru
function updateGameDisplay() {
    // Tautan gambar telah diganti dengan nama file Anda: clue444.jpg
    clueImage.src = 'clue444.jpg';
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

// Tambahkan event listener untuk tombol Buka WhatsApp
redirectButton.addEventListener('click', () => {
    // GANTI NOMOR DAN PESAN DI SINI UNTUK TAUTAN WHATSAPP
    const phoneNumber = '+6285755259164'; // Ganti dengan nomor telepon Anda (gunakan kode negara)
    const message = encodeURIComponent('Halo, jawaban saya benar!'); // Ganti dengan pesan yang Anda inginkan
    window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
});

// Panggil fungsi untuk menampilkan clue awal saat halaman dimuat
updateGameDisplay();
