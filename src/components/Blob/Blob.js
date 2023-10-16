import React, { useState } from "react";

import Spline from "@splinetool/react-spline";

import styles from "./Blob.module.css";

import { useMobileSize } from "@/hooks/useMobileSize";

/**
 * Blob Component.
 * Renders a blob SVG animation using the '@splinetool/react-spline' library.
 *
 * @param {String} device - The device type ('desktop', 'mobile', etc.).
 * @param {String} className - The CSS class name for the component.
 * @param {Component} as - The HTML element type for the component.
 * @param {Object} rest - The remaining props to be passed to the component.
 * @returns {Component} The Blob component.
 */

export const Blob = ({
  device = "desktop",
  className,
  as: Component = "div",
  ...rest
}) => {
  const isMobileSize = useMobileSize();

  // console.log(isMobileSize);

  return (
    <Component className={styles.blob} z={1}>
      {/* https://prod.spline.design/wW0KvxCQ2buZDdji/scene.splinecode */}
      {/* https://prod.spline.design/MYdCFyAC5T06Rt9l/scene.splinecode */}
      {isMobileSize ? (
        // Larger Blob
        <Spline scene="https://prod.spline.design/9kewQxWiIaB0Zsew/scene.splinecode" />
      ) : (
        // Small Blob
        <Spline scene="https://prod.spline.design/9kewQxWiIaB0Zsew/scene.splinecode" />
      )}
    </Component>
  );
};
