import { Container } from '../Container';

import { Text } from '../Text';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <Container className={styles.footer} align="center" justify="center">
      <Container>
        <Text align="center">© 2023 Nilax Seal. All Rights Reserved.</Text>
      </Container>
    </Container>
  );
};
