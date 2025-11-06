<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
    <!-- Navbar -->
    <Navbar />
    
    <!-- Header Hero -->
    <header class="relative overflow-hidden bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white py-20">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center">
          <div class="inline-flex items-center justify-center mb-6">
            <img src="/LOGO_SAII_EDIT.png" alt="Saii Logo" class="h-24 md:h-32 w-auto" />
          </div>
          
          <div class="text-3xl md:text-4xl font-light mb-4 flex items-center justify-center gap-4">
            <span class="inline-block animate-float">🖨️</span>
            <span>Calculateur Print Grand Format</span>
            <span class="inline-block animate-float-delayed">📐</span>
          </div>
          
          <p class="text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto">
            Solutions d'impression digital professionnelle sur tous supports grands formats
          </p>
          
          <div class="mt-8 inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-6 py-3 rounded-full font-semibold animate-bounce-slow">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            Devis instantané et personnalisé
          </div>
        </div>
      </div>
    </header>

    <!-- Calculateur Principal -->
    <section class="container mx-auto px-6 py-20">
      <div class="max-w-7xl mx-auto">
        <!-- Titre Section -->
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Configurez votre impression
          </h2>
          <p class="text-xl text-gray-600">Choisissez vos options et obtenez un devis en temps réel</p>
        </div>

        <div class="grid lg:grid-cols-2 gap-8">
          <!-- Configuration -->
          <div class="bg-white rounded-3xl shadow-2xl p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center">
                <span class="text-cyan-600">⚙️</span>
              </div>
              Configuration
            </h3>
            
            <!-- Type de Support -->
             <!-- Adhésifs configurés -->
             <div class="mb-8" v-if="adhesifItems.length">
               <label class="block text-lg font-semibold text-gray-900 mb-4">Adhésifs (configuré)</label>
               <div class="grid grid-cols-2 gap-3">
                 <button
                   v-for="item in adhesifItems"
                   :key="item.matiere.id"
                   @click="selectAdhesif(item)"
                   :class="[
                     'p-4 rounded-xl border-2 transition-all text-left group hover:scale-105',
                     selectedMatiere?.id === item.matiere.id
                       ? 'border-cyan-500 bg-cyan-50 text-cyan-900 shadow-lg'
                       : 'border-gray-200 hover:border-gray-300 text-gray-700 hover:shadow-md'
                   ]"
                 >
                   <div class="flex items-center justify-between">
                     <div class="flex items-center gap-3">
                       <div class="w-6 h-6 rounded-full" :style="{ backgroundColor: item.matiere.couleur }"></div>
                       <div>
                         <p class="font-semibold">{{ item.matiere.nom }}</p>
                         <p class="text-xs opacity-75">{{ item.support.nom }}</p>
                       </div>
                     </div>
                     <span class="text-lg font-bold text-green-600">{{ item.matiere.prixParM2 }}€/m²</span>
                   </div>
                 </button>
               </div>
             </div>

             <!-- Type de Support -->
            <div class="mb-8">
              <label class="block text-lg font-semibold text-gray-900 mb-4">Type de Support</label>
              <div class="grid grid-cols-2 gap-3">
                <button
                  v-for="support in printStore.supports"
                  :key="support.id"
                  @click="selectSupport(support)"
                  :class="[
                    'p-4 rounded-xl border-2 transition-all text-left group hover:scale-105',
                    selectedSupport?.id === support.id
                      ? 'border-cyan-500 bg-cyan-50 text-cyan-900 shadow-lg'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700 hover:shadow-md'
                  ]"
                >
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform" :class="support.color">
                      <PrintIcon :type="getSupportIconType(support.id)" size="md" color="primary" />
                    </div>
                    <div>
                      <p class="font-semibold">{{ support.nom }}</p>
                      <p class="text-sm opacity-75">{{ support.description }}</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <!-- Matière -->
            <div class="mb-8" v-if="selectedSupport">
              <label class="block text-lg font-semibold text-gray-900 mb-4">Matière</label>
              <div class="space-y-2">
                <button
                  v-for="matiere in selectedSupport.matieres"
                  :key="matiere.id"
                  @click="selectMatiere(matiere)"
                  :class="[
                    'w-full p-4 rounded-lg border-2 transition-all text-left group hover:scale-102',
                    selectedMatiere?.id === matiere.id
                      ? 'border-green-500 bg-green-50 text-green-900 shadow-md'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700 hover:shadow-sm'
                  ]"
                >
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <div class="w-6 h-6 rounded-full" :style="{ backgroundColor: matiere.couleur }"></div>
                      <div>
                        <span class="font-medium">{{ matiere.nom }}</span>
                        <p class="text-sm opacity-75">{{ matiere.description }}</p>
                      </div>
                    </div>
                    <span class="text-lg font-bold text-green-600">{{ matiere.prixParM2 }}€/m²</span>
                  </div>
                </button>
              </div>
            </div>

            <!-- Dimensions -->
            <div class="mb-8">
              <div class="flex items-center justify-between mb-4">
                <label class="block text-lg font-semibold text-gray-900">Dimensions</label>
                <div class="flex items-center gap-2">
                  <button
                    @click="unite = 'cm'"
                    :class="[
                      'px-4 py-2 rounded-lg font-medium transition-colors',
                      unite === 'cm'
                        ? 'bg-cyan-500 text-white shadow-md'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    ]"
                  >
                    cm
                  </button>
                  <button
                    @click="unite = 'mm'"
                    :class="[
                      'px-4 py-2 rounded-lg font-medium transition-colors',
                      unite === 'mm'
                        ? 'bg-cyan-500 text-white shadow-md'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    ]"
                  >
                    mm
                  </button>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm text-gray-600 mb-2">Largeur ({{ unite }})</label>
                  <input
                    v-model.number="dimensions.largeur"
                    type="number"
                    min="1"
                    :step="unite === 'mm' ? '1' : '0.1'"
                    class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                    :placeholder="unite === 'mm' ? 'Ex: 1200' : 'Ex: 120'"
                  />
                </div>
                <div>
                  <label class="block text-sm text-gray-600 mb-2">Hauteur ({{ unite }})</label>
                  <input
                    v-model.number="dimensions.hauteur"
                    type="number"
                    min="1"
                    :step="unite === 'mm' ? '1' : '0.1'"
                    class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                    :placeholder="unite === 'mm' ? 'Ex: 800' : 'Ex: 80'"
                  />
                </div>
              </div>
              <div class="mt-2 text-sm text-gray-500">
                Surface: {{ surfaceM2 }} m²
              </div>
            </div>

             <!-- Adhésif cumulé (panneau uniquement) -->
             <div class="mb-8" v-if="canAddAdhesif">
               <label class="block text-lg font-semibold text-gray-900 mb-2">Adhésif</label>
               <label class="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-gray-300 transition-colors">
                 <input type="checkbox" v-model="addAdhesif" class="w-5 h-5 text-cyan-600" />
                 <div>
                   <p class="font-medium text-gray-900">Ajouter l'adhésif {{ primaryAdhesif?.matiere?.nom || 'opaque' }}</p>
                   <p class="text-sm text-gray-600">Applicable uniquement sur les supports Panneaux</p>
                 </div>
               </label>
             </div>

            <!-- Tarifs / Marges (Print uniquement) -->
            <div class="mb-8">
              <label class="block text-lg font-semibold text-gray-900 mb-4">Type de tarif</label>
              <div class="space-y-2">
                <label
                  v-for="tarif in tarifsDisponibles"
                  :key="tarif.id"
                  class="flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer hover:border-gray-300 transition-colors"
                  :class="selectedTarif === tarif.id ? 'border-cyan-500 bg-cyan-50' : 'border-gray-200'"
                >
                  <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-lg text-white flex items-center justify-center" :class="getTarifColorClass(tarif.color)">€</div>
                    <div>
                      <p class="font-medium">{{ tarif.name }}</p>
                      <p class="text-xs text-gray-600">Multiplicateur {{ tarif.multiplier }}x</p>
                    </div>
                  </div>
                  <input type="radio" name="tarif" :value="tarif.id" v-model="selectedTarif" />
                </label>

                <div class="p-4 border-2 border-gray-200 rounded-lg">
                  <label class="flex items-center gap-2 font-semibold text-gray-900 mb-2">
                    <input type="checkbox" v-model="manuelActif" class="w-4 h-4"/>
                    Mode manuel
                  </label>
                  <div class="grid grid-cols-2 gap-3" :class="manuelActif ? '' : 'opacity-50'">
                    <div>
                      <label class="block text-xs text-gray-600 mb-1">Multiplicateur</label>
                      <input type="number" step="0.05" min="0.1" v-model.number="multiplicateurManuel" :disabled="!manuelActif"
                             class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none"/>
                    </div>
                    <div>
                      <label class="block text-xs text-gray-600 mb-1">Marge (%)</label>
                      <input type="number" step="1" min="0" v-model.number="margePourcent" :disabled="!manuelActif"
                             class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Livraison -->
            <div class="mb-8">
              <label class="block text-lg font-semibold text-gray-900 mb-2">Livraison</label>
              <label class="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-gray-300 transition-colors">
                <input type="checkbox" v-model="includeShipping" class="w-5 h-5 text-cyan-600" />
                <div>
                  <p class="font-medium text-gray-900">Inclure les frais de livraison</p>
                  <p class="text-sm text-gray-600">Décochez pour retrait ou devis hors frais</p>
                </div>
              </label>
            </div>

            <!-- Type d'impression -->
            <div class="mb-8">
              <label class="block text-lg font-semibold text-gray-900 mb-4">Type d'impression</label>
              <div class="space-y-3">
                <label class="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-gray-300 transition-colors">
                  <input
                    v-model="impressionType"
                    type="radio"
                    value="recto"
                    class="w-5 h-5 text-cyan-600"
                  />
                  <div class="ml-3">
                    <p class="font-medium">Recto uniquement</p>
                    <p class="text-sm text-gray-600">Impression sur une seule face</p>
                  </div>
                </label>
                <label class="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-gray-300 transition-colors">
                  <input
                    v-model="impressionType"
                    type="radio"
                    value="recto-verso"
                    class="w-5 h-5 text-cyan-600"
                  />
                  <div class="ml-3">
                    <p class="font-medium">Recto-Verso</p>
                    <p class="text-sm text-gray-600">Impression sur les deux faces (+60%)</p>
                  </div>
                </label>
              </div>
            </div>

            <!-- Blanc de soutien -->
            <div class="mb-8" v-if="impressionType === 'recto-verso'">
              <label class="block text-lg font-semibold text-gray-900 mb-4">Blanc de soutien</label>
              <div class="space-y-3">
                <label class="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-gray-300 transition-colors">
                  <input
                    v-model="blancSoutien"
                    type="radio"
                    :value="false"
                    class="w-5 h-5 text-cyan-600"
                  />
                  <div class="ml-3">
                    <p class="font-medium">Sans blanc de soutien</p>
                    <p class="text-sm text-gray-600">Impression directe sur le support</p>
                  </div>
                </label>
                <label class="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-gray-300 transition-colors">
                  <input
                    v-model="blancSoutien"
                    type="radio"
                    :value="true"
                    class="w-5 h-5 text-cyan-600"
                  />
                  <div class="ml-3">
                    <p class="font-medium">Avec blanc de soutien</p>
                    <p class="text-sm text-gray-600">Fond blanc pour une meilleure opacité (+20%)</p>
                  </div>
                </label>
              </div>
            </div>

            <!-- Quantité -->
            <div class="mb-8">
              <label class="block text-lg font-semibold text-gray-900 mb-4">Quantité</label>
              <div class="flex items-center gap-4">
                <button
                  @click="quantite = Math.max(1, quantite - 1)"
                  class="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center font-bold text-gray-700 transition-colors hover:scale-110"
                >
                  -
                </button>
                <input
                  v-model.number="quantite"
                  type="number"
                  min="1"
                  class="flex-1 text-center text-2xl font-bold text-cyan-600 bg-cyan-50 border-2 border-cyan-300 rounded-xl p-3 focus:outline-none focus:border-cyan-500"
                />
                <button
                  @click="quantite += 1"
                  class="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center font-bold text-gray-700 transition-colors hover:scale-110"
                >
                  +
                </button>
              </div>
              <div class="mt-2 text-sm text-gray-500">
                Remise volume: {{ remiseVolume }}% (à partir de {{ seuilRemise }} unités)
              </div>
            </div>

            <!-- Options -->
            <div class="mb-8">
              <label class="block text-lg font-semibold text-gray-900 mb-4">Options d'impression</label>
              <div class="space-y-3 max-h-64 overflow-y-auto">
                <label
                  v-for="option in printStore.options"
                  :key="option.id"
                  class="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-gray-300 transition-colors group"
                >
                  <div class="flex items-center gap-3">
                    <input
                      v-model="optionsSelectionnees"
                      :value="option.id"
                      type="checkbox"
                      class="w-5 h-5 text-cyan-600"
                    />
                    <div class="flex items-center gap-2">
                      <span class="text-lg">{{ option.icon }}</span>
                      <div>
                        <p class="font-medium">{{ option.nom }}</p>
                        <p class="text-sm text-gray-600">{{ option.description }}</p>
                      </div>
                    </div>
                  </div>
                  <span class="text-lg font-bold text-cyan-600 group-hover:scale-110 transition-transform">+{{ option.prix }}€</span>
                </label>
              </div>
            </div>

            <!-- Façonnage -->
            <div class="mb-8">
              <label class="block text-lg font-semibold text-gray-900 mb-4">Façonnage</label>
              <div class="space-y-3 max-h-64 overflow-y-auto">
                <label
                  v-for="faconnage in printStore.faconnages"
                  :key="faconnage.id"
                  class="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-gray-300 transition-colors group"
                >
                  <div class="flex items-center gap-3">
                    <input
                      v-model="faconnagesSelectionnes"
                      :value="faconnage.id"
                      type="checkbox"
                      class="w-5 h-5 text-cyan-600"
                    />
                    <div class="flex items-center gap-2">
                      <span class="text-lg">{{ faconnage.icon }}</span>
                      <div>
                        <p class="font-medium">{{ faconnage.nom }}</p>
                        <p class="text-sm text-gray-600">{{ faconnage.description }}</p>
                      </div>
                    </div>
                  </div>
                  <span class="text-lg font-bold text-cyan-600 group-hover:scale-110 transition-transform">+{{ faconnage.prix }}€</span>
                </label>
              </div>
            </div>

            <!-- Accessoires -->
            <div class="mb-8">
              <label class="block text-lg font-semibold text-gray-900 mb-4">Accessoires</label>
              <div class="space-y-3 max-h-64 overflow-y-auto">
                <label
                  v-for="accessoire in printStore.accessoires"
                  :key="accessoire.id"
                  class="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-gray-300 transition-colors group"
                >
                  <div class="flex items-center gap-3">
                    <input
                      v-model="accessoiresSelectionnes"
                      :value="accessoire.id"
                      type="checkbox"
                      class="w-5 h-5 text-cyan-600"
                    />
                    <div class="flex items-center gap-2">
                      <span class="text-lg">{{ accessoire.icon }}</span>
                      <div>
                        <p class="font-medium">{{ accessoire.nom }}</p>
                        <p class="text-sm text-gray-600">{{ accessoire.description }}</p>
                      </div>
                    </div>
                  </div>
                  <span class="text-lg font-bold text-cyan-600 group-hover:scale-110 transition-transform">+{{ accessoire.prix }}€</span>
                </label>
              </div>
            </div>
          </div>

          <!-- Résumé et Prix -->
          <div class="bg-white rounded-3xl shadow-2xl p-8 sticky top-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <span class="text-green-600">💰</span>
              </div>
              Résumé de votre commande
            </h3>
            
            <!-- Aperçu du produit -->
            <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 mb-6">
              <div class="text-center">
                <div class="w-32 h-24 rounded-lg mx-auto mb-4 flex items-center justify-center relative overflow-hidden" :style="{ backgroundColor: selectedMatiere?.couleur || '#E5E7EB' }">
                  <PrintIcon :type="getSupportIconType(selectedSupport?.id)" size="xl" color="primary" />
                  <div v-if="impressionType === 'recto-verso'" class="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    R/V
                  </div>
                </div>
                <h4 class="text-lg font-bold text-gray-900">{{ selectedSupport?.nom || 'Sélectionnez un support' }}</h4>
                <p class="text-sm text-gray-600">{{ selectedMatiere?.nom || 'Sélectionnez une matière' }}</p>
                <p class="text-sm text-gray-500">{{ dimensions.largeur }}{{ unite }} × {{ dimensions.hauteur }}{{ unite }}</p>
                <p class="text-sm text-gray-500">{{ surfaceM2 }} m²</p>
              </div>
            </div>

            <!-- Détail du calcul -->
            <div class="space-y-3 mb-6">
              <div class="flex justify-between items-center py-2 border-b border-gray-200">
                <span class="text-gray-600">Support de base</span>
                <span class="font-semibold">{{ prixSupport }}€</span>
              </div>
              
              <div v-if="impressionType === 'recto-verso'" class="flex justify-between items-center py-2 border-b border-gray-200">
                <span class="text-gray-600">Impression recto-verso</span>
                <span class="font-semibold text-blue-600">+{{ prixRectoVerso }}€</span>
              </div>
              
              <div v-if="blancSoutien" class="flex justify-between items-center py-2 border-b border-gray-200">
                <span class="text-gray-600">Blanc de soutien</span>
                <span class="font-semibold text-green-600">+{{ prixBlancSoutien }}€</span>
              </div>
              
              <div v-if="prixOptions > 0" class="flex justify-between items-center py-2 border-b border-gray-200">
                <span class="text-gray-600">Options ({{ optionsSelectionnees.length }})</span>
                <span class="font-semibold text-purple-600">+{{ prixOptions }}€</span>
              </div>
              
              <div v-if="prixFaconnages > 0" class="flex justify-between items-center py-2 border-b border-gray-200">
                <span class="text-gray-600">Façonnage ({{ faconnagesSelectionnes.length }})</span>
                <span class="font-semibold text-orange-600">+{{ prixFaconnages }}€</span>
              </div>
              
              <div v-if="prixAccessoires > 0" class="flex justify-between items-center py-2 border-b border-gray-200">
                <span class="text-gray-600">Accessoires ({{ accessoiresSelectionnes.length }})</span>
                <span class="font-semibold text-red-600">+{{ prixAccessoires }}€</span>
              </div>
              
              <div class="flex justify-between items-center py-2 border-b border-gray-200">
                <span class="text-gray-600">Quantité</span>
                <span class="font-semibold">× {{ quantite }}</span>
              </div>
              
              <div v-if="remiseVolume > 0" class="flex justify-between items-center py-2 border-b border-gray-200">
                <span class="text-gray-600">Remise volume ({{ remiseVolume }}%)</span>
                <span class="font-semibold text-green-600">-{{ prixRemiseVolume }}€</span>
              </div>
              
              <div v-if="fraisPort > 0" class="flex justify-between items-center py-2 border-b border-gray-200">
                <span class="text-gray-600">Frais de port</span>
                <span class="font-semibold">{{ fraisPort }}€</span>
              </div>
            </div>

            <!-- Prix total -->
            <div class="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl p-6 text-white mb-6">
              <div class="text-center">
                <p class="text-lg opacity-90 mb-2">Prix total</p>
                <p class="text-4xl font-bold">{{ formatPrice(prixTotal) }}€</p>
                <p class="text-sm opacity-75 mt-1">{{ formatPrice(prixUnitaire) }}€ par unité</p>
                <div class="text-xs opacity-60 mt-2">
                  Coût: {{ formatPrice(coutRevientTotal) }}€ | Marge: {{ margeReelleTotal.toFixed(1) }}%
                </div>
                <div v-if="fraisPort === 0" class="mt-2 text-xs bg-green-500 bg-opacity-30 rounded-full px-3 py-1">
                  ✓ Livraison gratuite
                </div>
              </div>
            </div>

            <!-- Délai de livraison -->
            <div class="bg-green-50 rounded-xl p-4 mb-6">
              <div class="flex items-center gap-3">
                <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <div>
                  <p class="font-semibold text-green-800">Délai de livraison</p>
                  <p class="text-sm text-green-700">{{ delaiLivraison }}</p>
                </div>
              </div>
            </div>

            <!-- Actions -->
            <div class="space-y-3">
              <button
                @click="demanderDevis"
                :disabled="!canCalculate"
                class="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:cursor-not-allowed transform hover:scale-105"
              >
                <div class="flex items-center justify-center gap-2">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                    <path fill-rule="evenodd" d="M4 5a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 1a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
                  </svg>
                  Demander un devis détaillé
                </div>
              </button>
              
              <button
                @click="ajouterAuPanier"
                :disabled="!canCalculate"
                class="w-full bg-gray-100 hover:bg-gray-200 disabled:bg-gray-100 text-gray-800 font-semibold py-4 rounded-xl transition-colors disabled:cursor-not-allowed transform hover:scale-105"
              >
                <div class="flex items-center justify-center gap-2">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                  </svg>
                  Ajouter au panier
                </div>
              </button>
            </div>

            <!-- Informations supplémentaires -->
            <div class="mt-6 text-center text-sm text-gray-500 space-y-1">
              <p>✓ Devis gratuit et sans engagement</p>
              <p>✓ Livraison partout en France</p>
              <p>✓ Qualité professionnelle garantie</p>
              <p>✓ Support client 7j/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Avantages Print -->
    <section class="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
            Pourquoi choisir Saii Print ?
          </h2>
          <p class="text-xl text-blue-200">Des solutions d'impression digital de pointe</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div class="bg-white/10 backdrop-blur rounded-2xl p-6 text-center hover:bg-white/20 transition-all transform hover:scale-105">
            <div class="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">🎨</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Qualité Premium</h3>
            <p class="text-blue-200">Technologies d'impression digital les plus avancées du marché</p>
          </div>

          <div class="bg-white/10 backdrop-blur rounded-2xl p-6 text-center hover:bg-white/20 transition-all transform hover:scale-105">
            <div class="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">⚡</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Rapidité</h3>
            <p class="text-blue-200">Délais de production optimisés pour vos projets urgents</p>
          </div>

          <div class="bg-white/10 backdrop-blur rounded-2xl p-6 text-center hover:bg-white/20 transition-all transform hover:scale-105">
            <div class="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">🔧</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Personnalisation</h3>
            <p class="text-blue-200">Solutions sur mesure pour tous vos besoins spécifiques</p>
          </div>

          <div class="bg-white/10 backdrop-blur rounded-2xl p-6 text-center hover:bg-white/20 transition-all transform hover:scale-105">
            <div class="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">💰</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Prix compétitifs</h3>
            <p class="text-blue-200">Tarifs transparents et avantageux grâce à notre volume</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 class="text-2xl font-bold mb-4">Saii Print</h4>
            <p class="text-gray-400">Solutions d'impression digital professionnelle</p>
          </div>
          <div>
            <h5 class="font-semibold mb-3">Nos services</h5>
            <ul class="space-y-2 text-gray-400">
              <li>Impression grand format</li>
              <li>Panneaux publicitaires</li>
              <li>Bâches et affiches</li>
              <li>Solutions sur mesure</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold mb-3">Contact</h5>
            <p class="text-gray-400">Devis gratuit et personnalisé</p>
          </div>
        </div>
        <div class="border-t border-gray-800 pt-8 text-center">
          <p class="text-gray-400">&copy; 2026 Saii Print - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { usePrintStore } from '~/stores/print'
