import {
  Route,
  Routes,
  HashRouter as Router,
  Navigate
} from "react-router-dom";

import { ThemeProvider } from '@mui/material/styles';
import Scrollbar from "react-perfect-scrollbar";
import { Theme } from "./theme";

import { typographyStyles } from './styles/jss/utilities/_typography'
import { animationStyles } from './styles/jss/utilities/_animations'
import { borderStyles } from './styles/jss/utilities/_border'
import { commonStyles } from './styles/jss/utilities/_common'
import { colorStyles } from './styles/jss/utilities/_color'
import { landingStyles } from './styles/jss/utilities/_landing'
import { positioningStyles } from './styles/jss/utilities/_positionings'
import { shadowStyles } from './styles/jss/utilities/_shadows'
import { spacingStyles } from './styles/jss/utilities/_spacing'
import { variableStyles } from './styles/jss/_variables'

import "react-perfect-scrollbar/dist/css/styles.css";
import GlobalCss from "./styles/jss/GlobalCss";

import Landing2 from "./home/Landing2";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      {variableStyles()}
      {typographyStyles}
      {animationStyles}
      {borderStyles}
      {commonStyles}
      {colorStyles}
      {landingStyles}
      {positioningStyles}
      {shadowStyles}
      {spacingStyles}
      <GlobalCss>
        <Scrollbar
          className="h-full-screen scrollable-content"
          option={{ suppressScrollX: true }}
        >
          <Router basename="/">
            <Routes>
              <Route path="/landing2" element={<Landing2 />} />
              <Route path="/" element={<Navigate to="/landing2" />} />
              {/* <Route component={Error} /> */}
            </Routes>
          </Router>
        </Scrollbar>
      </GlobalCss>
    </ThemeProvider>
  );
}

export default App;
