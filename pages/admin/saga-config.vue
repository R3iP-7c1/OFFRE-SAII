<template>
  <div class="max-w-7xl mx-auto">
    <NuxtLink to="/admin/dashboard" class="inline-flex items-center gap-2 text-gray-600 hover:text-indigo-600 mb-6 font-semibold transition-colors group">
      <svg class="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"/>
      </svg>
      Retour au Dashboard
    </NuxtLink>

    <div class="bg-white rounded-2xl shadow-lg p-8">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h1 class="text-3xl font-bold text-gray-900 mb-2">Configuration SAGA</h1>
          <p class="text-gray-600">Gérer les paliers de participation SAGA en pourcentage</p>
        </div>
        <button 
          @click="saveChanges"
          class="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
          </svg>
          Sauvegarder
        </button>
      </div>

      <!-- Configuration du Pourcentage SAGA -->
      <div class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
        <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          Configuration du Pourcentage SAGA
        </h3>
        
        <div class="bg-white rounded-xl p-6 border-2 border-green-200 shadow-sm">
          <!-- Boutons de Configuration Rapide -->
          <div class="mb-6">
            <h4 class="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
              Configuration Rapide
            </h4>
            <div class="grid md:grid-cols-3 gap-4">
              <button 
                @click="setQuickConfig(5.0, 'Participation standard', 50, 99)"
                class="p-4 bg-blue-50 hover:bg-blue-100 border-2 border-blue-200 hover:border-blue-300 rounded-xl transition-all group"
                :class="{ 'ring-2 ring-blue-500 bg-blue-100': formData.pourcentage === 5.0 }"
              >
                <div class="text-center">
                  <div class="text-2xl font-bold text-blue-600 mb-1">5%</div>
                  <div class="text-sm font-semibold text-blue-800">Standard</div>
                  <div class="text-xs text-blue-600 mt-1">50-99 licences</div>
                </div>
              </button>
              
              <button 
                @click="setQuickConfig(7.5, 'Participation premium', 100, 199)"
                class="p-4 bg-purple-50 hover:bg-purple-100 border-2 border-purple-200 hover:border-purple-300 rounded-xl transition-all group"
                :class="{ 'ring-2 ring-purple-500 bg-purple-100': formData.pourcentage === 7.5 }"
              >
                <div class="text-center">
                  <div class="text-2xl font-bold text-purple-600 mb-1">7.5%</div>
                  <div class="text-sm font-semibold text-purple-800">Premium</div>
                  <div class="text-xs text-purple-600 mt-1">100-199 licences</div>
                </div>
              </button>
              
              <button 
                @click="setQuickConfig(10.0, 'Participation enterprise', 200, 9999)"
                class="p-4 bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-200 hover:border-emerald-300 rounded-xl transition-all group"
                :class="{ 'ring-2 ring-emerald-500 bg-emerald-100': formData.pourcentage === 10.0 }"
              >
                <div class="text-center">
                  <div class="text-2xl font-bold text-emerald-600 mb-1">10%</div>
                  <div class="text-sm font-semibold text-emerald-800">Enterprise</div>
                  <div class="text-xs text-emerald-600 mt-1">200+ licences</div>
                </div>
              </button>
            </div>
          </div>
          
          <!-- Configuration des Seuils -->
          <div class="mb-6">
            <h4 class="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg class="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
              </svg>
              Seuils de Déblocage Automatique
            </h4>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
                <div class="text-center">
                  <div class="text-lg font-bold text-blue-600 mb-2">Standard</div>
                  <div class="text-sm text-blue-800 mb-3">50-99 licences</div>
                  <div class="flex items-center justify-center gap-2">
                    <input 
                      v-model.number="formData.seuils.standard.min"
                      type="number"
                      min="1"
                      class="w-16 px-2 py-1 border border-blue-300 rounded text-center font-bold"
                    >
                    <span class="text-blue-600">-</span>
                    <input 
                      v-model.number="formData.seuils.standard.max"
                      type="number"
                      min="1"
                      class="w-16 px-2 py-1 border border-blue-300 rounded text-center font-bold"
                    >
                  </div>
                </div>
              </div>
              
              <div class="bg-purple-50 rounded-xl p-4 border-2 border-purple-200">
                <div class="text-center">
                  <div class="text-lg font-bold text-purple-600 mb-2">Premium</div>
                  <div class="text-sm text-purple-800 mb-3">100-199 licences</div>
                  <div class="flex items-center justify-center gap-2">
                    <input 
                      v-model.number="formData.seuils.premium.min"
                      type="number"
                      min="1"
                      class="w-16 px-2 py-1 border border-purple-300 rounded text-center font-bold"
                    >
                    <span class="text-purple-600">-</span>
                    <input 
                      v-model.number="formData.seuils.premium.max"
                      type="number"
                      min="1"
                      class="w-16 px-2 py-1 border border-purple-300 rounded text-center font-bold"
                    >
                  </div>
                </div>
              </div>
              
              <div class="bg-emerald-50 rounded-xl p-4 border-2 border-emerald-200">
                <div class="text-center">
                  <div class="text-lg font-bold text-emerald-600 mb-2">Enterprise</div>
                  <div class="text-sm text-emerald-800 mb-3">200+ licences</div>
                  <div class="flex items-center justify-center gap-2">
                    <input 
                      v-model.number="formData.seuils.enterprise.min"
                      type="number"
                      min="1"
                      class="w-16 px-2 py-1 border border-emerald-300 rounded text-center font-bold"
                    >
                    <span class="text-emerald-600">+</span>
                    <div class="w-16 px-2 py-1 bg-emerald-100 rounded text-center font-bold text-emerald-600">
                      ∞
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">Pourcentage SAGA</label>
              <div class="flex items-center gap-2">
                <input 
                  v-model.number="formData.pourcentage"
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none font-bold text-green-600 text-2xl"
                >
                <span class="text-2xl font-bold text-green-600">%</span>
              </div>
              <p class="text-xs text-gray-500 mt-1">Pourcentage de participation SAGA sur l'investissement global</p>
            </div>
            
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">Description</label>
              <input 
                v-model="formData.description"
                type="text"
                placeholder="Description du pourcentage SAGA"
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none font-semibold"
              >
            </div>
          </div>
          
          <!-- Exemple de calcul avec seuils -->
          <div class="mt-6 p-4 bg-green-50 rounded-lg">
            <p class="text-sm text-green-700 font-semibold mb-2">
              💡 Exemple de calcul avec seuils automatiques :
            </p>
            <div class="text-xs text-green-600 space-y-1">
              <p>• <strong>50-99 licences</strong> : {{ formData.seuils.standard.pourcentage }}% (Standard)</p>
              <p>• <strong>100-199 licences</strong> : {{ formData.seuils.premium.pourcentage }}% (Premium)</p>
              <p>• <strong>200+ licences</strong> : {{ formData.seuils.enterprise.pourcentage }}% (Enterprise)</p>
              <div class="mt-2 p-2 bg-white rounded border">
                <p class="font-semibold">Exemple avec 150 licences :</p>
                <p>→ Seuil Premium activé ({{ formData.seuils.premium.pourcentage }}%)</p>
                <p>→ Calcul : (360€ + 0€ + 120€) × 150 × {{ formData.seuils.premium.pourcentage }}% = {{ Math.round((360 + 0 + 120) * 150 * (formData.seuils.premium.pourcentage / 100)) }}€</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Information sur le calcul -->
      <div class="mt-8 bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
        <h4 class="text-lg font-bold text-blue-900 mb-3 flex items-center gap-2">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
          </svg>
          Comment ça fonctionne ?
        </h4>
        <div class="text-sm text-blue-800 space-y-2">
          <p>La participation SAGA est calculée automatiquement selon des <strong>seuils configurables</strong> basés sur le nombre de licences.</p>
          <p>Ce système s'active uniquement à partir de <strong>50 licences</strong>.</p>
          
          <div class="mt-4 p-3 bg-white rounded-lg border">
            <p class="font-semibold mb-2">🎯 Seuils Automatiques :</p>
            <div class="space-y-1 text-xs">
              <p>• <strong>50-99 licences</strong> → {{ formData.seuils.standard.pourcentage }}% (Standard)</p>
              <p>• <strong>100-199 licences</strong> → {{ formData.seuils.premium.pourcentage }}% (Premium)</p>
              <p>• <strong>200+ licences</strong> → {{ formData.seuils.enterprise.pourcentage }}% (Enterprise)</p>
            </div>
          </div>
          
          <p class="font-semibold mt-3">Formule de calcul :</p>
          <ul class="list-disc list-inside ml-4 space-y-1">
            <li>Investissement global = (Participation Marque + Participation Adhérent + Participation Partenaire) × Nombre de licences</li>
            <li>Participation SAGA = Investissement global × (Pourcentage du seuil / 100)</li>
            <li>Le pourcentage est déterminé automatiquement selon le nombre de licences</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Toast de confirmation -->
    <Transition name="slide-up">
      <div v-if="showToast" class="fixed bottom-8 right-8 bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 z-50">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
        <span class="font-semibold">Configuration SAGA sauvegardée !</span>
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
  pourcentage: 5.0,
  description: 'Pourcentage de participation SAGA sur l\'investissement global',
  seuils: {
    standard: { min: 50, max: 99, pourcentage: 5.0, nom: 'Standard' },
    premium: { min: 100, max: 199, pourcentage: 7.5, nom: 'Premium' },
    enterprise: { min: 200, max: 9999, pourcentage: 10.0, nom: 'Enterprise' }
  }
})

