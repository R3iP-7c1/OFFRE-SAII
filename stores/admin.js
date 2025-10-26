import { defineStore } from 'pinia'

export const useAdminStore = defineStore('admin', {
  state: () => ({
    isAuthenticated: false,
    user: null,
    // Configuration Kit Communication
    kitCommunication: {
      valeur1_49: 257,  // Valeur pour 1-49 licences
      valeur50plus: 360, // Valeur pour 50+ licences
      titre: 'Kit de Communication Premium',
      description: 'PLV, goodies, signalétiques, imprimerie professionnelle',
      images: [
        '/kit-communication.jpg'
      ],
      details: [
        { titre: 'PLV Sur Mesure', description: 'Totems, kakémonos, stop-rayons, présentoirs', visible: true },
        { titre: 'Signalétique Magasin', description: 'Panneaux, fléchage, étiquettes prix', visible: true },
        { titre: 'Goodies Personnalisés', description: 'Sacs, stylos, calendriers, mugs', visible: true },
        { titre: 'Imprimerie HD', description: 'Tous formats, qualité professionnelle', visible: true }
      ]
    },
    // Configuration Kit Digital/Écran
    kitDigital: {
      valeur50plus: 360, // Valeur pour 50+ licences (uniquement)
      titre: 'Écran Samsung 43" + Player Pro',
      description: 'Solution d\'affichage digital professionnelle',
      images: [
        '/samsung-screen.jpg'
      ],
      details: [
        { titre: 'Écran Samsung 43" 4K', description: 'Écran professionnel haute résolution LED', visible: true },
        { titre: 'Player Pro intégré', description: 'Box multimédia avec gestion à distance', visible: true },
        { titre: 'Planification intelligente', description: 'Programmez par plages horaires et événements', visible: true },
        { titre: 'Analytics', description: 'Suivi des performances en temps réel', visible: true }
      ]
    },
    // Configuration Prix et Paliers
    prixConfig: {
      prixBase: 732,
      paliers: [
        { min: 1, max: 5, remise: 0, nom: 'Standard' },
        { min: 6, max: 9, remise: 5, nom: 'Starter' },
        { min: 10, max: 24, remise: 10, nom: 'Bronze' },
        { min: 25, max: 49, remise: 15, nom: 'Silver' },
        { min: 50, max: 99, remise: 18, nom: 'Gold' },
        { min: 100, max: 150, remise: 20, nom: 'Premium' }
      ]
    },
    // Budget 2025
    budget2025: {
      employes: {
        libelle: 'Employés (50 licences)',
        montant: 26338
      },
      campagne: {
        libelle: 'Campagne promo mars',
        montant: 4000
      }
    }
  }),
  
  getters: {
    totalBudget2025: (state) => {
      return state.budget2025.employes.montant + state.budget2025.campagne.montant
    },
    
    getPalierByLicences: (state) => (nombreLicences) => {
      return state.prixConfig.paliers.find(p => nombreLicences >= p.min && nombreLicences <= p.max)
    }
  },
  
  actions: {
    login(email, password) {
      // Authentification simple (à remplacer par une vraie API)
      if (email === 'jules@sagaxp.fr' && password === 'Jules321') {
        this.isAuthenticated = true
        this.user = { email, name: 'Jules' }
        if (process.client) {
          localStorage.setItem('admin_token', 'authenticated')
        }
        return true
      }
      return false
    },
    
    logout() {
      this.isAuthenticated = false
      this.user = null
      if (process.client) {
        localStorage.removeItem('admin_token')
      }
    },
    
    checkAuth() {
      if (process.client) {
        const token = localStorage.getItem('admin_token')
        if (token === 'authenticated') {
          this.isAuthenticated = true
          this.user = { email: 'jules@sagaxp.fr', name: 'Jules' }
        }
      }
    },
    
    // Mise à jour Kit Communication
    updateKitCommunication(data) {
      this.kitCommunication = { ...this.kitCommunication, ...data }
      // Sauvegarder dans localStorage
      if (process.client) {
        localStorage.setItem('saii_kit_communication', JSON.stringify(this.kitCommunication))
      }
    },
    
    // Mise à jour Kit Digital
    updateKitDigital(data) {
      this.kitDigital = { ...this.kitDigital, ...data }
      // Sauvegarder dans localStorage
      if (process.client) {
        localStorage.setItem('saii_kit_digital', JSON.stringify(this.kitDigital))
      }
    },
    
    // Mise à jour Prix et Paliers
    updatePrixConfig(data) {
      this.prixConfig = { ...this.prixConfig, ...data }
      // Sauvegarder dans localStorage
      if (process.client) {
        localStorage.setItem('saii_prix_config', JSON.stringify(this.prixConfig))
      }
    },
    
    // Mise à jour Budget 2025
    updateBudget2025(data) {
      this.budget2025 = { ...this.budget2025, ...data }
      // Sauvegarder dans localStorage
      if (process.client) {
        localStorage.setItem('saii_budget_2025', JSON.stringify(this.budget2025))
      }
    },
    
    // Charger les données depuis localStorage
    loadFromLocalStorage() {
      if (process.client) {
        // Charger Prix Config
        const prixConfig = localStorage.getItem('saii_prix_config')
        if (prixConfig) {
          this.prixConfig = JSON.parse(prixConfig)
        }
        
        // Charger Kit Communication
        const kitCom = localStorage.getItem('saii_kit_communication')
        if (kitCom) {
          this.kitCommunication = JSON.parse(kitCom)
        }
        
        // Charger Kit Digital
        const kitDig = localStorage.getItem('saii_kit_digital')
        if (kitDig) {
          this.kitDigital = JSON.parse(kitDig)
        }
        
        // Charger Budget 2025
        const budget = localStorage.getItem('saii_budget_2025')
        if (budget) {
          this.budget2025 = JSON.parse(budget)
        }
      }
    },
    
    // Ajouter une image au carrousel
    addImageToKit(type, imageUrl) {
      if (type === 'communication') {
        this.kitCommunication.images.push(imageUrl)
      } else if (type === 'digital') {
        this.kitDigital.images.push(imageUrl)
      }
    },
    
    // Supprimer une image du carrousel
    removeImageFromKit(type, index) {
      if (type === 'communication') {
        this.kitCommunication.images.splice(index, 1)
      } else if (type === 'digital') {
        this.kitDigital.images.splice(index, 1)
      }
    }
  }
})

