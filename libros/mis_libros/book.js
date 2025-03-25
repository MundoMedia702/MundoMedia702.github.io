function goToBookPage(bookId) {
    window.location.href = `mis_libros/libro.html?id=${bookId}`;
}

document.addEventListener("DOMContentLoaded", function() {
    // El código para actualizar el título y otros elementos
    const bookId = new URLSearchParams(window.location.search).get('id');
    const books = {
        1: {
            title: "Imaginaria (Spanish Edition) - Kristopher Rodas",
            image: "/libros/image/001.png",
            description: "Imaginaria es un viaje al interior de la mente de un niño que trata de escapar de su realidad. Cansado de estar triste todo el tiempo, decide olvidar. Sin embargo, sus amigos imaginarios le harán recordar su camino hacia la oscuridad.",
            downloadLink: "https://compress-pdf.emapnet.com/",
            category: "ficcion-narrativa"
        },
        2: {
            title: "Ragnarok: El Camino de un Hombre",
            image: "/libros/image/069.png",
            description: "Estamos en una sociedad donde, más que nunca, es esencial construir una verdadera masculinidad. La sociedad actual busca debilitarte, quiere que seas manipulable, que sientas desesperación y, sobre todo, que estés en un estado de debilidad.",
            downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1Pl63WSqxjX_jgGOHJelj4R6KfawZyLw3&export=download",
            category: "ficcion-narrativa"
        },
        3: {
            title: "Desarrolla una mente prodigiosa",
            image: "/libros/image/002.png",
            description: "Todos podemos desarrollar y mejorar nuestra mente hasta límites insospechados.",
            downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=10osAaw40UZIbJSDEmVXQ5VSdEptC5zcU&export=download",
            category: "psicologia"
        },
        4: {
            title: "Manipulación y Psicología Oscura",
            image: "/libros/image/003.png",
            description: "En este libro, Alejandro Mendoza explora la psicología oscura y las técnicas más comunes de la manipulación. Si bien parecen términos complejos, utiliza un lenguaje práctico para entender cómo funciona esta rama de la psicología. También nos muestra cómo actúan las personas dañinas y de qué manera nos podemos defender de sus trucos. ¡Es momento de empezar!",
            downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1CjckXT08kN5sQOL_b7GQNVsc4yShBaxP&export=download",
            category: "psicologia"
        },
        5: {
            title: "Psicología Oscura Domine Las Técnicas Secretas de la Manipulación Emocional",
            image: "/libros/image/004.png",
            description: "Usted piensa que el control de la mente es imposible? Bueno, piense de nuevo.Basado en la investigación científica sobre psicología y comportamiento humano Psicología Oscura le enseñará como la mente humana trabaja, para así usted pueda entender mejor como influenciar a otros para su ventaja, mantenerse protegidos de políticos, medios o cualquier manipulador en su vida.",
            downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1Q3xSiV02HzxvKSeEXuSuugJ4TYQvAP3Q&export=download",
            category: "psicologia"
        },
        6: {
            title: "Cómo Analizar a Las Personas con Psicología",
            image: "/libros/image/005.png",
            description: "Esta biblia del lenguaje corporal te enseñará a descifrar lo que la gente piensa y siente con solo prestar atención a su comportamiento",
            downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=15nHgB0vEW30hcGhIOFkoB9BkzqMZOvXJ&export=download",
            category: "psicologia"
        },
        7: {
            title: "25 Técnicas aplicadas a campañas de Red Team y Hacking",
            image: "/libros/image/006.png",
            description: "Se trata de un libro completamente técnico en el que se explora cada una de las etapas involucradas en una campaña de Red Team. En él se enseñan por medio de procedimientos aplicados en casos reales, los detalles más relevantes que tienen en cuenta los equipos profesionales de Red Team: sus métodos, procedimientos y herramientas.",
            downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1zJ5GQAxXYvvhNZNCMUAnIVP7OCJktvLO&export=download",
            category: "literatura-tecnologica"
        },
        8: {
            title: "Ingeniería Social El Arte del Hacking Personal",
            image: "/libros/image/007.png",
            description: "La mayoría de ataques informáticos tienen un componente desafiante, doloroso, como un rugido. Sin embargo un ingeniero social experitado es un arma letal contra la que resulta casi imposible defenderse. Su singularidad y arriesgadas soluciones pueden arreglar las vulnerabilidades técnicas más imprevistas.",
            downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1Yzc174Y0nGQv3btSPXF1Q3lW4EKgwKDK&export=download",
            category: "literatura-tecnologica"
        },
        9: {
            title: "Web Hacking",
            image: "/libros/image/008.png",
            description: "Los capítulos de esta obra analizan las fallas de seguridad más frecuentes en aplicaciones web y explican cómo aprovechan los hackers estas vulnerabilidades. Se detallan técnicas como la manipulación de formularios y los ataques del lado del cliente.",
            downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1KaxKK0Wao_c0m_ttKyZvwyEA3rbzaNmj&export=download",
            category: "literatura-tecnologica"
        },
        10: {
            title: "Ethical Hacking 2.0",
            image: "/libros/image/009.png",
            description: "Esta obra fundamental va dirigida a todos aquellos técnicos, administradores de redes y entusiastas que quieran conocer o profundizar sobre las técnicas y herramientas utilizadas por los hackers. A través de sus páginas, abordaremos demostraciones prácticas y referencias documentales que nos permitirán analizar el impacto que tienen los ataques de los hackers.",
            downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1B-ahOunWXuCwoNMwF5r8KUT0iLEl5tp6&export=download",
            category: "literatura-tecnologica"
        },
        11: {
            title: "Hacking Etico 101 - Cómo hackear profesionalmente en 21 días o menos",
            image: "/libros/image/010.png",
            description: "¿Siente curiosidad sobre cómo realizan pruebas de intrusión los hackers? ¿Ha querido tomar cursos presenciales de hacking ético pero no tiene el tiempo o el dinero para hacerlo? Este libro tiene la respuesta para Usted.",
            downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1GqXsHOrR5dJZ_hDkUx6PBsehAIIEzhYF&export=download",
            category: "literatura-tecnologica"
        },
        12: {
            title: "La domesticación del azar la erosión del determinismo y el nacimiento de las ciencias del caos",
            image: "/libros/image/011.png",
            description: "La contingencia y el caos ocupan intensamente a la actual investigación científica. Se trata de una nueva revolución de la ciencia que está cambiando de manera sustancial el con-cepto de la naturaleza y que subvierte los principios y metas clásicos del pensamiento.",
            downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1qhZ8W9ERqtctV704GWOSIy4Mpy6VqNU7&export=download",
            category: "psicologia"
        },
        13: {
            title: "Linux Server Linux Server Hacks Los Mejores Trucos the Best Tricks",
            image: "/libros/image/012.png",
            description: "Linux es un sistema operativo de código abierto, libre y gratuito que está cambiando el mundo de la informática. Su potencia y flexibilidad implica que hay una increíble cantidad de software, esperando a resolver sus problemas de administración de sistemas.",
            downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1UVP76ypNPokzTOlymTrf133Q8PvGxrbO&export=download",
            category: "literatura-tecnologica"
        },
        14: {
            title: "Criptografía (USERS)",
            image: "/libros/image/013.png",
            description: "Criptografía: Desde los sistemas clásicos hasta el futuro de la privacidad de la editorial Red USERS.La obra, prologada por el profesor Jorge Eterovic de la Universidad de Morón, y por el Doctor Jorge Ramió Aguirre, reconocido criptógrafo español, empieza detallando al lector diferentes conceptos claves y básicos de la criptografía, enseñando diferentes técnicas en las que se basan los distintos algoritmos: sustitución, transposición y otras transformaciones.",
            downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1tGiccBzgfB6VC6CbdpIHsWkyXhUKkcXw&export=download",
            category: "literatura-tecnologica"
        },
        15: {
            title: "Criptografía Ofensiva. Atacando y defendiendo organizaciones Criptografía aplicada para pentesters, programadores y analistas",
            image: "/libros/image/014.png",
            description: "Llevo 18 años trabajando en el mundo de la ciberseguridad y la criptografía ha sido y es un pilar importante para garantizar la confidencialidad, integridad y autenticidad de las comunicaciones y datos.",
            downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=11wp8gJCtcIibKRFDfy8wEqOPQHOXFRgx&export=download",
            category: "literatura-tecnologica"
        },
        16: {
            title: "Criptografía sin secretos con python",
            image: "/libros/image/015.png",
            description: "La criptografía se ha definido tradicionalmente como el arte o la ciencia que se ocupa de alterar los textos escritos con el fin de hacerlos ininteligibles a receptores no autorizados. El único objetivo de la criptografía es conseguir la confidencialidad de los mensajes.",
            downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1afQMJLGuupNcYZTKfmMeM8qE2VdVyiVC&export=download",
            category: "literatura-tecnologica"
        },
        17: {
            title: "Hacking ético con herramientas Python",
            image: "/libros/image/016.png",
            description: "En los últimos años, Python se ha convertido en un lenguaje muy adoptado por la industria de la seguridad informática, debido a su simpleza, practicidad, además de ser un lenguaje tanto interpretado como de scripting. Su integración con multitud de librerías de terceros hace pensar en Python como un lenguaje con múltiples posibilidades tanto desde el punto de vista ofensivo como defensivo de la seguridad y ha sido utilizado para un gran número de proyectos incluyendo programación Web, herramientas de seguridad, scripting y automatización de tareas.",
            downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=16-qqqLtCVlE92x5Srg3205zRLvNCzc4e&export=download",
            category: "literatura-tecnologica"
        },
        18: {
            title: "Matemáticos, espías y piratas informáticos codificación y criptografía",
            image: "/libros/image/017.png",
            description: "Códigos secretos, encriptados, claves descifradas que ayudaron a ganar guerras y cambiaron el curso de la historia, virus informáticos… Cómo los espías, hackers y quienes los persiguen se sirven de las matemáticas.",
            downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1PEBlMbcoqiRL1sUNoyOtjRdvkDYRh6pL&export=download",
            category: "literatura-tecnologica"
        },
        19: {
            title: "Web Hacking 101 en Español - Cómo hacer dinero hackeando éticamente",
            image: "/libros/image/018.png",
            description: "El libro cubre varias técnicas comunes de hacking como inyección de HTML, contaminación de parámetros HTTP, inyección de CRLF, falsificación de solicitudes entre sitios, vulnerabilidades en la lógica de aplicaciones, ataques de script entre sitios, inyección SQL y más.",
            downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1XbVRYUT8IvAVFljP8tovf27uPk2azk4j&export=download",
            category: "literatura-tecnologica"
        },
        20: {
            title: "Curso de diseño y programaciòn de videojuegos, Fasciculo 1",
            image: "/libros/image/019.png",
            description: "El videojuego es una forma de expresión artística con innumerables posibilidades. Dar forma a una idea de juego y poder compartirla con otros es una actividad apasionante y satisfactoria. Una herramienta profesional gratuita como Unity nos da la oportunidad de aprender a hacerlo y mejorar nuestras habilidades con cada proyecto.",
            downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1NQ3I7bKHsUnkNcU36T7kF7Imb9spzpuw&export=download",
            category: "literatura-tecnologica"
        },
        21: {
            title: "Diseño Y Programacion De Paginas Web",
            image: "/libros/image/020.png",
            description: "Este documento presenta una introducción al diseño y programación de páginas web. Explica los conceptos básicos necesarios para publicar una página web, incluyendo el lenguaje HTML, editores de páginas web, alojamiento web y más.",
            downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1uGLpZlV6ZXzGTqLlITSPiC-vBt-JzcCv&export=download",
            category: "literatura-tecnologica"
        },
        22: {
            title: "El aprendiz de brujo manual de ejercicios prácticos de Programación Neurolingüística",
            image: "/libros/image/021.png",
            description: "La PNL (Programación Neurolingüística) ofrece numerosas y distintas estrategias de aprendizaje, concebidas especialmente para alcanzar ciertos objetivos y para enfrentarse a determinadas estructuras problemáticas. Con este sistema los individuos pueden adquirir capacidades que nunca habían considerado que podían estar a su alcance.",
            downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=15E_A5HWUFWPGQC3YLGWGWXUZkZSR2GI7&export=download",
            category: "literatura-tecnologica"
        },
        23: {
            title: "El Microcontrolador ATMega328P de Microchip Programación en Ensamblador, Lenguaje C y un enlace con Arduino",
            image: "/libros/image/022.png",
            description: "El Microcontrolador ATMega328P de Microchip: Programaci´ on en Ensamblador, Lenguaje C y un enlace con Arduino Felipe Santiago Espinosa Universidad Tecnol´ ogica de la Mixteca Km. 2.5 Carretera a Acatlima Huajuapan de Le´ on, Oaxaca M´exico 1a Edici´ on, 19 de noviembre de 2021 ISBN: 978-607-98020-9-7 D.R. 2021 U.T.M.",
            downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1xqeDXNITjIvcGS9_gV9sS35XejxnXMcN&export=download",
            category: "literatura-tecnologica"
        },
        24: {
            title: "Fundamentos de Programación Piensa en C",
            image: "/libros/image/023.png",
            description: "Esta obra cuenta con un enfoque orientado a enseñar, hacer entender y hacer ver al lector cómo resolver un problema, cómo obtener su solución, y luego cómo programar esta solución utilizando un lenguaje de programación de alto nivel.",
            downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1vxJEJKdJaS1jbhXcx69YpYenp37zdQeS&export=download",
            category: "literatura-tecnologica"
        },
        25: {
            title: "Introducción a la computación y a la programación estructurada",
            image: "/libros/image/024.png",
            description: "Este texto universitario (424 págs.) tiene como propósito estudiar las técnicas elementales que intervienen en la moderna programación de computadoras digitales.",
            downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1MsnBQ48Jzee86DSMPts1C_4BS6KjLiV4&export=download",
            category: "literatura-tecnologica"
        },
        26: {
            title: "Introducción a la programación orientada a objetos",
            image: "/libros/image/025.png",
            description: "La programación orientada a objetos (OOP) es un paradigma de programación que se puede usar para modelar el mundo real en el código. El uso de este paradigma tiene varias ventajas. Con la OOP, puede crear implementaciones fáciles de modificar y extender con menos código.",
            downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1UthRAOwz4wW94eM30iY59JjRw-lSzDxu&export=download",
            category: "literatura-tecnologica"
        },
        27: {
            title: "Programación en Java, Vol. 3",
            image: "/libros/image/026.png",
            description: "Java es un lenguaje de programación que sigue afianzándose como un estándar de la Web y, por eso, año tras año, aparece en el tope de las búsquedas laborales de programadores. Es por esto que hemos creado este curso de Programación en Java, donde encontrarán todo lo necesario para iniciarse o profundizar sus conocimientos en este lenguaje de programación.",
            downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1REjjaFfY-CqUm60zxwOXpWYBftd4FNId&export=download",
            category: "literatura-tecnologica"
        },
        28: {
            title: "Programación en Java, Vol. 2",
            image: "/libros/image/027.png",
            description: "Java es uno de los lenguajes más robustos y populares en la actualidad, existe hace más de 20 años y ha sabido dar los giros adecuados para mantenerse vigente.",
            downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1Q2aTXGIIo0Inif-p4T-EkTqx-KFW3MKI&export=download",
            category: "literatura-tecnologica"
        },
        29: {
            title: "Programación en Java, Vol. 4",
            image: "/libros/image/028.png",
            description: "Java es uno de los lenguajes más robustos y populares en la actualidad, existe hace más de 20 años y ha sabido dar los giros adecuados para mantenerse vigente. Este curso de Programación en Java nos enseña, desde cero, todo lo que necesitamos para aprender a programar y, mediante ejemplos prácticos, actividades y guías paso a paso, nos presenta desde las nociones básicas de la sintaxis y codificación en Java hasta conceptos avanzados como el acceso a bases de datos y la programación para móviles.",
            downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1dsPy9K6VPVHgGJC-_Svf3_BeJWh8Y-Q6&export=download",
            category: "literatura-tecnologica"
        },
        30: {
            title: "Programación orientada a objetos con Java una introducción práctica usando BlueJ",
            image: "/libros/image/029.png",
            description: "La presente edición de este título presenta una excelente e innovador aspecto docente para adentrarse en el mundo de la Programación Orientada a Objetos.",
            downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1SE2QBZQG2FIB3tSWhqwcilU9YDP0JRnc&export=download",
            category: "literatura-tecnologica"
        },
        31: {
            title: "Robótica Avanzada Construcción y Programación de Robots",
            image: "/libros/image/030.png",
            description: "Esta obra nos permitirá ingresar al fascinante mundo de la robótica. Desde el ensamblaje de las partes hasta su puesta en marcha, todo el proceso está expuesto de forma didáctica y sencilla para así crear nuestros propios robots avanzados.",
            downloadLink: "https://drive.usercontent.google.com/u/0/uc?id=1URcW8k8VfJNsfdRSisJ1r1iM1AdrHkPg&export=download",
            category: "literatura-tecnologica"
        },
        32: {
            title: "ética hacker seguridad y vigilancia",
            image: "/libros/image/031.png",
            description: "Los invitados presentaron el libro Etica Hacker, seguridad y vigilancia, dicho libro fue el tema central del programa pues sirvio para que el radioescucha conociera de la existencia del software libre, asi como de la reduccion de costos economicos, que significa actualmente para las empresas e instituciones, la aplicacion de estas tecnologias, se hablo tambien de los avances tecnologicos digitales de vanguardia y de las consecuencias que traen para la sociedad contemporanea.",
            downloadLink: "https://core.ac.uk/download/pdf/78393187.pdf",
            category: "literatura-tecnologica"
        },
        33: {
            title: "Google Hacking for Penetration Testers",
            image: "/libros/image/032.png",
            description: "Google is the most popular search engine ever created, but Google’s search capabilities are so powerful, they sometimes discover content that no one ever intended to be publicly available on the Web, including social security numbers, credit card numbers, trade secrets, and federally classified documents.",
            downloadLink: "https://www.blackhat.com/presentations/bh-europe-05/BH_EU_05-Long.pdf",
            category: "literatura-tecnologica"
        },
        34: {
            title: "Ethical Hacking",
            image: "/libros/image/033.png",
            description: "This book has been generously distributed by the University of Ottawa Press under a Creative Commons License. Buying it would be great but it is also available in its entirety online via Google Books.",
            downloadLink: "https://ruor.uottawa.ca/server/api/core/bitstreams/d55069bb-d54d-4670-adbb-0ee6192ae936/content",
            category: "literatura-tecnologica"
        },
        35: {
            title: "Ejercicios de Programación en Java",
            image: "/libros/image/034.png",
            description: "Esta obra está publicada bajo una licencia: Creative Commons Reconocimiento-No Comercial-Sin Obra Derivada 3.0 España, que le permite copiar, distribuir y comunicar públicamente la obra, siempre y cuando reconozca el crédito del autor, lo haga sin fines comerciales y no altere, transforme o genere una obra derivada a partir de ésta.",
            downloadLink: "https://elhacker.info/manuales/Lenguajes%20de%20Programacion/Java/Ejercicios-de-Programacion-en-Java.pdf",
            category: "literatura-tecnologica"
        },
        36: {
            title: "Odisea, de Homero",
            image: "/libros/image/035.png",
            description: "La odisea es un poema épico que cuenta las aventuras de Odiseo, también conocido como Ulises, en su viaje de regreso a su patria, Ítaca. La historia comienza cuando finaliza la guerra de Troya, narrada en la Ilíada, hasta el momento en que finalmente vuelve a su hogar, muchos años después.",
            downloadLink: "http://bibliotecadigital.ilce.edu.mx/Colecciones/ObrasClasicas/_docs/Odisea.pdf",
            category: "ficcion-narrativa"
        },
        37: {
            title: "Don Quijote de la Mancha",
            image: "/libros/image/036.png",
            description: "Don Quijote de la Mancha es una novela de Miguel de Cervantes que narra las aventuras de Don Quijote, un hidalgo que, influenciado por los libros de caballerías, decide convertirse en un caballero andante. Acompañado de su fiel escudero Sancho Panza, un campesino práctico, Don Quijote recorre España en busca de hazañas heroicas, convencido de que debe defender el honor y la justicia",
            downloadLink: "https://cvc.cervantes.es/literatura/lee/coleccion/pdf/quijote.pdf",
            category: "ficcion-narrativa"
        },
        38: {
            title: "El codigo Da Vinci",
            image: "/libros/image/037.png",
            description: "El Código Da Vinci de Dan Brown es un thriller de misterio que sigue al profesor de simbología Robert Langdon y a Sophie Neveu, una criptóloga, mientras intentan resolver un asesinato en el Museo del Louvre en París. La víctima, Jacques Saunière, deja una serie de pistas en su muerte que apuntan a un misterio ancestral relacionado con el Santo Grial.",
            downloadLink: "https://usercontent.one/wp/www.puro-geek.com/wp-content/uploads/2021/11/El-codigo-Da-Vinci-Dan-Brown.pdf?media=1630018077",
            category: "ficcion-narrativa"
        },
        39: {
            title: "Diez negritos",
            image: "/libros/image/038.png",
            description: "Diez negritos (también conocida por su título en inglés And Then There Were None) es una novela de Agatha Christie, considerada una de las mejores obras de la autora. Se trata de una historia de misterio y suspenso en la que diez personas son invitadas a una isla aislada bajo diferentes pretextos, pero pronto descubren que están siendo acusadas de crímenes pasados.",
            downloadLink: "https://web.seducoahuila.gob.mx/biblioweb/upload/Diez%20negritos.pdf",
            category: "ficcion-narrativa"
        },
        40: {
            title: "Alicia en el país de las maravillas",
            image: "/libros/image/039.png",
            description: "Alicia en el País de las Maravillas (Alice's Adventures in Wonderland) es una famosa novela escrita por Lewis Carroll (seudónimo de Charles Lutwidge Dodgson), publicada por primera vez en 1865. Es un cuento de fantasía que sigue las aventuras de Alicia, una niña curiosa que, tras seguir a un conejo blanco, cae por un agujero en el suelo y se encuentra en un mundo extraño y surrealista llamado el País de las Maravillas.",
            downloadLink: "https://www.ucm.es/data/cont/docs/119-2014-02-19-Carroll.AliciaEnElPaisDeLasMaravillas.pdf",
            category: "ficcion-narrativa"
        },
        41: {
            title: "Las aventuras de Sherlock Holmes",
            image: "/libros/image/040.png",
            description: "Las aventuras de Sherlock Holmes (The Adventures of Sherlock Holmes) es una colección de doce relatos de Arthur Conan Doyle, publicados entre 1891 y 1892. En estos cuentos, el famoso detective Sherlock Holmes y su leal amigo y narrador, Dr. John Watson, resuelven una serie de casos intrigantes, en su mayoría centrados en misterios aparentemente irresolubles que requieren el agudo ingenio y las extraordinarias habilidades de observación de Holmes.",
            downloadLink: "https://libros.metabiblioteca.org/server/api/core/bitstreams/a19d9afa-b786-4541-94f8-5b4790128826/content",
            category: "ficcion-narrativa"
        },
        42: {
            title: "El Hobbit",
            image: "/libros/image/041.png",
            description: "El Hobbit, escrito por J.R.R. Tolkien, es una novela de fantasía publicada en 1937. Es la precuela de su famosa trilogía El Señor de los Anillos y sigue las aventuras de Bilbo Bolsón, un hobbit tranquilo y algo reacio a la aventura, que se ve inesperadamente envuelto en una peligrosa misión.",
            downloadLink: "https://web.seducoahuila.gob.mx/biblioweb/upload/J.R.R.%20Tolkien%20-%20El%20Hobbit.pdf",
            category: "ficcion-narrativa"
        },
        43: {
            title: "El señor de los anillos",
            image: "/libros/image/042.png",
            description: "El Señor de los Anillos (The Lord of the Rings) es una trilogía épica de fantasía escrita por J.R.R. Tolkien, publicada entre 1954 y 1955. La historia se desarrolla en la ficticia Tierra Media y sigue la lucha contra el mal encarnado por el Oscuro Señor Sauron, quien busca recuperar el Anillo Único, un artefacto mágico con el poder de dominar toda la Tierra Media.",
            downloadLink: "https://web.seducoahuila.gob.mx/biblioweb/upload/J.R.R.%20Tolkien%20La%20Comunidad%20del%20anillo%20I.pdf",
            category: "ficcion-narrativa"
        },
        44: {
            title: "El alquimista",
            image: "/libros/image/043.png",
            description: "El Alquimista es una novela escrita por Paulo Coelho, publicada en 1988. Se trata de una obra filosófica y de autodescubrimiento que ha sido traducida a numerosos idiomas y se ha convertido en un éxito internacional.",
            downloadLink: "https://mep.janium.net/janium/Documentos/286143.pdf",
            category: "ficcion-narrativa"
        },
        45: {
            title: "1984 - George Orwell",
            image: "/libros/image/044.png",
            description: "1984 es una novela distópica escrita por George Orwell, publicada en 1949. Ambientada en un futuro totalitario, la obra es una crítica feroz al autoritarismo y la vigilancia masiva, y explora temas como la manipulación de la verdad, la opresión social, y la pérdida de la libertad individual.",
            downloadLink: "https://www.suneo.mx/literatura/subidas/George%20Orwell%201984.pdf",
            category: "ficcion-narrativa"
        },
        46: {
            title: "Guerra y Paz",
            image: "/libros/image/045.png",
            description: "Guerra y Paz (War and Peace) es una novela histórica escrita por León Tolstói, publicada entre 1865 y 1869. Considerada una de las más grandes obras de la literatura mundial, la novela está ambientada en la época de las guerras napoleónicas (1812) y sigue la vida de varias familias aristocráticas rusas mientras se ven afectadas por los acontecimientos históricos.",
            downloadLink: "https://www.biblioteca.org.ar/libros/133591.pdf",
            category: "ficcion-narrativa"
        },
        47: {
            title: "Deadpool mata al Universo Marvel otra vez",
            image: "/libros/image/046.png",
            description: "En Deadpool kills the marvel universe agan! ¡El escritor y artista del matadero original se reúne! ¡Prepárate para una historia de muerte y destrucción completamente nueva y completamente diferente protagonizada por Merc With A Mouth! No vas a creer lo que ves cuando Deadpool mata a todo el Universo Marvel … ¡otra vez!",
            downloadLink: "https://download1076.mediafire.com/d14g984q3chgAg6jPgzvU7ZDjDN6y3m1umjTqYIxzMJl3vRgkMxywc9zjfWAg4dKKq6QMC2ESHDRIrlMK5Afx-WLHF6l4h1yrHJTij3bn-N0nKl9qnUn1qJRToeRhBcU-ZrvXjcAFBMb9BiEmVXr94ylwmAjWSgVV_wDx7vtFE2BgqI/9g9ohw45rcl5k1z/D34dp00l+Kills+Th3+M4rv3l+Un1v3rs3+Ag41n.rar",
            category: "comics"
        },
        48: {
            title: "Deadpoll mata al Universo Marvel",
            image: "/libros/image/047.png",
            description: "En Deadpool kills the marvel universe agan! ¡El escritor y artista del matadero original se reúne! ¡Prepárate para una historia de muerte y destrucción completamente nueva y completamente diferente protagonizada por Merc With A Mouth! No vas a creer lo que ves cuando Deadpool mata a todo el Universo Marvel … ¡otra vez!",
            downloadLink: "https://mega.nz/file/MdpHVaxA#W6M8Sr0cNDTXQGVbRLm7SVH_BWsL2u81sZ-NfjwyASU",
            category: "comics"
        },
        49: {
            title: "World War Hulks",
            image: "/libros/image/048.png",
            description: "La trama de la serie es la continuación de los eventos que iniciaron luego de que algunos de los Illuminati, un equipo secreto de héroes, entre ellos Iron Man, Dr. Strange, Black Bolt y Reed Richards, engañaran al Dr. Bruce Banner para que realizara una tarea en el espacio, en la que necesitaban de la ayuda del gigante verde. ",
            downloadLink: "https://mega.nz/folder/MEh3XCzT#bpjlOS1eRtrQ73Am3DixeA",
            category: "comics"
        },
        50: {
            title: "The Punisher vs Deadpool",
            image: "/libros/image/049.png",
            description: "Frank Castle tiene una voluntad imparable, un poderoso impulso para castigar a quienes hacen el mal, arraigado en el trágico asesinato de su familia. Wade Wilson tiene una boca imparable, una habilidad irreflexiva para molestar a todos los que lo rodean, arraigada en la idea de que es gracioso.",
            downloadLink: "https://download2260.mediafire.com/4158ur63kpyg7yLj1E7fCkBOeztm4FAxMMdF8il-ATSTbHPfgPcsVRz0r5szZIkg8isS4LxsA3IW-xuUB0PlGjxJnQOcNWoEzY1KGXhY7gMuFVzmHO4m5cQvRAB2La902C0pLL7ctgi10NevK8PHoiQS0EOFxp3vTaXt8sREG2Iyc5s/a5sugryye7qg6br/Deadpool+Vs+The+Punisher.rar"
        },
        51: {
            title: "Deadpool vs Thanos",
            image: "/libros/image/050.png",
            description: "fue maldecido por este villano con la vida eterna, y además de un odio infinito. En este crossover van a tener una locura de enfrentamiento que aunque parezca desigual, no evitará una pelea muy divertida que pondrá las cosas muy difíciles a Thanos.",
            downloadLink: "https://download1650.mediafire.com/03ysgk0gelrgmxPjoN6tTcJmFN5w_ckWJYZRXoEL6ggzqmIFIVVX6Nzcb8xTbasEruB9fB9hA3--NCJLNqd6RcJICRPvmxFogBs3YkaPyg36SJ--En3QoXhe4YidbciliPe8KnKQlXRoS0jEVF-9S3SXgw2na217rr8Dm5WxpyejPDk/0afm2aktcmzwjho/Deadpool+vs+Thanos.zip",
            category: "comics"
        },
        52: {
            title: "Deadpool vs Carnage",
            image: "/libros/image/051.png",
            description: "¡Vengan todos, vengan al enfrentamiento más sangriento que el Universo Marvel haya visto jamás! ¡Son dos locos vestidos de rojo por el precio de uno cuando Deadpool se enfrenta a Carnage en la batalla definitiva de los buenos locos contra los malos locos! ¿Carnage esparcirá a Deadpool por todo el paisaje? ¿O Deadpool hablará hasta por los codos al sociópata escarlata? ¡Descúbrelo en este alboroto empapado de sangre para la historia!",
            downloadLink: "https://mega.nz/folder/3UxlQAwD#zpyAGjHpECed7KJYo7rUMg",
            category: "comics"
        },
        53: {
            title: "Deadpool Back in Black",
            image: "/libros/image/052.png",
            description: "Deadpool: Back in Black es una continuación de la estupenda miniserie de Secret Wars en la que Cullen Bunn repasaba el evento original de 1985 bajo otro foco. Un suceso menor de la trama consistía en la unión de Deadpool y el simbionte que a la postre se convertiría en Venom antes de que Spider-Man se lo encontrara. Y de ahí parte esta nueva miniserie.",
            downloadLink: "https://mega.nz/file/urpEiAZZ#wWTxhysyki8rnuc8uILo-WwBgePdGumj5uah__pUuHY",
            category: "comics"
        },
        54: {
            title: "Spiderman 2099",
            image: "/libros/image/053.png",
            description: "Como Spiderman, Miguel O´Hara lleva un disfraz del Día de Muertos de México realizado con moléculas inestables, lo cual le hace irrompible. El disfraz posee unos espolones en los antebrazos y es azul, con líneas rojas en el pecho y máscara que forman un dibujo mezcla de calavera y araña.",
            downloadLink: "https://mega.nz/folder/mN0E2KzK#PP_Uz3jk9K361F4OuK0d6g",
            category: "comics"
        },
        55: {
            title: "El gran Gatsby",
            image: "/libros/image/054.png",
            description: "En El Gran Gatsby, Nick Carraway, un joven escritor, se traslada a Long Island durante la vibrante década de 1920. Su vida se enreda con la de Jay Gatsby, un enigmático anfitrión de lujosas fiestas que busca desesperadamente reconquistar a su antiguo amor, Daisy Buchanan.",
            downloadLink: "https://www.imprentanacional.go.cr/editorialdigital/libros/literatura%20universal/el_gran_gatsby_edincr.pdf",
            category: "ficcion-narrativa"
        },
        56: {
            title: "Veinte mil leguas de viaje submarino",
            image: "/libros/image/055.png",
            description: "Cuando de forma inesperada varios buques en distintos mares empiezan a sufrir el ataque de una monstruosa criatura marina que los manda a pique, periódicos y científicos de todo el mundo debaten alarmados acerca de la naturaleza del misterioso animal y de las causas de su comportamiento.",
            downloadLink: "https://www.biblioteca.org.ar/libros/656610.pdf",
            category: "ficcion-narrativa"
        },
        57: {
            title: "Las aventuras de Huckleberry Finn",
            image: "/libros/image/056.png",
            description: "El clásico de Mark Twain Las aventuras de Huckleberry Finn (1884) está narrado desde el punto de vista de Huck Finn, un adolescente apenas alfabetizado que finge su propia muerte para escapar de su padre borracho y maltratador . Se encuentra con un esclavo fugitivo llamado Jim y los dos se embarcan en un viaje en balsa por el río Mississippi.",
            downloadLink: "https://web.seducoahuila.gob.mx/biblioweb/upload/las_aventuras_de_huckleberry_finn.pdf",
            category: "ficcion-narrativa"
        },
        58: {
            title: "GTA con mods",
            image: "/libros/image/057.png",
            description: "La modificación por parte del usuario, o modding , de los videojuegos de la serie sandbox de mundo abierto Grand Theft Auto es una tendencia popular en la comunidad de juegos de PC .",
            downloadLink: "https://download1523.mediafire.com/l6pv1ayrbfdgk_JQke89q03gZl6M9ln6TaleDYT_iFYKejSHP6kx6YDStlqUV3UYl7_CSxFkQQ5OYcNq7lZeuxuwafjEuzG1TZAqvWvUxCoTuGn8oBxQnz6RvBxC_f1ATf7Ag-TRjVFoommv4aBQucjt-N3GA3O7f4-FV17vg262YDE/d89eumdir7tuzib/Gta+sa+y+Cleo+by+Adrielito+Gamer.rar",
            category: "games"
        },
        59: {
            title: "GTA san andreas",
            image: "/libros/image/058.png",
            description: "Hace cinco años, Carl Johnson escapó de las presiones de la vida en Los Santos, San Andreas, una ciudad destrozándose con problemas de pandillas, drogas y corrupción. Ahora, son principios de los 90. Carl tiene que irse a casa, pero su familia se ha desmoronado y sus amigos de la infancia se dirigen hacia el desastre. Para empeorar las cosas, acaba de ser enmarcado por homicidio. CJ se ve obligado a un viaje que lo lleva a través de todo el estado de San Andreas, para salvar a su familia y tomar el control de las calles.",
            downloadLink: "https://download2391.mediafire.com/ep65s8x7ingg0MthffIYBRwGz0-QPHkD0npVmB5aR7N5gTwXxlybbVNuVMJK3U_GBKrkIaZGahdrNcRrI1pDN2VGiwqXlzSiO1fckgqg_76E9_0mw__uDlrHL4UVz9AaViMSaYsXgQt_cEYX7GDU4L8OKT3qMTcne7PJN3WlDkoRtwQ/dpe1lz6628iid3w/GTA.rar",
            category: "games"
        },
        60: {
            title: "Resident Evil 4 Ultimate HD Edition",
            image: "/libros/image/059.png",
            description: "La nueva versión de Resident Evil 4 incluye una gran mejora gráfica con una resolución a 1080p y 60 FPS. En lo que respecta a mecánicas de juego, este Resident Evil 4 sigue siendo exactamente igual al original, con los mismos modos de juego, trajes alternativos, armas desbloqueables, etc.",
            downloadLink: "https://mega.nz/file/NuBHiTBC#T71wbJb-W5-rlChf2kLGksRiCse8hwcNm65uogUsl8o",
            category: "games"
        },
        61: {
            title: "Need for speed most wanted",
            image: "/libros/image/060.png",
            description: "Need for Speed: Most Wanted es un videojuego de carreras desarrollado por EA Black Box y lanzado primero por Electronic Arts el 16 de noviembre de 2005 en los Estados Unidos. Es parte de la serie de videojuegos Need for Speed. El juego reintroduce persecuciones policíacas hacia un juego orientado a las carreras ilegales, con ciertas opciones de personalización. El juego sigue una línea de historia muy distinta que no guarda relación directa con los acontecimientos de Need for Speed: Underground y Need for Speed: Underground 2 y en 2006 sería lanzado una secuela del juego titulado: Need for Speed: Carbon, el cual sirve como la segunda parte de Most Wanted.",
            downloadLink: "https://mega.nz/file/EI9SHaZT#U_rs1TgBq9nE9vw9A_BMtAqVxi6uY6eeaifzAQhs6IM",
            category: "games"
        },
        62: {
            title: "Crash Bandicoot: Coleccion Portable",
            image: "/libros/image/061.png",
            description: "Crash Bandicoot es un videojuego de plataformas desarrollado por Naughty Dog y publicado por Sony Computer Entertainment para la PlayStation en 1996. El jugador controla a Crash, un bandicut mejorado genéticamente creado por el científico loco Doctor Neo Cortex.",
            downloadLink: "https://drive.google.com/file/d/1OeXnoVw8_2wDI9PtpsA6M8tLunvuMiS5/view",
            category: "games"
        },
        63: {
            title: "X-MEN 2",
            image: "/libros/image/062.png",
            description: "X-Men 2: Clone Wars es un juego de plataformas de 1995 desarrollado por Headgames y lanzado por Sega of America para Mega Drive/Genesis como una secuela de X-Men de 1993. El juego está basado en las aventuras del equipo de superhéroes de Marvel Comics, los X-Men. Una secuela, titulada X-Women, fue cancelada.",
            downloadLink: "https://download1586.mediafire.com/0wbmu59v52wgSy9RNJ4hd1jwYvGCZgmQVgnnLR7R8zsJ-yGFGud5IQ_99iOjsgQnsMCq2g38Kaa-WJo8rnCH_m12nfAf0arJEUMmVocaW-b4cQTnGXnLmI_e22L7z61z3w9Y11UUCvjHo-Ds_1o7UOXFqszMwWqjp9_O9Jd5_EZE_x4/eqj8v6tg5qycbd2/X-MEN+2+portable.exe",
            category: "games"
        },
        64: {
            title: "Call of Duty 2",
            image: "/libros/image/063.png",
            description: "Call of Duty 2 es un juego de acción en primera persona que se desarrolla durante la Segunda Guerra Mundial , y es la segunda entrega principal de la saga Call of Duty. Es la secuela de Call of Duty y fue lanzado el 25 de octubre de 2005 para PC, el 15 de noviembre de 2005 para Xbox 360 y el 26 de mayo de 2006 para Mac OS X. Fue desarrollado por Infinity Ward y publicado por Activision. Fue relanzado en Call of Duty: The War Collection como parte de un paquete.",
            downloadLink: "https://download2391.mediafire.com/jha822n741hgTtcckGve4ffrvNH9ZlGwWxeWEavvVDPQhpe4u3upH7jTHSquxWlR9-ovdGBN4NW20Cx07tChNb7OZEd_BdOzzjEMdK-LWZBcuIK-x87zMFd53CboYLXdPhkMDNzkv_iXB7iDJtVXCIOkA-16qUdcinjCvYrgBDfdu3M/bhkl4j8qh9vz5i1/Karlos+Duti+Dos+by+DagaGamer.rar",
            category: "games"
        },
        65: {
            title: "Slender: The Arrival",
            image: "/libros/image/064.png",
            description: "Slender Man regresa más aterrador que nunca. Estás a solas. Nadie vendrá a buscarte. Nadie te va a ayudar. Nadie te oirá gritar. Revívelo con innovadores efectos visuales en su 10.º aniversario y experimenta el terror en su máxima expresión.",
            downloadLink: "https://mega.nz/file/lIxH0KgS#b8dJlG_dnB7x8aCrJs7-Xdpi5tWOsnD6pDZffVTzO-o",
            category: "games"
        },
        66: {
            title: "POSTAL 4: No Regerts",
            image: "/libros/image/065.png",
            description: "Han pasado muchos años desde los hechos que devastaron la una vez orgullosa ciudad de Paradise. Los únicos dos que salieron ilesos del cataclismo, el desafortunado hombre de a pie conocido como POSTAL Dude y su fiel compañero Champ, viajan sin rumbo hacia el abrasador desierto de Arizona en busca de un nuevo lugar al que llamar hogar. Después de que una parada en una gasolinera terminase en el robo su coche, remolque y el resto de sus posesiones terrenales, todo lo que le parece quedar a POSTAL Dude es su compañero canino y su albornoz, y ninguno de los dos huele particularmente bien.",
            downloadLink: "https://mega.nz/file/1NoURKTJ#vhK3oumj-l6dO7HKcHW0vrTamxR5tgCxWzYfnZp9ja0",
            category: "games"
        },
        67: {
            title: "Resident Evil: Survivor",
            image: "/libros/image/066.png",
            description: "Resident Evil: Survivor, o también conocido en Japón como Biohazard: Gun Survivor (バイオハザード ガンサバイバー Baiohazādo Gan Sabaibā?), es un videojuego que salió para PlayStation en el año 2000, con una conversión para PC que apareció en el 2002, exclusivamente en Taiwán. Es un juego de survival horror en primera persona canónico del universo de Resident Evil y el último juego de la saga lanzado para la primera PlayStation.",
            downloadLink: "https://mega.nz/file/OgBwlapD#Yn_OL6LpchHSPNjzpAM8lin3tSFsX_kdbqJJOkvEEGo",
            category: "games"
        },
        68: {
            title: "Pink Panther: Pinkadelic Pursuit",
            image: "/libros/image/067.png",
            description: "Pink Panther: Pinkadelic Pursuit (aka Růžový panter: Honba za pokladem) is a video game published in 2002 on Windows by CD Projekt Sp. z o.o., Wanadoo Edition, CD Projekt Czech s.r.o., SeVeN M Kft., Levné knihy KMa. It's an action game, set in a fantasy, licensed title, platform and puzzle elements themes.",
            downloadLink: "https://download1326.mediafire.com/clhkah7f69ag0knCC34yM2wvv7LkV2bS0zLYQZXAn2wrBdvwtDSNUZTP52HQyRVu7MIeTuriQp9C8USAvi2ans1Dyk01meMnSfmMYxmtwnglkNwYLYpE4O5Hple9f83mVdlFNq5eyeKchUrZGAOfcQ6RX3126CnSbu8vn28Syw9g4H0/ardjba56ju084ty/La+Pantera+Rosa+By+editutorial123456.rar",
            category: "games"
        },
        69: {
            title: "Alien Trilogy",
            image: "/libros/image/068.png",
            description: "Alien Trilogy es un videojuego de 1996 publicado por Acclaim Entertainment para PC, PlayStation y Sega Saturn. El videojuego se basa en las tres primeras películas de la franquicia Alien: Alien, Aliens y Alien³. A pesar de que el videojuego se basa en las películas, se desarrolla en una versión alterada de Aliens.",
            downloadLink: "https://mega.nz/file/Ugl2WZSB#SKPIYQ--9N_yBH-9m4nbV0iQrysGQfsp9oBpWJEoPN8",
            category: "games"
        },
        70: {
            title: "MIST SURVIVAL",
            image: "/libros/image/070.png",
            description: "MIST SURVIVAL es un juego tipo sandbox de supervivencia con zombis para un solo jugador.Los jugadores tienen que sobrevivir a las dificultades.",
            downloadLink: "https://docs.google.com/presentation/d/14poGys-PPz4Vn3KKF6JHiLNt2WbblmxvfTC_xrDT1TU/edit?usp=sharing",
            category: "games"
        },
        71: {
            title: "El arte de la intrusión: cómo ser un hacker o evitarlos",
            image: "/libros/image/071.png",
            description: "El arte de la intrusión ha sido incluso más dificil de escribir que nuestro último libro. En lugar de utilizar nuestros talentos creativos combinados para desarrollar historias y anécdotas que ilustren los peligros de la ingeniería social y qué pueden hacer las empresas para mitigar los riesgos, Bill Simon y yo hemos trabajado principalmente sobre las entrevistas de ex hackers, phreakers y hackers convertidos a profesionales de la seguridad.",
            downloadLink: "https://drive.google.com/file/d/1dcsoA1bkFlAHi5ZXNeChrJ5Yd4NcVKJL/view?usp=drive_link",
            category: "literatura-tecnologica"
        },
        72: {
            title: "Privacidad y Ocultación de Información Digital. Esteganografía. Protegiendo y atacando redes informáticas",
            image: "/libros/image/072.png",
            description: "El ingenio humano es ilimitado a la hora de proteger nuestros más valiosos secretos nadie guarda mejor un secreto que el que lo ignora Este libro pretende acercar al lector con un lenguaje accesible el potencial de las múltiples técnicas modernas para proteger y compartir sus secretos. Hoy día su utilidad supera con creces sus orígenes dedicados a entornos militares diplomacia y servicios secretos",
            downloadLink: "https://drive.google.com/file/d/1ePrg_60QSSSWr9dhqsR0Qi96e8vAe7w5/view?usp=drive_link",
            category: "literatura-tecnologica"
        },
        73: {
            title: "Ethical Hacking: Teoría y práctica para la realización de un pentesting",
            image: "/libros/image/073.png",
            description: "...",
            downloadLink: "https://drive.google.com/file/d/1114P2XnC128VzUEDPfCJ0Gy_3UEWZkVM/view?usp=drive_link",
            category: "literatura-tecnologica"
        },
        74: {
            title: "Google Hacking para Pentesters",
            image: "/libros/image/074.png",
            description: "...",
            downloadLink: "https://drive.google.com/file/d/1n91-KBhQ-_TNtGwkzXTbxKIhvL_vLzhN/view?usp=drive_link",
            category: "literatura-tecnologica"
        },
        75: {
            title: "Hackear al hacker",
            image: "/libros/image/075.png",
            description: "Cada día, los hackers de sombrero blanco se encuentran con los de sombrero negro en el ciberespacio, batallando por el control de la tecnología que impulsa nuestro mundo. Los hackers éticos -de sombrero blanco- se encuentran entre los expertos en tecnología más brillantes e ingeniosos, quienes constantemente desarrollan nuevas formas de mantenerse un paso por delante de aquellos que quieren secuestrar nuestros datos y sistemas en beneficio personal.",
            downloadLink: "https://drive.google.com/file/d/1DNChZv8sUPeFv9DZjLSkmhzrA7n-wk4K/view?usp=drive_link",
            category: "literatura-tecnologica"
        },
        76: {
            title: "El libro negro del programador",
            image: "/libros/image/076.png",
            description: "El Libro Negro del Programador» muestra qué distingue a un programador neófito de quien actúa y trabaja profesionalmente.En la era del emprendimiento y de la nueva economía, el desarrollo profesional de software es su pilar fundamental. Si como programador quieres llegar a ser no sólo bueno sino profesional, no puedes dejar de conocer las gemas de sabiduría que contiene «El Libro Negro del Programador",
            downloadLink: "https://drive.google.com/file/d/19NjvTxndEEEjR9yfLvQkU_RLoDAHcrgk/view?usp=drive_link",
            category: "literatura-tecnologica"
        },
        77: {
            title: "Pentesting con PowerShell Completo",
            image: "/libros/image/077.png",
            description: "...",
            downloadLink: "https://drive.google.com/file/d/1cn9E4P8kVvif3QCUFXSSRtAZQehHm8jr/view?usp=drive_link",
            category: "literatura-tecnologica"
        },
        78: {
            title: "Redes Informáticas: Una Guía Compacta para el principiante que Desea Entender los Sistemas de Comunicaciones",
            image: "/libros/image/078.png",
            description: "Si, como principiante, desea aprender los fundamentos básicos de las redes informáticas sin tener que recurrir a numerosos libros, siga leyendo... Este libro contiene una variedad de temas relacionados con las conexiones de redes, tratados desde una perspectiva fácilmente comprensible para personas que quieren iniciarse en esta materia.",
            downloadLink: "https://drive.google.com/file/d/1xqqhUwtx312Pfe0ddaL7ZFK_D5FprSvR/view?usp=drive_link",
            category: "literatura-tecnologica"
        },
        79: {
            title: "Nacida de un deseo (Spanish Edition) (Kristopher Rodas)",
            image: "/libros/image/079.jpg",
            description: "NACIDA DE UN DESEO cuenta la historia de Alba, una joven que, tras sobrevivir a un ritual satánico perpetrado por una secta, lucha con las secuelas psicológicas de esa experiencia traumática.Un año antes, su hermana Emma fue víctima del mismo ritual, muriendo en el acto. Sumida en una profunda depresión y acosada por episodios psicóticos,",
            downloadLink: "https://mega.nz/file/nJZh0Lob#DURmIXfc6rDxhVtIrHOz0jZ8GZLP55sWiN_ho6r3Nn0",
            category: "ficcion-narrativa"
        },
        80: {
            title: "El silencio de Ana (Spanish Edition) (Kristopher Rodas)",
            image: "/libros/image/080.jpg",
            description: "...",
            downloadLink: "https://mega.nz/file/3MRADSqT#A3UmjTmXxuUELRcgy08-iLLyEg1uJndpotqRbi8SuXI",
            category: "ficcion-narrativa"
        },
        81: {
            title: "Doemi (Spanish Edition) (Kristopher Rodas)",
            image: "/libros/image/081.jpg",
            description: "Doemi es el descenso mental hacia la locura de una adolescente que lidia con sus tendencias suicidas. Sin embargo, no piensa irse de este mundo sin antes experimentar su primer beso.",
            downloadLink: "https://mega.nz/file/6IpAlAiI#OvbdcbB9c9HHqHu54Z59AGWKnqvtp_yWwxzVH0kdBXg",
            category: "ficcion-narrativa"
        },
        82: {
            title: "Todas las estrellas desaparecerán esta noche (Spanish Edition) (Kristopher Rodas)",
            image: "/libros/image/082.jpg",
            description: "Todas las estrellas desaparecerán esta noche es una novela intensamente poética, que narra la vida de Luna, cuya existencia se ve marcada por tragedias anuales que coinciden extrañamente con su cumpleaños. Desde la pérdida de seres queridos hasta relaciones prohibidas y consecuencias inesperadas, el relato nos sumerge en una turbulenta travesía hacia la adultez, revelando el impacto emocional de cada cumpleaños maldito.",
            downloadLink: "https://mega.nz/file/GdxlkJyJ#STISI1Gh8dpqqNneAtDPh9Pe4qYP3NB1lmfdfbU6ryw",
            category: "ficcion-narrativa"
        },
        83: {
            title: "Entrenamiento de Habilidades Comunicativas Una guía práctica para mejorar tu inteligencia social",
            image: "/libros/image/083.jpg",
            description: "...",
            downloadLink: "https://mega.nz/file/6EJVBYZZ#x9tIbnEIIa2UAeBvU8S_DXgDaXqw6rqq2gYXFVL8chY",
            category: "psicologia"
        },
        84: {
            title: "Juegos en que participamos Psicología de las relaciones humanas (Eric Berne)",
            image: "/libros/image/084.jpg",
            description: "Jugamos todo el tiempo: a juegos de poder, juegos de flirteo, sexuales y de pareja, juegos de competición, juegos con nuestros amigos…; desde concursos de estatus hasta combates de pareja letales. El mundialmente reconocido Dr. Eric Berne, creador del sistema de psicoterapia individual y social denominado Análisis transaccional, expone en esta obra las tácticas y maniobras inconscientes así como las emociones ocultas que rigen nuestra vida a través de los juegos cotidianos. A partir de su publicación original, hace cuatro décadas, «Juegos en que participamos» revolucionó nuestro entendimiento de lo que realmente ocurre cuando nos relacionamos.",
            downloadLink: "https://mega.nz/file/rZRGWQgY#aXkuSYqepIxm0hZLUaoj8nNqG3UJX_NCSU5HykC1wsk",
            category: "psicologia"
        },
        85: {
            title: "Desarrolla una mente prodigiosa (Psicologia y Autoayuda) (Ramon Campayo)",
            image: "/libros/image/085.jpg",
            description: "Siguiendo los metodos claramente descritos en el libro, usted podrá aumentar su capacidad de memoria y su rapidez de la lectura y comprensión en muy poco tiempo. ",
            downloadLink: "https://mega.nz/file/6RpAwZAS#9jPJ1M7kUwwsb2VhLww_EVoA1a81_mVDZPfS7Lsh8xw",
            category: "psicologia"
        },
        86: {
            title: "LA PSICOLOGIA DEL DINERO. COMO PIENSAN LOS RICOS (Morgan Housel)",
            image: "/libros/image/086.jpg",
            description: "Hay dos temas que nos impactan a todos por igual, nos interesen o no: la salud y el dinero. Para el primero tenemos instituciones públicas y privadas que velan por ella. En cambio, la gestión del dinero queda abandonada a nuestra suerte.Este libro, llamado a convertirse en un clásico de las finanzas personales, nos provee del conocimiento esencial para entender la psicología del dinero y nos invita a hacernos una pregunta fundamental que raramente nos hacemos: ¿cuál es nuestra relación con el dinero y qué queremos realmente de él? A partir de 18 claves imperecederas, Morgan Housel nos enseña cómo funciona la psicología del dinero y cuáles son los hábitos y conductas que nos ayudarán no solo a generar riqueza, sino, más importante aún, a conservarla.",
            downloadLink: "https://mega.nz/file/2dg1lI5C#QAWsY_AgNYu7aslGdaXGb9FfCId_P38ssfBUw2NV7t8",
            category: "psicologia"
        },
        87: {
            title: "Influencia. La psicología de la persuasión (Robert B.Cialdini)",
            image: "/libros/image/087.jpg",
            description: "...",
            downloadLink: "https://mega.nz/file/rd4EWCxR#NFfcaLzyTbj7uxfQVs0N3HQBgSBeNA_FrY0EHiwH2GU",
            category: "psicologia"
        },
        88: {
            title: "Black Hat Python",
            image: "/libros/image/088.jpg",
            description: "When it comes to creating powerful and effective hacking tools, Python is the language of choice for most security analysts. But just how does the magic happen? In Black Hat Python, the latest from Justin Seitz (author of the best-selling Gray Hat Python), you’ll explore the darker side of Python’s capabilities—writing network sniffers, manipulating packets, infecting virtual machines, creating stealthy trojans, and more. You’ll learn how to: –Create a trojan command-and-control using GitHub –Detect sandboxing and automate com­mon malware tasks, like keylogging and screenshotting –Escalate Windows privileges with creative process control –Use offensive memory forensics tricks to retrieve password hashes and inject shellcode into a virtual machine –Extend the popular Burp Suite web-hacking tool –Abuse Windows COM automation to perform a man-in-the-browser attack –Exfiltrate data from a network most sneakily Insider techniques and creative challenges throughout show you how to extend the hacks and how to write your own exploits. When it comes to offensive security, your ability to create powerful tools on the fly is indispensable. Learn how in Black Hat Python.",
            downloadLink: "https://mega.nz/file/3QI00bDJ#5O-MYr8osM57zc6jiQT-AmaWG2ROYbMKuyJxUk1KqoU",
            category: "literatura-tecnologica"
        },
        89: {
            title: "Black Hat Python: Python Programming for Hackers and Pentesters",
            image: "/libros/image/089.jpg",
            description: "...",
            downloadLink: "https://mega.nz/file/vIYhQDLC#SIbt_eTOzPlS5ijFH-S4QfDchsL9IIRvhDLbjiKgwgU",
            category: "literatura-tecnologica"
        },
        90: {
            title: "Black Hat Python: Python Programming for Hackers and Pentesters, 2e",
            image: "/libros/image/090.jpg",
            description: "<b>Fully-updated, second edition of this worldwide bestseller with over 100,000 copies sold.</b>When it comes to creating powerful and effective hacking tools, Python is the language of choice for most security analysts. In <i>Black Hat Python</i>, you'll explore the darker side of Python's capabilities--writing network sniffers, manipulating packets, infecting virtual machines, creating stealthy trojans, and more.",
            downloadLink: "https://mega.nz/file/SI5RRCDL#XGYms5ZqbLjRWhl5sEB3626t1nmhzGinkjFbVqWqNKE",
            category: "literatura-tecnologica"
        },
        91: {
            title: "The Art of Invisibility: The World's Most Famous Hacker Teaches You How to Be Safe in the Age of Big Brother and Big Data",
            image: "/libros/image/091.jpg",
            description: "Be online without leaving a trace. Your every step online is being tracked and stored, and your identity literally stolen. Big companies and big governments want to know and exploit what you do, and privacy is a luxury few can afford or understand.",
            downloadLink: "https://mega.nz/file/iJYlBBia#IqQg83Tp9igQXntAi1P1lBF_1IPiKYi2-nL-fPsLapU",
            category: "literatura-tecnologica"
        },

        // Otros libros...
    };

    const book = books[bookId];

    if (book) {
        document.getElementById("bookTitle").textContent = book.title;
        document.getElementById("booktitle").textContent = book.title;
        document.getElementById("bookImage").src = book.image;
        document.getElementById("bookDescription").textContent = book.description;
        document.getElementById("downloadBtn").onclick = function() {
            window.location.href = book.downloadLink;
        };
        // Cargar recomendaciones
                loadRecommendations(book.category, bookId);
    } else {
        document.getElementById("bookTitle").textContent = "Libro no encontrado";
        document.getElementById("bookDescription").textContent = "Lo siento, no encontramos el libro.";
    }
});


