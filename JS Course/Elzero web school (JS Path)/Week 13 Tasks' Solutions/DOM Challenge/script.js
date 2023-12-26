"use strict"

const mainColor = "rgb(35, 169, 110)";

// building the header section
function headerBuilder(title, links) {
    function buildPageTitle(title) {
        let pageTitleContainer = document.createElement("div");
        let pageTitle = document.createTextNode(title);
        pageTitleContainer.append(pageTitle);
        pageTitleContainer.style.cssText = `font-size: 3rem; font-weight: bold; color: ${mainColor};`;
        return pageTitleContainer;
    }

    function BuildNavBar(links) {
        let nav = document.createElement("nav");
        let navLinks = document.createElement("ul");
        navLinks.style.cssText = "list-style: none; display: flex; align-items: center;";

       links.forEach(link => {
            let li = document.createElement("li");
            li.style.padding = "1rem 0.5rem";
        
            let a = document.createElement("a");
            a.href = `#${link.toLowerCase()}`;
            a.innerText = `${link}`;
            a.style.cssText = "text-decoration: none; color: #aaa; font-size: 1.5rem";
            
            li.appendChild(a);
            navLinks.appendChild(li);
        });

        nav.append(navLinks); 
        return nav;     
    }

    let header = document.createElement("header");
    header.classList.add("page-head");
    header.style.cssText = `padding: 1rem; display: flex; box-shadow: 1px 1px 10px 0 black;
                            justify-content: space-between; align-items: center;`;

    header.append(buildPageTitle(title));
    header.append(BuildNavBar(links));
    return header;
}

function buildCards(cardsNo) {
    let mainSection = document.createElement("main");
    mainSection.classList.add("main-section");
    
    let container = document.createElement("container");
    container.style.cssText = "padding: 2rem; display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;"

    function buildCard(index, info) {
        let productCard = document.createElement("div");
        productCard.classList.add("product");
        productCard.style.cssText = `padding: 2.5rem 1rem; display: flex; color: #aaa; 
                                    flex-direction: column; align-items: center; 
                                    border-radius: 0.5rem; border: 1px solid black;`;

        let productNo = document.createElement("span");
        productNo.innerText = index;
        productNo.style.color = "black";
        productNo.style.fontSize = "2rem";

        let infoElement = document.createTextNode(info);

        productCard.append(productNo);
        productCard.append(infoElement);

        return productCard;
    }
    for(let i = 0; i < cardsNo; ++i) {
        container.append(buildCard(i + 1, "product"));
    }
    mainSection.append(container);
    return mainSection;
}

let header = headerBuilder("Kamal", ["Home", "About", "Service", "Content"]);
let main = buildCards(36);
let footer = document.createElement("footer");
footer.innerText = "Copy Right 2023";
footer.style.cssText = `padding: 2rem; color: white; font-size: 1.5rem; display: flex; justify-content: center; background-color: ${mainColor}; position: sticky; bottom: 0;`;

document.body.append(header);
document.body.append(main);
document.body.append(footer);


