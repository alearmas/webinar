<script setup></script>
<template>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Repositorio
            </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
                <pre>
                    <code>
    public interface UserRepository {
        User findByUsername(String username);
    }
                    </code>
                </pre>
            </div>
        </div>
    </div>
</template>