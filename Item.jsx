import React, { useEffect, useState } from 'react'



import './Item.css';


let productos=[
   {id:"1", categoria:"remeras", name:"juan", price:"32", foto:"https://img.freepik.com/foto-gratis/camisetas-negras-espacio-copia_53876-102012.jpg?size=626&ext=jpg&ga=GA1.2.2125086594.1658025991"},
   {id:"2", categoria:"remeras", name:"pepe", price:"2", foto:"https://img.freepik.com/foto-gratis/camisetas-negras-espacio-copia_53876-102012.jpg?size=626&ext=jpg&ga=GA1.2.2125086594.1658025991"},
   {id:"3", categoria:"gorras", name:"julian", price:"21", foto:"https://img.freepik.com/psd-gratis/maqueta-vista-frontal-gorra-blanca_125540-1042.jpg?size=626&ext=jpg&ga=GA1.2.2125086594.1658025991"},
   {id:"4", categoria:"gorras", name:"mayra", price:"40", foto:"https://img.freepik.com/psd-gratis/maqueta-vista-frontal-gorra-blanca_125540-1042.jpg?size=626&ext=jpg&ga=GA1.2.2125086594.1658025991"},
   {id:"5", categoria:"calzado", name:"rocio", price:"320", foto:"https://img.freepik.com/foto-gratis/zapatos-moda-zapatillas_1203-7529.jpg?size=626&ext=jpg&ga=GA1.2.2125086594.1658025991"},
   {id:"6", categoria:"calzado", name:"wanda", price:"360", foto:"https://img.freepik.com/foto-gratis/zapatos-moda-zapatillas_1203-7529.jpg?size=626&ext=jpg&ga=GA1.2.2125086594.1658025991"}

];

const task =new Promise((resolve, recject)=>{//((resuelto, rechazado))
let condition=true;//FALSE=ERR TRUE=RESOLVE
  if(condition){
    setTimeout(()=>{
      resolve(productos)
      //resuelto("200 ok")
    }, 2000)


}else{
recject("400 not found")
}
})

//setTimeout(()=>{//acciones}, 1000 =un seg)


const Item = ({greeting}) => {
const[products, setProducts]=useState([])
const [loading, setLoading]= useState(true)
const[count, setCount] =useState()


const aumentar =()=>{
  setCount(<p>hola</p>)
  console.log(products)

}

useEffect(()=>{
  task
.then(respuesta=>{

 // throw new Error ("se rompio todo")//TODA LA PANTALLA ROTA
  //console.log(respuesta)//captura lo que te devuelve el resolve 
return respuesta
//  err=>console.log(err)
})
.catch(err =>console.log(err))//te muestra el error sin inabilitarte la pantalle x  throw new Error ("se rompio todo")
//catch captura lo rechazado y el error de codigo osea throw new Error ("se rompio todo")




.then(resp => setProducts(resp))
.finally(()=>setLoading(false))


 
}, [])

const handleBool=()=>{
setLoading(!loading)
}


 //
  
    {/* ItemListContainer PROMMESSSS
   <button onClick={handleBool}>cambiar estad0</button>
{/*NUEVO ARRAY
[<li>1</li>, <li>2</li>,<li>3</li>, <li>4</li> ]*/}
{/* {[1,2,3,4].map((nro, index)=> <li key={index}>{nro}</li>)} } }
{/*index= IDENTIFICADOR   1=0 2=1 3=2 4=5*/}
return (
<div className='ol'>
 {loading? <h2>cargando...</h2> 
 : 
 products.map(prod=>
<div
        key={prod.id}
        className="card">
          
       
          <div className='card-header'>
            <div className='headertext'>
            {`${prod.name} - ${prod.categoria}`}
            </div>
            </div>  
            <div className='card-body '>
              <img  src={prod.foto} alt="" className='fto'/>
         
            </div>
            <div className='card-footer'>
              <div className='detalle'>
              {count}
</div>
              <button onClick={aumentar} className='btn btn-outline-primary '>
                detale del producto
              </button>
            </div>
          </div>
  
    
          )
 }
  </div>
 )

}
export default Item