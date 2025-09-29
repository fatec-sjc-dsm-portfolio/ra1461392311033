// Dados dos projetos (escopo global)
const projectsData = {
    'api3': {
        title: 'Sistema de Gestão de Ativos para Empresas',
        image: 'assets/ctrl-A.png',
        description: `Criação de uma aplicação web para o monitoramento dos ativos (tangíveis e intangíveis) de uma empresa, com informações sobre o valor atual do ativo, onde ele está no momento, seu responsável, manutenções, entre outros`,
        repoLink: 'https://github.com/marcusvbe/API_3',
        hardSkills: [
            'Java, framework Spring: backend',
            'React e Typescript: frontend',
            'PostgreSQL: banco de dados relacional',
            'Supabase: banco de dados relacional on‑line',
            'Jira: gestão de tarefas',
            'Metodologia Ágil SCRUM: gestão do projeto'
        ],
        softSkills: [
            'Aprimoramento de processo: seguir um padrão na criação de branches e commits no Github',
            'Trabalho em Equipe',
            'Gerenciamento de Tempo',
            'Resolução de Problemas'
        ],
        contributions: [
            'Criei o banco de dados físico, a partir da modelagem que recebi.',
            'API rest: criei os endpoints e operações de CRUD.',
            'Fiz a integração do backend com o banco de dados.'
        ]
    },
    'api2': {
        title: 'Sistema de Gestão de Chamados',
        image: 'assets/api_Chamados.png',
        description: 'O projeto integrado do 2º semestre de 2023 consistiu na criação de uma aplicação de gestão de chamados de TI. Nossa equipe optou por desenvolvê-la direcionada a escolas e instituições de ensino para a gestão de chamados relativos a problemas de software. O sistema tem 3 níveis de acesso diferentes: cliente, técnico e administrador.',
        repoLink: 'https://github.com/marcusvbe/FocusQuestAPI',
        hardSkills: [
            'Node.js e Typescript: backend',
            'Javascript e React: frontend',
            'SQLite: banco de dados relacional',
            'Prisma: ORM',
            'GitHub: controle de versão',
            'SCRUM: gestão do projeto'
        ],
        softSkills: [
            'Trabalho em Equipe',
            'Gerenciamento de Tempo',
            'Resolução de Problemas'
        ],
        contributions: [
            'Desenvolvi a API rest: criação de rotas e operações de CRUD',
            'Implementei a lógica de funcionamento do sistema',
            'Integração com o frontend'
        ]
    },
    'api1': {
        title: 'Sistema para pesquisa de dados sobre a Covid longa',
        image: 'assets/API1_covid.png',
        description: 'Projeto do API (Aprendizagem por Projeto Integrado) do 1º semestre do curso de Desenvolvimento de Software Multiplataforma da FATEC de São José dos Campos – SP, em parceria com a TV Vanguarda. O site permite analisar e comparar alguns dados de saúde do sistema Datasus (Tabnet) a fim de identificar possíveis impactos da Covid longa em 3 cidades do Vale do Paraíba: São José dos Campos, Jacareí e Taubaté.',
        repoLink: 'https://github.com/marcusvbe/api-primeiro-semestre',
        hardSkills: ['Figma', 'GitHub', 'Python, Flask', 'MySQL', 'HTML, CSS, Bootstrap', 'SCRUM'],
        softSkills: ['Trabalho em equipe', 'Gerenciamento de tempo', 'Apresentação em público'],
        contributions: [
            'Criação de páginas do wireframe no Figma.',
            'Contribuição na implementação do site com Flask.',
            'Redação de seções do README no GitHub.',
            'Redação de textos para o site.'
        ]
    },
    'unes': {
    title: 'Site UNES',
    image: 'assets/desafio_proj2.png',
    description: `Site de uma universidade fictícia criado no 1º semestre do curso de Desenvolvimento de Software Multiplataforma, para a disciplina de Desenvolvimento Web I.`,
    repoLink: 'https://github.com/marcusvbe/Site-Dev-Web-1.-semestre',
    hardSkills: [
        'Python, framework Flask: backend',
        'HTML, CSS: frontend',
        'Docker Compose: orquestração dos ambientes de backend e banco de dados',
        'MySQL: banco de dados'
    ],
    softSkills: [
        'Gerenciamento de Tempo',
        'Resolução de Problemas',
        'Autonomia'
    ],
    contributions: [
        'Primeiro site que desenvolvi, conforme o wireframe fornecido pelo professor. Projeto individual.'
    ]
},

};

document.addEventListener('DOMContentLoaded', () => {
    console.log('Script carregado'); // debug

    // Buscar elementos do modal
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const closeButton = document.querySelector('.close-button');

    console.log('Elementos encontrados:', { modal, modalBody, closeButton }); // debug

    // Função para abrir modal
    function openModal(projectId) {
        console.log('Tentando abrir modal para:', projectId); // debug
        
        const project = projectsData[projectId];
        if (!project) {
            console.error('Projeto não encontrado:', projectId);
            return;
        }

        if (!modal || !modalBody) {
            console.error('Modal ou modalBody não encontrados');
            return;
        }

        modalBody.innerHTML = `
            <h2>${project.title}</h2>
            <img src="${project.image}" alt="Imagem do projeto ${project.title}" style="max-width:100%; height:auto;">
            <p>${project.description}</p>
            <p><a href="${project.repoLink}" target="_blank" rel="noopener">Ver repositório</a></p>
            <h3>Hard Skills</h3>
            <ul>${project.hardSkills.map(s => `<li>${s}</li>`).join('')}</ul>
            <h3>Soft Skills</h3>
            <ul>${project.softSkills.map(s => `<li>${s}</li>`).join('')}</ul>
            <h3>Minhas Contribuições</h3>
            <ul>${project.contributions.map(c => `<li>${c}</li>`).join('')}</ul>
        `;

        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
        console.log('Modal aberto'); // debug
    }

    // Função para fechar modal
    function closeModal() {
        if (modal) {
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
            console.log('Modal fechado'); // debug
        }
    }

    // Delegação de eventos: escuta cliques em qualquer .project-button
    document.addEventListener('click', (e) => {
        const button = e.target.closest('.project-button');
        if (button) {
            console.log('Botão clicado:', button); // debug
            const projectId = button.getAttribute('data-project');
            console.log('Project ID:', projectId); // debug
            openModal(projectId);
        }
    });

    // Fechar modal com botão X
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    // Fechar modal clicando no overlay
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Fechar modal com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.style.display === 'block') {
            closeModal();
        }
    });
});