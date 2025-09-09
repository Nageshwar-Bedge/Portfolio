import React from "react";

const GitHubStats = () => {
  const username = "Nageshwar-Bedge";
  return (
    <section className="py-20 px-4 text-center">
      <h2 className="text-4xl font-bold mb-8">GitHub Stats</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
        <img src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight`} alt="GitHub Stats" />
        <img src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight`} alt="GitHub Streak" />
      </div>
    </section>
  );
};

export default GitHubStats;
