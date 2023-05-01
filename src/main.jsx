import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const kiiInfo = {
  name: "kii",
  age: 42,
};

const KiiContext = createContext(kiiInfo);

ReactDOM.createRoot(document.getElementById('root')).render(
  <KiiContext.Provider value={kiiInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </KiiContext.Provider>
);

export default KiiContext;
