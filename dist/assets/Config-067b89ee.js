import{_ as e,o as t,c as n,b as a}from"./index-0e88ad33.js";const o={},s={class:"container"},i=a(`<div class="row"><div class="col-5"><h3>Configuración</h3><h5>pom.xml</h5><pre><code>
    &lt;dependencies&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.junit&lt;/groupId&gt;
            &lt;artifactId&gt;junit-bom&lt;/artifactId&gt;
            &lt;version&gt;5.10.0&lt;/version&gt;
            &lt;type&gt;pom&lt;/type&gt;
            &lt;scope&gt;import&lt;/scope&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;
                    </code></pre><h5>build.gradle</h5><pre><code>
    plugins {
        id &#39;java&#39;
        id &#39;eclipse&#39; // optional (to generate Eclipse project files)
        id &#39;idea&#39; // optional (to generate IntelliJ IDEA project files)
    }

    repositories {
        mavenCentral()
    }

    dependencies {
        testImplementation(&#39;org.junit.jupiter:junit-jupiter:5.6.2&#39;)
    }

    test {
        useJUnitPlatform()
        testLogging {
            events &quot;passed&quot;, &quot;skipped&quot;, &quot;failed&quot;
        }
    }
                    </code></pre></div><div class="col-7"><h3>Estructura básica</h3><pre><code>
    package yourpackage;

    import org.junit.jupiter.api.*;

    public class CalculatorTest {

        Calculator calculator;

        @BeforeAll
        public static void setUpBeforeClass() {
            // Realiza configuraciones previas a la ejecución de todas las pruebas de la clase.
            System.out.println(&quot;Before all tests&quot;);
        }

        @BeforeEach
        public void setUp() {
            // Realiza configuraciones que deben hacerse antes de cada prueba.
            calculator = new Calculator();
            System.out.println(&quot;Before each test&quot;);
        }

        @Test
        public void testAdd() {
            int result = calculator.add(2, 3);
            Assertions.assertEquals(5, result);
        }

        @AfterEach
        public void tearDown() {
            // Realiza limpieza o acciones que deben hacerse después de cada prueba.
            System.out.println(&quot;After each test&quot;);
        }

        @AfterAll
        public static void tearDownAfterClass() {
            // Realiza limpieza o acciones que deben hacerse al final de todas las pruebas de la clase.
            System.out.println(&quot;After all tests&quot;);
        }
    }
                    </code></pre></div></div>`,1),l=[i];function c(r,d){return t(),n("div",s,l)}const p=e(o,[["render",c]]);export{p as default};
