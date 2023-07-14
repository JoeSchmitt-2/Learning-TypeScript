interface MyUser {
    name: string;
    id: number;
    email?: string;
}
//Partial<> makes all fields optional for you. clean and simple. cmd k cmd i will show '?'
type MyUserOptionals = Partial<MyUser>;

// interface MyUserOptionals {
//     name?: string;
//     id?: string;
//     email?: string;
// }

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
    return {
        ...user,
        ...overrides,
    }
}

console.log(
    merge(
        {
            name: "Joe",
            id: 2,
            email: "dontemail@dontemail.com",
        },
        {
            email: "dontemailbax@dontemail.com",
        }
))

//Required takes of the optionality '?' of email. This can be seen by cmd k cmd i
type RequiredMyUser = Required<MyUser>;

//Pick takes a type and a list of keys and will pick out the specific fields you want
type JustEmailAndName = Pick<MyUser, "email" | "name">;

//Takes a type and does the opposite of pick
type UserWithoutID = Omit<MyUser, "email" | "name">;

//Record is used to map the properties of a type to another type
const mapById = (users: MyUser[]): Record<MyUser["id"], UserWithoutID> => {
    return users.reduce((a, v) => {
        const { id, ...other } = v;
        return {
            ...a,
            [id]: other,
        }
    }, {});
}

console.log(mapById([
    {
        id: 1,
        name: "Mr foo"
    }
]))
console.log(mapById([
    {
        id: 2,
        name: "Mrs baz"
    }
]))