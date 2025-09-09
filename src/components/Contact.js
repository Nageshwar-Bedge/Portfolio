import React from "react";
import { socialLinks } from "../data";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const openGmail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${socialLinks.gmail}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 px-4 text-center bg-gray-100">
      <h2 className="text-4xl font-bold mb-6">Connect with Me</h2>
      <div className="flex justify-center gap-6 text-4xl">
        <a 
          href={socialLinks.linkedin} 
          target="_blank" 
          rel="noreferrer" 
          className="text-blue-700"
        >
          <FaLinkedin />
        </a>
        <a 
          href={socialLinks.github} 
          target="_blank" 
          rel="noreferrer" 
          className="text-black"
        >
          <FaGithub />
        </a>
        <a 
          href={socialLinks.leetcode} 
          target="_blank" 
          rel="noreferrer" 
          className="text-orange-500"
        >
          <SiLeetcode />
        </a>
        <button
          onClick={openGmail}
          className="text-red-500 hover:text-red-700 transition text-4xl"
        >
          <FaEnvelope />
        </button>
      </div>
    </section>
  );
};

export default Contact;
