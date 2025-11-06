import { defineStore } from 'pinia'

export const usePrintStore = defineStore('print', {
  state: () => ({
    // Catégories de produits
    categories: [
      {
        id: 'supports',
        nom: 'Supports',
        icon: '📄',
        color: 'bg-blue-100 text-blue-600',
        description: 'Types de supports d\'impression',
        ordre: 1
      },
      {
        id: 'options',
        nom: 'Options',
        icon: '⚙️',
        color: 'bg-purple-100 text-purple-600',
        description: 'Options d\'impression et finitions',
        ordre: 2
      },
      {
        id: 'faconnages',
        nom: 'Façonnages',
        icon: '✂️',
        color: 'bg-green-100 text-green-600',
        description: 'Travaux de façonnage',
        ordre: 3
      },
      {
        id: 'accessoires',
        nom: 'Accessoires',
        icon: '🔧',
        color: 'bg-orange-100 text-orange-600',
        description: 'Accessoires et équipements',
        ordre: 4
      }
    ],
    
    // Types de supports avec matières et prix
    supports: [
      {
        id: 'panneau',
        nom: 'Panneau',
        icon: '🪧',
        color: 'bg-blue-100 text-blue-600',
        description: 'Panneaux publicitaires rigides',
        matieres: [
          { id: 'pvc-3mm', nom: 'PVC 3mm', description: 'Rigide, résistant aux intempéries', prixParM2: 25, couleur: '#E3F2FD' },
          { id: 'pvc-5mm', nom: 'PVC 5mm', description: 'Très rigide, usage extérieur', prixParM2: 35, couleur: '#BBDEFB' },
          { id: 'aluminium', nom: 'Aluminium', description: 'Ultra résistant, usage intensif', prixParM2: 45, couleur: '#90CAF9' },
          { id: 'composite', nom: 'Composite', description: 'Écologique, recyclable', prixParM2: 30, couleur: '#64B5F6' }
        ]
      },
      {
        id: 'affiche',
        nom: 'Affiche',
        icon: '📰',
        color: 'bg-green-100 text-green-600',
        description: 'Affiches et posters',
        matieres: [
          { id: 'papier-150g', nom: 'Papier 150g', description: 'Standard, usage intérieur', prixParM2: 8, couleur: '#E8F5E8' },
          { id: 'papier-300g', nom: 'Papier 300g', description: 'Épais, qualité premium', prixParM2: 12, couleur: '#C8E6C9' },
          { id: 'papier-400g', nom: 'Papier 400g', description: 'Très épais, très résistant', prixParM2: 16, couleur: '#A5D6A7' },
          { id: 'autocollant', nom: 'Autocollant', description: 'Adhésif, repositionnable', prixParM2: 20, couleur: '#81C784' }
        ]
      },
      {
        id: 'bache',
        nom: 'Bâche',
        icon: '🏕️',
        color: 'bg-orange-100 text-orange-600',
        description: 'Bâches et toiles',
        matieres: [
          { id: 'pvc-500g', nom: 'PVC 500g', description: 'Standard, usage extérieur', prixParM2: 15, couleur: '#FFF3E0' },
          { id: 'pvc-650g', nom: 'PVC 650g', description: 'Renforcé, très résistant', prixParM2: 20, couleur: '#FFE0B2' },
          { id: 'mesh', nom: 'Mesh', description: 'Aéré, résistant au vent', prixParM2: 18, couleur: '#FFCC02' },
          { id: 'backlit', nom: 'Backlit', description: 'Rétro-éclairé, effet premium', prixParM2: 35, couleur: '#FFB74D' }
        ]
      },
      {
        id: 'kakemono',
        nom: 'Kakémono',
        icon: '🎯',
        color: 'bg-purple-100 text-purple-600',
        description: 'Kakémonos et roll-up',
        matieres: [
          { id: 'tissu', nom: 'Tissu', description: 'Léger, pliable, transportable', prixParM2: 25, couleur: '#F3E5F5' },
          { id: 'pvc-flex', nom: 'PVC Flex', description: 'Rigide, très résistant', prixParM2: 30, couleur: '#E1BEE7' },
          { id: 'mesh-kakemono', nom: 'Mesh', description: 'Aéré, usage extérieur', prixParM2: 28, couleur: '#CE93D8' }
        ]
      },
      {
        id: 'banniere',
        nom: 'Bannière',
        icon: '🏴',
        color: 'bg-red-100 text-red-600',
        description: 'Bannières et banderoles',
        matieres: [
          { id: 'pvc-banniere', nom: 'PVC', description: 'Résistant aux intempéries', prixParM2: 18, couleur: '#FFEBEE' },
          { id: 'tissu-banniere', nom: 'Tissu', description: 'Léger, pliable', prixParM2: 22, couleur: '#FFCDD2' },
          { id: 'mesh-banniere', nom: 'Mesh', description: 'Aéré, résistant au vent', prixParM2: 20, couleur: '#EF9A9A' }
        ]
      },
      {
        id: 'vitrine',
        nom: 'Vitrine',
        icon: '🪟',
        color: 'bg-cyan-100 text-cyan-600',
        description: 'Impression vitrine',
        matieres: [
          { id: 'adhesif-vitrine', nom: 'Adhésif vitrine', description: 'Transparent, repositionnable', prixParM2: 30, couleur: '#E0F2F1' },
          { id: 'perfore', nom: 'Perforé', description: 'Semi-transparent, vue préservée', prixParM2: 25, couleur: '#B2DFDB' },
          { id: 'opaque', nom: 'Opaque', description: 'Complètement opaque', prixParM2: 28, couleur: '#80CBC4' }
        ]
      }
    ],
    
    // Options d'impression
    options: [
      {
        id: 'laminage-matte',
        nom: 'Laminage mat',
        description: 'Protection et finition mate',
        prix: 5,
        icon: '🛡️',
        categorie: 'finition',
        editable: true
      },
      {
        id: 'laminage-brillant',
        nom: 'Laminage brillant',
        description: 'Protection et finition brillante',
        prix: 5,
        icon: '✨',
        categorie: 'finition'
      },
      {
        id: 'vernis-selectif',
        nom: 'Vernis sélectif',
        description: 'Mise en relief de certains éléments',
        prix: 8,
        icon: '🎨',
        categorie: 'finition'
      },
      {
        id: 'decoupe-contour',
        nom: 'Découpe contour',
        description: 'Découpe selon forme personnalisée',
        prix: 10,
        icon: '✂️',
        categorie: 'decoupe'
      },
      {
        id: 'perforation',
        nom: 'Perforation',
        description: 'Perforations pour fixation',
        prix: 3,
        icon: '🔘',
        categorie: 'fixation'
      },
      {
        id: 'renfort-cornieres',
        nom: 'Renforts d\'angles',
        description: 'Protection des coins',
        prix: 4,
        icon: '🔲',
        categorie: 'protection'
      },
      {
        id: 'impression-metallique',
        nom: 'Impression métallique',
        description: 'Effet doré ou argenté',
        prix: 12,
        icon: '🥇',
        categorie: 'finition'
      },
      {
        id: 'relief-thermique',
        nom: 'Relief thermique',
        description: 'Effet de relief par chaleur',
        prix: 15,
        icon: '🔥',
        categorie: 'finition'
      }
    ],
    
    // Façonnages
    faconnages: [
      {
        id: 'ourlet-simple',
        nom: 'Ourlet simple',
        description: 'Ourlet de 2cm sur tous les côtés',
        prix: 2,
        icon: '📏',
        categorie: 'ourlet'
      },
      {
        id: 'ourlet-renforce',
        nom: 'Ourlet renforcé',
        description: 'Ourlet de 3cm avec renfort',
        prix: 4,
        icon: '💪',
        categorie: 'ourlet'
      },
      {
        id: 'oeillets',
        nom: 'Œillets',
        description: 'Œillets métalliques pour fixation',
        prix: 6,
        icon: '⭕',
        categorie: 'fixation'
      },
      {
        id: 'tunnel',
        nom: 'Tunnel',
        description: 'Tunnel pour barre de suspension',
        prix: 8,
        icon: '🕳️',
        categorie: 'suspension'
      },
      {
        id: 'pochette',
        nom: 'Pochette',
        description: 'Pochette de transport',
        prix: 5,
        icon: '📦',
        categorie: 'transport'
      },
      {
        id: 'sangle',
        nom: 'Sangle de transport',
        description: 'Sangle pour faciliter le transport',
        prix: 3,
        icon: '🎒',
        categorie: 'transport'
      },
      {
        id: 'coins-renforces',
        nom: 'Coins renforcés',
        description: 'Renforcement des angles',
        prix: 7,
        icon: '🔲',
        categorie: 'protection'
      },
      {
        id: 'fermeture-eclair',
        nom: 'Fermeture éclair',
        description: 'Fermeture zippée pour bâches',
        prix: 12,
        icon: '🔗',
        categorie: 'fermeture'
      }
    ],
    
    // Accessoires
    accessoires: [
      {
        id: 'structure-portable',
        nom: 'Structure portable',
        description: 'Structure pliable pour kakémono',
        prix: 25,
        icon: '🏗️',
        categorie: 'structure'
      },
      {
        id: 'barre-suspension',
        nom: 'Barre de suspension',
        description: 'Barre métallique pour bâches',
        prix: 15,
        icon: '📏',
        categorie: 'suspension'
      },
      {
        id: 'systeme-fixation',
        nom: 'Système de fixation',
        description: 'Kit de fixation complet',
        prix: 20,
        icon: '🔧',
        categorie: 'fixation'
      },
      {
        id: 'etui-transport',
        nom: 'Étui de transport',
        description: 'Étui rigide pour protection',
        prix: 30,
        icon: '💼',
        categorie: 'transport'
      },
      {
        id: 'support-sol',
        nom: 'Support au sol',
        description: 'Support stable pour panneaux',
        prix: 40,
        icon: '🦶',
        categorie: 'support'
      },
      {
        id: 'eclairage-led',
        nom: 'Éclairage LED',
        description: 'Éclairage LED pour backlit',
        prix: 50,
        icon: '💡',
        categorie: 'eclairage'
      },
      {
        id: 'ventouse',
        nom: 'Ventouses',
        description: 'Ventouses pour fixation vitrine',
        prix: 8,
        icon: '🧲',
        categorie: 'fixation'
      },
      {
        id: 'corde-tension',
        nom: 'Corde de tension',
        description: 'Corde pour tension des bâches',
        prix: 12,
        icon: '🪢',
        categorie: 'tension'
      }
    ],
    
    // Configuration Adhésifs (sélection de matières configurées côté back)
    adhesifsConfig: {
      enabled: true,
      // IDs de matières utilisables comme adhésifs (doivent exister dans supports)
      matieres: ['opaque'],
      // Supports cibles sur lesquels on peut cumuler l'adhésif
      targetSupports: ['panneau']
    },
    
    // Configuration des prix
    prixConfig: {
      margeMin: 0.3, // 30% de marge minimum
      margeMax: 0.8, // 80% de marge maximum
      remiseVolume: {
        10: 0.05,    // 5% de remise à partir de 10 unités
        50: 0.10,    // 10% de remise à partir de 50 unités
        100: 0.15,   // 15% de remise à partir de 100 unités
        500: 0.20    // 20% de remise à partir de 500 unités
      },
      fraisPort: {
        standard: 15,  // Frais de port standard
        express: 25,   // Frais de port express
        gratuit: 200   // Seuil pour livraison gratuite
      }
    },

    // Configuration des coûts de revient
    coutsConfig: {
      // Coûts généraux d'impression
      coutsGeneraux: {
        encreParM2: 2.50, // €/m²
        mainOeuvreParM2: 1.80, // €/m²
        electriciteParM2: 0.35, // €/m²
        amortissementMachineParM2: 0.45, // €/m²
        maintenanceParM2: 0.25, // €/m²
        preparationParM2: 0.60, // €/m²
        controleQualiteParM2: 0.30 // €/m²
      },
      
      // Coûts de façonnage
      coutsFaconnage: {
        mainOeuvreParHeure: 25, // €/h
        coutMachineParHeure: 15, // €/h
        tempsDecoupeParM2: 0.05, // h/m²
        tempsOurletParM2: 0.08, // h/m²
        tempsPerforationParM2: 0.03, // h/m²
        tempsPliageParM2: 0.04, // h/m²
        tempsCollageParM2: 0.06 // h/m²
      },
      
      // Coûts des accessoires (valeurs par défaut du métier)
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
          adhesifDoubleFace: 0.15, // €/m
          vis: 0.25, // €/pièce
          chevilles: 0.35, // €/pièce
          clips: 0.45 // €/pièce
        },
        protection: {
          filmProtection: 0.80, // €/m²
          emballageCarton: 2.50, // €/pièce
          filmBulle: 0.30 // €/m²
        }
      },
      
      // Indices de coûts par type de support
      indicesCouts: {
        panneau: 1.0, // Base
        affiche: 0.8, // Plus simple
        bache: 1.2, // Plus complexe
        kakemono: 1.1,
        banniere: 1.3,
        vitrine: 1.5 // Le plus complexe
      }
    },
    
    // Délais de production
    delais: {
      standard: '2-3 jours ouvrés',
      express: '24-48h',
      urgent: 'Même jour (supplément +50%)'
    }
  }),
  
  getters: {
    getSupportById: (state) => (id) => {
      return state.supports.find(support => support.id === id)
    },
    
    getMatiereById: (state) => (supportId, matiereId) => {
      const support = state.supports.find(s => s.id === supportId)
      return support?.matieres.find(m => m.id === matiereId)
    },
    
    getOptionById: (state) => (id) => {
      return state.options.find(option => option.id === id)
    },
    
    getFaconnageById: (state) => (id) => {
      return state.faconnages.find(faconnage => faconnage.id === id)
    },
    
    getAccessoireById: (state) => (id) => {
      return state.accessoires.find(accessoire => accessoire.id === id)
    },
    
    // Liste aplatie des matières adhésives disponibles selon la config
    getAdhesifMatieres: (state) => () => {
      if (!state.adhesifsConfig?.enabled) return []
      const ids = new Set(state.adhesifsConfig.matieres || [])
      const result = []
      state.supports.forEach((support) => {
        (support.matieres || []).forEach((m) => {
          if (ids.has(m.id)) {
            result.push({ support, matiere: m })
          }
        })
      })
      return result
    },
    getAdhesifById: (state) => (matiereId) => {
      for (const support of state.supports) {
        const m = (support.matieres || []).find(mm => mm.id === matiereId)
        if (m) return { support, matiere: m }
      }
      return null
    },
    
    // Calcul de remise selon la quantité
    getRemiseVolume: (state) => (quantite) => {
      const seuils = Object.keys(state.prixConfig.remiseVolume)
        .map(Number)
        .sort((a, b) => b - a)
      
      for (const seuil of seuils) {
        if (quantite >= seuil) {
          return state.prixConfig.remiseVolume[seuil]
        }
      }
      return 0
    },
    
    // Calcul des frais de port
    getFraisPort: (state) => (prixTotal) => {
      if (prixTotal >= state.prixConfig.fraisPort.gratuit) {
        return 0
      }
      return state.prixConfig.fraisPort.standard
    },
    
    // Délai selon la quantité
    getDelaiLivraison: (state) => (quantite) => {
      if (quantite <= 10) return state.delais.standard
      if (quantite <= 50) return '3-5 jours ouvrés'
      return '5-7 jours ouvrés'
    }
  },
  
  actions: {
    // Mise à jour config adhésifs
    updateAdhesifsConfig(newConfig) {
      this.adhesifsConfig = { ...this.adhesifsConfig, ...newConfig }
      this.saveToLocalStorage()
    },
    // Gestion des matières
    addMatiere(supportId, matiere) {
      const support = this.supports.find(s => s.id === supportId)
      if (support) {
        support.matieres.push(matiere)
        this.saveToLocalStorage()
      }
    },
    
    updateMatiere(supportId, matiereId, matiere) {
      const support = this.supports.find(s => s.id === supportId)
      if (support) {
        const index = support.matieres.findIndex(m => m.id === matiereId)
        if (index !== -1) {
          support.matieres[index] = matiere
          this.saveToLocalStorage()
        }
      }
    },
    
    removeMatiere(supportId, matiereId) {
      const support = this.supports.find(s => s.id === supportId)
      if (support) {
        support.matieres = support.matieres.filter(m => m.id !== matiereId)
        this.saveToLocalStorage()
      }
    },
    
    // Gestion des catégories
    addCategory(category) {
      this.categories.push(category)
      this.saveToLocalStorage()
    },
    
    updateCategory(category) {
      const index = this.categories.findIndex(c => c.id === category.id)
      if (index !== -1) {
        this.categories[index] = category
        this.saveToLocalStorage()
      }
    },
    
    removeCategory(categoryId) {
      this.categories = this.categories.filter(c => c.id !== categoryId)
      this.saveToLocalStorage()
    },
    
    // Mise à jour des supports
    updateSupports(supports) {
      this.supports = supports
      this.saveToLocalStorage()
    },
    
    // Mise à jour des options
    updateOptions(options) {
      this.options = options
      this.saveToLocalStorage()
    },
    
    // Mise à jour des façonnages
    updateFaconnages(faconnages) {
      this.faconnages = faconnages
      this.saveToLocalStorage()
    },
    
    // Mise à jour des accessoires
    updateAccessoires(accessoires) {
      this.accessoires = accessoires
      this.saveToLocalStorage()
    },
    
    // Mise à jour de la configuration des prix
    updatePrixConfig(config) {
      this.prixConfig = { ...this.prixConfig, ...config }
      this.saveToLocalStorage()
    },
    
    // Ajouter un nouveau support
    addSupport(support) {
      this.supports.push(support)
      this.saveToLocalStorage()
    },
    
    // Supprimer un support
    removeSupport(supportId) {
      this.supports = this.supports.filter(s => s.id !== supportId)
      this.saveToLocalStorage()
    },
    
    // Ajouter une nouvelle option
    addOption(option) {
      this.options.push(option)
      this.saveToLocalStorage()
    },
    
    // Supprimer une option
    removeOption(optionId) {
      this.options = this.options.filter(o => o.id !== optionId)
      this.saveToLocalStorage()
    },
    
    // Ajouter un nouveau façonnage
    addFaconnage(faconnage) {
      this.faconnages.push(faconnage)
      this.saveToLocalStorage()
    },
    
    // Supprimer un façonnage
    removeFaconnage(faconnageId) {
      this.faconnages = this.faconnages.filter(f => f.id !== faconnageId)
      this.saveToLocalStorage()
    },
    
    // Ajouter un nouvel accessoire
    addAccessoire(accessoire) {
      this.accessoires.push(accessoire)
      this.saveToLocalStorage()
    },
    
    // Supprimer un accessoire
    removeAccessoire(accessoireId) {
      this.accessoires = this.accessoires.filter(a => a.id !== accessoireId)
      this.saveToLocalStorage()
    },

    // Actions pour la configuration des coûts
    updateCoutsConfig(newConfig) {
      this.coutsConfig = { ...this.coutsConfig, ...newConfig }
      this.saveToLocalStorage()
    },

    // Calcul du coût de revient d'une matière
    calculerCoutRevientMatiere(supportId, matiereId, surfaceM2) {
      const support = this.supports.find(s => s.id === supportId)
      const matiere = support?.matieres.find(m => m.id === matiereId)

      if (!matiere || !support) return 0

      const coutsGeneraux = this.coutsConfig.coutsGeneraux
      const indiceSupport = this.coutsConfig.indicesCouts[supportId] || 1.0

      // Coût de la matière
      const coutMatiere = matiere.prixParM2 * surfaceM2

      // Coûts d'impression
      const coutImpression = (
        coutsGeneraux.encreParM2 +
        coutsGeneraux.mainOeuvreParM2 +
        coutsGeneraux.electriciteParM2 +
        coutsGeneraux.amortissementMachineParM2 +
        coutsGeneraux.maintenanceParM2 +
        coutsGeneraux.preparationParM2 +
        coutsGeneraux.controleQualiteParM2
      ) * surfaceM2 * indiceSupport

      return coutMatiere + coutImpression
    },

    // Calcul du prix de vente avec marge maximale
    calculerPrixVenteAvecMarge(coutRevient, margeMax = null) {
      const marge = margeMax || this.prixConfig.margeMax
      return coutRevient * (1 + marge)
    },

    // Calcul du prix de vente total avec marge maximale
    calculerPrixVenteTotalAvecMarge(coutRevientTotal, margeMax = null) {
      const marge = margeMax || this.prixConfig.margeMax
      return coutRevientTotal * (1 + marge)
    },

    // Calcul du coût de revient d'un façonnage
    calculerCoutRevientFaconnage(faconnageId, surfaceM2) {
      const faconnage = this.faconnages.find(f => f.id === faconnageId)
      if (!faconnage) return 0

      const coutsFaconnage = this.coutsConfig.coutsFaconnage
      
      // Temps selon le type de façonnage
      let tempsParM2 = 0
      switch(faconnage.categorie) {
        case 'decoupe':
          tempsParM2 = coutsFaconnage.tempsDecoupeParM2
          break
        case 'ourlet':
          tempsParM2 = coutsFaconnage.tempsOurletParM2
          break
        case 'perforation':
          tempsParM2 = coutsFaconnage.tempsPerforationParM2
          break
        case 'pliage':
          tempsParM2 = coutsFaconnage.tempsPliageParM2
          break
        case 'collage':
          tempsParM2 = coutsFaconnage.tempsCollageParM2
          break
        default:
          tempsParM2 = 0.05 // Temps par défaut
      }
      
      const tempsTotal = tempsParM2 * surfaceM2
      const coutMainOeuvre = tempsTotal * coutsFaconnage.mainOeuvreParHeure
      const coutMachine = tempsTotal * coutsFaconnage.coutMachineParHeure
      
      return coutMainOeuvre + coutMachine
    },

    // Calcul du coût de revient d'un accessoire
    calculerCoutRevientAccessoire(accessoireId, quantite = 1) {
      const accessoire = this.accessoires.find(a => a.id === accessoireId)
      if (!accessoire) return 0

      // Recherche du coût dans la configuration
      const coutsAccessoires = this.coutsConfig.coutsAccessoires
      let coutUnitaire = 0
      
      // Recherche par catégorie et nom
      for (const categorie in coutsAccessoires) {
        if (coutsAccessoires[categorie][accessoire.nom.toLowerCase()]) {
          coutUnitaire = coutsAccessoires[categorie][accessoire.nom.toLowerCase()]
          break
        }
      }
      
      // Si pas trouvé, utiliser le prix de vente comme base (coût estimé à 60%)
      if (coutUnitaire === 0) {
        coutUnitaire = accessoire.prix * 0.6
      }
      
      return coutUnitaire * quantite
    },

    // Calcul de la marge réelle
    calculerMargeReelle(prixVente, coutRevient) {
      if (prixVente <= 0) return 0
      return ((prixVente - coutRevient) / prixVente) * 100
    },

    // Statistiques de rentabilité
    getStatistiquesRentabilite() {
      const stats = {
        margeMoyenne: 0,
        coutRevientMoyen: 0,
        prixVenteMoyen: 0,
        supportsRentables: [],
        supportsMoinsRentables: []
      }
      
      // Calcul des moyennes (à implémenter selon les besoins)
      return stats
    },
    
    // Sauvegarder dans localStorage
    saveToLocalStorage() {
      if (process.client) {
        localStorage.setItem('saii_print_config', JSON.stringify({
          categories: this.categories,
          supports: this.supports,
          options: this.options,
          faconnages: this.faconnages,
          accessoires: this.accessoires,
          adhesifsConfig: this.adhesifsConfig,
          prixConfig: this.prixConfig,
          coutsConfig: this.coutsConfig
        }))
      }
    },
    
    // Charger depuis localStorage
    loadFromLocalStorage() {
      if (process.client) {
        const saved = localStorage.getItem('saii_print_config')
        if (saved) {
        const data = JSON.parse(saved)
        this.categories = data.categories || this.categories
        this.supports = data.supports || this.supports
        this.options = data.options || this.options
        this.faconnages = data.faconnages || this.faconnages
        this.accessoires = data.accessoires || this.accessoires
        this.adhesifsConfig = data.adhesifsConfig || this.adhesifsConfig
        this.prixConfig = data.prixConfig || this.prixConfig
        this.coutsConfig = data.coutsConfig || this.coutsConfig
        }
      }
    }
  }
})
