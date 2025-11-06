<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Modern Sidebar -->
    <div class="fixed inset-y-0 left-0 w-64 bg-white shadow-xl border-r border-gray-200 z-30">
      <!-- Logo Section -->
      <div class="flex items-center gap-3 p-6 border-b border-gray-200">
        <div class="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
          <img src="/LOGO_SAII_EDIT.png" alt="Saii" class="h-6 w-auto" />
        </div>
        <div>
          <h1 class="text-lg font-bold text-gray-900">Mal'nessa</h1>
          <p class="text-xs text-gray-500">Print Config</p>
        </div>
      </div>

      <!-- Search Bar -->
      <div class="p-4 border-b border-gray-200">
        <div class="relative">
          <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <input
            type="text"
            placeholder="Search products..."
            class="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
          />
        </div>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 p-4">
        <div class="space-y-1">
          <NuxtLink
            to="/admin/dashboard"
            class="flex items-center gap-3 px-3 py-2.5 text-gray-700 hover:bg-gray-100 hover:text-indigo-600 rounded-lg transition-colors font-medium"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v0M8 5a2 2 0 012-2h4a2 2 0 012 2v0M8 5H6a2 2 0 00-2 2v2m0 0h2m0 0v2a2 2 0 002 2h2"/>
            </svg>
            Dashboard
          </NuxtLink>

          <NuxtLink
            to="/admin/print-config"
            class="flex items-center gap-3 px-3 py-2.5 text-indigo-600 bg-indigo-50 border-r-2 border-indigo-600 rounded-lg font-medium"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
            </svg>
            Print Configuration
          </NuxtLink>
        </div>

        <!-- Bottom Section -->
        <div class="absolute bottom-4 left-4 right-4">
          <div class="p-3 bg-gray-50 rounded-lg">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                <span class="text-white text-sm font-semibold">JJ</span>
              </div>
              <div>
                <p class="text-sm font-medium text-gray-900">Jacob Jones</p>
                <p class="text-xs text-gray-500">Administrator</p>
              </div>
            </div>
            <NuxtLink
              to="/print"
              target="_blank"
              class="w-full flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 hover:text-indigo-600 rounded-lg transition-colors text-sm"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
              </svg>
              View Print Page
            </NuxtLink>
          </div>
        </div>
      </nav>
    </div>

    <!-- Main Content -->
    <div class="ml-64">
      <!-- Top Header -->
      <header class="bg-white border-b border-gray-200 px-8 py-4">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-bold text-gray-900">Print Configuration</h1>
            <p class="text-gray-600">Manage print supports, materials, and pricing</p>
          </div>
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-2">
              <button class="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19H4l5-5V9a2 2 0 012-2h2a2 2 0 012 2v10z"/>
                </svg>
              </button>
              <button class="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v0M4 6a2 2 0 00-2 2v8a2 2 0 002 2h2a2 2 0 002-2V6M4 6h16M16 6a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V8a2 2 0 012-2h2z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content Area -->
      <main class="p-8">
        <!-- Modern Tab System -->
        <div class="mb-8">
          <div class="flex space-x-1 bg-white border border-gray-200 p-1 rounded-xl shadow-sm">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              @click="activeTab = tab.id"
              :class="[
                'flex-1 py-3 px-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2',
                activeTab === tab.id
                  ? 'bg-indigo-50 text-indigo-600 shadow-sm border border-indigo-100'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              ]"
            >
              <PrintIcon :type="tab.icon" size="sm" :color="activeTab === tab.id ? 'info' : 'secondary'" />
              {{ tab.label }}
            </button>
          </div>
        </div>

        <!-- Tab Content -->
        <div class="bg-white rounded-xl border border-gray-200 p-8">
          <!-- Adhésifs -->
          <div v-if="activeTab === 'adhesifs'">
            <div class="mb-6">
              <h2 class="text-xl font-bold text-gray-900">Configuration des Adhésifs</h2>
              <p class="text-sm text-gray-600">Sélectionnez les matières adhésives et sur quels supports elles peuvent être cumulées</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <!-- Activation -->
              <div class="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Activation</h3>
                <label class="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-indigo-300 transition-colors">
                  <input type="checkbox" v-model="adhesifsForm.enabled" class="w-5 h-5 text-indigo-600" />
                  <div>
                    <p class="font-medium">Activer les adhésifs</p>
                    <p class="text-sm text-gray-600">Affiche l'adhésif dans le configurateur</p>
                  </div>
                </label>
              </div>

              <!-- Supports cibles -->
              <div class="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Supports autorisés</h3>
                <div class="space-y-2 max-h-64 overflow-y-auto">
                  <label
                    v-for="support in printStore.supports"
                    :key="support.id"
                    class="flex items-center justify-between p-3 border-2 border-gray-100 rounded-lg hover:border-indigo-200 transition-colors"
                  >
                    <div class="flex items-center gap-3">
                      <div class="w-8 h-8 rounded-lg flex items-center justify-center" :class="support.color">
                        <PrintIcon :type="getSupportIconType(support.id)" size="xs" color="primary" />
                      </div>
                      <span class="text-sm font-medium text-gray-800">{{ support.nom }}</span>
                    </div>
                    <input type="checkbox" :value="support.id" v-model="adhesifsForm.targetSupports" class="w-5 h-5 text-indigo-600" />
                  </label>
                </div>
              </div>

              <!-- Matières adhésives -->
              <div class="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 lg:col-span-1">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Matières adhésives</h3>
                <div class="space-y-2 max-h-64 overflow-y-auto">
                  <div v-for="item in allMatieres" :key="item.id" class="p-3 border-2 border-gray-100 rounded-lg hover:border-indigo-200 transition-colors">
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-3 min-w-0">
                        <div class="w-3 h-3 rounded-full" :style="{ backgroundColor: item.couleur }"></div>
                        <div class="truncate">
                          <p class="text-sm font-medium text-gray-800 truncate">{{ item.nom }}</p>
                          <p class="text-xs text-gray-500 truncate">{{ item.supportNom }}</p>
                        </div>
                      </div>
                      <input type="checkbox" :value="item.id" v-model="adhesifsForm.matieres" class="w-5 h-5 text-indigo-600" />
                    </div>
                    <div class="mt-2 flex items-center justify-between gap-2">
                      <label class="text-xs text-gray-600">Prix d'achat (€/m²)</label>
                      <div class="flex items-center gap-2">
                        <input
                          :value="item.prixParM2"
                          @change="updateSupportPrix(item.supportId, item.id, Number($event.target.value))"
                          type="number"
                          step="0.1"
                          min="0"
                          class="w-20 p-1 border border-gray-300 rounded text-xs text-right"
                        />
                        <span class="text-xs text-gray-500">€</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Ajouter un adhésif -->
              <div class="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 lg:col-span-3">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Ajouter un nouvel adhésif</h3>
                <div class="grid md:grid-cols-5 gap-3 items-end">
                  <div class="md:col-span-1">
                    <label class="block text-sm font-medium text-gray-700 mb-1">Support</label>
                    <select v-model="newAdhesif.supportId" class="w-full p-2 border-2 border-gray-200 rounded-lg focus:border-indigo-500">
                      <option v-for="s in printStore.supports" :key="s.id" :value="s.id">{{ s.nom }}</option>
                    </select>
                  </div>
                  <div class="md:col-span-1">
                    <label class="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                    <input v-model="newAdhesif.nom" type="text" class="w-full p-2 border-2 border-gray-200 rounded-lg focus:border-indigo-500" placeholder="Ex: Adhésif opaque" />
                  </div>
                  <div class="md:col-span-2">
                    <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <input v-model="newAdhesif.description" type="text" class="w-full p-2 border-2 border-gray-200 rounded-lg focus:border-indigo-500" placeholder="Ex: Vinyle opaque longue durée" />
                  </div>
                  <div class="md:col-span-1">
                    <label class="block text-sm font-medium text-gray-700 mb-1">Prix achat €/m²</label>
                    <input v-model.number="newAdhesif.prixParM2" type="number" step="0.1" min="0" class="w-full p-2 border-2 border-gray-200 rounded-lg focus:border-indigo-500" />
                  </div>
                  <div class="md:col-span-1">
                    <label class="block text-sm font-medium text-gray-700 mb-1">Couleur</label>
                    <input v-model="newAdhesif.couleur" type="color" class="w-full h-[42px] p-1 border-2 border-gray-200 rounded-lg" />
                  </div>
                  <div class="md:col-span-1">
                    <label class="block text-sm font-medium text-gray-700 mb-1">Ajouter aux adhésifs</label>
                    <input v-model="newAdhesif.addToConfig" type="checkbox" class="w-5 h-5 text-indigo-600" />
                  </div>
                  <div class="md:col-span-1">
                    <button @click="createAdhesif" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold">Ajouter</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-6">
              <button @click="saveAdhesifs" class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                <PrintIcon type="save" size="sm" color="primary" />
                Sauvegarder les Adhésifs
              </button>
            </div>
          </div>
          <!-- Catégories -->
          <div v-if="activeTab === 'categories'">
            <div class="flex items-center justify-between mb-6">
              <div>
                <h2 class="text-xl font-bold text-gray-900">Product Categories</h2>
                <p class="text-sm text-gray-600">Organize your print products into categories</p>
              </div>
              <button
                @click="openCategoryModal"
                class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                <PrintIcon type="add" size="sm" color="primary" />
                Add Category
              </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                v-for="category in printStore.categories"
                :key="category.id"
                class="group relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-indigo-300 transition-all duration-200"
              >
                <div class="flex items-start justify-between mb-4">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" :class="category.color">
                      <PrintIcon :type="category.icon" size="md" color="primary" />
                    </div>
                    <div>
                      <h3 class="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{{ category.nom }}</h3>
                      <p class="text-sm text-gray-600">{{ category.description }}</p>
                    </div>
                  </div>
                  <span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{{ category.ordre }}</span>
                </div>

                <div class="flex gap-2 mt-4">
                  <button
                    @click="editCategory(category)"
                    class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    <PrintIcon type="edit" size="xs" color="secondary" />
                    Edit
                  </button>
                  <button
                    @click="deleteCategory(category.id)"
                    class="bg-red-100 hover:bg-red-200 text-red-700 py-2 px-3 rounded-lg font-medium transition-colors flex items-center gap-2 text-sm"
                  >
                    <PrintIcon type="delete" size="xs" color="danger" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Supports -->
          <div v-if="activeTab === 'supports'">
            <div class="flex items-center justify-between mb-6">
              <div>
                <h2 class="text-xl font-bold text-gray-900">Print Supports</h2>
                <p class="text-sm text-gray-600">Configure available print materials and sizes</p>
              </div>
              <button
                @click="openSupportModal"
                class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                <PrintIcon type="add" size="sm" color="primary" />
                Add Support
              </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                v-for="support in printStore.supports"
                :key="support.id"
                class="group relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-indigo-300 transition-all duration-200"
              >
                <div class="flex items-start justify-between mb-4">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" :class="support.color">
                      <PrintIcon :type="getSupportIconType(support.id)" size="md" color="primary" />
                    </div>
                    <div>
                      <h3 class="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{{ support.nom }}</h3>
                      <p class="text-sm text-gray-600">{{ support.description }}</p>
                    </div>
                  </div>
                  <span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{{ support.matieres.length }} materials</span>
                </div>
              
                <div class="mb-4">
                  <div class="flex items-center justify-between mb-3">
                    <p class="text-sm font-medium text-gray-700">Available Materials</p>
                    <button
                      @click="openMatiereModal(support.id)"
                      class="text-xs bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-2 py-1 rounded-lg font-medium transition-colors flex items-center gap-1"
                    >
                      <PrintIcon type="add" size="xs" color="info" />
                      Add
                    </button>
                  </div>
                  <div class="space-y-2">
                    <div
                      v-for="matiere in support.matieres"
                      :key="matiere.id"
                      class="flex items-center justify-between text-sm bg-white border border-gray-100 rounded-lg p-3 group/matiere"
                    >
                      <div class="flex items-center gap-2">
                        <div class="w-3 h-3 rounded-full" :style="{ backgroundColor: matiere.couleur }"></div>
                        <span class="text-gray-700 font-medium">{{ matiere.nom }}</span>
                        <span class="text-xs text-gray-500">({{ matiere.description }})</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <input
                          v-model.number="matiere.prixParM2"
                          @change="updateSupportPrix(support.id, matiere.id, matiere.prixParM2)"
                          type="number"
                          min="0"
                          step="0.1"
                          class="w-16 text-right text-xs border border-gray-300 rounded px-1 py-0.5 focus:border-indigo-500 focus:outline-none group-hover/matiere:border-indigo-400"
                        />
                        <span class="font-medium text-indigo-600 text-xs">€/m²</span>
                        <button
                          @click="editMatiere(support.id, matiere)"
                          class="text-gray-400 hover:text-indigo-600 transition-colors"
                        >
                          <PrintIcon type="edit" size="xs" color="secondary" />
                        </button>
                        <button
                          @click="deleteMatiere(support.id, matiere.id)"
                          class="text-gray-400 hover:text-red-600 transition-colors"
                        >
                          <PrintIcon type="delete" size="xs" color="danger" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex gap-2 mt-6 pt-4 border-t border-gray-100">
                  <button
                    @click="editSupport(support)"
                    class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    <PrintIcon type="edit" size="xs" color="secondary" />
                    Edit
                  </button>
                  <button
                    @click="deleteSupport(support.id)"
                    class="bg-red-100 hover:bg-red-200 text-red-700 py-2 px-3 rounded-lg font-medium transition-colors flex items-center gap-2 text-sm"
                  >
                    <PrintIcon type="delete" size="xs" color="danger" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Options -->
          <div v-if="activeTab === 'options'">
            <div class="flex items-center justify-between mb-6">
              <div>
                <h2 class="text-xl font-bold text-gray-900">Print Options</h2>
                <p class="text-sm text-gray-600">Configure additional print options and finishes</p>
              </div>
              <button
                @click="openOptionModal"
                class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                <PrintIcon type="add" size="sm" color="primary" />
                Add Option
              </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                v-for="option in printStore.options"
                :key="option.id"
                class="group relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-indigo-300 transition-all duration-200"
              >
                <div class="flex items-start justify-between mb-4">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" :class="option.categorie === 'finition' ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-blue-600'">
                      <PrintIcon :type="option.categorie === 'finition' ? 'laminage' : 'settings'" size="md" color="primary" />
                    </div>
                    <div>
                      <h3 class="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{{ option.nom }}</h3>
                      <p class="text-sm text-gray-600">{{ option.description }}</p>
                    </div>
                  </div>
                  <span class="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full font-medium">+{{ option.prix }}€</span>
                </div>

                <div class="flex gap-2 mt-4 pt-4 border-t border-gray-100">
                  <button
                    @click="editOption(option)"
                    class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    <PrintIcon type="edit" size="xs" color="secondary" />
                    Edit
                  </button>
                  <button
                    @click="deleteOption(option.id)"
                    class="bg-red-100 hover:bg-red-200 text-red-700 py-2 px-3 rounded-lg font-medium transition-colors flex items-center gap-2 text-sm"
                  >
                    <PrintIcon type="delete" size="xs" color="danger" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Façonnages -->
          <div v-if="activeTab === 'faconnages'">
            <div class="flex items-center justify-between mb-6">
              <div>
                <h2 class="text-xl font-bold text-gray-900">Finishing Work</h2>
                <p class="text-sm text-gray-600">Configure cutting and finishing options</p>
              </div>
              <button
                @click="openFaconnageModal"
                class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                <PrintIcon type="add" size="sm" color="primary" />
                Add Finishing
              </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                v-for="faconnage in printStore.faconnages"
                :key="faconnage.id"
                class="group relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-indigo-300 transition-all duration-200"
              >
                <div class="flex items-start justify-between mb-4">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform bg-green-100 text-green-600">
                      <PrintIcon type="decoupe" size="md" color="primary" />
                    </div>
                    <div>
                      <h3 class="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{{ faconnage.nom }}</h3>
                      <p class="text-sm text-gray-600">{{ faconnage.description }}</p>
                    </div>
                  </div>
                  <span class="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full font-medium">+{{ faconnage.prix }}€</span>
                </div>

                <div class="flex gap-2 mt-4 pt-4 border-t border-gray-100">
                  <button
                    @click="editFaconnage(faconnage)"
                    class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    <PrintIcon type="edit" size="xs" color="secondary" />
                    Edit
                  </button>
                  <button
                    @click="deleteFaconnage(faconnage.id)"
                    class="bg-red-100 hover:bg-red-200 text-red-700 py-2 px-3 rounded-lg font-medium transition-colors flex items-center gap-2 text-sm"
                  >
                    <PrintIcon type="delete" size="xs" color="danger" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Accessoires -->
          <div v-if="activeTab === 'accessoires'">
            <div class="flex items-center justify-between mb-6">
              <div>
                <h2 class="text-xl font-bold text-gray-900">Accessories</h2>
                <p class="text-sm text-gray-600">Configure display stands and additional equipment</p>
              </div>
              <button
                @click="openAccessoireModal"
                class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                <PrintIcon type="add" size="sm" color="primary" />
                Add Accessory
              </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                v-for="accessoire in printStore.accessoires"
                :key="accessoire.id"
                class="group relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-indigo-300 transition-all duration-200"
              >
                <div class="flex items-start justify-between mb-4">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform bg-orange-100 text-orange-600">
                      <PrintIcon type="structure" size="md" color="primary" />
                    </div>
                    <div>
                      <h3 class="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{{ accessoire.nom }}</h3>
                      <p class="text-sm text-gray-600">{{ accessoire.description }}</p>
                    </div>
                  </div>
                  <span class="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full font-medium">+{{ accessoire.prix }}€</span>
                </div>

                <div class="flex gap-2 mt-4 pt-4 border-t border-gray-100">
                  <button
                    @click="editAccessoire(accessoire)"
                    class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    <PrintIcon type="edit" size="xs" color="secondary" />
                    Edit
                  </button>
                  <button
                    @click="deleteAccessoire(accessoire.id)"
                    class="bg-red-100 hover:bg-red-200 text-red-700 py-2 px-3 rounded-lg font-medium transition-colors flex items-center gap-2 text-sm"
                  >
                    <PrintIcon type="delete" size="xs" color="danger" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Configuration des Coûts de Revient -->
          <div v-if="activeTab === 'couts'">
            <div class="mb-6">
              <h2 class="text-xl font-bold text-gray-900">Gestion des Coûts de Revient</h2>
              <p class="text-sm text-gray-600">Configurez tous les coûts de production pour un calcul précis de la rentabilité</p>
            </div>
          
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <!-- Coûts Généraux d'Impression -->
              <div class="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6">
                <div class="flex items-center gap-3 mb-6">
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-gray-900">Coûts d'Impression</h3>
                    <p class="text-xs text-gray-500">Coûts par m² d'impression</p>
                  </div>
                </div>
                
                <div class="space-y-4">
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">Encre (€/m²)</label>
                      <input
                        v-model.number="coutsConfig.coutsGeneraux.encreParM2"
                        type="number"
                        step="0.01"
                        class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">Main d'œuvre (€/m²)</label>
                      <input
                        v-model.number="coutsConfig.coutsGeneraux.mainOeuvreParM2"
                        type="number"
                        step="0.01"
                        class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      />
                    </div>
                  </div>
                  
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">Électricité (€/m²)</label>
                      <input
                        v-model.number="coutsConfig.coutsGeneraux.electriciteParM2"
                        type="number"
                        step="0.01"
                        class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">Amortissement (€/m²)</label>
                      <input
                        v-model.number="coutsConfig.coutsGeneraux.amortissementMachineParM2"
                        type="number"
                        step="0.01"
                        class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      />
                    </div>
                  </div>
                  
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">Maintenance (€/m²)</label>
                      <input
                        v-model.number="coutsConfig.coutsGeneraux.maintenanceParM2"
                        type="number"
                        step="0.01"
                        class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">Préparation (€/m²)</label>
                      <input
                        v-model.number="coutsConfig.coutsGeneraux.preparationParM2"
                        type="number"
                        step="0.01"
                        class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Contrôle Qualité (€/m²)</label>
                    <input
                      v-model.number="coutsConfig.coutsGeneraux.controleQualiteParM2"
                      type="number"
                      step="0.01"
                      class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>
                </div>
              </div>

              <!-- Coûts de Façonnage -->
              <div class="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6">
                <div class="flex items-center gap-3 mb-6">
                  <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-gray-900">Coûts de Façonnage</h3>
                    <p class="text-xs text-gray-500">Coûts horaires et temps par m²</p>
                  </div>
                </div>
                
                <div class="space-y-4">
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">Main d'œuvre (€/h)</label>
                      <input
                        v-model.number="coutsConfig.coutsFaconnage.mainOeuvreParHeure"
                        type="number"
                        step="0.5"
                        class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-1">Machine (€/h)</label>
                      <input
                        v-model.number="coutsConfig.coutsFaconnage.coutMachineParHeure"
                        type="number"
                        step="0.5"
                        class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                      />
                    </div>
                  </div>
                  
                  <div class="border-t border-gray-200 pt-4">
                    <h4 class="text-sm font-semibold text-gray-700 mb-3">Temps par m² (heures)</h4>
                    <div class="grid grid-cols-2 gap-3">
                      <div>
                        <label class="block text-xs text-gray-600 mb-1">Découpe</label>
                        <input
                          v-model.number="coutsConfig.coutsFaconnage.tempsDecoupeParM2"
                          type="number"
                          step="0.01"
                          class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                        />
                      </div>
                      <div>
                        <label class="block text-xs text-gray-600 mb-1">Ourlet</label>
                        <input
                          v-model.number="coutsConfig.coutsFaconnage.tempsOurletParM2"
                          type="number"
                          step="0.01"
                          class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                        />
                      </div>
                      <div>
                        <label class="block text-xs text-gray-600 mb-1">Perforation</label>
                        <input
                          v-model.number="coutsConfig.coutsFaconnage.tempsPerforationParM2"
                          type="number"
                          step="0.01"
                          class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                        />
                      </div>
                      <div>
                        <label class="block text-xs text-gray-600 mb-1">Pliage</label>
                        <input
                          v-model.number="coutsConfig.coutsFaconnage.tempsPliageParM2"
                          type="number"
                          step="0.01"
                          class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                        />
                      </div>
                      <div>
                        <label class="block text-xs text-gray-600 mb-1">Collage</label>
                        <input
                          v-model.number="coutsConfig.coutsFaconnage.tempsCollageParM2"
                          type="number"
                          step="0.01"
                          class="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Coûts des Accessoires -->
            <div class="mt-8 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-900">Coûts des Accessoires</h3>
                  <p class="text-xs text-gray-500">Coûts de revient directs par accessoire</p>
                </div>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Structures -->
                <div>
                  <h4 class="text-sm font-semibold text-gray-700 mb-3">Structures</h4>
                  <div class="space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-gray-600">Pied Kakémono</span>
                      <div class="flex items-center gap-2">
                        <input
                          v-model.number="coutsConfig.coutsAccessoires.structure.piedKakemono"
                          type="number"
                          step="0.01"
                          class="w-20 p-1 border border-gray-300 rounded text-xs text-center"
                        />
                        <span class="text-xs text-gray-500">€</span>
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-gray-600">Pied Bannière</span>
                      <div class="flex items-center gap-2">
                        <input
                          v-model.number="coutsConfig.coutsAccessoires.structure.piedBanniere"
                          type="number"
                          step="0.01"
                          class="w-20 p-1 border border-gray-300 rounded text-xs text-center"
                        />
                        <span class="text-xs text-gray-500">€</span>
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-gray-600">Structure Vitrine</span>
                      <div class="flex items-center gap-2">
                        <input
                          v-model.number="coutsConfig.coutsAccessoires.structure.structureVitrine"
                          type="number"
                          step="0.01"
                          class="w-20 p-1 border border-gray-300 rounded text-xs text-center"
                        />
                        <span class="text-xs text-gray-500">€</span>
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-gray-600">Crochets</span>
                      <div class="flex items-center gap-2">
                        <input
                          v-model.number="coutsConfig.coutsAccessoires.structure.crochets"
                          type="number"
                          step="0.01"
                          class="w-20 p-1 border border-gray-300 rounded text-xs text-center"
                        />
                        <span class="text-xs text-gray-500">€</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Fixation -->
                <div>
                  <h4 class="text-sm font-semibold text-gray-700 mb-3">Fixation</h4>
                  <div class="space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-gray-600">Adhésif double face</span>
                      <div class="flex items-center gap-2">
                        <input
                          v-model.number="coutsConfig.coutsAccessoires.fixation.adhesifDoubleFace"
                          type="number"
                          step="0.01"
                          class="w-20 p-1 border border-gray-300 rounded text-xs text-center"
                        />
                        <span class="text-xs text-gray-500">€/m</span>
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-gray-600">Vis</span>
                      <div class="flex items-center gap-2">
                        <input
                          v-model.number="coutsConfig.coutsAccessoires.fixation.vis"
                          type="number"
                          step="0.01"
                          class="w-20 p-1 border border-gray-300 rounded text-xs text-center"
                        />
                        <span class="text-xs text-gray-500">€/pièce</span>
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-gray-600">Chevilles</span>
                      <div class="flex items-center gap-2">
                        <input
                          v-model.number="coutsConfig.coutsAccessoires.fixation.chevilles"
                          type="number"
                          step="0.01"
                          class="w-20 p-1 border border-gray-300 rounded text-xs text-center"
                        />
                        <span class="text-xs text-gray-500">€/pièce</span>
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-gray-600">Clips</span>
                      <div class="flex items-center gap-2">
                        <input
                          v-model.number="coutsConfig.coutsAccessoires.fixation.clips"
                          type="number"
                          step="0.01"
                          class="w-20 p-1 border border-gray-300 rounded text-xs text-center"
                        />
                        <span class="text-xs text-gray-500">€/pièce</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Protection -->
                <div>
                  <h4 class="text-sm font-semibold text-gray-700 mb-3">Protection</h4>
                  <div class="space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-gray-600">Film protection</span>
                      <div class="flex items-center gap-2">
                        <input
                          v-model.number="coutsConfig.coutsAccessoires.protection.filmProtection"
                          type="number"
                          step="0.01"
                          class="w-20 p-1 border border-gray-300 rounded text-xs text-center"
                        />
                        <span class="text-xs text-gray-500">€/m²</span>
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-gray-600">Emballage carton</span>
                      <div class="flex items-center gap-2">
                        <input
                          v-model.number="coutsConfig.coutsAccessoires.protection.emballageCarton"
                          type="number"
                          step="0.01"
                          class="w-20 p-1 border border-gray-300 rounded text-xs text-center"
                        />
                        <span class="text-xs text-gray-500">€/pièce</span>
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-gray-600">Film bulle</span>
                      <div class="flex items-center gap-2">
                        <input
                          v-model.number="coutsConfig.coutsAccessoires.protection.filmBulle"
                          type="number"
                          step="0.01"
                          class="w-20 p-1 border border-gray-300 rounded text-xs text-center"
                        />
                        <span class="text-xs text-gray-500">€/m²</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Indices de Coûts par Support -->
            <div class="mt-8 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-900">Indices de Complexité</h3>
                  <p class="text-xs text-gray-500">Facteurs de coût par type de support</p>
                </div>
              </div>
              
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div v-for="(indice, support) in coutsConfig.indicesCouts" :key="support" class="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-lg">
                  <span class="text-sm font-medium text-gray-700 capitalize">{{ support }}</span>
                  <div class="flex items-center gap-2">
                    <input
                      v-model.number="coutsConfig.indicesCouts[support]"
                      type="number"
                      step="0.1"
                      min="0.1"
                      max="3.0"
                      class="w-16 p-1 border border-gray-300 rounded text-xs text-center"
                    />
                    <span class="text-xs text-gray-500">×</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-6 flex gap-4">
              <button
                @click="saveCoutsConfig"
                class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                <PrintIcon type="save" size="sm" color="primary" />
                Sauvegarder les Coûts
              </button>
              <button
                @click="resetCoutsConfig"
                class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Réinitialiser
              </button>
            </div>
          </div>

          <!-- Configuration des Prix -->
          <div v-if="activeTab === 'prix'">
            <div class="mb-6">
              <h2 class="text-xl font-bold text-gray-900">Pricing Configuration</h2>
              <p class="text-sm text-gray-600">Set profit margins, discounts, and pricing rules</p>
            </div>
          
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Marges -->
              <div class="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-gray-900">Profit Margins</h3>
                    <p class="text-xs text-gray-500">Set minimum and maximum margins</p>
                  </div>
                </div>
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Minimum Margin (%)</label>
                    <input
                      v-model.number="prixConfig.margeMin"
                      type="number"
                      min="0"
                      max="100"
                      step="0.1"
                      class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Maximum Margin (%)</label>
                    <input
                      v-model.number="prixConfig.margeMax"
                      type="number"
                      min="0"
                      max="100"
                      step="0.1"
                      class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>
              </div>

              <!-- Remises Volume -->
              <div class="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-gray-900">Volume Discounts</h3>
                    <p class="text-xs text-gray-500">Configure quantity-based discounts</p>
                  </div>
                </div>
                  <div class="space-y-3">
                    <div
                      v-for="(remise, seuil) in prixConfig.remiseVolume"
                      :key="seuil"
                      class="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg"
                    >
                      <div class="flex items-center gap-2 min-w-0 flex-1">
                        <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span class="text-xs font-bold text-green-600">{{ seuil }}</span>
                        </div>
                        <span class="text-sm font-medium text-gray-700">units and above</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <input
                          v-model.number="prixConfig.remiseVolume[seuil]"
                          type="number"
                          min="0"
                          max="50"
                          step="0.1"
                          class="w-20 p-2 border border-gray-300 rounded-lg text-center focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                        <span class="text-sm font-medium text-gray-600">%</span>
                      </div>
                    </div>
                  </div>
            </div>

              <!-- Frais de port -->
              <div class="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-gray-900">Shipping Costs</h3>
                    <p class="text-xs text-gray-500">Configure delivery fees and free shipping threshold</p>
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div class="space-y-2">
                    <label class="block text-sm font-medium text-gray-700">Standard Shipping</label>
                    <div class="relative">
                      <input
                        v-model.number="prixConfig.fraisPort.standard"
                        type="number"
                        min="0"
                        class="w-full p-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <span class="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">€</span>
                    </div>
                  </div>
                  <div class="space-y-2">
                    <label class="block text-sm font-medium text-gray-700">Express Shipping</label>
                    <div class="relative">
                      <input
                        v-model.number="prixConfig.fraisPort.express"
                        type="number"
                        min="0"
                        class="w-full p-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <span class="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">€</span>
                    </div>
                  </div>
                  <div class="space-y-2">
                    <label class="block text-sm font-medium text-gray-700">Free Shipping Threshold</label>
                    <div class="relative">
                      <input
                        v-model.number="prixConfig.fraisPort.gratuit"
                        type="number"
                        min="0"
                        class="w-full p-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <span class="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">€</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-6">
                <button
                  @click="savePrixConfig"
                  class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
                >
                  <PrintIcon type="save" size="sm" color="primary" />
                  Save Configuration
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- Modal Catégorie -->
    <div v-if="showCategoryModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <h3 class="text-2xl font-bold text-gray-900 mb-6">
          {{ editingCategory ? 'Modifier la Catégorie' : 'Nouvelle Catégorie' }}
        </h3>
        
        <form @submit.prevent="saveCategory" class="space-y-4">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Nom</label>
            <input
              v-model="categoryForm.nom"
              type="text"
              required
              class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none"
            />
          </div>
          
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Description</label>
            <input
              v-model="categoryForm.description"
              type="text"
              required
              class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none"
            />
          </div>
          
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Icône</label>
            <select
              v-model="categoryForm.icon"
              required
              class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none"
            >
              <option value="category">Catégorie</option>
              <option value="panneau">Panneau</option>
              <option value="affiche">Affiche</option>
              <option value="bache">Bâche</option>
              <option value="kakemono">Kakémono</option>
              <option value="banniere">Bannière</option>
              <option value="vitrine">Vitrine</option>
              <option value="settings">Paramètres</option>
              <option value="ourlet">Façonnage</option>
              <option value="structure">Structure</option>
            </select>
          </div>
          
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Couleur</label>
            <select
              v-model="categoryForm.color"
              required
              class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none"
            >
              <option value="bg-blue-100 text-blue-600">Bleu</option>
              <option value="bg-green-100 text-green-600">Vert</option>
              <option value="bg-orange-100 text-orange-600">Orange</option>
              <option value="bg-purple-100 text-purple-600">Violet</option>
              <option value="bg-red-100 text-red-600">Rouge</option>
              <option value="bg-cyan-100 text-cyan-600">Cyan</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Ordre d'affichage</label>
            <input
              v-model.number="categoryForm.ordre"
              type="number"
              min="1"
              required
              class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none"
            />
          </div>

          <div class="flex gap-4 pt-4">
            <button
              type="submit"
              class="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <PrintIcon type="save" size="sm" color="primary" />
              {{ editingCategory ? 'Modifier' : 'Créer' }}
            </button>
            <button
              type="button"
              @click="closeCategoryModal"
              class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold transition-colors"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Modal Matière -->
    <div v-if="showMatiereModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <h3 class="text-2xl font-bold text-gray-900 mb-6">
          {{ editingMatiere ? 'Modifier la Matière' : 'Nouvelle Matière' }}
        </h3>
        
        <form @submit.prevent="saveMatiere" class="space-y-4">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Nom de la matière</label>
            <input
              v-model="matiereForm.nom"
              type="text"
              required
              class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none"
              placeholder="Ex: Vinyle adhésif"
            />
          </div>
          
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Description</label>
            <input
              v-model="matiereForm.description"
              type="text"
              required
              class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none"
              placeholder="Ex: Résistant aux intempéries"
            />
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Prix par m² (€)</label>
              <input
                v-model.number="matiereForm.prixParM2"
                type="number"
                min="0"
                step="0.1"
                required
                class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none"
              />
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Couleur</label>
              <div class="flex items-center gap-2">
                <input
                  v-model="matiereForm.couleur"
                  type="color"
                  class="w-12 h-12 border-2 border-gray-200 rounded-lg cursor-pointer"
                />
                <input
                  v-model="matiereForm.couleur"
                  type="text"
                  class="flex-1 p-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none"
                  placeholder="#80CBC4"
                />
              </div>
            </div>
          </div>

          <div class="flex gap-4 pt-4">
            <button
              type="submit"
              class="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <PrintIcon type="save" size="sm" color="primary" />
              {{ editingMatiere ? 'Modifier' : 'Créer' }}
            </button>
            <button
              type="button"
              @click="closeMatiereModal"
              class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold transition-colors"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Modal Support -->
    <div v-if="showSupportModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <h3 class="text-2xl font-bold text-gray-900 mb-6">
          {{ editingSupport ? 'Modifier le Support' : 'Nouveau Support' }}
        </h3>
        
        <form @submit.prevent="saveSupport" class="space-y-4">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Nom</label>
            <input
              v-model="supportForm.nom"
              type="text"
              required
              class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none"
            />
          </div>
          
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Description</label>
            <input
              v-model="supportForm.description"
              type="text"
              required
              class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none"
            />
          </div>
          
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Icône</label>
            <input
              v-model="supportForm.icon"
              type="text"
              required
              class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none"
            />
          </div>
          
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Couleur</label>
            <select
              v-model="supportForm.color"
              required
              class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none"
            >
              <option value="bg-blue-100 text-blue-600">Bleu</option>
              <option value="bg-green-100 text-green-600">Vert</option>
              <option value="bg-orange-100 text-orange-600">Orange</option>
              <option value="bg-purple-100 text-purple-600">Violet</option>
              <option value="bg-red-100 text-red-600">Rouge</option>
              <option value="bg-cyan-100 text-cyan-600">Cyan</option>
            </select>
          </div>

          <div class="flex gap-4 pt-4">
            <button
              type="submit"
              class="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-xl font-semibold transition-colors"
            >
              {{ editingSupport ? 'Modifier' : 'Créer' }}
            </button>
            <button
              type="button"
              @click="closeSupportModal"
              class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold transition-colors"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Modal Option -->
    <div v-if="showOptionModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4">
        <h3 class="text-2xl font-bold text-gray-900 mb-6">
          {{ editingOption ? 'Modifier l\'Option' : 'Nouvelle Option' }}
        </h3>
        
        <form @submit.prevent="saveOption" class="space-y-4">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Nom</label>
            <input
              v-model="optionForm.nom"
              type="text"
              required
              class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none"
            />
          </div>
          
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Description</label>
            <input
              v-model="optionForm.description"
              type="text"
              required
              class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none"
            />
          </div>
          
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Prix (€)</label>
            <input
              v-model.number="optionForm.prix"
              type="number"
              min="0"
              step="0.1"
              required
              class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none"
            />
          </div>
          
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Icône</label>
            <input
              v-model="optionForm.icon"
              type="text"
              required
              class="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-cyan-500 focus:outline-none"
            />
          </div>

          <div class="flex gap-4 pt-4">
            <button
              type="submit"
              class="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-xl font-semibold transition-colors"
            >
              {{ editingOption ? 'Modifier' : 'Créer' }}
            </button>
            <button
              type="button"
              @click="closeOptionModal"
              class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold transition-colors"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { usePrintStore } from '~/stores/print'
