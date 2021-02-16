const products = [
    {
        id:1,
        img: 'https://www.twil.fr/media/catalog/product/cache/1/image/605x302/a8c876702c6cb649fba7cbed6b6e2e91/1/7/1749bf3f400883c4365f8ba0629fa3d05ef3a810.webp',
        name: "Chateau Trapaud",
        vintage: 2015,
        description: "Vinho tinto, da região de Saint-Emilion em Bordeaux. Excelente para acompanhar carnes grelhadas e aves de caça."
    },
    {
        id:2,
        img: 'https://www.vindebacchus.com/201-medium_default/gallen-margaux-chateau-meyre.jpg',
        name: "Gallen",
        vintage: 2011,
        description: "Vinho tinto, da região de Saint-Emilion em Bordeaux. Excelente para acompanhar carnes grelhadas e aves de caça."
    },
    {
        id:3,
        img: 'https://www.vindebacchus.com/196-medium_default/chateau-meyre-haut-medoc-cru-bourgeois.jpg',
        name: "Chateaux Meyre",
        vintage: 2015,
        description: "Vinho tinto, da região de Saint-Emilion em Bordeaux. Excelente para acompanhar carnes grelhadas e aves de caça."
    },
    {
        id:4,
        img: 'https://www.cdiscount.com/pdt2/2/6/3/1/700x700/auc3663811032263/rw/chateau-cluzeau-aoc-bergerac-rouge-2015-75cl.jpg',
        name: "Chateau Cluzeau",
        vintage: 2015,
        description: "Vinho tinto, da região de Saint-Emilion em Bordeaux. Excelente para acompanhar carnes grelhadas e aves de caça."
    },
    {
        id:1,
        img: 'https://www.twil.fr/media/catalog/product/cache/1/image/605x302/a8c876702c6cb649fba7cbed6b6e2e91/1/7/1749bf3f400883c4365f8ba0629fa3d05ef3a810.webp',
        name: "Chateau Trapaud",
        vintage: 2015,
        description: "Vinho tinto, da região de Saint-Emilion em Bordeaux. Excelente para acompanhar carnes grelhadas e aves de caça."
    },
    {
        id:2,
        img: 'https://www.vindebacchus.com/201-medium_default/gallen-margaux-chateau-meyre.jpg',
        name: "Gallen",
        vintage: 2011,
        description: "Vinho tinto, da região de Saint-Emilion em Bordeaux. Excelente para acompanhar carnes grelhadas e aves de caça."
    },
    {
        id:3,
        img: 'https://www.vindebacchus.com/196-medium_default/chateau-meyre-haut-medoc-cru-bourgeois.jpg',
        name: "Chateaux Meyre",
        vintage: 2015,
        description: "Vinho tinto, da região de Saint-Emilion em Bordeaux. Excelente para acompanhar carnes grelhadas e aves de caça."
    },
    {
        id:4,
        img: 'https://www.cdiscount.com/pdt2/2/6/3/1/700x700/auc3663811032263/rw/chateau-cluzeau-aoc-bergerac-rouge-2015-75cl.jpg',
        name: "Chateau Cluzeau",
        vintage: 2015,
        description: "Vinho tinto, da região de Saint-Emilion em Bordeaux. Excelente para acompanhar carnes grelhadas e aves de caça."
    },
    {
        id:1,
        img: 'https://www.twil.fr/media/catalog/product/cache/1/image/605x302/a8c876702c6cb649fba7cbed6b6e2e91/1/7/1749bf3f400883c4365f8ba0629fa3d05ef3a810.webp',
        name: "Chateau Trapaud",
        vintage: 2015,
        description: "Vinho tinto, da região de Saint-Emilion em Bordeaux. Excelente para acompanhar carnes grelhadas e aves de caça."
    },
    {
        id:2,
        img: 'https://www.vindebacchus.com/201-medium_default/gallen-margaux-chateau-meyre.jpg',
        name: "Gallen",
        vintage: 2011,
        description: "Vinho tinto, da região de Saint-Emilion em Bordeaux. Excelente para acompanhar carnes grelhadas e aves de caça."
    },
    {
        id:3,
        img: 'https://www.vindebacchus.com/196-medium_default/chateau-meyre-haut-medoc-cru-bourgeois.jpg',
        name: "Chateaux Meyre",
        vintage: 2015,
        description: "Vinho tinto, da região de Saint-Emilion em Bordeaux. Excelente para acompanhar carnes grelhadas e aves de caça."
    },
    {
        id:4,
        img: 'https://www.cdiscount.com/pdt2/2/6/3/1/700x700/auc3663811032263/rw/chateau-cluzeau-aoc-bergerac-rouge-2015-75cl.jpg',
        name: "Chateau Cluzeau",
        vintage: 2015,
        description: "Vinho tinto, da região de Saint-Emilion em Bordeaux. Excelente para acompanhar carnes grelhadas e aves de caça."
    },
    {
        id:1,
        img: 'https://www.twil.fr/media/catalog/product/cache/1/image/605x302/a8c876702c6cb649fba7cbed6b6e2e91/1/7/1749bf3f400883c4365f8ba0629fa3d05ef3a810.webp',
        name: "Chateau Trapaud",
        vintage: 2015,
        description: "Vinho tinto, da região de Saint-Emilion em Bordeaux. Excelente para acompanhar carnes grelhadas e aves de caça."
    },
    {
        id:2,
        img: 'https://www.vindebacchus.com/201-medium_default/gallen-margaux-chateau-meyre.jpg',
        name: "Gallen",
        vintage: 2011,
        description: "Vinho tinto, da região de Saint-Emilion em Bordeaux. Excelente para acompanhar carnes grelhadas e aves de caça."
    },
    {
        id:3,
        img: 'https://www.vindebacchus.com/196-medium_default/chateau-meyre-haut-medoc-cru-bourgeois.jpg',
        name: "Chateaux Meyre",
        vintage: 2015,
        description: "Vinho tinto, da região de Saint-Emilion em Bordeaux. Excelente para acompanhar carnes grelhadas e aves de caça."
    },
    {
        id:4,
        img: 'https://www.cdiscount.com/pdt2/2/6/3/1/700x700/auc3663811032263/rw/chateau-cluzeau-aoc-bergerac-rouge-2015-75cl.jpg',
        name: "Chateau Cluzeau",
        vintage: 2015,
        description: "Vinho tinto, da região de Saint-Emilion em Bordeaux. Excelente para acompanhar carnes grelhadas e aves de caça."
    },
    {
        id:1,
        img: 'https://www.twil.fr/media/catalog/product/cache/1/image/605x302/a8c876702c6cb649fba7cbed6b6e2e91/1/7/1749bf3f400883c4365f8ba0629fa3d05ef3a810.webp',
        name: "Chateau Trapaud",
        vintage: 2015,
        description: "Vinho tinto, da região de Saint-Emilion em Bordeaux. Excelente para acompanhar carnes grelhadas e aves de caça."
    },
    {
        id:2,
        img: 'https://www.vindebacchus.com/201-medium_default/gallen-margaux-chateau-meyre.jpg',
        name: "Gallen",
        vintage: 2011,
        description: "Vinho tinto, da região de Saint-Emilion em Bordeaux. Excelente para acompanhar carnes grelhadas e aves de caça."
    },
    {
        id:3,
        img: 'https://www.vindebacchus.com/196-medium_default/chateau-meyre-haut-medoc-cru-bourgeois.jpg',
        name: "Chateaux Meyre",
        vintage: 2015,
        description: "Vinho tinto, da região de Saint-Emilion em Bordeaux. Excelente para acompanhar carnes grelhadas e aves de caça."
    },
    {
        id:4,
        img: 'https://www.cdiscount.com/pdt2/2/6/3/1/700x700/auc3663811032263/rw/chateau-cluzeau-aoc-bergerac-rouge-2015-75cl.jpg',
        name: "Chateau Cluzeau",
        vintage: 2015,
        description: "Vinho tinto, da região de Saint-Emilion em Bordeaux. Excelente para acompanhar carnes grelhadas e aves de caça."
    },
    {
        id:1,
        img: 'https://www.twil.fr/media/catalog/product/cache/1/image/605x302/a8c876702c6cb649fba7cbed6b6e2e91/1/7/1749bf3f400883c4365f8ba0629fa3d05ef3a810.webp',
        name: "Chateau Trapaud",
        vintage: 2015,
        description: "Vinho tinto, da região de Saint-Emilion em Bordeaux. Excelente para acompanhar carnes grelhadas e aves de caça."
    },
    {
        id:2,
        img: 'https://www.vindebacchus.com/201-medium_default/gallen-margaux-chateau-meyre.jpg',
        name: "Gallen",
        vintage: 2011,
        description: "Vinho tinto, da região de Saint-Emilion em Bordeaux. Excelente para acompanhar carnes grelhadas e aves de caça."
    },
    {
        id:3,
        img: 'https://www.vindebacchus.com/196-medium_default/chateau-meyre-haut-medoc-cru-bourgeois.jpg',
        name: "Chateaux Meyre",
        vintage: 2015,
        description: "Vinho tinto, da região de Saint-Emilion em Bordeaux. Excelente para acompanhar carnes grelhadas e aves de caça."
    },
    {
        id:4,
        img: 'https://www.cdiscount.com/pdt2/2/6/3/1/700x700/auc3663811032263/rw/chateau-cluzeau-aoc-bergerac-rouge-2015-75cl.jpg',
        name: "Chateau Cluzeau",
        vintage: 2015,
        description: "Vinho tinto, da região de Saint-Emilion em Bordeaux. Excelente para acompanhar carnes grelhadas e aves de caça."
    },{
        id:1,
        img: 'https://www.twil.fr/media/catalog/product/cache/1/image/605x302/a8c876702c6cb649fba7cbed6b6e2e91/1/7/1749bf3f400883c4365f8ba0629fa3d05ef3a810.webp',
        name: "Chateau Trapaud",
        vintage: 2015,
        description: "Vinho tinto, da região de Saint-Emilion em Bordeaux. Excelente para acompanhar carnes grelhadas e aves de caça."
    },
    {
        id:2,
        img: 'https://www.vindebacchus.com/201-medium_default/gallen-margaux-chateau-meyre.jpg',
        name: "Gallen",
        vintage: 2011,
        description: "Vinho tinto, da região de Saint-Emilion em Bordeaux. Excelente para acompanhar carnes grelhadas e aves de caça."
    },
    {
        id:3,
        img: 'https://www.vindebacchus.com/196-medium_default/chateau-meyre-haut-medoc-cru-bourgeois.jpg',
        name: "Chateaux Meyre",
        vintage: 2015,
        description: "Vinho tinto, da região de Saint-Emilion em Bordeaux. Excelente para acompanhar carnes grelhadas e aves de caça."
    },
    {
        id:4,
        img: 'https://www.cdiscount.com/pdt2/2/6/3/1/700x700/auc3663811032263/rw/chateau-cluzeau-aoc-bergerac-rouge-2015-75cl.jpg',
        name: "Chateau Cluzeau",
        vintage: 2015,
        description: "Vinho tinto, da região de Saint-Emilion em Bordeaux. Excelente para acompanhar carnes grelhadas e aves de caça."
    },
    {
        id:1,
        img: 'https://www.twil.fr/media/catalog/product/cache/1/image/605x302/a8c876702c6cb649fba7cbed6b6e2e91/1/7/1749bf3f400883c4365f8ba0629fa3d05ef3a810.webp',
        name: "Chateau Trapaud",
        vintage: 2015,
        description: "Vinho tinto, da região de Saint-Emilion em Bordeaux. Excelente para acompanhar carnes grelhadas e aves de caça."
    },
    {
        id:2,
        img: 'https://www.vindebacchus.com/201-medium_default/gallen-margaux-chateau-meyre.jpg',
        name: "Gallen",
        vintage: 2011,
        description: "Vinho tinto, da região de Saint-Emilion em Bordeaux. Excelente para acompanhar carnes grelhadas e aves de caça."
    },
    {
        id:3,
        img: 'https://www.vindebacchus.com/196-medium_default/chateau-meyre-haut-medoc-cru-bourgeois.jpg',
        name: "Chateaux Meyre",
        vintage: 2015,
        description: "Vinho tinto, da região de Saint-Emilion em Bordeaux. Excelente para acompanhar carnes grelhadas e aves de caça."
    },
    {
        id:4,
        img: 'https://www.cdiscount.com/pdt2/2/6/3/1/700x700/auc3663811032263/rw/chateau-cluzeau-aoc-bergerac-rouge-2015-75cl.jpg',
        name: "Chateau Cluzeau",
        vintage: 2015,
        description: "Vinho tinto, da região de Saint-Emilion em Bordeaux. Excelente para acompanhar carnes grelhadas e aves de caça."
    }
]




//capturando os elementos do DOM
const cardsContainer = document.querySelector('.content')
const card = document.querySelector('.card')
const title = document.querySelector('.title') 
const vintage = document.querySelector('.vintage') 
const description = document.querySelector('.description')  

for (i=0; i<products.length;i++){
    // cria novo card
    let newCard = document.createElement('div')
    cardsContainer.appendChild(newCard)
    newCard.classList.add('card')

    //cria img
    let img = document.createElement('img')
    newCard.appendChild(img)
    img.src=products[i].img
    // title.classList.add('name')
    // let name_vin = products[i].name
    // title.innerHTML = name_vin
    
    
    //cria titulo
    let title = document.createElement('h4')
    newCard.appendChild(title)
    title.classList.add('name')
    let name_vin = products[i].name
    title.innerHTML = name_vin

      //cria vintage
      let vintage = document.createElement('h3')
      newCard.appendChild(vintage)
      vintage.classList.add('vintage')
      let vintage_vin = products[i].vintage
      vintage.innerHTML = vintage_vin

      //cria vintage
      let description = document.createElement('p')
      newCard.appendChild(description)
      description.classList.add('description')
      let description_vin = products[i].description
      description.innerHTML = description_vin
      
        
    
}