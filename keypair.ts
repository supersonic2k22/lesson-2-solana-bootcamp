import dotenv from 'dotenv';
dotenv.config();
import { Keypair, PublicKey } from "@solana/web3.js";

const prefix = 'kumeka';

// Function to perform the search
async function findKeypair() {
    const keypair = Keypair.generate();
    const keypair58 = keypair.publicKey; // Convert to Base58 string

    console.log(keypair58);

    return keypair58 // Return the keypair58
}

// Export the keypair58 by exporting the promise that resolves to it
export const keypair58Promise = findKeypair();