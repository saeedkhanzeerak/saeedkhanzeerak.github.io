// Interactive Maps and Visualizations for GIS Portfolio

// Initialize map when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeProjectMap();
    initializeSkillCharts();
    initializeExperienceTimeline();
});

// Project locations map
function initializeProjectMap() {
    // Create map container if it doesn't exist
    const mapContainer = document.createElement('div');
    mapContainer.id = 'project-map';
    mapContainer.style.cssText = `
        height: 400px;
        width: 100%;
        border-radius: 12px;
        margin: 2rem 0;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    `;

    // Add map to projects section
    const projectsSection = document.querySelector('#projects .container');
    if (projectsSection) {
        const mapTitle = document.createElement('h3');
        mapTitle.textContent = 'Project Locations Worldwide';
        mapTitle.style.cssText = `
            text-align: center;
            color: #1f2937;
            font-size: 1.5rem;
            margin: 3rem 0 1rem 0;
        `;
        
        projectsSection.appendChild(mapTitle);
        projectsSection.appendChild(mapContainer);

        // Initialize Leaflet map
        const map = L.map('project-map').setView([30.0, 0.0], 2);

        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Project locations data
        const projectLocations = [
            {
                name: "Green Belt Project",
                location: "Saxony, Germany",
                coords: [51.1045, 13.2017],
                description: "177 sq km environmental restoration with 99% data accuracy",
                type: "Environmental"
            },
            {
                name: "Forest Wildfire Analysis",
                location: "Khyber Pakhtunkhwa, Pakistan",
                coords: [34.0151, 71.5249],
                description: "30+ sq km forest analysis with 95% hotspot accuracy",
                type: "Remote Sensing"
            },
            {
                name: "Red Sea Project",
                location: "UAE",
                coords: [25.2048, 55.2708],
                description: "200+ sq km development with 17+ integrated data layers",
                type: "Urban Planning"
            },
            {
                name: "FTTH Network Design",
                location: "Saudi Arabia",
                coords: [24.7136, 46.6753],
                description: "11+ neighborhoods with 5,000+ connections",
                type: "Telecommunications"
            },
            {
                name: "Current Role",
                location: "Zeerak Solutions, USA",
                coords: [39.8283, -98.5795],
                description: "Remote GIS Specialist improving data retrieval by 10%",
                type: "Current"
            }
        ];

        // Add markers for each project
        projectLocations.forEach(project => {
            const markerColor = getMarkerColor(project.type);
            
            const marker = L.circleMarker(project.coords, {
                radius: 8,
                fillColor: markerColor,
                color: '#fff',
                weight: 2,
                opacity: 1,
                fillOpacity: 0.8
            }).addTo(map);

            // Create popup content
            const popupContent = `
                <div style="font-family: 'Inter', sans-serif; min-width: 200px;">
                    <h4 style="color: #1f2937; margin: 0 0 8px 0; font-size: 1.1rem;">${project.name}</h4>
                    <p style="color: #64748b; margin: 0 0 8px 0; font-size: 0.9rem;"><strong>Location:</strong> ${project.location}</p>
                    <p style="color: #475569; margin: 0 0 8px 0; font-size: 0.9rem;">${project.description}</p>
                    <span style="background: ${markerColor}; color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.8rem;">${project.type}</span>
                </div>
            `;

            marker.bindPopup(popupContent);
        });

        // Add legend
        const legend = L.control({position: 'bottomright'});
        legend.onAdd = function(map) {
            const div = L.DomUtil.create('div', 'legend');
            div.style.cssText = `
                background: white;
                padding: 10px;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                font-family: 'Inter', sans-serif;
                font-size: 0.8rem;
            `;
            
            const types = ['Environmental', 'Remote Sensing', 'Urban Planning', 'Telecommunications', 'Current'];
            div.innerHTML = '<h4 style="margin: 0 0 8px 0; color: #1f2937;">Project Types</h4>';
            
            types.forEach(type => {
                const color = getMarkerColor(type);
                div.innerHTML += `
                    <div style="margin: 4px 0; display: flex; align-items: center;">
                        <div style="width: 12px; height: 12px; background: ${color}; border-radius: 50%; margin-right: 8px;"></div>
                        <span style="color: #475569;">${type}</span>
                    </div>
                `;
            });
            
            return div;
        };
        legend.addTo(map);
    }
}

