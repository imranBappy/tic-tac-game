import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import './App.css';

import Game from "./components/Game";

function App() {
  const handle = useFullScreenHandle();

  return (
    <FullScreen handle={handle}>

      <div className="App">
        <Game handleScreen={handle} />
      </div>
    </FullScreen>
  );
}

export default App;
