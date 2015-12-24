var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

function randomDate() {
    var start = new Date(2013, 01, 31);
    var end = new Date(2013, 12, 31);
    var date = new Date(+start + Math.random() * (end - start));
    return date;
}
function generateWeightedList(list, weight) {
    var weighed_list = [];
    for (var i = 0; i < weight.length; i++) {
        var multiples = weight[i] * 100;
        for (var j = 0; j < multiples; j++) {
            weighed_list.push(list[i]);
        }
    }
    return weighed_list;
}
function getWeather(month) {
    //this method returns a random number of degrees based on the month 
    var degrees=0;
    var description="";
    //dec, jan, feb
    var winterDescription = ["Clear Skies", "Light Rain", "Thunderstorm", "Light Snow", "Snowstorm"];
    var winterWeights = [.4, .15, .2, .15, .1];
    var weightedWinterList = generateWeightedList(winterDescription, winterWeights);
    //rest of months
    var summerDescription = ["Sunny", "Clear Skies", "Cloudy", "Light Rain", "Thunderstorm"];
    var summerWeights = [.25, .25, .25, .1, .15];
    var weightedSummerList = generateWeightedList(summerDescription, summerWeights);
    switch (month) {
        case 1:
            degrees = Math.floor((Math.random() * 26) + 13);
            description = weightedWinterList[Math.floor(Math.random() * ((weightedWinterList.length - 1) + 1))];
            break;
        case 2:
            degrees = Math.floor((Math.random() * 17) + 24);
            description = weightedWinterList[Math.floor(Math.random() * ((weightedWinterList.length - 1) + 1))];
            break;
        case 3:
            degrees = Math.floor((Math.random() * 18) + 33);
            description = weightedSummerList[Math.floor(Math.random() * ((weightedSummerList.length - 1) + 1))];
            break;
        case 4:
            degrees = Math.floor((Math.random() * 17) + 45);
            description = weightedSummerList[Math.floor(Math.random() * ((weightedSummerList.length - 1) + 1))];
            break;
        case 5:
            degrees = Math.floor((Math.random() * 18) + 54);
            description = weightedSummerList[Math.floor(Math.random() * ((weightedSummerList.length - 1) + 1))];
            break;
        case 6:
            degrees = Math.floor((Math.random() * 16) + 64);
            description = weightedSummerList[Math.floor(Math.random() * ((weightedSummerList.length - 1) + 1))];
            break;
        case 7:
            degrees = Math.floor((Math.random() * 22) + 72);
            description = weightedSummerList[Math.floor(Math.random() * ((weightedSummerList.length - 1) + 1))];
            break;
        case 8:
            degrees = Math.floor((Math.random() * 20) + 68);
            description = weightedSummerList[Math.floor(Math.random() * ((weightedSummerList.length - 1) + 1))];
            break;
        case 9:
            degrees = Math.floor((Math.random() * 15) + 61);
            description = weightedSummerList[Math.floor(Math.random() * ((weightedSummerList.length - 1) + 1))];
            break;
        case 10:
            degrees = Math.floor((Math.random() * 15) + 50);
            description = weightedSummerList[Math.floor(Math.random() * ((weightedSummerList.length - 1) + 1))];
            break;
        case 11:
            degrees = Math.floor((Math.random() * 15) + 40);
            description = weightedSummerList[Math.floor(Math.random() * ((weightedSummerList.length - 1) + 1))];
            break;
        case 12:
            degrees = Math.floor((Math.random() * 15) + 18);
            description = weightedWinterList[Math.floor(Math.random() * ((weightedWinterList.length - 1) + 1))];
            break;
    }
    return degrees + ',' + description;
}
function init() {
    //DATE
    if (localStorage.getItem('weather') != null) {
        var date = localStorage.getItem('date');
        document.getElementById('date').innerHTML = "Date: " + date;
    } else {
        var random = randomDate();
        var date = (monthNames[random.getMonth()] + " " + random.getDate());
        localStorage.setItem('date', date);
        document.getElementById('date').innerHTML = "Date: " + date;
    }
    //MONEY
    if (localStorage.getItem('moneyValue') === null) {
        localStorage.setItem('moneyValue', '20.00');
    }
    if (parseInt(localStorage.getItem('moneyValue')) < 5) {
        document.getElementById("money").style.color='red';
    }
    document.getElementById("money").innerHTML += localStorage.getItem('moneyValue');
    //WEATHER
    if(localStorage.getItem('weather')!=null){
        var weatherStr = localStorage.getItem('weather');
        var array = weatherStr.split(',');
        document.getElementById("weather").innerHTML= "Weather: " + array[0]+"&deg; F " + array[1];
    }
    else{
        var weatherStr = getWeather(random.getMonth()+1);
        var array = weatherStr.split(',');
        document.getElementById("weather").innerHTML= "Weather: " + array[0]+"&deg; F " + array[1];
        localStorage.setItem('weather', weatherStr);
    }
}
function refresh() {
    if (confirm("Are you sure you want to erase your progress and reset the game?")) {
        localStorage.removeItem('moneyValue');
        localStorage.removeItem('fruits');
        localStorage.removeItem('date');
        localStorage.removeItem('weather');
        location.reload();
    }
}
