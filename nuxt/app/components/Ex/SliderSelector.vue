<script setup lang="ts">
/**
 * VSliderをVSelectのように使用するためのラッパーコンポーネント
 * itemsにはオブジェクトの配列のみ与えることができる。プリミティブ型の配列は現状不可
 *
 * reverseはバーの始点だけを反転し、itemsの内容は反転しない
 */
const props = withDefaults(
  defineProps<{
    modelValue?: any
    items: { [key: string]: any }[]
    itemTitle?: string
    itemValue?: string
    reverse?: boolean
  }>(),
  {
    modelValue: undefined,
    itemTitle: 'title',
    itemValue: 'value',
    reverse: false
  }
)
const emit = defineEmits(['update:modelValue'])

/** v-model */
const outValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

/** v-sliderで使用する変数 */
const inValue = computed({
  get() {
    if (props.reverse) {
      // return (
      //   props.items.length - props.items.findIndex(item => item[props.itemValue] === outValue.value)
      // )

      return props.items.findIndex(item => item[props.itemValue] === outValue.value)
    } else {
      return props.items.findIndex(item => item[props.itemValue] === outValue.value)
    }
  },
  set(value) {
    if (props.reverse) {
      console.log(props.items.at(-(value + 1)))
      // outValue.value = props.items.at(- (value + 1))?.[props.itemValue]
      outValue.value = props.items[value][props.itemValue]
    } else {
      outValue.value = props.items[value][props.itemValue]
    }
  }
})

/** キーと値の配列からオブジェクトを作成する関数 */
const createObjectFromKeys = <T extends string | number | symbol, U>(
  keys: T[],
  values: U[]
): Record<T, U> => {
  const result: Record<T, U> = {} as Record<T, U>
  keys.forEach((key, index) => {
    result[key] = values[index]
  })
  return result
}

/** Pythonのrange関数 */
const range = (start: number, end: number) => [...Array(end).keys()].slice(start)

/**
 * itemsから Record<number, string> の形の配列を生成する
 * マウント後にitemsが変更されることを想定してcomputed
 */
const ticks = computed(() =>
  createObjectFromKeys(
    range(0, props.items.length),
    props.items.map(i => i[props.itemTitle])
  )
)

const max = computed(() => props.items.length - 1)

watch(inValue, () => {
  console.log(inValue.value)
})
</script>

<template>
  <v-slider
    v-model="inValue"
    :ticks="ticks"
    :max="max"
    step="1"
    show-ticks="always"
    :reverse="reverse"
  />
</template>
