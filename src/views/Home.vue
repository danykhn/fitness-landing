<template>
  <div class="bg-neutral-50 text-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 overflow-x-hidden">

    <!-- Navbar -->
    <header class="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200/60 dark:border-neutral-800">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" class="font-extrabold tracking-tight text-xl">FA<span class="text-brand-600">.</span></a>
        <nav class="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#inicio" class="hover:text-brand-600 transition-colors duration-200">Inicio</a>
          <a href="#sobre-mi" class="hover:text-brand-600 transition-colors duration-200">Sobre mí</a>
          <a href="#experiencia" class="hover:text-brand-600 transition-colors duration-200">Experiencia</a>
          <a href="#proyectos" class="hover:text-brand-600 transition-colors duration-200">Proyectos</a>
          <a href="#habilidades" class="hover:text-brand-600 transition-colors duration-200">Habilidades</a>
          <a href="#contacto" class="hover:text-brand-600 transition-colors duration-200">Contacto</a>
        </nav>
        <div class="flex items-center gap-2">
          <button
            class="md:hidden inline-flex items-center justify-center w-10 h-10"
            aria-label="Abrir menú"
            onclick="document.getElementById('mnav').classList.toggle('hidden')"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
            </svg>
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
    <section id="inicio" class="relative min-h-screen flex items-center">
      <!-- Animated blobs -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>
      </div>

      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10 w-full">
        <div class="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span class="availability-badge">✦ Disponible para proyectos</span>
            <h1 class="hero-title mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Fernando<br>
              <span class="text-gradient">Daniel Arratia</span>
            </h1>
            <p class="hero-subtitle mt-4 text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 font-medium min-h-[1.75rem]">
              <span>{{ displayedText }}</span><span class="cursor">|</span>
            </p>
            <p class="hero-desc mt-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
              +4 años construyendo productos web escalables. Experiencia con NestJS, Laravel, Python/Django, PostgreSQL y Docker. Enfoque en rendimiento, accesibilidad y DX.
            </p>
            <div class="hero-actions mt-6 flex flex-wrap items-center gap-3">
              <a href="#contacto" class="btn-primary">Contactar</a>
              <a href="#proyectos" class="btn-secondary">Ver proyectos</a>
            </div>
            <div class="hero-location mt-6 text-sm text-neutral-600 dark:text-neutral-400 flex flex-wrap gap-4">
              <span>📍 Salta, Argentina</span>
            </div>
          </div>

          <div class="relative">
            <div class="hero-image aspect-square rounded-2xl overflow-hidden shadow-soft border border-neutral-200 dark:border-neutral-800">
              <img
                src="https://www.hendersoncountypublicschoolsnc.org/instructional-technology/files/2019/08/code-1839406_1920-780x481.jpg"
                class="w-full h-full object-cover"
                alt="Fernando Daniel Arratia - Desarrollador FullStack"
              >
            </div>
            <div class="float-badge-1 absolute -bottom-4 -left-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-2 shadow-soft">
              <p class="text-xs font-semibold">🐍 Python · Django</p>
            </div>
            <div class="float-badge-2 absolute -top-4 -right-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-2 shadow-soft">
              <p class="text-xs font-semibold">⚡ +4 años de exp.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sobre mí -->
    <section id="sobre-mi" class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid md:grid-cols-3 gap-8">
        <div class="md:col-span-1 reveal">
          <h2 class="text-2xl font-bold">Sobre mí</h2>
          <div class="mt-6 grid gap-3">
            <div class="stat-card">
              <span class="stat-number">+4</span>
              <span class="stat-label">Años de experiencia</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">3+</span>
              <span class="stat-label">Países</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">10+</span>
              <span class="stat-label">Proyectos entregados</span>
            </div>
          </div>
        </div>
        <div class="md:col-span-2 reveal reveal-delay-2">
          <div class="prose prose-neutral max-w-none dark:prose-invert">
            <p class="text-lg leading-relaxed">Desarrollador FullStack con experiencia en ecosistemas Vue, React, Angular y Python/Django. Me integro rápido a equipos, cuido la calidad del código, y priorizo la comunicación con las áreas de negocio.</p>
            <p class="mt-4 text-neutral-600 dark:text-neutral-400">He colaborado en proyectos gubernamentales y privados para Argentina, Chile y México, abarcando desde sistemas de autogestión hasta plataformas de salud digital.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Experiencia -->
    <section id="experiencia" class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
      <div class="flex items-end justify-between reveal">
        <h2 class="text-2xl font-bold">Experiencia</h2>
        <span class="text-sm text-neutral-500">Nov 2023 – Actual</span>
      </div>
      <div class="mt-8 grid md:grid-cols-2 gap-6">
        <article class="experience-card reveal reveal-delay-1">
          <header class="flex items-center justify-between gap-4">
            <h3 class="font-semibold text-lg">Sistemas Activos CL – Chile</h3>
            <span class="badge-role">FullStack</span>
          </header>
          <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Desarrollo y mantenimiento con Vue 3, Laravel 10, PHP 8, AdonisJS y PostgreSQL.</p>
          <ul class="mt-3 space-y-2 text-sm list-disc ml-5">
            <li>Portal <b>Chile Atiende</b>: módulo "Conectados" (Vue 3 + Vuex, BackOffice Laravel).</li>
            <li><b>Superintendencia de Autoexclusión</b>: ajustes de flujo y queries en PostgreSQL (AdonisJS, Vue 2 + Bulma).</li>
            <li><b>Apoyo a Víctimas</b>: módulo de expedientes (PHP 7.5 + jQuery, SQL Server).</li>
            <li><b>SUBDERE</b>: reglas por edad en formularios (PHP 5.2, SQL Server).</li>
            <li><b>JUNJI</b>: sistema desde cero (Angular 17 + Spring Boot 3.2), SSO y Angular Material.</li>
          </ul>
        </article>
        <article class="experience-card reveal reveal-delay-2">
          <header class="flex items-center justify-between gap-4">
            <h3 class="font-semibold text-lg">DiSaludClinic – México</h3>
            <span class="badge-role">FullStack</span>
          </header>
          <p class="mt-2 text-sm text-neutral-600 dark:text-neutral-300">Dashboard de gestión con React 18 y TailwindCSS. Integración con Firebase y Express.</p>
          <ul class="mt-3 space-y-2 text-sm list-disc ml-5">
            <li>Implementación de TailwindCSS y experiencia de usuario accesible.</li>
            <li>Gestión de productos, usuarios, promociones, galería e informes.</li>
          </ul>
        </article>
        <article class="experience-card reveal reveal-delay-3">
          <header class="flex items-center justify-between gap-4">
            <h3 class="font-semibold text-lg">MiClinicaMedica – Corrientes</h3>
            <span class="badge-role">FullStack</span>
          </header>
          <ul class="mt-3 space-y-2 text-sm list-disc ml-5">
            <li>Búsqueda por DNI y descarga de credenciales PDF (Zenrise API).</li>
            <li>Tarea automatizada con NestJS para reportes mensuales.</li>
            <li>Panel admin con roles/permiso y gráficos ChartJS.</li>
          </ul>
        </article>
        <article class="experience-card reveal reveal-delay-4">
          <header class="flex items-center justify-between gap-4">
            <h3 class="font-semibold text-lg">DGFTAM – Salta (SIAC)</h3>
            <span class="badge-role">FullStack</span>
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
    <section id="proyectos" class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
      <div class="flex items-end justify-between reveal">
        <h2 class="text-2xl font-bold">Proyectos destacados</h2>
        <a href="#contacto" class="text-sm text-brand-700 dark:text-brand-300 hover:underline">¿Colaboramos?</a>
      </div>
      <div class="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <a href="https://www.chileatiende.gob.cl/" target="_blank" class="project-card reveal reveal-delay-1">
          <div class="aspect-video bg-gradient-to-tr from-blue-600/20 to-blue-900/20 flex items-center justify-center">
            <span class="text-sm text-neutral-600 dark:text-neutral-400 font-medium">Chile Atiende – "Conectados"</span>
          </div>
          <div class="p-4">
            <h3 class="font-semibold transition-colors duration-200">Portal Chile Atiende</h3>
            <p class="mt-1 text-sm text-neutral-600 dark:text-neutral-300">Vue 3 · Vuex · Laravel 10</p>
          </div>
        </a>
        <a href="https://junji.cl/postulaciones/" target="_blank" class="project-card reveal reveal-delay-2">
          <div class="aspect-video bg-gradient-to-tr from-purple-600/20 to-purple-900/20 flex items-center justify-center">
            <span class="text-sm text-neutral-600 dark:text-neutral-400 font-medium">JUNJI – SSO + Material</span>
          </div>
          <div class="p-4">
            <h3 class="font-semibold transition-colors duration-200">JUNJI Gestión de Jardines</h3>
            <p class="mt-1 text-sm text-neutral-600 dark:text-neutral-300">Angular 17 · Spring Boot 3.2</p>
          </div>
        </a>
        <a href="https://rentas.dgrmsalta.gov.ar/#/automotores/emision-boletas/multas" target="_blank" class="project-card reveal reveal-delay-3">
          <div class="aspect-video bg-gradient-to-tr from-green-600/20 to-green-900/20 flex items-center justify-center">
            <span class="text-sm text-neutral-600 dark:text-neutral-400 font-medium">SIAC – Pago múltiple</span>
          </div>
          <div class="p-4">
            <h3 class="font-semibold transition-colors duration-200">SIAC Autogestión</h3>
            <p class="mt-1 text-sm text-neutral-600 dark:text-neutral-300">Laravel 7.5 · Vue 2 · Spatie</p>
          </div>
        </a>
        <a href="https://zonachamba.com/" target="_blank" class="project-card reveal reveal-delay-4">
          <div class="aspect-video bg-gradient-to-tr from-orange-600/20 to-orange-900/20 flex items-center justify-center">
            <span class="text-sm text-neutral-600 dark:text-neutral-400 font-medium">ZonaChamba</span>
          </div>
          <div class="p-4">
            <h3 class="font-semibold transition-colors duration-200">ZonaChamba</h3>
            <p class="mt-1 text-sm text-neutral-600 dark:text-neutral-300">Angular 17 · SupaBase</p>
          </div>
        </a>
      </div>
    </section>

    <!-- Habilidades -->
    <section id="habilidades" class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
      <h2 class="text-2xl font-bold reveal">Habilidades</h2>
      <div class="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="skill-card reveal reveal-delay-1">
          <div class="flex items-center gap-2 mb-4">
            <span class="skill-icon skill-icon-blue">🎨</span>
            <h3 class="font-semibold">Frontend</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="skill-tag skill-tag-blue">Vue 2/3</span>
            <span class="skill-tag skill-tag-blue">React 18</span>
            <span class="skill-tag skill-tag-blue">Angular 17</span>
            <span class="skill-tag skill-tag-blue">TailwindCSS</span>
            <span class="skill-tag skill-tag-blue">Quasar</span>
          </div>
        </div>
        <div class="skill-card reveal reveal-delay-2">
          <div class="flex items-center gap-2 mb-4">
            <span class="skill-icon skill-icon-green">⚙️</span>
            <h3 class="font-semibold">Backend</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="skill-tag skill-tag-green">Laravel</span>
            <span class="skill-tag skill-tag-green">NestJS</span>
            <span class="skill-tag skill-tag-green">AdonisJS</span>
            <span class="skill-tag skill-tag-green">Spring Boot</span>
            <span class="skill-tag skill-tag-green">Python 3</span>
            <span class="skill-tag skill-tag-green">Django</span>
            <span class="skill-tag skill-tag-green">Django REST</span>
          </div>
        </div>
        <div class="skill-card reveal reveal-delay-3">
          <div class="flex items-center gap-2 mb-4">
            <span class="skill-icon skill-icon-pink">🗄️</span>
            <h3 class="font-semibold">Datos & DevOps</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="skill-tag skill-tag-pink">PostgreSQL</span>
            <span class="skill-tag skill-tag-pink">MySQL</span>
            <span class="skill-tag skill-tag-pink">SQL Server</span>
            <span class="skill-tag skill-tag-pink">Docker</span>
            <span class="skill-tag skill-tag-pink">Nginx</span>
          </div>
        </div>
        <div class="skill-card reveal reveal-delay-4">
          <div class="flex items-center gap-2 mb-4">
            <span class="skill-icon skill-icon-amber">🔧</span>
            <h3 class="font-semibold">Herramientas</h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="skill-tag skill-tag-amber">GitHub</span>
            <span class="skill-tag skill-tag-amber">GitLab</span>
            <span class="skill-tag skill-tag-amber">ChartJS</span>
            <span class="skill-tag skill-tag-amber">Spatie</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Contacto -->
    <section id="contacto" class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid md:grid-cols-3 gap-8">
        <div class="reveal">
          <h2 class="text-2xl font-bold">Contacto</h2>
          <p class="mt-2 text-neutral-600 dark:text-neutral-300">¿Te interesa colaborar? Escríbeme y coordinamos una llamada.</p>
        </div>
        <form class="md:col-span-2 grid gap-4 reveal reveal-delay-2">
          <div class="grid sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Nombre" class="form-input" required>
            <input type="email" placeholder="Email" class="form-input" required>
          </div>
          <input type="text" placeholder="Asunto" class="form-input" required>
          <textarea rows="5" placeholder="Mensaje" class="form-input resize-none" required></textarea>
          <div class="flex items-center gap-3">
            <button type="submit" class="btn-primary">Enviar</button>
            <a href="mailto:danjel2014@gmail.com" class="text-sm hover:underline">o envía un correo</a>
          </div>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-neutral-200 dark:border-neutral-800">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
        <p>© {{ year }} Fernando Daniel Arratia. Hecho con Vue 3 + Tailwind CSS.</p>
        <div class="flex items-center gap-4">
          <a href="#inicio" class="hover:text-brand-600 transition-colors">Arriba ↑</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

