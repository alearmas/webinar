<script setup>
</script>

<template>
    <div class="container">
        <h1>Code Coverage</h1>
        <hr>
        <p>La medición de la cobertura de las pruebas es una técnica importante para evaluar qué partes del código fuente
            de tu aplicación están siendo ejecutadas durante las pruebas. Herramientas como JaCoCo (Java Code Coverage) te
            permiten medir esta cobertura de manera eficaz.</p>
        <p>JaCoCo puede integrarse con diferentes IDEs, además se puede integrar con plugins de Jenkins y de SonarQube
            (entre otros), para verificar el código en una pipeline desde fuera de nuestro entorno de desarrollo.</p>
        <p>Los informes de JaCoCo nos ayudan a analizar visualmente la cobertura de código utilizando diamantes con colores
            para las ramas y colores de fondo para las líneas:</p>
        <ul>
            <li>Un diamante rojo significa que no se han ejecutado ramas durante la fase de pruebas.</li>
            <li>Un diamante amarillo indica que el código está parcialmente cubierto, es decir, algunas ramas no se han ejecutado.</li>
            <li>Un diamante verde indica que se han ejecutado todas las ramas durante las pruebas.</li>
        </ul>
    </div>
</template>

Los informes de JaCoCo nos ayudan a analizar visualmente la cobertura de código utilizando diamantes con colores para las ramas y colores de fondo para las líneas:

    Un diamante rojo significa que no se han ejecutado ramas durante la fase de pruebas.
    Un diamante amarillo indica que el código está parcialmente cubierto, es decir, algunas ramas no se han ejecutado.
    Un diamante verde indica que se han ejecutado todas las ramas durante las pruebas.

El mismo código de colores se aplica al color de fondo, pero para la cobertura de líneas.

JaCoCo proporciona principalmente tres métricas importantes:

    La cobertura de líneas refleja la cantidad de código que se ha ejecutado según el número de instrucciones de código de byte de Java llamadas por las pruebas.
    La cobertura de ramas muestra el porcentaje de ramas ejecutadas en el código, generalmente relacionadas con las declaraciones if/else y switch.
    La complejidad ciclomática refleja la complejidad del código al proporcionar el número de rutas necesarias para cubrir todas las posibles rutas en un código a través de una combinación lineal.

Tomemos un ejemplo trivial: si no hay declaraciones if o switch en el código, la complejidad ciclomática será 1, ya que solo necesitamos una ruta de ejecución para cubrir todo el código.

En general, la complejidad ciclomática refleja la cantidad de casos de prueba que necesitamos implementar para cubrir todo el código.Espa                                                                                     666663wa33ii774ee