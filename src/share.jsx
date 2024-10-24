import { useEffect } from 'react';

function attachShareOptions() {
    const shareBtns = document.querySelectorAll('.share-btn');

    shareBtns.forEach(btn => {
        // Criar e adicionar opções de compartilhamento
        const shareOptions = document.createElement('div');
        shareOptions.className = 'share-options';
        shareOptions.innerHTML = `
            <a href="#" class="share-whatsapp">
                <div class="share-icon"><i class="fab fa-whatsapp"></i></div>
                Whatsapp
            </a>
            <a href="#" class="share-telegram">
                <div class="share-icon"><i class="fab fa-telegram"></i></div>
                Telegram
            </a>
            <a href="#" class="share-instagram">
                <div class="share-icon"><i class="fab fa-instagram"></i></div>
                Instagram
            </a>
            <a href="#" class="share-facebook">
                <div class="share-icon"><i class="fab fa-facebook-f"></i></div>
                Facebook
            </a>
            <a href="#" class="share-tiktok">
                <div class="share-icon"><i class="fa-brands fa-tiktok"></i></div>
                TikTok
            </a>
            <a href="#" class="share-twitter">
                <div class="share-icon"><i class="fa-brands fa-twitter"></i></div>
                Twitter
            </a>
            <a href="#" class="share-email">
                <div class="share-icon"><i class="fa-regular fa-envelope"></i></div>
                Email
            </a>
        `;
        btn.parentNode.appendChild(shareOptions);

        // Alternar visibilidade das opções de compartilhamento
        btn.addEventListener('click', e => {
            e.stopPropagation();
            const isVisible = shareOptions.style.display === 'block';
            document.querySelectorAll('.share-options').forEach(option => {
                option.style.display = 'none'; // Fecha todos os menus
            });
            shareOptions.style.display = isVisible ? 'none' : 'block'; // Alterna a visibilidade
        });

        // Adicionar eventos de clique aos links de compartilhamento
        shareOptions.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                const platform = link.classList[0].split('-')[1];
                const url = window.location.href;
                const title = document.title;

                // Montagem das URLs de compartilhamento para cada plataforma
                const shareUrl = {
                    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title}\n${url}`)}`,
                    telegram: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
                    instagram: `https://www.instagram.com/pincel.ia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==`,
                    tiktok: `https://www.tiktok.com/upload?refer=${encodeURIComponent(url)}`,
                    bluesky: `https://bsky.app/profile/share?text=${encodeURIComponent(`${title}\n${url}`)}`,
                    // facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
                    // facebook: `http://m.me/Pincelia?ref=${encodeURIComponent(url)}`,
                    facebook: `fb-messenger://share?link=${encodeURIComponent(url)}`,
                    twitter: `https://twitter.com/share?url=${encodeURIComponent(url)}`,
                    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
                }[platform];

                if (shareUrl) {
                    window.open(shareUrl, '_blank');
                } else {
                    alert('Compartilhamento nesta plataforma não está disponível.');
                }
            });
        });
    });
}


const Share = () => {
    useEffect(() => {
        attachShareOptions();

        const handleClickOutside = e => {
            if (!e.target.closest('.share-btn') && !e.target.closest('.share-options')) {
                document.querySelectorAll('.share-options').forEach(option => {
                    option.style.display = 'none';
                });
            }
        };

        document.addEventListener('DOMContentLoaded', attachShareOptions);
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return <div>{/* Your existing JSX content goes here */}</div>;
};

export default Share;
