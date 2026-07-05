const episodios = [
    { num: "EP.59", titulo: "SUZANE BORGES", desc: "Bate-papo com a empresária e especialista em turismo Suzane Borges, proprietária da agência Tairú." },
    { num: "EP.44", titulo: "DÉBORA FACCHINETTI", desc: "A escritora Débora Facchinetti retorna ao podcast para falar sobre o lançamento do seu novo livro." },
    { num: "EP.27", titulo: "DRIELLE BERTO E MARCOS VINÍCIUS", desc: "Uma conversa esclarecedora sobre a Doença de Crohn com dois convidados especiais." },
];

const grid = document.getElementById('episodios-grid');

episodios.forEach(ep => {
    const card = document.createElement('a');
    card.href = 'https://www.youtube.com/@demescast/podcasts';
    card.target = '_blank';
    card.className = 'ep-card';
    card.innerHTML = `
        <div class="ep-num">${ep.num}</div>
        <h3>${ep.titulo}</h3>
        <p>${ep.desc}</p>
        <span class="ep-link">Assistir →</span>
    `;
    grid.appendChild(card);
});
