import Client from 'letterboxd-client';
import * as dotenv from "dotenv"

dotenv.config()

console.log("hello world!");


const apiToken = process.env.LETTERBOXD_API_TOKEN;
const clientSecret = process.env.LETTERBOXD_CLIENT_SECRET;


async function main(){
    if (apiToken && clientSecret){
        const client = new Client(apiToken, clientSecret);
        const {status, data} = await client.film.get('ljDs');
        console.log(data.name);
        console.log(data.tagline);
    }
}

main()