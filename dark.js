document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');

    // Check and apply the stored theme preference
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggleButton.classList.add('dark-mode');
    }

    // Toggle theme on button click
    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeToggleButton.classList.toggle('dark-mode');

        // Save the current theme preference
        const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });
});
