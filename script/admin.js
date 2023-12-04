let shoes = []
//set   


// class shoe {
//     constructor(brand, description,price,url) {
//        this.brand = brand
//        this.description = description
//        this.price = price
//        this.url = url
//     }
// }

function Shoe(brand, description,price,url) {
       this.brand = brand
       this.description = description
       this.price = price
       this.url = url
}

let shoeItem =  new Shoe('Nike',"jordan 1",1500,'https://i.postimg.cc/Z5kcYyPS/jordan1s.jpg')
let shoeItem2 = new Shoe('Nike',"Air force",1000,'https://i.postimg.cc/tRdfhY8z/air-force-1-07-easyon-shoes-lpj-TWM.png')
let shoeItem3 = new Shoe('Nike',"dunks",1200,"https://i.postimg.cc/vZj0VNwp/png-transparent-nike-skateboarding-nike-dunk-sneakers-skate-shoe-nike-blue-white-outdoor-shoe.png")
let shoeItem4 = new Shoe('Nike',"jordan 4",1700,'https://i.postimg.cc/zBMhd90r/png-transparent-nike-air-max-air-jordan-jumpman-sneakers-nike-white-fashion-outdoor-shoe.png')


let adidas =  new Shoe('adidas','spiderman miles morales',1500,'https://i.postimg.cc/sXcLD2v4/spider-man-2-adidas-shoes-ign-2023-preorder-order-where-to-buy-1696341802109.png')
let adidas2 = new Shoe('adidas','superstar',600,"https://i.postimg.cc/rsCkyZQr/adidas-superstar-adidas-originals-sneakers-shoe-adidas.jpg")
let adidas3 = new Shoe('adidas','high top',800,'https://i.postimg.cc/fyXPj8FR/adidas-ugly.jpg')
let adidas4 = new Shoe('adidas','sport',900,'https://i.postimg.cc/26nd0gzM/png-clipart-adidas-chaussure-gazelle-sports-shoes-mens-adidas-originals-gazelle-adidas-white-outdoor.png')

let puma = new  Shoe('puma','white and green',900,'https://i.postimg.cc/0yfxyV07/puma4.jpg')
let puma2 = new Shoe('puma','green and black',700,'https://i.postimg.cc/pXSLtGkr/puma.jpg')
let puma3 = new Shoe('puma','limited edition',1200,'https://i.postimg.cc/XJBTdLdH/lim-puma.jpg')
let puma4 = new Shoe('puma','black and white',500,'https://i.postimg.cc/BQ4Vn4Yw/puma6.jpg')

let converse =  new Shoe('converse','high-top',550,'https://i.postimg.cc/nLdrsR2y/con.jpg"')
let converse2 = new Shoe('converse','low-top',600,'https://i.postimg.cc/wTVpTt0P/verse.jpg')
let converse3 = new Shoe('converse','limited edition high-top',1000,'https://i.postimg.cc/Vs7NDVc5/lim-con.jpg')
let converse4 = new Shoe('converse','limited edition high-top',1200,'https://i.postimg.cc/RC3rxsHW/lim-verse.jpg')

let vans =  new Shoe('vans','low-top',800,'https://i.postimg.cc/gj5rbFRY/vans.jpg')
let vans2 = new Shoe('vans','high-top',900,'https://i.postimg.cc/4x17nMR1/vans2.jpg')
let vans3 = new Shoe('vans','sliders',1500,'https://i.postimg.cc/bNgSwWh9/vans4.jpg')
let vans4=  new Shoe('vans','limited edition high-top',2000,'https://i.postimg.cc/zGCkk59Z/vans5.jpg')

//fun set,get

shoes.push(shoeItem,shoeItem2,shoeItem3,shoeItem4,adidas,adidas2,adidas3,adidas4,converse,converse2,converse3,converse4,puma,puma2,puma3,puma4,vans,vans2,vans3,vans4)
localStorage.setItem('storage',JSON.stringify(shoes))

function setAndGet(){
    localStorage.setItem('storage',JSON.stringify(shoes))
    shoes = JSON.parse(localStorage.getItem('storage'))
}

let table = document.querySelector('table')
window.onload= function unity(){
    let products = shoes.map((item,index) => {
       console.log(item);
       console.log(index);
       return `
  
               <tr>
               <td class ="text-white">${index + 1}</td>
               <td class ="text-white">${item.brand}</td>
               <td class ="text-white">${item.description}</td>
               <td class ="text-white">R${item.price}</td>
               <td class ="text-white"><img src="${item.url}" style="width: 100px; height: 100px;"></td>
               <td><button class="btn btn-primary" value =${index} data-edit>edit</button></td>
               <td><button class="btn btn-primary" value =${index} data-delete class= "delete">delete</button></td>
               </tr>
    
       `
    })
    table.innerHTML =products.join('')
}

/*




*/