import PrintIcon from '~/components/PrintIcon.vue'

definePageMeta({
  middleware: 'admin-auth'
})

const printStore = usePrintStore()

// Onglets
const tabs = [
  { id: 'categories', label: 'Catégories', icon: 'category' },
  { id: 'supports', label: 'Supports', icon: 'panneau' },
  { id: 'adhesifs', label: 'Adhésifs', icon: 'vitrine' },
  { id: 'options', label: 'Options', icon: 'settings' },
  { id: 'faconnages', label: 'Façonnages', icon: 'ourlet' },
  { id: 'accessoires', label: 'Accessoires', icon: 'structure' },
  { id: 'couts', label: 'Coûts de Revient', icon: 'price' },
  { id: 'prix', label: 'Configuration Prix', icon: 'price' }
]

const activeTab = ref('categories')

// Configuration des prix
const prixConfig = reactive({
  margeMin: 30,
  margeMax: 80,
  remiseVolume: {
    10: 5,
    50: 10,
    100: 15,
    500: 20
  },
  fraisPort: {
    standard: 15,
    express: 25,
    gratuit: 200
  }
})

// Formulaire Adhésifs (admin)
const adhesifsForm = reactive({
  enabled: true,
  matieres: [],
  targetSupports: []
})

// Matières à afficher (à plat) pour la sélection adhésifs
const allMatieres = computed(() => {
  const list = []
  for (const support of printStore.supports) {
    for (const m of (support.matieres || [])) {
      list.push({ id: m.id, nom: m.nom, couleur: m.couleur, supportNom: support.nom, supportId: support.id, prixParM2: m.prixParM2 })
    }
  }
  return list
})

