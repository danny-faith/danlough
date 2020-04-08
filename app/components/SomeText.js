/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'

const StyleText = styled.p`
    border: 1px solid ${props => props.theme.colors.primary};
`
export default ({ children }) => {
    const theme = useTheme()
    return (
        <StyleText css={{ color: theme.colors.primary }}>
            {children}
        </StyleText>
    )
}
