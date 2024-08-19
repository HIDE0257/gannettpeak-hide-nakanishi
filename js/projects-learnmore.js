// Hide projects list and show specific project
function toggleDescription(projectId) {
    // Hide all projects list and descriptions
    document.querySelectorAll('.projects-list').forEach(el => {
        el.style.display = 'none'; // Hide project list items
    });
    document.querySelectorAll('.projects-section').forEach(el => {
        el.style.display = 'none'; // Hide all project descriptions
    });

    // Show the specific project details
    document.getElementById(projectId).style.display = 'block'; // Show selected project description
}

//  Show the project description when the user clicks the project
function backToList() {
    // Show all projects list
    document.querySelectorAll('.projects-list').forEach(el => {
        el.style.display = ''; // Reset to original display value
    });

    // Hide all project descriptions
    document.querySelectorAll('.projects-section').forEach(el => {
        el.style.display = 'none'; // Hide project descriptions
    });
}

// Back to projects-section when clicking the project header
document.getElementById('projects-header-h1').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    
    // Hide all project details
    document.querySelectorAll('.projects-section').forEach(el => {
        el.style.display = 'none';
    });
    
    // Show the project list
    document.querySelectorAll('.projects-list').forEach(el => {
        el.style.display = '';
    });
    
    // Optionally, scroll to the project list section
    document.getElementById('projects-list').scrollIntoView({ behavior: 'smooth' });
})
