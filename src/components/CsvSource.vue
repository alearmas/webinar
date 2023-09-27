<script setup></script>

<template>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                @CsvSource
            </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
                <pre>
                    <code>
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
                    </code>
                </pre>
            </div>
        </div>
    </div>
</template>