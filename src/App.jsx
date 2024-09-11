import { useEffect } from 'react';

function generateRandomColor() {
    let color;
    do {
        color = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    } while (color === '#ffffff');

    return color;
}

function setRandomGradient() {
    const color1 = generateRandomColor();
    const color2 = generateRandomColor();
    document.body.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
}

function startCountdown() {
    const countdownElement = document.querySelector('.countdown-timer');
    let timeLeft = localStorage.getItem('promoTimeLeft');

    if (!timeLeft) {
        timeLeft = 15 * 60; // 15 min
        localStorage.setItem('promoTimeLeft', timeLeft);
    } else {
        timeLeft = parseInt(timeLeft);
    }

    function updateCountdown() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        countdownElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (timeLeft > 0) {
            timeLeft--;
            localStorage.setItem('promoTimeLeft', timeLeft);
            setTimeout(updateCountdown, 1000);
        } else {
            countdownElement.textContent = "Expired";
            localStorage.removeItem('promoTimeLeft');
        }
    }

    updateCountdown();
}

function checkPromoExpiration() {
    const timeLeft = localStorage.getItem('promoTimeLeft');
    const promoContainer = document.querySelector('.promo-container');

    if (!timeLeft || parseInt(timeLeft) <= 0) {
        promoContainer.style.display = 'none';
    }
}

const App = () => {
    useEffect(() => {
        setRandomGradient();
        startCountdown();
        checkPromoExpiration();

    }, []);

    return (
        <div>
            {/* Your existing JSX content goes here */}
        </div>
    );
}

export default App;
