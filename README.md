Simple Faker Generator
--
CLI for [faker.js](https://github.com/marak/Faker.js) (uses yaml files as format description)

# Format example
```
id: random.number
login: internet.userName
password: internet.password
firstName: name.firstName
lastName: name.lastName
roles:
  - id: random.number
    name:
      method: random.arrayElement
      args:
        - [admin, guest, user]
age:
  method: random.number
  args:
    - min: 18
      max: 90
createdAt: date.past
number:
  method: helpers.replaceSymbolWithNumber
  args: ['###-####']
secretWords:
  method: helpers.shuffle
  args:
    - [apple, bat, cat]
``` 

see more available formats [faker.js wiki](https://github.com/Marak/faker.js/wiki/Address)


# Usage
```
  CLI for faker.js (uses yaml files as format description)

  Usage
    $ gen4fak --yaml examples/user.yaml --count 1

  Options
    --yaml, -y Path to the file describing the format of objects to be generated
    --count, -c Count of objects to be generated

  Examples
    $ gen4fak --yaml examples/user.yaml --count 1
    [
      {
        id: 28867,
        login: "Simeon.Wilkinson",
        password: "k8taFjMd4EILVZ3",
        firstName: "Rosetta",
        lastName: "Grady",
        roles: {
          id: 39796,
          name: "user"
        },
        age: 64,
        createdAt: new Date('2018-08-08T21:17:43.381Z'),
        number: "973-0044",
        secretWords: [
          "apple",
          "bat",
          "cat"
        ]
      }
    ]
```

# Used packages

- [faker.js](https://github.com/marak/Faker.js)
- [fixture-factory](https://github.com/peterKaleta/fixture-factory)
- [js-yaml](https://github.com/nodeca/js-yaml)
- [stringify-object](https://github.com/yeoman/stringify-object)
- [meow](https://github.com/sindresorhus/meow)
- [chalk](https://github.com/chalk/chalk)

# License

MIT