// Get marker color based on project type
function getMarkerColor(type) {
    const colors = {
        'Environmental': '#10b981',
        'Remote Sensing': '#3b82f6',
        'Urban Planning': '#f59e0b',
        'Telecommunications': '#8b5cf6',
        'Current': '#ef4444'
    };
    return colors[type] || '#64748b';
}

// Initialize skill charts
function initializeSkillCharts() {
    // Create skills chart container
    const chartContainer = document.createElement('div');
    chartContainer.id = 'skills-chart';
    chartContainer.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 16px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        margin: 2rem 0;
    `;

    const skillsSection = document.querySelector('#skills .container');
    if (skillsSection) {
        const chartTitle = document.createElement('h3');
        chartTitle.textContent = 'Technical Proficiency Overview';
        chartTitle.style.cssText = `
            text-align: center;
            color: #1f2937;
            font-size: 1.5rem;
            margin: 3rem 0 1rem 0;
        `;

        skillsSection.appendChild(chartTitle);
        skillsSection.appendChild(chartContainer);

        // Create canvas for chart
        const canvas = document.createElement('canvas');
        canvas.id = 'skills-radar-chart';
        canvas.width = 400;
        canvas.height = 400;
        chartContainer.appendChild(canvas);

        // Draw radar chart
        drawRadarChart(canvas);
    }
}

// Draw radar chart for skills
function drawRadarChart(canvas) {
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 150;

    // Skills data
    const skills = [
        { name: 'GIS Software', value: 95 },
        { name: 'Remote Sensing', value: 90 },
        { name: 'GNSS & UAV', value: 85 },
        { name: 'Web GIS', value: 80 },
        { name: 'Programming', value: 88 },
        { name: 'Database Tools', value: 85 },
        { name: 'Other Apps', value: 82 }
    ];

    const angleStep = (2 * Math.PI) / skills.length;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw grid circles
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    for (let i = 1; i <= 5; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, (radius * i) / 5, 0, 2 * Math.PI);
        ctx.stroke();
    }

    // Draw grid lines
    skills.forEach((_, index) => {
        const angle = index * angleStep - Math.PI / 2;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();
    });

    // Draw skill polygon
    ctx.beginPath();
    ctx.strokeStyle = '#2563eb';
    ctx.fillStyle = 'rgba(37, 99, 235, 0.2)';
    ctx.lineWidth = 2;

    skills.forEach((skill, index) => {
        const angle = index * angleStep - Math.PI / 2;
        const value = (skill.value / 100) * radius;
        const x = centerX + Math.cos(angle) * value;
        const y = centerY + Math.sin(angle) * value;
        
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });

    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Draw skill points and labels
    ctx.fillStyle = '#2563eb';
    ctx.font = '12px Inter';
    ctx.textAlign = 'center';

    skills.forEach((skill, index) => {
        const angle = index * angleStep - Math.PI / 2;
        const value = (skill.value / 100) * radius;
        const x = centerX + Math.cos(angle) * value;
        const y = centerY + Math.sin(angle) * value;
        
        // Draw point
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fill();

        // Draw label
        const labelX = centerX + Math.cos(angle) * (radius + 20);
        const labelY = centerY + Math.sin(angle) * (radius + 20);
        
        ctx.fillStyle = '#1f2937';
        ctx.fillText(skill.name, labelX, labelY);
        ctx.fillStyle = '#64748b';
        ctx.fillText(`${skill.value}%`, labelX, labelY + 15);
        ctx.fillStyle = '#2563eb';
    });
}

// Initialize experience timeline
function initializeExperienceTimeline() {
    // Add interactive elements to timeline
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        // Add click handler for expansion
        item.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });

        // Add animation delay
        item.style.animationDelay = `${index * 0.2}s`;
        
        // Add hover effects
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Add Leaflet CSS if not already included
function loadLeafletCSS() {
    if (!document.querySelector('link[href*="leaflet"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
    }
}

// Load Leaflet library
function loadLeafletJS() {
    if (typeof L === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.onload = function() {
            initializeProjectMap();
        };
        document.head.appendChild(script);
    }
}

// Initialize everything
loadLeafletCSS();
loadLeafletJS();

