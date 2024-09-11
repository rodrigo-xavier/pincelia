const profileName = import.meta.env.PROFILE_NAME;
console.log('PROFILE NAME:', profileName);

document.getElementById('profile-name').textContent = profileName;
