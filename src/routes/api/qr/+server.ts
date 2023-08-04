
import QRCode from 'qrcode'
import { json } from '@sveltejs/kit';


//@ts-ignore
export async function POST({ request, cookies }) {
    const input = await request.json()

    
    async function getCode(text:string) {
        const string = QRCode.toString(`${text}`,
        {type:'svg'}, function (err, url) {
          
           return url
        });

        return string
    } 
    const QRcode = await getCode(input.text)

    return json(QRcode)

   
}