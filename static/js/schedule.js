const scheduleData = {
    "Feb 20": [
        {
            time: "9:00 AM - 9:45 AM",
            title: "Introduction to SAST and SCA",
            level: "Beginner",
            speakers: ["Alex Chen", "Sarah Martinez"]
        },
        {
            time: "9:45 AM - 10:30 AM",
            title: "Setting Up Your First SAST Tool",
            level: "Beginner",
            speakers: ["Michael Kumar", "Emma Wilson"]
        },
        {
            time: "10:30 AM - 10:45 AM",
            title: "Break",
            level: "",
            speakers: []
        },
        {
            time: "10:45 AM - 11:30 AM",
            title: "Secure Coding Practices",
            level: "Beginner",
            speakers: ["Michael Kumar", "Sarah Martinez"]
        },
        {
            time: "11:30 AM - 12:15 PM",
            title: "Overview of Vulnerable Applications",
            level: "Beginner",
            speakers: ["Alex Chen", "Raj Patel"]
        },
        {
            time: "12:15 PM - 1:15 PM",
            title: "Lunch Break",
            level: "",
            speakers: []
        },
        {
            time: "1:15 PM - 2:00 PM",
            title: "Advanced Semgrep Usage",
            level: "Intermediate",
            speakers: ["Lisa Zhang", "Marcus Johnson"]
        },
        {
            time: "2:00 PM - 2:45 PM",
            title: "Integrating SAST in CI/CD",
            level: "Intermediate",
            speakers: ["Emma Wilson", "Michael Kumar"]
        },
        {
            time: "2:45 PM - 3:00 PM",
            title: "Break",
            level: "",
            speakers: []
        },
        {
            time: "3:00 PM - 3:45 PM",
            title: "Understanding Software Composition Analysis",
            level: "Intermediate",
            speakers: ["Raj Patel", "Lisa Zhang"]
        },
        {
            time: "3:45 PM - 4:30 PM",
            title: "Vulnerability Remediation Strategies",
            level: "Intermediate",
            speakers: ["Sarah Martinez", "Omar Hassan"]
        }
    ],
    "Feb 21": [
        {
            time: "9:00 AM - 9:45 AM",
            title: "Customizing CodeQL Queries",
            level: "Advanced",
            speakers: ["Sophie Anderson", "Omar Hassan"]
        },
        {
            time: "9:45 AM - 10:30 AM",
            title: "Threat Modeling for SAST/SCA",
            level: "Advanced",
            speakers: ["Priya Sharma", "Alex Chen"]
        },
        {
            time: "10:30 AM - 10:45 AM",
            title: "Break",
            level: "",
            speakers: []
        },
        {
            time: "10:45 AM - 11:30 AM",
            title: "Building Your Own SAST Tool",
            level: "Advanced",
            speakers: ["Marcus Johnson", "Michael Kumar"]
        },
        {
            time: "11:30 AM - 12:15 PM",
            title: "Real-World Case Studies",
            level: "Advanced",
            speakers: ["Emma Wilson", "Raj Patel"]
        },
        {
            time: "12:15 PM - 1:15 PM",
            title: "Lunch Break",
            level: "",
            speakers: []
        },
        {
            time: "1:15 PM - 2:00 PM",
            title: "Tooling Arsenal for Application Security",
            level: "Arsenal",
            speakers: ["Lisa Zhang", "Sophie Anderson"]
        },
        {
            time: "2:00 PM - 4:30 PM",
            title: "Hands-On Workshop: Secure Coding Practices",
            level: "Workshop",
            speakers: ["Sarah Martinez", "Priya Sharma"]
        }
    ]
};

function renderSchedule() {
    const scheduleContent = document.getElementById('schedule-content');
    if (!scheduleContent) return;

    Object.entries(scheduleData).forEach(([date, sessions]) => {
        const dateSection = document.createElement('div');
        dateSection.className = 'schedule-date';
        
        const dateHeader = document.createElement('h3');
        dateHeader.textContent = date;
        dateSection.appendChild(dateHeader);

        const dateContent = document.createElement('div');
        dateContent.className = 'schedule-date-content';

        // Create columns
        const leftColumn = document.createElement('div');
        leftColumn.className = 'session-column';
        
        const rightColumn = document.createElement('div');
        rightColumn.className = 'session-column';

        // Calculate middle point
        const totalSessions = sessions.length;
        const midPoint = Math.ceil(totalSessions / 2);

        sessions.forEach((session, index) => {
            const sessionElement = document.createElement('div');
            sessionElement.className = 'session-item';
            if (!session.level) sessionElement.classList.add('break-session');
            
            const levelBadge = session.level ? 
                `<span class="level-badge ${session.level.toLowerCase()}">${session.level}</span>` : '';

            const speakers = session.speakers.length ? 
                `<div class="speakers">${session.speakers.join(', ')}</div>` : '';

            sessionElement.innerHTML = `
                <div class="session-time">${session.time}</div>
                <div class="session-details">
                    <div class="session-title">${session.title}</div>
                    ${speakers}
                </div>
                ${levelBadge}
            `;

            // Distribute to columns
            if (index < midPoint) {
                leftColumn.appendChild(sessionElement);
            } else {
                rightColumn.appendChild(sessionElement);
            }
        });

        dateContent.appendChild(leftColumn);
        dateContent.appendChild(rightColumn);
        dateSection.appendChild(dateContent);
        scheduleContent.appendChild(dateSection);
    });
}

// Call the function when the document is loaded
document.addEventListener('DOMContentLoaded', renderSchedule);