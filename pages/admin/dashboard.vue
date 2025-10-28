<template>
  <div>
    <!-- Navbar Admin -->
    <nav class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-xl mb-8">
      <div class="container mx-auto px-8 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <img src="/LOGO_SAII_EDIT.png" alt="Saii" class="h-10 w-auto" />
            <div>
              <h1 class="text-2xl font-bold">Backoffice Saii</h1>
              <p class="text-sm text-purple-100">Tableau de Bord</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <NuxtLink 
              to="/"
              target="_blank"
              class="flex items-center gap-2 px-6 py-2.5 bg-white text-indigo-600 hover:bg-gray-100 rounded-xl transition-all shadow-lg font-bold"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
              </svg>
              Voir le Site
            </NuxtLink>
            <button 
              @click="handleLogout"
              class="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-xl transition-colors font-semibold"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"/>
              </svg>
              Déconnexion
            </button>
          </div>
        </div>
      </div>
    </nav>

    <div class="max-w-7xl mx-auto px-8">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
      <!-- Stats Cards -->
      <div class="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"/>
              <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd"/>
            </svg>
          </div>
          <div class="text-right">
            <p class="text-2xl font-bold">{{ adminStore.kitCommunication?.valeur1_49 || 257 }} €</p>
            <p class="text-xs opacity-75">1-49 licences</p>
          </div>
        </div>
        <p class="text-blue-100">Kit Communication</p>
      </div>

      <div class="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"/>
              <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd"/>
            </svg>
          </div>
          <div class="text-right">
            <p class="text-2xl font-bold">{{ adminStore.kitCommunication?.valeur50plus || 360 }} €</p>
            <p class="text-xs opacity-75">50+ licences</p>
          </div>
        </div>
        <p class="text-indigo-100">Kit Communication Premium</p>
      </div>

      <div class="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white shadow-lg">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd"/>
            </svg>
          </div>
          <div class="text-right">
            <p class="text-2xl font-bold">{{ adminStore.kitDigital?.valeur50plus || 360 }} €</p>
            <p class="text-xs opacity-75">50+ licences</p>
          </div>
        </div>
        <p class="text-purple-100">Kit Digital / Écran</p>
      </div>

      <div class="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
            </svg>
          </div>
          <span class="text-3xl font-bold">{{ adminStore.prixConfig.paliers.length }}</span>
        </div>
        <p class="text-green-100">Paliers de remise</p>
      </div>

      <div class="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 text-white shadow-lg">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
            </svg>
          </div>
          <span class="text-3xl font-bold">{{ formatNumber(totalBudget2025) }} €</span>
        </div>
        <p class="text-orange-100">Budget 2025 Total</p>
      </div>
    </div>

    <!-- Actions Rapides -->
    <div class="grid md:grid-cols-2 gap-8">
      <div class="bg-white rounded-2xl shadow-lg p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Actions Rapides</h2>
        <div class="space-y-3">
          <NuxtLink 
            to="/admin/kit-communication"
            class="flex items-center gap-4 p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors group"
          >
            <div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
              </svg>
            </div>
            <div class="flex-1">
              <p class="font-bold text-gray-900">Modifier Kit Communication</p>
              <p class="text-sm text-gray-600">Gérer les détails et images</p>
            </div>
            <svg class="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
            </svg>
          </NuxtLink>

          <NuxtLink 
            to="/admin/kit-digital"
            class="flex items-center gap-4 p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors group"
          >
            <div class="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
              </svg>
            </div>
            <div class="flex-1">
              <p class="font-bold text-gray-900">Modifier Kit Digital</p>
              <p class="text-sm text-gray-600">Gérer les détails et images</p>
            </div>
            <svg class="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
            </svg>
          </NuxtLink>

          <NuxtLink 
            to="/admin/saga-config"
            class="flex items-center gap-4 p-4 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors group"
          >
            <div class="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="flex-1">
              <p class="font-bold text-gray-900">Configuration SAGA</p>
              <p class="text-sm text-gray-600">Paliers de participation</p>
            </div>
            <svg class="w-5 h-5 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
            </svg>
          </NuxtLink>

          <NuxtLink 
            to="/admin/prix-remises"
            class="flex items-center gap-4 p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors group"
          >
            <div class="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
              </svg>
            </div>
            <div class="flex-1">
              <p class="font-bold text-gray-900">Configurer Prix & Remises</p>
              <p class="text-sm text-gray-600">Gérer les paliers tarifaires</p>
            </div>
            <svg class="w-5 h-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
            </svg>
          </NuxtLink>

          <NuxtLink 
            to="/admin/print-config"
            class="flex items-center gap-4 p-4 bg-cyan-50 hover:bg-cyan-100 rounded-xl transition-colors group"
          >
            <div class="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"/>
                <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="flex-1">
              <p class="font-bold text-gray-900">Configuration Print</p>
              <p class="text-sm text-gray-600">Gérer supports et tarifs</p>
            </div>
            <svg class="w-5 h-5 text-gray-400 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
            </svg>
          </NuxtLink>
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-lg p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Configuration Actuelle</h2>
        
        <div class="space-y-4">
          <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <span class="text-gray-700 font-medium">Prix de base</span>
            <span class="text-2xl font-bold text-gray-900">{{ adminStore.prixConfig.prixBase }} €</span>
          </div>

          <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <span class="text-gray-700 font-medium">Kit Communication (1-49 licences)</span>
            <span class="text-xl font-bold text-blue-600">{{ adminStore.kitCommunication?.valeur1_49 || 257 }} € / licence</span>
          </div>

          <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <span class="text-gray-700 font-medium">Kit Communication (50+ licences)</span>
            <span class="text-xl font-bold text-blue-600">{{ adminStore.kitCommunication?.valeur50plus || 360 }} € / licence</span>
          </div>

          <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <span class="text-gray-700 font-medium">Kit Digital (50+ licences)</span>
            <span class="text-xl font-bold text-purple-600">{{ adminStore.kitDigital?.valeur50plus || 360 }} € / licence</span>
          </div>

          <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <span class="text-gray-700 font-medium">Budget 2025 Total</span>
            <span class="text-xl font-bold text-orange-600">{{ formatNumber(totalBudget2025) }} €</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAdminStore } from '~/stores/admin'
import { useRouter } from 'vue-router'

definePageMeta({
  middleware: 'admin-auth'
})

const adminStore = useAdminStore()
const router = useRouter()

const totalBudget2025 = computed(() => adminStore.totalBudget2025)

const formatNumber = (num) => {
  return Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

const handleLogout = () => {
  if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
    adminStore.logout()
    router.push('/admin/login')
  }
}
</script>

