<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
    <!-- Navbar -->
    <Navbar @toggle-budget="toggleBudgetComparatif" />
    
    <!-- Header avec slogan -->
    <header class="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center">
          <div class="inline-flex items-center justify-center mb-6">
            <img src="/LOGO_SAII_EDIT.png" alt="Saii Logo" class="h-24 md:h-32 w-auto" />
          </div>
          
          <div class="text-3xl md:text-4xl font-light mb-4 flex items-center justify-center gap-4">
            <span class="inline-block animate-float">🤝</span>
            <span>L'union fait la force</span>
            <span class="inline-block animate-float-delayed">💪</span>
          </div>
          
          <p class="text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto">
            Plateforme SaaS de création de contenu marketing avec IA + Solutions Print & Digital
          </p>
          
          <div class="mt-8 inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-6 py-3 rounded-full font-semibold animate-bounce-slow">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            Offre Anniversaire Boost 24h
          </div>
        </div>
      </div>
    </header>

    <!-- Bouton Flottant pour Comparatif Budget -->
    <button 
      @click="toggleBudgetComparatif"
      class="fixed right-6 top-32 z-30 group"
      :class="showBudgetComparatif ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'"
    >
      <div class="flex items-center gap-3 bg-white/95 backdrop-blur rounded-full shadow-2xl px-4 py-3 transition-all duration-300 hover:shadow-3xl hover:scale-105 border-2" :class="showBudgetComparatif ? 'border-red-200' : 'border-green-200'">
        <div class="flex items-center gap-2">
          <div class="w-10 h-10 rounded-full flex items-center justify-center transition-colors" :class="showBudgetComparatif ? 'bg-red-500' : 'bg-green-500'">
            <svg class="w-6 h-6 text-white transition-transform duration-300" :class="showBudgetComparatif ? 'rotate-180' : ''" fill="currentColor" viewBox="0 0 20 20">
              <path v-if="!showBudgetComparatif" fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"/>
              <path v-else fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd"/>
            </svg>
          </div>
          <div class="text-left hidden lg:block">
            <p class="text-xs font-semibold text-gray-600">{{ showBudgetComparatif ? 'Masquer' : 'Voir' }}</p>
            <p class="text-sm font-bold" :class="showBudgetComparatif ? 'text-red-600' : 'text-green-600'">
              {{ showBudgetComparatif ? 'Comparatif' : '-30% Budget' }}
            </p>
          </div>
        </div>
      </div>
    </button>

    <!-- Comparatif Budget - Section Hero (Déroulable) -->
    <Transition name="slide-down">
      <section v-if="showBudgetComparatif" ref="budgetSection" class="container mx-auto px-6 -mt-16 relative z-20 mb-8">
        <div class="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-green-500">
        <div class="text-center mb-8">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Économisez <span class="text-green-600 text-5xl">{{ pourcentageEconomie }}%</span> sur votre budget 2026
          </h2>
          <p class="text-gray-600 text-lg">Grâce à l'union des forces</p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <!-- Budget 2025 -->
          <div class="relative">
            <div class="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border-2 border-red-300 h-full">
              <div class="text-center">
                <div class="inline-flex items-center justify-center w-16 h-16 bg-red-500 text-white rounded-full mb-4">
                  <span class="text-2xl font-bold">2025</span>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Budget Actuel</h3>
                
                <div class="space-y-4 mb-6">
                  <div class="bg-white rounded-lg p-4">
                    <p class="text-sm text-gray-600">Employés (50 licences)</p>
                    <p class="text-2xl font-bold text-gray-900">26 338 €</p>
                  </div>
                  <div class="bg-white rounded-lg p-4">
                    <p class="text-sm text-gray-600">Campagne promo mars</p>
                    <p class="text-2xl font-bold text-gray-900">4 000 €</p>
                  </div>
                </div>
                
                <div class="bg-red-600 text-white rounded-xl p-6">
                  <p class="text-sm opacity-90 mb-1">TOTAL</p>
                  <p class="text-4xl font-bold">30 338 €</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Budget 2026 -->
          <div class="relative">
            <div class="absolute -top-4 -right-4 bg-green-500 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg z-10 animate-pulse">
              -{{ pourcentageEconomie }}%
            </div>
            <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-300 h-full">
              <div class="text-center">
                <div class="inline-flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full mb-4">
                  <span class="text-2xl font-bold">2026</span>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-6">Budget Optimisé</h3>
                
                <div class="space-y-3 mb-6">
                  <div class="bg-white rounded-lg p-4">
                    <p class="text-sm text-gray-600">Marque ({{ nombreLicences }} licences)</p>
                    <p class="text-2xl font-bold text-green-700">{{ formatNumber(coutGlobalMME) }} €</p>
                  </div>
                  <div class="bg-white rounded-lg p-4">
                    <p class="text-sm text-gray-600">Adhérents ({{ nombreLicences }} licences)</p>
                    <p class="text-2xl font-bold text-green-700">{{ formatNumber(coutGlobalAdherent) }} €</p>
                  </div>
                </div>
                
                <div class="bg-green-600 text-white rounded-xl p-6">
                  <p class="text-sm opacity-90 mb-1">TOTAL 2026</p>
                  <p class="text-4xl font-bold">{{ formatNumber(budget2026) }} €</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 text-center">
          <div class="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-2xl text-2xl font-bold shadow-lg">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            Économie réalisée : {{ formatNumber(economieRealisee) }} € / an
          </div>
          <p class="text-sm text-gray-600 mt-2">soit {{ formatNumber(economieRealisee / 12) }} € / mois</p>
        </div>
      </div>
      </section>
    </Transition>

    <!-- Les Formules -->
    <section id="formules" class="container mx-auto px-6 py-20">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Choisissez votre formule
        </h2>
        <p class="text-xl text-gray-600">Prix anniversaire exceptionnel</p>
      </div>

      <!-- Configurateurs : Licences / Points de Vente & Remise -->
      <div class="max-w-4xl mx-auto bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-2xl shadow-lg p-6 mb-12 border-2 border-indigo-200">
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Nombre de Licences (= Points de Vente) -->
          <div class="bg-white rounded-xl p-5 shadow-md">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl flex items-center justify-center shadow">
                <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
              </div>
              <div class="flex-1">
                <label class="text-lg font-bold text-gray-900">Licences / Points de Vente</label>
                <p class="text-xs text-gray-600">À partir de 50 : Kit Premium</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <button @click="nombreLicences = Math.max(1, nombreLicences - 1)" class="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center font-bold text-gray-700 transition-colors">
                -
              </button>
              <input 
                v-model.number="nombreLicences" 
                type="number" 
                min="1" 
                max="500"
                step="1"
                class="flex-1 text-center text-4xl font-bold text-indigo-600 bg-indigo-50 border-2 border-indigo-300 rounded-xl p-3 focus:outline-none focus:border-indigo-500"
              >
              <button @click="nombreLicences += 1" class="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center font-bold text-gray-700 transition-colors">
                +
              </button>
            </div>
            <!-- Palier actif -->
            <div class="mt-3 text-center">
              <div class="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                {{ palierMessage }}
              </div>
            </div>
          </div>

          <!-- Remise Automatique -->
          <div class="bg-white rounded-xl p-5 shadow-md">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl flex items-center justify-center shadow">
                <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div class="flex-1">
                <label class="text-lg font-bold text-gray-900">Remise Anniversaire</label>
                <p class="text-xs text-gray-600">Calculée selon volume</p>
              </div>
            </div>
            <div class="text-center">
              <div class="text-6xl font-bold text-green-600 mb-2">{{ tauxRemise }}%</div>
              <p class="text-sm text-gray-600">de remise appliquée</p>
            </div>
          </div>
        </div>

        <!-- Affichage du calcul détaillé -->
        <div class="mt-6 pt-6 border-t-2 border-indigo-200">
          <div class="grid grid-cols-4 gap-4 text-center">
            <div class="bg-white rounded-xl p-4 shadow">
              <p class="text-xs text-gray-600 mb-1">Prix de base</p>
              <p class="text-2xl font-bold text-gray-400 line-through">{{ prixBase }} €</p>
            </div>
            <div class="bg-white rounded-xl p-4 shadow flex items-center justify-center">
              <svg class="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="bg-white rounded-xl p-4 shadow">
              <p class="text-xs text-gray-600 mb-1">Remise {{ tauxRemise }}%</p>
              <p class="text-2xl font-bold text-red-600">-{{ formatNumber((prixBase || 732) * tauxRemise / 100) }} €</p>
            </div>
            <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 shadow border-2 border-green-300">
              <p class="text-xs text-gray-600 mb-1">Prix final</p>
              <p class="text-3xl font-bold text-green-600">{{ formatNumber(prixAvecRemise) }} €</p>
            </div>
          </div>
          
          <!-- Valeur offerte selon palier -->
          <div class="mt-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-xl p-4 text-center text-white shadow-lg">
            <div class="flex items-center justify-center gap-2">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <p class="text-lg font-bold">
                {{ valeurOfferteMessage }}
              </p>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Affichage des Formules selon le nombre de licences -->
      
      <!-- 1-49 licences : Formule Kit uniquement (valeur 257 €) -->
      <div v-if="nombreLicences >= 1 && nombreLicences < 50" class="max-w-2xl mx-auto">
        <!-- Formule Kit -->
        <div class="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
          <div class="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
            <div class="w-20 h-20 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-4">
              <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"/>
                <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-3xl font-bold mb-2">Formule Kit</h3>
            <p class="text-blue-100">Plateforme + Communication</p>
          </div>
          
          <div class="p-8">
            <div class="mb-6">
              <p class="text-gray-600 mb-2">Incluant :</p>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-gray-700"><strong>Accès plateforme Saii</strong> - Création de contenu multipage/multisize avec IA</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-gray-700"><strong>1 Kit de communication</strong> - PLV, goodies, signalétiques, imprimerie</span>
                </li>
              </ul>
            </div>

            <div class="bg-gray-50 rounded-xl p-6 mb-6">
              <div class="flex items-baseline justify-center gap-2 mb-2">
                <span class="text-2xl text-gray-400 line-through">{{ prixBase }} €</span>
                <span class="text-5xl font-bold text-indigo-600">{{ formatNumber(prixAvecRemise) }} €</span>
                <span class="text-gray-600">/an</span>
              </div>
              <p class="text-center text-sm text-gray-600">soit {{ formatNumber(prixAvecRemise / 12) }} € / mois</p>
              <div class="mt-2 inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Économie : {{ formatNumber(prixBase - prixAvecRemise) }} € (-{{ tauxRemise }}%)
              </div>
            </div>

            <div class="bg-yellow-50 rounded-xl p-4 mb-4 border-2 border-yellow-300">
              <p class="text-center text-sm font-bold text-yellow-900">🎁 Kit de Communication inclus</p>
              <p class="text-center text-xs text-yellow-700 mt-1">Valeur offerte : {{ valeurOfferte }} € par licence</p>
            </div>

            <button @click="openKitDetails" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-xl transition-colors duration-200 mb-3">
              Détail Kit de communication
            </button>
            
            <button @click="openSaiiDemo" class="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-4 rounded-xl transition-colors duration-200">
              Découvrir Saii
            </button>
          </div>
        </div>
        
        <!-- Message pour débloquer l'écran -->
        <div class="mt-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border-2 border-purple-300 text-center">
          <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Formule Écran disponible à partir de 50 licences</h3>
          <p class="text-gray-700">Débloquez l'accès à l'écran Samsung 43" avec Player (valeur 360 €)</p>
          <div class="mt-4 inline-flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-full font-bold">
            Encore {{ 50 - nombreLicences }} licences pour débloquer
          </div>
        </div>
      </div>
      
      <!-- 50+ licences : Formule Kit ET Formule Écran (valeur 360 € chacune) -->
      <div v-else-if="nombreLicences >= 50" class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <!-- Formule Kit Premium -->
        <div class="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
          <div class="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
            <div class="w-20 h-20 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-4">
              <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"/>
                <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-3xl font-bold mb-2">Formule Kit</h3>
            <p class="text-blue-100">Plateforme + Communication</p>
          </div>
          
          <div class="p-8">
            <div class="mb-6">
              <p class="text-gray-600 mb-2">Incluant :</p>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-gray-700"><strong>Accès plateforme Saii</strong> - Création de contenu multipage/multisize avec IA</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-gray-700"><strong>1 Kit de communication</strong> - PLV, goodies, signalétiques, imprimerie</span>
                </li>
              </ul>
            </div>

            <div class="bg-gray-50 rounded-xl p-6 mb-4">
              <div class="flex items-baseline justify-center gap-2 mb-2">
                <span class="text-2xl text-gray-400 line-through">{{ prixBase }} €</span>
                <span class="text-5xl font-bold text-indigo-600">{{ formatNumber(prixAvecRemise) }} €</span>
                <span class="text-gray-600">/an</span>
              </div>
              <p class="text-center text-sm text-gray-600">soit {{ formatNumber(prixAvecRemise / 12) }} € / mois</p>
              <div class="mt-2 inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Économie : {{ formatNumber(prixBase - prixAvecRemise) }} € (-{{ tauxRemise }}%)
              </div>
            </div>

            <div class="bg-yellow-50 rounded-xl p-4 mb-4 border-2 border-yellow-300">
              <p class="text-center text-sm font-bold text-yellow-900">🎁 Kit de Communication inclus</p>
              <p class="text-center text-xs text-yellow-700 mt-1">Valeur offerte : {{ valeurOfferte }} € par licence</p>
            </div>

            <button @click="openKitDetails" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-xl transition-colors duration-200 mb-3">
              Détail Kit de communication
            </button>
            
            <button @click="openSaiiDemo" class="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-4 rounded-xl transition-colors duration-200">
              Découvrir Saii
            </button>
          </div>
        </div>

        <!-- Formule Écran Premium -->
        <div class="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-200 relative">
          <div class="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold text-sm z-10 animate-pulse">
            RECOMMANDÉ
          </div>
          
          <div class="bg-gradient-to-br from-purple-600 to-pink-700 p-8 text-white">
            <div class="w-20 h-20 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-4">
              <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-3xl font-bold mb-2">Formule Écran</h3>
            <p class="text-purple-100">Plateforme + Digital</p>
          </div>
          
          <div class="p-8">
            <div class="mb-6">
              <p class="text-gray-600 mb-2">Incluant :</p>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-gray-700"><strong>Accès plateforme Saii</strong> - Création de contenu multipage/multisize avec IA</span>
                </li>
                <li class="flex items-start gap-3">
                  <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-gray-700"><strong>Écran Samsung 43 pouces</strong> avec Player - Diffusion spots publicitaires</span>
                </li>
              </ul>
            </div>

            <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-4 border-2 border-purple-200">
              <div class="flex items-baseline justify-center gap-2 mb-2">
                <span class="text-2xl text-gray-400 line-through">{{ prixBase }} €</span>
                <span class="text-5xl font-bold text-purple-600">{{ formatNumber(prixAvecRemise) }} €</span>
                <span class="text-gray-600">/an</span>
              </div>
              <p class="text-center text-sm text-gray-600">soit {{ formatNumber(prixAvecRemise / 12) }} € / mois</p>
              <div class="mt-2 inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                Économie : {{ formatNumber(prixBase - prixAvecRemise) }} € (-{{ tauxRemise }}%)
              </div>
            </div>

            <div class="bg-yellow-50 rounded-xl p-4 mb-4 border-2 border-yellow-300">
              <p class="text-center text-sm font-bold text-yellow-900">🎁 Écran Samsung inclus</p>
              <p class="text-center text-xs text-yellow-700 mt-1">Valeur offerte : {{ valeurOfferte }} € par licence</p>
            </div>

            <button @click="openScreenDetails" class="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-xl transition-colors duration-200 mb-3">
              Détail Écran Digital
            </button>
            
            <button @click="openSaiiDemo" class="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-4 rounded-xl transition-colors duration-200">
              Découvrir Saii
            </button>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Modal Écran Digital -->
    <ScreenModal 
      :is-open="isScreenModalOpen"
      :prix-base="prixBase"
      :prix-avec-remise="prixAvecRemise"
      :taux-remise="tauxRemise"
      :valeur-offerte="valeurOfferte"
      :kit-data="adminStore.kitDigital"
      @close="isScreenModalOpen = false"
      @contact="handleContactScreen"
      @demo="handleDemoScreen"
    />
    
    <!-- Modal Kit de Communication -->
    <KitModal 
      :is-open="isKitModalOpen"
      :prix-base="prixBase"
      :prix-avec-remise="prixAvecRemise"
      :taux-remise="tauxRemise"
      :valeur-offerte="valeurOfferte"
      :kit-data="adminStore.kitCommunication"
      @close="isKitModalOpen = false"
      @contact="handleContactKit"
      @demo="handleDemoKit"
    />

    <!-- Configurateur de Participation -->
    <section id="configurateur" class="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <div class="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-6 py-3 rounded-full font-bold mb-6 animate-pulse">
            ⚡ Boost 24h - Avantages Exclusifs
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
            Configurez votre groupe
          </h2>
          <p class="text-xl text-purple-200">
            Ajustez les participations pour atteindre <span class="font-bold text-yellow-300">{{ formatNumber(prixAvecRemise) }} €</span> / an par licence
          </p>
        </div>

        <!-- Configurateur Partenaires Premium -->
        <div class="max-w-3xl mx-auto mb-8">
          <!-- Partenaires Premium -->
          <div class="bg-white rounded-2xl shadow-xl p-6 group relative cursor-help">
            <div class="flex items-center justify-between gap-4">
              <div class="flex items-center gap-3 flex-1">
                <div class="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-md">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                  </svg>
                </div>
                <div>
                  <label class="text-lg font-bold text-gray-900">Partenaires Premium</label>
                  <p class="text-xs text-gray-600">Fournisseurs participants</p>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <button @click="nombrePartenaires = Math.max(1, nombrePartenaires - 1)" class="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center font-bold text-gray-700 transition-colors">
                  -
                </button>
                <input 
                  v-model.number="nombrePartenaires" 
                  type="number" 
                  min="1" 
                  step="1"
                  class="w-20 text-center text-2xl font-bold text-orange-600 bg-orange-50 border-2 border-orange-200 rounded-xl p-2 focus:outline-none focus:border-orange-400"
                  @input="validatePartenaires"
                >
                <button @click="nombrePartenaires += 1" class="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center font-bold text-gray-700 transition-colors">
                  +
                </button>
              </div>
            </div>
            
            <!-- Tooltip Info Partenaires au survol -->
            <div class="absolute -bottom-2 left-0 right-0 translate-y-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 mt-2">
              <div class="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 rounded-2xl shadow-2xl">
                <div class="grid grid-cols-2 gap-4 text-center">
                  <div class="bg-white/10 backdrop-blur rounded-xl p-3">
                    <p class="text-xs opacity-80 mb-1">Par Partenaire / an</p>
                    <p class="text-2xl font-bold">{{ formatNumber(participations.partenaire) }} €</p>
                  </div>
                  <div class="bg-white/10 backdrop-blur rounded-xl p-3">
                    <p class="text-xs opacity-80 mb-1">Par Partenaire / mois</p>
                    <p class="text-2xl font-bold">{{ formatNumber(participations.partenaire / 12) }} €</p>
                  </div>
                  <div class="bg-white/10 backdrop-blur rounded-xl p-3">
                    <p class="text-xs opacity-80 mb-1">Total {{ nombrePartenaires }} partenaires</p>
                    <p class="text-2xl font-bold">{{ formatNumber(coutGlobalPartenaire) }} €</p>
                  </div>
                  <div class="bg-white/10 backdrop-blur rounded-xl p-3">
                    <p class="text-xs opacity-80 mb-1">Par opération (÷3)</p>
                    <p class="text-2xl font-bold">{{ formatNumber(participations.partenaire / 3) }} €</p>
                  </div>
                </div>
                <div class="mt-3 text-center text-sm opacity-90">
                  <p>💡 Chaque partenaire bénéficie de <strong>3 événements/an</strong> de mise en avant</p>
                </div>
                <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-orange-600"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <!-- Jauges de participation -->
          <div class="space-y-6">
            <!-- MME -->
            <div class="participation-item group">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-4">
                  <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-md">
                    M
                  </div>
                  <div>
                    <h4 class="text-xl font-bold text-gray-900">Marque</h4>
                    <p class="text-sm text-gray-600">Participation au déploiement</p>
                  </div>
                </div>
                <div class="text-right relative">
                  <div class="relative inline-block cursor-help">
                    <p class="text-4xl font-bold text-blue-600">{{ (participations.mme / 12).toFixed(0) }} €<span class="text-lg text-gray-500">/mois</span></p>
                    <p class="text-xs text-gray-500 mt-1">{{ (participations.mme / prixAvecRemise * 100).toFixed(0) }}% du total</p>
                    <!-- Tooltip annuel au survol -->
                    <div class="absolute bottom-full right-0 mb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                      <div class="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap text-sm">
                        <p class="font-semibold">{{ participations.mme }} € /an</p>
                        <div class="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-blue-600"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <input 
                v-model.number="participations.mme" 
                type="range" 
                min="0" 
                max="600" 
                step="60"
                class="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:accent-blue-600"
                @input="updateTotal"
              >
            </div>

            <!-- Message si SAGA pas encore débloquée -->
            <div v-if="nombreLicences < 50" class="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-300">
              <div class="flex items-center gap-4">
                <div class="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-md">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="flex-1">
                  <h4 class="text-lg font-bold text-gray-900 mb-1">🔒 SAGA participe à partir de 50 licences</h4>
                  <p class="text-sm text-gray-600">Débloquez 3 campagnes produits incluses (120 € par PDV) en passant à 50 licences</p>
                  <div class="mt-2 inline-flex items-center gap-2 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Encore {{ 50 - nombreLicences }} licences pour débloquer
                  </div>
                </div>
              </div>
            </div>

            <!-- SAGA (visible uniquement à partir de 50 licences) -->
            <div v-else class="participation-item group">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-4">
                  <div class="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-md">
                    S
                  </div>
                  <div>
                    <h4 class="text-xl font-bold text-gray-900">SAGA</h4>
                    <p class="text-sm text-gray-600">3 campagnes produits incluses (débloquée à partir de 50 licences)</p>
                  </div>
                </div>
                <div class="text-right relative">
                  <div class="relative inline-block cursor-help">
                    <p class="text-4xl font-bold text-green-600">{{ (participations.saga / 12).toFixed(0) }} €<span class="text-lg text-gray-500">/mois</span></p>
                    <p class="text-xs text-gray-500 mt-1">{{ (participations.saga / prixAvecRemise * 100).toFixed(0) }}% du total</p>
                    <!-- Tooltip annuel au survol -->
                    <div class="absolute bottom-full right-0 mb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                      <div class="bg-green-600 text-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap text-sm">
                        <p class="font-semibold">{{ participations.saga }} € /an</p>
                        <div class="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-green-600"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <input 
                v-model.number="participations.saga" 
                type="range" 
                min="0" 
                max="600" 
                step="60"
                class="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500 hover:accent-green-600"
                @input="updateTotal"
              >
            </div>

            <!-- ADHÉRENT -->
            <div class="participation-item group">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-4">
                  <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-md">
                    A
                  </div>
                  <div>
                    <h4 class="text-xl font-bold text-gray-900">Adhérent</h4>
                    <p class="text-sm text-gray-600">Accès contenu premium</p>
                  </div>
                </div>
                <div class="text-right relative">
                  <div class="relative inline-block cursor-help">
                    <p class="text-4xl font-bold text-purple-600">{{ (participations.adherent / 12).toFixed(0) }} €<span class="text-lg text-gray-500">/mois</span></p>
                    <p class="text-xs text-gray-500 mt-1">{{ (participations.adherent / prixAvecRemise * 100).toFixed(0) }}% du total</p>
                    <!-- Tooltip annuel au survol -->
                    <div class="absolute bottom-full right-0 mb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                      <div class="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap text-sm">
                        <p class="font-semibold">{{ participations.adherent }} € /an</p>
                        <div class="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-purple-600"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <input 
                v-model.number="participations.adherent" 
                type="range" 
                min="0" 
                max="600" 
                step="60"
                class="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500 hover:accent-purple-600"
                @input="updateTotal"
              >
            </div>

            <!-- PARTENAIRE PREMIUM -->
            <div class="participation-item group">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-4">
                  <div class="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-md">
                    P
                  </div>
                  <div>
                    <h4 class="text-xl font-bold text-gray-900">Partenaire Premium</h4>
                    <p class="text-sm text-gray-600">Mise en avant lors de 3 événements/an</p>
                  </div>
                </div>
                <div class="text-right relative">
                  <div class="relative inline-block cursor-help">
                    <p class="text-4xl font-bold text-orange-600">{{ (participations.partenaire / 12).toFixed(0) }} €<span class="text-lg text-gray-500">/mois</span></p>
                    <p class="text-xs text-gray-500 mt-1">{{ (participations.partenaire / prixAvecRemise * 100).toFixed(0) }}% du total</p>
                    <!-- Tooltip annuel au survol -->
                    <div class="absolute bottom-full right-0 mb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                      <div class="bg-orange-600 text-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap text-sm">
                        <p class="font-semibold">{{ participations.partenaire }} € /an</p>
                        <div class="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-orange-600"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <input 
                v-model.number="participations.partenaire" 
                type="range" 
                min="0" 
                max="600" 
                step="60"
                class="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500 hover:accent-orange-600"
                @input="updateTotal"
              >
            </div>
          </div>

          <!-- Total par Licence -->
          <div class="mt-10 pt-8 border-t-4 border-gray-200">
            <div class="flex items-center justify-between mb-6">
              <div>
                <p class="text-2xl font-bold text-gray-900 mb-2">Total par Licence</p>
                <p class="text-base" :class="isObjectifAtteint ? 'text-green-600 font-semibold' : 'text-gray-600'">
                  {{ isObjectifAtteint ? '✓ Objectif atteint !' : `Encore ${formatNumber(prixAvecRemise - totalParticipations)} € à répartir` }}
                </p>
              </div>
              <div class="text-right group relative cursor-help">
                <p class="text-6xl font-bold" :class="isObjectifAtteint ? 'text-green-600' : 'text-gray-900'">
                  {{ (totalParticipations / 12).toFixed(0) }} €<span class="text-2xl text-gray-500">/mois</span>
                </p>
                <p class="text-sm text-gray-500 mt-1">soit {{ totalParticipations }} € /an par licence</p>
                
                <!-- Tooltip détail annuel au survol -->
                <div class="absolute bottom-full right-0 mb-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                  <div :class="[isObjectifAtteint ? 'bg-green-600' : 'bg-indigo-600', 'text-white px-6 py-3 rounded-xl shadow-2xl whitespace-nowrap']">
                    <p class="text-sm opacity-90 mb-1">Total annuel par licence</p>
                    <p class="text-2xl font-bold">{{ totalParticipations }} € /an</p>
                    <p class="text-sm mt-1 opacity-90">Objectif : {{ formatNumber(prixAvecRemise) }} € /an</p>
                    <div :class="[isObjectifAtteint ? 'border-t-green-600' : 'border-t-indigo-600', 'absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent']"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Barre de progression améliorée -->
            <div class="mt-6">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm font-semibold text-gray-600">Progression par licence</span>
                <span class="text-sm font-bold" :class="isObjectifAtteint ? 'text-green-600' : 'text-gray-900'">
                  {{ pourcentageObjectif }}%
                </span>
              </div>
              <div class="h-5 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                <div 
                  class="h-full transition-all duration-500 rounded-full relative"
                  :class="isObjectifAtteint ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'"
                  :style="{ width: `${Math.min(pourcentageObjectif, 100)}%` }"
                >
                  <div class="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Calculs Globaux et Cagnotte -->
          <div class="mt-8 space-y-6">
            <!-- Coût Global par Participant -->
            <div class="grid md:grid-cols-4 gap-4">
              <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border-2 border-blue-200">
                <p class="text-xs text-gray-600 mb-1">Marque</p>
                <p class="text-2xl font-bold text-blue-600">{{ formatNumber(coutGlobalMME) }} €</p>
                <p class="text-xs text-gray-500 mt-1">{{ nombreLicences }} licences × {{ participations.mme }} €</p>
              </div>
              
              <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border-2 border-green-200">
                <p class="text-xs text-gray-600 mb-1">SAGA</p>
                <p class="text-2xl font-bold text-green-600">{{ formatNumber(coutGlobalSaga) }} €</p>
                <p class="text-xs text-gray-500 mt-1">{{ nombreLicences >= 50 ? nombreLicences : 0 }} licences × {{ participations.saga }} €</p>
              </div>
              
              <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border-2 border-purple-200">
                <p class="text-xs text-gray-600 mb-1">Adhérent</p>
                <p class="text-2xl font-bold text-purple-600">{{ formatNumber(coutGlobalAdherent) }} €</p>
                <p class="text-xs text-gray-500 mt-1">{{ nombreLicences }} licences × {{ participations.adherent }} €</p>
              </div>
              
              <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border-2 border-orange-200 group relative cursor-help">
                <p class="text-xs text-gray-600 mb-1">Partenaires ({{ nombrePartenaires }})</p>
                <p class="text-2xl font-bold text-orange-600">{{ formatNumber(coutGlobalPartenaire) }} €</p>
                <p class="text-xs text-gray-500 mt-1">{{ nombreLicences }} licences × {{ participations.partenaire }} €</p>
                
                <!-- Tooltip répartition par partenaire -->
                <div class="absolute -top-2 left-0 right-0 -translate-y-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 mb-2">
                  <div class="bg-orange-600 text-white px-4 py-3 rounded-xl shadow-2xl whitespace-nowrap">
                    <p class="text-sm font-bold mb-2">Répartition par partenaire :</p>
                    <div class="space-y-1 text-sm">
                      <p>{{ formatNumber(coutGlobalPartenaire / nombrePartenaires) }} € /partenaire</p>
                      <p class="opacity-80">soit {{ formatNumber((coutGlobalPartenaire / nombrePartenaires) / 12) }} € /mois</p>
                    </div>
                    <div class="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-orange-600"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Coût Total de l'Opération -->
            <!-- Remise SAGA mise en avant -->
            <div class="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-2xl mb-6 border-4 border-yellow-300 animate-pulse">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-4">
                  <div class="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-xl font-bold mb-1">🎁 REMISE SAGA TOTALE</p>
                    <p class="text-sm opacity-90">Remise + Kit Communication + Participation SAGA</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-4xl font-bold">{{ formatNumber(remiseSagaTotale) }} €</p>
                  <p class="text-sm opacity-90">d'économies par an</p>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-2xl">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-lg opacity-90 mb-2">Coût total de l'opération</p>
                  <p class="text-sm opacity-75">{{ nombreLicences }} licences × {{ totalParticipations }} € /an</p>
                </div>
                <div class="text-right">
                  <p class="text-5xl font-bold">{{ formatNumber(coutTotalOperation) }} €<span class="text-2xl opacity-80">/an</span></p>
                  <p class="text-lg mt-1 opacity-90">{{ formatNumber(coutTotalOperation / 12) }} € /mois</p>
                </div>
              </div>
            </div>

            <!-- Cagnotte si dépassement -->
            <Transition name="cagnotte">
              <div v-if="cagnotte > 0" class="relative overflow-hidden">
                <!-- Confettis animés -->
                <div class="absolute inset-0 pointer-events-none overflow-hidden">
                  <div class="confetti"></div>
                </div>
                
                <div class="bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl border-4 border-yellow-300 relative z-10">
                  <div class="text-center">
                    <div class="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur rounded-full mb-4 animate-bounce">
                      <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    
                    <h3 class="text-3xl md:text-4xl font-bold mb-3">
                      🎉 Cagnotte Générée ! 🎉
                    </h3>
                    <p class="text-xl mb-6 opacity-90">
                      Vous dépassez l'objectif de {{ formatNumber(prixAvecRemise) }} € par licence !
                    </p>
                    
                    <div class="bg-white/20 backdrop-blur rounded-2xl p-6 mb-6 border-2 border-white/30">
                      <p class="text-lg mb-2 opacity-90">Cagnotte totale disponible</p>
                      <p class="text-6xl md:text-7xl font-bold mb-2">
                        {{ formatNumber(cagnotte) }} €
                      </p>
                      <p class="text-xl opacity-90">
                        soit {{ formatNumber(cagnotte / 12) }} € /mois
                      </p>
                    </div>
                    
                    <div class="grid md:grid-cols-3 gap-4 text-center">
                      <div class="bg-white/10 backdrop-blur rounded-xl p-4">
                        <p class="text-3xl font-bold">{{ formatNumber(cagnotte / nombreLicences) }} €</p>
                        <p class="text-sm opacity-90 mt-1">Par licence /an</p>
                      </div>
                      <div class="bg-white/10 backdrop-blur rounded-xl p-4">
                        <p class="text-3xl font-bold">{{ formatNumber((cagnotte / nombreLicences) / 12) }} €</p>
                        <p class="text-sm opacity-90 mt-1">Par licence /mois</p>
                      </div>
                      <div class="bg-white/10 backdrop-blur rounded-xl p-4">
                        <p class="text-3xl font-bold">+{{ ((totalParticipations / prixAvecRemise - 1) * 100).toFixed(0) }}%</p>
                        <p class="text-sm opacity-90 mt-1">Dépassement</p>
                      </div>
                    </div>
                    
                    <div class="mt-6 flex items-center justify-center gap-2 text-yellow-100">
                      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                      </svg>
                      <span class="font-semibold">Cette cagnotte peut être réinvestie en campagnes supplémentaires ou redistribuée !</span>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Avantages Gagnant-Gagnant -->
    <section id="avantages" class="container mx-auto px-6 py-20">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Une stratégie gagnant-gagnant
        </h2>
        <p class="text-xl text-gray-600">Pour tous les acteurs de l'écosystème</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <!-- Marque -->
        <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-200 hover:shadow-lg transition-shadow">
          <div class="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-4">
            M
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Pour la Marque</h3>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start gap-2">
              <span class="text-blue-500 mt-1">✓</span>
              <span>ROI immédiat et mesurable</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-blue-500 mt-1">✓</span>
              <span>{{ pourcentageEconomie }}% d'économie budget</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-blue-500 mt-1">✓</span>
              <span>Booster les ventes</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-blue-500 mt-1">✓</span>
              <span>Gain de temps significatif</span>
            </li>
          </ul>
        </div>

        <!-- SAGA -->
        <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border-2 border-green-200 hover:shadow-lg transition-shadow">
          <div class="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-4">
            S
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Pour SAGA</h3>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">✓</span>
              <span>Technologie de pointe</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">✓</span>
              <span>Support déploiement</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">✓</span>
              <span>3 campagnes produits/an</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-500 mt-1">✓</span>
              <span>Formation incluse</span>
            </li>
          </ul>
        </div>

        <!-- Adhérent -->
        <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border-2 border-purple-200 hover:shadow-lg transition-shadow">
          <div class="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-4">
            A
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Pour l'Adhérent</h3>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start gap-2">
              <span class="text-purple-500 mt-1">✓</span>
              <span>Contenu premium IA</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-purple-500 mt-1">✓</span>
              <span>Hyper-personnalisation</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-purple-500 mt-1">✓</span>
              <span>Automatisation marketing</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-purple-500 mt-1">✓</span>
              <span>Création multicanal</span>
            </li>
          </ul>
        </div>

        <!-- Partenaire -->
        <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border-2 border-orange-200 hover:shadow-lg transition-shadow">
          <div class="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-4">
            P
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Pour le Partenaire</h3>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start gap-2">
              <span class="text-orange-500 mt-1">✓</span>
              <span>Visibilité accrue</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-orange-500 mt-1">✓</span>
              <span>Mise en avant marque</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-orange-500 mt-1">✓</span>
              <span>3 événements/an inclus</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-orange-500 mt-1">✓</span>
              <span>Coût maîtrisé</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Call to Action Principal -->
      <div class="mt-16 text-center">
        <div class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white max-w-4xl mx-auto">
          <h3 class="text-3xl md:text-4xl font-bold mb-4">
            Prêt à booster votre performance marketing ?
          </h3>
          <p class="text-xl mb-8 opacity-90">
            Rejoignez l'union des forces et bénéficiez de {{ pourcentageEconomie }}% d'économie
          </p>
          <button @click="openSaiiDemo" class="bg-white text-indigo-600 hover:bg-gray-100 font-bold py-5 px-12 rounded-xl text-xl transition-colors duration-200 shadow-lg hover:shadow-xl">
            Découvrir la solution Saii
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 class="text-2xl font-bold mb-4">Saii</h4>
            <p class="text-gray-400">L'union fait la force</p>
          </div>
          <div>
            <h5 class="font-semibold mb-3">Nos solutions</h5>
            <ul class="space-y-2 text-gray-400">
              <li>Plateforme SaaS IA</li>
              <li>Webshop Print</li>
              <li>Affichage Digital</li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold mb-3">Contact</h5>
            <p class="text-gray-400">Découvrez comment nous pouvons vous aider</p>
          </div>
        </div>
        <div class="border-t border-gray-800 pt-8 text-center">
          <p class="text-gray-400">&copy; 2026 Saii - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, onMounted } from 'vue'
