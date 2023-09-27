<script setup></script>
<template>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Servicio
            </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
                <pre>
                    <code>
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
                    </code>
                </pre>
            </div>
        </div>
    </div>
</template>