<!-- SUPER SIMPLE HERO – 100% unbreakable -->
<section class="relative h-screen flex items-center justify-center text-center overflow-hidden bg-black">
  <!-- Background photos (changes every 6 seconds) -->
  <div id="bg-slider" class="absolute inset-0">
    <div class="bg-photo active" style="background-image:url('https://images.unsplash.com/photo-1559416522-0619d5661e64?auto=format&fit=crop&q=90')"></div>
    <div class="bg-photo" style="background-image:url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=90')"></div>
    <div class="bg-photo" style="background-image:url('https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=90')"></div>
    <div class="bg-photo" style="background-image:url('https://images.unsplash.com/photo-1544636331-8313b20a9fd9?auto=format&fit=crop&q=90')"></div>
  </div>

  <!-- Dark overlay so text stays readable -->
  <div class="absolute inset-0 bg-black/60"></div>

  <!-- Content -->
  <div class="relative z-10 px-6">
    <h1 id="rotating-headline" class="text-5xl md:text-7xl font-black text-amber-400 mb-8">
      Save $3,000+ on Your Next Car — Guaranteed
    </h1>
    <p class="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12">
      Ex-dealer turned buyer advocate. I negotiate your car deal so you save thousands — or it’s free.
    </p>
    <div class="flex flex-col sm:flex-row gap-6 justify-center">
      <a href="#newsletter" class="bg-amber-400 text-black px-12 py-6 rounded-full text-xl font-bold hover:bg-amber-300 transition">
        Free Quote Review
      </a>
      <a href="#pricing" class="border-2 border-amber-400 text-amber-400 px-12 py-6 rounded-full text-xl font-bold hover:bg-amber-400 hover:text-black transition">
        View Pricing
      </a>
    </div>
  </div>
</section>

<!-- Tiny vanilla JS – 12 lines, no dependencies -->
<script>
  const headlines = [
    "Save $3,000+ on Your Next Car — Guaranteed",
    "Ex-Dealer Negotiates Your Best Price",
    "No Haggling. No Games. Just Results.",
    "Nebraska’s Only Independent Buyer Advocate"
  ];
  let i = 0;
  setInterval(() => {
    document.getElementById("rotating-headline").style.opacity = 0;
    setTimeout(() => {
      i = (i + 1) % headlines.length;
      document.getElementById("rotating-headline").textContent = headlines[i];
      document.getElementById("rotating-headline").style.opacity = 1;
    }, 500);
  }, 4000);

  // Background slider
  const photos = document.querySelectorAll(".bg-photo");
  let current = 0;
  setInterval(() => {
    photos[current].classList.remove("active");
    current = (current + 1) % photos.length;
    photos[current].classList.add("active");
  }, 6000);
</script>

<style>
  .bg-photo {
    position: absolute; inset: 0; background-size: cover; background-position: center;
    opacity: 0; transition: opacity 2s ease-in-out;
  }
  .bg-photo.active { opacity: 1; }
  #rotating-headline { transition: opacity 0.5s; }
</style>
