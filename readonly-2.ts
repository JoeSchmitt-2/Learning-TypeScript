class Doggy {
    constructor(public readonly name: string, public readonly age: number) {}
}

const banjoo = new Doggy("Banjo", 2);
// banjo.name = "Shmoshmanjo";
console.log(banjoo.name);

class DogList {
    private doggies: Doggy[] = [];

    static instance: DogList = new DogList();

    private constructor() {};

    static addDog(dog: Doggy) {
        DogList.instance.doggies.push(dog);
    }

    getDogs() {
        return this.doggies;
    }
}

DogList.addDog(banjoo);
console.log(DogList.instance.getDogs());


//const dl = new DogList();