import logo from './logo.svg';
import './App.css';

function App() {
  const codeString = '(num) => num + 1';
  const teststring = `Test this line <code>i</code> and keep going <code>${codeString}</code>.`;
  return <div dangerouslySetInnerHTML={{ __html: teststring }} />;
}

export default App;
