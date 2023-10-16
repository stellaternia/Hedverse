import React, { forwardRef } from 'react';

import { classes } from '../../utils/styles';
import styles from './Section.module.css';

/**
 * Section Component.
 * Renders a section using a specified HTML element type, with optional props for styling.
 *
 * @param {Component} as - The HTML element type for the section. Defaults to 'div'.
 * @param {ReactNode} children - The content to render inside the section.
 * @param {String} className - The CSS class name for the section.
 * @param {Boolean} fullscreen - Whether the section should take up the full viewport height.
 * @param {String} align - The vertical alignment of content inside the section. Options are 'auto', 'top', 'center', and 'bottom'.
 * @param {String} justify - The horizontal alignment of content inside the section. Options are 'auto', 'start', 'center', 'end', and 'space-between'.
 * @param {String} direction - The flex direction of content inside the section. Options are 'row' (default) and 'column'.
 * @returns {Component} The Section component.
 */

export const Section = forwardRef(
  (
    {
      as: Component = 'div',
      children,
      className,
      fullscreen,
      align = 'auto',
      justify = 'auto',
      direction,
      ...rest
    },
    ref
  ) => (
    <Component
      className={classes(styles.section, className)}
      data-fullscreen={fullscreen}
      data-direction={direction}
      data-align={align}
      data-justify={justify}
      ref={ref}
      {...rest}
    >
      {children}
    </Component>
  )
);

Section.displayName = 'Section';
