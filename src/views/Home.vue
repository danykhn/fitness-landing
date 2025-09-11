<template>
  <div class="bg-gray-900 text-white relative overflow-hidden">
    <!-- Fondos difuminados estilo luces de gym -->
    <div class="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-red-700 via-red-500 to-yellow-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
    <div class="absolute top-40 right-0 w-96 h-96 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>

    <!-- Presentación -->
    <section class="min-h-screen flex flex-col items-center justify-center px-6 relative z-10">
      <h1 class="text-6xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-400 to-blue-500 drop-shadow-xl">
        Soy Capitan Satuneta
      </h1>
      <p class="text-2xl md:text-3xl font-semibold mb-4 text-center text-gray-200">
        Tu <span class="text-red-500">Coach Fitness</span> personal
      </p>
      <p class="text-lg md:text-xl max-w-2xl text-center text-gray-400">
        Transformá tu cuerpo sapo mafioso y mente con <span class="font-bold text-yellow-400">rutinas únicas</span>
        diseñadas especialmente para vos sapo.
      </p>
      <button
        class="mt-10 px-10 py-3 bg-gradient-to-r from-red-600 to-yellow-500 text-white text-lg rounded-full shadow-xl hover:scale-105 transition"
      >
        Comenzar Ahora
      </button>
    </section>

    <!-- Experiencia -->
    <section class="py-20 px-8 max-w-5xl mx-auto relative z-10">
      <h2 class="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">
        Mi Experiencia
      </h2>
      <div class="bg-gray-800/70 backdrop-blur-md shadow-2xl rounded-3xl p-10">
        <p class="text-lg md:text-xl text-center text-gray-300 leading-relaxed">
          Más de <span class="font-bold text-yellow-400">10 años entrenando atletas</span>,
          ayudando a personas a cumplir sus objetivos de fuerza, resistencia y estética.
          <br />
          Certificado internacionalmente como <span class="font-bold text-red-500">entrenador personal</span>.
        </p>
      </div>
    </section>

    <!-- Planes -->
    <section class="py-20 px-8 relative z-10">
      <h2 class="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-600">
        Planes de Ejercicio
      </h2>
      <div class="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div
          v-for="plan in plans"
          :key="plan.id"
          class="bg-gray-800/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:scale-105 hover:shadow-[0_0_25px_rgba(239,68,68,0.6)] transition"
        >
          <h3 class="text-2xl font-bold mb-3 text-yellow-400">{{ plan.name }}</h3>
          <p class="mb-4 text-gray-300">{{ plan.description }}</p>
          <p class="text-3xl font-extrabold mb-6 text-red-500">${{ plan.price }}</p>
          <router-link
            :to="`/plan/${plan.id}`"
            class="block w-full text-center bg-gradient-to-r from-red-600 to-yellow-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Comprar
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const plans = [
  { id: 1, name: 'Plan Básico', description: 'Rutinas simples para empezar tu camino fitness.', price: 30 },
  { id: 2, name: 'Plan Intermedio', description: 'Ejercicios variados y personalizados.', price: 50 },
  { id: 3, name: 'Plan Avanzado', description: 'Entrenamiento intenso para atletas.', price: 80 },
]
</script>
