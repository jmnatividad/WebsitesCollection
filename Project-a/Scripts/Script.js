var bouquetData = [
    { name: 'bouquetData 1', price: '$10', description: '3pcs Rose with aster and wraped in korean wrapper', image: '../Project-a/Images/Bouquet/3pcsRedRosePinkPolkadots-removebg-preview.png' },
    { name: 'bouquetData 2', price: '$15', description: '3pcs Rose with aster and wraped in korean wrapper', image: '../Project-a/Images/Bouquet/3pcsRedRosePinkPolkadots-removebg-preview.png' },
    { name: 'bouquetData 3', price: '$20', description: '3pcs Rose with aster and wraped in korean wrapper', image: '../Project-a/Images/PinkWhiteLogoWithName.png' },
    { name: 'bouquetData 4', price: '$25', description: '3pcs Rose with aster and wraped in korean wrapper', image: '../Project-a/Images/PinkWhiteLogoWithName.png' },
    { name: 'bouquetData 5', price: '$30', description: '3pcs Rose with aster and wraped in korean wrapper', image: '../Project-a/Images/PinkWhiteLogoWithName.png' },
    { name: 'bouquetData 6', price: '$35', description: '3pcs Rose with aster and wraped in korean wrapper', image: '../Project-a/Images/PinkWhiteLogoWithName.png' },
    { name: 'bouquetData 7', price: '$35', description: '3pcs Rose with aster and wraped in korean wrapper', image: '../Project-a/Images/PinkWhiteLogoWithName.png' },
 
    // Add more items as needed
];

var weddingData = [
    { name: 'weddingData 1', price: '$10', description: '3pcs Rose with aster and wraped in korean wrapper', image: '../Project-a/Images/Bouquet/3pcsRedRosePinkPolkadots-removebg-preview.png' },
    { name: 'weddingData 2', price: '$15', description: '3pcs Rose with aster and wraped in korean wrapper', image: '../Project-a/Images/PinkWhiteLogoWithName.png' },
    { name: 'weddingData 3', price: '$20', description: '3pcs Rose with aster and wraped in korean wrapper', image: '../Project-a/Images/PinkWhiteLogoWithName.png' },
    { name: 'weddingData 4', price: '$25', description: '3pcs Rose with aster and wraped in korean wrapper', image: '../Project-a/Images/PinkWhiteLogoWithName.png' },
    { name: 'weddingData 5', price: '$30', description: '3pcs Rose with aster and wraped in korean wrapper', image: '../Project-a/Images/PinkWhiteLogoWithName.png' },
    { name: 'weddingData 6', price: '$35', description: '3pcs Rose with aster and wraped in korean wrapper', image: '../Project-a/Images/PinkWhiteLogoWithName.png' },
    { name: 'weddingData 7', price: '$35', description: '3pcs Rose with aster and wraped in korean wrapper', image: '../Project-a/Images/PinkWhiteLogoWithName.png' },
    
    
    // Add more items as needed
];

var funeralData = [
    { name: 'funeralData 1', price: '$10', description: '3pcs Rose with aster and wraped in korean wrapper', image: '../Project-a/Images/PinkWhiteLogoWithName.png' },
    { name: 'funeralData 2', price: '$15', description: '3pcs Rose with aster and wraped in korean wrapper', image: '../Project-a/Images/PinkWhiteLogoWithName.png' },
    { name: 'funeralData 3', price: '$20', description: '3pcs Rose with aster and wraped in korean wrapper', image: '../Project-a/Images/PinkWhiteLogoWithName.png' },
    { name: 'funeralData 4', price: '$25', description: '3pcs Rose with aster and wraped in korean wrapper', image: '../Project-a/Images/PinkWhiteLogoWithName.png' },
    { name: 'funeralData 5', price: '$30', description: '3pcs Rose with aster and wraped in korean wrapper', image: '../Project-a/Images/PinkWhiteLogoWithName.png' },
    { name: 'funeralData 6', price: '$35', description: '3pcs Rose with aster and wraped in korean wrapper', image: '../Project-a/Images/PinkWhiteLogoWithName.png' },
 

    // Add more items as needed
];  

fetch('../Project-a/Scripts/Scripts.js')
  .then(response => response.json())
  .then(data => {
    // Work with the JSON data here
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem fetching the JSON file:', error);
  });


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
            imgDiv.innerHTML = `<img src="${item.image}" alt="Product logo" width="60%" height="60%">`;
    
            const detailsDiv = document.createElement('div');
            detailsDiv.className = 'Prod_Details';
    
            const nameDiv = document.createElement('div');
            nameDiv.className = 'Prod_Name';
            nameDiv.textContent = item.name;
    
            const priceDiv = document.createElement('div');
            priceDiv.className = 'Prod_Price';
            priceDiv.textContent = item.price;
    
            const descriptionDiv = document.createElement('div');
            descriptionDiv.className = 'Prod_Description';
            descriptionDiv.textContent = item.description;
    
            detailsDiv.appendChild(nameDiv);
            detailsDiv.appendChild(priceDiv);
    
            li.appendChild(imgDiv);
            li.appendChild(detailsDiv);
            li.appendChild(descriptionDiv);
    
            targetElement.appendChild(li);
        });
    }
    

      populateProductList(bouquetData, 'BouquetProd');
      populateProductList(weddingData, 'WeddingProd');
      populateProductList(funeralData, 'FuneralProd');


      var products = document.getElementsByClassName("Prod");
      var overlays = document.getElementsByClassName("Overlay-Item");
      
      // Function to prevent default scroll behavior
      function preventDefault(event) {
          event.preventDefault();
      }
      
      // Function to disable scrolling
      function disableScroll() {
          document.body.style.overflow = 'hidden'; // Disable scrolling on the body element
          document.addEventListener('touchmove', preventDefault, { passive: false }); // Prevent touch events that cause scrolling
          document.addEventListener('wheel', preventDefault, { passive: false }); // Prevent mouse wheel events that cause scrolling
      }
      
      // Function to enable scrolling
      function enableScroll() {
          document.body.style.overflow = ''; // Enable scrolling on the body element
          document.removeEventListener('touchmove', preventDefault); // Remove touch event listener
          document.removeEventListener('wheel', preventDefault); // Remove wheel event listener
      }
      
      // Loop through each .Prod element and attach a click event listener
      for (var i = 0; i < products.length; i++) {
          products[i].addEventListener("click", function() {
              this.classList.toggle("enlarged");
              for (var j = 0; j < overlays.length; j++) {
                  overlays[j].classList.toggle("Hide-Overlay");
              }
              if (document.body.style.overflow === 'hidden') {
                  enableScroll(); // Enable scrolling if it was disabled
              } else {
                  disableScroll(); // Disable scrolling if it was enabled
              }
          });
      }
      
      
    
});



window.addEventListener('scroll', function() {
    var header = document.querySelector('.Header');
    header.classList.toggle('sticky', window.scrollY > 0);
});







