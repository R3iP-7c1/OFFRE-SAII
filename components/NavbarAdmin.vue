<template>
  <nav class="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-md">
    <div class="px-8 py-4">
      <div class="flex items-center justify-between">
        <!-- Breadcrumb & Titre -->
        <div class="flex items-center gap-4">
          <NuxtLink 
            to="/admin/dashboard"
            class="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors group"
          >
            <div class="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
              </svg>
            </div>
            <span class="font-semibold text-sm">Dashboard</span>
          </NuxtLink>
          
          <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
          
          <div>
            <h1 class="text-2xl font-bold text-gray-900">{{ pageTitle }}</h1>
            <p class="text-xs text-gray-500 mt-0.5">{{ pageSubtitle }}</p>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-3">
          <!-- Indicateur de sauvegarde -->
          <div class="hidden md:flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-sm font-medium">
            <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Auto-save</span>
          </div>

          <!-- Bouton Voir le Site -->
          <NuxtLink 
            to="/"
            target="_blank"
            class="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl transition-all shadow-lg hover:shadow-xl font-bold"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
            </svg>
            <span class="hidden sm:inline">Voir le Site</span>
          </NuxtLink>

          <!-- User Menu -->
          <div class="relative group">
            <button class="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-xl transition-colors">
              <div class="w-9 h-9 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                J
              </div>
              <svg class="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </button>
            
            <!-- Dropdown Menu -->
            <div class="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div class="p-3 border-b border-gray-100">
                <p class="font-bold text-gray-900">Jules</p>
                <p class="text-xs text-gray-500">jules@sagaxp.fr</p>
              </div>
              <div class="p-2">
                <button 
                  @click="handleLogout"
                  class="w-full flex items-center gap-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"/>
                  </svg>
                  Déconnexion
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAdminStore } from '~/stores/admin'

const props = defineProps({
  pageTitle: {
    type: String,
    default: 'Administration'
  },
  pageSubtitle: {
    type: String,
    default: 'Gestion de votre offre'
  }
})

const router = useRouter()
const adminStore = useAdminStore()

const handleLogout = () => {
  if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
    adminStore.logout()
    router.push('/admin/login')
  }
}
</script>

