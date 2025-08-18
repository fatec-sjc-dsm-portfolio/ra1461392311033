document.addEventListener('DOMContentLoaded', () => {
    console.log('Script carregado'); // debug

    // Dados dos projetos
    const projectsData = {
        'api-covid': {
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
        }
    };

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