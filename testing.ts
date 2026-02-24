import Client from 'letterboxd-client';
import * as dotenv from "dotenv"

import { writeFile } from 'fs/promises';


async function saveJson(fileName: string, jsonData: unknown){
    await writeFile(fileName, JSON.stringify(jsonData, null, 2));
}

const myData = {1:2, "marco":"polo"};

saveJson("bar.txt", myData);


// dotenv.config()

// console.log("hello world!");


// const apiToken = process.env.LETTERBOXD_API_TOKEN;
// const clientSecret = process.env.LETTERBOXD_CLIENT_SECRET;


// async function main(){
//     if (apiToken && clientSecret){
//         const client = new Client(apiToken, clientSecret);
//         const {status, data} = await client.film.get('ljDs');
//         console.log(data.name);
//         console.log(data.tagline);
//     }
// }

// main()