<script>
  import HomePage from "$lib/HomePage.svelte";
  import Maintenance from "$lib/Maintenance.svelte";
  import RollingMenu from "$lib/RollingMenu.svelte";

  const isMaintenance = true;
</script>

{#if isMaintenance}
  <Maintenance />
{:else}
  <div class="h-dvh w-full flex">
    <div class="max-w-[1920px] w-full h-full mx-auto flex">
      <div class="w-[80%] h-full mx-auto flex">
        <HomePage />
      </div>
      <div class="w-[20%]">
        <RollingMenu />
      </div>
    </div>
  </div>
{/if}
