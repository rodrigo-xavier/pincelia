import { useEffect } from 'react';

const Replace = () => {
  useEffect(() => {
    const secret = import.meta.env.VITE_PROFILE_NAME_SECRET;
    const variable = import.meta.env.VITE_PROFILE_NAME_VARIABLE;

    const secretElement = document.getElementById('profile-secret');
    const variableElement = document.getElementById('profile-variable');

    if (secretElement) secretElement.textContent = secret || 'Default Secret';
    if (variableElement) variableElement.textContent = variable || 'Default Variable';
  }, []);

  return null;
};

export default Replace;
