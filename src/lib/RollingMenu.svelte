<script>
  import { Motion, useElementScroll, useTransform, useViewportScroll } from "svelte-motion";

  let ref;
  const val = useElementScroll(ref);
  const i = val.scrollY;
  const j = useTransform(val.scrollXProgress, (x) => 1.1 - x);
  const { scrollYProgress } = useViewportScroll();

  console.log(scrollYProgress.getVelocity());
</script>

<div bind:this={ref} class="scroller">
  <div class="inner"></div>
</div>
<Motion style={{ rotate: i, scale: j }} let:motion>
  <div use:motion>{Math.round(100 * $scrollYProgress)}%</div>
</Motion>

<style>
  .scroller {
    position: absolute;
    overflow: scroll;
    display: inline-block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .inner {
    width: 500px;
    height: 500px;
  }
</style>
