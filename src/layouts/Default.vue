<template>
  <div class="flex layout">
    <div class="fixed">
      <Nav class="h-screen nav"/>
    </div>
    <div class="relative w-full pages">
      <TopBar/>
      <slot/>
    </div>
  </div>
</template>
<script>
import Nav from '~/components/Navigation/Nav'
import TopBar from "~/components/Navigation/TopBar";
import {mapActions} from "vuex";

export default {
  components: {
    Nav,
    TopBar
  },
  methods: {
    ...mapActions({
      getUser: 'getUser',
      getRoles: 'getRoles',
    }),
  },

  created() {
    // Get Jsons from Server
    this.getUser()
    this.getRoles()
    // Get Jsons from Server
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
