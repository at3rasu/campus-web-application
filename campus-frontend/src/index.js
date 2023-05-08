import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from './stores/UserStore';
import VacancyStore from './stores/VacancyStore';



const root = ReactDOM.createRoot(document.getElementById('root'));
const store = new UserStore()

export const Context = createContext({
  store, 
})

root.render(
  <React.StrictMode>
    <Context.Provider value={{
      store
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);

reportWebVitals();
export default store