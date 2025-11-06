<template>
  <div class="max-w-7xl mx-auto">
    <!-- Bouton Retour -->
    <button 
      type="button"
      @click="goToDashboard"
      class="inline-flex items-center gap-2 text-gray-600 hover:text-indigo-600 mb-6 font-semibold transition-colors group"
    >
      <svg class="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"/>
      </svg>
      Retour au Dashboard
    </button>

    <!-- Header avec bouton sauvegarder -->
    <div class="bg-white rounded-2xl shadow-lg p-8 mb-8 flex items-center justify-between">
      <div>
        <h2 class="text-2xl font-bold text-gray-900">Kit Digital / Écran Samsung</h2>
        <p class="text-gray-600">Gérez la valeur, les détails et les images</p>
      </div>
      <button 
        @click="saveChanges"
        class="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"/>
        </svg>
        Sauvegarder
      </button>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
      <!-- Configuration Valeur et Textes -->
      <div class="bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
          </svg>
          Configuration
        </h3>

        <!-- Valeur pour 50+ licences -->
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Valeur offerte pour 50+ licences (€)</label>
          <div class="bg-purple-50 px-3 py-2 rounded-lg mb-2">
            <p class="text-xs text-purple-700 font-semibold">ℹ️ L'écran n'est disponible qu'à partir de 50 licences</p>
          </div>
          <input 
            v-model.number="formData.valeur50plus"
            type="number"
            min="0"
            step="1"
            class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none text-2xl font-bold text-purple-600"
          >
        </div>

        <!-- Titre -->
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Titre</label>
          <input 
            v-model="formData.titre"
            type="text"
            class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
          >
        </div>

        <!-- Description -->
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Description</label>
          <textarea 
            v-model="formData.description"
            rows="3"
            class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none resize-none"
          ></textarea>
        </div>
      </div>

      <!-- Carrousel d'Images -->
      <div class="bg-white rounded-2xl shadow-lg p-8">
        <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"/>
          </svg>
          Carrousel d'Images
        </h3>

        <!-- Images actuelles -->
        <div class="space-y-3 mb-4">
          <div 
            v-for="(image, index) in formData.images" 
            :key="index"
            class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl group hover:bg-gray-100 transition-colors"
          >
            <div class="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
              <img :src="image" alt="Preview" class="w-full h-full object-cover" />
            </div>
            <div class="flex-1">
              <p class="text-sm font-medium text-gray-900 truncate">{{ image }}</p>
              <p class="text-xs text-gray-500">Image {{ index + 1 }}</p>
            </div>
            <button 
              @click="removeImage(index)"
              class="w-8 h-8 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Ajouter une image -->
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Ajouter une image (URL)</label>
          <div class="flex gap-2">
            <input 
              v-model="newImageUrl"
              type="text"
              placeholder="/samsung-screen-2.jpg"
              class="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
            >
            <button 
              @click="addImage"
              class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center gap-2"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"/>
              </svg>
              Ajouter
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Détails du Kit -->
    <div class="bg-white rounded-2xl shadow-lg p-8 mt-8">
      <div class="flex items-center justify-between mb-6">
        <h3 class="text-xl font-bold text-gray-900 flex items-center gap-2">
          <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
            <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
          </svg>
          Détails du Kit (4 éléments)
        </h3>
        <div class="flex items-center gap-2 text-sm">
          <div class="flex items-center gap-1 text-green-600">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
              <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
            </svg>
            <span class="font-semibold">Visible</span>
          </div>
          <span class="text-gray-400">|</span>
          <div class="flex items-center gap-1 text-gray-400">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd"/>
              <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"/>
            </svg>
            <span class="font-semibold">Masqué</span>
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div 
          v-for="(detail, index) in formData.details" 
          :key="index"
          class="p-6 rounded-xl border-2 transition-all"
          :class="detail.visible ? 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-300' : 'bg-gray-50 border-gray-200 opacity-60'"
        >
          <!-- Header avec numéro et toggle -->
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                {{ index + 1 }}
              </div>
              <span class="text-sm font-semibold text-gray-600">Détail {{ index + 1 }}</span>
            </div>
            
            <!-- Toggle Visibilité -->
            <button 
              @click="detail.visible = !detail.visible"
              class="flex items-center gap-2 px-3 py-1.5 rounded-lg font-semibold text-sm transition-all shadow-sm"
              :class="detail.visible ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-gray-300 text-gray-600 hover:bg-gray-400'"
            >
              <svg v-if="detail.visible" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
              </svg>
              <svg v-else class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd"/>
                <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"/>
              </svg>
              {{ detail.visible ? 'Visible' : 'Masqué' }}
            </button>
          </div>
          
          <!-- Champs -->
          <div class="space-y-3">
            <div>
              <label class="block text-xs font-bold text-gray-700 mb-1.5">Titre du détail</label>
              <input 
                v-model="detail.titre"
                type="text"
                placeholder="Ex: Écran Samsung 43&quot;"
                class="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-xl font-semibold text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all"
              >
            </div>
            
            <div>
              <label class="block text-xs font-bold text-gray-700 mb-1.5">Description</label>
              <textarea 
                v-model="detail.description"
                rows="3"
                placeholder="Ex: Écran professionnel haute résolution..."
                class="w-full px-4 py-3 bg-white border-2 border-purple-200 rounded-xl text-sm text-gray-700 resize-none focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all"
              ></textarea>
            </div>
          </div>
          
          <!-- Statut en bas -->
          <div class="mt-4 pt-3 border-t-2" :class="detail.visible ? 'border-green-200' : 'border-gray-200'">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2 text-xs font-bold" :class="detail.visible ? 'text-green-600' : 'text-gray-400'">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path v-if="detail.visible" fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  <path v-else fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                </svg>
                {{ detail.visible ? 'Visible sur le front' : 'Masqué sur le front' }}
              </div>
              <span class="text-xs text-gray-400">{{ detail.titre ? '✓ Titre rempli' : 'Titre vide' }}</span>
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
        <span class="font-semibold">Modifications sauvegardées !</span>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAdminStore } from '~/stores/admin'

definePageMeta({
  layout: 'admin',
  middleware: 'admin-auth'
})

const adminStore = useAdminStore()
const router = useRouter()

const goToDashboard = () => {
  router.push('/admin/dashboard')
}

const formData = ref({
  valeur50plus: 360,
  titre: '',
  description: '',
  images: [],
  details: []
})

const newImageUrl = ref('')
const showToast = ref(false)

onMounted(() => {
  // Charger les données actuelles
  formData.value = JSON.parse(JSON.stringify(adminStore.kitDigital))
})

const addImage = () => {
  if (newImageUrl.value.trim()) {
    formData.value.images.push(newImageUrl.value.trim())
    newImageUrl.value = ''
  }
}

const removeImage = (index) => {
  if (confirm('Supprimer cette image ?')) {
    formData.value.images.splice(index, 1)
  }
}

const saveChanges = () => {
  adminStore.updateKitDigital(formData.value)
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

