const episodios = [
    { num: "EP.65", titulo: "MARIANA MAAD", desc: "Bate-papo com Mariana Maad sobre sua trajetória e os assuntos mais comentados do momento.", link: "https://www.youtube.com/watch?v=itPi6tukl-Q&t=3205s", thumb: "https://img.youtube.com/vi/itPi6tukl-Q/hqdefault.jpg", data: "30 Jun 2026" },
    { num: "EP.59", titulo: "SUZANE BORGES", desc: "Bate-papo com a empresária e especialista em turismo Suzane Borges, proprietária da agência Tairú.", link: "https://www.youtube.com/watch?v=PGOIE_d81jc", thumb: "https://img.youtube.com/vi/PGOIE_d81jc/hqdefault.jpg", data: "28 Abr 2026" },
    { num: "EP.55", titulo: "MARCELA RANGEL", desc: "Bate-papo com Marcela Rangel, diretora do Instituto Dom Barreto.", link: "https://www.youtube.com/watch?v=SpaA-YEM3z8&t=4244s", thumb: "https://img.youtube.com/vi/SpaA-YEM3z8/hqdefault.jpg", data: "31 Mar 2026" },
    { num: "EP.49", titulo: "ALLINE VASCONCELOS", desc: "Bate-papo com a influenciadora e jornalista Alline Vasconcelos sobre os assuntos mais comentados do momento.", link: "https://www.youtube.com/watch?v=bOxzCcRePlU", thumb: "https://img.youtube.com/vi/bOxzCcRePlU/hqdefault.jpg", data: "24 Fev 2026" },
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
