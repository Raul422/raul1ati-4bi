// Banco de dados de músicas e álbuns
const albuns = [
    {
        id: 'drake-views',
        titulo: "Views",
        artista: "Drake",
        capaUrl: "https://i.scdn.co/image/ab67616d0000b273ea3ef7697cfd5705b8f47521",
        ano: "2016",
        musicas: [
            { titulo: "Keep The Family Close", duracao: "5:28" },
            { titulo: "9", duracao: "4:15" },
            { titulo: "U With Me?", duracao: "4:57" },
            { titulo: "Feel No Ways", duracao: "4:00" },
            { titulo: "Hype", duracao: "3:29" },
            { titulo: "One Dance", duracao: "2:54" },
            { titulo: "Hotline Bling", duracao: "4:27" }
        ]
    },
    {
        id: 'drake-scorpion',
        titulo: "Scorpion",
        artista: "Drake",
        capaUrl: "https://i.scdn.co/image/ab67616d0000b273f907de96b9a4fbc04accc0d5",
        ano: "2018",
        musicas: [
            { titulo: "Survival", duracao: "2:16" },
            { titulo: "Nonstop", duracao: "3:58" },
            { titulo: "God's Plan", duracao: "3:18" },
            { titulo: "In My Feelings", duracao: "3:37" },
            { titulo: "Nice For What", duracao: "3:30" }
        ]
    },
    {
        id: 'drake-clb',
        titulo: "Certified Lover Boy",
        artista: "Drake",
        capaUrl: "https://i.scdn.co/image/ab67616d0000b2739416ed64daf84936d89e671c",
        ano: "2021",
        musicas: [
            { titulo: "Champagne Poetry", duracao: "5:36" },
            { titulo: "Way 2 Sexy", duracao: "4:17" },
            { titulo: "Fair Trade", duracao: "4:51" },
            { titulo: "Knife Talk", duracao: "4:00" },
            { titulo: "Girls Want Girls", duracao: "3:41" }
        ]
    },
    {
        id: '50cent-grodt',
        titulo: "Get Rich or Die Tryin'",
        artista: "50 Cent",
        capaUrl: "https://i.scdn.co/image/ab67616d0000b273f7f74100d5cc850e01172cbf",
        ano: "2003",
        musicas: [
            { titulo: "In Da Club", duracao: "3:13" },
            { titulo: "21 Questions", duracao: "3:44" },
            { titulo: "P.I.M.P.", duracao: "4:09" },
            { titulo: "Many Men", duracao: "4:16" },
            { titulo: "If I Can't", duracao: "3:39" }
        ]
    },
    {
        id: 'travis-astro',
        titulo: "ASTROWORLD",
        artista: "Travis Scott",
        capaUrl: "https://i.scdn.co/image/ab67616d0000b273072e9faef2ef7b6db63834a3",
        ano: "2018",
        musicas: [
            { titulo: "SICKO MODE", duracao: "5:12" },
            { titulo: "STARGAZING", duracao: "4:31" },
            { titulo: "BUTTERFLY EFFECT", duracao: "3:10" },
            { titulo: "STOP TRYING TO BE GOD", duracao: "5:38" },
            { titulo: "YOSEMITE", duracao: "2:30" }
        ]
    },
    {
        id: 'kendrick-damn',
        titulo: "DAMN.",
        artista: "Kendrick Lamar",
        capaUrl: "https://i.scdn.co/image/ab67616d0000b273d28d2ebdedb220e479743797",
        ano: "2017",
        musicas: [
            { titulo: "HUMBLE.", duracao: "2:57" },
            { titulo: "DNA.", duracao: "3:05" },
            { titulo: "LOYALTY.", duracao: "3:47" },
            { titulo: "ELEMENT.", duracao: "3:28" },
            { titulo: "LOVE.", duracao: "3:32" }
        ]
    },
    {
        id: 'travis-utopia',
        titulo: "UTOPIA",
        artista: "Travis Scott",
        capaUrl: "https://i.scdn.co/image/ab67616d0000b273881d8d8378cd01099babcd44",
        ano: "2023",
        musicas: [
            { titulo: "HYAENA", duracao: "3:42" },
            { titulo: "THANK GOD", duracao: "2:56" },
            { titulo: "MODERN JAM", duracao: "3:51" },
            { titulo: "MY EYES", duracao: "4:12" },
            { titulo: "FE!N", duracao: "3:10" }
        ]
    },
    {
        id: 'kendrick-butterfly',
        titulo: "To Pimp a Butterfly",
        artista: "Kendrick Lamar",
        capaUrl: "https://i.scdn.co/image/ab67616d0000b273cdb645498cd3d8a2db4d05e1",
        ano: "2015",
        musicas: [
            { titulo: "Alright", duracao: "3:39" },
            { titulo: "King Kunta", duracao: "3:54" },
            { titulo: "The Blacker the Berry", duracao: "5:28" },
            { titulo: "i", duracao: "3:52" },
            { titulo: "Wesley's Theory", duracao: "4:47" }
        ]
    }
];

