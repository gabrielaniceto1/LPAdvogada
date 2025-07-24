function redirecionarWhatsapp() {
            const assunto = document.getElementById("assunto").value;
            const mensagem = encodeURIComponent(`Olá Dra. Daniela, preciso de ajuda com: ${assunto}`);
            const telefone = "5581999498333"; // número real
            window.open(`https://wa.me/${telefone}?text=${mensagem}`, '_blank');
    }
function revelarAoScroll() {
    const elementos = document.querySelectorAll('.animado');

    elementos.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add('visivel');
        }
    });
}

window.addEventListener('scroll', revelarAoScroll);
window.addEventListener('load', revelarAoScroll);

console.log("Página de vendas carregada.");
 /* slider dos depoimentos */
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  document.querySelector('.next').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
  });

  document.querySelector('.prev').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
  });
function toggleSidebar() {
      document.getElementById('sidebar').classList.toggle('active');
    }