/** @jsx jsx */
import { ThemeProvider, useTheme } from 'emotion-theming'
import { Global, css, jsx } from '@emotion/core'
import appState from '../appState'
import Button from '../components/Button'
import SomeText from '../components/SomeText'
import theme from '../theme'
import global from '../global'
import GrandParent from '../components/GrandParent'
import Parent from '../components/Parent'
import TimerView from '../components/Timer'

function App() {
    setInterval(() => {
        appState.timer += 1
    }, 1000)
    return (
        // eslint-disable-next-line react/jsx-no-undef
        <React.Fragment>
            <Global styles={css`${global}`} />
            <ThemeProvider theme={theme}>
                <Button dark theme={theme}>Hello</Button>
                <Button theme={theme}>No me hello</Button>
                <SomeText>hello</SomeText>
                <GrandParent>
                    GrandParent
                    <Parent>
                        Parent
                    </Parent>
                </GrandParent>
                <TimerView appState={appState} />
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;