import ScreenModal from '~/components/ScreenModal.vue'
import KitModal from '~/components/KitModal.vue'
import { useAdminStore } from '~/stores/admin'

// Store admin pour les données configurables
const adminStore = useAdminStore()

// État des modals
const isScreenModalOpen = ref(false)
const isKitModalOpen = ref(false)

// État du comparatif budget et ref vers la section
const showBudgetComparatif = ref(false)
const budgetSection = ref(null)

// Prix de base (depuis le store)
const prixBase = computed(() => adminStore.prixConfig.prixBase || 732)

// Nombre de licences (= Points de Vente, détermine le taux de remise)
const nombreLicences = ref(50)

// Nombre de partenaires
const nombrePartenaires = ref(2)

// Points de Vente = Nombre de Licences (même valeur)
const pointsDeVente = computed(() => nombreLicences.value)

// Calcul du taux de remise selon les paliers (depuis le store admin)
const tauxRemise = computed(() => {
  const nb = nombreLicences.value
  const paliers = adminStore.prixConfig?.paliers || []
  
  // Chercher le palier correspondant au nombre de licences
  const palierActif = paliers.find(p => nb >= p.min && nb <= p.max)
  return palierActif ? palierActif.remise : 0
})

// Message du palier actif (depuis le store admin)
const palierMessage = computed(() => {
  const nb = nombreLicences.value
  const paliers = adminStore.prixConfig?.paliers || []
  
  // Chercher le palier correspondant
  const palierActif = paliers.find(p => nb >= p.min && nb <= p.max)
  if (palierActif) {
    return `Palier ${palierActif.nom} : ${palierActif.min}-${palierActif.max} licences`
  }
  return 'Aucun palier trouvé'
})

