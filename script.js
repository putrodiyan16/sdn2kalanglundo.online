// Navigasi Menu Mobile Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Menutup menu mobile saat tautan diklik
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Penanganan Form Kritik dan Saran
const feedbackForm = document.getElementById('feedbackForm');

feedbackForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value;
    
    // Tampilkan pesan ucapan terima kasih
    alert(`Terima kasih, ${nama}! Kritik dan saran Anda berhasil dikirim.`);

    // Reset isi form
    feedbackForm.reset();
});
