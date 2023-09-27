<script setup></script>
<template>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                @ValueSource
            </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
                <pre>
                    <code>
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
                </pre>
            </div>
        </div>
    </div>
</template>