const musicas = {
    brasileiras: [
        {
            titulo: "Envolver",
            artista: "Anitta",
            capaUrl: "https://i.scdn.co/image/ab67616d0000b273c9f744b1a8552cc6c994a769",
            duracao: "3:13"
        },
        {
            titulo: "Funk Rave",
            artista: "Anitta",
            capaUrl: "https://i.scdn.co/image/ab67616d0000b273f71d8c3f82fb5b6468845696",
            duracao: "2:58"
        },
        {
            titulo: "Chico",
            artista: "Luísa Sonza",
            capaUrl: "https://i.scdn.co/image/ab67616d0000b273e5a0c7eaf79950c3d62eba30",
            duracao: "2:47"
        },
        {
            titulo: "Café da Manhã",
            artista: "Luan Santana",
            capaUrl: "https://i.scdn.co/image/ab67616d0000b273da2a587cbfe968f4c21cc795",
            duracao: "3:12"
        }
    ],
    globais: [
        {
            titulo: "As It Was",
            artista: "Harry Styles",
            capaUrl: "https://i.scdn.co/image/ab67616d0000b2732e8ed79e177ff6011076f5f7"
        },
        {
            titulo: "Anti-Hero",
            artista: "Taylor Swift",
            capaUrl: "https://i.scdn.co/image/ab67616d0000b273bb54dde68cd23e2a268ae0f5"
        },
        {
            titulo: "In Da Club",
            artista: "50 Cent",
            capaUrl: "https://i.scdn.co/image/ab67616d0000b273f7f74100d5cc850e01172cbf",
            duracao: "3:13"
        },
        {
            titulo: "SICKO MODE",
            artista: "Travis Scott",
            capaUrl: "https://i.scdn.co/image/ab67616d0000b273072e9faef2ef7b6db63834a3",
            duracao: "5:12"
        },
        {
            titulo: "HUMBLE.",
            artista: "Kendrick Lamar",
            capaUrl: "https://i.scdn.co/image/ab67616d0000b273d28d2ebdedb220e479743797",
            duracao: "2:57"
        },
        {
            titulo: "God's Plan",
            artista: "Drake",
            capaUrl: "https://i.scdn.co/image/ab67616d0000b273f907de96b9a4fbc04accc0d5",
            duracao: "3:18"
        }
    ]
};

const biblioteca = [
    {
        titulo: "Músicas Curtidas",
        tipo: "Playlist",
        quantidade: "247 músicas",
        capaUrl: "https://misc.scdn.co/liked-songs/liked-songs-640.png"
    },
    {
        titulo: "Descobertas da Semana",
        tipo: "Playlist",
        quantidade: "30 músicas",
        capaUrl: "https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/bUuUYJHxj8OtUGwV_--YEQ==/default"
    }
];

let currentView = 'home';

function mostrarView(view) {
    const content = document.querySelector('.content');
    currentView = view;
    
    switch(view) {
        case 'home':
            content.innerHTML = `
                <header>
                    <div class="user-controls">
                        <div class="nav-buttons">
                            <button onclick="mostrarView('${currentView}')"><i class="fas fa-chevron-left"></i></button>
                            <button><i class="fas fa-chevron-right"></i></button>
                        </div>
                        <div class="user-profile">
                            <img src="https://i.pravatar.cc/32" alt="User">
                            <span>Usuário</span>
                        </div>
                    </div>
                </header>
                <section class="featured">
                    <h1>Descobertas da Semana</h1>
                    <div class="featured-sections">
                        <div class="section-card">
                            <h2>Top Brasil</h2>
                            <div id="lista-brasil"></div>
                        </div>
                        <div class="section-card">
                            <h2>Top Global</h2>
                            <div id="lista-global"></div>
                        </div>
                    </div>
                    <h2 class="section-title">Álbuns do Momento</h2>
                    <div class="album-grid" id="albums-grid"></div>
                </section>
            `;
            renderizarSecao(musicas.brasileiras, 'lista-brasil');
            renderizarSecao(musicas.globais, 'lista-global');
            renderizarAlbuns();
            break;
            
        case 'search':
            content.innerHTML = `
                <header>
                    <div class="search-container">
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="O que você quer ouvir?" onkeyup="buscarMusicas(this.value)">
                    </div>
                </header>
                <div id="resultados-busca"></div>
            `;
            break;
            
        case 'library':
            content.innerHTML = `
                <header>
                    <h1>Sua Biblioteca</h1>
                </header>
                <div class="biblioteca-grid" id="biblioteca-grid"></div>
            `;
            renderizarBiblioteca();
            break;
    }
}

