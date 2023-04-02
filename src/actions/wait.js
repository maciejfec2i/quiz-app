export default function wait() {
    return new Promise((resolve) => {
        setTimeout(resolve, 1300)
      })
}