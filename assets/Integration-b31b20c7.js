import{_ as r,o,c as n,a as e,d as s,e as i,F as c,b as l}from"./index-2dac68bd.js";const d={},p={class:"accordion-item"},u=e("h2",{class:"accordion-header"},[e("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseOne","aria-expanded":"false","aria-controls":"flush-collapseOne"}," Entidad o Modelo ")],-1),_=e("div",{id:"flush-collapseOne",class:"accordion-collapse collapse","data-bs-parent":"#accordionFlushExample"},[e("div",{class:"accordion-body"},[e("pre",null,[s("                    "),e("code",null,`
    public class User {
        private String username;
        private boolean active;

        // Constructor, getters y setters
    }
                    `),s(`
                `)])])],-1),h=[u,_];function v(a,t){return o(),n("div",p,h)}const m=r(d,[["render",v]]),b={},f={class:"accordion-item"},g=e("h2",{class:"accordion-header"},[e("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseTwo","aria-expanded":"false","aria-controls":"flush-collapseTwo"}," Repositorio ")],-1),y=e("div",{id:"flush-collapseTwo",class:"accordion-collapse collapse","data-bs-parent":"#accordionFlushExample"},[e("div",{class:"accordion-body"},[e("pre",null,[s("                    "),e("code",null,`
    public interface UserRepository {
        User findByUsername(String username);
    }
                    `),s(`
                `)])])],-1),U=[g,y];function R(a,t){return o(),n("div",f,U)}const k=r(b,[["render",R]]),x={},A={class:"accordion-item"},$=e("h2",{class:"accordion-header"},[e("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseThree","aria-expanded":"false","aria-controls":"flush-collapseThree"}," Servicio ")],-1),j=e("div",{id:"flush-collapseThree",class:"accordion-collapse collapse","data-bs-parent":"#accordionFlushExample"},[e("div",{class:"accordion-body"},[e("pre",null,[s("                    "),e("code",null,`
    public class UserService {
        private UserRepository userRepository;

        public UserService(UserRepository userRepository) {
            this.userRepository = userRepository;
        }

        public boolean isUserActive(String username) {
            User user = userRepository.findByUsername(username);
            return user != null && user.isActive();
        }
    }
                    `),s(`
                `)])])],-1),S=[$,j];function E(a,t){return o(),n("div",A,S)}const T=r(x,[["render",E]]),M=l('<div class="container"><h1>Pruebas de integración</h1><hr><p>Las pruebas de integración son un tipo de prueba que se utiliza para verificar la interoperabilidad entre diferentes componentes de una aplicación, en lugar de probar unidades individuales de código. En Java, JUnit5 puede ser combinado con extensiones como <code>@SpringExtension</code> y <code>@MockitoExtension</code> para facilitar las pruebas de integración.</p><p>Adicionalmente, <code>@Mock</code> se utiliza para crear objetos simulados(mocks) de las dependencias e <code>@InjectMocks</code> se utiliza para inyectar los mocks en el servicio, lo que permite realizar pruebas de integración simulando el comportamiento de las dependencias.</p></div>',1),w={class:"container"},F={class:"accordion accordion-flush",id:"accordionFlushExample"},B={class:"row"},I={class:"col"},z=e("div",{class:"col"},[e("pre",null,[e("code",null,`
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
                    `)])],-1),C={__name:"Integration",setup(a){return(t,N)=>(o(),n(c,null,[M,e("div",w,[e("div",F,[e("div",B,[e("div",I,[i(m),i(k),i(T)]),z])])])],64))}};export{C as default};
