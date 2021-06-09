import { setStorage } from './packages/storage';
import AppRouter from './routes/Routes';

import './App.css';

function App() {
  setStorage(localStorage);

  return <AppRouter />;
}

export default App;
