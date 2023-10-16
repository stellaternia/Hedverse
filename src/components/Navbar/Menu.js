import { menuItemVariants, menuVariants } from "@/utils/motion";
import { AnimatePresence, motion } from "framer-motion";
import { A } from "../A";
import styles from "./Menu.module.css";
import { navLinks } from "../../../data/navData";

export const Menu = ({
  as: Component = "motion.div",
  expand,
  toggleExpand,
}) => {
  return (
    <AnimatePresence>
      {expand && (
        <motion.div
          initial="closed"
          animate="opened"
          exit="exit"
          variants={menuVariants}
          className={styles.container}
        >
          {navLinks.map(({ label, pathname, target }, index) => {
            return (
              <>
                <motion.div
                  key={index}
                  variants={menuItemVariants(index * 0.1)}
                  onClick={() => toggleExpand(false)}
                >
                  <A
                    className={styles.navlink}
                    link={pathname}
                    key={index}
                    nav={true}
                    target={target}
                    type="hamburger"
                  >
                    {label.toUpperCase()}
                  </A>
                </motion.div>
              </>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