// Configuration des coûts
const coutsConfig = reactive({
  coutsGeneraux: {
    encreParM2: 2.50,
    mainOeuvreParM2: 1.80,
    electriciteParM2: 0.35,
    amortissementMachineParM2: 0.45,
    maintenanceParM2: 0.25,
    preparationParM2: 0.60,
    controleQualiteParM2: 0.30
  },
  coutsFaconnage: {
    mainOeuvreParHeure: 25,
    coutMachineParHeure: 15,
    tempsDecoupeParM2: 0.05,
    tempsOurletParM2: 0.08,
    tempsPerforationParM2: 0.03,
    tempsPliageParM2: 0.04,
    tempsCollageParM2: 0.06
  },
  coutsAccessoires: {
    structure: {
      piedKakemono: 8.50,
      piedBanniere: 12.00,
      structureVitrine: 45.00,
      crochets: 2.50,
      cordes: 1.80,
      velcro: 3.20
    },
    fixation: {
      adhesifDoubleFace: 0.15,
      vis: 0.25,
      chevilles: 0.35,
      clips: 0.45
    },
    protection: {
      filmProtection: 0.80,
      emballageCarton: 2.50,
      filmBulle: 0.30
    }
  },
  indicesCouts: {
    panneau: 1.0,
    affiche: 0.8,
    bache: 1.2,
    kakemono: 1.1,
    banniere: 1.3,
    vitrine: 1.5
  }
})

