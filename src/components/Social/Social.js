import { classes } from '@/utils/styles';
import Link from 'next/link';
import { social } from '../../../data/socialData';
import { Container } from '../Container';
import { Heading } from '../Heading';
import { Icon } from '../Icon';
import styles from './Social.module.css';

/**
 * Social Component.
 * Renders social media icons with links to profiles.
 *
 * @param {Number} level - The heading level for the icons. (optional)
 * @param {String} className - The CSS class name for the component. (optional)
 * @param {Boolean} roundedIcon - Whether to render rounded icons. (optional)
 * @returns {Component} The Social component.
 */

export const Social = ({ level, className, roundedIcon = false }) => {
  return (
    <Container className={classes(styles.container, className)}>
      {social.map((item, index) => {
        return (
          <Link href={item.link} target={item.target} key={item.label || index}>
            {roundedIcon ? (
              <Container
                className={styles.social}
                align="center"
                justify="center"
              >
                <Icon icon={item.label} className={styles.icon} />
              </Container>
            ) : (
              <Heading className={styles.heading} level={level} secondary>
                <Icon icon={item.label} className={styles.icon} />
              </Heading>
            )}
          </Link>
        );
      })}
    </Container>
  );
};
