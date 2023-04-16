function animalSound(animalName){

    if (animalName === 'chimp'){
      return 'aaaaaa'
    }
    if (animalName === 'elephant'){
      return 'trrrmppph'
    }
    if (animalName === 'snapping turtle'){
      return 'snap'
    }
    else{
      return 'grrrr'
    }
    
    }
    let animal = 'chimp'
    let animalSounds = animalSound(animal)
    console.log(animalSounds);