// Modals
const showCategoryModal = ref(false)
const showMatiereModal = ref(false)
const showSupportModal = ref(false)
const showOptionModal = ref(false)
const editingCategory = ref(null)
const editingMatiere = ref(null)
const editingSupport = ref(null)
const editingOption = ref(null)
const currentSupportId = ref(null)

const supportForm = reactive({
  nom: '',
  description: '',
  icon: '',
  color: 'bg-blue-100 text-blue-600'
})

const categoryForm = reactive({
  nom: '',
  description: '',
  icon: 'category',
  color: 'bg-blue-100 text-blue-600',
  ordre: 1
})

const matiereForm = reactive({
  nom: '',
  description: '',
  prixParM2: 0,
  couleur: '#80CBC4'
})

const optionForm = reactive({
  nom: '',
  description: '',
  prix: 0,
  icon: 'settings'
})

// Création rapide d'un adhésif
const newAdhesif = reactive({
  supportId: '',
  nom: '',
  description: '',
  prixParM2: 0,
  couleur: '#80CBC4',
  addToConfig: true
})

// Actions Matière
const openMatiereModal = (supportId) => {
  currentSupportId.value = supportId
  editingMatiere.value = null
  matiereForm.nom = ''
  matiereForm.description = ''
  matiereForm.prixParM2 = 0
  matiereForm.couleur = '#80CBC4'
  showMatiereModal.value = true
}

