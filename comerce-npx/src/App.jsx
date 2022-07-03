import './App.css';

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
{count}
    <p>mayra</p>
    <img src="logo" alt="bhdknjsxm"/> 

    </div> 
  );
}

export default App;
