// const selectedCountries = [
//     "United-States", "Chile", "France", "Spain", "Netherlands", "Jordan", "Israel", "Palestine", "Switzerland",
//     "Morocco", "Japan", "Mexico", "Bolivia"
// ];

// // Add the 'selected-country' class to the selected countries
// selectedCountries.forEach(id => {
//     const countryElement = document.getElementById(id);
//     if (countryElement) {
//         countryElement.classList.add('selected-country');
//     }
// });

// // Show a country name when the cursor is placed on the country
// document.querySelectorAll(".allPaths").forEach(e => {
//     e.setAttribute('class', `allPaths ${e.id}`);

//     e.addEventListener("mouseover", function () {
//         window.onmousemove = function (j) {
//             const x = j.clientX;
//             const y = j.clientY;
//             const nameElement = document.getElementById('country-name');
//             nameElement.style.top = (y - 40) + 'px';
//             nameElement.style.left = (x + 20) + 'px';
//         };
//         const nameElement = document.getElementById("country-name");
//         nameElement.style.opacity = 1; // Make the name element visible
//         document.getElementById("namep").innerText = e.id; // Set the country name

//         // Add hover style only if it's a selected country
//         if (selectedCountries.includes(e.id)) {
//             e.classList.add('selected-country');
//         }
//     });

//     e.addEventListener("mouseleave", function () {
//         const nameElement = document.getElementById("country-name");
//         nameElement.style.opacity = 0; // Hide the name element

//         // Remove hover style
//         e.classList.remove('selected-country');
//     });

//     e.addEventListener("click", function () {
//         if (selectedCountries.includes(this.id)) {
//             // Hide the timeline section
//             document.querySelector('#timeline-section').style.display = 'none';

//             // Hide all content sections
//             document.querySelectorAll('.country-content').forEach(content => {
//                 content.style.display = 'none';
//             });

//             // Show the content section for the clicked country
//             const countryId = this.id;
//             const content = document.getElementById(`${countryId}-content`);
//             if (content) {
//                 content.style.display = 'block';

//                 // Scroll to the content section
//                 content.scrollIntoView({ behavior: 'smooth', block: 'start' });
//             }
//         } else {
//             // Show the timeline section and hide all country contents
//             document.querySelector('#timeline-section').style.display = 'block';

//             document.querySelectorAll('.country-content').forEach(content => {
//                 content.style.display = 'none';
//             });
//         }
//     });
// });

// // Function to show the timeline
// function showTimeline() {
//     document.querySelector('#timeline-section').style.display = 'block'; // Show the timeline section

//     // Hide all country content sections
//     document.querySelectorAll('.country-content').forEach(content => {
//         content.style.display = 'none';
//     });
// }

// // Add click event listener to the SVG container
// document.getElementById('svg-container').addEventListener('click', function(event) {
//     // Check if the click was on the background (not on an individual country path)
//     if (!event.target.classList.contains('allPaths')) {
//         showTimeline();
//     }
// });

// document.querySelectorAll('.country-link').forEach(link => {
//     link.addEventListener('click', function(event) {
//         event.preventDefault(); // Prevent default anchor behavior

//         // Get the target content section
//         const targetId = this.getAttribute('href').substring(1);
//         const targetContent = document.getElementById(targetId);

//         if (targetContent) {
//             // Hide the timeline section
//             document.querySelector('#timeline-section').style.display = 'none';

//             // Hide all content sections
//             document.querySelectorAll('.country-content').forEach(content => {
//                 content.style.display = 'none';
//             });

//             // Show the target content section
//             targetContent.style.display = 'block';

//             // Scroll to the target content section
//             targetContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
//         } else {
//             console.error(`No content found for target ID: ${targetId}`);
//         }
//     });
// });



// // Add click event listener to all country-hashtag elements
// document.querySelectorAll('.country-hashtag').forEach(link => {
//     link.addEventListener('click', function(event) {
//         event.preventDefault(); // Prevent the default anchor link behavior

//         // Get the target country ID from the href attribute
//         const targetId = this.getAttribute('href').substring(1);
//         const targetElement = document.getElementById(targetId);

//         if (targetElement) {
//             // Hide all content sections
//             document.querySelectorAll('.country-content').forEach(content => {
//                 content.style.display = 'none';
//             });

