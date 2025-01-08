document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".text", {
        strings: ["Fullstack Developer", "Web Developer"],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 1000,
        loop: true,
    });
});

function showTab(tabId) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));

    // Show the selected tab content
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // Remove the active class from all nav-items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));

    // Add the active class to the clicked nav-item
    const activeNavItem = document.querySelector(`a[href="#${tabId}"]`).parentElement;
    activeNavItem.classList.add('active');
}

// Show the "Home" tab by default
document.addEventListener('DOMContentLoaded', () => {
    showTab('home');
});



