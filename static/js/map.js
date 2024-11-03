const villageData = [
    { name: "Entrance", x: 5, y: 90, isEntrance: true, icon: "fa-door-open", description: "Starting point of your AppSec journey. Get ready to explore!" },
    { name: "SAST Analysis", x: 20, y: 85, icon: "fa-search", description: "Master static analysis tools and techniques" },
    { name: "Dependency Scanning", x: 5, y: 32, icon: "fa-cube", description: "Learn SCA tools and dependency management" },
    { name: "Defensive Coding", x: 20, y: 5, icon: "fa-code", description: "Learn defensive programming practices" },
    { name: "DevSecOps", x: 80, y: 32, icon: "fa-infinity", description: "Security in CI/CD pipeline" },
    { name: "Supply Chain Security", x: 80, y: 50, icon: "fa-link", description: "Protect your software supply chain" },
    { name: "Secure Code Review", x: 40, y: 85, icon: "fa-code-branch", description: "Security-focused code review" },
    { name: "Exit", x: 5, y: 5, isExit: true, icon: "fa-door-closed", description: "You've completed your tour of the SAST SCA Village." },
    { name: "Washroom", x: 85, y: 85, isRestroom: true, icon: "fa-restroom", description: "Restroom facilities for conference attendees." }
];

let player = {
    x: 45,
    y: 45,
    speed: 3,
    currentBooth: null
};

function createMap() {
    const map = document.querySelector('.map');
    map.classList.add('cyber-map');

    // Create grid lines
    createGridLines(map);

    villageData.forEach((village, index) => {
        const booth = document.createElement('div');
        booth.classList.add('booth');
        booth.style.left = `${village.x}%`;
        booth.style.top = `${village.y}%`;
        
        // Create hexagonal background
        const hexBg = document.createElement('div');
        hexBg.classList.add('hex-background');
        
        // Create content container
        const content = document.createElement('div');
        content.classList.add('booth-content');

        if (village.icon) {
            const icon = document.createElement('i');
            icon.className = `fas ${village.icon}`;
            content.appendChild(icon);
        }

        const label = document.createElement('span');
        label.className = 'booth-label';
        label.textContent = village.name;
        content.appendChild(label);

        if (village.description) {
            const tooltip = document.createElement('div');
            tooltip.className = 'booth-tooltip';
            tooltip.textContent = village.description;
            content.appendChild(tooltip);
        }

        booth.appendChild(hexBg);
        booth.appendChild(content);
        
        // Add cyber effects
        booth.style.animationDelay = `${index * 0.1}s`;
        booth.style.animation = 'fadeIn 0.5s ease-out forwards';

        booth.addEventListener('mouseover', () => {
            booth.classList.add('booth-hover');
            createScanEffect(booth);
        });

        booth.addEventListener('mouseout', () => {
            booth.classList.remove('booth-hover');
        });

        map.appendChild(booth);
    });

    createPath();

    // Add player character
    const playerChar = document.createElement('div');
    playerChar.id = 'player';
    playerChar.innerHTML = '<i class="fas fa-user"></i>';
    map.appendChild(playerChar);

    // Initialize player position
    updatePlayerPosition();

    // Add keyboard controls with preventDefault
    document.addEventListener('keydown', (e) => {
        // Prevent scrolling for arrow keys and WASD
        if(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 
            'w', 'a', 's', 'd', ' ', 'e'].includes(e.key)) {
            e.preventDefault();
            handleMovement(e);
        }
    });

    // Prevent scrolling when map is in focus
    map.addEventListener('focus', () => {
        document.body.style.overflow = 'hidden';
    });

    // Optional: Prevent right-click context menu on map
    map.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
}

function createGridLines(map) {
    const grid = document.createElement('div');
    grid.className = 'cyber-grid';
    map.appendChild(grid);
}

function createScanEffect(booth) {
    const scan = document.createElement('div');
    scan.className = 'scan-effect';
    booth.appendChild(scan);
    setTimeout(() => scan.remove(), 1000);
}

function createPath() {
    const map = document.querySelector('.map');
    const path = document.createElement('svg');
    path.classList.add('path');
    path.setAttribute('width', '100%');
    path.setAttribute('height', '100%');

    let pathString = 'M 5 95';
    villageData.forEach((village, index) => {
        if (index > 0 && !village.isExit) {
            pathString += ` L ${village.x} ${village.y}`;
        }
    });

    const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathElement.setAttribute('d', pathString);
    pathElement.classList.add('path-line');

    path.appendChild(pathElement);
    map.appendChild(path);
}

