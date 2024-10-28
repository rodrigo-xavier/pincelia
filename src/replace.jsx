import { useEffect } from 'react';

const Replace = () => {
  const numLinks = import.meta.env.VITE_NUMLINKS;

  useEffect(() => {
    const elements = [
      {
        id: 'title',
        text: import.meta.env.VITE_TITLE_SECRET || 'Secret',
      },
      {
        id: 'profile-name',
        text: import.meta.env.VITE_PROFILE_NAME_SECRET || 'Secret',
      },
      {
        id: 'profile-about',
        text: import.meta.env.VITE_PROFILE_DESCRIPTION_VARIABLE || 'Variable',
      },
      {
        id: 'buy-a-image',
        text: import.meta.env.VITE_BUY_A_IMAGE_DESCRIPTION_VARIABLE || 'Variable',
        link: import.meta.env.VITE_BUY_A_IMAGE_SECRET || '_blank',
      },
      {
        id: 'buy-a-package',
        text: import.meta.env.VITE_BUY_A_PACKAGE_DESCRIPTION_VARIABLE || 'Variable',
        link: import.meta.env.VITE_BUY_A_PACKAGE_SECRET || '_blank',
      },
      {
        id: 'buy-a-course',
        text: import.meta.env.VITE_BUY_A_COURSE_DESCRIPTION_VARIABLE || 'Variable',
        link: import.meta.env.VITE_BUY_A_COURSE_SECRET || '_blank',
      },
      {
        id: 'sponsorship',
        text: import.meta.env.VITE_SPONSORSHIP_CONTACT_DESCRIPTION_VARIABLE || 'Variable',
        link: import.meta.env.VITE_SPONSORSHIP_CONTACT_SECRET || '_blank',
      },
      {
        id: 'affiliate-tool',
        text: import.meta.env.VITE_AFFILIATE_TOOL_DESCRIPTION_VARIABLE || 'Variable',
        link: import.meta.env.VITE_AFFILIATE_TOOL_SECRET || '_blank',
      },
      {
        id: 'whatsapp',
        link: import.meta.env.VITE_BUY_A_IMAGE_SECRET || '_blank',
        title: import.meta.env.VITE_BUY_A_IMAGE_SECRET || '_blank',
      },
      {
        id: 'telegram',
        link: import.meta.env.VITE_TELEGRAM_SECRET || '_blank',
        title: import.meta.env.VITE_TELEGRAM_SECRET || '_blank',
      },
      {
        id: 'instagram',
        link: import.meta.env.VITE_INSTAGRAM_SECRET || '_blank',
        title: import.meta.env.VITE_INSTAGRAM_SECRET || '_blank',
      },
      {
        id: 'facebook',
        link: import.meta.env.VITE_FACEBOOK_SECRET || '_blank',
        title: import.meta.env.VITE_FACEBOOK_SECRET || '_blank',
      },
      {
        id: 'email',
        link: import.meta.env.VITE_EMAIL_SECRET || '_blank',
        title: import.meta.env.VITE_EMAIL_SECRET || '_blank',
      },
      {
        id: 'tiktok',
        link: import.meta.env.VITE_TIKTOK_SECRET || '_blank',
        title: import.meta.env.VITE_TIKTOK_SECRET || '_blank',
      }
    ];

    const imageUrls = {
      1: "./src/assets/img/instagram.png",
      2: "./src/assets/img/instagram.png",
      3: "./src/assets/img/instagram.png",
      4: "./src/assets/img/tik-tok.png",
      5: "./src/assets/img/tik-tok.png",
      6: "./src/assets/img/tik-tok.png",
    };

    for (let i = 1; i <= numLinks; i++) {
      elements.push({
        id: `link${i}`,
        text: import.meta.env[`VITE_LINK${i}_DESCRIPTION_VARIABLE`] || '_blank',
        link: import.meta.env[`VITE_LINK${i}_SECRET`] || 'Secret',
        image: imageUrls[i] || '_blank',
      });
    }

    elements.forEach(({ id, text, link, title, image }) => {
      const linkElement = document.getElementById(id);
      // const linkTitleElement = document.getElementById(id);
      const imageElement = document.getElementById(`${id}-image`);
      const descriptionElement = document.getElementById(`${id}-description`);

      if (linkElement && link) {
        linkElement.href = link;
      }

      if (linkElement && title) {
        linkElement.title = title;
      }

      if (imageElement && image) {
        imageElement.src = image;
      }

      if (descriptionElement && text) {
        descriptionElement.textContent = text;
      }
    });
  }, [numLinks]);

  return null;
};

export default Replace;
