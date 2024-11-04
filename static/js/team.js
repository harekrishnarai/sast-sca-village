const teamMembers = [
    {
        name: "Hare Krishna Rai",
        handle: "0xblurr3d",
        role: "Village Lead & SAST Expert",
        image: "static/media/team/man.png",
        tags: ["SAST", "AppSec", "DevSecOps","K8s", "Cloud Security", "GenAI"],
        social: {
            twitter: "harekrishna_rai",
            linkedin: "harekrishnarai",
            github: "harekrishnarai"
        }
    },
    {
        name: "Gaurav Joshi",
        handle: "gauravjoshi",
        role: "Container Security Specialist",
        image: "static/media/team/man.png",
        tags: ["Containers", "K8s", "Cloud"],
        social: {
            twitter: "gauravjoshi",
            github: "gauravjoshii"
        }
    }
];

function createSocialLinks(social) {
    let links = '';
    if (social.twitter) {
        links += `
            <a href="https://twitter.com/${social.twitter}" target="_blank" rel="noopener" 
               class="social-link twitter hover:text-yellow-400 transition-all">
                <i class="fab fa-twitter"></i>
            </a>`;
    }
    if (social.linkedin) {
        links += `
            <a href="https://linkedin.com/in/${social.linkedin}" target="_blank" rel="noopener" 
               class="social-link linkedin hover:text-yellow-400 transition-all">
                <i class="fab fa-linkedin"></i>
            </a>`;
    }
    if (social.github) {
        links += `
            <a href="https://github.com/${social.github}" target="_blank" rel="noopener" 
               class="social-link github hover:text-yellow-400 transition-all">
                <i class="fab fa-github"></i>
            </a>`;
    }
    return links;
}

function createTags(tags) {
    return tags.map(tag => 
        `<span class="inline-block px-3 py-1 text-sm text-yellow-400 border border-yellow-600 
                rounded-full bg-yellow-400/10 mr-2 mb-2">${tag}</span>`
    ).join('');
}

function populateTeam() {
    const teamGrid = document.getElementById('team-grid');
    teamMembers.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'team-card bg-gray-900/80 backdrop-blur-md p-6 rounded-lg border border-yellow-400 transition-all hover:-translate-y-2';
        memberCard.innerHTML = `
            <div class="member-frame mx-auto mb-6">
                <div class="scan-line"></div>
                <img src="${member.image}" alt="${member.name}" class="w-full h-full object-cover">
                <div class="frame-corner top-left"></div>
                <div class="frame-corner top-right"></div>
                <div class="frame-corner bottom-left"></div>
                <div class="frame-corner bottom-right"></div>
            </div>
            <div class="text-center">
                <h3 class="text-xl font-bold text-white mb-2">${member.name}</h3>
                <div class="text-yellow-400 font-mono mb-2">${member.handle}</div>
                <p class="text-gray-400 mb-4">${member.role}</p>
                <div class="flex flex-wrap justify-center mb-4">
                    ${createTags(member.tags)}
                </div>
                <div class="flex justify-center space-x-4">
                    ${createSocialLinks(member.social)}
                </div>
            </div>
        `;
        teamGrid.appendChild(memberCard);
    });
}

document.addEventListener('DOMContentLoaded', populateTeam);