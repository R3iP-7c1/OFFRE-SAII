<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto" @click.self="closeModal">
        <!-- Backdrop -->
        <div class="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"></div>
        
        <!-- Modal Container -->
        <div class="flex min-h-screen items-center justify-center p-4">
          <div class="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all" @click.stop>
            
            <!-- Close Button -->
            <button @click="closeModal" class="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors group">
              <svg class="w-6 h-6 text-gray-600 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            <div class="grid md:grid-cols-2 gap-0">
              <!-- Image Section - Left -->
              <div class="relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 p-8 md:p-12 flex items-center justify-center">
                <div class="absolute inset-0 opacity-10">
                  <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"></div>
                </div>
                
                <div class="relative z-10 w-full">
                  <!-- Badge Premium -->
                  <div class="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold text-sm mb-6">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <span>Solution Premium</span>
                  </div>

                  <!-- Carrousel d'images de l'écran -->
                  <div class="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                    <img :src="currentImage" alt="Écran Samsung 43 pouces avec Player" class="w-full h-auto object-cover select-none" />

                    <!-- Controls -->
                    <button 
                      v-if="imagesCount > 1"
                      @click="prevImage"
                      class="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-gray-700 shadow-md"
                    >
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M12.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L8.414 10l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"/>
                      </svg>
                    </button>
                    <button 
                      v-if="imagesCount > 1"
                      @click="nextImage"
                      class="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-gray-700 shadow-md"
                    >
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M7.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 10 7.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                      </svg>
                    </button>

                    <!-- Dots -->
                    <div v-if="imagesCount > 1" class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 px-3 py-1.5 rounded-full">
                      <button 
                        v-for="(img, idx) in kitData.images"
                        :key="idx"
                        @click="goTo(idx)"
                        class="w-2.5 h-2.5 rounded-full"
                        :class="idx === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/80'"
                        aria-label="Aller à l'image"
                      />
                    </div>
                  </div>
                  
                  <!-- Stats rapides -->
                  <div class="grid grid-cols-3 gap-4 mt-6 text-center">
                    <div class="bg-white/10 backdrop-blur rounded-xl p-4">
                      <div class="text-3xl font-bold text-white mb-1">43"</div>
                      <div class="text-xs text-purple-200">Écran 4K</div>
                    </div>
                    <div class="bg-white/10 backdrop-blur rounded-xl p-4">
                      <div class="text-3xl font-bold text-white mb-1">24/7</div>
                      <div class="text-xs text-purple-200">Diffusion</div>
                    </div>
                    <div class="bg-white/10 backdrop-blur rounded-xl p-4">
                      <div class="text-3xl font-bold text-white mb-1">∞</div>
                      <div class="text-xs text-purple-200">Contenus</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Content Section - Right -->
              <div class="p-8 md:p-12 overflow-y-auto max-h-[80vh]">
                <div class="mb-6">
                  <span class="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    FORMULE ÉCRAN DIGITAL
                  </span>
                  <h2 class="text-4xl font-bold text-gray-900 mb-3">
                    {{ kitData.titre || 'Samsung 43" + Player Pro' }}
                  </h2>
                  <p class="text-xl text-gray-600">
                    {{ kitData.description || 'Transformez votre point de vente en vitrine digitale performante' }}
                  </p>
                </div>

                <!-- Prix -->
                <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 mb-8 border-2 border-purple-200">
                  <div class="flex items-baseline gap-3 mb-2">
                    <span v-if="tauxRemise > 0" class="text-2xl text-gray-400 line-through">{{ prixBase }} €</span>
                    <span class="text-5xl font-bold text-purple-600">{{ formatNumber(prixAvecRemise) }} €</span>
                    <span class="text-xl text-gray-600">/an</span>
                  </div>
                  <p class="text-center text-sm text-gray-600 mb-2">soit {{ formatNumber(prixAvecRemise / 12) }} € / mois</p>
                  <div v-if="tauxRemise > 0" class="flex items-center justify-center gap-2 text-green-600 font-semibold">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Économisez {{ formatNumber(prixBase - prixAvecRemise) }} € avec remise {{ tauxRemise }}%</span>
                  </div>
                  <div class="mt-3 text-center bg-yellow-100 text-yellow-900 px-4 py-2 rounded-lg text-sm font-bold">
                    🎁 Valeur Écran offerte : {{ valeurOfferte }} € (inclus dans votre formule)
                  </div>
                </div>

                <!-- Ce qui est inclus -->
                <div class="mb-8">
                  <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg class="w-7 h-7 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                      <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
                    </svg>
                    Ce qui est inclus
                  </h3>
                  
                  <div class="space-y-4">
                    <div 
                      v-for="(detail, index) in kitData.details || []" 
                      :key="index"
                      v-show="detail.titre && detail.titre.trim() !== '' && detail.visible !== false"
                      class="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <div class="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                      </div>
                      <div class="flex-1">
                        <h4 class="font-bold text-gray-900 mb-1">{{ detail.titre }}</h4>
                        <p class="text-sm text-gray-600">{{ detail.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Capacités du Player -->
                <div class="mb-8">
                  <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg class="w-7 h-7 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/>
                    </svg>
                    Capacités du Player Pro
                  </h3>
                  
                  <div class="grid grid-cols-2 gap-3">
                    <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
                      <div class="text-3xl mb-2">🎬</div>
                      <h4 class="font-bold text-gray-900 text-sm mb-1">Vidéos HD/4K</h4>
                      <p class="text-xs text-gray-600">Formats MP4, MOV, AVI</p>
                    </div>
                    
                    <div class="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4 border border-pink-200">
                      <div class="text-3xl mb-2">📊</div>
                      <h4 class="font-bold text-gray-900 text-sm mb-1">Playlists dynamiques</h4>
                      <p class="text-xs text-gray-600">Rotation automatique</p>
                    </div>
                    
                    <div class="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-4 border border-indigo-200">
                      <div class="text-3xl mb-2">⏰</div>
                      <h4 class="font-bold text-gray-900 text-sm mb-1">Horaires flexibles</h4>
                      <p class="text-xs text-gray-600">Programmation avancée</p>
                    </div>
                    
                    <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                      <div class="text-3xl mb-2">📡</div>
                      <h4 class="font-bold text-gray-900 text-sm mb-1">Gestion à distance</h4>
                      <p class="text-xs text-gray-600">Mise à jour instantanée</p>
                    </div>
                    
                    <div class="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 border border-yellow-200">
                      <div class="text-3xl mb-2">🎨</div>
                      <h4 class="font-bold text-gray-900 text-sm mb-1">Templates Saii</h4>
                      <p class="text-xs text-gray-600">Création facilitée</p>
                    </div>
                    
                    <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200">
                      <div class="text-3xl mb-2">📈</div>
                      <h4 class="font-bold text-gray-900 text-sm mb-1">Analytics</h4>
                      <p class="text-xs text-gray-600">Suivi performances</p>
                    </div>
                  </div>
                </div>

                <!-- Cas d'usage -->
                <div class="mb-8">
                  <h3 class="text-2xl font-bold text-gray-900 mb-4">Cas d'usage parfaits</h3>
                  
                  <div class="space-y-3">
                    <div class="flex items-center gap-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <svg class="w-5 h-5 text-purple-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      <span class="text-gray-800 font-medium">Promotions flash et opérations spéciales</span>
                    </div>
                    
                    <div class="flex items-center gap-3 p-3 bg-pink-50 rounded-lg border border-pink-200">
                      <svg class="w-5 h-5 text-pink-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      <span class="text-gray-800 font-medium">Mise en avant produits & partenaires</span>
                    </div>
                    
                    <div class="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                      <svg class="w-5 h-5 text-indigo-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      <span class="text-gray-800 font-medium">Communication événements magasin</span>
                    </div>
                    
                    <div class="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                      <svg class="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      <span class="text-gray-800 font-medium">Animation rayon & cross-selling</span>
                    </div>
                  </div>
                </div>

                <!-- ROI -->
                <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 mb-8 border-2 border-green-200">
                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <h4 class="text-xl font-bold text-gray-900 mb-2">ROI Immédiat</h4>
                      <p class="text-gray-700 mb-3">
                        En moyenne, nos clients constatent une <strong>augmentation de 25% des ventes</strong> sur les produits mis en avant via l'écran digital.
                      </p>
                      <div class="flex items-center gap-2 text-green-700 font-semibold">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span>Rentabilisé en moins de 3 mois</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- CTA -->
                <div class="flex gap-3">
                  <button @click="handleContact" class="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl">
                    Commander maintenant
                  </button>
                  <button @click="handleDemo" class="flex-1 bg-white hover:bg-gray-50 text-purple-600 font-bold py-4 px-6 rounded-xl border-2 border-purple-600 transition-all duration-200">
                    Voir une démo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  prixBase: {
    type: Number,
    default: 732
  },
  prixAvecRemise: {
    type: Number,
    default: 600
  },
  tauxRemise: {
    type: Number,
    default: 18
  },
  valeurOfferte: {
    type: Number,
    default: 360
  },
  kitData: {
    type: Object,
    default: () => ({
      titre: 'Écran Samsung 43" + Player Pro',
      description: 'Solution d\'affichage digital',
      images: ['/samsung-screen.jpg'],
      details: []
    })
  }
})

