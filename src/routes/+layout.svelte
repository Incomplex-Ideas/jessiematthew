<script lang="ts">
  import "../fonts.css";
  import "../app.css";
  import { SvelteUIProvider, type SvelteUITheme, colorScheme, createStyles } from "@svelteuidev/core";

  colorScheme.set("dark");

  const useStyles = createStyles((theme: SvelteUITheme) => {
    return {
      root: {
        [`${theme.dark} &`]: {
          bc: "#212c40",
          color: "#fff",
        },
      },
    };
  });

  let pageTitle = "Matthew & Jessie";
  let metadescription = "Matthew & Jessie's wedding";

  $: ({ getStyles } = useStyles());
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={metadescription} />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
</svelte:head>

<SvelteUIProvider themeObserver={"dark"}>
  <div class={getStyles()}>
    <slot />
  </div>
</SvelteUIProvider>

<style>
  :global(body) {
    min-width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #212c40;
  }
  :global(html) {
    background-color: #212c40;
    min-height: 100vh;
  }
  :global(h1) {
    font-size: 5rem;
    font-weight: 600;
    margin: 0;
    color: #ffc000;
  }
  :global(h2) {
    font-size: 4rem;
    font-weight: 600;
    margin: 0;
    color: #ffc000;
  }
  :global(h3) {
    font-size: 3rem;
    font-weight: 600;
    margin: 0;
    color: #ffc000;
  }
  :global(h4) {
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
    color: #ffc000;
  }

  :global(h5) {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
    color: #ffc000;
  }
</style>
