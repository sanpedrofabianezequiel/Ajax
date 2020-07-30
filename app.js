let menu = document.querySelector(".material-icons")
let drawer = document.querySelector("#drawer")
menu.addEventListener("click",function(e){  //para abrir el menu desplegable
    if (drawer.style.left) {
        drawer.style.left = ''
    }else{
        drawer.style.left = '0px'
    }
})

var xhr;    //Objeto Ajax

setTimeout(() => {
    var loader= document.querySelector('img');  //Selecciono la imagen
    if(loader.complete){   //Una vez que se cargo el GiF
        //console.log("Cargado")    //Chequeo si funciona
            //Una vez que termine de cargar el Gif hacemos un PEDIDO por Ajax al Home.html.
    
        ajax1("GET","home.html")

    }else{  //Si no termina de cargar tiene que decir por consola
        loader.addEventListener('load',function (e) { console.log("cargado")  })
    }
    /*xhr.addEventListener('readystatechange',function (e) { 
        console.log(xhr.readyState)
     })*/
}, 3000);
        function ajax1(metodo,url){
                xhr= new XMLHttpRequest

                xhr.open(metodo,url)
                xhr.onreadystatechange=callBack //Para insertar segun el estado en el HTML la info del servidro
                xhr.send(null)
        }
            //Mostrar el contendio del home.html obtenido del PEDIDO de AJAX en el Main
            function callBack(){
                if(xhr.readyState == 4 && xhr.status == 200){
                    //console.log("Funciono")
                        document.querySelector('main').innerHTML= xhr.response  //Traigo informacion del servidor
                }
            }
    
///////////////////////////////////////////////////////////
var ajax;     //Objeto Ajax
var links= document.querySelectorAll('a');
links.forEach(x =>  x.addEventListener('click',function (e) {
                        e.preventDefault();
                        ajaxs2("GET",e.target.href)

      })
)

        function ajaxs2(metodo, url){
                ajax= new XMLHttpRequest;

                ajax.open(metodo,url)   //La Url va a ser la pagina.html que corresponder al href(name)
                ajax.onreadystatechange= callback2
                ajax.send(null)
        }
            function callback2(){
                if(ajax.readyState== 4 && ajax.status == 200){
                        document.querySelector('main').innerHTML= ajax.response
                }
            }
