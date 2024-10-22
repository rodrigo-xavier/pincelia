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
        image: import.meta.env.VITE_PROFILE_IMAGE_URL_VARIABLE || '_blank',
      },
      {
        id: 'profile-about',
        text: import.meta.env.VITE_PROFILE_DESCRIPTION_VARIABLE || 'Variable',
      },
      {
        id: 'buy-a-image',
        text: import.meta.env.VITE_BUY_A_IMAGE_DESCRIPTION_VARIABLE || 'Variable',
        link: import.meta.env.VITE_BUY_A_IMAGE_SECRET || '_blank',
        image: import.meta.env.VITE_BUY_A_IMAGE_URL_VARIABLE || '_blank',
      },
      {
        id: 'buy-a-package',
        text: import.meta.env.VITE_BUY_A_PACKAGE_DESCRIPTION_VARIABLE || 'Variable',
        link: import.meta.env.VITE_BUY_A_PACKAGE_SECRET || '_blank',
        image: import.meta.env.VITE_BUY_A_PACKAGE_IMAGE_URL_VARIABLE || '_blank',
      },
      {
        id: 'buy-a-course',
        text: import.meta.env.VITE_BUY_A_COURSE_DESCRIPTION_VARIABLE || 'Variable',
        link: import.meta.env.VITE_BUY_A_COURSE_SECRET || '_blank',
        image: import.meta.env.VITE_BUY_A_COURSE_IMAGE_URL_VARIABLE || '_blank',
      },
      {
        id: 'sponsorship',
        text: import.meta.env.VITE_SPONSORSHIP_CONTACT_DESCRIPTION_VARIABLE || 'Variable',
        link: import.meta.env.VITE_SPONSORSHIP_CONTACT_SECRET || '_blank',
        image: import.meta.env.VITE_SPONSORSHIP_IMAGE_URL_VARIABLE || '_blank',
      },
      {
        id: 'affiliate-tool',
        text: import.meta.env.VITE_AFFILIATE_TOOL_DESCRIPTION_VARIABLE || 'Variable',
        link: import.meta.env.VITE_AFFILIATE_TOOL_SECRET || '_blank',
        image: import.meta.env.VITE_AFFILIATE_TOOL_IMAGE_URL_VARIABLE || '_blank',
      },
      {
        id: 'whatsapp',
        link: import.meta.env.VITE_BUY_A_IMAGE_SECRET || '_blank',
      },
      {
        id: 'telegram',
        link: import.meta.env.VITE_TELEGRAM_SECRET || '_blank',
      },
      {
        id: 'instagram',
        link: import.meta.env.VITE_INSTAGRAM_SECRET || '_blank',
      },
      {
        id: 'facebook',
        link: import.meta.env.VITE_FACEBOOK_SECRET || '_blank',
      },
      {
        id: 'email',
        link: import.meta.env.VITE_SPONSORSHIP_CONTACT_SECRET || '_blank',
      },
      {
        id: 'tiktok',
        link: import.meta.env.VITE_TIKTOK_SECRET || '_blank',
      }
    ];

    for (let i = 1; i <= numLinks; i++) {
      elements.push({
        id: `link${i}`,
        text: import.meta.env[`VITE_LINK${i}_DESCRIPTION_VARIABLE`] || '_blank',
        link: import.meta.env[`VITE_LINK${i}_SECRET`] || 'Secret',
        image: import.meta.env[`VITE_LINK${i}_IMAGE_URL_VARIABLE`] || '_blank',
      });
    }

    elements.forEach(({ id, text, link, image }) => {
      const linkElement = document.getElementById(id);
      const imageElement = document.getElementById(`${id}-image`);
      const descriptionElement = document.getElementById(`${id}-description`);

      if (linkElement && link) {
        linkElement.href = link;
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
