<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-6">
    <!-- Particules animées en arrière-plan -->
    <div class="absolute inset-0 overflow-hidden opacity-20">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 50px 50px;"></div>
    </div>
    
    <div class="relative z-10 w-full max-w-md">
      <!-- Logo -->
      <div class="text-center mb-8">
        <div class="inline-block">
          <img src="/LOGO_SAII_EDIT.png" alt="Saii Logo" class="h-20 w-auto mx-auto mb-4" />
        </div>
        <h1 class="text-4xl font-bold text-white mb-2">Backoffice Saii</h1>
        <p class="text-purple-200">Gestion de votre offre commerciale</p>
      </div>

      <!-- Carte de Login -->
      <div class="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
        <div class="text-center mb-8">
          <div class="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"/>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-gray-900">Connexion Admin</h2>
          <p class="text-gray-600 mt-2">Accédez à votre espace de gestion</p>
        </div>

        <!-- Formulaire -->
        <form @submit.prevent="handleLogin" class="space-y-6">
          <!-- Email -->
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">
              Email
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <input 
                v-model="email"
                type="email" 
                required
                class="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                placeholder="jules@sagaxp.fr"
              >
            </div>
          </div>

          <!-- Password -->
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">
              Mot de passe
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <input 
                v-model="password"
                :type="showPassword ? 'text' : 'password'" 
                required
                class="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                placeholder="••••••••"
              >
              <button 
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
              >
                <svg v-if="!showPassword" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
                </svg>
                <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd"/>
                  <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Message d'erreur -->
          <div v-if="errorMessage" class="bg-red-50 border-2 border-red-200 rounded-xl p-4 text-center">
            <p class="text-red-600 font-semibold">{{ errorMessage }}</p>
          </div>

          <!-- Bouton de connexion -->
          <button 
            type="submit"
            :disabled="loading"
            class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="!loading" class="flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              Se connecter
            </span>
            <span v-else class="flex items-center justify-center gap-2">
              <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Connexion...
            </span>
          </button>
        </form>

        <!-- Info -->
        <div class="mt-6 text-center text-sm text-gray-500">
          <p>🔒 Connexion sécurisée</p>
        </div>
      </div>

      <!-- Footer -->
      <p class="text-center text-purple-200 mt-6 text-sm">
        &copy; 2026 Saii - Backoffice Administration
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAdminStore } from '~/stores/admin'
import { useRouter } from 'vue-router'

definePageMeta({
  layout: false
})

const router = useRouter()
const adminStore = useAdminStore()

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const loading = ref(false)
const errorMessage = ref('')

const handleLogin = async () => {
  loading.value = true
  errorMessage.value = ''
  
  // Simulation d'un délai réseau
  await new Promise(resolve => setTimeout(resolve, 800))
  
  const success = adminStore.login(email.value, password.value)
  
  if (success) {
    // Redirection vers le dashboard
    router.push('/admin/dashboard')
  } else {
    errorMessage.value = 'Email ou mot de passe incorrect'
    loading.value = false
  }
}
</script>

