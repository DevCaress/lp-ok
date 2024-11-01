<script setup lang="ts">
import insight1 from '~/public/insight1.png'
import insight2 from '~/public/insight2.png'
import insight3 from '~/public/insight3.png'
import insight4 from '~/public/insight4.png'
import insight5 from '~/public/insight5.png'
import insight6 from '~/public/insight6.png'

import Mexico from '~/components/flag/Mexico.vue'
import Portugal from '~/components/flag/Portugal.vue'
import PuertoRico from '~/components/flag/Puertorico.vue'
import Colombia from '~/components/flag/Colombia.vue'
import USA from '~/components/flag/Usa.vue'
import Spain from '~/components/flag/Spain.vue'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import { ref, reactive, onMounted, onUnmounted } from 'vue'

const imgs = [
  { src: insight1, text: 'en ventas a clientes inactivos durante 2023', number1: '+$', number2: ' MDP', target: 80 },
  { src: insight2, text: 'Tasa de conversión promedio a contactos por WhatsApp', number1: '', number2: '%', target: 14 },
  { src: insight3, text: 'Incremento en conversión al evitar negar producto', number1: '', number2: '%', target: 10 },
  { src: insight4, text: 'Incremento en ticket promedio', number1: '', number2: '%', target: 40 },
  { src: insight5, text: 'Vendidos por Orkestra durante 2023', number1: '', number2: ' MDP', target: 140 },
  { src: insight6, text: 'Formaliza y monitorea la totalidad de esfuerzos de prospección', number1: '', number2: ' %', target: 100 },
]

const countries = [
  { src: Mexico, text: 'México' },
  { src: Portugal, text: 'Portugal' },
  { src: PuertoRico, text: 'Puerto Rico' },
  { src: Colombia, text: 'Colombia' },
  { src: USA, text: 'E.U.A.' },
  { src: Spain, text: 'España' },
]


const config = {
  autoplay: 2000,
  wrapAround: true,
  pauseAutoplayOnHover: true,
};


// Reactive variables
const displayValues = ref(imgs.map(() => 0)) // Initialize all counters to 0
const counterSections = ref([]) // Store references to each .number section

// Animation function
function animateCounter(target, index) {
  const startTime = performance.now()
  const duration = 2000

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    displayValues.value[index] = Math.floor(progress * target)

    if (progress < 1) {
      requestAnimationFrame(updateCounter)
    }
  }

  requestAnimationFrame(updateCounter)
}

// Intersection Observer for each item in `counters`
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = counterSections.value.indexOf(entry.target)
          animateCounter(imgs[index].target, index)
          observer.unobserve(entry.target) // Stop observing once animated
        }
      })
    },
    { threshold: 0.5 } // Adjust threshold as needed
  )

  // Observe each section in `counterSections`
  counterSections.value.forEach((section) => observer.observe(section))
})



const responsiveNumber = ref(5)

const updateNumber = () => {
  responsiveNumber.value = window?.innerWidth <= 768 ? 1.5 : 5
}

updateNumber()

onMounted(() => {
  window.addEventListener('resize', updateNumber)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateNumber)
})

