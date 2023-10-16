import { staggerContainer, textVariant } from '@/utils/motion';

import styles from './Card.module.css';

import { Container } from '../Container';
import { Heading } from '../Heading';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { classes } from '@/utils/styles';

/**
 * Card Component.
 * Renders a card with a title and a list of items.
 *
 * @param {String} title - The title for the card.
 * @param {Array} items - The list of items to be displayed in the card.
 * @param {String} className - The CSS class name for the component.
 * @returns {Component} The Card component.
 */

export const Card = ({ title = '', items = [], className }) => {
  return (
    <Container className={styles.card} direction="column" align="center">
      <Heading level={5} weight="Bold" variants={textVariant(0.3)}>
        {title}
      </Heading>
      <CardList items={items} />
    </Container>
  );
};

export const CardList = ({ items, className }) => {
  return (
    <Container
      className={classes(styles.items, className)}
      direction={'column'}
      align="center"
    >
      {!!items?.length &&
        items?.map((item, index) => (
          <CardItem
            key={index}
            icon={item}
            variants={textVariant(0.1 + index / 10)}
          >
            {item}
          </CardItem>
        ))}
    </Container>
  );
};

export const CardItem = ({
  icon,
  children,
  justify = 'center',
  space = 'l',
  gap = 's',
  scale = 'true',
  type = 'text',
  variants,
  className,
  ...rest
}) => {
  return (
    <Container
      className={classes(styles.item, className)}
      variants={variants}
      justify={justify}
      data-space={space}
      data-gap={gap}
      data-scale={scale}
      {...rest}
    >
      <Icon className={styles.icon} icon={icon} type={type} />
      <Text className={styles.text} size="m">
        {children}
      </Text>
    </Container>
  );
};
