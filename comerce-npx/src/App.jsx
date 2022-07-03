import './App.css';
import ComponenteClase from './ComponenteClase';
import Formulario from './components/Formulario/Formulario';
import Titulo from './components/Titulo/Titulo';

function Name(props){
  console.log(props)
 return(
   <div>
     <h3> {props.caca} {props.nombre} {props.apellido} </h3>
     </div>

 )
}

//Name("fede") => <Name params="fede"/>

function App() {

// const numArray=[ 1,2,3,4,5];
// let seis=6
// const numArray2= [...numArray, seis]; //copia el contenido NO el array completo con []
// console.log(numArray2)


//   const condition =true;
// let result ="" 
//   if (condition){
//     result="correcto"
//   }else{
//     result ="incorrecto"
//   }

// //   console.log("result: " + result + "\n todo bien") //es lo mism
// console.log(`Èl resultado es: ${condition ? `correcto` : `incorrecto`}`)
//      //?=condicion 

let campo ="edad";
  const obj ={
    nombre: "mayra",
    apellido: "ramos",
    [campo]: 23,
  }

  const {nombre: name, altura=2}=obj //renombrando nombre
  console.log(name)
  console.log(`altura:${altura}`)//undefined si altura en const esta = a nada
  // console.log(obj)
  const count=0
  const objStyle={color:"pink"}
return (


  <div className='App' style={objStyle}>
    <ComponenteClase/>
{count}
    <p>mayra</p>
    <Formulario/>
    <img src="logo" alt="bhdknjsxm"/> 
<Titulo/>
<Name nombre="Mauyra" apellido="RAMOS" caca={10}/>

  </div> 
  );
}

export default App;
