const profileName = import.meta.env.PROFILE_NAME;
console.log('PROFILE NAME:', profileName);

document.getElementById('profile-name').textContent = profileName;


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

function attachShareOptions() {
    const shareBtns = document.querySelectorAll('.share-btn');

    shareBtns.forEach(btn => {
        const shareOptions = document.createElement('div');
        shareOptions.className = 'share-options';
        shareOptions.innerHTML = `
            <a href="#" class="share-twitter">
                <div class="share-icon"><i class="fab fa-twitter"></i></div>
                Twitter
            </a>
            <a href="#" class="share-facebook">
                <div class="share-icon"><i class="fab fa-facebook-f"></i></div>
                Facebook
            </a>
            <a href="#" class="share-linkedin">
                <div class="share-icon"><i class="fab fa-linkedin-in"></i></div>
                LinkedIn
            </a>
        `;
        btn.parentNode.appendChild(shareOptions);

        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const options = this.nextElementSibling;
            options.style.display = options.style.display === 'block' ? 'none' : 'block';
        });

        const shareLinks = shareOptions.querySelectorAll('a');
        shareLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const platform = this.classList[0].split('-')[1];
                const url = this.closest('.link-container').querySelector('.link').href;
                const text = "Check out this link: ";
                let shareUrl;

                switch(platform) {
                    case 'twitter':
                        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
                        break;
                    case 'facebook':
                        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                        break;
                    case 'linkedin':
                        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`;
                        break;
                }

                window.open(shareUrl, '_blank', 'width=600,height=400');
            });
        });
    });
}

function handleClickOutside(event) {
    if (!event.target.closest('.share-options') && !event.target.closest('.share-btn')) {
        const openOptions = document.querySelectorAll('.share-options');
        openOptions.forEach(options => options.style.display = 'none');
    }
}

document.addEventListener('click', handleClickOutside);
document.addEventListener('DOMContentLoaded', function() {
    setRandomGradient();
    attachShareOptions();
    startCountdown();
    checkPromoExpiration();
});
