export function GET(event) {
  const ctx = event
  return {
    body: {
      ctx
    }
  }
}