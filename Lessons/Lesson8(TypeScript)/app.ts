/*let x: string/!*таким чином ми вказуєм типізацію для нашої змінної*!/ = 'hello';

function f(a: number, b: number): number/!*Таким чином ми вказуєм що наша функція має заретьорнити ретьорнить нам число*!/ {
    return a + 'hello'; //відповідно typeScript не дасть нам додати число до стрінги.
}

f(1, 22);*/
//
// class Hello {
//     constructor(name: string, age: number) {
//         this name = name
//         this age = age
//     }
// }
//
// private go (); // можна оголошувати приватні методи

import {CarModel, UserModel} from './model'
import {CarModelEnum} from "./Enum";

//Якщо функція нічого не повертає вона по замовчуванню є void (повна)
/*
function userBuilder(): void {

}*/

/*
function userBuilder(name: string, age: number, car: boolean): UserModel {
    return {
        age,
        name,
        car
        /!*Ми маєм повернути повний обєкт такий як описаний в інтерфейсі*!/
    }
}

const User = userBuilder('Viktor', 23, false);
*/

/*function userBuilder(name: string, age: number, car?: CarModel): UserModel { /!*Вказавши знак питання ми вказуєм що ця змінна може не прийти*!/
    return {
        age,
        name,
        car
        /!*Ми маєм повернути повний обєкт такий як описаний в інтерфейсі*!/
    }
}*/

/*
function userBuilder(name: string, age: number, car: CarModel): Partial<UserModel> { /!*Partial вказує на те що ми можм повернути тільки частину*!/
    return {
        age,
        name,
        car
        /!*Ми маєм повернути повний обєкт такий як описаний в інтерфейсі*!/
    }
}


const User = userBuilder('Viktor', 23, {
    producer: CarModelEnum.FIAT, // вот так можна підтягувати енамки
    year: 2000
});

let arr: number[] = [];//масив з цифрами
let arr2: Array<number> = []; //або так

// arr.push('Hello') //відповідно ts не дасть запушити стрічку

async function asF(): Promise<any> {
    return setTimeout(() => {
        return 'hello'
    }, 1000)
}

*/

const attr: Array<keyof UserModel> = ["name", "age", "car"]; //це вказує на те що ми можкмо дьлргати тільки наші атрибути з інтерфейсф