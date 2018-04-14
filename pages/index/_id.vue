<template>
  <div class="content">
    <div class="container-fluid">
      <div class="card card-map">
        <div class="header">
          <h4 class="title">Google Maps</h4>
        </div>
        <div class="map">
          <div id="map"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<template>
  <div class="content">
    <div class="container-fluid">
      <div class="card card-map">
        <div class="header">
          <h4 class="title">{{ title }}</h4>
        </div>
        <div class="map" id="map">
          <!-- <vue-google-heatmap id="map" :points="v-model='points'" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script async defer
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAA5KpdDpTv2qZDP4iD9ryVZpLuPRybffw&libraries=visualization&callback=initMap">
</script>

<script>
import axios from 'axios'
var map;
var heat;
var points = []
var realPoints = []

export default {
  data() {
    return {
      title: "Maps",
      errors: []
    }
  },
  watch: {
    '$route' (to, from) {
      axios.get('http://localhost:8081/api/tweets/category/' + this.$route.params.id)
      .then(tweets => {
        tweets = tweets.data
        tweets.forEach(tweet => {
          points.push({
            lat: tweet.lat,
            lng: tweet.lng
          })
        })
        this.initMap()
      })
      .catch(err => {
        this.errors.push(err);
      })


    axios.get('http://localhost:8081/api/categories/' + this.$route.params.id)
      .then(category => {
        this.title = "Heat Map for " + category.data.name
      })
      .catch(err => {
        this.errors.push(err);
      })


    }
  },
  methods: {
    initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        radius: 70,
        center: {lat: 19.4326077, lng: -99.1332080},
      })

      this.getPoints();
      heatmap = new google.maps.visualization.HeatmapLayer({
        data: realPoints,
        map: map
      })
    },

    getPoints() {
      for(var i = 0; i < points.length; i++) {
        realPoints.push(new google.maps.LatLng(points[i].lat, points[i].lng));
      }

      return realPoints
    }
  }
}

</script>
