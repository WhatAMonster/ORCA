document.addEventListener('DOMContentLoaded', () => {
    const googleBtn = document.getElementById('lg-google');
    if (googleBtn) {
        googleBtn.addEventListener('click', () => {
            window.location.href = './src/dash.html';
        });
    }
});
