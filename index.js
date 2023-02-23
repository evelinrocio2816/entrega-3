

//FORMULARIO...
/*let miFormulario=document.getElementById("Formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario (e){
    e.preventDefault();
    console.log("formulario Enviado");
} ;*/

let container= document.getElementById("container");
let parrafo1 =document.getElementById("parrafo1");
//console.log(div.innerHTML);
//console.log(parrafo1.innerHTML)

//Modifico el nodo de la seccion/catalogo HTML

const div =document.getElementById("Productos");
Productos.innerHTML = `
                        <p id="parrafo1">¿QUE DESEA COMPRAR?</p>
                                 <ul>
                                 <li class="bebidas">Fernet Branca</li>
                                 <li class="bebidas">Champagne </li>
                                 <li class="bebidas">Coca-Cola</li>
                                 <input id="btn3" type="text" value="Carrito"/> 
                                 </ul>

                                 <hr>      `;
                                 

 /*const Bebidas=[
    { id:1, nombre:'fernet',precio:1750},
    {id:2, nombre:'champagne',precio:750},
    {id:3, nombre: 'Coca-Cola', precio:600},
];
                                 
const guardarLocal=(clave, valor)=>{localStorage.setItem(clave,valor)};
for(const Bebidas of Bebidas){
   // guardarLocal(Bebida.id, JSON.stringify(Bebidas));
   guardarLocal("lista de productos",JSON.stringify(Bebidas));

}*/
const Bebidas=[
    { id:1, nombre:'fernet',precio:1750},
    {id:2, nombre:'champagne',precio:750},
    {id:3, nombre: 'Coca-Cola', precio:600},
];

for(const Bebida of Bebidas){
    let contenedor= document.createElement('div');
    contenedor.innerHTML =`
                        <img class="card" src="/img/CHAMPAGNE-FEDERICO-DE-ALVEAR-EXTRA-BRUT-750ML_317d75_21199.webp"   <br>
                       <h3> ID: ${Bebida.id} </h3>
                       <p> Bebida: ${Bebida.nombre}</p>
                      <b> $ ${Bebida.precio} </b>   <br>
                      <input id="btn4": type="text" value="Agregar Al Carrito" />   <br>
                      <hr> `;
     
    document.body.appendChild(contenedor);
    } 
    for ( const Bebida of Bebidas){
    let contenedor= document.createElement('div');
    contenedor.innerHTML =` 
    
                       <img class="card" src="../img/be70887_2.jpg" alt=""> <br>
                        
                       <h3> ID: ${Bebida.id} </h3>
                       <p> Bebida: ${Bebida.nombre}</p>
                      <b> $ ${Bebida.precio} </b>   <br>
                      <input id="btn4": type="text" value="Agregar Al Carrito" />   <br>
                      <hr> `;
    
    document.body.appendChild(contenedor); 
    }
    for ( const Bebida of Bebidas){
        let contenedor= document.createElement('div');
        contenedor.innerHTML =` 
        
                          <img class="card" src="../img/Bouteille_de_Coca-Cola_d'un_litre_cinq_001.jpg" alt="Coca-Cola"> <br>
                            
                           <h3> ID: ${Bebida.id} </h3>
                           <p> Bebida: ${Bebida.nombre}</p>
                          <b> $ ${Bebida.precio} </b>   <br>
                          <input id="btn4": type="text" value="Agregar Al Carrito" />   <br>
                          <hr> `;
        
        document.body.appendChild(contenedor); 
        }
   

const btn4=document.getElementById("btn3");
console.log(btn4);

btn4.addEventListener('keyup',()=>{
    console.log('keyup');
});
btn4.addEventListener('keydown',()=>{
    console.log("keydown");
});



// declaracion : Funciones del carrito
const mostrarCatalogo=(Carrito, Productos)=>{
    let mensaje=`Productos: 
                  seleccione el codigo que desea para agregar al carrito`;
                  Productos.forEach((el,index)=>{
                    mensaje += `${index +1} - ${el.nombre}- ${el.precio} `;

                  });
                  let compra=parseInt(prompt(mensaje));
                  let cantidad = parseInt(prompt("cantidad"));
                  for(let i=0; i< cantidad;i++){
                    Carrito.push(Bebidas[compra-1]);
                  }
};
const mostrarCarrito=(Carrito)=>{
    let mensaje= `Carrito:`;
    Carrito.forEach((el,index)=()=>{
        mensaje += `${index + 1}- ${el.nombre}- ${el.marca} $${el.precio}`;
    });
    alert(mensaje);
};
 const mostrarTotal=(total)=>{

    let total =0;
    Carrito.forEach((el)=>{
        total += el.precio;
    });
    alert("Su precio es de:" + total);
 }

//Carrito..
const Carrito=[];
class Productos{
    constructor(nombre, marca, precio){
        this.nombre=nombre;
        this.marca=marca;
        this.precio=precio;
    }
};
  const fernet= new Productos('fernet', '1882', 1750);
  const champagne=new Productos('champagne', 'Federico de alvear', 750);
  const gaseosa= new Productos('gaseosa','coca-cola', 700);

  Carrito=[fernet, champagne, gaseosa];
  console.log(fernet, champagne, gaseosa);
   const Productos=[fernet, champagne, gaseosa];



let compra =parseInt(prompt(`Bienvenido...\n ¿Que desea hacer?


                                   1- VER CATALOGO
                                   2- VER CARRITO
                                   3- VER TOTAL
                                   4- SALIR;
    `));
    while (compra!== 4){
        switch(compra){
            case 1:
                mostrarCatalogo();
                break;
                case 2:
                    mostrarCarrito();
                    break;
                    case 3:
                        mostrarTotal();
                        break;
                        default:
                            break;
        }
        compra =parseInt(prompt(`¿Que desea hacer?


                                   1- VER CATALOGO
                                   2- VER CARRITO
                                   3- VER TOTAL
                                   4- SALIR;
    `));
    if(compra ==4){
        alert('HASTA LUEGO');
    }
    }