import './App.css';
import Mensaje from './Mensaje';

//Los componentes se crean fuera de otros componentes, no dentro de otros componentes, o pueden ser archivos diferentes
// const Mensaje = () => {
//   return <h1>Hola Mundo</h1>
// }


const Description = () => {
  return <p>Esta es la descripción del curso FullStack BootCamp</p>
}

const App = () => {
  return (
    <div className='App'>
      <Mensaje color="red" message="Estamos Trabajando" />
      <Mensaje color="blue" message="En un curso de Reac" />
      <Description />
    </div>
  )
}
// function App() {
//   // const a = 5;
//   // const b = 6;

//   return (
//     <div className="App">
//       <h1>Titulo de la app</h1>
//       <strong>Estamos trabajando en ello</strong>
//       <img src='' />
//       <div>
//         <p>El resultado es:</p>
//         {/* {a + b} */}
//       </div>
//     </div>
//   );
// }

export default App;
