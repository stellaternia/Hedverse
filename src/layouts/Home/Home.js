import React, { useEffect, useRef, useState } from "react";

import styles from "./Home.module.css";

import { Hero } from "./Hero";
import { Meta } from "@/components/Meta";

const title = "Social media company";
const description =
  "Pioneering the next generation of AI-powered apps. Where innovation meets intelligence, and your digital experience is redefined.";

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);

  const hero = useRef();

  useEffect(() => {
    const sections = [hero];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections((prevSections) => [...prevSections, section]);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", thershold: 0.1 }
    );

    sections.forEach((section) => {
      sectionObserver.observe(section.current);
    });

    return () => {
      sectionObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.section}>
      <Meta title={title} description={description} />
      <Hero
        sectionRef={hero}
        visible={visibleSections.includes(hero.current)}
      />
      {/* <Footer /> */}
    </div>
  );
};
