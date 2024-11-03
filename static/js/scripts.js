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

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            // Toggle the 'hidden' class
            mobileMenu.classList.toggle('hidden');
            
            // Optional: Animate the menu icon
            const menuIcon = mobileMenuButton.querySelector('i');
            if (menuIcon) {
                menuIcon.classList.toggle('fa-bars');
                menuIcon.classList.toggle('fa-times');
            }
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            if (!e.target.closest('#mobile-menu') && !e.target.closest('#mobile-menu-button')) {
                mobileMenu.classList.add('hidden');
                
                // Reset the menu icon
                const menuIcon = mobileMenuButton.querySelector('i');
                if (menuIcon) {
                    menuIcon.classList.add('fa-bars');
                    menuIcon.classList.remove('fa-times');
                }
            }
        }
    });
});