const datumSledecegPomracenja = new Date('25. mart 2024 10:23:00 GMT+0000');

function azurirajOdbrojavanje() {
  const trenutniDatum = new Date();
  const razlikaVremena = datumSledecegPomracenja - trenutniDatum;

  if (razlikaVremena > 0) {
    const dani = Math.floor(razlikaVremena / (1000 * 60 * 60 * 24));
    const sati = Math.floor((razlikaVremena % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minuti = Math.floor((razlikaVremena % (1000 * 60 * 60)) / (1000 * 60));
    const sekunde = Math.floor((razlikaVremena % (1000 * 60)) / 1000);

    document.getElementById('odbrojavanje').innerHTML = `${dani}d ${sati}h ${minuti}m ${sekunde}s`;
  } else {
    document.getElementById('odbrojavanje').innerHTML = "Vreme je prošlo!";
  }
}


setInterval(azurirajOdbrojavanje, 1000);


azurirajOdbrojavanje();