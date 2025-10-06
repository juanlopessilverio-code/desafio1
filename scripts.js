const jogadores = [
  {
    nome: "Arrascaeta",
    posicao: "Meia",
    foto: "https://lncimg.lance.com.br/cdn-cgi/image/width=950,quality=75,fit=pad,format=webp/uploads/2023/06/image_placeholder-1-aspect-ratio-512-320-24.jpg"
  },
  {
    nome: "Rossi",
    posicao: "Goleiro",
    foto: "https://gazetadourubu.com/storage/media-items/image/2023/10/Rossi-flamengo-scaled-aspect-ratio-512-320_20231020092352.webp"
  },
  {
    nome: "Pedro",
    posicao: "Atacante",
    foto: "https://www.galaticosonline.com/media/_versions/2025/09/images-5_widexl.jpeg"
  },
  {
    nome: "Jorginho",
    posicao: "Volante",
    foto: "https://s2-ge.glbimg.com/1UUPaRS9hTJOOZu5nbI1JoC5hfU=/0x0:2051x1458/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2025/3/j/oUABKVTFAdJmcQYR7rPA/2025-06-29t212600z-634934843-up1el6t1njbml-rtrmadp-3-soccer-club-fla-fcb.jpg"
  }
];

let indiceAtual = 0;

document.getElementById("btn").addEventListener("click", mostrarTodos);
document.getElementById("btnProximo").addEventListener("click", mostrarProximo);

function mostrarTodos() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  jogadores.forEach(j => {
    resultado.innerHTML += `
      <div class="card">
        <h2>${j.nome}</h2>
        <p><b>Posição:</b> ${j.posicao}</p>
        <img src="${j.foto}" alt="${j.nome}">
      </div>
    `;
  });
}

function mostrarProximo() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  const jogador = jogadores[indiceAtual];
  resultado.innerHTML = `
    <div class="card">
      <h2>${jogador.nome}</h2>
      <p><b>Posição:</b> ${jogador.posicao}</p>
      <img src="${jogador.foto}" alt="${jogador.nome}">
    </div>
  `;

  indiceAtual = (indiceAtual + 1) % jogadores.length;
}
