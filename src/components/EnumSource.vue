<script setup></script>

<template>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                @EnumSource
            </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
                <pre>
                    <code>
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
                    </code>
                </pre>
            </div>
        </div>
    </div>
</template>