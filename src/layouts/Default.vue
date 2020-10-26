<template>
  <div class="layout flex">
    <div class="fixed">
      <Nav class="nav h-screen"/>
    </div>
    <div class="pages relative w-full">
      <TopBar/>
      <slot/>
    </div>

  </div>
</template>
<script>
import Nav from '~/components/Navigation/Nav'
import TopBar from "~/components/Navigation/TopBar";

export default {
  components: {
    Nav,
    TopBar
  }

}
</script>

<style>
body {
  font-family: Normal, serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  @apply bg-theme-azure;
}

@font-face {
  font-family: Bold;
  src: url('../assets/fonts/Product Sans Bold 700.ttf');
  font-weight: normal;
}


@font-face {
  font-family: Normal;
  src: url('../assets/fonts/Product Sans 400.ttf');
  font-weight: normal;
}


.nav {
  width: 195px;
}

.pages {
  margin-left: 195px
}


</style>
