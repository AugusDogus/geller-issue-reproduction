import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

console.log(process.env.SERVERVAR);
console.log(process.env.NEXT_PUBLIC_CLIENTVAR);
