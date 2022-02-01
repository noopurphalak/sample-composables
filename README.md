## Quick Setup

1. Create a new Vue 3 project.

2. In your Vue 3 project install this package using:

   ```bash
   npm install sample-composables
   ```

   or

   ```bash
   yarn add sample-composables
   ```

3. This repo contains a composable called `sampleComposable` which can be used in `App.vue` as follows:

   ```javascript
       <template>
           <img alt="Vue logo" src="./assets/logo.png" />
           <button @click="increment()">{{ count }}</button>
       </template>

       <script lang="ts" setup>
           import { sampleComposable } from "sample-composables";
           const { count, increment } = sampleComposable();
       </script>
       <script lang="ts">
           export default {
               name: "App",
           };
       </script>

       <style>
       #app {
           font-family: Avenir, Helvetica, Arial, sans-serif;
           -webkit-font-smoothing: antialiased;
           -moz-osx-font-smoothing: grayscale;
           text-align: center;
           color: #2c3e50;
           margin-top: 60px;
       }
       </style>
   ```

4. Run `yarn serve` and click on the button rendered to see the count increment.
