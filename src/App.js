import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';


const App = () => {
  return (
    <div>
      <Provider store={store}>
      <Head/>
      <Body />
      </Provider>
    </div>
  );
}

// Head
// Body
//   Sidebar
//     Menuitems
//   MainContainer
//     Buttonlist
//     VideoContainer
//       VideoCard

export default App;
