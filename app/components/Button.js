import styled from '@emotion/styled'
import { darken } from 'polished'

const StyledButton = styled.button`
    background-color: ${(props) => props.dark ? darken(0.09, 'teal') : 'teal'};
    border: none;
    border-radius: 4px;
    box-shadow: 3px 3px 0px ${(props) => props.dark ? darken(0.15, 'teal') : 'teal'};
    color: ${(props) => props.theme.colors.primary};
    font-size: 24px;
    font-weight: bold;
    padding: 32px;

    &:hover {
        color: white;
        cursor: pointer;
    }
`


export default ({ dark, children }) => <StyledButton dark={dark}>{children}</StyledButton>
