<template>
  <nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-lg">
    <div class="container mx-auto px-6">
      <div class="flex items-center justify-between h-20">
        <!-- Logo et Nom -->
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div class="relative">
            <img src="/LOGO_SAII_EDIT.png" alt="Saii" class="h-12 w-auto transition-transform group-hover:scale-110" />
            <div class="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
          </div>
          <div class="hidden md:block">
            <p class="text-xl font-bold text-gray-900">Saii</p>
            <p class="text-xs text-gray-500">L'union fait la force</p>
          </div>
        </NuxtLink>

        <!-- Navigation Centrale -->
        <div class="hidden lg:flex items-center gap-2">
          <a 
            href="#formules" 
            class="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors rounded-lg hover:bg-indigo-50"
          >
            Formules
          </a>
          <a 
            href="#configurateur" 
            class="px-4 py-2 text-gray-700 hover:text-purple-600 font-medium transition-colors rounded-lg hover:bg-purple-50"
          >
            Configurateur
          </a>
          <a 
            href="#avantages" 
            class="px-4 py-2 text-gray-700 hover:text-pink-600 font-medium transition-colors rounded-lg hover:bg-pink-50"
          >
            Avantages
          </a>
          <!-- Bouton Print -->
          <NuxtLink 
            to="/print"
            class="px-4 py-2 text-gray-700 hover:text-cyan-600 font-medium transition-colors rounded-lg hover:bg-cyan-50"
          >
            Print
          </NuxtLink>
        </div>

        <!-- Actions Droite -->
        <div class="flex items-center gap-3">
          <!-- Bouton Comparatif Budget -->
          <button 
            @click="toggleBudget"
            class="hidden md:flex items-center gap-2 px-4 py-2 bg-green-100 hover:bg-green-200 text-green-700 font-semibold rounded-lg transition-colors"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"/>
            </svg>
            <span class="hidden xl:inline">Budget</span>
          </button>

          <!-- Bouton Admin -->
          <NuxtLink 
            to="/admin/login"
            class="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
            </svg>
            <span class="hidden sm:inline">Admin</span>
          </NuxtLink>

          <!-- Menu Mobile -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="lg:hidden p-2 text-gray-700 hover:text-indigo-600 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Menu Mobile -->
      <Transition name="slide-down">
        <div v-if="mobileMenuOpen" class="lg:hidden py-4 border-t border-gray-200">
          <div class="space-y-2">
            <a 
              href="#formules" 
              @click="mobileMenuOpen = false"
              class="block px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg font-medium transition-colors"
            >
              📦 Formules
            </a>
            <a 
              href="#configurateur" 
              @click="mobileMenuOpen = false"
              class="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg font-medium transition-colors"
            >
              🎚️ Configurateur
            </a>
            <a 
              href="#avantages" 
              @click="mobileMenuOpen = false"
              class="block px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-lg font-medium transition-colors"
            >
              🤝 Avantages
            </a>
            <!-- Lien Print mobile -->
            <NuxtLink 
              to="/print"
              @click="mobileMenuOpen = false"
              class="block px-4 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg font-medium transition-colors"
            >
              🖨️ Print
            </NuxtLink>
          </div>
        </div>
      </Transition>
    </div>
  </nav>

  <!-- Spacer pour compenser la navbar fixe -->
  <div class="h-20"></div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['toggle-budget'])

const mobileMenuOpen = ref(false)

const toggleBudget = () => {
  emit('toggle-budget')
}
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

