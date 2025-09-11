<template>
  <div class="bg-gray-50 text-gray-800">
    <!-- Presentación -->
    <section class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white p-8">
      <h1 class="text-5xl font-bold mb-4">Soy Capitan Satuneta, tu Coach Fitness y tu ray</h1>
      <p class="text-xl max-w-2xl text-center">
        Transformá tu cuerpo de sapo y mente con rutinas diseñadas especialmente para vos.
      </p>
    </section>

    <!-- Experiencia -->
    <section class="py-16 px-8 max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold mb-6 text-center">Mi Experiencia</h2>
      <p class="text-lg text-center">
        Más de 10 años entrenando atletas, ayudando a personas a cumplir sus objetivos 
        de fuerza, resistencia y estética. Certificado internacionalmente como entrenador personal.
      </p>
    </section>

    <!-- Planes -->
    <section class="py-16 px-8 bg-gray-100">
      <h2 class="text-3xl font-bold mb-10 text-center">Planes de Ejercicio</h2>
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div
          v-for="plan in plans"
          :key="plan.id"
          class="bg-white p-6 rounded-2xl shadow-lg text-center"
        >
          <h3 class="text-2xl font-bold mb-4">{{ plan.name }}</h3>
          <p class="mb-4">{{ plan.description }}</p>
          <p class="text-xl font-semibold mb-6">${{ plan.price }}</p>
          <router-link
            :to="`/plan/${plan.id}`"
            class="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
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
