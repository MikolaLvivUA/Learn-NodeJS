// інтерфейс це тип даних в якому ми вказуєм що має нам повернути функція

import {CarModel} from "./Car.model";

export interface UserModel {
    name: string,
    age: number,
    car?: CarModel, //автоматом робить рекваєри
}