const closeMatiereModal = () => {
  showMatiereModal.value = false
  editingMatiere.value = null
  currentSupportId.value = null
}

const saveMatiere = () => {
  const matiere = {
    id: editingMatiere.value?.id || Date.now().toString(),
    nom: matiereForm.nom,
    description: matiereForm.description,
    prixParM2: matiereForm.prixParM2,
    couleur: matiereForm.couleur
  }
  
  if (editingMatiere.value) {
    printStore.updateMatiere(currentSupportId.value, matiere.id, matiere)
  } else {
    printStore.addMatiere(currentSupportId.value, matiere)
  }
  
  closeMatiereModal()
}

const editMatiere = (supportId, matiere) => {
  currentSupportId.value = supportId
  editingMatiere.value = matiere
  matiereForm.nom = matiere.nom
  matiereForm.description = matiere.description
  matiereForm.prixParM2 = matiere.prixParM2
  matiereForm.couleur = matiere.couleur
  showMatiereModal.value = true
}

const deleteMatiere = (supportId, matiereId) => {
  if (confirm('Êtes-vous sûr de vouloir supprimer cette matière ?')) {
    printStore.removeMatiere(supportId, matiereId)
  }
}

// Actions Catégorie
const openCategoryModal = () => {
  editingCategory.value = null
  categoryForm.nom = ''
  categoryForm.description = ''
  categoryForm.icon = 'category'
  categoryForm.color = 'bg-blue-100 text-blue-600'
  categoryForm.ordre = printStore.categories.length + 1
  showCategoryModal.value = true
}

