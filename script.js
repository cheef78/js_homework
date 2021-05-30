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

// class BasketItem {
//   constructor(id, title, price, count) {
//     this.id = id;
//     this.title = title;
//     this.price = price;
//     this.count = count;
//     }
//   render() {
//     return `<div class="goods-item"><img src =${this.image} alt = "good_pic" ><h3>${this.title}</h3><p>${this.price} </p></div> <br>`;
//     }
//     }





// class GoodsItem {
//   constructor(title, price, image) {
//     this.title = title;
//     this.price = price;
//     this.image = image;
//     }
//   render() {
//     return `<div class="goods-item"><img src =${this.image} alt = "good_pic" ><h3>${this.title}</h3><p>${this.price} </p></div> <br>`;
//     }
//     }

// class GoodsList {
//       constructor() {
//       this.goods = [];
//       }
//       fetchGoods() {
//       this.goods = [
//       { title: 'Shirt', price: 150, image:"shirt.jpg" },
//       { title: 'Socks', price: 50, image:"socks.jpg" },
//       { title: 'Jacket', price: 350, image:"jacket.jpg" },
//       { title: 'Shoes', price: 250, image:"shoes.jpg" },
//       ];
//       }
//       render() {
//         let listHtml = '';
//         this.goods.forEach(good => {
//         const goodItem = new GoodsItem(good.title, good.price, good.image);
//         listHtml += goodItem.render();
//         });
//         document.querySelector('.goods-list').innerHTML = listHtml;
//         }  

//         doodssum() {
//           let summa = 0;
//           this.goods.forEach(good => {
//           const goodItem = new GoodsItem(good.title, good.price, good.image);
//           summa += good.price;
//           });
//           summa = `<div class="text"> <br> <h3> Общая сумма товаров в списке =  ${summa} рублей </h3></div><br>`;
//           document.querySelector('.text').innerHTML = summa;
//           }     
    
//     }
// const list = new GoodsList();
// list.fetchGoods();
// list.render();
// list.doodssum();

//! 1. Переделайте makeGETRequest() так, чтобы она использовала промисы.
//! 2. Добавьте в соответствующие классы методы добавления товара в корзину, удаления товара из корзины и получения списка товаров корзины.

// https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses – адрес API;
// /catalogData.json – получить список товаров;

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

const makeGETRequest = (url, callback) => {
  return new Promise((resolve, reject) => {
    let xhr;

    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) { 
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) callback(xhr.responseText)
        else reject('Error')
      }
    }

    xhr.open('GET', url, true);
    xhr.send();
  })
}

class GoodsItem {
  constructor(product_name, price, id_product) {
    this.product_name = product_name;
    this.price = price;
    this.id_product = id_product;
  }

  render() {
    // создаем датасет
    let data = {
      "price": this.price,
      "product_name": this.product_name,
      id_product: this.id_product,
    };

    data = JSON.stringify(data);

    // пишем его в код
    return `<div class='goods-item'>
              <h3>${this.product_name}</h3>
              <p>${this.price}</p>
              <button data-product='${data}' id='add-btn-${this.id_product}'>В корзину</button>
            </div>`;
  }
}

class GoodsList {
  _basket = new Basket();

  constructor() {
    this.goods = [];
    this.filteredGoods = [];
  }

  fetchGoods(cb) {
    makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
      this.goods = JSON.parse(goods);
      this.filteredGoods = JSON.parse(goods);
      cb();
    })
  }

  filterGoods(value) {
    const regexp = new RegExp(value, 'i');
    this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
    this.render();
  }

  render() {
    let listHtml = '';
    this.filteredGoods.forEach(good => {
      const goodItem = new GoodsItem(good.product_name, good.price, good.id_product);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
    this._basket.setAddListeners(this.filteredGoods);
  }

  getTotalSum() {
    const totalSum = this.goods.reduce((acc, item) => {
      if (!item.price) return acc;
      return acc + item.price;
    }, 0);
    console.log(totalSum);
  }
}

class Basket {
  constructor() {
    this.goods = [];
  }

  clearAll() {
    this.goods = [];
  }

  addItem(event) {
    const { target } = event;
    const { product = {} } = target.dataset;
    this.goods.push(JSON.parse(product));
    this.render();
  }

  removeItem({ target }) {
    // через датасет получаем id товара который хотим удалить
    const { id } = target.dataset;
    // через метод filter убираем этот товар из списка и перезаписваем его
    this.goods = this.goods.filter((item) => String(item.id_product) !== String(id));
    // рендерим корзину с новым списком
    this.render();
  }

  setAddListeners(list = []) {
    list.forEach((item) => {
      document.getElementById(`add-btn-${item.id_product}`).addEventListener('click', (e) => this.addItem(e));
    })
  }

  setDeleteListeners() {
    this.goods.forEach((item) => {
      document.getElementById(`delete-btn-${item.id_product}`).addEventListener('click', (e) => this.removeItem(e));
    })
  }

  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new BasketItem(good.product_name, good.price, good.id_product);
      listHtml += goodItem.render();
    });
    document.querySelector('.cart-list').innerHTML = listHtml;
    this.setDeleteListeners();
  }
}

class BasketItem extends GoodsItem {
  constructor(...args) {
    super(...args);
    this.count = 0;
  }

  addOne() {}

  removeOne() {}

  render() {
    return `<div class='goods-item'>
              <h3>${this.product_name}</h3>
              <p>${this.price}</p>
              <button data-id='${this.id_product}' id='delete-btn-${this.id_product}'>Удалить</button>
            </div>`;
  }
}

const list = new GoodsList();
list.fetchGoods(() => {
  list.render();
});

const searchButton = document.querySelector('.search-button')
const searchInput = document.querySelector('.goods-search')
searchButton.addEventListener('click', (e) => {
  const value = searchInput.value;
  list.filterGoods(value);
});
searchInput.addEventListener('keydown', (e) => {
  const value = searchInput.value;
  list.filterGoods(value);
});