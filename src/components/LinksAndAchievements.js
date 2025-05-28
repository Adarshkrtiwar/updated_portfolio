import React from "react";


const links = [
  {
    name: "LinkedIn Profile",
    url: "https://www.linkedin.com/in/adarsh-kr-tiwari-381002218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "GitHub Profile",
    url: "https://github.com/Adarshkrtiwar",
  },
  {
    name: "GitHub Portfolio",
    url: "https://github.com/Adarshkrtiwar/portfolio",
  },
];

const achievements = [
  "HACKERRANK: 5 STAR IN C++ AND C",
  "LEETCODE & GEEKSFORGEEKS: 450+ QUESTIONS SOLVED",
];

const LinksAndAchievements = () => {
  return (
    <section id="links-achievements" className="links-achievements-section">
      <div className="container">
        <h2 className="section-heading">Links & Achievements</h2>
        
        <div className="list-container">
          <h3 className="subheading">Achievements</h3>
          <ul>
            {achievements.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="list-container">
          <h3 className="subheading">Profiles</h3>
          <ul>
            {links.map(({ name, url }, index) => (
              <li key={index}>
                <a href={url} target="_blank" rel="noopener noreferrer" className="link">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LinksAndAchievements;
