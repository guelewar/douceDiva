import presentationImage from './assets/presentation-image.jpg';
import './css/style.css';

document.querySelector('#app').innerHTML = `
<section class="presentation">
  <div class="container">
    <h2 class="presentation-title hidden-left">Bienvenue sur notre site!</h2>
    <p class="presentation-text hidden-left">Découvrez notre collection exclusive de produits féminins, conçus pour vous faire sentir belle et confiante.</p>
    <p class="presentation-subtext hidden-left">Explorez nos articles tendances, des vêtements aux accessoires, pour exprimer votre style unique.</p>
    <img src=${presentationImage} alt="Collection de produits féminins" class="presentation-image hidden-right">
    <ul class="benefits-list hidden-right">
      <li>Des vêtements de qualité fabriqués avec les meilleurs tissus</li>
      <li>Des designs uniques pour chaque pièce</li>
      <li>Une livraison rapide et un service clientèle exceptionnel</li>
    </ul>
    <div class="buttons-container hidden-left">
      <button class="btn">Découvrir</button>
      <button class="btn btn-secondary">Voir la collection</button>
    </div>
    <div class="video-container hidden-right">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/c67K8JO1WJE?si=TdiUY24nef8cc2lT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="quote-container hidden-left">
      <blockquote class="customer-quote">
        "J'adore les vêtements de ce site! Ils sont non seulement beaux mais aussi très confortables. Je les recommande vivement!"
        <cite> - Sophie, cliente fidèle</cite>
      </blockquote>
    </div>
    <div class="social-media hidden-right">
      <h3>Suivez-nous sur les réseaux sociaux</h3>
      <ul class="social-icons">
        <li><a href="#" class="social-icon"><i class='bx bxl-facebook'></i></a></li>
        <li><a href="#" class="social-icon"><i class='bx bxl-instagram'></i></a></li>
        <li><a href="#" class="social-icon"><i class='bx bxl-twitter'></i></a></li>
        <li><a href="#" class="social-icon"><i class='bx bxl-pinterest'></i><a></li>
      </ul>
    </div>
    <div class="newsletter hidden-left">
      <h3>Abonnez-vous à notre newsletter</h3>
      <form action="#" method="POST" class="newsletter-form">
        <input type="email" name="email" placeholder="Votre adresse email" required>
        <button type="submit" class="btn btn-secondary">S'abonner</button>
      </form>
    </div>
  </div>
</section>

`;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenLeftElements = document.querySelectorAll('.hidden-left');
const hiddenRightElements = document.querySelectorAll('.hidden-right');

hiddenLeftElements.forEach((el) => observer.observe(el));
hiddenRightElements.forEach((el) => observer.observe(el));