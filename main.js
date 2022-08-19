const menuEmail = document.querySelector(".navbar-email");

const desktopmenu = document.querySelector(".desktop-menu");

const menuHamburgerIcon = document.querySelector(".menu");

const mobilemenu = document.querySelector(".mobile-menu");

const mostrarMenuCarro = document.querySelector(".product-detail");

const carroMenuIcon = document.querySelector(".navbar-shopping-cart");

const divCard = document.querySelector(".cards-container");

const asideProductDetail = document.querySelector(".product-detail-dos");

const quitProductDetailIcon = document.querySelector(".product-detail-close");

/* */
menuEmail.addEventListener("click",intercambiarDesktopMenu);

menuHamburgerIcon.addEventListener("click",toggleHamburgerMenu);

carroMenuIcon.addEventListener("click",intercambiarMenuCarro);

quitProductDetailIcon.addEventListener("click",closeProductDetail);
/*        */
function intercambiarDesktopMenu(){
    desktopmenu.classList.toggle("inactive");
}

function toggleHamburgerMenu(){
    
    const IsCarroMenuClosed = mostrarMenuCarro.classList.contains("inactive");

    if(!IsCarroMenuClosed)
    {
          mostrarMenuCarro.classList.add("inactive");
       
    }
    asideProductDetail.classList.add("inactive");
     
    mobilemenu.classList.toggle("inactive");
    
}

function intercambiarMenuCarro()
{

 const IsHamburgerMenuClosed = mobilemenu.classList.contains("inactive");

 if(!IsHamburgerMenuClosed)
 {
       mobilemenu.classList.add("inactive");
       

 }
    asideProductDetail.classList.add("inactive");
    mostrarMenuCarro.classList.toggle("inactive");
    

}
        



function closeProductDetail()
{
    asideProductDetail.classList.add("inactive");
    
}

/* */

const productList = [];

productList.push({
    name: "Bike",
    price: "$" + 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "pc",
    price: "$" + 120,
    image: "https://i0.wp.com/www.periodismo.com/wp-content/subid/sobremesa.jpeg?fit=1600%2C1200&ssl=1",
});

productList.push({
    name: "car",
    price: "$" + 120,
    image: "https://phantom-marca.unidadeditorial.es/f1abb5712b6aa4e874a7b4270ae44064/resize/1320/f/jpg/assets/multimedia/imagenes/2022/03/05/16464560296466.jpg",
});

productList.push({
    name: "car",
    price: "$" + 120,
    image: "https://phantom-marca.unidadeditorial.es/f1abb5712b6aa4e874a7b4270ae44064/resize/1320/f/jpg/assets/multimedia/imagenes/2022/03/05/16464560296466.jpg",
});

productList.push({
    name: "car",
    price: "$" + 120,
    image: "https://phantom-marca.unidadeditorial.es/f1abb5712b6aa4e874a7b4270ae44064/resize/1320/f/jpg/assets/multimedia/imagenes/2022/03/05/16464560296466.jpg",
});

productList.push({
    name: "car",
    price: "$" + 120,
    image: "https://phantom-marca.unidadeditorial.es/f1abb5712b6aa4e874a7b4270ae44064/resize/1320/f/jpg/assets/multimedia/imagenes/2022/03/05/16464560296466.jpg",
});

productList.push({
    name: "car",
    price: "$" + 120,
    image: "https://phantom-marca.unidadeditorial.es/f1abb5712b6aa4e874a7b4270ae44064/resize/1320/f/jpg/assets/multimedia/imagenes/2022/03/05/16464560296466.jpg",
});


productList.push({
    name: "tractor",
    price: "$" + 150,
    image: "https://www.deere.com//assets/images/tractors/large-tractors/6000-tractor-series/tractor_6403_estudio_large_85607220e92288261c9e808c25ff4918769c795b.jpg",
});


 const showProductsOnScreen = (productList) => { //crea los productos en el menu
    
    productList.forEach(product =>{ //recorre cada elemento del arreglo
        const productCard= document.createElement('div');
        productCard.classList.add('product-card');

        productCard.addEventListener('click',()=>{ //evento de escucha
            openProductInfo(product); //llamo a la funcion

        })

        const image = document.createElement('img');
        image.src= product.image;
        
        const infoProduct = document.createElement('div');
        infoProduct.classList.add('product-info');
        
        const div = document.createElement('div');
        const infoPrice = document.createElement('p');
        infoPrice.innerHTML = '$'+ product.price;
        
        const infoName = document.createElement('p');
        infoName.innerHTML= product.name;
        const figure = document.createElement('figure');
        const figureImg = document.createElement('img');
        figureImg.src= "./icons/bt_add_to_cart.svg";
        
        
        //AGREGAR HTML
        div.appendChild(infoPrice);
        div.appendChild(infoName);
        figure.appendChild(figureImg);
        infoProduct.appendChild(div);
        infoProduct.appendChild(figure);
        productCard.appendChild(image);
        productCard.appendChild(infoProduct);
        divCard.appendChild(productCard);
    
        
    });
    
    const openProductInfo = (product)=>{ //muestra el aside con la info del producto seleccionado
        //const aside = document.querySelector('.product-detail-main');
   //     asideProductDetail.classList.remove('inactive');
          /*  productImg.setAttribute('src',);
            productPrice.textContent= ;
            productName.textContent= product.name;*/


            asideProductDetail.innerText = " ";
            quitProductDetailIcon.innerText = " ";
           asideProductDetail.classList.remove("inactive");
           mostrarMenuCarro.classList.add("inactive");
           mobilemenu.classList.add("inactive");


        const imgUrlIcon = document.createElement("img");
        imgUrlIcon.setAttribute("src","./icons/icon_close.png");
        const imgUrl = document.createElement("img");
        
        imgUrl.setAttribute("src",product.image);
        const divProductInfoDos = document.createElement("div");
        divProductInfoDos.classList.add("product-info-dos");
        const pPriceDos = document.createElement("p");
     pPriceDos.textContent = product.price;
    const pNameDos = document.createElement("p");
     pNameDos.textContent = product.name;
    const pDescripcion = document.createElement("p");
    pDescripcion.innerText = "With its practical position, this bike also fulfills";
    const buttonDos = document.createElement("button");
    buttonDos.classList.add("primary-button","add-to-cart-button");
    const imgIconButon = document.createElement("img");
    imgIconButon.setAttribute("src","./icons/bt_add_to_cart.svg");
    buttonDos.innerText ="Add to cart";

    buttonDos.appendChild(imgIconButon);
    divProductInfoDos.appendChild(pPriceDos);
    divProductInfoDos.appendChild(pNameDos);
    divProductInfoDos.appendChild(pDescripcion);
    divProductInfoDos.appendChild(buttonDos);
   

    quitProductDetailIcon.appendChild(imgUrlIcon);

    asideProductDetail.appendChild(quitProductDetailIcon);
    asideProductDetail.appendChild(imgUrl);
    asideProductDetail.appendChild(divProductInfoDos);
   
    
    


  }
 }

      

    showProductsOnScreen(productList);