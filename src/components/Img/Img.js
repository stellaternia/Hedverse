import { useEffect } from 'react';
import Link from 'next/link';

import { classes } from '@/utils/styles';
import styles from './Img.module.css';

import { motion } from 'framer-motion';
import Image from 'next/image';

import placeholder from '../../assets/images/placeholder.png';

/**
 * Img Component.
 *
 * @param {Component} as - The HTML element type for the component.
 * @param {String} src - The image source URL.
 * @param {String} className - The CSS class name for the component.
 * @param {String} href - The URL for the link, if the image should be clickable.
 * @param {Object} variants - The animation variants for the motion component.
 * @param {Boolean} rounded - Whether the image should have rounded corners.
 * @param {String} placeholder - The URL for the placeholder image.
 * @returns {Component} The Image component.
 */

const IMAGE_WIDTH = 600;
const IMAGE_HEIGHT = 344.74;

export const Img = ({
  as,
  src,
  alt = '',
  className,
  href,
  variants = {},
  rounded = false,
  target = '_blank',
  width = IMAGE_WIDTH,
  height = IMAGE_HEIGHT,
  ...rest
}) => {
  const Component = as || motion.div;

  return (
    <>
      <Component
        variants={variants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={(classes(styles.container), className)}
        {...rest}
      >
        {href ? (
          <Link target={target} href={href} {...rest}>
            <Image
              blurDataURL={placeholder}
              placeholder={placeholder}
              className={styles.image}
              data-rounded={rounded}
              width={width}
              height={height}
              layout="responsive"
              src={src}
              alt={alt}
            ></Image>
          </Link>
        ) : (
          <Image
            blurDataURL={placeholder}
            placeholder={placeholder}
            className={styles.image}
            data-rounded={rounded}
            width={width}
            height={height}
            src={src}
            alt={alt}
          ></Image>
        )}
      </Component>
    </>
  );
};