const closeCategoryModal = () => {
  showCategoryModal.value = false
  editingCategory.value = null
}

const saveCategory = () => {
  const category = {
    id: editingCategory.value?.id || Date.now().toString(),
    nom: categoryForm.nom,
    description: categoryForm.description,
    icon: categoryForm.icon,
    color: categoryForm.color,
    ordre: categoryForm.ordre
  }
  
  if (editingCategory.value) {
    printStore.updateCategory(category)
  } else {
    printStore.addCategory(category)
  }
  
  closeCategoryModal()
}

const editCategory = (category) => {
  editingCategory.value = category
  categoryForm.nom = category.nom
  categoryForm.description = category.description
  categoryForm.icon = category.icon
  categoryForm.color = category.color
  categoryForm.ordre = category.ordre
  showCategoryModal.value = true
}

const deleteCategory = (categoryId) => {
  if (confirm('Êtes-vous sûr de vouloir supprimer cette catégorie ?')) {
    printStore.removeCategory(categoryId)
  }
}

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

// Fonction pour mettre à jour le prix d'une matière
const updateSupportPrix = (supportId, matiereId, nouveauPrix) => {
  const support = printStore.supports.find(s => s.id === supportId)
  if (support) {
    const matiere = support.matieres.find(m => m.id === matiereId)
    if (matiere) {
      matiere.prixParM2 = nouveauPrix
      printStore.saveToLocalStorage()
    }
  }
}

