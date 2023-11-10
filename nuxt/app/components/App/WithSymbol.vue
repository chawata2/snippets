<script setup lang="ts">
type NonKey = {
  id?: number
}
const nonKeyArr = ref<NonKey[]>([{ id: 1 }, { id: 2 }, { id: undefined }])
const arrWithKey = ref(addSymbolToArray(nonKeyArr.value))

const selectItems = [
  { title: 'foo', value: 1 },
  { title: 'bar', value: 2 }
]
</script>

<template>
  <div>
    <v-select
      v-for="item in arrWithKey"
      :key="item.symbol"
      v-model="item.id"
      :items="selectItems"
    />
  </div>
</template>
