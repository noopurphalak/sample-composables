import { ref } from 'vue'

export const sampleComposable = () => {
  const count = ref<number>(0)

  const increment = () => {
    count.value = count.value++
  }

  return {
    count,
    increment,
  }
}
