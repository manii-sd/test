import React from 'react';
import ReactDOM, {render} from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store/configureStore';

// import Home from './screens/Home';

 const store = configureStore()


render ( <Provider store={store}>
   <App />
   </Provider>,
   document.getElementById('root'))
//render(<Home />, document.getElementById('root'));
