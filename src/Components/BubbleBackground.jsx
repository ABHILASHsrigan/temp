import React, { useEffect } from "react";
import "./BubbleBackground.css";

const BubbleBackground = () => {
  useEffect(() => {
    const bubblesContainer = document.querySelector(".bubbles");

    for (let i = 0; i < 20; i++) {
      const bubble = document.createElement("span");
      const size = Math.random() * 40 + 10; // size of bubble
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${Math.random() * 10 + 5}s`;
      bubble.style.animationDelay = `${Math.random() * 5}s`;
      bubblesContainer.appendChild(bubble);
    }
  }, []);

  return <div className="bubbles"></div>;
};

export default BubbleBackground;
