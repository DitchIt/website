<template>
<LMap class="map"
  :zoom="zoom"
  :center="center"
>
  <l-circle
    v-for="pothole in potholes"
    v-bind:key="pothole.id"
    :lat-lng="[pothole.position.geopoint.latitude, pothole.position.geopoint.longitude]"
    :color="circle.color"
    :radius="circle.radius"
  />

  <l-tile-layer :url="url"></l-tile-layer>
</LMap>
</template>

<script>
import {LMap, LTileLayer, LMarker, LCircle } from 'vue2-leaflet';

import { db } from '@/db'

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LCircle
  },
  data() {
    return {
      potholes: [],

      zoom: 17,
      center: [1.31104, 103.9374],
      bounds: null,
      url:`https://api.mapbox.com/styles/v1/mapbox/navigation-guidance-day-v4/tiles/256/{z}/{x}/{y}?access_token=${process.env.VUE_APP_MAPBOX_ACCESS_TOKEN}`,
      circle: {
        radius: 5,
        color: 'blue'
      },
    }
  },
  firestore () {
    return {
      potholes: db.collection('potholes'),
    }
  },
  mounted() {
    // console.log(this.potholes)
  }
};
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>