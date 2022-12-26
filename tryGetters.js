class Pet{
    constructor(animal, breed, age, size, sound){
        this.animal = animal;
        this.breed = breed;
        this.age = age;
        this.size = size;
        this.sound = sound;
    }
}

const Jewels = new Pet('cat', 'tuxedo', '10', 'small', 'meow');
console.log(Jewels);
console.log(Jewels.breed);