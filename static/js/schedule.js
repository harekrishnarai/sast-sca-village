document.addEventListener('DOMContentLoaded', function() {
    // Initialize schedule with day 1 active
    renderSchedule('21');
});

function renderSchedule(selectedDate = null) {
    const scheduleContent = document.getElementById('scheduleContent');
    if (!scheduleContent) return;

    // Filter schedule data based on selected date
    const filteredData = selectedDate 
        ? scheduleData.filter(day => day.date.includes(`February ${selectedDate}`))
        : scheduleData;

    const scheduleHTML = filteredData.map(day => `
        <div class="day-block">
            <h2 class="text-xl font-bold text-yellow-400 mb-4">${day.date}</h2>
            ${day.events.map(event => eventTemplate(event)).join('')}
        </div>
    `).join('');

    // Set default active date to 21 if no date is selected
    const defaultDate = selectedDate || '21';

    scheduleContent.innerHTML = `
        <div class="date-circles">
            <div class="date-circle ${defaultDate === '21' ? 'active' : ''}" data-date="21">
                <div class="date">21st Feb</div>
                <div class="day">FRIDAY</div>
            </div>
            <div class="date-circle ${defaultDate === '22' ? 'active' : ''}" data-date="22">
                <div class="date">22nd Feb</div>
                <div class="day">SATURDAY</div>
            </div>
        </div>
        <div class="schedule-content">
            ${scheduleHTML}
        </div>
    `;

    // Attach event listeners to date circles
    const dateCircles = document.querySelectorAll('.date-circle');
    dateCircles.forEach(circle => {
        circle.addEventListener('click', () => {
            const date = circle.dataset.date;
            
            // Don't do anything if clicking the already active circle
            if (circle.classList.contains('active')) return;
            
            // Remove active class from all circles
            dateCircles.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked circle
            circle.classList.add('active');
            
            // Render the schedule for the selected date
            renderSchedule(date);
        });
    });
}