import { useAdminStore } from '~/stores/admin'
import PrintIcon from '~/components/PrintIcon.vue'

const printStore = usePrintStore()
const adminStore = useAdminStore()

// Utilitaire d'affichage prix (arrondi 2 décimales, format fr-FR)
const formatPrice = (value) => {
  const num = typeof value === 'number' ? value : Number(value || 0)
  try {
    return new Intl.NumberFormat('fr-FR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(num)
  } catch (_) {
    return Number.isFinite(num) ? num.toFixed(2) : '0.00'
  }
}

// État de la configuration
const selectedSupport = ref(null)
const selectedMatiere = ref(null)
const unite = ref('cm') // 'cm' ou 'mm'
const dimensions = ref({
  largeur: 120,
  hauteur: 80
})
const impressionType = ref('recto')
const blancSoutien = ref(false)
const quantite = ref(1)
const optionsSelectionnees = ref([])
const faconnagesSelectionnes = ref([])
const accessoiresSelectionnes = ref([])
// Inclure les frais de livraison dans le calcul
const includeShipping = ref(true)

// Conversion automatique des dimensions lors du changement d'unité
let isConverting = false
watch(unite, (newUnite, oldUnite) => {
  if (isConverting || !oldUnite) return
  isConverting = true
  
  // Convertir les dimensions
  if (oldUnite === 'cm' && newUnite === 'mm') {
    // cm → mm : multiplier par 10
    dimensions.value.largeur = Math.round(dimensions.value.largeur * 10)
    dimensions.value.hauteur = Math.round(dimensions.value.hauteur * 10)
  } else if (oldUnite === 'mm' && newUnite === 'cm') {
    // mm → cm : diviser par 10, arrondir à 1 décimale
    dimensions.value.largeur = Math.round(dimensions.value.largeur / 10 * 10) / 10
    dimensions.value.hauteur = Math.round(dimensions.value.hauteur / 10 * 10) / 10
  }
  
  isConverting = false
})

// Adhésifs depuis la config back
const adhesifItems = computed(() => printStore.getAdhesifMatieres())
const selectAdhesif = (item) => {
  // Sélectionne le support et la matière associés
  selectedSupport.value = item.support
  selectedMatiere.value = item.matiere
}

// Règle métier: possibilité de cumuler adhésif opaque sur panneaux uniquement
const adhesifConfig = computed(() => printStore.adhesifsConfig || { enabled: false })
const canAddAdhesif = computed(() => {
  if (!adhesifConfig.value.enabled || !selectedSupport.value) return false
  return (adhesifConfig.value.targetSupports || []).includes(selectedSupport.value.id)
})
const addAdhesif = ref(false)
// ID d'adhésif principal à cumuler (par défaut premier de la config)
const primaryAdhesifId = computed(() => (adhesifConfig.value.matieres || [])[0])
const primaryAdhesif = computed(() => printStore.getAdhesifById(primaryAdhesifId.value))

// Tarifs / Marges (uniquement pour Print)
const tarifsDisponibles = computed(() => {
  const margins = adminStore.profitMargins?.margins || {}
  return Object.values(margins)
})
const selectedTarif = ref(adminStore.profitMargins?.defaultMargin || 'tarifs-public')
const manuelActif = ref(false)
const multiplicateurManuel = ref(1.0)

// Synchroniser le multiplicateur manuel avec le tarif choisi quand mode manuel désactivé
watch(selectedTarif, (id) => {
  if (!manuelActif.value) {
    const m = adminStore.profitMargins?.margins?.[id]?.multiplier || 1.0
    multiplicateurManuel.value = m
  }
}, { immediate: true })

// Marge utilisée pour les calculs Print
const selectedMultiplier = computed(() => {
  return manuelActif.value
    ? multiplicateurManuel.value
    : (adminStore.profitMargins?.margins?.[selectedTarif.value]?.multiplier || 1.0)
})
const selectedMarge = computed(() => Math.max(0, (selectedMultiplier.value || 1) - 1))

// Edition via pourcentage
const margePourcent = computed({
  get: () => Math.round((selectedMultiplier.value - 1) * 100),
  set: (v) => {
    const pct = Number(v) || 0
    multiplicateurManuel.value = 1 + pct / 100
  }
})

const getTarifColorClass = (color) => {
  const map = {
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
  return map[color] || 'bg-gray-500'
}

// Calculs de prix
const surfaceM2 = computed(() => {
  const largeur = dimensions.value.largeur || 0
  const hauteur = dimensions.value.hauteur || 0
  if (largeur === 0 || hauteur === 0) return '0.00'
  
  // Conversion selon l'unité choisie
  // Si mm: mm² → m² = / 1 000 000
  // Si cm: cm² → m² = / 10 000
  const facteurConversion = unite.value === 'mm' ? 1000000 : 10000
  return ((largeur * hauteur) / facteurConversion).toFixed(2)
})

const prixSupport = computed(() => {
  if (!selectedSupport.value || !selectedMatiere.value) return 0
  
  // Calcul du coût de revient total (matière + coûts au m²)
  const coutRevientMatiere = printStore.calculerCoutRevientMatiere(
    selectedSupport.value.id, 
    selectedMatiere.value.id, 
    parseFloat(surfaceM2.value)
  )
  
  // Application de la marge maximale sur le coût de revient
  return Math.round(printStore.calculerPrixVenteAvecMarge(coutRevientMatiere))
})

// Calcul du coût de revient
const coutRevient = computed(() => {
  if (!selectedSupport.value || !selectedMatiere.value) return 0
  return printStore.calculerCoutRevientMatiere(selectedSupport.value.id, selectedMatiere.value.id, parseFloat(surfaceM2.value))
})

// Calcul de la marge réelle
const margeReelle = computed(() => {
  if (prixSupport.value <= 0) return 0
  return printStore.calculerMargeReelle(prixSupport.value, coutRevient.value)
})

const prixRectoVerso = computed(() => {
  if (impressionType.value !== 'recto-verso') return 0
  return Math.round(prixSupport.value * 0.6) // 60% de supplément pour recto-verso
})

const prixBlancSoutien = computed(() => {
  if (!blancSoutien.value) return 0
  return Math.round(prixSupport.value * 0.2) // 20% de supplément pour blanc de soutien
})

const prixOptions = computed(() => {
  return optionsSelectionnees.value.reduce((total, optionId) => {
    const option = printStore.options.find(o => o.id === optionId)
    return total + (option?.prix || 0)
  }, 0)
})

const prixFaconnages = computed(() => {
  return faconnagesSelectionnes.value.reduce((total, faconnageId) => {
    const faconnage = printStore.faconnages.find(f => f.id === faconnageId)
    if (!faconnage) return total
    
    // Calcul du coût de revient du façonnage
    const coutRevientFaconnage = printStore.calculerCoutRevientFaconnage(faconnageId, parseFloat(surfaceM2.value))
    
    // Application de la marge maximale
    return total + Math.round(printStore.calculerPrixVenteAvecMarge(coutRevientFaconnage))
  }, 0)
})

const prixAccessoires = computed(() => {
  return accessoiresSelectionnes.value.reduce((total, accessoireId) => {
    const accessoire = printStore.accessoires.find(a => a.id === accessoireId)
    if (!accessoire) return total
    
    // Calcul du coût de revient de l'accessoire
    const coutRevientAccessoire = printStore.calculerCoutRevientAccessoire(accessoireId, quantite.value)
    
    // Application de la marge maximale
    return total + Math.round(printStore.calculerPrixVenteAvecMarge(coutRevientAccessoire))
  }, 0)
})

const prixAdhesif = computed(() => {
  if (!addAdhesif.value || !primaryAdhesif.value) return 0
  const prixM2 = primaryAdhesif.value.matiere?.prixParM2 || 0
  return Math.round(prixM2 * parseFloat(surfaceM2.value))
})

const prixUnitairePublic = computed(() => {
  return prixSupport.value + prixRectoVerso.value + prixBlancSoutien.value + prixOptions.value + prixFaconnages.value + prixAccessoires.value + prixAdhesif.value
})

const prixUnitaire = computed(() => {
  return Math.round(prixUnitairePublic.value * selectedMultiplier.value * 100) / 100
})

const remiseVolume = computed(() => {
  return printStore.getRemiseVolume(quantite.value) * 100
})

const seuilRemise = computed(() => {
  const seuils = Object.keys(printStore.prixConfig.remiseVolume)
    .map(Number)
    .sort((a, b) => a - b)
  
  for (const seuil of seuils) {
    if (quantite.value >= seuil) {
      return seuil
    }
  }
  return 0
})

const prixRemiseVolume = computed(() => {
  return Math.round(prixUnitaire.value * quantite.value * (remiseVolume.value / 100))
})

const fraisPort = computed(() => {
  if (!includeShipping.value) return 0
  // Calcul du prix avec marge maximale sur le coût de revient total
  const prixAvecMarge = printStore.calculerPrixVenteTotalAvecMarge(coutRevientTotal.value)
  
  // Application des remises par volume
  const remiseVolume = prixAvecMarge * printStore.getRemiseVolume(quantite.value)
  const prixApresRemise = prixAvecMarge - remiseVolume
  
  return printStore.getFraisPort(prixApresRemise)
})

const prixTotal = computed(() => {
  // Calcul du prix avec marge maximale sur le coût de revient total (tarif public)
  const prixAvecMarge = printStore.calculerPrixVenteTotalAvecMarge(coutRevientTotal.value)
  
  // Application des remises par volume
  const remiseVolume = prixAvecMarge * printStore.getRemiseVolume(quantite.value)
  const prixApresRemise = prixAvecMarge - remiseVolume
  
  // Ajout des frais de port
  const totalPublic = prixApresRemise + fraisPort.value
  // Application du type de tarif (ex: revendeur 0.8)
  const totalTarif = totalPublic * selectedMultiplier.value
  return Math.round(totalTarif * 100) / 100
})

// Calcul du coût de revient total
const coutRevientTotal = computed(() => {
  if (!selectedSupport.value || !selectedMatiere.value) return 0
  
  // Coût de revient de la matière
  const coutMatiere = printStore.calculerCoutRevientMatiere(
    selectedSupport.value.id, 
    selectedMatiere.value.id, 
    parseFloat(surfaceM2.value)
  )
  
  // Coût de revient des façonnages
  const coutFaconnages = faconnagesSelectionnes.value.reduce((total, faconnageId) => {
    return total + printStore.calculerCoutRevientFaconnage(faconnageId, parseFloat(surfaceM2.value))
  }, 0)
  
  // Coût de revient des accessoires
  const coutAccessoires = accessoiresSelectionnes.value.reduce((total, accessoireId) => {
    return total + printStore.calculerCoutRevientAccessoire(accessoireId, quantite.value)
  }, 0)
  
  return (coutMatiere + coutFaconnages + coutAccessoires) * quantite.value
})

// Calcul de la marge réelle totale
const margeReelleTotal = computed(() => {
  if (prixTotal.value <= 0) return 0
  return printStore.calculerMargeReelle(prixTotal.value, coutRevientTotal.value)
})

const delaiLivraison = computed(() => {
  return printStore.getDelaiLivraison(quantite.value)
})

const canCalculate = computed(() => {
  return selectedSupport.value && selectedMatiere.value && dimensions.value.largeur > 0 && dimensions.value.hauteur > 0
})

// Actions
// Fonction pour obtenir le type d'icône selon l'ID du support
const getSupportIconType = (supportId) => {
  const iconMap = {
    'panneau': 'panneau',
    'affiche': 'affiche',
    'bache': 'bache',
    'kakemono': 'kakemono',
    'banniere': 'banniere',
    'vitrine': 'vitrine'
  }
  return iconMap[supportId] || 'panneau'
}

const selectSupport = (support) => {
  selectedSupport.value = support
  selectedMatiere.value = null
}

const selectMatiere = (matiere) => {
  selectedMatiere.value = matiere
}

const demanderDevis = () => {
  if (!canCalculate.value) return
  
  const devis = {
    support: selectedSupport.value,
    matiere: selectedMatiere.value,
    dimensions: dimensions.value,
    unite: unite.value,
    surface: surfaceM2.value,
    impressionType: impressionType.value,
    blancSoutien: blancSoutien.value,
    quantite: quantite.value,
    options: optionsSelectionnees.value,
    faconnages: faconnagesSelectionnes.value,
    accessoires: accessoiresSelectionnes.value,
    prixUnitaire: prixUnitaire.value,
    prixTotal: prixTotal.value,
    remiseVolume: remiseVolume.value,
    fraisPort: fraisPort.value,
    delai: delaiLivraison.value,
    timestamp: new Date().toISOString()
  }
  
  console.log('Devis demandé:', devis)
  
  // Sauvegarder le devis dans localStorage
  if (process.client) {
    const devisExistant = JSON.parse(localStorage.getItem('saii_devis') || '[]')
    devisExistant.push(devis)
    localStorage.setItem('saii_devis', JSON.stringify(devisExistant))
  }
  
  alert('Votre devis a été envoyé ! Un conseiller vous contactera dans les plus brefs délais.')
}

const ajouterAuPanier = () => {
  if (!canCalculate.value) return
  
  const produit = {
    id: Date.now(),
    support: selectedSupport.value,
    matiere: selectedMatiere.value,
    dimensions: dimensions.value,
    unite: unite.value,
    surface: surfaceM2.value,
    impressionType: impressionType.value,
    blancSoutien: blancSoutien.value,
    quantite: quantite.value,
    options: optionsSelectionnees.value,
    faconnages: faconnagesSelectionnes.value,
    accessoires: accessoiresSelectionnes.value,
    prixUnitaire: prixUnitaire.value,
    prixTotal: prixTotal.value,
    timestamp: new Date().toISOString()
  }
  
  console.log('Ajouté au panier:', produit)
  
  // Sauvegarder dans le panier
  if (process.client) {
    const panierExistant = JSON.parse(localStorage.getItem('saii_panier') || '[]')
    panierExistant.push(produit)
    localStorage.setItem('saii_panier', JSON.stringify(panierExistant))
  }
  
  alert('Produit ajouté au panier !')
}

// Charger les données au montage
onMounted(() => {
  printStore.loadFromLocalStorage()
  adminStore.loadFromLocalStorage()
})
</script>

<style>
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes float-delayed {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 3s ease-in-out infinite 1.5s;
}

.animate-bounce-slow {
  animation: bounce-slow 2s ease-in-out infinite;
}

.hover\:scale-102:hover {
  transform: scale(1.02);
}
</style>
