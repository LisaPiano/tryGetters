class Pet{
    constructor(animal, breed, age, size, sound){
        this.animal = animal;
        this.breed = breed;
        this.age = age;
        this.size = size;
        this.sound = sound;
    }
    get mood(){
        if(this.age > 5){
            return "happy and content";
        } else {
            return "young and tempermental";
        }
    }
}

const Jewels = new Pet('cat', 'tuxedo', '10', 'small', 'meow');
console.log(Jewels);
console.log(Jewels.breed);
console.log(Jewels.mood);
console.log(Jewels["size"]);