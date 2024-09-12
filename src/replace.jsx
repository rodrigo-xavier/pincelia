import { useEffect } from 'react';

const Replace = () => {
  useEffect(() => {
    const profileName = import.meta.env.VITE_PROFILE_NAME_SECRET;
    const profileDescription = import.meta.env.VITE_PROFILE_DESCRIPTION_VARIABLE;
    const buyAImageDescription = import.meta.env.VITE_BUY_A_IMAGE_DESCRIPTION_VARIABLE;
    const buyAPackageDescription = import.meta.env.VITE_BUY_A_PACKAGE_DESCRIPTION_VARIABLE;
    const buyACourseDescription = import.meta.env.VITE_BUY_A_COURSE_DESCRIPTION_VARIABLE;
    const sponsorshipContactDescription = import.meta.env.VITE_SPONSORSHIP_CONTACT_DESCRIPTION_VARIABLE;

    const profileNameElement = document.getElementById('profile-name');
    const profileDescriptionElement = document.getElementById('profile-description');
    const buyAImageDescriptionElement = document.getElementById('buy-a-image-description');
    const buyAPackageDescriptionElement = document.getElementById('buy-a-package-description');
    const buyACourseDescriptionElement = document.getElementById('buy-a-course-description');
    const sponsorshipDescriptionElement = document.getElementById('sponsorship-description');

    if (profileNameElement) profileNameElement.textContent = profileName || 'Default Secret';
    if (profileDescriptionElement) profileDescriptionElement.textContent = profileDescription || 'Default Variable';
    if (buyAImageDescriptionElement) buyAImageDescriptionElement.textContent = buyAImageDescription || 'Default Variable';
    if (buyAPackageDescriptionElement) buyAPackageDescriptionElement.textContent = buyAPackageDescription || 'Default Variable';
    if (buyACourseDescriptionElement) buyACourseDescriptionElement.textContent = buyACourseDescription || 'Default Variable';
    if (sponsorshipDescriptionElement) sponsorshipDescriptionElement.textContent = sponsorshipContactDescription || 'Default Variable';
  }, []);

  return null;
};

export default Replace;
