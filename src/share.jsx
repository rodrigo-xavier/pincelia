import { useEffect } from 'react';

function attachShareOptions() {
    const shareBtns = document.querySelectorAll('.share-btn');

    shareBtns.forEach(btn => {
        // Criar e adicionar opções de compartilhamento
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
                const platform = link.classList[1];
                const url = btn.closest('.link-container').querySelector('.link').href;
                const text = "Check out this link: ";
                const shareUrl = {
                    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
                    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
                    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`
                }[platform];

                window.open(shareUrl, '_blank', 'width=600,height=400');
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

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return <div>{/* Your existing JSX content goes here */}</div>;
};

export default Share;
