<!-- CUTTING-EDGE HERO WITH PHOTO SLIDESHOW + SMOOTH TEXT FADE -->
<section class="relative h-screen overflow-hidden">
  <!-- Background Slideshow (parallax zoom) -->
  <div x-data="slideshow()" class="absolute inset-0">
    <template x-for="(slide, index) in slides" :key="index">
      <div 
        x-show="current === index"
        x-transition:enter="transition ease-out duration-2000"
        x-transition:enter-start="opacity-0 scale-105"
        x-transition:enter-end="opacity-100 scale-100"
        x-transition:leave="transition ease-in duration-1500"
        x-transition:leave-start="opacity-100 scale-100"
        x-transition:leave-end="opacity-0 scale-95"
        class="absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url('${slide}')` }"
      ></div>
    </template>
    
    <!-- Dark overlay for text readability -->
    <div class="absolute inset-0 bg-black/50"></div>
  </div>

  <!-- Rotating Headlines + CTA -->
  <div class="relative h-full flex items-center justify-center text-center px-6">
    <div x-data="{ headlines: [
        'Save $3,000+ on Your Next Car — Guaranteed',
        'Ex-Dealer Negotiates Your Best Price',
        'No Haggling. No Games. Just Results.',
        'Nebraska’s Only Independent Buyer Advocate'
      ], index: 0 }"
      x-init="setInterval(() => index = (index + 1) % headlines.length, 4500)">
      
      <h1 class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-8 leading-tight">
        <span x-text="headlines[index]"
              x-transition:enter="transition ease-out duration-1000"
              x-transition:enter-start="opacity-0 -translate-y-10"
              x-transition:enter-end="opacity-100 translate-y-0"
              class="block"></span>
      </h1>
      
      <p class="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12">
        Ex-dealer turned buyer advocate. I negotiate your car deal so you save thousands — or it’s free.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-6 justify-center">
        <a href="#newsletter" class="bg-amber-400 text-black px-12 py-6 rounded-full text-xl font-bold hover:bg-amber-300 transition shadow-2xl transform hover:scale-105">
          Free Quote Review
        </a>
        <a href="#pricing" class="border-4 border-amber-400 text-amber-400 px-12 py-6 rounded-full text-xl font-bold hover:bg-amber-400 hover:text-black transition backdrop-blur-sm">
          View Pricing
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Alpine.js Script for Slideshow (put just before </body>) -->
<script>
function slideshow() {
  return {
    current: 0,
    slides: [
      'https://images.unsplash.com/photo-1559416522-0619d5661e64?auto=format&fit=crop&q=90',
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=90',
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=90',
      'https://images.unsplash.com/photo-1544636331-8313b20a9fd9?auto=format&fit=crop&q=90',
      'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=90'
    ],
    next() {
      this.current = (this.current + 1) % this.slides.length
    },
    init() {
      setInterval(() => this.next(), 6000)  // Change photo every 6 sec
    }
  }
}
</script>
