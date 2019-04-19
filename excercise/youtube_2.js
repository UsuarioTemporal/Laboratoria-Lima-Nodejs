/* Imaginemos que de un array de objetos queremos crear un hashmap con los
id de esos objetospara que las consultas sean mas eficientes y no
recorreer todo el array hasta encontrar el objeto querido
*/
let users = [
    {
        "id":1,
        "nombre" : "diego", 
        "apellido" : "flores robles", 
        "correo" : "diego@gmail.com",
        "dni": 123123123,
        "fecha_de_nacimiento": 1980,
        "nombre_usuario": "",
        "edad": 19,
        "distrito": "Surco",
        "hobbies": ["jugar futbal"]
    },
    { 
        "id":2,
        "nombre" : "maria", 
        "apellido" : "flores huarhua", 
        "correo" : "luis@gmail.com",
        "dni": 123123123,
        "fecha_de_nacimiento": 1960,
        "nombre_usuario": "",
        "edad": 20,
        "distrito": "Los olivos",
        "hobbies": ["natacion"]
    },
    { 
        "id":3,
        "nombre" : "pepe", 
        "apellido" : "velazques", 
        "correo" : "pepe@gmail.com",
        "dni": 123123123,
        "fecha_de_nacimiento": 2000,
        "nombre_usuario": "",
        "edad": 21,
        "distrito": "San Isidro",
        "hobbies": ["jugar play"]
    },
    { 
        "id":4,
        "nombre" : "diego", 
        "apellido" : "perez del solar", 
        "correo" : "perez123@gmail.com",
        "dni": 123123123,
        "fecha_de_nacimiento": 2005,
        "nombre_usuario": "",
        "edad": 20,
        "distrito": "Villa maria del triunfo",
        "hobbies": ["parkour"]
    },
    { 
        "id":5,
        "nombre" : "carlos", 
        "apellido" : "flores belen", 
        "correo" : "carlos123@gmail.com",
        "dni": 123123123,
        "fecha_de_nacimiento": 1989,
        "nombre_usuario": "",
        "edad": 30,
        "distrito": "Miraflores",
        "hobbies": ["voley","ajedres"]
    },
    { 
        "id":6,
        "nombre" : "fatima", 
        "apellido" : "de la cruz dasdasdsadsa", 
        "correo" : "fatima@gmail.com",
        "dni": 123123123,
        "fecha_de_nacimiento": 1992,
        "nombre_usuario": "",
        "edad": 50,
        "distrito": "Villa el salvador",
        "hobbies": ["gimnasia"]
    },
    { 
        "id":7,
        "nombre" : "alan", 
        "apellido" : "garcia garcia", 
        "correo" : "carlos@gmail.com",
        "dni": 123123123,
        "fecha_de_nacimiento": 1952,
        "nombre_usuario": "",
        "edad": 25,

        "distrito": "San Gabriel",
        "hobbies": ["correr"]
    },
    { 
        "id":8,
        "nombre" : "diego", 
        "apellido" : "fujimori garcia", 
        "correo" : "krlos12.41@gmail.com",
        "dni": 123123123,
        "fecha_de_nacimiento": 1924,
        "nombre_usuario": "",
        "edad": 20,
        "distrito": "San isidro",
        "hobbies": ["comer"]
    },
    { "id":10,
        "nombre" : "cristian", 
        "apellido" : "sotomayor gonzales", 
        "correo" : "cristiansotomayor1913@gmail.com",
        "dni": 123123123,
        "fecha_de_nacimiento": 1998,
        "nombre_usuario": "",
        "edad": 17,
        "distrito": "San juan de miraflores",
        "hobbies": ["natacion"]
    }
]

// creacion del hashmap

const makeHash = (docs,key)=>{
    return docs.reduce((map,doc)=>{
        map[doc[key]]=doc
        return map
    },{})
}
const hashMap = makeHash(users,'id')
console.log(hashMap)