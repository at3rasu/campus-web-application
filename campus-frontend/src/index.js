import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from './stores/UserStore';
import VacancyStore from './stores/VacancyStore';
import './index.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
const store = new UserStore()
export const vacancyStore = new VacancyStore()

export const Context = createContext({
  store, vacancyStore
})

root.render(
  <React.StrictMode>
    <Context.Provider value={{
      store, vacancyStore
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);

reportWebVitals();
export default store

