<script lang='ts'>
    import { inputText, qrSVG } from '$lib';
   
    
    let input:string

    const fetchCode = async (text:string) => {

        const req = JSON.stringify({ text });
        console.log(req)
        const res = await fetch('/api/qr', {
				method: 'POST',
				body: req,
				headers: {
					'Content-Type': 'application/json'
				}
			});

       if (!res.ok)throw new Error('')
       const code = await res.json()
       inputText.set(text)
       qrSVG.set(code)
       if ($qrSVG) console.log($qrSVG)
    }
</script>

<section class='w-1/4 border rounded-lg px-3 py-3'>
    <input type='text' bind:value={input} class='mb-2 rounded-lg w-full px-2 py-2' placeholder='Enter an input to be QR coded'/>
    <button on:click={(e)=>fetchCode(input)} class='px-2 py-2 justify-center flex w-full  rounded-xl text-xl bg-black
        text-white font-semibold hover:scale-[1.05] transition transition-200'>
            Generate QR
        </button>
</section>

