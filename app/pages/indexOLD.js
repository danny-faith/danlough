/** @jsx jsx */
import styled from '@emotion/styled'
import { global, jsx } from '@emotion/core'
import { ThemeProvider, useTheme } from 'emotion-theming'
import Button from '../components/Button'
import { Children } from 'react'

const StyledButton = styled(Button)`
    background-color: black;
`

const theme = {
    colors: {
      primary: 'hotpink'
    }
}

{/* <SomeText>some text</SomeText> */}

function SomeText (props) {
    const theme = useTheme()
    return (
        <div
            css={{ color: theme.colors.primary }}
            {...props}
        >
        HEllo
        </div>
    )
}

const Theme = (children) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
)

function HomePage() {
  return <div>Welcome to Next.js! <StyledButton /><Button /></div>
}

export default SomeText
