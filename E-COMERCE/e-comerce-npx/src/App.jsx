
import './App.css';
import Item from './components/itemlistcontainer/itemlist/item/Item';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './components/itemlistcontainer/itemlist/ItemList';




function App() {


  return (

    <>
   <NavBar></NavBar>

 
<div className='contenedor'>
   <ItemListContainer></ItemListContainer>
   </div>
   </>
  );
}

export default App;
