 /*!
    * Start Bootstrap - Freelancer v6.0.5 
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT
    */


// ===== Variáveis Globais e Funções de API =====

const API_BASE_URL = 'http://127.0.0.1:8000/api';
let currentLang = localStorage.getItem('preferredLang') || 'en';


// Funções de carregamento (loadProjects, loadSkills, loadProfile, renderProjects) - ASYNC.

// Função para trocar idioma
async function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLang', lang);
    
    // Recarrega todos os dados com o novo idioma
    await Promise.all([
        loadProjects(),
        loadSkills(),
        loadProfile()
    ]);
}

//Funçao iniciar
document.addEventListener('DOMContentLoaded', async function() {
    try {

        const response = await fetch(`${API_BASE_URL}/projects?lang=${currentLang}`);

        const projects = await response.json();

        renderProjects(projects);

    } catch (error) {

        // Se a API falhar (Render dormindo), ele tenta o fallback local

        loadFallbackProjects(currentLang);

    }

});


//Funçao mudar idioma
async function changeLanguage(lang) {

    currentLang = lang;

    localStorage.setItem('preferredLang', lang);

    console.log("Idioma alterado para: " + lang);

   

    // Atualiza os links de idioma visualmente (opcional)

    document.querySelectorAll('.lang-link').forEach(link => {

        if (link.dataset.lang === lang) {

            link.classList.add('active');

        } else {

            link.classList.remove('active');

        }

    });



    // Recarrega todos os dados

    await loadProjects();

    await loadSkills();

    await loadProfile();

}



//FUNÇÃO AUXILIAR PARA RENDERIZAR PROJETOS 
function renderProjects(projects) {

    const container = document.getElementById('projects-container');

    if (!container) return;

   

    if (!projects || projects.length === 0) {

        container.innerHTML = '<div class="col-12 text-center text-muted py-5">Nenhum projeto encontrado.</div>';

        return;

    }

   
    let html = '';

    projects.forEach(project => {

        html += `

        <div class="col-md-6 col-lg-4">

            <div class="portfolio-item h-100 d-flex flex-column p-0">

                <img class="img-fluid"

                     src="static/assets/img/portfolio/${project.image}"

                     alt="${project.title}"

                     onerror="this.src='static/assets/img/portfolio/placeholder.png'">

                <div class="p-4 d-flex flex-column flex-grow-1">

                    <h4 class="mb-2">${project.title}</h4>

                    <div class="mb-3">

                        <span class="badge bg-primary text-wrap me-1 mb-1" style="font-size: 0.8rem;">${project.tech}</span>

                    </div>

                    <p class="small text-muted flex-grow-1">${project.description}</p>

                    <div class="mt-3">

                        <a href="${project.link}" target="_blank" class="btn btn-outline-primary w-100">

                            <i class="fab fa-github me-2"></i> GitHub

                        </a>

                    </div>

                </div>

            </div>

        </div>

        `;

    });

    container.innerHTML = html;

}

//Funçao CARREGAR PROJETOS 
async function loadProjects() {

    try {

        // Tenta a API primeiro

        const response = await fetch(`${API_BASE_URL}/projects?lang=${currentLang}`);

       

        if (!response.ok) throw new Error('API offline');

       

        const projects = await response.json();

        renderProjects(projects);

       

    } catch (error) {

        console.warn(`API Offline. Usando fallback local para: ${currentLang}`);

       

        // PLANO B: Fallback local

        try {

            const fallbackRes = await fetch(`static/data/fallback_${currentLang}.json`);

            if (!fallbackRes.ok) throw new Error('Fallback não encontrado');

           

            const fallbackData = await fallbackRes.json();

            renderProjects(fallbackData);

           

        } catch (fallbackError) {

            console.error('Fallback também falhou:', fallbackError);

            document.getElementById('projects-container').innerHTML =

                '<div class="col-12 text-center text-danger py-5">Loading Projects.</div>';

        }

    }

}


//Fuçao CARREGAR SKILLS 
async function loadSkills() {

    try {

        const response = await fetch(`${API_BASE_URL}/skills?lang=${currentLang}`);

        if (!response.ok) throw new Error('API offline');

       

        const skillsData = await response.json();

       

        // Renderização normal via API

        const headerEl = document.getElementById('skills-header');

        if (headerEl && skillsData.header) headerEl.textContent = skillsData.header;

       

        const container = document.getElementById('skills-container');

        if (container && skillsData.items) {

            container.innerHTML = skillsData.items.map(s => `<span class="skill-badge rounded-pill">${s}</span>`).join('');

        }

       

        if (skillsData.labels) {

            updateSkillsLabels(skillsData.labels);

        }

       

    } catch (error) {

        console.warn('Usando fallback interno para Skills');

       

        //FALLBACK ---

        const isEn = currentLang === 'en';

       

        // 1. Título do Header

        const headerEl = document.getElementById('skills-header');

        if (headerEl) {

            headerEl.textContent = isEn ? 'Technologies & Skills' : 'Tecnologias & Habilidades';

        }

       

        // Bolinhas das Skills

        const container = document.getElementById('skills-container');

        if (container) {

            const fallbackSkills = ['Python', 'FastAPI', 'Docker', 'PostgreSQL', 'Git', 'JavaScript'];

            container.innerHTML = fallbackSkills.map(s => `<span class="skill-badge rounded-pill">${s}</span>`).join('');

        }



        // Labels (Experiência, etc)

        const fallbackLabels = isEn ?

            { field: "Main Field", github: "GitHub Projects", experience: "Years of Experience" } :

            { field: "Área Principal", github: "Projetos no GitHub", experience: "Anos de Experiência" };

       

        updateSkillsLabels(fallbackLabels);

    }

}



