import { useEffect } from 'react';
import instagramImageUrl from "./assets/img/instagram.png"
import tiktokImageUrl from "./assets/img/tik-tok.png"
import profile from "./assets/img/profile.png"
import buyAImage from "./assets/img/aplicativo-de-ia.png"
import buyAPackage from "./assets/img/aplicativo-de-ia.png"
import buyACourse from "./assets/img/curso-online.png"
import sponsorship from "./assets/img/patrocinio.png"
import affiliateImage from "./assets/img/edicao-de-imagem.png"
import affiliateAudio from "./assets/img/edicao-de-imagem.png"
import buyAMusic from "./assets/img/saxofone.png"
import buyAClip from "./assets/img/videoclipe.png"
import buyAAudio from "./assets/img/falando.png"

const Replace = () => {
  const numLinks = import.meta.env.VITE_NUMLINKS;

  const lang = window.location.pathname.split('/').pop();
  const selectedLang = lang === 'us' ? 'US' : 'PT';

  const getEnvVariable = (name) => {
    return import.meta.env[`${name}_${selectedLang}`] || import.meta.env[name];
  };

  useEffect(() => {
    const elements = [
      {
        id: 'title',
        text: getEnvVariable('VITE_TITLE_SECRET'),
      },
      {
        id: 'profile-name',
        text: getEnvVariable('VITE_PROFILE_NAME_SECRET'),
        image: profile,
      },
      {
        id: 'profile-about',
        text: getEnvVariable('VITE_PROFILE_DESCRIPTION_VARIABLE'),
      },
      {
        id: 'buy-a-image',
        text: getEnvVariable('VITE_BUY_A_IMAGE_DESCRIPTION_VARIABLE'),
        link: getEnvVariable('VITE_BUY_A_IMAGE_SECRET'),
        image: buyAImage,
      },
      {
        id: 'buy-a-audio',
        text: getEnvVariable('VITE_BUY_A_AUDIO_DESCRIPTION_VARIABLE'),
        link: getEnvVariable('VITE_BUY_A_AUDIO_SECRET'),
        image: buyAAudio,
      },
      {
        id: 'buy-a-music',
        text: getEnvVariable('VITE_BUY_A_MUSIC_DESCRIPTION_VARIABLE'),
        link: getEnvVariable('VITE_BUY_A_MUSIC_SECRET'),
        image: buyAMusic,
      },
      {
        id: 'buy-a-video-clip',
        text: getEnvVariable('VITE_BUY_A_VIDEO_CLIP_DESCRIPTION_VARIABLE'),
        link: getEnvVariable('VITE_BUY_A_VIDEO_CLIP_SECRET'),
        image: buyAClip,
      },
      {
        id: 'buy-a-package',
        text: getEnvVariable('VITE_BUY_A_PACKAGE_DESCRIPTION_VARIABLE'),
        link: getEnvVariable('VITE_BUY_A_PACKAGE_SECRET'),
        image: buyAPackage,
      },
      {
        id: 'buy-a-course1',
        text: getEnvVariable('VITE_BUY_A_COURSE1_DESCRIPTION_VARIABLE'),
        link: getEnvVariable('VITE_BUY_A_COURSE1_SECRET'),
        image: buyACourse,
      },
      {
        id: 'buy-a-course2',
        text: getEnvVariable('VITE_BUY_A_COURSE2_DESCRIPTION_VARIABLE'),
        link: getEnvVariable('VITE_BUY_A_COURSE2_SECRET'),
        image: buyACourse,
      },
      {
        id: 'sponsorship',
        text: getEnvVariable('VITE_SPONSORSHIP_CONTACT_DESCRIPTION_VARIABLE'),
        link: getEnvVariable('VITE_SPONSORSHIP_CONTACT_SECRET'),
        image: sponsorship,
      },
      {
        id: 'affiliate-image',
        text: getEnvVariable('VITE_AFFILIATE_IMAGE_DESCRIPTION_VARIABLE'),
        link: getEnvVariable('VITE_AFFILIATE_IMAGE_SECRET'),
        image: affiliateImage,
      },
      {
        id: 'affiliate-audio',
        text: getEnvVariable('VITE_AFFILIATE_AUDIO_DESCRIPTION_VARIABLE'),
        link: getEnvVariable('VITE_AFFILIATE_AUDIO_SECRET'),
        image: affiliateAudio,
      },
      {
        id: 'whatsapp',
        link: getEnvVariable('VITE_BUY_A_IMAGE_SECRET'),
        title: getEnvVariable('VITE_BUY_A_IMAGE_SECRET'),
      },
      {
        id: 'telegram',
        link: getEnvVariable('VITE_TELEGRAM_SECRET'),
        title: getEnvVariable('VITE_TELEGRAM_SECRET'),
      },
      {
        id: 'instagram',
        link: getEnvVariable('VITE_INSTAGRAM_SECRET'),
        title: getEnvVariable('VITE_INSTAGRAM_SECRET'),
      },
      {
        id: 'facebook',
        link: getEnvVariable('VITE_FACEBOOK_SECRET'),
        title: getEnvVariable('VITE_FACEBOOK_SECRET'),
      },
      {
        id: 'email',
        link: getEnvVariable('VITE_EMAIL_SECRET'),
        title: getEnvVariable('VITE_EMAIL_SECRET'),
      },
      {
        id: 'tiktok',
        link: getEnvVariable('VITE_TIKTOK_SECRET'),
        title: getEnvVariable('VITE_TIKTOK_SECRET'),
      }
    ];

    const imageUrls = {
      1: instagramImageUrl,
      2: instagramImageUrl,
      3: instagramImageUrl,
      4: tiktokImageUrl,
      5: tiktokImageUrl,
      6: tiktokImageUrl,
    };

    for (let i = 1; i <= numLinks; i++) {
      elements.push({
        id: `link${i}`,
        text: getEnvVariable(`VITE_LINK${i}_DESCRIPTION_VARIABLE`),
        link: getEnvVariable(`VITE_LINK${i}_SECRET`),
        image: imageUrls[i],
      });
    }

    elements.forEach(({ id, text, link, title, image }) => {
      const linkElement = document.getElementById(id);
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