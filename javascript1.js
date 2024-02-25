const pitanja = [
    {
      tekst: "Koja je najveća planeta u Sunčevom sistemu?",
      odgovori: [
        "Mars",
        "Jupiter",
        "Venera",
        "Saturn"
      ],
      tacanIndeks: 1
    },
    {
      tekst: "Koje od navedenih planeta je julijanska?",
      odgovori: [
        "Merkur",
        "Mars",
        "Zemlja",
        "Venera"
      ],
      tacanIndeks: 1
    },
    {
      tekst: "Koja od navedenih planeta je terestrička?",
      odgovori: [
        "Saturn",
        "Venera",
        "Jupiter",
        "Neptun"
      ],
      tacanIndeks: 1
    },
    {
      tekst: "Koliko ima planeta u Sunčevom sistemu?",
      odgovori: [
        "7",
        "8",
        "9",
        "10"
      ],
      tacanIndeks: 1
    },
    {
      tekst: "Koji je najveći prirodni satelit?",
      odgovori: [
        "Titan",
        "Mesec",
        "Europa",
        "Fobos"
      ],
      tacanIndeks: 1
    }
  ];
  
  const kvizContainer = document.getElementById('kviz-container');
  
  function pokreniKviz() {
    pitanja.forEach((pitanje, indeks) => {
      const pitanjeElement = document.createElement('div');
      pitanjeElement.innerHTML = `<p>${pitanje.tekst}</p>`;
  
      pitanje.odgovori.forEach((odgovor, i) => {
        const dugme = document.createElement('button');
        dugme.innerText = odgovor;
        dugme.addEventListener('click', () => izaberiOdgovor(indeks, i));
        pitanjeElement.appendChild(dugme);
      });
  
      kvizContainer.appendChild(pitanjeElement);
    });
  }
  
  function izaberiOdgovor(indeksPitanja, indeksOdgovora) {
    const tacanIndeks = pitanja[indeksPitanja].tacanIndeks;
  
    if (indeksOdgovora === tacanIndeks) {
      alert('Tačan odgovor!');
    } else {
      alert('Netačan odgovor. Pokušajte ponovo.');
    }
  }
  
  pokreniKviz();
  