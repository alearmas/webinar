<script setup>
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-5">
                <h3>Configuración</h3>
                <h5>pom.xml</h5>
                <pre><code>
    &lt;dependencies>
        &lt;dependency>
            &lt;groupId>org.junit&lt;/groupId>
            &lt;artifactId>junit-bom&lt;/artifactId>
            &lt;version>5.10.0&lt;/version>
            &lt;type>pom&lt;/type>
            &lt;scope>import&lt;/scope>
        &lt;/dependency>
    &lt;/dependencies>
                    </code></pre>
                    <h5>build.gradle</h5>
                <pre><code>
    plugins {
        id 'java'
        id 'eclipse' // optional (to generate Eclipse project files)
        id 'idea' // optional (to generate IntelliJ IDEA project files)
    }

    repositories {
        mavenCentral()
    }

    dependencies {
        testImplementation('org.junit.jupiter:junit-jupiter:5.6.2')
    }

    test {
        useJUnitPlatform()
        testLogging {
            events "passed", "skipped", "failed"
        }
    }
                    </code></pre>
            </div>
            <div class="col-7">
                <h3>Estructura básica</h3>
                <pre><code>
    package yourpackage;

    import org.junit.jupiter.api.*;

    public class CalculatorTest {

        Calculator calculator;

        @BeforeAll
        public static void setUpBeforeClass() {
            // Realiza configuraciones previas a la ejecución de todas las pruebas de la clase.
            System.out.println("Before all tests");
        }

        @BeforeEach
        public void setUp() {
            // Realiza configuraciones que deben hacerse antes de cada prueba.
            calculator = new Calculator();
            System.out.println("Before each test");
        }

        @Test
        public void testAdd() {
            int result = calculator.add(2, 3);
            Assertions.assertEquals(5, result);
        }

        @AfterEach
        public void tearDown() {
            // Realiza limpieza o acciones que deben hacerse después de cada prueba.
            System.out.println("After each test");
        }

        @AfterAll
        public static void tearDownAfterClass() {
            // Realiza limpieza o acciones que deben hacerse al final de todas las pruebas de la clase.
            System.out.println("After all tests");
        }
    }
                    </code></pre>
            </div>
        </div>
    </div>

</template>