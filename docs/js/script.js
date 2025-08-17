document.addEventListener('DOMContentLoaded', () => {
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

    // Só inicializa modal se existir na página atual
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const closeButton = document.querySelector('.close-button');

    const projectButtons = Array.from(document.querySelectorAll('.project-button'));
    if (modal && modalBody && closeButton && projectButtons.length) {
        projectButtons.forEach(button => {
            button.addEventListener('click', () => {
                const projectId = button.getAttribute('data-project');
                const project = projectsData[projectId];
                if (!project) return;

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
                    <ul>${project.contributions.map(i => `<li>${i}</li>`).join('')}</ul>
                `;
                modal.style.display = 'block';
                modal.setAttribute('aria-hidden', 'false');
            });
        });

        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
                modal.setAttribute('aria-hidden', 'true');
            }
        });
    }
});