// Actions Support
const openSupportModal = () => {
  editingSupport.value = null
  supportForm.nom = ''
  supportForm.description = ''
  supportForm.icon = ''
  supportForm.color = 'bg-blue-100 text-blue-600'
  showSupportModal.value = true
}

const closeSupportModal = () => {
  showSupportModal.value = false
  editingSupport.value = null
}

const saveSupport = () => {
  const support = {
    id: editingSupport.value?.id || Date.now().toString(),
    nom: supportForm.nom,
    description: supportForm.description,
    icon: supportForm.icon,
    color: supportForm.color,
    matieres: editingSupport.value?.matieres || []
  }
  
  if (editingSupport.value) {
    // Modifier
    const index = printStore.supports.findIndex(s => s.id === support.id)
    printStore.supports[index] = support
  } else {
    // Ajouter
    printStore.addSupport(support)
  }
  
  closeSupportModal()
}

const editSupport = (support) => {
  editingSupport.value = support
  supportForm.nom = support.nom
  supportForm.description = support.description
  supportForm.icon = support.icon
  supportForm.color = support.color
  showSupportModal.value = true
}

const deleteSupport = (supportId) => {
  if (confirm('Êtes-vous sûr de vouloir supprimer ce support ?')) {
    printStore.removeSupport(supportId)
  }
}

