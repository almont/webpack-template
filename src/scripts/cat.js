import { Animal } from "./animal"

export class Cat extends Animal {
    constructor(type, legs, tale) {
        super(type, legs)
        this.tale = tale
    }
}