function mudarAba(aba) {
    // Remove active class from all tabs
    document.querySelectorAll('.nav-links li').forEach(item => {
        item.classList.remove('aba-ativa');
    });
    
    // Add active class to selected tab
    document.getElementById(`nav-${aba}`).classList.add('aba-ativa');
    
    // Update content based on selected tab
    const content = document.querySelector('.content');
    
    switch(aba) {
        case 'inicio':
            content.innerHTML = `
                <header>
                    <div class="user-controls">
                        <div class="nav-buttons">
                            <button onclick="voltarParaInicio()"><i class="fas fa-chevron-left"></i></button>
                            <button><i class="fas fa-chevron-right"></i></button>
                        </div>
                        <div class="user-profile">
                            <img src="https://i.pravatar.cc/32" alt="User">
                            <span>Usuário</span>
                        </div>
                    </div>
                </header>
                <section class="featured">
                    <h1>Descobertas da Semana</h1>
                    <div class="featured-sections">
                        <div class="section-card">
                            <h2>Top Brasil</h2>
                            <div id="lista-brasil"></div>
                        </div>
                        <div class="section-card">
                            <h2>Top Global</h2>
                            <div id="lista-global"></div>
                        </div>
                    </div>
                    <h2 class="section-title">Álbuns do Momento</h2>
                    <div class="album-grid" id="albums-grid"></div>
                </section>
            `;
            carregarConteudoInicial();
            break;
            
        case 'buscar':
            content.innerHTML = `
                <header>
                    <div class="search-container">
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="O que você quer ouvir?" onkeyup="buscarMusicas(this.value)">
                    </div>
                </header>
                <div id="resultados-busca"></div>
            `;
            break;
            
        case 'biblioteca':
            content.innerHTML = `
                <header>
                    <h1>Sua Biblioteca</h1>
                    <div class="biblioteca-filtros">
                        <button onclick="filtrarBiblioteca('todas')">Todas</button>
                        <button onclick="filtrarBiblioteca('musicas')">Músicas</button>
                        <button onclick="filtrarBiblioteca('albuns')">Álbuns</button>
                        <button onclick="filtrarBiblioteca('artistas')">Artistas</button>
                    </div>
                </header>
                <div class="biblioteca-lista"></div>
            `;
            carregarBiblioteca('todas');
            break;

        case 'podcasts':
            content.innerHTML = `
                <header>
                    <h1>Podcasts</h1>
                </header>
                <p class="coming-soon">Em breve! Estamos trabalhando nisso.</p>
            `;
            break;

        case 'playlists':
            content.innerHTML = `
                <header>
                    <h1>Suas Playlists</h1>
                    <button class="criar-playlist">
                        <i class="fas fa-plus"></i> Nova Playlist
                    </button>
                </header>
                <div class="playlists-grid">
                    ${biblioteca.map(item => `
                        <div class="playlist-card">
                            <img src="${item.capaUrl}" alt="${item.titulo}">
                            <h3>${item.titulo}</h3>
                            <p>${item.quantidade}</p>
                        </div>
                    `).join('')}
                </div>
            `;
            break;
    }
}

function filtrarBiblioteca(filtro) {
    const todasMusicas = [
        ...musicas.brasileiras,
        ...musicas.globais,
        ...albuns.flatMap(album => 
            album.musicas.map(musica => ({
                titulo: musica.titulo,
                artista: album.artista,
                capaUrl: album.capaUrl,
                duracao: musica.duracao,
                album: album.titulo
            }))
        )
    ];

    let conteudo;
    switch(filtro) {
        case 'musicas':
            conteudo = todasMusicas;
            break;
        case 'albuns':
            conteudo = albuns;
            break;
        case 'artistas':
            conteudo = [...new Set(todasMusicas.map(m => m.artista))].map(artista => ({
                nome: artista,
                capaUrl: todasMusicas.find(m => m.artista === artista).capaUrl
            }));
            break;
        default:
            conteudo = todasMusicas;
    }

    renderizarBibliotecaFiltrada(conteudo, filtro);
}

