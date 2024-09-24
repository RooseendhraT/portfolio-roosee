var typed=new Typed(".text",{
    strings: ["Fullstack developer","Web developer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
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
}

// Optionally, show the "Home" tab by default
document.addEventListener('DOMContentLoaded', () => {
    showTab('home');
});
