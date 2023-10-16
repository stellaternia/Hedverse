import { motion } from 'framer-motion';
import { staggerContainer, textVariant } from '@/utils/motion';

import { classes } from '@/utils/styles';

import { Icon } from '../Icon';
import { Text } from '../Text';

import styles from './List.module.css';

export const List = ({ items, className }) => {
  return (
    <motion.ul
      className={classes(styles.meta, className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {!!items?.length &&
        items?.map((item, index) => (
          <motion.li
            variants={textVariant(0.1 + index / 10)}
            className={styles.metaItem}
            key={item}
          >
            <Icon icon={item} />
            <Text secondary>{item}</Text>
          </motion.li>
        ))}
    </motion.ul>
  );
};