function carregarBiblioteca(filtro) {
    // Combina todas as músicas em um array
    const todasMusicas = [
        ...musicas.brasileiras,
        ...musicas.globais,
        ...albuns.flatMap(album => 
            album.musicas.map(musica => ({
                titulo: musica.titulo,
                artista: album.artista,
                capaUrl: album.capaUrl,
                duracao: musica.duracao,
                album: album.titulo
            }))
        )
    ];
    
    let conteudo;
    switch(filtro) {
        case 'musicas':
            conteudo = todasMusicas;
            break;
        case 'albuns':
            conteudo = albuns;
            break;
        case 'artistas':
            conteudo = [...new Set(todasMusicas.map(m => m.artista))].map(artista => ({
                nome: artista,
                capaUrl: todasMusicas.find(m => m.artista === artista).capaUrl
            }));
            break;
        default:
            conteudo = todasMusicas;
    }

    // Ordena por título
    conteudo.sort((a, b) => a.titulo.localeCompare(b.titulo));
    
    // Renderiza na biblioteca
    const container = document.getElementById('secao-biblioteca');
    container.innerHTML = `
        <h1>Sua Biblioteca</h1>
        <div class="biblioteca-lista">
            ${conteudo.map(musica => `
                <div class="musica-card" onclick="playMusica('${musica.titulo}', '${musica.artista}', '${musica.capaUrl}')">
                    <img src="${musica.capaUrl}" alt="${musica.titulo}">
                    <div class="musica-info">
                        <h3>${musica.titulo}</h3>
                        <p>${musica.artista}</p>
                        <span>${musica.album ? `Álbum: ${musica.album}` : ''}</span>
                        <span>${musica.duracao || ''}</span>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Função para buscar músicas
function buscarMusicas(termo) {
    if (!termo) {
        document.getElementById('resultados-busca').innerHTML = '';
        return;
    }

    const todasMusicas = [
        ...musicas.brasileiras,
        ...musicas.globais,
        ...albuns.flatMap(album => 
            album.musicas.map(musica => ({
                titulo: musica.titulo,
                artista: album.artista,
                capaUrl: album.capaUrl,
                duracao: musica.duracao,
                album: album.titulo
            }))
        )
    ];

    const resultados = todasMusicas.filter(musica => 
        musica.titulo.toLowerCase().includes(termo.toLowerCase()) ||
        musica.artista.toLowerCase().includes(termo.toLowerCase()) ||
        (musica.album && musica.album.toLowerCase().includes(termo.toLowerCase()))
    );

    const container = document.getElementById('resultados-busca');
    container.innerHTML = resultados.length ? resultados.map(musica => `
        <div class="musica-card" onclick="playMusica('${musica.titulo}', '${musica.artista}', '${musica.capaUrl}')">
            <img src="${musica.capaUrl}" alt="${musica.titulo}">
            <div class="musica-info">
                <h3>${musica.titulo}</h3>
                <p>${musica.artista}</p>
                <span>${musica.album ? `Álbum: ${musica.album}` : ''}</span>
                <span>${musica.duracao || ''}</span>
            </div>
        </div>
    `).join('') : '<p class="no-results">Nenhuma música encontrada</p>';
}

function renderizarBiblioteca() {
    const container = document.getElementById('biblioteca-grid');
    biblioteca.forEach(item => {
        container.innerHTML += `
            <div class="biblioteca-card">
                <img src="${item.capaUrl}" alt="${item.titulo}">
                <h3>${item.titulo}</h3>
                <p>${item.tipo} • ${item.quantidade}</p>
            </div>
        `;
    });
}

function renderizarSecao(musicas, containerId) {
    const container = document.getElementById(containerId);
    musicas.slice(0, 3).forEach(musica => {
        container.innerHTML += `
            <div class="musica-card">
                <img src="${musica.capaUrl}" alt="${musica.titulo}">
                <div class="musica-info">
                    <h3>${musica.titulo}</h3>
                    <p>${musica.artista}</p>
                    <span>${musica.duracao}</span>
                </div>
            </div>
        `;
    });
}

function renderizarAlbuns() {
    const container = document.getElementById('albums-grid');
    container.innerHTML = albuns.map(album => `
        <div class="album-card" onclick="mostrarAlbum('${album.id}')">
            <img src="${album.capaUrl}" alt="${album.titulo}">
            <h3>${album.titulo}</h3>
            <p>${album.artista} • ${album.ano}</p>
        </div>
    `).join('');
}

// Função para carregar conteúdo inicial
function carregarConteudoInicial() {
    // Carregar Top Brasil
    const listaBrasil = document.getElementById('lista-brasil');
    listaBrasil.innerHTML = musicas.brasileiras.map(musica => `
        <div class="musica-card" onclick="playMusica('${musica.titulo}', '${musica.artista}', '${musica.capaUrl}')">
            <img src="${musica.capaUrl}" alt="${musica.titulo}">
            <div class="musica-info">
                <h3>${musica.titulo}</h3>
                <p>${musica.artista}</p>
            </div>
        </div>
    `).join('');

    // Carregar Top Global
    const listaGlobal = document.getElementById('lista-global');
    listaGlobal.innerHTML = musicas.globais.map(musica => `
        <div class="musica-card" onclick="playMusica('${musica.titulo}', '${musica.artista}', '${musica.capaUrl}')">
            <img src="${musica.capaUrl}" alt="${musica.titulo}">
            <div class="musica-info">
                <h3>${musica.titulo}</h3>
                <p>${musica.artista}</p>
            </div>
        </div>
    `).join('');

    // Carregar Álbuns
    const albumsGrid = document.getElementById('albums-grid');
    albumsGrid.innerHTML = albuns.map(album => `
        <div class="album-card" onclick="mostrarAlbum('${album.id}')">
            <img src="${album.capaUrl}" alt="${album.titulo}">
            <h3>${album.titulo}</h3>
            <p>${album.artista} • ${album.ano}</p>
        </div>
    `).join('');
}

// Função para simular reprodução de música
function playMusica(titulo, artista, capa) {
    document.getElementById('current-song-image').src = capa;
    document.getElementById('current-song-title').textContent = titulo;
    document.getElementById('current-song-artist').textContent = artista;
    
    // Toggle do botão play/pause
    const playBtn = document.querySelector('.play-btn i');
    playBtn.classList.remove('fa-play');
    playBtn.classList.add('fa-pause');
}

// Função para mostrar detalhes do álbum
function mostrarAlbum(albumId) {
    const album = albuns.find(a => a.id === albumId);
    const content = document.querySelector('.content');
    
    content.innerHTML = `
        <div class="album-view">
            <header class="album-header">
                <button onclick="voltarParaInicio()" class="back-button">
                    <i class="fas fa-arrow-left"></i> Voltar
                </button>
                <div class="album-info">
                    <img src="${album.capaUrl}" alt="${album.titulo}">
                    <div class="album-details">
                        <h1>${album.titulo}</h1>
                        <p>${album.artista} • ${album.ano}</p>
                    </div>
                </div>
            </header>
            <div class="album-tracks">
                <h2>Músicas</h2>
                ${album.musicas.map((musica, index) => `
                    <div class="track-item" onclick="playMusica('${musica.titulo}', '${album.artista}', '${album.capaUrl}')">
                        <span class="track-number">${index + 1}</span>
                        <div class="track-info">
                            <h3>${musica.titulo}</h3>
                            <p>${album.artista}</p>
                        </div>
                        <span class="track-duration">${musica.duracao}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Função para voltar para a tela inicial
function voltarParaInicio() {
    // Esconde todas as seções
    document.querySelectorAll('.secao-conteudo').forEach(secao => {
        secao.style.display = 'none';
    });
    
    // Mostra a seção inicial
    document.getElementById('secao-inicio').style.display = 'block';
    
    // Atualiza a aba ativa
    document.querySelectorAll('.nav-links li').forEach(item => {
        item.classList.remove('aba-ativa');
    });
    document.getElementById('nav-inicio').classList.add('aba-ativa');
    
    // Recarrega o conteúdo inicial
    carregarConteudoInicial();
}

// Inicialização
window.onload = function() {
    voltarParaInicio();
    
    // Adicionar eventos de clique nas abas
    document.querySelectorAll('.nav-links li').forEach(item => {
        item.addEventListener('click', (e) => {
            const view = e.target.textContent.trim().toLowerCase();
            mostrarView(view);
        });
    });
};