const showToast = ref(false)

onMounted(() => {
  // Charger les données actuelles
  formData.value = {
    pourcentage: adminStore.sagaConfig?.pourcentage || 5.0,
    description: adminStore.sagaConfig?.description || 'Pourcentage de participation SAGA sur l\'investissement global',
    seuils: adminStore.sagaConfig?.seuils || {
      standard: { min: 50, max: 99, pourcentage: 5.0, nom: 'Standard' },
      premium: { min: 100, max: 199, pourcentage: 7.5, nom: 'Premium' },
      enterprise: { min: 200, max: 9999, pourcentage: 10.0, nom: 'Enterprise' }
    }
  }
})

const saveChanges = () => {
  adminStore.updateSagaConfig(formData.value)
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 3000)
}

// Configuration rapide
const setQuickConfig = (pourcentage, description, min, max) => {
  formData.value.pourcentage = pourcentage
  formData.value.description = description
  
  // Mettre à jour les seuils correspondants
  if (pourcentage === 5.0) {
    formData.value.seuils.standard.min = min
    formData.value.seuils.standard.max = max
  } else if (pourcentage === 7.5) {
    formData.value.seuils.premium.min = min
    formData.value.seuils.premium.max = max
  } else if (pourcentage === 10.0) {
    formData.value.seuils.enterprise.min = min
    formData.value.seuils.enterprise.max = max
  }
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