const emit = defineEmits(['close', 'contact', 'demo'])

// Fonction de formatage
const formatNumber = (num) => {
  return Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

const closeModal = () => {
  emit('close')
}

const handleContact = () => {
  emit('contact')
  // Logique de contact / commande
}

const handleDemo = () => {
  emit('demo')
  // Logique de démonstration
}

// Carousel logic
const currentIndex = ref(0)
const imagesCount = computed(() => (props.kitData?.images?.length || 0))
const safeImages = computed(() => (imagesCount.value > 0 ? props.kitData.images : ['/samsung-screen.jpg']))
const currentImage = computed(() => safeImages.value[Math.min(currentIndex.value, safeImages.value.length - 1)])

const nextImage = () => {
  if (imagesCount.value <= 1) return
  currentIndex.value = (currentIndex.value + 1) % imagesCount.value
}

const prevImage = () => {
  if (imagesCount.value <= 1) return
  currentIndex.value = (currentIndex.value - 1 + imagesCount.value) % imagesCount.value
}

const goTo = (idx) => {
  if (idx >= 0 && idx < imagesCount.value) currentIndex.value = idx
}

let autoTimer = null
const startAuto = () => {
  if (imagesCount.value <= 1) return
  stopAuto()
  autoTimer = setInterval(nextImage, 5000)
}
const stopAuto = () => {
  if (autoTimer) {
    clearInterval(autoTimer)
    autoTimer = null
  }
}

onMounted(startAuto)
onBeforeUnmount(stopAuto)
watch(() => props.isOpen, (open) => {
  if (open) startAuto(); else stopAuto()
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.3s ease;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.9);
}
</style>

