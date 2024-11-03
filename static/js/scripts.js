// Theme Toggle Functionality
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update toggle button icon
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
        toggleBtn.innerHTML = theme === 'light' 
            ? '<i class="fas fa-moon"></i>' 
            : '<i class="fas fa-sun"></i>';
    }
}

// Initialize theme
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
}

// Theme toggle event listener
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
        });
    }
});

const cursor = document.createElement('div');
const cursorRing = document.createElement('div');
const scanRing = document.createElement('div');
const targetDot = document.createElement('div');

cursor.className = 'security-cursor';
cursorRing.className = 'security-cursor-ring';
scanRing.className = 'scan-ring';
targetDot.className = 'target-dot';

cursor.appendChild(targetDot);
cursor.appendChild(scanRing);
document.body.appendChild(cursor);
document.body.appendChild(cursorRing);

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
    
    cursorRing.style.left = x + 'px';
    cursorRing.style.top = y + 'px';
});

document.addEventListener('mousedown', () => {
    cursor.classList.add('scanning');
    cursorRing.classList.add('scanning');
});

document.addEventListener('mouseup', () => {
    cursor.classList.remove('scanning');
    cursorRing.classList.remove('scanning');
});

document.addEventListener('click', function(event) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = event.clientX + 'px';
    ripple.style.top = event.clientY + 'px';
    document.body.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 1000);
});

document.getElementById('mobile-menu-button').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('mobile-menu-open');
});