//             // Show the target content section
//             targetElement.style.display = 'block';

//             // Scroll to the target content section
//             targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
//         }
//     });
// });

// // Add a back hyperlink to the timeline page
// document.addEventListener('DOMContentLoaded', () => {
//     const backToTimelineLink = document.querySelector('#back-to-timeline');
//     backToTimelineLink.addEventListener('click', (event) => {
//       event.preventDefault();
//       document.querySelector('#timeline-section').scrollIntoView({ behavior: 'smooth' });
//     });
// });

// Array of selected countries
const selectedCountries = [
    "United-States", "Chile", "France", "Spain", "Netherlands", "Jordan", "Israel", "Palestine", "Switzerland",
    "Morocco", "Japan", "Mexico", "Bolivia"
];

// Add the 'selected-country' class to the selected countries
selectedCountries.forEach(id => {
    const countryElement = document.getElementById(id);
    if (countryElement) {
        countryElement.classList.add('selected-country');
    }
});

// Show a country name when the cursor is placed on the country
document.querySelectorAll(".allPaths").forEach(e => {
    e.setAttribute('class', `allPaths ${e.id}`);

    e.addEventListener("mouseover", function () {
        window.onmousemove = function (j) {
            const x = j.clientX;
            const y = j.clientY;
            const nameElement = document.getElementById('country-name');
            nameElement.style.top = (y - 40) + 'px';
            nameElement.style.left = (x + 20) + 'px';
        };
        const nameElement = document.getElementById("country-name");
        nameElement.style.opacity = 1; // Make the name element visible
        document.getElementById("namep").innerText = e.id; // Set the country name

        // Add hover style only if it's a selected country
        if (selectedCountries.includes(e.id)) {
            e.classList.add('selected-country');
        }
    });

    e.addEventListener("mouseleave", function () {
        const nameElement = document.getElementById("country-name");
        nameElement.style.opacity = 0; // Hide the name element

        // Remove hover style
        e.classList.remove('selected-country');
    });

    e.addEventListener("click", function () {
        if (selectedCountries.includes(this.id)) {
            // Hide the timeline section
            document.querySelector('#timeline-section').style.display = 'none';

            // Hide all content sections
            document.querySelectorAll('.country-content').forEach(content => {
                content.style.display = 'none';
            });

            // Show the content section for the clicked country
            const countryId = this.id;
            const content = document.getElementById(`${countryId}-content`);
            if (content) {
                content.style.display = 'block';

                // Scroll to the content section
                content.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            // Show the timeline section and hide all country contents
            showTimeline();
        }
    });
});

// Function to show the timeline
function showTimeline() {
    document.querySelector('#timeline-section').style.display = 'block'; // Show the timeline section

    // Hide all country content sections
    document.querySelectorAll('.country-content').forEach(content => {
        content.style.display = 'none';
    });
}

// Add click event listener to the SVG container
document.getElementById('svg-container').addEventListener('click', function(event) {
    // Check if the click was on the background (not on an individual country path)
    if (!event.target.classList.contains('allPaths')) {
        showTimeline();
    }
});

// Handle clicks on country links
document.querySelectorAll('.country-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Get the target content section
        const targetId = this.getAttribute('href').substring(1);
        const targetContent = document.getElementById(targetId);

        if (targetContent) {
            // Hide the timeline section
            document.querySelector('#timeline-section').style.display = 'none';

            // Hide all content sections
            document.querySelectorAll('.country-content').forEach(content => {
                content.style.display = 'none';
            });

            // Show the target content section
            targetContent.style.display = 'block';

            // Scroll to the target content section
            targetContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            console.error(`No content found for target ID: ${targetId}`);
        }
    });
});

// Handle clicks on country hashtags
document.querySelectorAll('.country-hashtag').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor link behavior

        // Get the target country ID from the href attribute
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Hide all content sections
            document.querySelectorAll('.country-content').forEach(content => {
                content.style.display = 'none';
            });

            // Show the target content section
            targetElement.style.display = 'block';

            // Scroll to the target content section
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Add click event listeners to all back buttons
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.back-to-timeline').forEach(backButton => {
        backButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            showTimeline(); // Call function to show timeline
        });
    });
});
