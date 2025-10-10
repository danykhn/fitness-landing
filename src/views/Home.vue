<template>
  <div class="bg-neutral-50 text-neutral-800 dark:bg-neutral-950 dark:text-neutral-100">
    <!-- Navbar -->
    <header class="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200/60 dark:border-neutral-800">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" class="font-extrabold tracking-tight text-xl">FA<span class="text-brand-600">.</span></a>
        <nav class="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#inicio" class="hover:text-brand-600">Inicio</a>
          <a href="#sobre-mi" class="hover:text-brand-600">Sobre mí</a>
          <a href="#experiencia" class="hover:text-brand-600">Experiencia</a>
          <a href="#proyectos" class="hover:text-brand-600">Proyectos</a>
          <a href="#habilidades" class="hover:text-brand-600">Habilidades</a>
          <a href="#contacto" class="hover:text-brand-600">Contacto</a>
        </nav>
        <div class="flex items-center gap-2">
            
            <!-- <button
              @click="toggleTheme()"
              type="button"
              class="inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-soft"
            >
              <span class="mr-2">Tema</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm9-5a1 1 0 0 1 1 1v.05a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2Z"
                />
              </svg>
            </button> -->
            
          <button class="md:hidden inline-flex items-center justify-center w-10 h-10" aria-label="Abrir menú" onclick="document.getElementById('mnav').classList.toggle('hidden')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </button>
        </div>
      </div>
      <div id="mnav" class="md:hidden hidden border-t border-neutral-200 dark:border-neutral-800">
        <nav class="mx-auto max-w-6xl px-4 py-3 grid gap-2 text-sm">
          <a href="#inicio" class="py-2">Inicio</a>
          <a href="#sobre-mi" class="py-2">Sobre mí</a>
          <a href="#experiencia" class="py-2">Experiencia</a>
          <a href="#proyectos" class="py-2">Proyectos</a>
          <a href="#habilidades" class="py-2">Habilidades</a>
          <a href="#contacto" class="py-2">Contacto</a>
        </nav>
      </div>
    </header>

    <!-- Hero -->
    <section id="inicio" class="relative">
      <div class="absolute inset-0 bg-gradient-to-b from-brand-50/80 to-transparent dark:from-brand-900/10 pointer-events-none"></div>
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div class="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">Fernando Daniel Arratia</h1>
            <p class="mt-3 text-lg sm:text-xl text-neutral-600 dark:text-neutral-300">Desarrollador • Vue · React · Angular</p>
            <p class="mt-4 text-neutral-700 dark:text-neutral-300">+4 años construyendo productos web escalables. Experiencia con NestJS, Laravel, Prisma, PostgreSQL y Docker. Enfoque en rendimiento, accesibilidad y DX.</p>
            <div class="mt-6 flex flex-wrap items-center gap-3">
              <a href="#contacto" class="inline-flex items-center rounded-full bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 text-sm font-semibold shadow-soft">Contactar</a>
              <a href="#proyectos" class="inline-flex items-center rounded-full border border-neutral-300 dark:border-neutral-700 px-5 py-2.5 text-sm font-semibold">Ver proyectos</a>
            </div>
            <div class="mt-6 text-sm text-neutral-600 dark:text-neutral-400 flex flex-wrap gap-4">
              <span>📍 Salta, Argentina</span>
           
            </div>
          </div>
          <div class="relative">
            <div class="aspect-square rounded-2xl bg-gradient-to-tr from-brand-500/10 to-brand-900/10 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center shadow-soft">
              <!-- Simple avatar/placeholder -->
              <img src="https://www.hendersoncountypublicschoolsnc.org/instructional-technology/files/2019/08/code-1839406_1920-780x481.jpg" class="w-full h-full  rounded-2xl" alt="" srcset="">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sobre mí -->
    <section id="sobre-mi" class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid md:grid-cols-3 gap-8">
        <div class="md:col-span-1">
          <h2 class="text-2xl font-bold">Sobre mí</h2>
         
        </div>
        <div class="md:col-span-2">
          <div class="prose prose-neutral max-w-none dark:prose-invert">
            <p>Desarrollador frontend con experiencia en ecosistemas Vue, React y Angular. Me integro rápido a equipos, cuido la calidad del código, y priorizo la comunicación con las áreas de negocio. He colaborado en proyectos gubernamentales y privados para Argentina, Chile y México.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Experiencia -->
    <section id="experiencia" class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <div class="flex items-end justify-between">
        <h2 class="text-2xl font-bold">Experiencia</h2>
        <span class="text-sm text-neutral-500">Nov 2023 – Actual</span>
      </div>
      <div class="mt-8 grid md:grid-cols-2 gap-6">
        <!-- Card -->
        <article class="p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-soft">
          <header class="flex items-center justify-between gap-4">
            <h3 class="font-semibold text-lg">Sistemas Activos CL – Chile</h3>
            <span class="text-xs px-2 py-1 rounded-full bg-brand-600/10 text-brand-700 dark:text-brand-300 border border-brand-600/20">FullStack</span>
          </header>
          <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Desarrollo y mantenimiento con Vue 3, Laravel 10, PHP 8, AdonisJS y PostgreSQL.</p>
          <ul class="mt-3 space-y-2 text-sm list-disc ml-5">
            <li>Portal <b>Chile Atiende</b>: módulo “Conectados” (Vue 3 + Vuex, BackOffice Laravel).</li>
            <li><b>Superintendencia de Autoexclusión</b>: ajustes de flujo y queries en PostgreSQL (AdonisJS, Vue 2 + Bulma).</li>
            <li><b>Apoyo a Víctimas</b>: módulo de expedientes (PHP 7.5 + jQuery, SQL Server).</li>
            <li><b>SUBDERE</b>: reglas por edad en formularios (PHP 5.2, SQL Server).</li>
            <li><b>JUNJI</b>: sistema desde cero (Angular 17 + Spring Boot 3.2), SSO y Angular Material.</li>
          </ul>
        </article>
        <article class="p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-soft">
          <header class="flex items-center justify-between gap-4">
            <h3 class="font-semibold text-lg">DiSaludClinic – México</h3>
            <span class="text-xs px-2 py-1 rounded-full bg-brand-600/10 text-brand-700 dark:text-brand-300 border border-brand-600/20">FullStack</span>
          </header>
          <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Dashboard de gestión con React 18 y TailwindCSS. Integración con Firebase y Express.</p>
          <ul class="mt-3 space-y-2 text-sm list-disc ml-5">
            <li>Implementación de TailwindCSS y experiencia de usuario accesible.</li>
            <li>Gestión de productos, usuarios, promociones, galería e informes.</li>
          </ul>
        </article>
        <article class="p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-soft">
          <header class="flex items-center justify-between gap-4">
            <h3 class="font-semibold text-lg">MiClinicaMedica – Corrientes</h3>
            <span class="text-xs px-2 py-1 rounded-full bg-brand-600/10 text-brand-700 dark:text-brand-300 border border-brand-600/20">FullStack</span>
          </header>
          <ul class="mt-3 space-y-2 text-sm list-disc ml-5">
            <li>Búsqueda por DNI y descarga de credenciales PDF (Zenrise API).</li>
            <li>Tarea automatizada con NestJS para reportes mensuales.</li>
            <li>Panel admin con roles/permiso y gráficos ChartJS.</li>
          </ul>
        </article>
        <article class="p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-soft">
          <header class="flex items-center justify-between gap-4">
            <h3 class="font-semibold text-lg">DGFTAM – Salta (SIAC)</h3>
            <span class="text-xs px-2 py-1 rounded-full bg-brand-600/10 text-brand-700 dark:text-brand-300 border border-brand-600/20">FullStack</span>
          </header>
          <ul class="mt-3 space-y-2 text-sm list-disc ml-5">
            <li>Módulo de Roles y Permisos (Spatie, Laravel + Vue 2).</li>
            <li>Paneles de usuario/administrador y pago múltiple (MacroClick).</li>
            <li>Optimización de código, Docker, PostgreSQL y Oracle (API).</li>
          </ul>
        </article>
      </div>
    </section>

    <!-- Proyectos destacados -->
    <section id="proyectos" class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <div class="flex items-end justify-between">
        <h2 class="text-2xl font-bold">Proyectos destacados</h2>
        <a href="#contacto" class="text-sm text-brand-700 dark:text-brand-300 hover:underline">¿Colaboramos?</a>
      </div>
      <div class="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Project Card Template -->
        <a href="https://www.chileatiende.gob.cl/" target="_blank" class="group block rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-soft">
          <div class="aspect-video bg-gradient-to-tr from-brand-600/10 to-brand-900/10 flex items-center justify-center">
            <span class="text-sm text-neutral-500">Chile Atiende – “Conectados”</span>
          </div>
          <div class="p-4">
            <h3 class="font-semibold">Portal Chile Atiende</h3>
            <p class="mt-1 text-sm text-neutral-600 dark:text-neutral-300">Vue 3 · Vuex · Laravel 10</p>
          </div>
        </a>
        <a href="https://junji.cl/postulaciones/" target="_blank" class="group block rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-soft">
          <div class="aspect-video bg-gradient-to-tr from-brand-600/10 to-brand-900/10 flex items-center justify-center">
            <span class="text-sm text-neutral-500">JUNJI – SSO + Material</span>
          </div>
          <div class="p-4">
            <h3 class="font-semibold">JUNJI Gestión de Jardines</h3>
            <p class="mt-1 text-sm text-neutral-600 dark:text-neutral-300">Angular 17 · Spring Boot 3.2</p>
          </div>
        </a>
        <a href="https://rentas.dgrmsalta.gov.ar/#/automotores/emision-boletas/multas" target="_blank" class="group block rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-soft">
          <div class="aspect-video bg-gradient-to-tr from-brand-600/10 to-brand-900/10 flex items-center justify-center">
            <span class="text-sm text-neutral-500">SIAC – Pago múltiple</span>
          </div>
          <div class="p-4">
            <h3 class="font-semibold">SIAC Autogestión</h3>
            <p class="mt-1 text-sm text-neutral-600 dark:text-neutral-300">Laravel 7.5 · Vue 2 · Spatie</p>
          </div>
        </a>
      
        <a href="https://zonachamba.com/" target="_blank" class="group block rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-soft">
          <div class="aspect-video bg-gradient-to-tr from-brand-600/10 to-brand-900/10 flex items-center justify-center">
            <span class="text-sm text-neutral-500">ZonaChamba</span>
          </div>
          <div class="p-4">
            <h3 class="font-semibold">ZonaChamba</h3>
            <p class="mt-1 text-sm text-neutral-600 dark:text-neutral-300">Angular 17 - SupaBase</p>
          </div>
        </a>
      </div>
    </section>

    <!-- Habilidades -->
    <section id="habilidades" class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <h2 class="text-2xl font-bold">Habilidades</h2>
      <div class="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <h3 class="font-semibold">Frontend</h3>
          <div class="mt-3 flex flex-wrap gap-2 text-xs">
            <span class="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800">Vue 2/3</span>
            <span class="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800">React 18</span>
            <span class="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800">Angular 17</span>
            <span class="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800">TailwindCSS</span>
            <span class="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800">Quasar</span>
          </div>
        </div>
        <div class="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <h3 class="font-semibold">Backend</h3>
          <div class="mt-3 flex flex-wrap gap-2 text-xs">
            <span class="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800">Laravel</span>
            <span class="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800">NestJS</span>
            <span class="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800">AdonisJS</span>
            <span class="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800">Spring Boot</span>
          </div>
        </div>
        <div class="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <h3 class="font-semibold">Datos & DevOps</h3>
          <div class="mt-3 flex flex-wrap gap-2 text-xs">
            <span class="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800">PostgreSQL</span>
            <span class="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800">MySQL</span>
            <span class="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800">SQL Server</span>
            <span class="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800">Docker</span>
            <span class="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800">Nginx</span>
          </div>
        </div>
        <div class="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
          <h3 class="font-semibold">Herramientas</h3>
          <div class="mt-3 flex flex-wrap gap-2 text-xs">
            <span class="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800">GitHub</span>
            <span class="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800">GitLab</span>
            <span class="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800">ChartJS</span>
            <span class="px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800">Spatie</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Contacto -->
    <section id="contacto" class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid md:grid-cols-3 gap-8">
        <div>
          <h2 class="text-2xl font-bold">Contacto</h2>
          <p class="mt-2 text-neutral-600 dark:text-neutral-300">¿Te interesa colaborar? Escríbeme y coordinamos una llamada.</p>
        </div>
        <form class="md:col-span-2 grid gap-4">
          <div class="grid sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Nombre" class="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-3" required>
            <input type="email" placeholder="Email" class="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-3" required>
          </div>
          <input type="text" placeholder="Asunto" class="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-3" required>
          <textarea rows="5" placeholder="Mensaje" class="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-3" required></textarea>
          <div class="flex items-center gap-3">
            <button type="submit" class="inline-flex items-center rounded-full bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 text-sm font-semibold shadow-soft">Enviar</button>
            <a href="mailto:danjel2014@gmail.com" class="text-sm hover:underline">o envía un correo</a>
          </div>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-neutral-200 dark:border-neutral-800">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p>© {{ year }} Fernando Daniel Arratia. Hecho con Tailwind CSS.</p>
        <div class="flex items-center gap-4">
          <a href="#inicio" class="hover:text-brand-600">Arriba ↑</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

const year = new Date().getFullYear()

const storageKey = "theme"
const theme = ref("light")

const setTheme = (mode) => {
  theme.value = mode
  if (mode === "dark") document.documentElement.classList.add("dark")
  else document.documentElement.classList.remove("dark")
  localStorage.setItem(storageKey, mode)
}

const toggleTheme = () => {
  const newTheme = document.documentElement.classList.contains("dark") ? "light" : "dark"
  setTheme(newTheme)
}

onMounted(() => {
  const saved = localStorage.getItem(storageKey)
  if (saved) setTheme(saved)
  else if (window.matchMedia("(prefers-color-scheme: dark)").matches) setTheme("dark")
  else setTheme("light")
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
