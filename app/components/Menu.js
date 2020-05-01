import Link from 'next/link';
import styled from '@emotion/styled'
import theme from '../theme'
import { darken } from 'polished'

const StyledMenu = styled.div`
    display: flex;
    flex-grow: 2;
    justify-content: center;
    padding: 30px;

    a {
        color: ${theme.colors.primary};
        font-size: 1.1rem;
        font-weight: 700;
        margin: 0 10px;
        padding: 10px;
        text-decoration: none;
    }
`

export default () => (
  <StyledMenu>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/recipes">
      <a>Recipes</a>
    </Link>
    <Link href="/products">
      <a>Products</a>
    </Link>
  </StyledMenu>
);
