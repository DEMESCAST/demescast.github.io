const episodios = [
    { num: "EP.59", titulo: "SUZANE BORGES", desc: "Bate-papo com a empresária e especialista em turismo Suzane Borges, proprietária da agência Tairú.", link: "https://www.youtube.com/watch?v=PGOIE_d81jc", thumb: "https://img.youtube.com/vi/PGOIE_d81jc/hqdefault.jpg" },
    { num: "EP.55", titulo: "MARCELA RANGEL", desc: "Bate-papo com Marcela Rangel, diretora do Instituto Dom Barreto.", link: "https://www.youtube.com/watch?v=SpaA-YEM3z8&t=4244s", thumb: "https://img.youtube.com/vi/SpaA-YEM3z8/hqdefault.jpg" },
    { num: "EP.49", titulo: "ALLINE VASCONCELOS", desc: "Bate-papo com a influenciadora e jornalista Alline Vasconcelos sobre os assuntos mais comentados do momento.", link: "https://www.youtube.com/watch?v=bOxzCcRePlU", thumb: "https://img.youtube.com/vi/bOxzCcRePlU/hqdefault.jpg" },
    { num: "EP.44", titulo: "DÉBORA FACCHINETTI", desc: "A escritora Débora Facchinetti retorna ao podcast para falar sobre o lançamento do seu novo livro.", link: "https://www.youtube.com/watch?v=FbkRgjKvisM", thumb: "https://img.youtube.com/vi/FbkRgjKvisM/hqdefault.jpg" },
    { num: "EP.27", titulo: "DRIELLE BERTO E MARCOS VINÍCIUS", desc: "Uma conversa esclarecedora sobre a Doença de Crohn com dois convidados especiais.", link: "https://www.youtube.com/watch?v=zStjlP39tfI", thumb: "https://img.youtube.com/vi/zStjlP39tfI/hqdefault.jpg" },
];

const grid = document.getElementById('episodios-grid');

episodios.forEach(ep => {
    const card = document.createElement('a');
    card.href = ep.link;
    card.target = '_blank';
    card.className = 'ep-card';
    card.innerHTML = `
        <div class="ep-thumb" style="background-image: url('${ep.thumb}')"></div>
        <div class="ep-num">${ep.num}</div>
        <h3>${ep.titulo}</h3>
        <p>${ep.desc}</p>
        <span class="ep-link">Assistir →</span>
    `;
    grid.appendChild(card);
});
