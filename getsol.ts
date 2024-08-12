import "dotenv/config";
import {keypair58Promise} from './keypair';

import {
    Connection,
    LAMPORTS_PER_SOL,
    clusterApiUrl,
} from '@solana/web3.js';

import {
    airdropIfRequired,
} from "@solana-developers/helpers";

const connection = new Connection(clusterApiUrl("devnet"));
//const publicKey = process.env.PUBLIC_KEY;

await airdropIfRequired(
    connection,
    await keypair58Promise,
    1 * LAMPORTS_PER_SOL,
    0.5 * LAMPORTS_PER_SOL
)