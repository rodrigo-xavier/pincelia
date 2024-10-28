function addSocialMedia() {
    const container = document.querySelectorAll('.links')[3];

    // Limpa o conteúdo existente para evitar duplicação
    container.innerHTML = '';

    function createLink(linkId) {
        const linkContainer = document.createElement('div');
        linkContainer.classList.add('link-container');

        const img = document.createElement('img');
        img.src = '_blank';
        img.alt = 'icon';
        img.classList.add('link-icon');
        img.id = `${linkId}-image`;

        const anchor = document.createElement('a');
        anchor.id = linkId;
        anchor.href = '_blank';
        anchor.classList.add('link');
        anchor.target = 'blank';

        const span = document.createElement('span');
        span.id = `${linkId}-description`;
        span.textContent = '_blank';

        const button = document.createElement('button');
        button.classList.add('share-btn');
        button.innerHTML = '<i class="fas fa-share-alt"></i>';

        // Monta a estrutura do link
        anchor.appendChild(span);
        linkContainer.appendChild(img);
        linkContainer.appendChild(anchor);
        linkContainer.appendChild(button);

        return linkContainer;
    }

    const numLinks = import.meta.env["VITE_NUMLINKS"];

    for (let i = 1; i <= numLinks; i++) {
        const linkElement = createLink(`link${i}`);
        container.appendChild(linkElement);
    }
}

const SocialMedia = () => {
    addSocialMedia();
};

export default SocialMedia;
