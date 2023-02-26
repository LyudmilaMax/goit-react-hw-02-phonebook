import { Container } from './Layout.styled.js';

export const Layout = ({ children }) => {
  return (
    <Container>
      <main>{children}</main>
    </Container>
  );
};
