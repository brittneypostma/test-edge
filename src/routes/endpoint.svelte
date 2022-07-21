<script>
	export let event
	export let ctx
	console.log({ event }, { ctx })
</script>

{JSON.stringify(event, null, 2)}
{JSON.stringify(ctx, null, 2)}
