import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from './stores/UserStore';
import VacancyStore from './stores/VacancyStore';
import './index.css'
import ResumeStore from './stores/ResumeStore';



const root = ReactDOM.createRoot(document.getElementById('root'));
const store = new UserStore()
export const vacancyStore = new VacancyStore()
export const resumeStore = new ResumeStore()

export const Context = createContext({
  store, vacancyStore, resumeStore
})

root.render(
  <React.StrictMode>
    <Context.Provider value={{
      store, vacancyStore, resumeStore
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);

reportWebVitals();
export default store

