const btnModal = document.querySelectorAll(".btn-modal");
const modalBody = document.querySelector(".modal-body");

btnModal.forEach((btn) => {
  btn.addEventListener("click", modal);
});

function modal(e) {
  const id = e.target.dataset.id;
  const modalTitle = document.querySelector(".modal-title");
  const modalLink = document.querySelector(".modal-link");
  const modalText = document.querySelector(".modal-text");
  const modalImg = document.querySelector(".modal-img");
  const sourceAvif = document.querySelector(".source-avif");
  const sourceWebp = document.querySelector(".source-webp");

  switch (id) {
    case "1":
      modalTitle.textContent = "Commerce AI";
      modalLink.href = "https://www.commerce.ai";
      modalText.textContent =
        "Posicioné una nueva marca comercial (en línea) y diseñé un sitio web adaptado y hecho a medida.";
      sourceAvif.srcset = "./build/img/work-layout-1.avif";
      sourceWebp.srcset = "./build/img/work-layout-1.avif";
      modalImg.src = "./build/img/work-layout-1.jpg";
      break;
    case "2":
      modalTitle.textContent = "Walkers";
      modalLink.href = "https://www.newenglandwalkers.com/";
      modalText.textContent =
        "He estado trabajando con Zeb en varios otros proyectos en el último año. Cuando se contactó conmigo para hablar sobre un proyecto que se desarrollaba en torno al diseño de una tienda web personalizada para su padre, inmediatamente me interesé e inspiré. Esto resultó ser un proyecto realmente inspirador y divertido en el que trabajar en conjunto, lo que dio como resultado un sitio web de diseño personalizado y muy creativo con una tienda en línea.";
      sourceAvif.srcset = "./build/img/work-layout-2.avif";
      sourceWebp.srcset = "./build/img/work-layout-2.avif";
      modalImg.src = "./build/img/work-layout-2.jpg";
      break;
    case "3":
      modalTitle.textContent = "Hey Textile";
      modalLink.href = "https://www.heytextile.com/";
      modalText.textContent =
        "Lori es dueña de su negocio junto con su esposo. Resultan ser una de esas empresas con las que me encanta trabajar. Me dan mucha libertad en mi proceso de diseño creativo, pero aún tienen muchas de sus propias ideas que quieren combinar. Este proyecto resultó ser un proyecto super divertido para trabajar juntos. ¡Ambos estamos imaginando una buena relación de negocios para trabajar nuevamente en proyectos futuros!";
      sourceAvif.srcset = "./build/img/work-layout-3.avif";
      sourceWebp.srcset = "./build/img/work-layout-3.avif";
      modalImg.src = "./build/img/work-layout-3.jpg";
      break;
    case "4":
      modalTitle.textContent = "Basis Networks";
      modalLink.href = "https://www.basisnetworks.com.au/";
      modalText.textContent =
        "Tom me contactó con la idea de hacer un rediseño completo de su sitio web (obsoleto) y también hacer que responda. Estaba buscando un sitio web de aplicación de estilo moderno y me dio mucha libertad para crear un diseño que tenía en mente. El resultado es un sitio web de aspecto moderno del que ambos estamos orgullosos.";
      sourceAvif.srcset = "./build/img/work-layout-4.avif";
      sourceWebp.srcset = "./build/img/work-layout-4.avif";
      modalImg.src = "./build/img/work-layout-4.jpg";
      break;
    case "5":
      modalTitle.textContent = "Swingvy";
      modalLink.href = "https://www.swingvy.com/";
      modalText.textContent =
        "He estado trabajando con el equipo de Shale Capital Group desde 2014. Hemos trabajado juntos en varios proyectos de sitios web de (re) diseño y (re) marca. Estoy muy contento de que nuestra relación continua demuestre que puedo ofrecer la calidad que requieren en sus proyectos.";
      sourceAvif.srcset = "./build/img/work-layout-5.avif";
      sourceWebp.srcset = "./build/img/work-layout-5.avif";
      modalImg.src = "./build/img/work-layout-5.jpg";
      break;
    case "6":
      modalTitle.textContent = "Lash Spa Studio";
      modalLink.href = "https://dekalash.com/";
      modalText.textContent =
        "He estado trabajando con el equipo de Shale Capital Group desde 2014. Hemos trabajado juntos en varios proyectos de sitios web de (re) diseño y (re) marca. Estoy muy contento de que nuestra relación continua demuestre que puedo ofrecer la calidad que requieren en sus proyectos.";
      sourceAvif.srcset = "./build/img/work-layout-6.avif";
      sourceWebp.srcset = "./build/img/work-layout-6.avif";
      modalImg.src = "./build/img/work-layout-6.jpg";
      break;
    case "7":
      modalTitle.textContent = "Bambuu";
      modalLink.href = "https://www.bambuu.nl/";
      modalText.textContent =
        "He estado trabajando con Bambuu BV como diseñador gráfico y diseñador web de forma regular desde 2014. Bambuu ha demostrado ser un negocio de inicio muy exitoso en los Países Bajos y estoy muy contento de poder ofrecer la calidad de trabajo que ofrecen. Requieren en sus proyectos.";
      sourceAvif.srcset = "./build/img/work-layout-7.avif";
      sourceWebp.srcset = "./build/img/work-layout-7.avif";
      modalImg.src = "./build/img/work-layout-7.jpg";
      break;
    case "8":
      modalTitle.textContent = "Webflow";
      modalLink.href = "https://webflow.com/";
      modalText.textContent =
        "Fue justo al comienzo de mi negocio (principios de 2014), cuando el equipo de Webflow me contactó después de haber visto algunos de mis sitios web basados en Webflow. Estaban lanzando un Template Marketplace en ese entonces y me pidieron que fuera parte de él. ¡He estado creando plantillas de flujo web html5 modernas y receptivas para ellos desde entonces!";
      sourceAvif.srcset = "./build/img/work-layout-8.avif";
      sourceWebp.srcset = "./build/img/work-layout-8.avif";
      modalImg.src = "./build/img/work-layout-8.jpg";
      break;
    default:
      break;
  }
}