// Valeur du kit/écran offert selon le nombre de licences (depuis le store)
const valeurOfferte = computed(() => {
  if (nombreLicences.value >= 50) {
    return adminStore.kitDigital.valeur50plus || 360
  } else {
    return adminStore.kitCommunication.valeur1_49 || 257
  }
})

// Message de valeur offerte
const valeurOfferteMessage = computed(() => {
  const nb = nombreLicences.value
  const valeurKit1_49 = adminStore.kitCommunication.valeur1_49 || 257
  const valeurKit50plus = adminStore.kitCommunication.valeur50plus || 360
  const valeurEcran = adminStore.kitDigital.valeur50plus || 360
  
  if (nb >= 50) {
    return `🎁 Kit de Communication (${valeurKit50plus} €) OU Écran Digital (${valeurEcran} €) inclus !`
  } else {
    return `🎁 Kit de Communication inclus ! (Valeur : ${valeurKit1_49} € par licence)`
  }
})

// État des participations (SAGA à 120 par défaut mais peut être ajustée)
const participations = ref({
  mme: 360,
  saga: 120,
  adherent: 0,
  partenaire: 120
})

// Calcul du prix avec remise
const prixAvecRemise = computed(() => {
  const base = prixBase.value || 732
  return Math.round(base * (1 - tauxRemise.value / 100))
})