// Função auxiliar para não repetir código de preencher labels

function updateSkillsLabels(labels) {

    const fieldEl = document.getElementById('skills-field');

    const githubEl = document.getElementById('skills-github');

    const experienceEl = document.getElementById('skills-experience');

   

    if (fieldEl) fieldEl.textContent = labels.field;

    if (githubEl) githubEl.textContent = labels.github;

    if (experienceEl) experienceEl.textContent = labels.experience;

}



// Funçao CARREGAR PERFIL 

async function loadProfile() {

    try {

        const response = await fetch(`${API_BASE_URL}/profile?lang=${currentLang}`);

        const profile = await response.json();

       

        // Mapeamento correto dos elementos HTML

        const nameEl = document.getElementById('profile-name');

        const bioEl = document.getElementById('profile-bio');

        const contactEl = document.getElementById('profile-contact');

        const sendEl = document.getElementById('profile-send');

        const portfolioEl = document.getElementById('profile-portfolio');

       

        // Atribuição correta de cada valor

        if (nameEl && profile.name) nameEl.textContent = profile.name;

        if (bioEl && profile.bio) bioEl.textContent = profile.bio;

        if (contactEl && profile.contact) contactEl.textContent = profile.contact;

        if (sendEl && profile.send) sendEl.textContent = profile.send;

        if (portfolioEl && profile.portfolio) portfolioEl.textContent = profile.portfolio;

       

        console.log("Perfil carregado:", profile);

       

    } catch (error) {

        //console.warn('Perfil offline, usando fallback');

       

        // Fallback (valores padrão)

        const nameEl = document.getElementById('profile-name');

        const bioEl = document.getElementById('profile-bio');

        const contactEl = document.getElementById('profile-contact');

        const sendEl = document.getElementById('profile-send');

        const portfolioEl = document.getElementById('profile-portfolio');

       

        if (nameEl) nameEl.textContent = 'Clarissa Damas';

        if (bioEl) bioEl.textContent = 'I have Physics background and I am currently attending a Computer Science course. Experience developing projects involving Python, Java, Git, APIs and databases. Through my educational and professional life, I have learned to build web applications using agile Methodologies in real-world projects, with an analytical mindset and a strong focus on continuous learning';

        if (contactEl) contactEl.textContent = 'Contact';

        if (sendEl) sendEl.textContent = 'Send';

        if (portfolioEl) portfolioEl.textContent = 'Portfolio';

    }

}




//código original do bootstrap Freelancer (Scrollspy, Navbar Collapse, etc.)

(function($) {

    "use strict";

    // Smooth scrolling using jQuery easing

    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

            var target = $(this.hash);

            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {

                $('html, body').animate({

                    scrollTop: (target.offset().top - 71)

                }, 1000, "easeInOutExpo");

                return false;

            }

        }

    });



    // Scroll to top button appear

    $(document).scroll(function() {

        var scrollDistance = $(this).scrollTop();

        if (scrollDistance > 100) {

            $('.scroll-to-top').fadeIn();

        } else {

            $('.scroll-to-top').fadeOut();

        }

    });



    // Closes responsive menu when a scroll trigger link is clicked

    $('.js-scroll-trigger').click(function() {

        $('.navbar-collapse').collapse('hide');

    });



    // Activate scrollspy to add active class to navbar items on scroll

    $('body').scrollspy({

        target: '#mainNav',

        offset: 80

    });



    // Collapse Navbar

    var navbarCollapse = function() {

        if ($("#mainNav").offset().top > 100) {

            $("#mainNav").addClass("navbar-shrink");

        } else {

            $("#mainNav").removeClass("navbar-shrink");

        }

    };

    navbarCollapse();

    $(window).scroll(navbarCollapse);



    // Floating label headings for the contact form

    $(function() {

        $("body").on("input propertychange", ".floating-label-form-group", function(e) {

            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());

        }).on("focus", ".floating-label-form-group", function() {

            $(this).addClass("floating-label-form-group-with-focus");

        }).on("blur", ".floating-label-form-group", function() {

            $(this).removeClass("floating-label-form-group-with-focus");

        });

    });



})(jQuery);