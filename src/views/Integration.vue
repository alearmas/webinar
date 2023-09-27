<script setup>
    import Entity from '../components/Entity.vue'
    import Repository from '../components/Repository.vue'
    import Service from '../components/Service.vue'
</script>

<template>
    <div class="container">
        <h1>Pruebas de integración</h1>
        <hr>
        <p>Las pruebas de integración son un tipo de prueba que se utiliza para verificar la interoperabilidad entre
            diferentes componentes de una aplicación, en lugar de probar unidades individuales de código. En Java,
            JUnit5 puede ser combinado con extensiones como <code>@SpringExtension</code> y <code>@MockitoExtension</code>
            para facilitar las pruebas de integración.</p>
        <p>Adicionalmente, <code>@Mock</code> se utiliza para crear objetos simulados(mocks) de las dependencias e
            <code>@InjectMocks</code> se utiliza para inyectar los mocks en el servicio, lo que permite realizar pruebas
            de integración simulando el comportamiento de las dependencias.</p>
    </div>
    <div class="container">
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="row">
                <div class="col">
                    <Entity />
                    <Repository />
                    <Service />
                </div>
                <div class="col">
                    <pre><code>
    import org.junit.jupiter.api.Test;
    import org.mockito.Mock;
    import org.mockito.junit.jupiter.MockitoExtension;

    import static org.junit.jupiter.api.Assertions.assertFalse;
    import static org.junit.jupiter.api.Assertions.assertTrue;
    import static org.mockito.Mockito.when;

    // Anotación para habilitar el uso de Mockito
    @ExtendWith(MockitoExtension.class)
    public class UserServiceIntegrationTest {

    // Mock del repositorio
    @Mock
    private UserRepository userRepository;

    @BeforeEach
    public void setUp() {
        // Crea una instancia de UserService con el mock UserRepository
        UserService userService = new UserService(userRepository);
    }

    @Test
    public void testIsUserActive_UserIsActive_ReturnsTrue() {
        // Configura el comportamiento del mock UserRepository
        when(userRepository.findByUsername("john.doe")).thenReturn(new User("john.doe", true));

        // Realiza la prueba de integración
        boolean isActive = userService.isUserActive("john.doe");

        // Asegúrate de que la aserción sea verdadera
        assertTrue(isActive);
    }

    @Test
    public void testIsUserActive_UserIsNotActive_ReturnsFalse() {
        // Configura el comportamiento del mock UserRepository
        when(userRepository.findByUsername("jane.doe")).thenReturn(new User("jane.doe", false));

        // Realiza la prueba de integración
        boolean isActive = userService.isUserActive("jane.doe");

        // Asegúrate de que la aserción sea falsa
        assertFalse(isActive);
    }
                    </code></pre>
                </div>
            </div>
        </div>
    </div>
</template>