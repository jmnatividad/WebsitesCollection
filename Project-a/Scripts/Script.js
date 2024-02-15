var bouquetData = [
    { name: 'bouquetData 1', price: '$10', image: 'Images/WhiteLogo.jpg' },
    { name: 'bouquetData 2', price: '$15', image: 'Images/WhiteLogo.jpg' },
    { name: 'bouquetData 3', price: '$20', image: 'Images/WhiteLogo.jpg' },
    { name: 'bouquetData 4', price: '$25', image: 'Images/WhiteLogo.jpg' },
    { name: 'bouquetData 5', price: '$30', image: 'Images/WhiteLogo.jpg' },
    { name: 'bouquetData 6', price: '$35', image: 'Images/WhiteLogo.jpg' },
    { name: 'bouquetData 7', price: '$35', image: 'Images/WhiteLogo.jpg' },
 
    // Add more items as needed
];

var weddingData = [
    { name: 'weddingData 1', price: '$10', image: 'Images/WhiteLogo.jpg' },
    { name: 'weddingData 2', price: '$15', image: 'Images/WhiteLogo.jpg' },
    { name: 'weddingData 3', price: '$20', image: 'Images/WhiteLogo.jpg' },
    { name: 'weddingData 4', price: '$25', image: 'Images/WhiteLogo.jpg' },
    { name: 'weddingData 5', price: '$30', image: 'Images/WhiteLogo.jpg' },
    { name: 'weddingData 6', price: '$35', image: 'Images/WhiteLogo.jpg' },
 
    
    
    // Add more items as needed
];

var funeralData = [
    { name: 'funeralData 1', price: '$10', image: 'Images/WhiteLogo.jpg' },
    { name: 'funeralData 2', price: '$15', image: 'Images/WhiteLogo.jpg' },
    { name: 'funeralData 3', price: '$20', image: 'Images/WhiteLogo.jpg' },
    { name: 'funeralData 4', price: '$25', image: 'Images/WhiteLogo.jpg' },
    { name: 'funeralData 5', price: '$30', image: 'Images/WhiteLogo.jpg' },
    { name: 'funeralData 6', price: '$35', image: 'Images/WhiteLogo.jpg' },
 

    // Add more items as needed
];  

$(document).ready(function() {

    
    var bouquetElement = document.getElementById("Bouquet");
    var bridalElement = document.getElementById("Bridal");
    var funeralElement = document.getElementById("Funeral");
    
    var BouquetProd = document.getElementById("BouquetProd");
    var WeddingProd = document.getElementById("WeddingProd");
    var FuneralProd = document.getElementById("FuneralProd");


    //to hide display
    function hideElement(element) {
        if (element) {
            element.style.display = "none";
        }
    }
    function Showelement(element) {
        if (element) {
            element.style.display = "inline-flex";
        }
    }



    bridalElement.classList.add("Highlighted");
    hideElement(WeddingProd);
    hideElement(FuneralProd);
   
    bouquetElement.addEventListener("click", function() {
        bouquetElement.classList.add("Highlighted");
        bridalElement.classList.remove("Highlighted");
        funeralElement.classList.remove("Highlighted");

        Showelement(BouquetProd)
        // for displaying and hiding the prod 
        hideElement(WeddingProd);
        hideElement(FuneralProd);
      
    });

    bridalElement.addEventListener("click", function() {
        bridalElement.classList.add("Highlighted");
        bouquetElement.classList.remove("Highlighted");
        funeralElement.classList.remove("Highlighted");

        Showelement(WeddingProd)
        // for displaying and hiding the prod 
        hideElement(BouquetProd);
        hideElement(FuneralProd);
       
    });

    funeralElement.addEventListener("click", function() {
        funeralElement.classList.add("Highlighted");
        bridalElement.classList.remove("Highlighted");
        bouquetElement.classList.remove("Highlighted");
        Showelement(FuneralProd)
        // for displaying and hiding the prod 
        hideElement(BouquetProd);
        hideElement(WeddingProd);
    });

    function populateProductList(products, targetElementId) {
        const targetElement = document.getElementById(targetElementId);
    
        if (!targetElement) {
          console.error(`Element with ID '${targetElementId}' not found.`);
          return;
        }
    
        products.forEach(item => {
          const li = document.createElement('li');
          li.className = 'Prod';
    
          const imgDiv = document.createElement('div');
          imgDiv.className = 'Prod_Img';
          imgDiv.innerHTML = `<img src="${item.image}" alt="Jeric Flowershop Logo">`;
    
          const nameDiv = document.createElement('div');
          nameDiv.textContent = item.name;
    
          const priceDiv = document.createElement('div');
          priceDiv.textContent = item.price;
    
          li.appendChild(imgDiv);
          li.appendChild(nameDiv);
          li.appendChild(priceDiv);
    
          targetElement.appendChild(li);
        });
      }

      populateProductList(bouquetData, 'BouquetProd');
      populateProductList(weddingData, 'WeddingProd');
      populateProductList(funeralData, 'FuneralProd');

});



window.addEventListener('scroll', function() {
    var header = document.querySelector('.Header');
    header.classList.toggle('sticky', window.scrollY > 0);
});






