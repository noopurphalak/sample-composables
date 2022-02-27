import { ref } from 'vue-demi'

export const useSampleComposable = () => {
  const count = ref(0)

  const increment = () => {
    count.value++
    console.log(count.value)
  }

  return {
    count,
    increment,
  }
}
