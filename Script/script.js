document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animasi ikon hamburger menjadi X
        hamburger.classList.toggle('toggle');
    });

    // --- 2. Typing Effect untuk Judul ---
    const textElement = document.querySelector('.typing-text span');
    const textToType = "BlazFox"; 
    // Jika ingin mengubah teks, ganti textToType di atas
    // Note: CSS sudah mengatur konten statis, JS ini opsional 
    // jika ingin efek mengetik berulang bisa ditambahkan logic lebih kompleks.
    
    // --- 3. Scroll Animation (Fade In) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-element');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden-element');
    hiddenElements.forEach((el) => observer.observe(el));
});