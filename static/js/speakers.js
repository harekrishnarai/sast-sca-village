// Extract unique speakers from schedule data
const extractSpeakers = () => {
    const uniqueSpeakers = new Map();
    
    const speakerBios = {
        'Gaurav Joshi': {
            role: 'Product Security Engineer @ HighRadius',
            bio: 'Gaurav is a seasoned Security Engineer specializing in SAST implementation and DevSecOps practices. With over 6 years of experience in application security, he has helped numerous organizations integrate security into their development lifecycle. He is passionate about automating security controls and building scalable security solutions.',
            linkedin: 'https://linkedin.com/in/gauravjoshii',
            photo: 'static/media/team/Gaurav_Joshi.jpg'
        },
        'Kartik Singh': {
            role: 'Security Researcher @ Loginsoft',
            bio: 'Kartik is an accomplished security researcher focusing on dependency analysis and supply chain security. He has identified and responsibly disclosed multiple vulnerabilities in open-source packages. His research work has contributed to improving security practices in the software supply chain ecosystem.',
            linkedin: 'https://linkedin.com/in/kartik00013/',
            photo: 'static/media/team/kartik_singh.jpeg'
        },
        'Hare Krishna Rai': {
            role: 'Product Security Engineer @ HighRadius',
            bio: 'Hare Krishna Rai brings extensive experience in application security and CI/CD pipeline security. He specializes in building and securing deployment pipelines, implementing security controls, and conducting security assessments of cloud infrastructure.',
            linkedin: 'https://www.linkedin.com/in/harekrishnarai/',
            photo: 'static/media/team/Hare_Krishna_Rai.jpeg'
        },
        'Nikhil Sahoo': {
            role: 'Security Engineer II @ Microsoft',
            bio: 'Nikhil is an expert in code security analysis and SAST tool implementation. With a strong background in secure coding practices and vulnerability assessment, he helps teams integrate security into their development workflow effectively.',
            linkedin: 'https://www.linkedin.com/in/nikhil-sahoo-87204b106/',
            photo: 'static/media/team/nikhil_sahoo.jpeg'
        },
        'Ravindra Penumarthi': {
            role: 'Security Engineer II @ Microsoft',
            bio: 'Ravindra specializes in application security with a focus on static analysis and vulnerability research. He has contributed to multiple open-source security tools and regularly speaks at security conferences about SAST implementation strategies.',
            linkedin: 'https://www.linkedin.com/in/ravindrapenumarthi/',
            photo: 'static/media/team/ravindra.jpeg'
        },
       
        'Hare Krishna Rai': {
            role: 'Product Security Engineer @ HighRadius',
            bio: 'Hare Krishna Rai is a product security engineer and security researcher specializing in software supply chain security. With expertise in code review, penetration testing, and secure coding, he focuses on integrating advanced security measures into development workflows. His efforts ensure robust protection of the software ecosystem while maintaining innovation and delivery speed. Through his work, Hare empowers organizations to proactively defend against evolving threats in the software development lifecycle.',
            linkedin: 'https://linkedin.com/in/harekrishnarai',
            photo: 'static/media/team/Hare_Krishna_Rai.jpg'
        }
    };

    scheduleData.forEach(day => {
        day.events.forEach(event => {
            if (event.speakers) {
                event.speakers.forEach(speaker => {
                    if (!uniqueSpeakers.has(speaker.name)) {
                        uniqueSpeakers.set(speaker.name, {
                            id: uniqueSpeakers.size + 1,
                            ...speaker,
                            ...speakerBios[speaker.name],
                            photo: speakerBios[speaker.name]?.photo || 'static/media/team/default-avatar.png',
                            sessions: [{
                                title: event.title,
                                time: event.time,
                                duration: event.duration,
                                description: event.details?.description || ''
                            }]
                        });
                    } else {
                        uniqueSpeakers.get(speaker.name).sessions.push({
                            title: event.title,
                            time: event.time,
                            duration: event.duration,
                            description: event.details?.description || ''
                        });
                    }
                });
            } else if (event.speaker && typeof event.speaker === 'object') {
                const speaker = event.speaker;
                if (!uniqueSpeakers.has(speaker.name)) {
                    uniqueSpeakers.set(speaker.name, {
                        id: uniqueSpeakers.size + 1,
                        ...speaker,
                        ...speakerBios[speaker.name],
                        photo: speakerBios[speaker.name]?.photo || 'static/media/team/default-avatar.png',
                        sessions: [{
                            title: event.title,
                            time: event.time,
                            duration: event.duration,
                            description: event.details?.description || ''
                        }]
                    });
                } else {
                    uniqueSpeakers.get(speaker.name).sessions.push({
                        title: event.title,
                        time: event.time,
                        duration: event.duration,
                        description: event.details?.description || ''
                    });
                }
            }
        });
    });

    return Array.from(uniqueSpeakers.values());
};

