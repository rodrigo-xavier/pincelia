// App.jsx
import { useEffect } from 'react';

const Replace = () => {
  useEffect(() => {
    const secret = import.meta.env.PROFILE_NAME_SECRET;
    const variable = import.meta.env.PROFILE_NAME_VARIABLE;

    const secretElement = document.getElementById('profile-secret');
    const variableElement = document.getElementById('profile-variable');

    if (secretElement) secretElement.textContent = secret;
    if (variableElement) variableElement.textContent = variable;
  }, []);

  return (
    <div>
      <p id="profile-secret">Loading secret...</p>
      <p id="profile-variable">Loading variable...</p>
    </div>
  );
};

export default Replace;
