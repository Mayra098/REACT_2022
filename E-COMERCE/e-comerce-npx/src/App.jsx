
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';


function App() {


  return (

    <>
   <NavBar></NavBar>
 
<div className='contenedor'>
   <ItemListContainer greeting="Bienvenidxs!"></ItemListContainer>
   </div>
   </>
  );
}

export default App;