</script>
<template>
  <main>
    <section class="home">
      <div class="container">
        <div class="text">
          <div>
            <p class="title main-title">
              Habilitamos nuevas formas de vender
            </p>
            <p class="desc">
              Las ventas requeridas en Retail son cada vez mayores.
            </p>
            <p class="desc">
              Entendemos que para lograrlas, el tráfico existente, las herramientas y soluciones tradicionales son
              insuficientes.
            </p>
          </div>
          <div>
            <a href="https://api.whatsapp.com/send?phone=+523331892418&text=Hola+estoy+interesado+en+una+demo+de+Orkestra" target="_blank">
              <button class="btn">
                Agenda una demo
              </button>
            </a>
          </div>
        </div>
        <div class="gif animate__animated animate__fadeInLeft">
          <figure>
            <img src="~/public/home1.gif" alt="">
          </figure>
        </div>
      </div>
      <div class="brands container">
        <p class="title main-title">
          Impulsando el crecimiento del Retail EN <span>MÁS DE 1,400 </span>TIENDAS
        </p>

        <carousel v-bind="config" :items-to-show="responsiveNumber" :items-to-scroll="1">
          <slide v-for="(slide, index) in 17" :key="slide">
            <div class="slider">
              <figure>
                <img :src="`${useRuntimeConfig().public.baseURL}brands/${index + 1}.png`" alt="">
              </figure>
            </div>
          </slide>
        </carousel>
      </div>
      <div class="testimonials container">
        <p class="title">Testimonios</p>

        <carousel :items-to-show="1" :items-to-scroll="1">
          <slide v-for="slide in 10" :key="slide">
            <div class="slider">
              <p class="title">
                Paula Robles, Gerente Gran Vía:
              </p>
              <p class="desc">
                “Orkestra nos ayuda a no limitarnos a que el cliente llegue y podamos venderle. Definitivamente Orkestra
                me
                está
                ayudando a generar más ventas”.
              </p>
            </div>
          </slide>

          <template #addons>
            <pagination />
          </template>
        </carousel>

      </div>
    </section>
    <section class="data">
      <div class="container">
        <p class="title main-title"><span>Liberamos el potencial</span> de tus datos al transformarlos en ventas</p>
      </div>

      <div class="video container" controls>
        <div class="video-container">
          <video src="~/public/video1.mp4" controls poster="~/public/poster1.png">
            Tu navegador no admite el elemento <code>video</code>.
          </video>
        </div>

      </div>

      <div class="gif-1 gif container">
        <Animate v-bind:scroll="true" animation="animate__fadeInLeft">
          <div>
            <figure>
              <img src="~/public/gif1.gif" alt="">
            </figure>
          </div>
        </Animate>
        <Animate v-bind:scroll="true" animation="animate__fadeInRight">
          <div class="text">
            <p class="title main-title">Potente IA de análisis y sugerencia de clientes</p>
            <p class="desc">Activa y parametriza los motivos de sugerencia existentes en Orkestra; adicionalmente
              configura motivos personalizados a tu marca.</p>
            <!-- <a href="">Ver más</a> -->
          </div>
        </Animate>
      </div>

      <div class="gif-2 gif container">
        <Animate v-bind:scroll="true" animation="animate__fadeInLeft">
          <div class="text">
            <p class="title main-title">Genera tus oportunidades de venta</p>
            <p class="desc">
              Con base a los diversos motivos configurados, Orkestra sugiere una parte de tus clientes a cada vendedor,
              para vender por WhatsApp ó invitarlos a la tienda, permitiéndoles así a incrementar su tráfico...
            </p>
            <!-- <a href="">Ver más</a> -->
          </div>
        </Animate>
        <Animate v-bind:scroll="true" animation="animate__fadeInRight">
          <div>
            <figure>
              <img src="~/public/gif2.gif" alt="">
            </figure>
          </div>
        </Animate>
      </div>

      <div class="gif-3 gif container">
        <Animate v-bind:scroll="true" animation="animate__fadeInLeft">
          <div>
            <figure>
              <img src="~/public/gif3.gif" alt="">
            </figure>
          </div>
        </Animate>
        <Animate v-bind:scroll="true" animation="animate__fadeInRight">
          <div class="text">
            <p class="title main-title">Contacto Inicial Automatizado</p>
            <p class="desc">
              ...la otra parte de tus clientes es contactada automáticamente acompañado de sugerencias de productos para
              amplificar oportunidades.
            </p>
            <p class="desc">
              Si el cliente muestra interés, es dirigido con su asesor para un seguimiento personalizado.
            </p>
            <div class="powerd-by">
              <p>ADDON POWERED BY:</p>
              <figure>
                <img src="~/public/logo_zenvia.png" alt="">
              </figure>
              <figure>
                <img src="~/public/logo-auronix.png" alt="">
              </figure>
            </div>
            <!-- <a href="">Ver más</a> -->
          </div>
        </Animate>
      </div>
    </section>
    <section class="data-2">
      <div class="flex">
        <div class="line"></div>
        <p class="title main-title">
          Vende a Distancia, <span>Sé Imparable</span>
        </p>
        <div class="line"></div>
      </div>

      <div class="video container" controls>
        <div class="video-container">
          <video src="~/public/video2.mp4" controls poster="~/public/poster2.png">
            Tu navegador no admite el elemento <code>video</code>.
          </video>
        </div>

      </div>

      <div class="gif-1 gif container">
        <Animate v-bind:scroll="true" animation="animate__zoomInLeft">
          <div>
            <figure>
              <img src="~/public/gif4.gif" alt="">
            </figure>
          </div>
        </Animate>
        <Animate v-bind:scroll="true" animation="animate__zoomIn">
          <div class="text">
            <p class="title main-title">Descubre la magia de las ventas personalizadas creando catálogos shoppeables</p>
            <p class="desc">
              Asombra a tu cliente sugiriendo productos acorde a sus gustos con relación a sus compras anteriores.
            </p>
            <p class="desc">
              Encuentra de inmediato productos con el buscador y escáner de Orkestra y vende a distancia agregándolos al
              carrito y compartiendo el catálogo a tu cliente.
            </p>
            <!-- <a href="">Ver más</a> -->
          </div>
        </Animate>
      </div>

      <div class="gif-2 gif container">
        <Animate v-bind:scroll="true" animation="animate__zoomInRight">
          <div class="text">
            <p class="title main-title">Crea ligas de pago</p>
            <p class="desc">
              Vende a distancia creando y compartiendo ligas de pago de las principales pasarelas del mercado directo en
              Orkestra.
            </p>
            <div class="payments">
              <figure v-for="(item, index) in 6" :key="index">
                <img :src="`${useRuntimeConfig().public.baseURL}payments/${index + 1}.png`" alt="">
              </figure>
            </div>
            <!-- <a href="">Ver más</a> -->
          </div>
        </Animate>
        <Animate v-bind:scroll="true" animation="animate__zoomIn">
          <div>
            <figure>
              <img src="~/public/gif5.gif" alt="">
            </figure>
          </div>
        </Animate>
      </div>

      <div class="flex-2">
        <div class="line"></div>
        <p class="title main-title">
          Medición, trazabilidad y atribución precisa de <span>esfuerzos de prospección</span>
        </p>
        <div class="line"></div>
      </div>

      <div class="gif-3 gif container">
        <Animate v-bind:scroll="true" animation="animate__zoomInLeft">
          <div>
            <figure>
              <img src="~/public/gif6.gif" alt="">
            </figure>
          </div>
        </Animate>
        <Animate v-bind:scroll="true" animation="animate__zoomIn">
          <div class="text">
            <p class="title main-title">Agenda del vendedor</p>
            <p class="desc">
              Desde su agenda Orkestra, cada vendedor gestiona sus contactos a realizar, seguimientos por hacer, y
              visualiza
              sus prospecciones convertidas en venta. </p>
            <!-- <a href="">Ver más</a> -->
          </div>
        </Animate>
      </div>

      <div class="gif-2 gif container">
        <Animate v-bind:scroll="true" animation="animate__zoomIn">
          <div class="text">
            <p class="title main-title">Monitorea el desempeño de tus asesores</p>
            <p class="desc">
              Toda interacción queda registrada para el control monitoreo y supervisión.
            </p>
            <p class="desc">
              Trazabilidad y reporteo, desde la asignación del cliente hasta el cierre de la venta, sin importar el
              canal
              donde se concretó.
            </p>
            <!-- <a href="">Ver más</a> -->
          </div>
        </Animate>
        <Animate v-bind:scroll="true" animation="animate__zoomInRight">
          <div>
            <figure>
              <img src="~/public/gif7.gif" alt="">
            </figure>
          </div>
        </Animate>
      </div>
    </section>
    <section class="sales">

      <div class="insights ">
        <div class="gradient">
          <Animate v-bind:scroll="true" animation="animate__bounceIn">
            <div class="container">
              <div class="insight" v-for="(img, index) in imgs" :key="index" :ref="el => counterSections[index] = el"
                :class="{ 'border-right': index != 2 && index != 5 }">
                <figure>
                  <img :src="img.src" alt="">
                </figure>
                <div class="number">
                  <p>{{ img.number1 }} <span class="counter">{{ displayValues[index] }}</span> {{ img.number2
                    }}
                  </p>
                </div>
                <div class="text">
                  <p>{{ img.text }}</p>
                </div>
              </div>
            </div>
          </Animate>
        </div>
      </div>
      <Animate v-bind:scroll="true" animation="animate__headShake">
        <div class="countries container">

          <p class="title">Con presencia en 6 países:</p>

          <div class="">
            <div class="country" v-for="(country, index) in countries" :key="index">
              <component :is="country.src" />
              <div class="text">
                <p> {{ country.text }} </p>
              </div>
            </div>
          </div>
        </div>
      </Animate>
      <div class="increase-sales">
        <p class="title main-title">Así, imposible que no incrementes tus ventas</p>
        <p class="text">
          Durante 2023, contribuimos en promedio en el <br>
          <span class="main-title">20% de las ventas totales</span> <br>
          de nuestros clientes.
        </p>
      </div>
      <div class="img-people">
        <ImgPeople />
      </div>
    </section>
  </main>
</template>