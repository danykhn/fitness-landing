<template>
  <div class="min-h-screen bg-white p-8">
    <router-link to="/" class="text-blue-500 underline mb-6 inline-block">⬅ Volver</router-link>

    <h1 class="text-4xl font-bold mb-6">Rutina - {{ plan.name }}</h1>

    <!-- Lista de ejercicios -->
    <div class="space-y-6">
      <div v-for="exercise in plan.exercises" :key="exercise.id" class="p-6 border rounded-xl shadow">
        <h2 class="text-2xl font-semibold mb-2">{{ exercise.name }}</h2>
        <p class="mb-1"><strong>Repeticiones:</strong> {{ exercise.reps }}</p>
        <p class="mb-1"><strong>Tiempo:</strong> {{ exercise.time }}</p>
        <p class="mb-1"><strong>Intervalos:</strong> {{ exercise.intervals }}</p>
        <div class="mt-4">
          <iframe
            class="w-full h-64 rounded-lg"
            :src="exercise.video"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

// Simulación de datos
const plans = {
  1: {
    name: 'Plan Básico',
    exercises: [
      { id: 1, name: 'Sentadillas', reps: '3x12', time: '30 seg', intervals: '1 min', video: 'https://www.youtube.com/embed/UXJrBgI2RxA' },
      { id: 2, name: 'Plancha', reps: '-', time: '3x45 seg', intervals: '30 seg', video: 'https://www.youtube.com/embed/pSHjTRCQxIw' },
    ]
  },
  2: {
    name: 'Plan Intermedio',
    exercises: [
      { id: 1, name: 'Zancadas', reps: '3x10 por pierna', time: '-', intervals: '1 min', video: 'https://www.youtube.com/embed/QOVaHwm-Q6U' },
      { id: 2, name: 'Flexiones', reps: '4x15', time: '-', intervals: '1 min', video: 'https://www.youtube.com/embed/IODxDxX7oi4' },
    ]
  },
  3: {
    name: 'Plan Avanzado',
    exercises: [
      { id: 1, name: 'Peso muerto', reps: '4x8', time: '-', intervals: '2 min', video: 'https://www.youtube.com/embed/op9kVnSso6Q' },
      { id: 2, name: 'Dominadas', reps: '4x12', time: '-', intervals: '90 seg', video: 'https://www.youtube.com/embed/eGo4IYlbE5g' },
    ]
  }
}

const plan = plans[route.params.id]
</script>
