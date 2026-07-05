const episodios = [
    { num: "EP.65", titulo: "MARIANA MAAD", desc: "Bate-papo com Mariana Maad sobre sua trajetória e os assuntos mais comentados do momento.", link: "https://www.youtube.com/watch?v=itPi6tukl-Q&t=3205s", thumb: "https://img.youtube.com/vi/itPi6tukl-Q/hqdefault.jpg", data: "30 Jun 2026" },
    { num: "EP.64", titulo: "DRA. GIORDANA PORTELA", desc: "Conversa com a Dra. Giordana Portela sobre saúde e bem-estar.", link: "https://www.youtube.com/watch?v=EEN6ZjJ8pqY", thumb: "https://img.youtube.com/vi/EEN6ZjJ8pqY/hqdefault.jpg", data: "23 Jun 2026" },
    { num: "EP.63", titulo: "MAURÍCIO CARVALHO", desc: "Bate-papo com Maurício Carvalho sobre sua trajetória e experiências.", link: "https://www.youtube.com/watch?v=xHUiFE8el34", thumb: "https://img.youtube.com/vi/xHUiFE8el34/hqdefault.jpg", data: "16 Jun 2026" },
    { num: "EP.62", titulo: "MARCELO DIAS", desc: "Conversa com Marcelo Dias sobre sua carreira e histórias inspiradoras.", link: "https://www.youtube.com/watch?v=qGaq19GocBE", thumb: "https://img.youtube.com/vi/qGaq19GocBE/hqdefault.jpg", data: "09 Jun 2026" },
    { num: "EP.60", titulo: "ANTONIO LENT", desc: "Bate-papo com Antonio Lent sobre sua trajetória profissional.", link: "https://www.youtube.com/watch?v=R4yVD3cv0Yg", thumb: "https://img.youtube.com/vi/R4yVD3cv0Yg/hqdefault.jpg", data: "26 Mai 2026" },
    { num: "EP.59", titulo: "SUZANE BORGES", desc: "Bate-papo com a empresária e especialista em turismo Suzane Borges.", link: "https://www.youtube.com/watch?v=PGOIE_d81jc", thumb: "https://img.youtube.com/vi/PGOIE_d81jc/hqdefault.jpg", data: "28 Abr 2026" },
    { num: "EP.58", titulo: "MARI MOURA", desc: "Conversa com Mari Moura sobre sua trajetória e projetos.", link: "https://www.youtube.com/watch?v=IlWvPYMYgFE", thumb: "https://img.youtube.com/vi/IlWvPYMYgFE/hqdefault.jpg", data: "21 Abr 2026" },
    { num: "EP.55", titulo: "MARCELA RANGEL", desc: "Bate-papo com Marcela Rangel, diretora do Instituto Dom Barreto.", link: "https://www.youtube.com/watch?v=SpaA-YEM3z8&t=4244s", thumb: "https://img.youtube.com/vi/SpaA-YEM3z8/hqdefault.jpg", data: "31 Mar 2026" },
];

const grid = document.getElementById('episodios-grid');

episodios.forEach((ep, i) => {
    const card = document.createElement('a');
    card.href = ep.link;
    card.target = '_blank';
    card.className = 'ep-card';
    card.style.animationDelay = `${i * 0.1}s`;
    card.innerHTML = `
        <div class="ep-thumb" style="background-image: url('${ep.thumb}')"></div>
        <div class="ep-num">${ep.num}</div>
        <h3>${ep.titulo}</h3>
        <p>${ep.desc}</p>
        <div class="ep-footer">
            <span class="ep-data"><i class="far fa-calendar-alt"></i> ${ep.data}</span>
            <span class="ep-link">Assistir →</span>
        </div>
    `;
    grid.appendChild(card);
});

const shorts = [
    { id: "gdpXyH2z8L4", titulo: "Numerologia", link: "https://youtube.com/shorts/gdpXyH2z8L4" },
    { id: "2pbYt3Ba_yo", titulo: "Baralho Petit Lenormand", link: "https://youtube.com/shorts/2pbYt3Ba_yo" },
    { id: "frpjjCDARVw", titulo: "Rinite é alergia?", link: "https://youtube.com/shorts/frpjjCDARVw" },
    { id: "9I9MZLozo1c", titulo: "Alergias em Crianças", link: "https://youtube.com/shorts/9I9MZLozo1c" },
];

const shortsGrid = document.getElementById('shorts-grid');

shorts.forEach((s, i) => {
    const card = document.createElement('a');
    card.href = s.link;
    card.target = '_blank';
    card.className = 'short-card';
    card.style.animationDelay = `${i * 0.1}s`;
    card.innerHTML = `
        <div class="short-thumb" style="background-image: url('https://img.youtube.com/vi/${s.id}/hqdefault.jpg')">
            <div class="short-play"><i class="fas fa-play"></i></div>
        </div>
        <h3>${s.titulo}</h3>
    `;
    shortsGrid.appendChild(card);
});
