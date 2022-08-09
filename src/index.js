// 1) librarias
import React from 'react';
import ReactDOM  from 'react-dom/client';

// 2) referenciua al div con el id root
const el = document.getElementById('root');

// 3) indicar a  react tomar el control del elemento
const root = ReactDOM.createRoot(el);


// 4) crear componenete
function App() {
  return <h1>hola</h1>
}

// 5) mostrar el componente en pantalla
root.render(<App />);

