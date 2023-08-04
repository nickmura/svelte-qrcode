<script>

    import Generate from "$lib/qr/Generate.svelte";
    import View from "$lib/qr/View.svelte";

</script>
<div class='px-2 py-2'>
    <h1 class='text-xl font-bold italic'>svelte-qrcode</h1>
    <p>enter some text, a qr code will be generated</p>
</div>


<Generate/> <View/>