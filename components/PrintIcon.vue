<template>
  <div class="print-icon" :class="[sizeClass, colorClass]">
    <svg v-if="iconType === 'panneau'" viewBox="0 0 24 24" fill="currentColor">
      <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M7 8h10M7 12h6" stroke="currentColor" stroke-width="1.5" fill="none"/>
    </svg>
    
    <svg v-else-if="iconType === 'affiche'" viewBox="0 0 24 24" fill="currentColor">
      <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M8 7h8M8 11h8M8 15h4" stroke="currentColor" stroke-width="1.5" fill="none"/>
    </svg>
    
    <svg v-else-if="iconType === 'bache'" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 7h18l-1 8H4l-1-8z" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M7 7V5a2 2 0 012-2h6a2 2 0 012 2v2" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>
    
    <svg v-else-if="iconType === 'kakemono'" viewBox="0 0 24 24" fill="currentColor">
      <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M8 1v2M16 1v2M12 21v2" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>
    
    <svg v-else-if="iconType === 'banniere'" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 4h18l-2 8H5l-2-8z" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>
    
    <svg v-else-if="iconType === 'vitrine'" viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M8 21l4-7 4 7" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>
    
    <svg v-else-if="iconType === 'laminage'" viewBox="0 0 24 24" fill="currentColor">
      <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M7 8h10M7 12h6" stroke="currentColor" stroke-width="1.5" fill="none"/>
      <path d="M9 16l3-3 3 3" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>
    
    <svg v-else-if="iconType === 'decoupe'" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>
    
    <svg v-else-if="iconType === 'ourlet'" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M7 9l2 2 4-4" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>
    
    <svg v-else-if="iconType === 'oeillets'" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M12 1v6M12 17v6M1 12h6M17 12h6" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>
    
    <svg v-else-if="iconType === 'structure'" viewBox="0 0 24 24" fill="currentColor">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M9 9h6v6H9z" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>
    
    <svg v-else-if="iconType === 'eclairage'" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1z" fill="currentColor"/>
      <path d="M12 2C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>
    
    <svg v-else-if="iconType === 'settings'" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>
    
    <svg v-else-if="iconType === 'add'" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M12 8v8M8 12h8" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>
    
    <svg v-else-if="iconType === 'edit'" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>
    
    <svg v-else-if="iconType === 'delete'" viewBox="0 0 24 24" fill="currentColor">
      <polyline points="3,6 5,6 21,6" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" stroke-width="2" fill="none"/>
      <line x1="10" y1="11" x2="10" y2="17" stroke="currentColor" stroke-width="2"/>
      <line x1="14" y1="11" x2="14" y2="17" stroke="currentColor" stroke-width="2"/>
    </svg>
    
    <svg v-else-if="iconType === 'save'" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" stroke="currentColor" stroke-width="2" fill="none"/>
      <polyline points="17,21 17,13 7,13 7,21" stroke="currentColor" stroke-width="2" fill="none"/>
      <polyline points="7,3 7,8 15,8" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>
    
    <svg v-else-if="iconType === 'category'" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M6.5 2H20v20H6.5a2.5 2.5 0 010-5H20" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>
    
    <svg v-else-if="iconType === 'price'" viewBox="0 0 24 24" fill="currentColor">
      <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" stroke-width="2"/>
      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>
    
    <!-- Icône par défaut -->
    <svg v-else viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
  },
  color: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'success', 'warning', 'danger', 'info'].includes(value)
  }
})

const iconType = computed(() => props.type)
const sizeClass = computed(() => {
  const sizes = {
    xs: 'w-4 h-4',
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10'
  }
  return sizes[props.size]
})

const colorClass = computed(() => {
  const colors = {
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    danger: 'text-red-600',
    info: 'text-cyan-600'
  }
  return colors[props.color]
})
</script>

<style scoped>
.print-icon {
  @apply flex items-center justify-center;
}

.print-icon svg {
  @apply transition-all duration-200;
}

.print-icon:hover svg {
  @apply scale-110;
}
</style>