function handleMovement(e) {
    const oldX = player.x;
    const oldY = player.y;
    let moved = false;

    switch(e.key) {
        case 'ArrowUp':
        case 'w':
            player.y = Math.max(0, player.y - player.speed);
            moved = true;
            break;
        case 'ArrowDown':
        case 's':
            player.y = Math.min(100, player.y + player.speed);
            moved = true;
            break;
        case 'ArrowLeft':
        case 'a':
            player.x = Math.max(0, player.x - player.speed);
            moved = true;
            break;
        case 'ArrowRight':
        case 'd':
            player.x = Math.min(100, player.x + player.speed);
            moved = true;
            break;
        case 'e':
            interactWithBooth();
            break;
    }

    // Only update if actually moved
    if (moved) {
        // Check for collisions
        if (isColliding()) {
            player.x = oldX;
            player.y = oldY;
        }

        const playerElement = document.getElementById('player');
        playerElement.classList.add('walking');
        
        updatePlayerPosition();
        checkBoothProximity();

        // Remove walking animation after movement
        setTimeout(() => {
            playerElement.classList.remove('walking');
        }, 100);
    }
}

function updatePlayerPosition() {
    const playerElement = document.getElementById('player');
    playerElement.style.left = `${player.x}%`;
    playerElement.style.top = `${player.y}%`;
}

function isColliding() {
    // Add collision detection logic here
    return false; // Placeholder
}

function checkBoothProximity() {
    let nearestBooth = null;
    let shortestDistance = Infinity;

    villageData.forEach(booth => {
        const distance = Math.hypot(
            player.x - booth.x,
            player.y - booth.y
        );

        if (distance < 10 && distance < shortestDistance) { // 10 is proximity threshold
            shortestDistance = distance;
            nearestBooth = booth;
        }
    });

    // If player enters a new booth area
    if (nearestBooth !== player.currentBooth) {
        if (nearestBooth) {
            showBoothPopup(nearestBooth);
        } else {
            hideBoothPopup();
        }
        player.currentBooth = nearestBooth;
    }
}

// Define the recommended booth order
const boothOrder = [
    'Entrance',
    'SAST Analysis',
    'Secure Code Review',
    'Dependency Scanning',
    'Defensive Coding',
    'DevSecOps',
    'Supply Chain Security',
    'Exit'
];

function getNextBooth(currentBooth) {
    if (!currentBooth) return null;
    const currentIndex = boothOrder.indexOf(currentBooth.name);
    if (currentIndex === -1 || currentIndex === boothOrder.length - 1) return null;
    return villageData.find(booth => booth.name === boothOrder[currentIndex + 1]);
}

function getDirectionArrow(currentBooth, nextBooth) {
    if (!currentBooth || !nextBooth) return '';
    
    // Calculate angle between current and next booth
    const dx = nextBooth.x - currentBooth.x;
    const dy = nextBooth.y - currentBooth.y;
    
    // Determine direction based on angle
    if (Math.abs(dx) > Math.abs(dy)) {
        return dx > 0 ? 'fa-arrow-right' : 'fa-arrow-left';
    } else {
        return dy > 0 ? 'fa-arrow-down' : 'fa-arrow-up';
    }
}

