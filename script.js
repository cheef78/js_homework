// const goods = [
//     { title: 'Shirt', price: 150 },
//     { title: 'Socks', price: 50 },
//     { title: 'Jacket', price: 350 },
//     { title: 'Shoes', price: 250 },
//   ];
  


//   const renderGoodsItem = (title, price) => {
//     return `<div class="goods-item"><img src = "good.jpg" alt = "good_pic" ><h3>${title}</h3><p>${price}</p></div> <br>`;
//   };
  
//   const renderGoodsList = (list = [{ title: 'No_good', price:'No_price' }]) => {
//     let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
//     document.querySelector('.goods-list').innerHTML = goodsList.join('');
//   }
  
//   renderGoodsList(goods);

class GoodsItem {
  constructor(title, price, image) {
    this.title = title;
    this.price = price;
    this.image = image;
    }
  render() {
    return `<div class="goods-item"><img src =${this.image} alt = "good_pic" ><h3>${this.title}</h3><p>${this.price} </p></div> <br>`;
    }
    }

class GoodsList {
      constructor() {
      this.goods = [];
      }
      fetchGoods() {
      this.goods = [
      { title: 'Shirt', price: 150, image:"shirt.jpg" },
      { title: 'Socks', price: 50, image:"socks.jpg" },
      { title: 'Jacket', price: 350, image:"jacket.jpg" },
      { title: 'Shoes', price: 250, image:"shoes.jpg" },
      ];
      }
      render() {
        let listHtml = '';
        this.goods.forEach(good => {
        const goodItem = new GoodsItem(good.title, good.price, good.image);
        console.log(good.title, good.price, good.image)
        listHtml += goodItem.render();
        console.log(goodItem.render())
        });
        
        document.querySelector('.goods-list').innerHTML = listHtml;
        }  
    
    }
const list = new GoodsList();
list.fetchGoods();
list.render();
console.log(list.render())