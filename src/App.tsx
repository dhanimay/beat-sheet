import { Sheets } from 'components/sheets';
import './App.css';
import { Sheet } from './components/sheet';
import { isUUID } from 'utils';

function App() {
  const { pathname } = window.location;
  const paths = pathname.split('/').filter(Boolean);
  const sheetId = paths.at(0);
  return (<>
    {isUUID(sheetId) ?
      < Sheet />
      : <Sheets />
    }
  </>
  );
}

export default App
