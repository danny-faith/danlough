import styled from '@emotion/styled'
import theme from '../css/theme'

const StyledUtilities = styled.ul`
    display: flex;
    justify-content: flex-end;
    width: 15vw;

    li {
        list-style: none;

        a {
            color: ${theme.colors.primary};
            font-size: 1.1rem;
            font-weight: 700;
            margin: 0 10px;
            padding: 10px;
            text-decoration: none;
        }
    }
`

export default () => {
    return (
        <StyledUtilities>
            {/* <li><a><i className="fas fa-shopping-cart"></i></a></li> */}
            <li><a>Search</a></li>
            <li><a>Cart</a></li>
        </StyledUtilities>
    )
}
