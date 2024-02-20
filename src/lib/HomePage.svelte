<script>
  let section1Grid = `
  ". . . . . title title title title title title title"
  "photo1 photo1 photo1 photo1 . title title title title title title title"
  "photo1 photo1 photo1 photo1 . . names names names names . ."
  ". . photo2 photo2 photo2 . names names names names . ."
  ". . photo2 photo2 photo2 . names names names names . ."
  ". . photo2 photo2 photo2 . names names names names . ."
  ". . . . . time time time time time time time"
  ". . . . . time time time time time time time"
  `;
  let gridConfig = `
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(8, 1fr);
    grid-template-areas: ${section1Grid};
  `;
  let pageTitle = "Save The Date";
</script>

<div class="pl-5 pt-10 grid" style={gridConfig}>
  <div class="flex justify-center items-center" style={"grid-area: title"}>
    <h1 class="text-center">{pageTitle}</h1>
  </div>
  <div class="w-full h-full bg-white" style={"grid-area: photo1"}></div>
  <div class="" style={"grid-area: names"}>
    <h1>Matthew & Jessie</h1>
  </div>
  <div class="w-full h-full bg-white" style={"grid-area: photo2"}></div>
  <div class="" style={"grid-area: time"}>
    <h1>May 05, 2024</h1>
  </div>
</div>
