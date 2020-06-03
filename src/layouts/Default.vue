<template>
  <v-app>
    <v-app-bar app dense dark>
      <v-toolbar-title>
        {{ $static.metadata.siteName }}
      </v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <slot />
      </v-container>
    </v-content>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
}
</style>
