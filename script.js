const FOOTBALL_API_KEY = 'ea7017ad5fee423aba954573c238e31c'; // https://football-data.org/client/register

const leagues = [
    { code: 'BSA', name: 'Brasileirão' },
    { code: 'PL', name: 'Premier League' },
    { code: 'PD', name: 'La Liga' },
    { code: 'SA', name: 'Serie A' },
    { code: 'BL1', name: 'Bundesliga' },
    { code: 'CL', name: 'Champions' },
];

async function fetchJogos() {
    const grid = document.getElementById('pitch-grid');
    if (FOOTBALL_API_KEY === 'SUA_CHAVE_AQUI') {
        grid.innerHTML = `<div class="pitch-empty">
            <p style="margin-bottom:12px;font-size:14px;">🔑 Configure sua chave da API football-data.org</p>
            <p style="font-size:13px;color:rgba(255,255,255,0.4);">1. Acesse <a href="https://www.football-data.org/client/register" target="_blank" style="color:#3cb4ff;">football-data.org/client/register</a> e cadastre-se (grátis)</p>
            <p style="font-size:13px;color:rgba(255,255,255,0.4);">2. Copie sua chave e substitua "SUA_CHAVE_AQUI" no script.js</p>
        </div>`;
        return;
    }

    try {
        const proxy = 'https://corsproxy.io/?';
        const url = `https://api.football-data.org/v4/matches?api_key=${FOOTBALL_API_KEY}`;
        const res = await fetch(proxy + encodeURIComponent(url), {
            headers: { 'Accept': 'application/json' }
        });
        if (!res.ok) throw new Error(`Erro ${res.status}`);
        const data = await res.json();
        renderJogos(data.matches || []);
    } catch (e) {
        grid.innerHTML = `<div class="pitch-empty">Erro ao carregar jogos: ${e.message}. <button onclick="fetchJogos()" style="background:#3cb4ff;color:#0f0f15;border:none;padding:8px 16px;border-radius:6px;cursor:pointer;font-weight:600;margin-top:8px;">Tentar novamente</button></div>`;
    }
}

function getStatusInfo(match) {
    const s = match.status;
    if (s === 'LIVE' || s === 'IN_PLAY') return { label: 'AO VIVO', cls: 'live' };
    if (s === 'PAUSED') return { label: 'INTERVALO', cls: 'paused' };
    if (s === 'FINISHED') return { label: 'FINAL', cls: 'finished' };
    if (s === 'TIMED' || s === 'SCHEDULED') {
        const d = new Date(match.utcDate);
        return { label: d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Sao_Paulo' }), cls: 'scheduled' };
    }
    return { label: s, cls: '' };
}

function renderJogos(matches) {
    const leagueCodes = leagues.map(l => l.code);
    const filtered = matches.filter(m => leagueCodes.includes(m.competition.code));

    const tabsContainer = document.getElementById('pitch-tabs');
    const grid = document.getElementById('pitch-grid');

    const uniqueLeagues = [...new Set(filtered.map(m => m.competition.code))];
    const tabLeagues = leagues.filter(l => uniqueLeagues.includes(l.code));

    tabsContainer.innerHTML = '<button class="pitch-tab active" data-league="all">Todos</button>' +
        tabLeagues.map(l => `<button class="pitch-tab" data-league="${l.code}">${l.name}</button>`).join('');

    tabsContainer.querySelectorAll('.pitch-tab').forEach(btn => {
        btn.addEventListener('click', () => {
            tabsContainer.querySelectorAll('.pitch-tab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderCards(filtered, btn.dataset.league);
        });
    });

    renderCards(filtered, 'all');
}

function renderCards(matches, filter) {
    const grid = document.getElementById('pitch-grid');
    const filtered = filter === 'all' ? matches : matches.filter(m => m.competition.code === filter);

    if (filtered.length === 0) {
        grid.innerHTML = `<div class="pitch-empty">Nenhum jogo hoje nesta liga</div>`;
        return;
    }

    grid.innerHTML = filtered.map((m, i) => {
        const status = getStatusInfo(m);
        const homeScore = m.score.fullTime.home !== null ? m.score.fullTime.home : (m.score.current ? m.score.current.home : '');
        const awayScore = m.score.fullTime.away !== null ? m.score.fullTime.away : (m.score.current ? m.score.current.away : '');
        const showScore = status.cls === 'live' || status.cls === 'finished' || status.cls === 'paused';
        const scoreHTML = showScore
            ? `<div class="pitch-score ${status.cls}">${homeScore} × ${awayScore}</div>`
            : `<div class="pitch-score">${status.label}</div>`;

        return `
            <div class="pitch-card" style="animation-delay:${i * 0.06}s">
                <div class="pitch-card-league">
                    ${m.competition.emblem ? `<img src="${m.competition.emblem}" alt="" loading="lazy">` : ''}
                    ${m.competition.name}
                </div>
                <div class="pitch-matchup">
                    <div class="pitch-team">
                        ${m.homeTeam.crest ? `<img src="${m.homeTeam.crest}" alt="${m.homeTeam.name}" loading="lazy">` : ''}
                        <span>${m.homeTeam.name}</span>
                    </div>
                    ${scoreHTML}
                    <div class="pitch-team">
                        ${m.awayTeam.crest ? `<img src="${m.awayTeam.crest}" alt="${m.awayTeam.name}" loading="lazy">` : ''}
                        <span>${m.awayTeam.name}</span>
                    </div>
                </div>
                <div class="pitch-status ${status.cls}">${status.label}</div>
            </div>
        `;
    }).join('');
}

fetchJogos();

const episodios = [
    { num: "EP.65", titulo: "MARIANA MAAD", desc: "Bate-papo com Mariana Maad sobre sua trajetória e os assuntos mais comentados do momento.", link: "https://www.youtube.com/watch?v=itPi6tukl-Q&t=3205s", thumb: "https://img.youtube.com/vi/itPi6tukl-Q/hqdefault.jpg", data: "30 Jun 2026" },
    { num: "EP.64", titulo: "DRA. GIORDANA PORTELA", desc: "Conversa com a Dra. Giordana Portela sobre saúde e bem-estar.", link: "https://www.youtube.com/watch?v=EEN6ZjJ8pqY", thumb: "https://img.youtube.com/vi/EEN6ZjJ8pqY/hqdefault.jpg", data: "23 Jun 2026" },
    { num: "EP.63", titulo: "MAURÍCIO CARVALHO", desc: "Bate-papo com Maurício Carvalho sobre sua trajetória e experiências.", link: "https://www.youtube.com/watch?v=xHUiFE8el34", thumb: "https://img.youtube.com/vi/xHUiFE8el34/hqdefault.jpg", data: "16 Jun 2026" },
    { num: "EP.62", titulo: "MARCELO DIAS", desc: "Conversa com Marcelo Dias sobre sua carreira e histórias inspiradoras.", link: "https://www.youtube.com/watch?v=qGaq19GocBE", thumb: "https://img.youtube.com/vi/qGaq19GocBE/hqdefault.jpg", data: "09 Jun 2026" },
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
