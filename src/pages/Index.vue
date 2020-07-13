<template>
  <Layout>
    <v-row>
      <v-col>
        <v-color-picker
          class="mx-auto my-10"
          mode="hexa"
          show-swatches
          hide-mode-switch
          :swatches="swatchOpts"
          v-model="color1"
        ></v-color-picker>
      </v-col>
      <v-col>
        <v-color-picker
          class="mx-auto my-10"
          mode="hexa"
          show-swatches
          hide-mode-switch
          :swatches="swatchOpts"
          v-model="color2"
        ></v-color-picker>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" class="pt-0 pb-0" md="6">
        <v-slider
          label="Degrees"
          v-model="slider"
          thumb-label="always"
          max="180"
          min="0"
          dense
        >
        </v-slider>
      </v-col>
    </v-row>

    <v-row>
      <v-spacer></v-spacer>
      <v-sheet
        width="300"
        height="150"
        elevation="10"
        class=""
        :style="{
          background:
            'linear-gradient(' +
            slider +
            'deg, ' +
            color1 +
            ' 0%, ' +
            color2 +
            ' 100%)',
        }"
      >
      </v-sheet>
      <v-spacer></v-spacer>
    </v-row>
    <v-row justify="center" class="mt-5">
      <v-btn rounded color="primary" @click="copyCSS" aria-label="Copy CSS">
        Copy CSS
      </v-btn>
    </v-row>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Free Color Gradients",
    meta: [{ name: "description", content: "CSS Gradient Sampler" }],
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
      slider: "135",
    };
  },
  computed: {
    cssText: function() {
      return (
        "background: linear-gradient(" +
        this.slider +
        "deg, " +
        this.color1 +
        " 0%, " +
        this.color2 +
        " 100%)"
      );
    },
  },
  methods: {
    copyCSS: function() {
      const el = document.createElement("textarea");
      el.value = this.cssText;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    },
  },
};
</script>
