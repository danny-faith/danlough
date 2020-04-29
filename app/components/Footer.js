import styled from '@emotion/styled'
import theme from '../theme'

const StyledFooter = styled.ul`
    bottom: ${theme.padding.base};
    display: flex;
    left: ${theme.padding.base};
    margin: 0;
    padding: 0;
    position: fixed;

    li {
        list-style: none;

        a {
            padding: 0 ${theme.padding.base};
        }
    }
`

export default () => {
    return (
        <StyledFooter>
            <li><a>Facebook</a></li>
            <li><a>Instagram</a></li>
            <li><a>Twitter</a></li>
        </StyledFooter>
    )
}
