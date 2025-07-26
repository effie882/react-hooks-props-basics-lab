const user = {
  name: "Effie",
  city: "Nairobi",
  bio: "I am a React developer!",
  color: "firebrick",
  links: {
    github: "https://github.com/effie",
    linkedin: "https://linkedin.com/in/effie"
  }
};

export default user;

export const name = user.name;
export const city = user.city;
export const bio = user.bio;
export const color = user.color;
export const github = user.links.github;
export const linkedin = user.links.linkedin;

