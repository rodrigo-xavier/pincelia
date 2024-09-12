import { useEffect } from 'react';

const Replace = () => {
  useEffect(() => {
    const elements = [
      {
        id: 'profile-name',
        text: import.meta.env.VITE_PROFILE_NAME_SECRET || 'Default Secret',
      },
      {
        id: 'profile-description',
        text: import.meta.env.VITE_PROFILE_DESCRIPTION_VARIABLE || 'Default Variable',
      },
      {
        id: 'buy-a-image',
        text: import.meta.env.VITE_BUY_A_IMAGE_DESCRIPTION_VARIABLE || 'Default Variable',
        link: import.meta.env.VITE_BUY_A_IMAGE_SECRET || '_blank',
      },
      {
        id: 'buy-a-package',
        text: import.meta.env.VITE_BUY_A_PACKAGE_DESCRIPTION_VARIABLE || 'Default Variable',
        link: import.meta.env.VITE_BUY_A_PACKAGE_SECRET || '_blank',
      },
      {
        id: 'buy-a-course',
        text: import.meta.env.VITE_BUY_A_COURSE_DESCRIPTION_VARIABLE || 'Default Variable',
        link: import.meta.env.VITE_BUY_A_COURSE_SECRET || '_blank',
      },
      {
        id: 'sponsorship',
        text: import.meta.env.VITE_SPONSORSHIP_CONTACT_DESCRIPTION_VARIABLE || 'Default Variable',
        link: import.meta.env.VITE_SPONSORSHIP_CONTACT_SECRET || '_blank',
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
      },
    ];

    elements.forEach(({ id, text, link }) => {
      const element = document.getElementById(id);
      if (element) {
        if (text) element.textContent = text;
        if (link) element.href = link;
      }
    });
  }, []);

  return null;
};

export default Replace;
