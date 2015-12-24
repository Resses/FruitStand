var moneyValue;
var totalCost = 0;

//Fruit class
function Fruit(name, image, price, season) {
    this.name = name;
    this.image = image;
    this.price = price; //how much the user will buy it for
    this.quantity = 0; //how many the user buys
    this.cost = 0; //price * quantity
    this.sellingPrice = 0; //how much use is selling it for
    this.season = season;
    this.sellChance = 0.5; //every item starts with a 50% chance that it will sell
}
var apple = new Fruit("Apple", "images/apple.png", 0.99, "winter"); //per pound
var banana = new Fruit("Banana", "images/banana.png", 0.29, "winter"); //per pound 
var broccoli = new Fruit("Broccoli", "images/broccoli.png", 0.99, "winter"); //per bunch 
var carrot = new Fruit("Carrot", "images/carrot.png", 0.50, "winter"); //per pound 
var cucumber = new Fruit("Cucumber", "images/cucumber.png", 0.99, "summer"); //per pound 
var grapes = new Fruit("Grapes", "images/grapes.png", 1.5, "summer"); //per pound
var mango = new Fruit("Mango", "images/mango.png", .99, "summer"); //per mango
var onion = new Fruit("Onion", "images/onion.png", .75, "winter"); //per pound 
var orange = new Fruit("Orange", "images/orange.png", .5, "winter"); //per orange
var potato = new Fruit("Potato", "images/potato.png", .5, "winter"); //per pound
var pumpkin = new Fruit("Pumpkin", "images/pumpkin.png", 3, "winter"); //per pumpkin
var strawberries = new Fruit("Strawberries", "images/strawberries.png", 2.5, "summer"); //per pound 
var tomato = new Fruit("Tomato", "images/tomato.png", 1.5, "summer"); //per pound
var watermelon = new Fruit("Watermelon", "images/watermelon.png", .99, "summer"); //quarter watermelon
var yam = new Fruit("Yam", "images/yam.png", .75, "winter"); //per yam

var fruits;        
function init() {
//    //FRUITS
    if(localStorage.getItem('fruits')!=null){
        var fruitStr = localStorage.getItem('fruits');
        fruits = JSON.parse(fruitStr);
    }
    else{
        fruits = new Array(apple, banana, broccoli, carrot, cucumber, grapes, mango, onion, orange, potato, pumpkin, strawberries, tomato, watermelon, yam);
    }
    //MONEY
    moneyValue = localStorage.getItem('moneyValue');
    localStorage.setItem('originalMoneyValue', moneyValue);
    document.getElementById('money').innerHTML+=moneyValue;
    //DATE
    if(localStorage.getItem('date')!=null){
        var date = localStorage.getItem('date');
        document.getElementById('date').innerHTML = "Date: " + date;
    }
    //WEATHER
    var weatherStr = localStorage.getItem('weather');
    var array = weatherStr.split(',');
    document.getElementById("weather").innerHTML= "Weather: " + array[0]+"&deg; F " + array[1];
    
    var mygrid = document.getElementsByClassName('ui-grid-b');
    var j = 'a';
    //for each fruit in the fruits array, create a block in the grid with the approproate info
    for (var i = 0; i < fruits.length; i++) { 
        mygrid[0].innerHTML += "<div class='ui-block-" + j + " border'> \n\
            <h2>" + fruits[i].name + "</h2>\n\
            <label> $" + (fruits[i].price).toFixed(2) + "</label> <br> \n\
            <img src=" + fruits[i].image + " alt='" + fruits[i].name + " pic' height='70'/> <br>\n\
            Qty: <select id='" + fruits[i].name + "' name='" + fruits[i].name + "' onchange='javascript:update(" + i + ")' class='select ui-btn ui-shadow'>\n\
                <option value='0' selected>0</option>\n\
                <option value='1'>1</option>\n\
                <option value='2' >2</option>\n\
                <option value='3' >3</option>\n\
                <option value='4' >4</option>\n\
                <option value='5' >5</option>\n\
                <option value='6' >6</option>\n\
                <option value='7' >7</option>\n\
                <option value='8' >8</option>\n\
                <option value='9' >9</option>\n\
                <option value='10' >10</option>\n\
            </select>\n\
        </div>";
        j = (j === 'a' ? 'b' : (j === 'b' ? 'c' : 'a'));
    }
}
function update(i) {
    var fruit = fruits[i]; //get the current fruit object
    var x = document.getElementById(fruit.name); //x is the select
    fruit.quantity = x.options[x.selectedIndex].value; //set the quantity
    costToAdd = ((fruit.price) * (fruit.quantity));
    totalCost -= fruit.cost;
    fruit.cost = costToAdd;
    totalCost += costToAdd;
    var cost = document.getElementById('cost');
    cost.innerHTML = "Total Cost: $" + totalCost.toFixed(2);
    if (totalCost > moneyValue) {
        cost.style.color = "red";
    } else {
        cost.style.color = "black";
    }
}
function buy() {
    if (totalCost > moneyValue) {
        alert("You do not have enough money for this. Your total is $" + totalCost.toFixed(2) + " but you only have $" + moneyValue);
    } else {
        moneyValue -= totalCost;
        var money = document.getElementById('money');
        money.innerHTML = "You have $" + moneyValue.toFixed(2);
        document.getElementById('cost').innerHTML = "Total cost: 0";
        alert("You now have $" + (moneyValue).toFixed(2) + " left. Thanks for shopping.");
        localStorage.setItem('moneyValue', (moneyValue).toFixed(2));
        var fruitStr = JSON.stringify(fruits);
        localStorage.setItem('fruits', fruitStr);
        window.location = 'SetUp.html';
    }
}