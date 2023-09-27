<script setup>
</script>

<template>
    <div class="container">
        <h1>Buenas prácticas</h1>
        <hr>
        <ol class="list-group list-group-numbered">
            <li class="list-group-item"><strong><em>Nombres descriptivos -</em></strong> Utiliza nombres descriptivos y significativos para tus
                métodos de prueba y aserciones. Esto facilita la comprensión de lo que se está probando y mejora la
                legibilidad del código.</li>
            <li class="list-group-item"><strong><em>Unidad de prueba única -</em></strong> Asegúrate de que cada método de prueba pruebe una única
                unidad lógica de código. Esto ayuda a mantener las pruebas más enfocadas, independientes y fáciles de
                entender.</li>
            <li class="list-group-item"><strong><em>Evita dependencias externas -</em></strong> Las pruebas unitarias deben ser independientes y no
                deben tener dependencias externas, como bases de datos, servicios web, archivos del sistema, etc. En su
                lugar, utiliza técnicas de simulación o herramientas de prueba específicas, como Mockito o stubs, para
                simular el comportamiento de las dependencias.</li>
            <li class="list-group-item"><strong><em>Anotaciones relevantes -</em></strong> Utiliza las anotaciones proporcionadas por JUnit de manera
                adecuada y relevante. Algunas anotaciones útiles incluyen @BeforeEach y @AfterEach para configurar el
                estado inicial y limpiar después de cada prueba, @BeforeAll y @AfterAll para configurar el estado inicial
                y limpiar antes y después de todas las pruebas, y @Disabled para deshabilitar pruebas temporariamente.</li>
            <li class="list-group-item"><strong><em>Organización de las pruebas -</em></strong> Organiza tus pruebas en clases y paquetes de manera
                lógica y coherente. Puedes agrupar las pruebas por funcionalidad, clase o características específicas, lo
                que sea más adecuado para tu proyecto.</li>
            <li class="list-group-item"><strong><em>Pruebas determinísticas -</em></strong> Asegúrate de que tus pruebas sean determinísticas, es
                decir, que siempre produzcan los mismos resultados esperados cuando se ejecuten bajo las mismas condiciones.
                Esto significa evitar dependencias de estado externo o aleatorio y garantizar que las pruebas sean reproducibles
                y estables.</li>
            <li class="list-group-item"><strong><em>Mantenimiento regular -</em></strong> A medida que evoluciona tu código base, asegúrate de mantener
                y actualizar tus pruebas unitarias para que sigan siendo válidas y relevantes. Las pruebas obsoletas o
                ineficaces pueden llevar a falsos positivos o negativos y socavar la confianza en las pruebas.</li>
            <li class="list-group-item"><strong><em>Ejecución rápida -</em></strong> Intenta que tus pruebas sean rápidas para que puedan ejecutarse con
                frecuencia durante el desarrollo. Las pruebas rápidas permiten obtener retroalimentación instantánea sobre la
                integridad del código y ayudan a detectar problemas temprano.</li>
        </ol>
    </div>
</template>