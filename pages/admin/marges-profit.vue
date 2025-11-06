<template>
  <div class="max-w-7xl mx-auto">
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
        <h2 class="text-2xl font-bold text-gray-900">Gestion des Marges de Profit</h2>
        <p class="text-gray-600">Configurez les différents types de tarifs et marges</p>
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

    <!-- Marge par défaut -->
    <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <svg class="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
        Marge par défaut
      </h3>
      
      <div class="grid md:grid-cols-3 gap-4">
        <div 
          v-for="margin in allMargins" 
          :key="margin.id"
          @click="setDefaultMargin(margin.id)"
          class="relative cursor-pointer group"
        >
          <div 
            class="p-6 rounded-xl border-2 transition-all duration-200"
            :class="[
              margin.id === currentDefaultMargin ? 
                'border-indigo-500 bg-indigo-50' : 
                'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            ]"
          >
            <div class="flex items-center gap-4">
              <div 
                class="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                :class="getColorClasses(margin.color)"
              >
                <component :is="getIconComponent(margin.icon)" class="w-6 h-6" />
              </div>
              <div class="flex-1">
                <h4 class="font-bold text-gray-900">{{ margin.name }}</h4>
                <p class="text-sm text-gray-600">{{ margin.description }}</p>
                <p class="text-xs text-gray-500 mt-1">
                  Multiplicateur: {{ margin.multiplier }}x
                </p>
              </div>
              <div v-if="margin.id === currentDefaultMargin" class="text-indigo-600">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Liste des marges existantes -->
    <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <div class="flex items-center justify-between mb-6">
        <h3 class="text-xl font-bold text-gray-900 flex items-center gap-2">
          <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
          </svg>
          Marges configurées ({{ allMargins.length }})
        </h3>
        <button 
          @click="openAddMarginModal"
          class="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
          </svg>
          Ajouter une marge
        </button>
      </div>

      <div class="space-y-4">
        <div 
          v-for="margin in allMargins" 
          :key="margin.id"
          class="grid grid-cols-12 gap-4 items-center p-4 rounded-xl border-2 border-gray-100 hover:border-gray-200 transition-colors"
        >
          <!-- Icône et nom -->
          <div class="col-span-3 flex items-center gap-3">
            <div 
              class="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold"
              :class="getColorClasses(margin.color)"
            >
              <component :is="getIconComponent(margin.icon)" class="w-5 h-5" />
            </div>
            <div>
              <h4 class="font-bold text-gray-900">{{ margin.name }}</h4>
              <p class="text-xs text-gray-600">{{ margin.description }}</p>
            </div>
          </div>

          <!-- Multiplicateur -->
          <div class="col-span-2 text-center">
            <p class="text-sm text-gray-600 mb-1">Multiplicateur</p>
            <p class="text-2xl font-bold" :class="getColorText(margin.color)">{{ margin.multiplier }}x</p>
          </div>

          <!-- Prix de base et calculé -->
          <div class="col-span-3 text-center">
            <p class="text-sm text-gray-600 mb-1">Prix (base: 732€)</p>
            <div class="space-y-1">
              <p class="text-lg font-bold text-gray-900">{{ Math.round(732 * margin.multiplier) }} €</p>
              <p class="text-xs text-gray-500">
                {{ margin.multiplier > 1 ? '+' : margin.multiplier < 1 ? '' : '' }}{{ Math.round((margin.multiplier - 1) * 100) }}%
              </p>
            </div>
          </div>

          <!-- Statut par défaut -->
          <div class="col-span-2 text-center">
            <span 
              v-if="margin.id === currentDefaultMargin"
              class="inline-flex items-center gap-1 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              Par défaut
            </span>
            <span v-else class="text-gray-400 text-xs">-</span>
          </div>

          <!-- Actions -->
          <div class="col-span-2 flex items-center gap-2">
            <button 
              @click="openEditMarginModal(margin)"
              class="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              title="Modifier"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
              </svg>
            </button>
            <button 
              @click="deleteMargin(margin.id)"
              :disabled="margin.id === currentDefaultMargin"
              class="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              title="Supprimer"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9zM4 5a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Ajouter/Modifier Marge -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6 border-b border-gray-200">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-bold text-gray-900">
              {{ editingMargin ? 'Modifier la marge' : 'Ajouter une nouvelle marge' }}
            </h3>
            <button 
              @click="closeModal"
              class="p-2 text-gray-400 hover:text-gray-600 rounded-lg transition-colors"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </button>
          </div>
        </div>

        <form @submit.prevent="saveMargin" class="p-6 space-y-6">
          <!-- Nom -->
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Nom de la marge</label>
            <input 
              v-model="marginForm.name"
              type="text"
              required
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none"
              placeholder="Ex: Tarifs Premium"
            >
          </div>

          <!-- Description -->
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Description</label>
            <textarea 
              v-model="marginForm.description"
              rows="3"
              class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none"
              placeholder="Description de cette marge..."
            ></textarea>
          </div>

          <!-- Couleur et Icône -->
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">Couleur</label>
              <div class="grid grid-cols-6 gap-2">
                <button 
                  v-for="color in availableColors" 
                  :key="color"
                  @click="marginForm.color = color"
                  type="button"
                  class="w-12 h-12 rounded-lg border-2 transition-all"
                  :class="[
                    marginForm.color === color ? 'border-gray-900 scale-110' : 'border-gray-200 hover:border-gray-400',
                    getColorClasses(color)
                  ]"
                ></button>
              </div>
            </div>

            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">Icône</label>
              <div class="grid grid-cols-6 gap-2">
                <button 
                  v-for="icon in availableIcons" 
                  :key="icon"
                  @click="marginForm.icon = icon"
                  type="button"
                  class="w-12 h-12 rounded-lg border-2 transition-all flex items-center justify-center"
                  :class="[
                    marginForm.icon === icon ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-gray-400'
                  ]"
                >
                  <component :is="getIconComponent(icon)" class="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          <!-- Multiplicateur -->
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Multiplicateur de prix</label>
            <div class="flex items-center gap-4">
              <input 
                v-model.number="marginForm.multiplier"
                type="number"
                step="0.1"
                min="0.1"
                max="5"
                required
                class="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none"
              >
              <div class="text-center">
                <p class="text-sm text-gray-600 mb-1">Prix calculé</p>
                <p class="text-2xl font-bold text-indigo-600">{{ Math.round(732 * marginForm.multiplier) }} €</p>
              </div>
            </div>
            <p class="text-xs text-gray-500 mt-2">
              Multiplicateur de {{ marginForm.multiplier }}x = {{ Math.round((marginForm.multiplier - 1) * 100) }}% {{ marginForm.multiplier > 1 ? 'de majoration' : marginForm.multiplier < 1 ? 'de remise' : 'sans modification' }}
            </p>
          </div>

          <!-- Actions -->
          <div class="flex items-center justify-end gap-4 pt-6 border-t border-gray-200">
            <button 
              type="button"
              @click="closeModal"
              class="px-6 py-3 text-gray-600 hover:text-gray-800 font-semibold transition-colors"
            >
              Annuler
            </button>
            <button 
              type="submit"
              class="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              {{ editingMargin ? 'Modifier' : 'Ajouter' }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Toast de confirmation -->
    <Transition name="slide-up">
      <div v-if="showToast" class="fixed bottom-8 right-8 bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 z-50">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
        <span class="font-semibold">{{ toastMessage }}</span>
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