// Actions Option
const openOptionModal = () => {
  editingOption.value = null
  optionForm.nom = ''
  optionForm.description = ''
  optionForm.prix = 0
  optionForm.icon = ''
  showOptionModal.value = true
}

const closeOptionModal = () => {
  showOptionModal.value = false
  editingOption.value = null
}

const saveOption = () => {
  const option = {
    id: editingOption.value?.id || Date.now().toString(),
    nom: optionForm.nom,
    description: optionForm.description,
    prix: optionForm.prix,
    icon: optionForm.icon,
    categorie: 'general'
  }
  
  if (editingOption.value) {
    // Modifier
    const index = printStore.options.findIndex(o => o.id === option.id)
    printStore.options[index] = option
  } else {
    // Ajouter
    printStore.addOption(option)
  }
  
  closeOptionModal()
}

const editOption = (option) => {
  editingOption.value = option
  optionForm.nom = option.nom
  optionForm.description = option.description
  optionForm.prix = option.prix
  optionForm.icon = option.icon
  showOptionModal.value = true
}

const deleteOption = (optionId) => {
  if (confirm('Êtes-vous sûr de vouloir supprimer cette option ?')) {
    printStore.removeOption(optionId)
  }
}

const createAdhesif = () => {
  if (!newAdhesif.supportId || !newAdhesif.nom) {
    alert('Sélectionnez un support et renseignez un nom.')
    return
  }
  const matiere = {
    id: Date.now().toString(),
    nom: newAdhesif.nom,
    description: newAdhesif.description || 'Adhésif',
    prixParM2: newAdhesif.prixParM2 || 0,
    couleur: newAdhesif.couleur || '#80CBC4'
  }
  printStore.addMatiere(newAdhesif.supportId, matiere)
  if (newAdhesif.addToConfig) {
    if (!adhesifsForm.matieres.includes(matiere.id)) adhesifsForm.matieres.push(matiere.id)
    if (!adhesifsForm.targetSupports.includes(newAdhesif.supportId)) adhesifsForm.targetSupports.push(newAdhesif.supportId)
  }
  // Reset formulaire
  newAdhesif.nom = ''
  newAdhesif.description = ''
  newAdhesif.prixParM2 = 0
}

// Actions pour les autres éléments (à implémenter de manière similaire)
const openFaconnageModal = () => {
  // À implémenter
}

const editFaconnage = (faconnage) => {
  // À implémenter
}

const deleteFaconnage = (faconnageId) => {
  if (confirm('Êtes-vous sûr de vouloir supprimer ce façonnage ?')) {
    printStore.removeFaconnage(faconnageId)
  }
}

const openAccessoireModal = () => {
  // À implémenter
}

const editAccessoire = (accessoire) => {
  // À implémenter
}

const deleteAccessoire = (accessoireId) => {
  if (confirm('Êtes-vous sûr de vouloir supprimer cet accessoire ?')) {
    printStore.removeAccessoire(accessoireId)
  }
}

const savePrixConfig = () => {
  printStore.updatePrixConfig(prixConfig)
  alert('Configuration des prix sauvegardée !')
}

const saveAdhesifs = () => {
  printStore.updateAdhesifsConfig({
    enabled: adhesifsForm.enabled,
    matieres: [...adhesifsForm.matieres],
    targetSupports: [...adhesifsForm.targetSupports]
  })
  alert('Configuration des adhésifs sauvegardée !')
}

// Actions pour les coûts
const saveCoutsConfig = () => {
  printStore.updateCoutsConfig(coutsConfig)
  alert('Configuration des coûts sauvegardée !')
}

const resetCoutsConfig = () => {
  if (confirm('Êtes-vous sûr de vouloir réinitialiser tous les coûts aux valeurs par défaut ?')) {
    Object.assign(coutsConfig, printStore.coutsConfig)
  }
}

// Charger les données au montage
onMounted(() => {
  printStore.loadFromLocalStorage()
  // Charger la configuration des prix
  Object.assign(prixConfig, printStore.prixConfig)
  // Charger la configuration des coûts
  Object.assign(coutsConfig, printStore.coutsConfig)
  // Charger la configuration adhésifs
  const adh = printStore.adhesifsConfig || { enabled: false, matieres: [], targetSupports: [] }
  adhesifsForm.enabled = !!adh.enabled
  adhesifsForm.matieres = [...(adh.matieres || [])]
  adhesifsForm.targetSupports = [...(adh.targetSupports || [])]
})
</script>
