// Dados dos projetos (escopo global)
const projectsData = {
        'api6': {
        title: 'Sistema de Busca Semântica – API 6º Semestre',
        image: 'assets/print_api_grande.png',
        description: 'Sistema de busca semântica capaz de interpretar perguntas dos usuários, responder via agente de IA integrado ao chat interativo e enviar boletins automáticos por e-mail, gerados pela IA a partir dos dados do cliente Dom Rock – 2º semestre de 2025.',
        detalhes: `No projeto integrador (API) do 6º semestre, desenvolvemos um sistema de busca semântica sobre o dataset fornecido pelo cliente Dom Rock. O sistema interpreta perguntas dos usuários e responde por meio de um agente de inteligência artificial integrado ao chat interativo. Também implementamos a funcionalidade de envio automático de boletins, gerados pela IA com base nos dados do período selecionado, diretamente para o e-mail do usuário, conforme modelo fornecido pelo cliente.`,
        repoLink: 'https://github.com/marcusvbe/API_6', 
        hardSkills: [
            'AWS: plataforma de hospedagem',
            'Figma: prototipagem',
            'Flutter: framework do front-end',
            'Git e GitHub: versionamento e documentação',
            'Python: back-end',
            'Shortcut: organização de tarefas',
            'Swagger: documentação das rotas do back-end'
        ],
        softSkills: [
            'Gestão de tempo',
            'Trabalho em equipe',
            'Resolução de problemas',
        ],
        contributions: [
            'Implementei a contextualização do agente de IA, incluindo análise de perguntas e geração de contexto a partir dos dados de estoque e faturamento.',
            'Desenvolvi a funcionalidade completa de recuperação de senha por e-mail, com integração entre backend (rota, geração de senha, envio por e-mail) e frontend (formulário, feedback visual, navegação).',
            'Implementei o sistema de importação e processamento de arquivos CSV para faturamento e estoque, incluindo rotas, validação e persistência no banco de dados.',
            'Criei a rota para alteração do status de recebimento de boletim do usuário, com CRUD básico de usuários e documentação das rotas.'
        ]
    },
    'minhasSenhas': {
        title: 'Aplicativo Minhas Senhas',
        image: 'assets/screenshotMinhasSenhas3.png',
        description: 'Aplicativo de gerenciamento de senhas com biometria e criptografia de ponta a ponta – 2º semestre de 2024',
        detalhes: `Na disciplina de Programação para Dispositivos Móveis I, escolhemos o tema Gerenciamento de Senhas para o desenvolvimento de aplicativo Android em dupla. 
        Criptografia de ponta a ponta de todos os dados do usuário. Autenticação de 2 fatores: login e biometria.`,
        repoLink: 'https://github.com/minhasSenhasApp2024/minhasSenhasApp',
        hardSkills: [
            'criptografia AES‑256 com chave mestra',
            'expo secure store: armazenamento seguro das credenciais do usuário e chave mestra no dispositivo',
            'Typescript e Node.js em todo o projeto',
            'Framework Expo',
            'Firebase: autenticação do usuário com e‑mail e senha',
            'Firestore para armazenamento NoSQL dos dados criptografados dos usuários'
        ],
        softSkills: ['Organização', 'Priorização de tarefas', 'Resolução de Problemas'],
        contributions: [
            'Desenvolvi toda a estrutura do projeto, configurei o Firebase, Firestore e todos os seus serviços e sua integração ao código, toda a lógica de funcionamento do app, estrutura de navegação, autenticação e criptografia.'
        ]
    },
    
    'api5': {
        title: 'Plataforma de Criação e Gestão de Agentes de IA – Pro4Tech – API 5º Semestre',
        image: 'assets/API_5.png',
        description: 'Aplicativo móvel para criação e utilização de agentes de chatbot personalizados com modelo de IA baseado em Naive Bayes – 1º semestre de 2025',
        detalhes: `No projeto integrador (API) do 5º semestre, desenvolvemos um aplicativo móvel para criação e utilização de agentes de chatbot personalizados para o uso de empresas. 
        
Desenvolvemos um modelo de classificação de texto baseado em Naive Bayes que identifica a resposta adequada a partir da pergunta do usuário. Então, o modelo de IA Gemini foi integrado via API, trazendo capacidade de conversação aos chatbots.

A plataforma permite que empresas criem e gerenciem seus próprios agentes de IA personalizados, com treinamento customizado e integração com modelos generativos de ponta.`,
        repoLink: 'https://github.com/marcusvbe/API_5',
        hardSkills: [
            'React Native, TypeScript: front‑end mobile',
            'Python, Flask: back‑end',
            'scikit‑learn: pipeline de Machine Learning',
            'NLTK: processamento de linguagem natural em português',
            'TF‑IDF: extração de features',
            'Naive Bayes Multinomial: algoritmo de classificação',
            'GridSearchCV: otimização de hiperparâmetros',
            'Google Gemini API: modelo generativo conversacional',
            'Metodologia Ágil SCRUM: gestão do projeto'
        ],
        softSkills: ['Priorização de requisitos (MVP)', 'Gestão de projeto com metodologias ágeis', 'Validação de entregas com cliente', 'Gestão de tempo', 'Proatividade', 'Trabalho em equipe'],
        contributions: [
            'Master Scrum: Facilitei as cerimônias ágeis (Daily, Planning, Review, Retrospectiva), removi impedimentos e fiz a gestão do backlog.',
            'Desenvolvimento do Modelo de IA: Implementei o classificador de texto em Naive Bayes Multinomial para chatbot. Desenvolvim o pipeline completo: pré‑processamento em português (tokenização customizada, remoção de stopwords, stemming RSLP), vetorização TF‑IDF, otimização de hiperparâmetros (GridSearch).',
            'Desenvolvi métricas de avaliação por categoria de pergunta e fiz a integração ao front‑end.'
        ]
    },
    'api4': {
        title: 'Sistema de Coleta de Dados de Estações Meteorológicas – Tecsus – API 4º Semestre',
        image: 'assets/API_4.png',
        description: 'Sistema para coleta e monitoramento de dados meteorológicos em tempo real – 2º semestre de 2024',
        detalhes: `Os APIs (Aprendizagem por Projeto Integrado) são projetos semestrais em grupo desenvolvidos com a metodologia ágil SCRUM. A cada API são fornecidos requisitos funcionais e não funcionais, cabendo ao grupo a priorização (MVP), definição das entregas a cada sprint, sua validação com o cliente e a gestão da documentação. 
        
        No API deste semestre (disciplinas de DevOps e IoT), desenvolvemos um sistema para coletar dados de sensores (direção e velocidade do vento, índice pluviométrico, umidade, temperatura e pressão), tratá‑los e exibi‑los em um portal com dashboards e relatórios. 
        
        Geração de alertas: ferramenta de monitoramento ambiental para lidar com desastres naturais. 
        Recurso didático: a demonstração dos conceitos matemáticos usados nos cálculos dos parâmetros.`,
        repoLink: 'https://github.com/marcusvbe/API_4',
        hardSkills: [
            'JWT: autenticação e autorização',
            'bcrypt: hashing de senhas',
            'Typescript, Node.js: backend',
            'Swagger: documentação de APIs',
            'AWS, Vercel: hospedagem e deploy automático',
            'Github Actions: pipeline de integração contínua',
            'React e Typescript: front‑end',
            'PostgreSQL, Neon: banco de dados relacional',
            'Redis: banco de dados em memória',
            'Metodologia Ágil SCRUM: gestão do projeto'
        ],
        softSkills: ['Gestão de tempo', 'Proatividade', 'Trabalho em equipe'],
        contributions: [
            'Autenticação e Autorização: Desenvolvi funcionalidades de CRUD de usuários, sistema de login e proteção de rotas utilizando bcrypt para hashing de senhas e JWT para geração de tokens de acesso.',
            'Integração Contínua: Desenvolvi pipelines de Integração Contínua (CI) e implementei seus scripts com GitHub Actions para integrar testes e deploys automatizados.',
            'Documentação de APIs: Utilizei Swagger para documentar as rotas relativas a usuários e login, facilitando a comunicação e integração entre as equipes de front-end e back-end.'
        ]
    },
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
            'Fiz a integração com o frontend'
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
            'Criei parte do wireframe no Figma.',
            'Contribui na implementação do site com Flask.',
            'Redigi seções do README no GitHub.',
            'Redigi textos para o site.'
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