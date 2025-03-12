// Navbar Toggle (cho mobile)
document.getElementById('nav-toggle').addEventListener('click', function () {
    document.getElementById('nav-content').classList.toggle('hidden');
});

// Hiển thị thanh kỹ năng (skill bar) khi scroll đến section Skills
const skillItems = document.querySelectorAll('.skill-item');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBar = entry.target.querySelector('.skill-bar');
            const percent = skillBar.dataset.percent;
            let width = 0;
            const animate = () => {
                if (width < percent) {
                    width += 1;
                    skillBar.style.width = `${width}%`;
                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skillItems.forEach(item => observer.observe(item));

// Xử lý form liên hệ
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
const formError = document.getElementById('form-error');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        formError.classList.remove('hidden');
        formMessage.classList.add('hidden');
        contactForm.classList.add('animate-shake');
        setTimeout(() => contactForm.classList.remove('animate-shake'), 500);
        return;
    }

    // Giả lập gửi form (thay bằng API thực tế nếu cần)
    formMessage.classList.remove('hidden');
    formError.classList.add('hidden');
    contactForm.reset();
});