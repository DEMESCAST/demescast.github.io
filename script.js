// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

async function carregarEpisodios() {
    const grid = document.getElementById('episodios-grid');

    try {
        const res = await fetch('episodios-data.json');
        if (!res.ok) throw new Error('sem dados');
        const episodios = await res.json();

        episodios.forEach((ep, i) => {
            const card = document.createElement('a');
            card.href = ep.link;
            card.target = '_blank';
            card.className = 'ep-card';
            card.style.animationDelay = `${i * 0.1}s`;
            card.innerHTML = `
                <div class="ep-thumb" style="background-image: url('https://img.youtube.com/vi/${ep.videoId}/hqdefault.jpg')"></div>
                <div class="ep-num">${ep.num}</div>
                <h3>${ep.titulo}</h3>
                <p>${ep.desc || 'Bate-papo com convidado especial.'}</p>
                <div class="ep-footer">
                    <span class="ep-data"><i class="far fa-calendar-alt"></i> ${ep.data || ''}</span>
                    <span class="ep-link">Assistir →</span>
                </div>
            `;
            grid.appendChild(card);
        });
    } catch (e) {
        grid.innerHTML = '<div class="empty-msg">Episódios em breve...</div>';
    }
}

async function carregarShorts() {
    const grid = document.getElementById('shorts-grid');

    try {
        const res = await fetch('shorts-data.json');
        if (!res.ok) throw new Error('sem dados');
        const shorts = await res.json();

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
            grid.appendChild(card);
        });
    } catch (e) {
        grid.innerHTML = '<div class="empty-msg">Shorts em breve...</div>';
    }
}

carregarEpisodios();
carregarShorts();
