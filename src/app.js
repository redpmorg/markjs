import React from 'react';
import ReactDOM from 'react-dom';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import teal from 'material-ui/colors/teal.js'
import lime from 'material-ui/colors/lime.js'
import blue from 'material-ui/colors/blue.js'
import red from 'material-ui/colors/red.js'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import EnhancedTable from './components/EnhancedTable/enhancedTable.js';
import withMenu from './HOC/menu.js';
import * as Model from './data.js';


const theme = createMuiTheme({
  palette: createPalette({
    type: 'light',
    primary: {
      ...blue
    },
    warning: {
      ...lime
    },
    accent: {
      ...teal,
      A600: '#00897B',
      A700: '#00796B',
      A800: '#00695C'
    },
    error: {
      ...red
    }
  })
});

const App =
    <div>
      <MuiThemeProvider theme={theme}>
        <EnhancedTable
            tableGeneralProperties={Model.tableGeneralProperties}
            columnProperties={Model.columnProperties}
            model={Model.data}/>
      </MuiThemeProvider>
    </div>;

const AppWithMenu = withMenu(App);

ReactDOM.render(<AppWithMenu/>, document.getElementById('root'));
