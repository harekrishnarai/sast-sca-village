// Extract unique speakers from schedule data
const extractSpeakers = () => {
    const uniqueSpeakers = new Map();
    
    const speakerBios = {
        'Gaurav': {
            role: 'Product Security Engineer @ HighRadius',
            bio: 'Gaurav is a seasoned Security Engineer specializing in SAST implementation and DevSecOps practices. With over 6 years of experience in application security, he has helped numerous organizations integrate security into their development lifecycle. He is passionate about automating security controls and building scalable security solutions.',
            linkedin: 'https://linkedin.com/in/gauravjoshii',
            photo: 'static/media/team/Gaurav_Joshi.jpg'
        },
        'Kartik': {
            role: 'Security Researcher @ Loginsoft',
            bio: 'Kartik is an accomplished security researcher focusing on dependency analysis and supply chain security. He has identified and responsibly disclosed multiple vulnerabilities in open-source packages. His research work has contributed to improving security practices in the software supply chain ecosystem.',
            linkedin: 'https://linkedin.com/in/kartik00013/',
            photo: 'static/media/team/kartik_singh.jpeg'
        },
        'Gaurav Bhosale': {
            role: 'AppSec Engineer ',
            bio: 'Gaurav Bhosale brings extensive experience in application security and CI/CD pipeline security. He specializes in building and securing deployment pipelines, implementing security controls, and conducting security assessments of cloud infrastructure.',
            linkedin: 'https://www.linkedin.com/in/gauravbhosale1/',
            photo: 'static/media/team/Gaurav_Bhosale.jpeg'
        },
        'Nikhil': {
            role: 'Security Engineer II @ Microsoft',
            bio: 'Nikhil is an expert in code security analysis and SAST tool implementation. With a strong background in secure coding practices and vulnerability assessment, he helps teams integrate security into their development workflow effectively.',
            linkedin: 'https://www.linkedin.com/in/nikhil-sahoo-87204b106/',
            photo: 'static/media/team/nikhil_sahoo.jpeg'
        },
        'Ravindra': {
            role: 'Security Engineer II @ Microsoft',
            bio: 'Ravindra specializes in application security with a focus on static analysis and vulnerability research. He has contributed to multiple open-source security tools and regularly speaks at security conferences about SAST implementation strategies.',
            linkedin: 'https://www.linkedin.com/in/ravindrapenumarthi/',
            photo: 'static/media/team/ravindra.jpeg'
        },
       
        'Hare Krishna': {
            role: 'Product Security Engineer @ HighRadius',
            bio: 'Hare Krishna is a DevSecOps practitioner with expertise in building secure CI/CD pipelines. He focuses on integrating security controls into the development process and automating security testing. His work has helped organizations achieve better security without compromising development velocity.',
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
            <div class="modal-header">
                <div class="flex items-center gap-4">
                    <img src="${speaker.photo}" 
                         alt="${speaker.name}" 
                         class="w-20 h-20 rounded-full border-2 border-yellow-400"
                         onerror="this.src='static/media/team/default-avatar.png'">
                    <div>
                        <h2 class="text-2xl font-bold text-white">${speaker.name}</h2>
                        <p class="text-gray-400">${speaker.role || 'Speaker'}</p>
                    </div>
                </div>
                <p class="text-gray-300 mt-4">${speaker.bio}</p>
            </div>
            <div class="mt-8">
                <h3 class="text-xl font-bold text-yellow-400 mb-4">Sessions</h3>
                ${speaker.sessions.map(session => `
                    <div class="bg-gray-800/50 rounded-lg p-4 mb-4">
                        <div class="flex justify-between items-start mb-2">
                            <h4 class="text-lg font-semibold text-white">${session.title}</h4>
                            <span class="text-yellow-400 text-sm">${session.duration}</span>
                        </div>
                        <p class="text-gray-400 text-sm mb-2">${session.time}</p>
                        <p class="text-gray-300">${session.description}</p>
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