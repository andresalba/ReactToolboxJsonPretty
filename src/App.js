import mock from './MOCK_DATA.json';
import './App.css';
import JSONPretty from 'react-json-pretty';

//MOCK_DATA.json source: https://www.mockaroo.com/
//https://www.npmjs.com/package/react-json-pretty

function App() {

  return (
    <div className="App">
      <JSONPretty id="json-pretty" data={mock}></JSONPretty>
    </div>
  );
}

export default App;
