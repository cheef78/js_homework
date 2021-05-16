class Hamburger {
    constructor(burgertype, chezzcount, saladcount, potatoocount, spicecount, soucecount)
    {this.burgertype = burgertype;
    this.chezzcount = chezzcount;
    this.saladcount = saladcount;
    this.potatoocount = potatoocount;
    this.spicecount = spicecount;
    this.soucecount = soucecount;
    }
    addTopping(topping) { // Добавить добавку }
    removeTopping(topping) { // Убрать добавку }
    getToppings(topping) { // Получить список добавок }
    getSize() { // Узнать размер гамбургера }
    getStuffing() { // Узнать начинку гамбургера }
    calculatePrice() { // Узнать цену }
    calculateCalories() { // Узнать калорийность }