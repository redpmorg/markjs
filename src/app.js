import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import * as myJSON from './data.js';
import MuiTable from './enhancedTable.js';

// console.log(myJSON)

function App() {
  return (
    <MuiThemeProvider>
      <div>
        <MuiTable data = {myJSON}/>
      </div>
    </MuiThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
