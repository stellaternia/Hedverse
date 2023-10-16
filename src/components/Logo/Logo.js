import Link from "next/link";
import { Container } from "../Container";
import { Heading } from "../Heading";

import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <Container align="center" className={styles.logo}>
      <Link className={styles.text} href="/">
        <svg
          width="24"
          height="24"
          viewBox="0 0 56 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.0935 0L0.986784 23.9814C0.199728 25.3194 -0.1938 25.9884 0.0941874 26.492C0.382175 26.9955 1.15833 26.9955 2.71065 26.9955H27.1301C27.3658 26.9955 27.4837 26.9955 27.5569 27.0687C27.6301 27.1419 27.6301 27.2598 27.6301 27.4955V54.9965C27.6301 55.7359 27.6301 56.1056 27.8144 56.1558C27.9988 56.2059 28.1862 55.8873 28.5611 55.25L54.2735 11.5389C55.0605 10.2009 55.4541 9.53193 55.1661 9.02841C54.8781 8.52489 54.1019 8.52489 52.5496 8.52489H28.1301C27.8944 8.52489 27.7766 8.52489 27.7034 8.45166C27.6301 8.37844 27.6301 8.26059 27.6301 8.02489V0H15.0935Z"
            fill="#1F062F"
          />
        </svg>
      </Link>
    </Container>
  );
};
