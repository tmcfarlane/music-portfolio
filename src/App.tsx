import NavBar from './components/navbar';
import Landing from './components/landing';
import { Block } from 'baseui/block';

function App() { 
  return (
    <Block>
      <NavBar />
      <Block>
        <Landing />
      </Block>
    </Block>
  );
}

export default App;
