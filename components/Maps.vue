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
          <h4 class="title">Maps</h4>
        </div>
        <div class="map">
          <vue-google-heatmap id="map" :points="points" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
      return {
        points: [],
        errors: []
      }
    },
    mounted() {
      this.getPoints();
    },
    methods: {
      getPoints() {
        axios
          .get("http://localhost:8081/api/tweets")
          .then(tweets => {
            tweets.forEach(tweet => {
              points.push({
                lat: tweet.lat,
                lng: tweet.lon
              });
            });
          })
          .catch(e => {
            this.errors.push(e);
          })
      }
    }
  }
</script>
