export function GET(event) {
  const ctx = event?.platform?.context
  return {
    body: {
      ctx
    }
  }
}