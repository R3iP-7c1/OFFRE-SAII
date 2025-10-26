export default defineNuxtRouteMiddleware((to, from) => {
  const adminStore = useAdminStore()
  
  // Vérifier l'authentification au chargement
  if (process.client) {
    adminStore.checkAuth()
  }
  
  // Si pas authentifié et essaie d'accéder à une page admin (sauf login)
  if (!adminStore.isAuthenticated && to.path.startsWith('/admin') && to.path !== '/admin/login') {
    return navigateTo('/admin/login')
  }
  
  // Si déjà authentifié et essaie d'accéder au login
  if (adminStore.isAuthenticated && to.path === '/admin/login') {
    return navigateTo('/admin/dashboard')
  }
})

