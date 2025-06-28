// Cargar el CSS externo
const style = document.createElement('link');
style.rel = 'stylesheet';
style.href = 'https://catraverso.github.io/Visualizacion-Looker/style.css'; // Cambia si tu URL es diferente
document.head.appendChild(style);

// Cargar la librería dscc
importScripts('https://unpkg.com/@google/dscc/dist/dscc.min.js');

const container = document.createElement('div');
container.className = 'opinion-container';
document.body.appendChild(container);

function renderStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars += '<span class="star full">&#9733;</span>';
    } else if (rating >= i - 0.5) {
      stars += '<span class="star half">&#9733;</span>';
    } else {
      stars += '<span class="star">&#9734;</span>';
    }
  }
  return stars;
}

function drawChart(data) {
  // Simulación de datos (puedes mapear aquí los datos reales de Looker Studio)
  const info = {
    fecha: "11 de septiembre 123",
    rating: 4.5,
    votos: 591,
    porcentaje: 74,
    criterios: [
      { nombre: "Relación precio-calidad", valor: 4.5 },
      { nombre: "Comodidad", valor: 4.5 },
      { nombre: "Calidad de la tela", valor: 4.5 },
      { nombre: "Mantiene su color al lavarlo", valor: 4.5 },
      { nombre: "Mantiene su tamaño al lavarlo", valor: 4.5 }
    ],
    fotos: [
      "https://i.imgur.com/1.jpg",
      "https://i.imgur.com/2.jpg",
      "https://i.imgur.com/3.jpg"
    ],
    opiniones: [
      "Es de buena calidad y muy abrigada, ideal para el uso cotidiano. Se recomienda pedir un talle más, ya que algunas pueden quedar ajustadas al principio. Destaca por su resistencia a los lavados, manteniendo su forma y color, y ofrece una excelente relación precio-calidad."
    ]
  };

  container.innerHTML = `
    <div class="header">
      <span class="fecha">${info.fecha}</span>
      <div class="rating">
        <span class="rating-num">${info.rating}</span>
        <span class="stars">${renderStars(info.rating)}</span>
        <span class="votos">${info.votos} calificaciones</span>
      </div>
      <div class="porcentaje">Al ${info.porcentaje}% le quedó como esperaba</div>
    </div>
    <div class="criterios">
      ${info.criterios.map(c => `
        <div class="criterio">
          <span>${c.nombre}</span>
          <span class="stars">${renderStars(c.valor)}</span>
        </div>
      `).join('')}
    </div>
    <div class="fotos">
      ${info.fotos.map(f => `<img src="${f}" class="foto" />`).join('')}
    </div>
    <div class="opiniones">
      <h4>Opiniones destacadas</h4>
      <p>${info.opiniones[0]}</p>
      <span class="resumen">Resumen de opiniones generado por IA</span>
    </div>
  `;
}

// Suscribirse a los datos de Looker Studio usando dscc
dscc.subscribeToData(drawChart, {transform: dscc.transform.auto});
