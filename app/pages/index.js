/** @jsx jsx */
import { ThemeProvider, useTheme } from 'emotion-theming'
import { Global, css, jsx } from '@emotion/core'
import Button from '../components/Button'
import SomeText from '../components/SomeText'
import theme from '../theme'
import global from '../global'

function App() {
    return (
        // eslint-disable-next-line react/jsx-no-undef
        <React.Fragment>
            <Global styles={css`${global}`} />
            <ThemeProvider theme={theme}>
                <Button dark theme={theme}>Hello</Button>
                <Button theme={theme}>No me hello</Button>
                <SomeText>hello</SomeText>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;
