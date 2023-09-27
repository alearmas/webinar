<script setup>
    import ValueSource from '../components/ValueSource.vue'
    import EnumSource from '../components/EnumSource.vue'
    import CsvSource from '../components/CsvSource.vue'
</script>

<template>
    <div class="container">
        <h1>Pruebas parametrizadas</h1>
        <hr>
        <p>En JUnit5, podemos escribir pruebas parametrizadas utilizando la anotación <code>@ParameterizedTest</code>.
            Esto te permite ejecutar la misma prueba con diferentes conjuntos de datos de entrada y verificar si el
            código se comporta correctamente para cada conjunto de datos. Esto resulta particularmente útil cuando deseas
            probar una funcionalidad con varios casos de prueba similares.</p>
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <ValueSource />
            <EnumSource />
            <CsvSource />
        </div>
    </div>
</template>