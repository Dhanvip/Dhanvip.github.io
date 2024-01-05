// script.js

function showTab(tabName) {
    // Get all tab elements and content sections
    var tabs = document.querySelectorAll('.tab');
    var contentSections = document.querySelectorAll('.skills-content');

    // Hide all content sections
    contentSections.forEach(function (section) {
        section.classList.remove('active');
    });

    // Deactivate all tabs
    tabs.forEach(function (tab) {
        tab.classList.remove('active');
    });

    // Activate the selected tab and corresponding content section
    var selectedTab = document.getElementById(tabName + '-tab');
    var selectedSection = document.getElementById(tabName + '-section');

    selectedTab.classList.add('active');
    selectedSection.classList.add('active');
}

// Additional function to toggle visibility of Technical Skills
function toggleTechnicalSkills() {
    var technicalSkillsSection = document.getElementById('technical-skills-section');
    technicalSkillsSection.classList.toggle('active');
}

// Show Technical Skills by default
document.addEventListener('DOMContentLoaded', function () {
    showTab('technical-skills');
});
