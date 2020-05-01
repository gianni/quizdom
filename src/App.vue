<template>
  <b-container fluid="md">
    <b-row>
      <b-col class=" text-center">
        <img id="logo" src="./assets/logo.png" />
        <hr />
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <router-view />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#logo {
  margin-top:30px;
}
</style>