const year = new Date().getFullYear()

// ── Typing effect ──────────────────────────────────────────────────────────────
const texts = [
  "Desarrollador FullStack",
  "Vue · React · Angular",
  "Python · Django · DRF",
  "NestJS · Laravel · APIs"
]
const displayedText = ref("")
let textIndex = 0
let charIndex = 0
let isDeleting = false

const typeEffect = () => {
  const current = texts[textIndex]
  if (!isDeleting) {
    displayedText.value = current.slice(0, charIndex + 1)
    charIndex++
    if (charIndex === current.length) {
      isDeleting = true
      setTimeout(typeEffect, 1800)
      return
    }
  } else {
    displayedText.value = current.slice(0, charIndex - 1)
    charIndex--
    if (charIndex === 0) {
      isDeleting = false
      textIndex = (textIndex + 1) % texts.length
    }
  }
  setTimeout(typeEffect, isDeleting ? 40 : 90)
}

// ── Scroll reveal ──────────────────────────────────────────────────────────────
const initScrollReveal = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible")
        }
      })
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  )
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el))
}

// ── Theme ──────────────────────────────────────────────────────────────────────
const storageKey = "theme"
const theme = ref("light")

const setTheme = (mode) => {
  theme.value = mode
  if (mode === "dark") document.documentElement.classList.add("dark")
  else document.documentElement.classList.remove("dark")
  localStorage.setItem(storageKey, mode)
}

