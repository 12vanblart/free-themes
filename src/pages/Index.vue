<template>
  <Layout>
    <v-row>
      <v-color-picker
        class="mx-auto my-10"
        mode="hexa"
        show-swatches
        :swatches="swatchOpts"
        v-model="color1"
      ></v-color-picker>
      <v-color-picker
        class="mx-auto my-10"
        mode="hexa"
        show-swatches
        :swatches="swatchOpts"
        v-model="color2"
      ></v-color-picker>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-sheet
        width="300"
        height="300"
        elevation="10"
        class=""
        :style="{
          background:
            'linear-gradient(135deg, ' + color1 + ' 0%, ' + color2 + ' 100%)',
        }"
      >
      </v-sheet>
      <v-spacer></v-spacer>
    </v-row>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Free Color Gradients",
  },
  data() {
    return {
      swatchOpts: [
        ["#283555", "#3C8E50"],
        ["#7746AF", "#0DE5F7"],
        ["#FC8A87", "#FCE7C3"],
        ["#665BA5", "#CBADE9"],
        ["#E885A0", "#CCD4CC"],
        ["#FFE3E8", "#94A9ED"],
        ["#E27861", "#89DEB9"],
        ["#830C20", "#FEF3E2"],
        ["#F70D61", "#6EFCB5"],
        ["#927FA0", "#BAECD2"],
      ],
      color1: "#C7FFE2",
      color2: "#716799",
    };
  },
};
</script>

<style></style>
