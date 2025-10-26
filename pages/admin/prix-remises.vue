<template>
  <div class="max-w-6xl mx-auto">
    <!-- Bouton Retour -->
    <NuxtLink 
      to="/admin/dashboard"
      class="inline-flex items-center gap-2 text-gray-600 hover:text-indigo-600 mb-6 font-semibold transition-colors group"
    >
      <svg class="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"/>
      </svg>
      Retour au Dashboard
    </NuxtLink>

    <!-- Header avec bouton sauvegarder -->
    <div class="bg-white rounded-2xl shadow-lg p-8 mb-8 flex items-center justify-between">
      <div>
        <h2 class="text-2xl font-bold text-gray-900">Prix & Remises</h2>
        <p class="text-gray-600">Configuration des paliers tarifaires</p>
      </div>
      <button 
        @click="saveChanges"
        class="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"/>
        </svg>
        Sauvegarder
      </button>
    </div>

    <!-- Prix de Base -->
    <div class="bg-white rounded-2xl shadow-lg p-8 mb-6">
      <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
        </svg>
        Prix de Base
      </h3>

      <div class="flex items-center gap-4">
        <div class="flex-1">
          <label class="block text-sm font-bold text-gray-700 mb-2">Prix de base annuel (€)</label>
          <input 
            v-model.number="formData.prixBase"
            type="number"
            min="0"
            step="1"
            class="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none text-3xl font-bold text-green-600"
          >
        </div>
        <div class="text-center pt-8">
          <div class="text-4xl">→</div>
        </div>
        <div class="flex-1 text-center pt-8">
          <p class="text-sm text-gray-600 mb-2">Prix mensuel</p>
          <p class="text-3xl font-bold text-gray-900">{{ Math.round(formData.prixBase / 12) }} €</p>
        </div>
      </div>
    </div>

    <!-- Paliers de Remise -->
    <div class="bg-white rounded-2xl shadow-lg p-8 mt-8">
      <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
        Paliers de Remise ({{ formData.paliers.length }} paliers)
      </h3>

      <div class="space-y-4">
        <div 
          v-for="(palier, index) in formData.paliers" 
          :key="index"
          class="grid grid-cols-5 gap-4 items-center p-4 rounded-xl transition-colors"
          :class="[
            index % 2 === 0 ? 'bg-green-50 border-2 border-green-200' : 'bg-blue-50 border-2 border-blue-200'
          ]"
        >
          <!-- Nom -->
          <div>
            <label class="block text-xs font-bold text-gray-600 mb-1">Nom</label>
            <input 
              v-model="palier.nom"
              type="text"
              class="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg font-semibold focus:outline-none focus:border-green-500"
            >
          </div>

          <!-- Min -->
          <div>
            <label class="block text-xs font-bold text-gray-600 mb-1">Min</label>
            <input 
              v-model.number="palier.min"
              type="number"
              min="1"
              class="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg font-bold text-center focus:outline-none focus:border-green-500"
            >
          </div>

          <!-- Max -->
          <div>
            <label class="block text-xs font-bold text-gray-600 mb-1">Max</label>
            <input 
              v-model.number="palier.max"
              type="number"
              min="1"
              class="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg font-bold text-center focus:outline-none focus:border-green-500"
            >
          </div>

          <!-- Remise % -->
          <div>
            <label class="block text-xs font-bold text-gray-600 mb-1">Remise %</label>
            <div class="relative">
              <input 
                v-model.number="palier.remise"
                type="number"
                min="0"
                max="100"
                class="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg font-bold text-center text-green-600 focus:outline-none focus:border-green-500"
              >
              <span class="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-bold text-green-600">%</span>
            </div>
          </div>

          <!-- Preview Prix -->
          <div class="text-center">
            <p class="text-xs text-gray-600 mb-1">Prix</p>
            <p class="text-lg font-bold text-gray-900">
              {{ Math.round(formData.prixBase * (1 - palier.remise / 100)) }} €
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Toast de confirmation -->
    <Transition name="slide-up">
      <div v-if="showToast" class="fixed bottom-8 right-8 bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 z-50">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
        <span class="font-semibold">Prix et remises sauvegardés !</span>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAdminStore } from '~/stores/admin'

definePageMeta({
  layout: 'admin',
  middleware: 'admin-auth'
})

const adminStore = useAdminStore()

const formData = ref({
  prixBase: 732,
  paliers: []
})

const showToast = ref(false)

onMounted(() => {
  // Charger les données actuelles
  formData.value = JSON.parse(JSON.stringify(adminStore.prixConfig))
})

const saveChanges = () => {
  adminStore.updatePrixConfig(formData.value)
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 3000)
}
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>

