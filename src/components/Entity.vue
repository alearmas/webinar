<script setup></script>
<template>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Entidad o Modelo
            </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
                <pre>
                    <code>
    public class User {
        private String username;
        private boolean active;

        // Constructor, getters y setters
    }
                    </code>
                </pre>
            </div>
        </div>
    </div>
</template>