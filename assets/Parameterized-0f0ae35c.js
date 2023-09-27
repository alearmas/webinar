import{_ as r,o as t,c as s,b as i,a as e,d as a,e as c}from"./index-2dac68bd.js";const l={},d={class:"accordion-item"},u=i(`<h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"> @ValueSource </button></h2><div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample"><div class="accordion-body"><pre>                    <code>
                        import static org.junit.jupiter.api.Assertions.assertEquals;
                        import org.junit.jupiter.params.ParameterizedTest;
                        import org.junit.jupiter.params.provider.ValueSource;

                        public class MyParameterizedTest {

                            @ParameterizedTest <span class="comment">// No utilizamos el @Test</span>
                            @ValueSource(ints = { 1, 2, 3, 4, 5 }) <span class="comment">// Proporcionamos la fuente de datos</span>
                            public void testMultiplyByTwo(int inputValue) {
                                int expectedResult = inputValue * 2;
                                int actualResult = multiplyByTwo(inputValue);

                                assertEquals(expectedResult, actualResult);
                            }

                            public int multiplyByTwo(int value) {
                                return value * 2;
                            }
                        }
                    </code>
                </pre></div></div>`,2),p=[u];function _(n,o){return t(),s("div",d,p)}const m=r(l,[["render",_]]),h={},b={class:"accordion-item"},f=e("h2",{class:"accordion-header"},[e("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseTwo","aria-expanded":"false","aria-controls":"flush-collapseTwo"}," @EnumSource ")],-1),y=e("div",{id:"flush-collapseTwo",class:"accordion-collapse collapse","data-bs-parent":"#accordionFlushExample"},[e("div",{class:"accordion-body"},[e("pre",null,[a("                    "),e("code",null,`
                        import static org.junit.jupiter.api.Assertions.assertEquals;
                        import org.junit.jupiter.params.ParameterizedTest;
                        import org.junit.jupiter.params.provider.ValueSource;

                        @ParameterizedTest
                        @EnumSource(DayOfWeek.class)
                        public void testIsWeekend(DayOfWeek day) {
                            boolean isWeekend = isWeekend(day);

                            if (day == DayOfWeek.SATURDAY || day == DayOfWeek.SUNDAY) {
                                assertTrue(isWeekend);
                            } else {
                                assertFalse(isWeekend);
                            }
                        }

                        public boolean isWeekend(DayOfWeek day) {
                            return day == DayOfWeek.SATURDAY || day == DayOfWeek.SUNDAY;
                        }
                    `),a(`
                `)])])],-1),v=[f,y];function T(n,o){return t(),s("div",b,v)}const j=r(h,[["render",T]]),g={},x={class:"accordion-item"},S=e("h2",{class:"accordion-header"},[e("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseThree","aria-expanded":"false","aria-controls":"flush-collapseThree"}," @CsvSource ")],-1),E=e("div",{id:"flush-collapseThree",class:"accordion-collapse collapse","data-bs-parent":"#accordionFlushExample"},[e("div",{class:"accordion-body"},[e("pre",null,[a("                    "),e("code",null,`
                        import static org.junit.jupiter.api.Assertions.assertEquals;
                        import org.junit.jupiter.params.ParameterizedTest;
                        import org.junit.jupiter.params.provider.ValueSource;

                        @ParameterizedTest
                        @CsvSource({ "1, 2, 3", "4, 5, 9", "10, 20, 30" })
                        public void testAddition(int a, int b, int expectedResult) {
                            int actualResult = add(a, b);

                            assertEquals(expectedResult, actualResult);
                        }

                        public int add(int a, int b) {
                            return a + b;
                        }
                    `),a(`
                `)])])],-1),$=[S,E];function k(n,o){return t(),s("div",x,$)}const z=r(g,[["render",k]]),V={class:"container"},W=e("h1",null,"Pruebas parametrizadas",-1),D=e("hr",null,null,-1),P=e("p",null,[a("En JUnit5, podemos escribir pruebas parametrizadas utilizando la anotación "),e("code",null,"@ParameterizedTest"),a(". Esto te permite ejecutar la misma prueba con diferentes conjuntos de datos de entrada y verificar si el código se comporta correctamente para cada conjunto de datos. Esto resulta particularmente útil cuando deseas probar una funcionalidad con varios casos de prueba similares.")],-1),A={class:"accordion accordion-flush",id:"accordionFlushExample"},N={__name:"Parameterized",setup(n){return(o,O)=>(t(),s("div",V,[W,D,P,e("div",A,[c(m),c(j),c(z)])]))}};export{N as default};