// Updated schedule data with real conference details
const scheduleData = [
    {
        date: 'Day 1 - February 21, 2025',
        events: [
            { 
                time: '10:00 AM - 11:00 AM', 
                title: 'Introduction to SAST with Enterprise Tools', 
                speaker: {
                    name: 'Gaurav Joshi',
                    photo: 'static/media/team/Gaurav_Joshi.jpg',
                    bio: 'Gaurav is a seasoned Security Engineer specializing in SAST implementation and DevSecOps practices. With over 6 years of experience in application security, he has helped numerous organizations integrate security into their development lifecycle. He is passionate about automating security controls and building scalable security solutions.',
                    linkedin: 'https://linkedin.com/in/gauravjoshii',
                    role: 'Product Security Engineer @ HighRadius'
                },
                duration: '1 hour',
                details: {
                    description: 'A comprehensive introduction to Static Application Security Testing tools used in enterprise environments.',
                    topics: [
                        'Overview of SAST methodology',
                        'Enterprise SAST tools comparison',
                        'Implementation strategies',
                        'Best practices and common pitfalls'
                    ],
                    registerLink: 'https://forms.gle/jLBLZxz5doC15Ss39'
                }
            },
            { 
                time: '11:15 AM - 12:45 PM', 
                title: 'Broken Chains: Unveiling Hidden Attack Surface in Package Managers', 
                speaker: {
                    name: 'Kartik Singh',
                    photo: 'static/media/team/kartik_singh.jpeg',
                    bio: 'Kartik is an accomplished security researcher focusing on dependency analysis and supply chain security. He has identified and responsibly disclosed multiple vulnerabilities in open-source packages. His research work has contributed to improving security practices in the software supply chain ecosystem.',
                    linkedin: 'https://linkedin.com/in/kartik00013/',
                    role: 'Security Researcher @ Loginsoft'
                },
                duration: '1.5 hours',
                details: {
                    description: 'Deep dive into identifying and mitigating dependency-based attack vectors.',
                    topics: [
                        'Understanding dependency chains',
                        'Attack surface analysis',
                        'Detection methodologies',
                        'Mitigation strategies'
                    ],
                    registerLink: 'https://forms.gle/yiebX8bUW1QWK1sdA'
                }
            },
            { 
                time: '12:45 PM - 1:30 PM', 
                title: 'Break',
                duration: '45 minutes'
            },
            { 
                time: '1:30 PM - 2:30 PM', 
                title: 'Attacking and Defending CI/CD Pipelines: A Hands-on Workshop', 
                speaker: {
                    name: 'Gaurav Bhosale',
                    photo: 'static/media/team/Gaurav_Bhosale.jpeg',
                    bio: 'Gaurav Bhosale brings extensive experience in application security and CI/CD pipeline security. He specializes in building and securing deployment pipelines, implementing security controls, and conducting security assessments of cloud infrastructure.',
                    linkedin: 'https://www.linkedin.com/in/gauravbhosale1/',
                    role: 'Application Security Engineer'
                },
                duration: '1 hour',
                details: {
                    description: 'Hands-on workshop exploring CI/CD pipeline vulnerabilities and security measures.',
                    topics: [
                        'Common pipeline vulnerabilities',
                        'Attack scenarios',
                        'Defense strategies',
                        'Best practices'
                    ],
                    registerLink: 'https://forms.gle/7pbSUnWZ8wAZdn8J6'
                }
            },
            { 
                time: '2:45 PM - 4:45 PM', 
                title: 'Lightweight Secure Code Review: A Deep Dive into SAST with Semgrep (Part 1)', 
                speakers: [
                    {
                        name: 'Nikhil Sahoo',
                        photo: 'static/media/team/nikhil_sahoo.jpeg',
                        bio: 'Nikhil is an expert in code security analysis and SAST tool implementation. With a strong background in secure coding practices and vulnerability assessment, he helps teams integrate security into their development workflow effectively.',
                        linkedin: 'https://www.linkedin.com/in/nikhil-sahoo-87204b106/',
                        role: 'Security Engineer II @ Microsoft'
                    },
                    {
                        name: 'Ravindra Penumarthi',
                        photo: 'static/media/team/ravindra.jpeg',
                        bio: 'Ravindra specializes in application security with a focus on static analysis and vulnerability research. He has contributed to multiple open-source security tools and regularly speaks at security conferences about SAST implementation strategies.',
                        linkedin: 'https://www.linkedin.com/in/ravindrapenumarthi/',
                        role: 'Security Engineer II @ Microsoft'
                    }
                ],
                duration: '2 hours',
                details: {
                    description: 'First part of comprehensive training on using Semgrep for code analysis.',
                    topics: [
                        'Semgrep basics',
                        'Pattern matching',
                        'Rule writing',
                        'Tool integration'
                    ],
                    registerLink: 'https://forms.gle/eRyCPG4nfWe2jQA97'
                }
            }
        ]
    },
    {
        date: 'Day 2 - February 22, 2025',
        events: [
            { 
                time: '10:00 AM - 12:00 PM', 
                title: 'Lightweight Secure Code Review: A Deep Dive into SAST with Semgrep (Part 2)', 
                speakers: [
                    {
                        name: 'Nikhil Sahoo',
                        photo: 'static/media/team/nikhil_sahoo.jpeg',
                        bio: 'Nikhil is an expert in code security analysis and SAST tool implementation. With a strong background in secure coding practices and vulnerability assessment, he helps teams integrate security into their development workflow effectively.',
                        linkedin: 'https://www.linkedin.com/in/nikhil-sahoo-87204b106/',
                        role: 'Security Engineer II @ Microsoft'
                    }
                ],
                duration: '2 hours',
                details: {
                    description: 'Advanced techniques in code review using Semgrep and other lightweight SAST tools.',
                    topics: [
                        'Advanced pattern matching',
                        'Custom rule development',
                        'Integration with CI/CD',
                        'Performance optimization'
                    ],
                    registerLink: 'https://forms.gle/eRyCPG4nfWe2jQA97'
                }
            },
            { 
                time: '12:00 PM - 12:45 PM', 
                title: 'Break',
                duration: '45 minutes'
            },
            { 
                time: '12:45 PM - 1:45 PM', 
                title: 'Introduction to SCA & evaluating Enterprise tools with SCAGoat', 
                speaker: {
                    name: 'Hare Krishna Rai',
                    photo: 'static/media/team/Hare_Krishna_Rai.jpg',
                    bio: 'Hare Krishna Rai is a product security engineer and security researcher specializing in software supply chain security. With expertise in code review, penetration testing, and secure coding, he focuses on integrating advanced security measures into development workflows. His efforts ensure robust protection of the software ecosystem while maintaining innovation and delivery speed. Through his work, Hare empowers organizations to proactively defend against evolving threats in the software development lifecycle.',
                    linkedin: 'https://linkedin.com/in/harekrishnarai',
                    role: 'Product Security Engineer @ HighRadius'
                },
                duration: '1 hour',
                details: {
                    description: 'Comprehensive overview of Software Composition Analysis and enterprise tooling.',
                    topics: [
                        'SCA fundamentals',
                        'Enterprise tool comparison',
                        'Implementation strategies',
                        'Best practices'
                    ],
                    registerLink: 'https://forms.gle/Bt4YvwTCGB9GhddR6'
                }
            },
            { 
                time: '2:00 PM - 3:00 PM', 
                title: 'How to Build Your Own SCA Tool?', 
                speaker: {
                    name: 'Hare Krishna Rai',
                    photo: 'static/media/team/Hare_Krishna_Rai.jpg',
                    bio: 'Hare Krishna Rai is a product security engineer and security researcher specializing in software supply chain security. With expertise in code review, penetration testing, and secure coding, he focuses on integrating advanced security measures into development workflows. His efforts ensure robust protection of the software ecosystem while maintaining innovation and delivery speed. Through his work, Hare empowers organizations to proactively defend against evolving threats in the software development lifecycle.',
                    linkedin: 'https://linkedin.com/in/harekrishnarai',
                    role: 'Product Security Engineer @ HighRadius'
                },
                duration: '1 hour',
                details: {
                    description: 'Technical deep-dive into building custom SCA solutions.',
                    topics: [
                        'Architecture design',
                        'Data sources',
                        'Vulnerability matching',
                        'Performance considerations'
                    ],
                    registerLink: 'https://forms.gle/wRcy9Q2LYaatHFgG8'
                }
            }
        ]
    }
];

