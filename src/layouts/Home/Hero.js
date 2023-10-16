import React, { memo } from "react";

import { classes } from "../../utils/styles";
import styles from "./Hero.module.css";

import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";
import { Section } from "../../components/Section";
import { Blob } from "@/components/Blob";

import { textVariant } from "../../utils/motion";

export const Hero = memo(({ sectionRef }) => {
  return (
    <Section
      className={classes(styles.section)}
      fullscreen={true}
      align={"center"}
      justify={"center"}
      ref={sectionRef}
    >
      <Intro />
      <div className={styles.layer}></div>
      <Blob />
    </Section>
  );
});

export const Intro = () => {
  return (
    <Container
      className={classes(styles.intro)}
      direction="column"
      z={2}
      animate="show"
    >
      <Heading
        level={1}
        className={styles.title1}
        align="center"
        weight="medium"
        variants={textVariant(0.2)}
      >
        HEDVERSE
      </Heading>

      <Text
        size="m"
        weight="regular"
        align="center"
        variants={textVariant(0)}
        className={styles.description}
      >
        Pioneering the next generation of AI-powered apps. Where innovation
        meets intelligence, and your digital experience is redefined.
      </Text>
    </Container>
  );
};

Hero.displayName = "Hero";