// Validation du nombre de partenaires (minimum 1)
const validatePartenaires = () => {
  if (nombrePartenaires.value < 1) {
    nombrePartenaires.value = 1
  }
}

// Calcul du total par PDV (SAGA uniquement si >= 50 licences)
const totalParticipations = computed(() => {
  const sagaContribution = nombreLicences.value >= 50 ? participations.value.saga : 0
  return participations.value.mme + 
         sagaContribution + 
         participations.value.adherent + 
         participations.value.partenaire
})

// Vérifier si l'objectif est atteint
const isObjectifAtteint = computed(() => {
  return totalParticipations.value >= prixAvecRemise.value
})

// Pourcentage de l'objectif atteint
const pourcentageObjectif = computed(() => {
  return Math.round((totalParticipations.value / prixAvecRemise.value) * 100)
})

// Calculs globaux par participant (SAGA uniquement si >= 50 licences)
const coutGlobalMME = computed(() => nombreLicences.value * participations.value.mme)
const coutGlobalSaga = computed(() => {
  const sagaContribution = nombreLicences.value >= 50 ? participations.value.saga : 0
  return nombreLicences.value * sagaContribution
})
const coutGlobalAdherent = computed(() => nombreLicences.value * participations.value.adherent)
const coutGlobalPartenaire = computed(() => nombreLicences.value * participations.value.partenaire)

