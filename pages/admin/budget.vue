<template>
  <div class="max-w-5xl mx-auto">
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
        <h2 class="text-2xl font-bold text-gray-900">Budget 2025</h2>
        <p class="text-gray-600">Configuration du budget de référence</p>
      </div>
      <button 
        @click="saveChanges"
        class="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"/>
        </svg>
        Sauvegarder
      </button>
    </div>

    <!-- Carte Budget -->
    <div class="bg-white rounded-2xl shadow-lg p-10">
      <div class="space-y-8">
        <!-- Ligne Employés -->
        <div class="p-6 bg-gradient-to-r from-red-50 to-red-100 rounded-xl border-2 border-red-200">
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">Libellé Employés</label>
              <input 
                v-model="formData.employes.libelle"
                type="text"
                class="w-full px-4 py-3 border-2 border-white rounded-xl focus:border-red-400 focus:outline-none bg-white"
              >
            </div>
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">Montant (€)</label>
              <input 
                v-model.number="formData.employes.montant"
                type="number"
                min="0"
                step="1"
                class="w-full px-4 py-3 border-2 border-white rounded-xl focus:border-red-400 focus:outline-none bg-white text-2xl font-bold text-red-600"
              >
            </div>
          </div>
        </div>

        <!-- Ligne Campagne -->
        <div class="p-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border-2 border-orange-200">
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">Libellé Campagne</label>
              <input 
                v-model="formData.campagne.libelle"
                type="text"
                class="w-full px-4 py-3 border-2 border-white rounded-xl focus:border-orange-400 focus:outline-none bg-white"
              >
            </div>
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">Montant (€)</label>
              <input 
                v-model.number="formData.campagne.montant"
                type="number"
                min="0"
                step="1"
                class="w-full px-4 py-3 border-2 border-white rounded-xl focus:border-orange-400 focus:outline-none bg-white text-2xl font-bold text-orange-600"
              >
            </div>
          </div>
        </div>

        <!-- Total Calculé -->
        <div class="p-6 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl text-white">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-lg opacity-90 mb-1">TOTAL BUDGET 2025</p>
              <p class="text-sm opacity-75">{{ formData.employes.libelle }} + {{ formData.campagne.libelle }}</p>
            </div>
            <div class="text-right">
              <p class="text-5xl font-bold">{{ formatNumber(totalBudget) }} €</p>
              <p class="text-lg opacity-90 mt-1">soit {{ formatNumber(totalBudget / 12) }} € /mois</p>
            </div>
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
        <span class="font-semibold">Budget 2025 sauvegardé !</span>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useAdminStore } from '~/stores/admin'

definePageMeta({
  layout: 'admin',
  middleware: 'admin-auth'
})

const adminStore = useAdminStore()

const formData = ref({
  employes: {
    libelle: '',
    montant: 0
  },
  campagne: {
    libelle: '',
    montant: 0
  }
})

const showToast = ref(false)

const totalBudget = computed(() => {
  return formData.value.employes.montant + formData.value.campagne.montant
})

onMounted(() => {
  // Charger les données actuelles
  formData.value = JSON.parse(JSON.stringify(adminStore.budget2025))
})

const formatNumber = (num) => {
  return Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

const saveChanges = () => {
  adminStore.updateBudget2025(formData.value)
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

