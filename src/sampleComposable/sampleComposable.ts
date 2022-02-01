import { ref } from 'vue'

export const sampleComposable = () => {
  const count = ref<number>(0)

  const increment = () => {
    count.value++
    console.log(count.value)
  }

  return {
    count,
    increment,
  }
}
