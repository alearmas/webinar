<script setup>
</script>

<template>
    <div class="container">
        <h1>Anotaciones</h1>
        <hr>
        <p>Las anotaciones en JUnit5 son etiquetas especiales que se utilizan para marcar métodos, clases u otros elementos
            de código que tienen un significado especial para el framework de pruebas JUnit5. Estas anotaciones permiten
            configurar y personalizar el comportamiento de las pruebas y se utilizan para definir cómo se deben ejecutar y
            gestionar las pruebas unitarias.</p>
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    <div class="card border-primary mb-3">
                    <div class="card-header text-primary">DE PRUEBA</div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">@Test</li>
                                    <li class="list-group-item">@ParameterizedTest</li>
                                    <li class="list-group-item">@RepeatedTest</li>
                                    <li class="list-group-item">@TestFactory</li>
                                </ul>
                            </div>
                            <div class="col">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">@TestTemplate</li>
                                    <li class="list-group-item">@DisplayName</li>
                                    <li class="list-group-item">@Timeout</li>
                                    <li class="list-group-item">@Disabled</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card border-primary mb-3">
                    <div class="card-header text-primary">DE CICLO DE VIDA</div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">@BeforeAll</li>
                                    <li class="list-group-item">@AfterAll</li>
                                </ul>
                            </div>
                            <div class="col">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">@BeforeEach</li>
                                    <li class="list-group-item">@AfterEach</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col">
                <div class="card border-primary mb-3">
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">@TestableException</li>
                                </ul>
                            </div>
                            <div class="col">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">@TestableThrowable</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card-header text-primary">DE EXCEPCIÓN</div>
                </div>
            </div>
            <div class="col">
                <div class="card border-primary mb-3">
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">@EnabledOnOs / @DisabledOnOs</li>
                                    <li class="list-group-item">@EnabledOnJre / @DisabledOnJre</li>
                                    <li class="list-group-item">@EnabledIf / @DisabledIf</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card-header text-primary">DE CONDICIÓN Y FILTRADO</div>
                </div>
            </div>
        </div>
    </div>
</div></template>