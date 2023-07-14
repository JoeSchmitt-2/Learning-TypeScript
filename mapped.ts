type MyFlexibleDogInfo = {
    name: string;
    [key: string]: string | number;
};

const dog: MyFlexibleDogInfo = {
    name: "FIDO",
    bredd: "Mutt",
}

interface DogInfo {
    name: string;
    age: number;
}

type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
};

type DogInfoOptions = OptionsFlags<DogInfo>;

type Listeners<Type> = {
    [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (
        newValue: Type[Property]
    ) => void;
} & { 
    [Property in keyof Type as `on${Capitalize<
            string & Property
        >}Delete`]?: () => void 
};

function listenToObject<T>(obj: T, listeners: Listeners<T>): void {
    throw "Needs to be implemented";
}

const fido: DogInfo = {
    name: "FIDO",
    age: 13,
}

type DogInfoListeners = Listeners<DogInfo>

listenToObject(fido, {
    onNameChange: (v: string) => {},
    onAgeChange: (v: number) => {},
    onAgeDelete: () => {},
    onNameDelete: () => {},
});