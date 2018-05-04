<template>
  <v-jumbotron color="grey lighten-2">
    <v-container fill-height>
      <v-carousel>
        <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
      </v-carousel>
      <v-layout align-center>
        <v-flex>
            <!-- $t va para acceder al archivo de traduccion -->
          <h3 class="display-3">
            {{ $t('about.title',{app: 'Fausto Obregon'}) }}
          </h3>
          <span class="subheading">{{ $t('about.content') }}</span>
          <v-divider class="my-3"></v-divider>
          <div class="title mb-3">{{ $t('about.call_to_action') }}</div>
          <v-btn large color="primary" class="mx-0">{{ $t('about.action_button')}}</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<script>
    export default {
      data () {
        return {
          items: [
            {
              src: '/static/doc-images/carousel/imagen1.jpg'
            },
            {
              src: '/static/doc-images/carousel/imagen2.png'
            },
            {
              src: '/static/doc-images/carousel/imagen3.jpg'
            },
            {
              src: '/static/doc-images/carousel/imagen4.jpg'
            }
          ]
        }
      },
        name: 'acercade'
    }
</script>
