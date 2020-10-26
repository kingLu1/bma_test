<template>
  <div class="Navigation bg-theme-ebony">
    <div class="logo pt-8 pb-16 px-6">
      <p class="text-white text-3xl">Logo</p>
    </div>
    <div v-for="route in routePoint" v-bind:key="route.name">
      <g-link :to='route.path' class="flex links">
        <g-image :src="route.icon" class="mr-4"></g-image>
        {{ route.name }}
      </g-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "Nav",
  data: () => ({
    routePoint: [
      {
        name: 'Dashboard',
        path: '/',
        icon: require('../../assets/svg/window.svg'),
      },
      {
        name: 'Clients',
        path: '/clients',
        icon: require('../../assets/svg/company.svg'),
      },
      {
        name: 'Campaigns',
        path: '/campaign',
        icon: require('../../assets/svg/campaign.svg'),
      },
      {
        name: 'Audience',
        path: '/audience',
        icon: require('../../assets/svg/target.svg'),
      },
      {
        name: 'Games',
        path: '/games',
        icon: require('../../assets/svg/dice.svg'),
      },
      {
        name: 'Redemption',
        path: '/redemption',
        icon: require('../../assets/svg/coupon.svg'),
      }
    ]
  }),
}
</script>

<style scoped>
.links {
  @apply p-4 flex items-center text-white border-b border-theme-dim_gray;
}

.active {
  @apply text-theme-navy_blue bg-white !important;
}
</style>
