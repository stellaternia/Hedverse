import React from "react";

import styles from "./A.module.css";
import { classes } from "@/utils/styles";

import Link from "next/link";
import { useRouter } from "next/router";

import { Icon } from "../Icon";
import { Container } from "../Container";

/**
 * A component for rendering hyperlinks or navigation links with optional icons.
 * Uses Next.js Link and the 'react-icons' library.
 *
 * @param {Object} props - The component props.
 * @param {Boolean} [props.nav=false] - Whether the link is for navigation purposes.
 * @param {String} [props.className] - The CSS class name for the component.
 * @param {React.ReactNode} [props.children] - The content to render inside the component.
 * @param {String} props.link - The URL to link to.
 * @param {Boolean} [props.secondary=false] - Whether the link should be styled as secondary text.
 * @param {IconType} [props.icon] - The name of the icon to display next to the link.
 * @param {String} [props.linkType=''] - The type of link, used as a data attribute.
 * @returns {React.ReactElement} The A component.
 */

export const A = ({
  nav = false,
  className,
  children,
  link,
  secondary,
  icon,
  type = "",
  ...rest
}) => {
  const router = useRouter();
  return (
    <>
      {nav ? (
        <Link
          href={link}
          passHref
          className={classes(
            router.pathname == link ? styles.active : styles.normal,
            className
          )}
          data-type={type}
          {...rest}
        >
          {children}
        </Link>
      ) : icon ? (
        <Container className={styles.container}>
          {icon ? <Icon icon={icon} type="link" /> : ""}
          <Link
            className={classes(styles.link, className)}
            href={link}
            data-secondary={secondary}
            {...rest}
          >
            {children}
          </Link>
        </Container>
      ) : (
        <Link
          className={classes(styles.link, className)}
          href={link}
          data-secondary={secondary}
          {...rest}
        >
          {children}
        </Link>
      )}
    </>
  );
};
