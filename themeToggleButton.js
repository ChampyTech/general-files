const themeToggleButton = document.getElementById('themeToggleButton');

// Apply saved theme (if any)
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeToggleButton.textContent = 'Light mode';
};

// Toggle and save to click
themeToggleButton.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggleButton.textContent = isDark ? 'Light mode' : 'Dark mode';
});
