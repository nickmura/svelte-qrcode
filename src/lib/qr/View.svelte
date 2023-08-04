<script lang='ts'>
    import { qrSVG } from "$lib";
</script>

{#if $qrSVG}
        <div class='px-2 py-2 w-1/4 h-1/4'>
            <div class=''>
                    {@html $qrSVG}
            </div>
        </div>
    {/if}