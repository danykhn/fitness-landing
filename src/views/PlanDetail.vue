<template>
  <div class="min-h-screen bg-gray-900 text-white relative overflow-hidden">
    <!-- Fondos difuminados estilo luces de gym -->
    <div class="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-r from-red-700 via-red-500 to-yellow-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
    <div class="absolute top-40 right-0 w-96 h-96 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>

    <!-- Contenido -->
    <div class="relative z-10 p-8 max-w-6xl mx-auto">
      <router-link
        to="/"
        class="inline-block mb-6 px-6 py-2 rounded-full bg-gray-800/70 backdrop-blur-md shadow-md hover:shadow-lg text-yellow-400 font-semibold transition"
      >
        ⬅ Volver
      </router-link>

      <h1 class="text-5xl md:text-6xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-400 to-blue-500 drop-shadow-xl">
        Rutina - {{ plan.name }}
      </h1>

      <!-- Lista de ejercicios -->
      <div class="grid md:grid-cols-2 gap-10">
        <div
          v-for="exercise in plan.exercises"
          :key="exercise.id"
          class="bg-gray-800/80 backdrop-blur-md rounded-3xl shadow-xl p-8 hover:scale-105 transition"
        >
          <h2 class="text-2xl font-bold mb-4 text-yellow-400">{{ exercise.name }}</h2>
          <ul class="text-gray-300 space-y-2 mb-6">
            <li><span class="font-semibold text-red-500">Repeticiones:</span> {{ exercise.reps }}</li>
            <li><span class="font-semibold text-red-500">Tiempo:</span> {{ exercise.time }}</li>
            <li><span class="font-semibold text-red-500">Intervalos:</span> {{ exercise.intervals }}</li>
          </ul>
          <div class="rounded-xl overflow-hidden shadow-lg border border-red-500/40">
            <iframe
              class="w-full h-64 md:h-72"
              :src="exercise.video"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

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
