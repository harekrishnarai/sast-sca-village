const speakers = [
    {
        id: 1,
        name: "Alex Chen",
        role: "Lead Security Researcher",
        image: "static/media/team/man.png",
        bio: "Expert in SAST/SCA fundamentals with over 10 years of experience.",
        socials: {
            twitter: "https://twitter.com/alexchen_sec",
            linkedin: "https://linkedin.com/in/alexchen",
            github: "https://github.com/alexchen"
        },
        sessions: [
            {
                title: "Introduction to SAST and SCA",
                time: "Feb 20 - 9:00 AM",
                description: "A comprehensive introduction to Static Application Security Testing and Software Composition Analysis."
            }
        ]
    },
    {
        id: 2,
        name: "Sarah Martinez",
        role: "Senior Security Engineer",
        image: "static/media/team/man.png",
        bio: "Specialized in security tools implementation and AppSec automation.",
        socials: {
            twitter: "https://twitter.com/sarahm_sec",
            linkedin: "https://linkedin.com/in/sarahmartinez",
            github: "https://github.com/sarahm"
        },
        sessions: [
            {
                title: "Setting Up Your First SAST Tool",
                time: "Feb 20 - 9:45 AM",
                description: "Step-by-step guide to SAST tool implementation."
            }
        ]
    },
    {
        id: 3,
        name: "Michael Kumar",
        role: "Principal Security Architect",
        image: "static/media/team/man.png",
        bio: "Expert in building secure development workflows and CI/CD security.",
        socials: {
            twitter: "https://twitter.com/mkumar_sec",
            linkedin: "https://linkedin.com/in/michaelkumar",
            github: "https://github.com/mkumar"
        },
        sessions: [
            {
                title: "Setting Up Your First SAST Tool",
                time: "Feb 20 - 9:45 AM",
                description: "Implementing SAST in development workflows."
            }
        ]
    },
    {
        id: 4,
        name: "Emma Wilson",
        role: "DevSecOps Engineer",
        image: "static/media/team/man.png",
        bio: "Specializes in integrating security into development pipelines.",
        socials: {
            twitter: "https://twitter.com/emmaw_sec",
            linkedin: "https://linkedin.com/in/emmawilson",
            github: "https://github.com/ewilson"
        },
        sessions: [
            {
                title: "Integrating SAST in CI/CD",
                time: "Feb 20 - 2:00 PM",
                description: "Best practices for CI/CD security integration."
            }
        ]
    },
    {
        id: 5,
        name: "Raj Patel",
        role: "Application Security Lead",
        image: "static/media/team/man.png",
        bio: "Expert in vulnerability assessment and secure code review.",
        socials: {
            twitter: "https://twitter.com/rajp_security",
            linkedin: "https://linkedin.com/in/rajpatel",
            github: "https://github.com/rajp"
        },
        sessions: [
            {
                title: "Overview of Vulnerable Applications",
                time: "Feb 20 - 11:30 AM",
                description: "Deep dive into common application vulnerabilities."
            }
        ]
    },
    {
        id: 6,
        name: "Lisa Zhang",
        role: "Security Research Lead",
        image: "static/media/team/man.png",
        bio: "Leading expert in Semgrep and code analysis patterns.",
        socials: {
            twitter: "https://twitter.com/lisaz_sec",
            linkedin: "https://linkedin.com/in/lisazhang",
            github: "https://github.com/lzhang"
        },
        sessions: [
            {
                title: "Advanced Semgrep Usage",
                time: "Feb 20 - 1:15 PM",
                description: "Advanced techniques for Semgrep pattern matching."
            }
        ]
    },
    {
        id: 7,
        name: "Marcus Johnson",
        role: "Security Tools Engineer",
        image: "static/media/team/man.png",
        bio: "Specialized in security tooling and automation frameworks.",
        socials: {
            twitter: "https://twitter.com/marcusj_sec",
            linkedin: "https://linkedin.com/in/marcusjohnson",
            github: "https://github.com/mjohnson"
        },
        sessions: [
            {
                title: "Advanced Semgrep Usage",
                time: "Feb 20 - 1:15 PM",
                description: "Implementing custom rules and patterns in Semgrep."
            }
        ]
    },
    {
        id: 8,
        name: "Sophie Anderson",
        role: "CodeQL Specialist",
        image: "static/media/team/man.png",
        bio: "Expert in CodeQL and semantic code analysis.",
        socials: {
            twitter: "https://twitter.com/sophiea_sec",
            linkedin: "https://linkedin.com/in/sophieanderson",
            github: "https://github.com/sanderson"
        },
        sessions: [
            {
                title: "Customizing CodeQL Queries",
                time: "Feb 21 - 9:00 AM",
                description: "Advanced CodeQL query development and customization."
            }
        ]
    },
    {
        id: 9,
        name: "Omar Hassan",
        role: "Security Researcher",
        image: "static/media/team/man.png",
        bio: "Specialized in threat modeling and security architecture.",
        socials: {
            twitter: "https://twitter.com/omarh_sec",
            linkedin: "https://linkedin.com/in/omarhassan",
            github: "https://github.com/ohassan"
        },
        sessions: [
            {
                title: "Customizing CodeQL Queries",
                time: "Feb 21 - 9:00 AM",
                description: "Building custom security queries with CodeQL."
            }
        ]
    },
    {
        id: 10,
        name: "Priya Sharma",
        role: "Threat Modeling Expert",
        image: "static/media/team/man.png",
        bio: "Expert in security architecture and threat assessment.",
        socials: {
            twitter: "https://twitter.com/priyas_sec",
            linkedin: "https://linkedin.com/in/priyasharma",
            github: "https://github.com/psharma"
        },
        sessions: [
            {
                title: "Threat Modeling for SAST/SCA",
                time: "Feb 21 - 9:45 AM",
                description: "Implementing threat modeling in security testing workflows."
            }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const speakersGrid = document.getElementById('speakers-grid');
    const modal = document.getElementById('speaker-modal');
    const modalContent = document.getElementById('modal-content');

    // Render speakers
    speakers.forEach(speaker => {
        const speakerCard = document.createElement('div');
        speakerCard.className = 'speaker-card';
        speakerCard.innerHTML = `
            <div class="card-content">
                <img src="${speaker.image}" alt="${speaker.name}" class="speaker-image">
                <div class="speaker-info">
                    <h3 class="speaker-name">${speaker.name}</h3>
                    <p class="speaker-role">${speaker.role}</p>
                    <div class="social-links">
                        <a href="#" class="social-link" target="_blank">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="social-link" target="_blank">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="#" class="social-link" target="_blank">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;

        speakerCard.addEventListener('click', (e) => {
            if (!e.target.closest('.social-link')) {
                showSpeakerDetails(speaker);
            }
        });
        speakersGrid.appendChild(speakerCard);
    });

    // Show speaker details in modal
    function showSpeakerDetails(speaker) {
        modalContent.innerHTML = `
            <div class="modal-content">
                <div class="flex items-center mb-6">
                    <div>
                        <h2 class="text-2xl font-bold text-white">${speaker.name}</h2>
                        <p class="text-gray-400">${speaker.role}</p>
                    </div>
                </div>
                <h3 class="text-xl font-bold text-yellow-400 mb-4">Sessions</h3>
                ${speaker.sessions.map(session => `
                    <div class="session-card">
                        <h4 class="session-title">${session.title}</h4>
                        <p class="session-time">${session.time}</p>
                        <p class="session-description">${session.description}</p>
                    </div>
                `).join('')}
            </div>
        `;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }

    // Close modal
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.closest('.fa-times')) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    });
}); 