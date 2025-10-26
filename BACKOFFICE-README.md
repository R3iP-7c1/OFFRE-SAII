# 🔐 Backoffice Saii - Guide Complet

## 🎯 Accès au Backoffice

### URL de Connexion
```
http://localhost:3000/admin/login
```

### Identifiants
- **Email** : `jules@sagaxp.fr`
- **Mot de passe** : `Jules321`

---

## 📂 Architecture du Backoffice

### Pages Disponibles

1. **Dashboard** (`/admin/dashboard`)
   - Vue d'ensemble des configurations
   - Stats rapides
   - Accès rapides aux différentes sections

2. **Kit Communication** (`/admin/kit-communication`)
   - Gérer la valeur offerte (€)
   - Modifier le titre et description
   - **Carrousel d'images** (ajout/suppression)
   - 4 détails configurables

3. **Kit Digital** (`/admin/kit-digital`)
   - Gérer la valeur offerte (€)
   - Modifier le titre et description
   - **Carrousel d'images** (ajout/suppression)
   - 4 détails configurables

4. **Prix & Remises** (`/admin/prix-remises`)
   - Configuration du prix de base (732 €)
   - **6 Paliers de remise** éditables :
     - Standard (1-5 licences) : 0%
     - Starter (6-9 licences) : 5%
     - Bronze (10-24 licences) : 10%
     - Silver (25-49 licences) : 15%
     - Gold (50-99 licences) : 18%
     - Premium (100-150 licences) : 20%

5. **Budget 2025** (`/admin/budget`)
   - Modifier les libellés
   - Ajuster les montants
   - Calcul automatique du total

---

## 🔗 Connexion Front ↔ Backoffice

### Données Synchronisées

Toutes les modifications dans le backoffice sont **immédiatement** reflétées sur le front :

| Configuration | Où c'est utilisé |
|---------------|------------------|
| **Prix de base** | Prix des formules, objectif configurateur |
| **Paliers de remise** | Calcul automatique selon nb de licences |
| **Kit Communication** | Formule Kit, modals, badges valeur |
| **Kit Digital** | Formule Écran, modals, badges valeur |
| **Budget 2025** | Comparatif budgétaire 2025 vs 2026 |

### Store Pinia

Fichier : `stores/admin.js`

**État centralisé** :
- ✅ Configuration Kit Communication
- ✅ Configuration Kit Digital
- ✅ Prix de base et paliers
- ✅ Budget 2025
- ✅ Authentification admin

---

## 🎨 Fonctionnalités Ludiques

### 1. **Carrousel d'Images**
- Ajout d'images par URL
- Preview miniature
- Suppression avec confirmation
- Support multi-images pour chaque kit

### 2. **Édition en Temps Réel**
- Les champs se mettent à jour instantanément
- Preview des prix calculés dans Prix & Remises
- Total automatique dans Budget 2025

### 3. **Interface Moderne**
- Sidebar fixe avec navigation
- Cards colorées par section
- Boutons "Sauvegarder" visibles
- Toasts de confirmation
- Liens "Voir le site" pour prévisualiser

### 4. **Sécurité**
- Middleware de protection des routes
- Authentification requise
- Token stocké en localStorage
- Bouton déconnexion

---

## 🚀 Utilisation

### Connexion
1. Allez sur `/admin/login`
2. Entrez : `jules@sagaxp.fr` / `Jules321`
3. Cliquez sur "Se connecter"

### Navigation
- Utilisez la **sidebar gauche** pour naviguer
- Cliquez sur "**Voir le site**" pour ouvrir le front dans un nouvel onglet
- Cliquez sur "**Déconnexion**" pour vous déconnecter

### Modification d'un Kit
1. Allez dans "Kit Communication" ou "Kit Digital"
2. Modifiez la **valeur** (ex: 360 → 400 €)
3. Changez le **titre** et la **description**
4. **Ajoutez des images** en entrant l'URL
5. Modifiez les **4 détails**
6. Cliquez sur "**Sauvegarder**"
7. Toast de confirmation s'affiche
8. Retournez sur le front → Les changements sont visibles !

### Configuration Prix
1. Allez dans "Prix & Remises"
2. Modifiez le **prix de base**
3. Ajustez chaque **palier** (min, max, remise %)
4. Preview du prix calculé en temps réel
5. Sauvegardez

### Modification Budget 2025
1. Allez dans "Budget 2025"
2. Changez les libellés
3. Ajustez les montants
4. Le total se calcule automatiquement
5. Sauvegardez

---

## 🎯 Architecture Technique

### Structure des Fichiers

```
├── stores/
│   └── admin.js              # Store Pinia centralisé
├── middleware/
│   └── admin-auth.js         # Protection des routes admin
├── layouts/
│   └── admin.vue             # Layout avec sidebar
├── pages/
│   ├── index.vue             # Front (connecté au store)
│   └── admin/
│       ├── login.vue         # Page de connexion
│       ├── dashboard.vue     # Tableau de bord
│       ├── kit-communication.vue
│       ├── kit-digital.vue
│       ├── prix-remises.vue
│       └── budget.vue
└── components/
    ├── ScreenModal.vue       # Modal Écran (reçoit les données)
    └── KitModal.vue          # Modal Kit (reçoit les données)
```

### Flux de Données

```
Backoffice (Admin modifie)
         ↓
    Store Pinia
         ↓
Front (Utilise les données)
```

---

## 🌟 Fonctionnalités Avancées

### À Implémenter (Optionnel)

- **Persistance** : Connecter à une vraie base de données (Back4App, Supabase)
- **Upload d'images** : Remplacer URL par upload de fichiers
- **Prévisualisation** : Iframe du front dans le backoffice
- **Historique** : Log des modifications
- **Multi-utilisateurs** : Gestion des rôles

---

## 🎨 Design System

### Couleurs par Section

- **Kit Communication** : Bleu/Indigo
- **Kit Digital** : Purple/Pink
- **Prix & Remises** : Vert/Émeraude
- **Budget 2025** : Orange/Rouge
- **Dashboard** : Mix de toutes les couleurs

### Sidebar
- Fond : Dégradé indigo → purple → pink
- Navigation : Items avec hover states
- User badge : Vert avec initiales
- Logout : Bouton rouge

---

## 📱 Responsive

Le backoffice est optimisé pour :
- ✅ Desktop (expérience optimale)
- ✅ Tablet (adapté)
- ⚠️ Mobile (sidebar fixe, prévoir un burger menu si besoin)

---

## 🔒 Sécurité

### Niveau Actuel
- Authentification simple (localStorage)
- Middleware de protection
- Session persistante

### À Améliorer pour Production
- JWT tokens
- API backend sécurisée
- Rate limiting
- HTTPS obligatoire
- 2FA (optionnel)

---

## 💡 Tips

1. **Accès rapide** : Lien "Admin" dans le footer du site (discret)
2. **Preview** : Bouton "Voir le site" dans le header admin
3. **Sauvegarde** : Les données sont en mémoire, pensez à sauvegarder souvent !
4. **Tooltip** : Survolez le configurateur Partenaires pour les détails

---

**Votre backoffice est prêt ! Connectez-vous et prenez le contrôle total de votre offre Saii ! 🚀**