// État des modals et formulaires
const isModalOpen = ref(false)
const editingMargin = ref(null)
const showToast = ref(false)
const toastMessage = ref('')

// Formulaires
const marginForm = ref({
  name: '',
  description: '',
  color: 'blue',
  icon: 'tag',
  multiplier: 1.0
})

// Couleurs et icônes disponibles
const availableColors = ['blue', 'green', 'purple', 'orange', 'red', 'pink', 'indigo', 'yellow', 'gray']
const availableIcons = ['users', 'store', 'building', 'tag', 'star', 'heart', 'shield', 'trophy', 'gift']

// Computed properties
const allMargins = computed(() => adminStore.getAllMargins)
const currentDefaultMargin = computed(() => adminStore.profitMargins.defaultMargin)

// Fonctions utilitaires
const getColorClasses = (color) => {
  const colorMap = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500',
    red: 'bg-red-500',
    pink: 'bg-pink-500',
    indigo: 'bg-indigo-500',
    yellow: 'bg-yellow-500',
    gray: 'bg-gray-500'
  }
  return colorMap[color] || 'bg-gray-500'
}

const getColorText = (color) => {
  const colorMap = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    orange: 'text-orange-600',
    red: 'text-red-600',
    pink: 'text-pink-600',
    indigo: 'text-indigo-600',
    yellow: 'text-yellow-600',
    gray: 'text-gray-600'
  }
  return colorMap[color] || 'text-gray-600'
}

const getIconComponent = (iconName) => {
  const iconMap = {
    users: 'svg',
    store: 'svg',
    building: 'svg',
    tag: 'svg',
    star: 'svg',
    heart: 'svg',
    shield: 'svg',
    trophy: 'svg',
    gift: 'svg'
  }
  return iconMap[iconName] || 'svg'
}

// Actions
const setDefaultMargin = (marginId) => {
  adminStore.setDefaultMargin(marginId)
  showToastMessage('Marge par défaut mise à jour')
}

const openAddMarginModal = () => {
  editingMargin.value = null
  marginForm.value = {
    name: '',
    description: '',
    color: 'blue',
    icon: 'tag',
    multiplier: 1.0
  }
  isModalOpen.value = true
}

const openEditMarginModal = (margin) => {
  editingMargin.value = margin
  marginForm.value = {
    name: margin.name,
    description: margin.description,
    color: margin.color,
    icon: margin.icon,
    multiplier: margin.multiplier
  }
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  editingMargin.value = null
}

const saveMargin = () => {
  if (editingMargin.value) {
    adminStore.updateMargin(editingMargin.value.id, marginForm.value)
    showToastMessage('Marge modifiée avec succès')
  } else {
    adminStore.addMargin(marginForm.value)
    showToastMessage('Nouvelle marge ajoutée')
  }
  closeModal()
}

const deleteMargin = (marginId) => {
  if (confirm('Êtes-vous sûr de vouloir supprimer cette marge ?')) {
    const success = adminStore.deleteMargin(marginId)
    if (success) {
      showToastMessage('Marge supprimée')
    } else {
      showToastMessage('Impossible de supprimer la marge par défaut')
    }
  }
}

const saveChanges = () => {
  showToastMessage('Configuration sauvegardée')
}

const showToastMessage = (message) => {
  toastMessage.value = message
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 3000)
}

onMounted(() => {
  adminStore.loadFromLocalStorage()
})
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

