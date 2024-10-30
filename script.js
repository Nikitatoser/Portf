document.addEventListener('DOMContentLoaded', function() {
    // Профільні дані
    const profileData = {
        name: "Mykyta",
        surname: "Honcharenko",
        age: 20,
        country: "Germany",
        role: "Software Engineer",
        location: "Berlin",
        skills: [
            "Communication",
            "Self-organization",
            "Teamwork",
            "Critical thinking",
            "Problem-solving",
            "Adaptability",
            "Time management",
            "Attention to detail"
        ]
    };

    // Вставка профільних даних
    document.getElementById('name').textContent = profileData.name;
    document.getElementById('surname').textContent = profileData.surname;
    document.getElementById('age').textContent = profileData.age;
    document.getElementById('country').textContent = profileData.country;
    document.getElementById('role').textContent = profileData.role;
    document.getElementById('location').textContent = profileData.location;

    // Вставка навичок
    const skillsOutput = document.getElementById('skills-output');
    const skillsText = profileData.skills.map(skill => `(*)  ${skill}`).join('\n');
    skillsOutput.textContent = skillsText;
});


// Можна додати функції для оновлення вмісту карток з технічними скілами, наприклад, завантажити їх динамічно
const skills = [
    { name: "Python", description: "Experienced in data analysis, web development, and scripting." },
    { name: "JavaScript", description: "Proficient in web development, React, and asynchronous programming." },
    { name: "SQL", description: "Experienced in database management, queries, and optimizations." },
    { name: "HTML/CSS", description: "Knowledge of responsive design, Flexbox, and CSS Grid." }
];

const skillsGrid = document.querySelector('.skills-grid');
skills.forEach(skill => {
    const skillCard = document.createElement('div');
    skillCard.classList.add('skill-card');
    skillCard.innerHTML = `<div class="skill-name">${skill.name}</div><div class="skill-description">${skill.description}</div>`;
    skillsGrid.appendChild(skillCard);
});
