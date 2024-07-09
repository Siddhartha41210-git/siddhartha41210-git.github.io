document.addEventListener('DOMContentLoaded', function() {
    var darkModeToggle = document.getElementById('dark-mode-toggle');
    var body = document.body;
    var content = document.getElementById('content');
    var loadingOverlay = document.getElementById('loading-overlay');

    // Simulate a delay before displaying content (optional)
    setTimeout(function() {
        loadingOverlay.style.display = 'none';
        content.style.display = 'block';
        
        // Perform animations after loading is complete
        animateElements();
    }, 2000); // Adjust the delay time (in milliseconds) as needed

    // Dark mode toggle functionality
    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        // Toggle dark mode for the loading overlay as well (optional)
        loadingOverlay.classList.toggle('dark-mode-overlay');
        // Update text color based on dark mode
        updateTextColor();
    });

    // Function to update text color based on dark mode
    function updateTextColor() {
        var textColor = body.classList.contains('dark-mode') ? '#ccc' : '#333';
        body.style.color = textColor;

        // You may need to adjust text colors for specific elements like .box and .social
        // Example:
        var boxes = document.querySelectorAll('.box');
        boxes.forEach(function(box) {
            box.style.color = textColor;
        });

        var socialLinks = document.querySelectorAll('.social a');
        socialLinks.forEach(function(link) {
            link.style.color = textColor;
        });
    }

    function animateElements() {
        // Add your animation logic here
        var box = document.querySelector('.box');
        var profilePic = document.querySelector('.box img');
        var socialLinks = document.querySelectorAll('.social a');

        // Example animation
        box.style.animation = 'fadeIn 2s ease-in-out';
        profilePic.style.animation = 'bounceIn 2s ease';
        
        // You can loop through socialLinks for animation
        socialLinks.forEach(function(link, index) {
            link.style.animation = 'fadeIn 2s ease ' + (index * 0.2) + 's';
        });
    }
});
