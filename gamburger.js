const baza = [
         { title: 'big', price: 100, kkal: 40 },
         { title: 'little', price: 50, kkal: 20 },
         { title: 'chezz', price: 10, kkal: 20 },
         { title: 'salad', price: 20, kkal: 5 },
         { title: 'potatoo', price: 15, kkal: 10 },
         { title: 'spice', price: 15, kkal: 0 },
         { title: 'souce', price: 20, kkal: 5 },
          ];
class GetOrder {
            
        getOrder() {
            
            console.log(document.getElementById('big').querySelector('input[type=radio]').checked)
            if (document.getElementById('big').querySelector('input[type=radio]').checked == true){
               console.log(document.getElementById('big').querySelector('input[type=radio]').checked)
               var big = 1;
               var little = 0;
            }
            if (document.getElementById('big').querySelector('input[type=radio]').checked == false){
               var big = 0;
               var little = 1;
            }
            var chezz = document.getElementById('chezz').querySelector('input[type=number]').value;
            var salad= document.getElementById('salad').querySelector('input[type=number]').value;
            var potatoo = document.getElementById('potatoo').querySelector('input[type=number]').value;
            
            
            if (document.getElementById('spice').querySelector('input[type=radio]').checked == true){
                var spice = 1;
            }
            if (document.getElementById('spice').querySelector('input[type=radio]').checked == false){
                var spice = 0;
            }
            
            
            if (document.getElementById('souce').querySelector('input[type=radio]').checked == true){
                var souce = 1;
            }
            if (document.getElementById('souce').querySelector('input[type=radio]').checked == false){
                var souce = 0;
            }

            const keys = [
                big,
                little,
                chezz,
                salad,
                potatoo,
                spice,
                souce
            ]
            console.log(keys)
            return keys;
            
          }
}


class Gamburger {
    constructor(baza,order)
    {
    this.baza = baza;
    this.big = order[0];
    this.little = order[1];
    this.chezz = order[2];
    this.salad = order[3];
    this.potatoo = order[4];
    this.spice = order[5];
    this.souce = order[6];
    }
    
    
    
    
    calculatePrice() {
        let totalPrice = 0;
        let totalKkal = 0;
        let listHtml = '';
        const keys = [
            this.big,
            this.little,
            this.chezz,
            this.salad,
            this.potatoo,
            this.spice,
            this.souce
        ]
        for (let i = 0; i <= 6; i++) {
           const item = this.baza[i]
           const itemprice = item.price*keys[i];
           const itempkkal = item.kkal*keys[i];
           totalPrice += itemprice;
           totalKkal += itempkkal;;
        }
        listHtml = `<div class="text"> <br> <h3> Общая стоимость выбранного гамбургера c топпингами и добавками =  ${totalPrice} рублей </h3></div>` + `<div class="text"> <br> <h3> Общая энергетическая ценность выбранного гамбургера c топпингами и добавками =  ${totalKkal} ккал </h3></div>`;
        document.querySelector('.text').innerHTML = listHtml;
        }     
    
  
   
}
// var big = document.getElementById('big');
// const little = document.getElementById('little');
// console.log(big)
// console.log(little)
// document.querySelector('.text').innerHTML = document.getElementById('big').querySelector('input[type=radio]').checked;
// document.querySelector('.text').innerHTML = document.getElementById('chezz').querySelector('input[type=number]').value;
// document.querySelector('.text').innerHTML = document.getElementById('little').querySelector('input[type=radio]').checked;
function processingAction() {
    const myorder = new GetOrder()
    const myburger = new Gamburger(baza, myorder.getOrder());
    myburger.calculatePrice();
  }





