<template>
    <footer class="bg-white py-6 mt-auto">
        <div class="container flex flex-col sm:flex-row items-center justify-start sm:justify-between text-sm">
            <div class="text-grey-darker">&copy; Persona. Made with TailwindCSS &amp; VueJS.</div>
            <nav class="mt-3 sm:mt-0">
                <ul class="flex list-reset align-center">
                    <router-link tag="li" to="/browse">
                        <a class="px-3 text-grey-darker hover:text-purple-dark">Browse</a>
                    </router-link>
                    <router-link tag="li" to="/contact">
                        <a class="px-3 text-grey-darker hover:text-purple-dark">Contact</a>
                    </router-link>
                    <router-link tag="li" to="/about">
                        <a class="px-3 text-grey-darker hover:text-purple-dark">About</a>
                    </router-link>
                </ul>
            </nav>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>