// Add these functions to the global scope
window.showEventDetails = function(event) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
        <div class="bg-gray-900 p-6 rounded-lg max-w-2xl w-full mx-4 relative">
            <button onclick="this.closest('.fixed').remove()" 
                    class="absolute top-4 right-4 text-gray-400 hover:text-white">
                <i class="fas fa-times"></i>
            </button>
            <h3 class="text-2xl font-bold text-yellow-400 mb-4">${event.title}</h3>
            ${event.details ? `
                <p class="text-gray-300 mb-4">${event.details.description || ''}</p>
                ${event.details.topics ? `
                    <div class="mb-4">
                        <h4 class="text-lg font-semibold text-white mb-2">Topics Covered:</h4>
                        <ul class="list-disc list-inside text-gray-300">
                            ${event.details.topics.map(topic => `<li>${topic}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                ${event.details.registerLink ? `
                    <a href="${event.details.registerLink}" 
                       target="_blank" 
                       class="inline-block bg-yellow-400 text-black px-6 py-2 rounded-md hover:bg-yellow-300 transition-colors">
                        Register Now
                    </a>
                ` : ''}
            ` : ''}
            ${event.speakers ? `
                <div class="flex flex-wrap gap-4 mb-4">
                    ${event.speakers.map(speaker => `
                        <div class="flex items-center gap-3">
                            <img src="${speaker.photo}" 
                                 alt="${speaker.name}" 
                                 class="w-12 h-12 rounded-full">
                            <div>
                                <div class="text-white font-semibold">${speaker.name}</div>
                                <a href="${speaker.linkedin}" 
                                   target="_blank" 
                                   class="text-blue-400 hover:text-blue-300 text-sm">
                                    <i class="fab fa-linkedin"></i> LinkedIn
                                </a>
                            </div>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `;
    document.body.appendChild(modal);
};

window.showSpeakerBio = function(event, speaker) {
    event.stopPropagation();
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
        <div class="bg-gray-900 p-6 rounded-lg max-w-md w-full mx-4 relative">
            <button onclick="this.closest('.fixed').remove()" 
                    class="absolute top-4 right-4 text-gray-400 hover:text-white">
                <i class="fas fa-times"></i>
            </button>
            <div class="flex items-center gap-4 mb-4">
                ${speaker.photo ? `
                    <img src="${speaker.photo}" 
                         alt="${speaker.name}" 
                         class="w-16 h-16 rounded-full">
                ` : ''}
                <h3 class="text-xl font-bold text-white">${speaker.name}</h3>
            </div>
            ${speaker.bio ? `<p class="text-gray-300 mb-4">${speaker.bio}</p>` : ''}
            ${speaker.linkedin ? `
                <a href="${speaker.linkedin}" 
                   target="_blank" 
                   class="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300">
                    <i class="fab fa-linkedin"></i>
                    Connect on LinkedIn
                </a>
            ` : ''}
        </div>
    `;
    document.body.appendChild(modal);
};

// Update the eventTemplate function to handle multiple speakers
const eventTemplate = event => `
    <div class="event-item cursor-pointer hover:transform hover:translate-x-2 transition-all duration-300" 
         onclick="showEventDetails(${JSON.stringify(event).replace(/"/g, '&quot;')})">
        <div class="time text-yellow-400">${event.time}</div>
        <div class="title text-white font-semibold">${event.title}</div>
        ${event.speakers ? `
            <div class="speakers-info">
                ${event.speakers.map(speaker => `
                    <div class="speaker-card">
                        <img src="${speaker.photo}" 
                             alt="${speaker.name}" 
                             class="speaker-photo cursor-pointer hover:scale-110 transition-transform"
                             onclick="showSpeakerBio(event, ${JSON.stringify(speaker).replace(/"/g, '&quot;')})">
                        <div>
                            <div class="text-gray-300">${speaker.name}</div>
                            <div class="text-gray-400 text-sm">${speaker.role}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        ` : event.speaker ? `
            <div class="speaker-info">
                <img src="${event.speaker.photo}" 
                     alt="${event.speaker.name}" 
                     class="speaker-photo cursor-pointer hover:scale-110 transition-transform"
                     onclick="showSpeakerBio(event, ${JSON.stringify(event.speaker).replace(/"/g, '&quot;')})">
                <div>
                    <div class="text-gray-300">${event.speaker.name}</div>
                    <div class="text-gray-400 text-sm">${event.speaker.role}</div>
                </div>
            </div>
        ` : ''}
        ${event.details && event.details.registerLink ? `
            <a href="${event.details.registerLink}" 
               target="_blank" 
               class="register-button hover:bg-yellow-500 transform hover:-translate-y-1 transition-all duration-300"
               onclick="event.stopPropagation()">
                Register
            </a>
        ` : ''}
    </div>
`;