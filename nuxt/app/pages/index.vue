<script setup lang="ts"></script>
<template>
  <div>
    <h2>カタログ</h2>
    <p>componentsディレクトリ</p>
    <ul>
      <li>App: このカタログプロジェクトで使用するコンポーネント</li>
      <li>Common: Vue3の機能のみを使用して作成したコンポーネント</li>
      <li>ExpendVuetify: Vuetify3を使用したコンポーネント</li>
    </ul>

    <v-spacer style="height: 20px" />

    <h3>Utility</h3>

    <v-card variant="outlined">
      <v-card-title>配列を扱う際にシンボルを追加する</v-card-title>
      <v-card-text>
        キーに指定できるプロパティのない配列をv-forで回したいときには、Symbolを格納したプロパティを追加する。
      </v-card-text>
      <v-card-item>
        <AppWithSymbol />
      </v-card-item>
    </v-card>

    <v-spacer style="height: 20px" />

    <h3>Extends Vuetify</h3>

    <v-card variant="outlined">
      <v-card-title>SliderSelect</v-card-title>
      <v-card-text>
        スライダーをセレクトボックスの変わりに使用できるようにラップしたコンポーネント。 <br />
        VuetifyのSliderは数値しか選択できないが、オブジェクトを割り当てて選択したかった。<br />
      </v-card-text>
      <v-card-item> </v-card-item>
    </v-card>
  </div>
</template>
