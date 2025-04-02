
const   products={

    
     Pizza: {
             Cheese:{

                small: {
                    price:99
                },
                medium: {
                  price:150  
                },
                large: {
                    price:320  
                }

             },
             chicken:{
                small: {
                    price:99
                },
                medium: {
                  price:150  
                },
                large: {
                    price:320  
                }
             },
            corn: {
                small: {
                    price:99
                },
                medium: {
                  price:150  
                },
                large: {
                    price:320  
                }
            }

        },
    Burger: {

        size:{
            small:{
                price:39
            },
            medium:{
                price:69
            },
            large: {
                price:99
            }
        }
    }
    
}

//console.log(products['Pizza']['Cheese']['small']['price']);
var objlength=Object.keys(products).length;

var product_container=document.querySelector('#products');
product_div=product_container.innerHTML;
Object.keys(products).forEach(element => {
    product_div+="<div class='products' data-name='"+element+"'>"+element+"</div>"
    console.log(element)
});
product_container.innerHTML=product_div;

var allproducts=document.querySelectorAll('.products');


//onclick function on product click

allproducts.forEach( prod=>{
   
    prod.addEventListener('click',function(product){
        if(Object.keys(products[prod.getAttribute('data-name')]).length > 1 ){
            var modalbox=document.getElementById('modelbox');
             let product_div=modalbox.innerHTML;
            Object.keys(products[prod.getAttribute('data-name')]).forEach(key=>{
                product_div+="<div class='products' data-name='"+key+"'>"+key+"</div>"
                console.log(key)
            });
            modalbox.innerHTML=product_div;
        }

    })
    

} );