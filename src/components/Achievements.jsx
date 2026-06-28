import { useState } from "react";
import "./Achievements.css";

const achievements = [
  {
    num: "01",
    title: "Java Certification",
    desc: "Successfully completed Java (Basic) certification from Great Learning in 2025, strengthening core Java programming and OOP concepts.",
    bullets: [
      "Java Basics",
      "OOP Concepts",
      "Programming Logic"
    ]
  },

  {
    num: "02",
    title: "Figma Fusion Event",
    desc: "Actively participated in the Figma Fusion design event organized under Techno Planet (2025), focusing on UI/UX creativity and design thinking.",
    bullets: [
      "UI/UX Design",
      "Figma",
      "Creative Thinking"
    ]
  },

  {
    num: "03",
    title: "STEM ConnectHER Event",
    desc: "Participated in STEM ConnectHER organized by Future Skills Alliance and The Asia Foundation (2025), promoting innovation and technology awareness.",
    bullets: [
      "Innovation",
      "Collaboration",
      "Technology Exposure"
    ]
  },

  {
    num: "04",
    title: "Flutter Training",
    desc: "Completed Flutter (Beginner to Advanced) training from Infosys Springboard and gained practical knowledge of cross-platform mobile development.",
    bullets: [
      "Flutter",
      "Dart",
      "Mobile Development"
    ]
  },

  {
    num: "05",
    title: "Python & Data Analysis",
    desc: "Completed Python Programming and Data Analysis certifications from Kaggle, enhancing analytical and problem-solving skills.",
    bullets: [
      "Python",
      "Pandas",
      "Data Analysis"
    ]
  }
];

export default function Achievements() {
  const [open, setOpen] = useState(0);

  const toggle = (i) => {
    setOpen(open === i ? -1 : i);
  };

  return (
    <section className="achievements" id="achievements">
      <div className="achievements__inner">

        {/* Left Side */}
        <div className="achievements__left">
          <p className="section-eyebrow">ACHIEVEMENTS</p>

          <h2 className="section-title">
            Certifications &<br />
            Achievements
          </h2>

          <div className="achievement-card">
            <div className="circle"></div>
            <div className="circle small"></div>

            <div className="achievement-text">
              <h3>2025 Highlights</h3>
              <p>
                Certifications, competitions and technology events that
                strengthened my development and problem-solving skills.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="achievement-list">

          {achievements.map((item, i) => (
            <div
              key={item.num}
              className={`achievement-item ${
                open === i ? "achievement-item--open" : ""
              }`}
            >
              <button
                className="achievement-head"
                onClick={() => toggle(i)}
              >
                <span className="achievement-title">
                {item.title}
                </span>

                <div className="achievement-right">
                  <span className="achievement-num">
                    {item.num}
                  </span>

                  <span className="achievement-toggle">
                    {open === i ? "−" : "+"}
                  </span>
                </div>
              </button>

              {open === i && (
                <div className="achievement-body">
                  <p>{item.desc}</p>

                  <div className="achievement-tags">
                    {item.bullets.map((b) => (
                      <span key={b}>{b}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <a href="#contact" className="achievement-btn">
            Let's Connect
          </a>

        </div>

      </div>
    </section>
  );
}