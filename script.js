"use strict"

for(let i = 0; i < 100; ++i) {
  let product = document.createElement("div");
  product.className = "product";
  
  let header = document.createElement("h3");
  header.innerText = `Product ${i}`;

  let disc = document.createElement("p");
  disc.innerText = ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                      Cum vitae accusantium inventore impedit repellat aperiam, 
                      temporibus cumque tenetur explicabo sit. Maxime, repellat. 
                      Minima vitae velit aut nobis sint perferendis quo?`;

  product.appendChild(header);
  product.appendChild(disc);

  document.body.appendChild(product);
}