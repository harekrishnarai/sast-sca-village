const swagData = [
    {
        name: "SAST Analyzer Badge",
        image: "static/media/stickers/sastmaster.png",
        description: "Master static analysis tools and earn the SAST Analyzer badge!"
    },
    {
        name: "Dependency Detective Badge",
        image: "static/media/stickers/sastmaster.png",
        description: "Learn SCA tools and earn your Dependency Detective status!"
    },
    {
        name: "Defensive Coder Shield",
        image: "static/media/stickers/sastmaster.png",
        description: "Master defensive programming practices to claim your shield!"
    },
    {
        name: "DevSecOps Champion Badge",
        image: "static/media/stickers/sastmaster.png",
        description: "Build secure pipelines and earn the Champion Badge!"
    },
    {
        name: "Supply Chain Guardian",
        image: "static/media/stickers/sastmaster.png",
        description: "Protect the software supply chain and claim your Guardian status!"
    },
    {
        name: "Code Review Master",
        image: "static/media/stickers/sastmaster.png",
        description: "Master security-focused code review techniques and earn your badge!"
    }
];

function createSVGFilter() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("style", "position: absolute; width: 0; height: 0");
    svg.innerHTML = `
        <defs>
            <filter id="pixelate">
                <feFlood x="4" y="4" height="2" width="2" flood-color="var(--neon-blue)"/>
                <feComposite width="10" height="10"/>
                <feTile result="a"/>
                <feComposite in="SourceGraphic" in2="a" operator="in"/>
                <feMorphology operator="dilate" radius="2"/>
            </filter>
        </defs>
    `;
    document.body.appendChild(svg);
}

function populateSwag() {
    createSVGFilter();
    const swagGrid = document.getElementById('swag-grid');
    
    swagData.forEach(item => {
        const swagCard = document.createElement('div');
        swagCard.classList.add('swag-card');
        swagCard.innerHTML = `
            <h3>${item.name}</h3>
            <img src="${item.image}" alt="${item.name}">
            <p>${item.description}</p>
        `;
        
        swagGrid.appendChild(swagCard);
    });
}

document.addEventListener('DOMContentLoaded', populateSwag);