onMounted(() => {
  const saved = localStorage.getItem(storageKey)
  if (saved) setTheme(saved)
  else if (window.matchMedia("(prefers-color-scheme: dark)").matches) setTheme("dark")
  else setTheme("light")

  setTimeout(typeEffect, 600)
  initScrollReveal()
})
</script>

<style>
html { scroll-behavior: smooth; }

/* ── Animated blobs ───────────────────────────────────────────────────────── */
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.13;
  pointer-events: none;
}
.blob-1 {
  width: 600px; height: 600px;
  background: radial-gradient(circle, #2563eb, #7c3aed);
  top: -150px; right: -80px;
  animation: blob1 9s ease-in-out infinite;
}
.blob-2 {
  width: 450px; height: 450px;
  background: radial-gradient(circle, #0ea5e9, #2563eb);
  bottom: -80px; left: -100px;
  animation: blob2 11s ease-in-out infinite;
}
.blob-3 {
  width: 320px; height: 320px;
  background: radial-gradient(circle, #7c3aed, #ec4899);
  top: 45%; left: 42%;
  animation: blob3 7s ease-in-out infinite;
}
@keyframes blob1 {
  0%,100% { transform: translate(0,0) scale(1); }
  33%      { transform: translate(-25px,20px) scale(1.06); }
  66%      { transform: translate(18px,-18px) scale(0.94); }
}
@keyframes blob2 {
  0%,100% { transform: translate(0,0) scale(1); }
  33%      { transform: translate(35px,-28px) scale(1.08); }
  66%      { transform: translate(-18px,18px) scale(0.93); }
}
@keyframes blob3 {
  0%,100% { transform: translate(-50%,-50%) scale(1); }
  50%      { transform: translate(-50%,-50%) scale(1.18); }
}

/* ── Hero animations ──────────────────────────────────────────────────────── */
.availability-badge {
  display: inline-flex;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 14px;
  border-radius: 9999px;
  background: rgba(37,99,235,0.1);
  color: #2563eb;
  border: 1px solid rgba(37,99,235,0.25);
  animation: fadeIn 0.5s ease both;
}
.dark .availability-badge {
  background: rgba(37,99,235,0.15);
  color: #93c5fd;
  border-color: rgba(37,99,235,0.3);
}

.text-gradient {
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 55%, #0ea5e9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-title    { animation: slideInLeft 0.8s 0.1s ease both; }
.hero-subtitle { animation: fadeInUp 0.7s 0.4s ease both; }
.hero-desc     { animation: fadeInUp 0.7s 0.6s ease both; }
.hero-actions  { animation: fadeInUp 0.7s 0.8s ease both; }
.hero-location { animation: fadeIn 0.7s 1s ease both; }
.hero-image    { animation: fadeIn 0.9s 0.3s ease both, floatUp 4s 1.4s ease-in-out infinite; }
.float-badge-1 { animation: fadeInUp 0.7s 1.2s ease both, floatUp 4.2s 2s ease-in-out infinite; }
.float-badge-2 { animation: fadeInUp 0.7s 1.4s ease both, floatUp 3.8s 2.5s ease-in-out infinite; }

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes floatUp {
  0%,100% { transform: translateY(0); }
  50%      { transform: translateY(-10px); }
}

/* ── Cursor blink ─────────────────────────────────────────────────────────── */
@keyframes blink {
  0%,100% { opacity: 1; }
  50%      { opacity: 0; }
}
.cursor {
  color: #2563eb;
  font-weight: 100;
  animation: blink 0.9s step-end infinite;
}

/* ── Scroll reveal ────────────────────────────────────────────────────────── */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.65s ease, transform 0.65s ease;
}
.reveal.is-visible { opacity: 1; transform: translateY(0); }
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }
.reveal-delay-4 { transition-delay: 0.4s; }

/* ── Stat cards ───────────────────────────────────────────────────────────── */
.stat-card {
  display: flex;
  flex-direction: column;
  padding: 14px 18px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  box-shadow: 0 4px 14px -4px rgba(0,0,0,0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.stat-card:hover { transform: translateY(-3px); box-shadow: 0 8px 20px -4px rgba(37,99,235,0.15); }
.dark .stat-card { background: #171717; border-color: #262626; }
.stat-number {
  font-size: 1.9rem;
  font-weight: 800;
  line-height: 1;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.stat-label { font-size: 0.72rem; color: #6b7280; font-weight: 500; margin-top: 4px; }

/* ── Experience cards ─────────────────────────────────────────────────────── */
.experience-card {
  padding: 24px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  box-shadow: 0 4px 20px -8px rgba(0,0,0,0.1);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.dark .experience-card { background: #171717; border-color: #262626; }
.experience-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 14px 32px -8px rgba(37,99,235,0.18);
}
.badge-role {
  font-size: 0.68rem;
  padding: 3px 10px;
  border-radius: 9999px;
  background: rgba(37,99,235,0.1);
  color: #1d4ed8;
  border: 1px solid rgba(37,99,235,0.2);
  font-weight: 600;
  white-space: nowrap;
}
.dark .badge-role { background: rgba(37,99,235,0.15); color: #93c5fd; border-color: rgba(37,99,235,0.3); }

/* ── Project cards ────────────────────────────────────────────────────────── */
.project-card {
  display: block;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  background: white;
  box-shadow: 0 4px 20px -8px rgba(0,0,0,0.1);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.dark .project-card { background: #171717; border-color: #262626; }
.project-card:hover {
  transform: translateY(-6px) scale(1.01);
  box-shadow: 0 18px 40px -8px rgba(37,99,235,0.2);
}
.project-card:hover h3 { color: #2563eb; }

/* ── Skill cards ──────────────────────────────────────────────────────────── */
.skill-card {
  padding: 20px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  box-shadow: 0 4px 20px -8px rgba(0,0,0,0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.dark .skill-card { background: #171717; border-color: #262626; }
.skill-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px -8px rgba(37,99,235,0.15);
}
.skill-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px; height: 34px;
  border-radius: 8px;
  font-size: 1.1rem;
  flex-shrink: 0;
}
.skill-icon-blue  { background: #dbeafe; }
.skill-icon-green { background: #d1fae5; }
.skill-icon-pink  { background: #fce7f3; }
.skill-icon-amber { background: #fef3c7; }

.skill-tag {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 9999px;
  font-weight: 500;
  font-size: 0.7rem;
}
.skill-tag-blue  { background: #dbeafe; color: #1e40af; }
.skill-tag-green { background: #d1fae5; color: #065f46; }
.skill-tag-pink  { background: #fce7f3; color: #9d174d; }
.skill-tag-amber { background: #fef3c7; color: #92400e; }
.dark .skill-tag-blue  { background: rgba(37,99,235,0.15);  color: #93c5fd; }
.dark .skill-tag-green { background: rgba(6,95,70,0.2);     color: #6ee7b7; }
.dark .skill-tag-pink  { background: rgba(157,23,77,0.15);  color: #f9a8d4; }
.dark .skill-tag-amber { background: rgba(146,64,14,0.2);   color: #fcd34d; }

/* ── Buttons ──────────────────────────────────────────────────────────────── */
.btn-primary {
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  background: #2563eb;
  color: white;
  padding: 10px 22px;
  font-size: 0.875rem;
  font-weight: 600;
  box-shadow: 0 4px 14px -2px rgba(37,99,235,0.4);
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
}
.btn-primary:hover {
  background: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: 0 8px 22px -2px rgba(37,99,235,0.5);
}
.btn-secondary {
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  border: 1.5px solid #d1d5db;
  padding: 10px 22px;
  font-size: 0.875rem;
  font-weight: 600;
  transition: border-color 0.2s, color 0.2s, transform 0.2s;
}
.dark .btn-secondary { border-color: #3f3f46; }
.btn-secondary:hover { border-color: #2563eb; color: #2563eb; transform: translateY(-2px); }

/* ── Form ─────────────────────────────────────────────────────────────────── */
.form-input {
  width: 100%;
  border-radius: 12px;
  border: 1.5px solid #e5e7eb;
  background: white;
  padding: 12px 16px;
  font-size: 0.875rem;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.dark .form-input { background: #171717; border-color: #3f3f46; color: #f5f5f5; }
.form-input:focus { border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37,99,235,0.12); }
.form-input::placeholder { color: #9ca3af; }
</style>