document.addEventListener('DOMContentLoaded', () => {
    const speakersGrid = document.getElementById('speakers-grid');
    const modal = document.getElementById('speaker-modal');
    const modalContent = document.getElementById('modal-content');
    
    // Add grid class
    speakersGrid.classList.add('grid');
    
    const speakers = extractSpeakers();

    // Render speakers
    speakers.forEach(speaker => {
        const speakerCard = document.createElement('div');
        speakerCard.className = 'speaker-card';
        speakerCard.innerHTML = `
            <div class="card-content">
                <img src="${speaker.photo}" 
                     alt="${speaker.name}" 
                     class="speaker-image"
                     loading="lazy"
                     onerror="this.src='static/media/team/default-avatar.png'">
                <div class="speaker-info">
                    <h3 class="speaker-name">${speaker.name}</h3>
                    <p class="speaker-role">${speaker.role || 'Speaker'}</p>
                    <div class="social-links">
                        ${speaker.linkedin ? `
                            <a href="${speaker.linkedin}" 
                               class="social-link" 
                               target="_blank"
                               rel="noopener noreferrer"
                               onclick="event.stopPropagation()">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        ` : ''}
                        ${speaker.github ? `
                            <a href="${speaker.github}" 
                               class="social-link" 
                               target="_blank"
                               onclick="event.stopPropagation()">
                                <i class="fab fa-github"></i>
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;

        speakerCard.addEventListener('click', () => showSpeakerDetails(speaker));
        speakersGrid.appendChild(speakerCard);
    });

    // Show speaker details in modal
    function showSpeakerDetails(speaker) {
        modalContent.innerHTML = `
            <div class="modal-container">
                <!-- Profile Section -->
                <div class="speaker-profile">
                    <img src="${speaker.photo}" 
                         alt="${speaker.name}" 
                         class="modal-speaker-image"
                         onerror="this.src='static/media/team/default-avatar.png'">
                    <div class="modal-speaker-info">
                        <h2 class="modal-speaker-name">${speaker.name}</h2>
                        <p class="modal-speaker-role">${speaker.role || 'Speaker'}</p>
                    </div>
                </div>
                
                <!-- Bio Section - Now clearly separated -->
                <div class="modal-bio-container">
                    <div class="modal-bio">
                        <p class="modal-bio-text">${speaker.bio}</p>
                    </div>
                </div>

                <!-- Sessions Section -->
                <div class="modal-sessions">
                    <h3 class="sessions-title">Sessions</h3>
                    ${speaker.sessions.map(session => `
                        <div class="session-card">
                            <div class="session-header">
                                <h4 class="session-title">${session.title}</h4>
                                <span class="session-duration">${session.duration}</span>
                            </div>
                            <p class="session-time">${session.time}</p>
                            <p class="session-description">${session.description}</p>
                        </div>
                    `).join('')}
                </div>
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
