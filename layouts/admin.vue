<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Sidebar -->
    <aside class="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 text-white z-40 shadow-2xl">
      <!-- Logo -->
      <div class="p-6 border-b border-white/10">
        <img src="/LOGO_SAII_EDIT.png" alt="Saii" class="h-12 w-auto mx-auto mb-2" />
        <p class="text-center text-sm text-purple-200">Backoffice Admin</p>
      </div>

      <!-- User Info -->
      <div class="p-4 border-b border-white/10">
        <div class="flex items-center gap-3 bg-white/10 backdrop-blur rounded-xl p-3">
          <div class="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center font-bold">
            {{ adminStore.user?.name?.[0] || 'J' }}
          </div>
          <div class="flex-1">
            <p class="font-bold text-sm">{{ adminStore.user?.name || 'Jules' }}</p>
            <p class="text-xs text-purple-200">Administrateur</p>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="p-4 space-y-2">
        <NuxtLink 
          to="/admin/dashboard" 
          class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-white/10"
          :class="$route.path === '/admin/dashboard' ? 'bg-white/20 font-bold' : ''"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
          </svg>
          <span>Dashboard</span>
        </NuxtLink>

        <NuxtLink 
          to="/admin/kit-communication"
          class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-white/10"
          :class="$route.path === '/admin/kit-communication' ? 'bg-white/20 font-bold' : ''"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"/>
            <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd"/>
          </svg>
          <span>Kit Communication</span>
        </NuxtLink>

        <NuxtLink 
          to="/admin/kit-digital"
          class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-white/10"
          :class="$route.path === '/admin/kit-digital' ? 'bg-white/20 font-bold' : ''"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd"/>
          </svg>
          <span>Kit Digital</span>
        </NuxtLink>

        <NuxtLink 
          to="/admin/prix-remises"
          class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-white/10"
          :class="$route.path === '/admin/prix-remises' ? 'bg-white/20 font-bold' : ''"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
          </svg>
          <span>Prix & Remises</span>
        </NuxtLink>

        <NuxtLink 
          to="/admin/budget"
          class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-white/10"
          :class="$route.path === '/admin/budget' ? 'bg-white/20 font-bold' : ''"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
          </svg>
          <span>Budget 2025</span>
        </NuxtLink>
      </nav>

      <!-- Déconnexion -->
      <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
        <button 
          @click="handleLogout"
          class="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-500 hover:bg-red-600 rounded-xl transition-colors font-semibold"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"/>
          </svg>
          Déconnexion
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="ml-64 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <!-- Header / Navbar -->
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

              <!-- User Badge -->
              <div class="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-xl">
                <div class="w-9 h-9 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                  J
                </div>
                <div class="hidden xl:block">
                  <p class="text-sm font-bold text-gray-900">Jules</p>
                  <p class="text-xs text-gray-500">Admin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <!-- Page Content -->
      <main class="p-8 md:p-12">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAdminStore } from '~/stores/admin'
import { useRouter, useRoute } from 'vue-router'

const adminStore = useAdminStore()
const router = useRouter()
const route = useRoute()

const pageTitle = computed(() => {
  const titles = {
    '/admin/dashboard': 'Tableau de Bord',
    '/admin/kit-communication': 'Kit Communication',
    '/admin/kit-digital': 'Kit Digital / Écran',
    '/admin/prix-remises': 'Prix & Remises',
    '/admin/budget': 'Budget 2025'
  }
  return titles[route.path] || 'Administration'
})

const pageSubtitle = computed(() => {
  const subtitles = {
    '/admin/dashboard': 'Vue d\'ensemble de votre configuration',
    '/admin/kit-communication': 'Gérez la valeur, les détails et le carrousel d\'images',
    '/admin/kit-digital': 'Configurez l\'écran Samsung et ses caractéristiques',
    '/admin/prix-remises': 'Définissez les paliers tarifaires et remises',
    '/admin/budget': 'Configurez le budget de référence 2025'
  }
  return subtitles[route.path] || 'Gestion de votre offre Saii'
})

const handleLogout = () => {
  if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
    adminStore.logout()
    router.push('/admin/login')
  }
}
</script>