function showBoothPopup(booth) {
    const popup = document.createElement('div');
    popup.id = 'booth-popup';
    popup.className = 'booth-popup';
    
    // Get next booth in sequence
    const nextBooth = getNextBooth(booth);
    const directionArrow = getDirectionArrow(booth, nextBooth);
    
    // Get detailed description based on booth type
    let detailedDescription = '';
    let directions = '';
    
    // Basic description for all booths
    detailedDescription = getBoothDescription(booth);
    
    // Dynamic directions based on next booth
    if (nextBooth) {
        directions = `
            <div class="directions">
                <p>
                    <i class="fas ${directionArrow}"></i> 
                    Next Stop: <span class="next-stop">${nextBooth.name}</span>
                    ${getDirectionText(booth, nextBooth)}
                </p>
            </div>`;
    } else if (booth.name === 'Supply Chain Security') {
        directions = `
            <div class="directions">
                <p><i class="fas fa-flag-checkered"></i> Final Stop! Head to the Exit when ready.</p>
            </div>`;
    }
    
    // Special case for Entrance to show full path
    if (booth.name === 'Entrance') {
        directions = `
            <div class="directions">
                <h3><i class="fas fa-route"></i> Suggested Path:</h3>
                <ol>
                    ${boothOrder.slice(1, -1).map(name => 
                        `<li><span class="next-stop">${name}</span></li>`
                    ).join('')}
                </ol>
            </div>`;
    }

    popup.innerHTML = `
        <div class="popup-content">
            <div class="popup-header">
                <i class="fas ${booth.icon} fa-2x"></i>
                <h2>${booth.name}</h2>
            </div>
            <div class="popup-body">
                <p class="booth-main-desc">${booth.description}</p>
                <div class="booth-detailed-info">
                    ${detailedDescription}
                </div>
                ${directions}
                <div class="popup-actions">
                    <button class="close-popup-btn">
                        <i class="fas fa-times"></i> Close
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(popup);
    popup.querySelector('.close-popup-btn').addEventListener('click', hideBoothPopup);
    setTimeout(() => popup.classList.add('show'), 10);
}

function getDirectionText(currentBooth, nextBooth) {
    const dx = nextBooth.x - currentBooth.x;
    const dy = nextBooth.y - currentBooth.y;
    
    let direction = '';
    if (Math.abs(dx) > Math.abs(dy)) {
        direction = dx > 0 ? 'to your right' : 'to your left';
    } else {
        direction = dy > 0 ? 'below' : 'above';
    }
    return direction;
}

function getBoothDescription(booth) {
    switch(booth.name) {
        case 'SAST Analysis':
            return `
                <ul>
                    <li>Learn about Static Application Security Testing</li>
                    <li>Discover common code vulnerabilities</li>
                    <li>Practice with popular SAST tools</li>
                    <li>Understand secure coding patterns</li>
                </ul>`;
        case 'Dependency Scanning':
            return `
                <ul>
                    <li>Explore Software Composition Analysis</li>
                    <li>Identify vulnerable dependencies</li>
                    <li>Learn dependency management best practices</li>
                    <li>Use modern SCA tools</li>
                </ul>`;
        case 'Defensive Coding':
            return `
                <ul>
                    <li>Master secure coding techniques</li>
                    <li>Implement input validation</li>
                    <li>Prevent common security bugs</li>
                    <li>Write resilient code</li>
                </ul>`;
        case 'DevSecOps':
            return `
                <ul>
                    <li>Integrate security in CI/CD</li>
                    <li>Automate security testing</li>
                    <li>Configure security gates</li>
                    <li>Monitor security metrics</li>
                </ul>`;
        case 'Supply Chain Security':
            return `
                <ul>
                    <li>Secure your software supply chain</li>
                    <li>Implement SLSA framework</li>
                    <li>Verify package integrity</li>
                    <li>Manage vendor security</li>
                </ul>`;
        case 'Secure Code Review':
            return `
                <ul>
                    <li>Learn code review techniques</li>
                    <li>Spot security anti-patterns</li>
                    <li>Use code review tools</li>
                    <li>Practice collaborative reviews</li>
                </ul>`;
        case 'Entrance':
            return `
                <ul>
                    <li>Welcome to SAST SCA Village!</li>
                    <li>Use WASD or Arrow keys to move around</li>
                    <li>Press E to interact with booths</li>
                    <li>Visit all stations to learn about AppSec</li>
                </ul>`;
        case 'Exit':
            return `
                <ul>
                    <li>Thanks for visiting SAST SCA Village!</li>
                    <li>Hope you learned something valuable</li>
                    <li>Don't forget to collect your swag</li>
                    <li>See you at the next conference!</li>
                </ul>`;
        case 'Washroom':
            return `
                <ul>
                    <li>Restroom facilities available</li>
                    <li>Accessible and clean</li>
                    <li>Water fountain nearby</li>
                    <li>First aid kit available</li>
                </ul>`;
        default:
            return ''; // Return empty string instead of undefined for unknown booths
    }
}

function hideBoothPopup() {
    const popup = document.getElementById('booth-popup');
    if (popup) {
        popup.classList.remove('show');
        setTimeout(() => popup.remove(), 300);
    }
}

function startBoothChallenge(booth) {
    // Create challenge modal
    const modal = document.createElement('div');
    modal.className = 'challenge-modal';
    
    let challengeContent = '';
    switch(booth.name) {
        case 'Defensive Coding':
            challengeContent = `
                <div class="challenge-content">
                    <h3>Secure Coding Challenge</h3>
                    <div class="code-editor">
                        <pre><code>
function validateUserInput(input) {
    // TODO: Add input validation
    return input;
}

// Challenge: Implement secure input validation
// 1. Prevent XSS attacks
// 2. Sanitize special characters
// 3. Validate length and format
                        </code></pre>
                    </div>
                    <div class="challenge-controls">
                        <button class="test-code-btn">Test Solution</button>
                        <button class="hint-btn">Get Hint</button>
                    </div>
                </div>
            `;
            break;
        // Add cases for other booths...
    }

    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <i class="fas ${booth.icon}"></i>
                <h2>${booth.name} Challenge</h2>
                <button class="close-modal">&times;</button>
            </div>
            ${challengeContent}
        </div>
    `;

    document.body.appendChild(modal);

    // Add event listeners for challenge interactions
    modal.querySelector('.close-modal').onclick = () => modal.remove();
}

document.addEventListener('DOMContentLoaded', createMap);
