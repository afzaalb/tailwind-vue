<template>
    <header class="bg-purple-darker uppercase">
        <div class="container flex items-center">
            <router-link to="/" class="logo font-bold text-2xl">
                Persona
            </router-link>
            <nav class="app-redirect-nav ml-4">
                <ul class="flex list-reset align-center">
                    <router-link tag="li" to="/browse">
                        <a class="px-3">Browse</a>
                    </router-link>
                    <router-link tag="li" to="/contact">
                        <a class="px-3">Contact</a>
                    </router-link>
                    <router-link tag="li" to="/about">
                        <a class="px-3">About</a>
                    </router-link>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>
