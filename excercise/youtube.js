let users = [
        {
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
        { 
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
let condition = user =>user.edad>=20 && user.edad<30
let newArr = users.filter(condition)
console.log(newArr)

/////////////////////////////////////////////////////////////////////

let newArrReduce = users.reduce((acc,curr)=>{
    if(condition(curr)) acc.push(curr)
    return acc
},[]) // ese [] significa el tipo de datos que sera el acumulado , es decir el valor inicial
console.log(newArrReduce)