// Coût total de l'opération (Nombre de licences × Total par licence)
const coutTotalOperation = computed(() => {
  return nombreLicences.value * totalParticipations.value
})

// Budget 2026 optimisé (Marque + Adhérents uniquement, SAGA non inclus)
const budget2026 = computed(() => {
  return coutGlobalMME.value + coutGlobalAdherent.value
})

// Remise SAGA totale (remise + kit + participation)
const remiseSagaTotale = computed(() => {
  const remise = (prixBase.value - prixAvecRemise.value) * nombreLicences.value
  const kitValue = nombreLicences.value >= 50 ? 
    (adminStore.kitDigital.valeur50plus || 360) : 
    (adminStore.kitCommunication.valeur1_49 || 257)
  const participationSaga = nombreLicences.value >= 50 ? coutGlobalSaga.value : 0
  
  return remise + kitValue + participationSaga
})

// Budget 2025 (depuis le store)
const budget2025 = computed(() => adminStore.totalBudget2025 || 30338)

// Économie réalisée (Budget 2025 - Budget 2026)
const economieRealisee = computed(() => {
  return budget2025.value - budget2026.value
})

// Pourcentage d'économie
const pourcentageEconomie = computed(() => {
  if (budget2025.value === 0) return 0
  return Math.round((economieRealisee.value / budget2025.value) * 100)
})

