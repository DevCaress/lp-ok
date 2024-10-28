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

import { ref, onMounted, onUnmounted  } from 'vue'

const imgs = [
  { src: insight1, text: 'en ventas a clientes inactivos durante 2023', number: '+$80 MDP' },
  { src: insight2, text: 'Tasa de conversión promedio a contactos por WhatsApp', number: '14%' },
  { src: insight3, text: 'Incremento en conversión al evitar negar producto', number: '10%' },
  { src: insight4, text: 'Incremento en ticket promedio', number: '40%' },
  { src: insight5, text: 'Vendidos por Orkestra durante 2023', number: '$140 MDP' },
  { src: insight6, text: 'Formaliza y monitorea la totalidad de esfuerzos de prospección', number: '100%' },
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
            <p class="title">
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
            <button class="btn">
              Agenda una demo
            </button>
          </div>
        </div>
        <div class="gif">
          <figure>
            <img src="~/public/home1.gif" alt="">
          </figure>
        </div>
      </div>
      <div class="brands container">
        <p class="title">
          Impulsando el crecimiento del Retail EN <span>MÁS DE 1,400 </span>TIENDAS
        </p>

        <carousel v-bind="config" :items-to-show="responsiveNumber" :items-to-scroll="1">
          <slide v-for="(slide, index) in 17" :key="slide">
            <div class="slider">
              <figure>
                <img :src="`/brands/${index + 1}.png`" alt="">
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
        <p class="title"><span>Liberamos el potencial</span> de tus datos al transformarlos en ventas</p>
      </div>

      <div class="video container" controls>
        <div class="video-container">
          <video src="~/public/video1.mp4" controls>
            Tu navegador no admite el elemento <code>video</code>.
          </video>
        </div>

      </div>

      <div class="gif-1 gif container">
        <div>
          <figure>
            <img src="~/public/gif1.gif" alt="">
          </figure>
        </div>
        <div class="text">
          <p class="title">Potente IA de análisis y sugerencia de clientes</p>
          <p class="desc">Activa y parametriza los motivos de sugerencia existentes en Orkestra; adicionalmente
            configura motivos personalizados a tu marca.</p>
          <a href="">Ver más</a>
        </div>
      </div>

      <div class="gif-2 gif container">

        <div class="text">
          <p class="title">Genera tus oportunidades de venta</p>
          <p class="desc">
            Con base a los diversos motivos configurados, Orkestra sugiere una parte de tus clientes a cada vendedor,
            para vender por WhatsApp ó invitarlos a la tienda, permitiéndoles así a incrementar su tráfico...
          </p>
          <a href="">Ver más</a>
        </div>
        <div>
          <figure>
            <img src="~/public/gif2.gif" alt="">
          </figure>
        </div>
      </div>

      <div class="gif-3 gif container">
        <div>
          <figure>
            <img src="~/public/gif3.gif" alt="">
          </figure>
        </div>
        <div class="text">
          <p class="title">Contacto Inicial Automatizado</p>
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
          <a href="">Ver más</a>
        </div>
      </div>
    </section>
    <section class="data-2">
      <div class="flex">
        <div class="line"></div>
        <p class="title">
          Vende a Distancia, <span>Sé Imparable</span>
        </p>
        <div class="line"></div>
      </div>

      <div class="video container" controls>
        <div class="video-container">
          <video src="~/public/video2.mp4" controls>
            Tu navegador no admite el elemento <code>video</code>.
          </video>
        </div>

      </div>

      <div class="gif-1 gif container">
        <div>
          <figure>
            <img src="~/public/gif4.gif" alt="">
          </figure>
        </div>
        <div class="text">
          <p class="title">Descubre la magia de las ventas personalizadas creando catálogos shoppeables</p>
          <p class="desc">
            Asombra a tu cliente sugiriendo productos acorde a sus gustos con relación a sus compras anteriores.
          </p>
          <p class="desc">
            Encuentra de inmediato productos con el buscador y escáner de Orkestra y vende a distancia agregándolos al
            carrito y compartiendo el catálogo a tu cliente.
          </p>
          <a href="">Ver más</a>
        </div>
      </div>

      <div class="gif-2 gif container">

        <div class="text">
          <p class="title">Crea ligas de pago</p>
          <p class="desc">
            Vende a distancia creando y compartiendo ligas de pago de las principales pasarelas del mercado directo en
            Orkestra.
          </p>
          <div class="payments">
            <figure v-for="(item, index) in 6" :key="index">
              <img :src="`/payments/${index + 1}.png`" alt="">
            </figure>
          </div>
          <a href="">Ver más</a>
        </div>
        <div>
          <figure>
            <img src="~/public/gif5.gif" alt="">
          </figure>
        </div>
      </div>

      <div class="flex-2">
        <div class="line"></div>
        <p class="title">
          Medición, trazabilidad y atribución precisa de <span>esfuerzos de prospección</span>
        </p>
        <div class="line"></div>
      </div>

      <div class="gif-3 gif container">
        <div>
          <figure>
            <img src="~/public/gif6.gif" alt="">
          </figure>
        </div>
        <div class="text">
          <p class="title">Agenda del vendedor</p>
          <p class="desc">
            Desde su agenda Orkestra, cada vendedor gestiona sus contactos a realizar, seguimientos por hacer, y
            visualiza
            sus prospecciones convertidas en venta. </p>
          <a href="">Ver más</a>
        </div>
      </div>

      <div class="gif-2 gif container">

        <div class="text">
          <p class="title">Monitorea el desempeño de tus asesores</p>
          <p class="desc">
            Toda interacción queda registrada para el control monitoreo y supervisión.
          </p>
          <p class="desc">
            Trazabilidad y reporteo, desde la asignación del cliente hasta el cierre de la venta, sin importar el canal
            donde se concretó.
          </p>
          <a href="">Ver más</a>
        </div>
        <div>
          <figure>
            <img src="~/public/gif7.gif" alt="">
          </figure>
        </div>
      </div>
    </section>
    <section class="sales">
      <div class="insights ">
        <div class="gradient">
          <div class="container">
            <div class="insight"
              :class="{ 'border-right' : index != 2 && index != 5}"
              v-for="(img, index) in imgs" :key="index">
              <figure>
                <img :src="img.src" alt="">
              </figure>
              <div class="number">
                <p>{{ img.number }}</p>
              </div>
              <div class="text">
                <p>{{ img.text }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
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
      <div class="increase-sales">
        <p class="title">Así, imposible que no incrementes tus ventas</p>
        <p class="text">
          Durante 2023, contribuimos en promedio en el <br>
          <span>20% de las ventas totales</span> <br>
          de nuestros clientes.
        </p>
      </div>
      <div class="img-people">
        <ImgPeople />
      </div>
    </section>
  </main>
</template>