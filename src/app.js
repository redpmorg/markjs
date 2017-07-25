import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import * as model from './data.js';
import MuiTable from './components/EnhancedTable/enhancedTable.js';

function App() {
  return (
    <MuiThemeProvider>
      <div>
        <MuiTable model = {model} title = 'MarkJS CMS v1.0'/>
      </div>
    </MuiThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