// Cagnotte générée si dépassement du prix avec remise par licence
const cagnotte = computed(() => {
  if (totalParticipations.value > prixAvecRemise.value) {
    return (totalParticipations.value - prixAvecRemise.value) * nombreLicences.value
  }
  return 0
})

// Fonction de formatage des nombres (espaces pour milliers)
const formatNumber = (num) => {
  return Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

// Mise à jour du total
const updateTotal = () => {
  // Fonction appelée à chaque changement de jauge
}

// Toggle du comparatif budget avec scroll automatique
const toggleBudgetComparatif = async () => {
  if (!showBudgetComparatif.value) {
    // Ouvrir la section
    showBudgetComparatif.value = true
    // Attendre que le DOM soit mis à jour
    await nextTick()
    // Scroller vers la section avec animation smooth
    if (budgetSection.value) {
      budgetSection.value.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center'
      })
    }
  } else {
    // Fermer la section
    showBudgetComparatif.value = false
  }
}

// Actions des boutons
const openKitDetails = () => {
  isKitModalOpen.value = true
}

const openScreenDetails = () => {
  isScreenModalOpen.value = true
}

const openSaiiDemo = () => {
  alert('Découverte de la solution Saii\n\n✓ Création de contenu multipage/multisize\n✓ Intelligence artificielle intégrée\n✓ Gestion de variables\n✓ Automation complète\n\nÀ développer dans une page dédiée')
}

