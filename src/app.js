import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import teal from 'material-ui/colors/teal.js'
import * as model from './data.js';
import EnhancedTable from './components/EnhancedTable/enhancedTable.js';

const theme = createMuiTheme({
  palette: createPalette({
    type: 'light',
    accent: {
      ...teal,
      A600: '#00897B',
      A700: '#00796B',
      A800: '#00695C'
    }
  }),
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <EnhancedTable model = {model} title = 'MarkJS CMS v1.0'/>
      </div>
    </MuiThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
