<template>
      <v-range-slider
            v-model="range"
            :max="max"
            :min="min"
            hide-details
            class="align-center"
          >
            <template v-slot:prepend>
              <v-text-field
                :value="range[0]"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px"
                @change="$set(range, 0, $event)"
              ></v-text-field>
            </template>
            <template v-slot:append>
              <v-text-field
                :value="range[1]"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px"
                @change="$set(range, 1, $event)"
              ></v-text-field>
            </template>
          </v-range-slider>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Vuetify from 'vuetify';

@Options({
  data() {
    return {
      min: -50,
      max: 90,
      range: [-20, 70],
    };
  },
})
export default class PriceRange extends Vue {

}
</script>
