// // task 1

const ANIMAL = {
    name: 'Tiger',
    weight: 250,
    speedPerHour: 55,
    getInfo() {
        for (let key in this) {
            typeof this[key] !== 'function' ? console.log(key, this[key]) : '';
        }
    },
    calcTimeForDistance(distance) {
        const MAX_TIME_PER_DAY = 12;
        let hours = distance / this.speedPerHour;
        const DAYS = Math.floor(hours / MAX_TIME_PER_DAY);
        hours = Math.floor(hours % MAX_TIME_PER_DAY);
        console.log(`${DAYS} day(s) and ~ ${hours} hours`);
    },
    changeName(secondName) {
        this.name = `${secondName} ${this.name}`;
        console.log(this.name);
    }
};

ANIMAL.getInfo();
ANIMAL.calcTimeForDistance(1000);
ANIMAL.changeName('Bengal');

// task 2

const OBJ = {
    length: 10,
    width: 5,
    calcSquare() {
        console.log(this.length * this.width)
    },
    calcPerimeter() {
        console.log((this.length + this.width) * 2)
    },
    make3d(thirdSide) {
        this.thirdSide = thirdSide;
        console.log(this.thirdSide)
    },
    addName(typeOfObject) {
        this.typeOfObject = typeOfObject;
        console.log(this.typeOfObject)
    },
    calcSidesInMeters() {
        console.log(`Width : ${this.width / 100}m \nLength : ${this.length / 100}m`)
    }
};

OBJ.calcSquare();
OBJ.calcPerimeter();
OBJ.make3d(10);
OBJ.addName('rectangle');
OBJ.calcSidesInMeters();

// task 3

const BUY_LIST = {
    tomato: {
        count: 5,
        price: 50,
        buy: false,
        outOfstore: true
    },
    potato: {
        count: 15,
        price: 20,
        buy: true,
        outOfstore: false
    },
    apple: {
        count: 9,
        price: 10,
        buy: false,
        outOfstore: false
    },
    watermelon: {
        count: 1,
        price: 70,
        buy: false,
        outOfstore: true
    },
    orange: {
        count: 3,
        price: 30,
        buy: true,
        outOfstore: false
    },
    showAvailability() {
        const AVAILABLE = [];
        const UN_AVAILABLE = [];
        for (let key in this) {
            typeof this[key] !== 'function' ?
                this[key].outOfstore ?
                    UN_AVAILABLE.push(key)
                    : AVAILABLE.push(key)
                : ''
        }
        console.log('Available', AVAILABLE);
        console.log('Unavailable', UN_AVAILABLE);
    },
    showBoughtProducts() {
        const BOUGHT = [];
        for (let key in this) {
            if (typeof this[key] !== 'function' && this[key].buy) BOUGHT.push(key)
        };
        console.log('Bought products', BOUGHT);
    },
    buyProduct(name) {
        this[name].buy = true;
    },
    calcSum() {
        let sum = 0;
        for (let key in this) {
            if (typeof this[key] !== 'function' && this[key].buy) sum += this[key].count * this[key].price
        };
        console.log(`You need to pay: ${sum} uah`);
    },
    addProductCount(name) {
        this[name].count++;
        this[name].buy = true;
        console.log(`${name} count: ${this[name].count}`)
    },
    removeProductCount(name) {
        this[name].count ? this[name].count-- : this[name].buy = false;
        console.log(`${name} count: ${this[name].count}`)
    }
};

BUY_LIST.showAvailability();
BUY_LIST.showBoughtProducts();
BUY_LIST.buyProduct('apple');
BUY_LIST.showBoughtProducts();
BUY_LIST.calcSum();
BUY_LIST.addProductCount('orange');
BUY_LIST.removeProductCount('orange');
BUY_LIST.removeProductCount('orange');
BUY_LIST.removeProductCount('orange');
BUY_LIST.removeProductCount('orange');
BUY_LIST.removeProductCount('orange');
BUY_LIST.showBoughtProducts();

// task 4

const USERS = [
    {
        name: "Yura",
        age: 55,
        hobby: ["films", "games", "hiking"],
        type: "Admin"
    },
    {
        name: "Alina",
        age: 13,
        hobby: ["films", "games", "smoking"],
        type: "user"
    },
    {
        name: "David",
        age: 21,
        hobby: ["films", "football"],
        type: "user"
    },
    {
        name: "Ernest",
        age: 55,
        hobby: ["games", "guitar"],
        type: "Admin"
    }];

const showAdmins = users => {
    const ADMINS = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].type === "Admin") ADMINS.push(users[i].name)
    };
    console.log('Admins', ADMINS);
};

const calcAvarageAge = users => {
    let avarageAge = 0;
    for (let i = 0; i < users.length; i++) {
        avarageAge += users[i].age;
    };
    console.log('Avarage age:', avarageAge / users.length)
};

const showUnicHobby = users => {
    const USERS_HOBBIES = [];
    const UNIC_HOBBIES = [];
    for (let i = 0; i < users.length; i++) {
        for (j = 0; j < users[i].hobby.length; j++) {
            USERS_HOBBIES.push(users[i].hobby[j]);
        };
    };
    console.log('All hobbies', USERS_HOBBIES);
    USERS_HOBBIES.map((el, i, arr) => {
        arr.indexOf(el) === arr.lastIndexOf(el) ? UNIC_HOBBIES.push(el) : '';
    });
    console.log('Unic hobbies', UNIC_HOBBIES);
};

showAdmins(USERS);

calcAvarageAge(USERS);

showUnicHobby(USERS);