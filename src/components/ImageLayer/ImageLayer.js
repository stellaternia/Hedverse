import { motion } from 'framer-motion';

import styles from './ImageLayer.module.css';

import {
  circleVariation,
  opacityVariants,
  rotateIconVariation,
  yearVariants,
} from '@/utils/motion';
import { Heading } from '../Heading';

import { Container } from '../Container';
import { Icon } from '../Icon';
import Link from 'next/link';

/**
 * ImageLayer Component.
 * Displays a layer with an year and an arrow icon linking to a given URL.
 *
 * @param {String} year - The year to be displayed.
 * @param {String} link - The URL the arrow icon should link to.
 * @param {Boolean} rounded - Whether the layer should have rounded corners.
 * @returns {Component} The ImageLayer component.
 */

const ImageLayer = ({ year, link, rounded }) => {
  return (
    <>
      <motion.div
        className={styles.layer}
        variants={opacityVariants}
        data-round={rounded}
      />

      <motion.div className={styles.year} variants={yearVariants}>
        <Heading level={4} weight="Bold" className={styles.text}>
          {year}
        </Heading>
      </motion.div>

      <motion.div className={styles.circle} variants={circleVariation}>
        <Link href={link}>
          <Heading
            className={styles.icon}
            level={3}
            variants={rotateIconVariation}
          >
            <Icon type="white" icon="arrowRight" className={styles.icon} />
          </Heading>
        </Link>
      </motion.div>
    </>
  );
};

export default ImageLayer;
