# Proyecto Cifrado César

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-definición-del-producto)
* [3. Objetivos de aprendizaje](#3-proceso-de-diseño-y-definición-del-usuario)
* [4. Consideraciones generales](#4-elementos-del-diseño-final-y-funcionalidad)

***

## 1. Preámbulo

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

## 2. Definición del producto

* Rango etareo del usuario: +15 y +30 años
* El objetivo del producto es que los usuarios logren cifrar y descifrar texto para los fines que ellos deseen: para mandar mensajes secretos a sus amigos o parejas, para codificar un mail, contraseñas, trabajos escritos para la universidad, etc. Lo que el usuario estime conveniente. Se busca entregar una herramienta simple, fácil de usar y con un diseño llamativo, pero a la vez sencillo.
* El producto soluciona los problemas de privacidad, ya que permite mantener en secreto información privada. Evita que el contenido sea expuesto a otras personas y ayuda a que solo sea compartido con quien se espera que lo lea.

## 3. Proceso de diseño y definición del usuario

El primer paso fue pensar en cómo sería el producto en sí, es decir, la finalidad y su funcionalidad. La idea era crear una web que permitiera escribir un texto completo dentro de un recuadro para luego cifrarlo y descifrarlo. Entonces, después de pensar en el público objetivo, el futuro usuario, su rango etareo, afinidad con la tecnología, etc. Decidí dirigir el producto a los adolescentes y al adulto joven (entre 15 y 30 años).

El segundo paso fue pensar en los colores de la aplicación y el orden de los elementos. Debía contar con recuadros de texto, botones, instrucciones de uso, etc. El diseño fue cambiando a lo largo del desarrollo de la aplicación, todo esto relacionado con el testeo con personas: la opinión de posibles futuros usuarios fue esencial.

El primer bosquejo a papel:
![diseño en papel](/src/images/diseñopapel.jpg)

Diseños en figma:
![diseño en figma](/src/images/diseño1.png)
![diseño en figma](images/diseño2.png)

Diseño final aplicado en la web:
![diseño web](/src/images/images/web1.png)
![diseño web](/src/images/images/web2.png)


### 4. Elementos del diseño final y funcionalidad

Características del producto:
1. Pantalla de bienvenida con instrucciones de uso de la aplicación y botón de "Empecemos".
2. Pantalla principal para cifrar y descifrar un mensaje:
   * Un recuadro pequeño donde se ingresa un número del 1 al 100.
   * Dos recuadros de texto, en uno se escribirá el mensaje original y en el otro se mostrará el mensaje cifrado o descifrado.
   * Tres botones, uno para cifrar, otro para descifrar un texto y el último para borrar el contenido de los recuadros.

