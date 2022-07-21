export function GET(event, ctx) {
  return {
    body: {
      event,
      ctx
    }
  }
}