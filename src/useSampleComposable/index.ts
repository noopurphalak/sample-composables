import { ref } from 'vue'

export const useSampleComposable = () => {
  const count = ref(0)

  const increment = () => {
    count.value += 1
    console.log(count.value)
  }

  return {
    count,
    increment,
  }
}
