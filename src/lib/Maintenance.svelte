<script>
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
</script>

<div class="h-dvh w-full flex">
  <div class="max-w-[1920px] w-full h-full mx-auto flex flex-col text-center pt-20">
    <div>
      <h1 transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: "x" }}>
        Welcome to our wedding page!
      </h1>
      <h2>The site is in construction</h2>
    </div>
  </div>
</div>
