import 'bootstrap'
import '../styles/index.scss'

// import $ from "jquery"
// $(document).ready(function () {
//     console.log('jquery is here!')``
// })

import { showOutline } from './common.js'
import { Animal } from './animal.js'
import { Cat } from './cat.js'
import marvel from './marvel'


(() => {

    let animal = new Animal('animal', 4)
    console.log(animal)
    //
    console.log(animal.legs)
    animal.legs = 3
    console.log(animal.legs)
    //
    animal.makeNoise()
    animal.makeNoise('Awwwww!')
    //
    console.log(animal.metaData)
    //
    let cat = new Cat('siamese', 4, true)
    cat.makeNoise('Meow')
    console.log(cat.metaData)


    // showOutline()
    
    marvel.getAllComics(10, comics => {
        console.log(comics.data)
    })
    
})()