// Handlers du modal Écran
const handleContactScreen = () => {
  console.log('Contact pour écran Samsung')
  alert('Merci de votre intérêt ! Un conseiller vous contactera prochainement.')
  isScreenModalOpen.value = false
}

const handleDemoScreen = () => {
  console.log('Demande de démo écran')
  openSaiiDemo()
  isScreenModalOpen.value = false
}

// Handlers du modal Kit
const handleContactKit = () => {
  console.log('Contact pour kit de communication')
  alert('Merci de votre intérêt ! Un conseiller vous contactera prochainement pour votre kit de communication.')
  isKitModalOpen.value = false
}

const handleDemoKit = () => {
  console.log('Demande de démo kit')
  openSaiiDemo()
  isKitModalOpen.value = false
}

// Charger les données sauvegardées au montage
onMounted(() => {
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

/* Animations pour le comparatif budget */
.slide-down-enter-active {
  animation: slideDown 0.5s ease-out;
}

.slide-down-leave-active {
  animation: slideUp 0.4s ease-in;
}

@keyframes slideDown {
  0% {
    opacity: 0;
    transform: translateY(-30px);
    max-height: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    max-height: 1000px;
  }
}

@keyframes slideUp {
  0% {
    opacity: 1;
    transform: translateY(0);
    max-height: 1000px;
  }
  100% {
    opacity: 0;
    transform: translateY(-30px);
    max-height: 0;
  }
}

/* Animations pour la cagnotte */
.cagnotte-enter-active {
  animation: cagnotteIn 0.6s ease-out;
}

.cagnotte-leave-active {
  animation: cagnotteOut 0.4s ease-in;
}

@keyframes cagnotteIn {
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(20px);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes cagnotteOut {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}

/* Effet confettis */
.confetti {
  position: absolute;
  width: 100%;
  height: 100%;
}

.confetti::before,
.confetti::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.5);
  animation: confetti-fall 3s linear infinite;
}

.confetti::before {
  left: 10%;
  animation-delay: 0s;
  background: #FFD700;
}

.confetti::after {
  left: 80%;
  animation-delay: 1s;
  background: #FFA500;
}

@keyframes confetti-fall {
  0% {
    top: -10%;
    transform: translateX(0) rotateZ(0deg);
    opacity: 1;
  }
  100% {
    top: 110%;
    transform: translateX(100px) rotateZ(360deg);
    opacity: 0;
  }
}
</style>
