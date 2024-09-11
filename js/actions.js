// script.js
document.addEventListener('DOMContentLoaded', () => {
    const secretValue = '{{SECRET_VALUE}}'; // Placeholder será substituído pelo GitHub Actions
    document.getElementById('secret-value').textContent = secretValue;
});
