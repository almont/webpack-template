import * as common from './common.js'
import {Animal} from './animal.js'
import {Cat} from './cat.js'
import '../styles/index.scss'



(() => {

    let animal = new Animal('animal', 4)
    common.log(animal)
    //
    console.log(animal.legs, 'info')
    common.log(animal.legs, 'info')
    animal.legs = 3
    common.log(animal.legs, 'info')
    //
    animal.makeNoise()
    animal.makeNoise('Awwwww!')
    //
    common.log(animal.metaData, 'success')
    //
    let cat = new Cat('siamese', 4, true)
    cat.makeNoise('Meow')
    common.log(cat.metaData, 'warning')


    common.log('END', 'error')

    // showOutline()
    
})()