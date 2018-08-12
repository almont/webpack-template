export class Animal {

    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }

    makeNoise(sound = 'no sound') {
        console.log(sound);
    }

    get metaData() {
        return this;
    }

    static returning() {
        return 10;
    }
}