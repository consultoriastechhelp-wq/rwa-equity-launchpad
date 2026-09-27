module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/@aws-sdk/client-s3 [external] (@aws-sdk/client-s3, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@aws-sdk/client-s3", () => require("@aws-sdk/client-s3"));

module.exports = mod;
}),
"[externals]/@solana/web3.js [external] (@solana/web3.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@solana/web3.js", () => require("@solana/web3.js"));

module.exports = mod;
}),
"[externals]/@meteora-ag/dynamic-bonding-curve-sdk [external] (@meteora-ag/dynamic-bonding-curve-sdk, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@meteora-ag/dynamic-bonding-curve-sdk");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/scaffolds/fun-launch/src/pages/api/upload.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@aws-sdk/client-s3 [external] (@aws-sdk/client-s3, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$solana$2f$web3$2e$js__$5b$external$5d$__$2840$solana$2f$web3$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@solana/web3.js [external] (@solana/web3.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$meteora$2d$ag$2f$dynamic$2d$bonding$2d$curve$2d$sdk__$5b$external$5d$__$2840$meteora$2d$ag$2f$dynamic$2d$bonding$2d$curve$2d$sdk$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@meteora-ag/dynamic-bonding-curve-sdk [external] (@meteora-ag/dynamic-bonding-curve-sdk, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$meteora$2d$ag$2f$dynamic$2d$bonding$2d$curve$2d$sdk__$5b$external$5d$__$2840$meteora$2d$ag$2f$dynamic$2d$bonding$2d$curve$2d$sdk$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$meteora$2d$ag$2f$dynamic$2d$bonding$2d$curve$2d$sdk__$5b$external$5d$__$2840$meteora$2d$ag$2f$dynamic$2d$bonding$2d$curve$2d$sdk$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
// Environment variables with type assertions
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID;
const R2_BUCKET = process.env.R2_BUCKET;
const RPC_URL = process.env.RPC_URL;
const POOL_CONFIG_KEY = process.env.POOL_CONFIG_KEY;
if (!R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY || !R2_ACCOUNT_ID || !R2_BUCKET || !RPC_URL || !POOL_CONFIG_KEY) {
    throw new Error('Missing required environment variables');
}
const PRIVATE_R2_URL = `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`;
const PUBLIC_R2_URL = 'https://pub-85c7f5f0dc104dc784e656b623d999e5.r2.dev';
// R2 client setup
const r2 = new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$29$__["S3Client"]({
    endpoint: PRIVATE_R2_URL,
    credentials: {
        accessKeyId: R2_ACCESS_KEY_ID,
        secretAccessKey: R2_SECRET_ACCESS_KEY
    },
    region: 'auto'
});
async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Method not allowed'
        });
    }
    try {
        const { tokenLogo, tokenName, tokenSymbol, mint, userWallet } = req.body;
        // Validate required fields
        if (!tokenLogo || !tokenName || !tokenSymbol || !mint || !userWallet) {
            return res.status(400).json({
                error: 'Missing required fields'
            });
        }
        // Upload image and metadata
        const imageUrl = await uploadImage(tokenLogo, mint);
        if (!imageUrl) {
            return res.status(400).json({
                error: 'Failed to upload image'
            });
        }
        const metadataUrl = await uploadMetadata({
            tokenName,
            tokenSymbol,
            mint,
            image: imageUrl
        });
        if (!metadataUrl) {
            return res.status(400).json({
                error: 'Failed to upload metadata'
            });
        }
        // Create pool transaction
        const poolTx = await createPoolTransaction({
            mint,
            tokenName,
            tokenSymbol,
            metadataUrl,
            userWallet
        });
        res.status(200).json({
            success: true,
            poolTx: poolTx.serialize({
                requireAllSignatures: false,
                verifySignatures: false
            }).toString('base64')
        });
    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({
            error: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}
async function uploadImage(tokenLogo, mint) {
    const matches = tokenLogo.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
    if (!matches || matches.length !== 3) {
        return false;
    }
    const [, contentType, base64Data] = matches;
    if (!contentType || !base64Data) {
        return false;
    }
    const fileBuffer = Buffer.from(base64Data, 'base64');
    const fileName = `images/${mint}.${contentType.split('/')[1]}`;
    try {
        await uploadToR2(fileBuffer, contentType, fileName);
        return `${PUBLIC_R2_URL}/${fileName}`;
    } catch (error) {
        console.error('Error uploading image:', error);
        return false;
    }
}
async function uploadMetadata(params) {
    const metadata = {
        name: params.tokenName,
        symbol: params.tokenSymbol,
        image: params.image
    };
    const fileName = `metadata/${params.mint}.json`;
    try {
        await uploadToR2(Buffer.from(JSON.stringify(metadata, null, 2)), 'application/json', fileName);
        return `${PUBLIC_R2_URL}/${fileName}`;
    } catch (error) {
        console.error('Error uploading metadata:', error);
        return false;
    }
}
async function uploadToR2(fileBuffer, contentType, fileName) {
    return r2.send(new __TURBOPACK__imported__module__$5b$externals$5d2f40$aws$2d$sdk$2f$client$2d$s3__$5b$external$5d$__$2840$aws$2d$sdk$2f$client$2d$s3$2c$__cjs$29$__["PutObjectCommand"]({
        Bucket: R2_BUCKET,
        Key: fileName,
        Body: fileBuffer,
        ContentType: contentType
    }));
}
async function createPoolTransaction({ mint, tokenName, tokenSymbol, metadataUrl, userWallet }) {
    const connection = new __TURBOPACK__imported__module__$5b$externals$5d2f40$solana$2f$web3$2e$js__$5b$external$5d$__$2840$solana$2f$web3$2e$js$2c$__cjs$29$__["Connection"](RPC_URL, 'confirmed');
    const client = new __TURBOPACK__imported__module__$5b$externals$5d2f40$meteora$2d$ag$2f$dynamic$2d$bonding$2d$curve$2d$sdk__$5b$external$5d$__$2840$meteora$2d$ag$2f$dynamic$2d$bonding$2d$curve$2d$sdk$2c$__esm_import$29$__["DynamicBondingCurveClient"](connection, 'confirmed');
    const poolTx = await client.creator.createPool({
        config: new __TURBOPACK__imported__module__$5b$externals$5d2f40$solana$2f$web3$2e$js__$5b$external$5d$__$2840$solana$2f$web3$2e$js$2c$__cjs$29$__["PublicKey"](POOL_CONFIG_KEY),
        baseMint: new __TURBOPACK__imported__module__$5b$externals$5d2f40$solana$2f$web3$2e$js__$5b$external$5d$__$2840$solana$2f$web3$2e$js$2c$__cjs$29$__["PublicKey"](mint),
        name: tokenName,
        symbol: tokenSymbol,
        uri: metadataUrl,
        payer: new __TURBOPACK__imported__module__$5b$externals$5d2f40$solana$2f$web3$2e$js__$5b$external$5d$__$2840$solana$2f$web3$2e$js$2c$__cjs$29$__["PublicKey"](userWallet),
        poolCreator: new __TURBOPACK__imported__module__$5b$externals$5d2f40$solana$2f$web3$2e$js__$5b$external$5d$__$2840$solana$2f$web3$2e$js$2c$__cjs$29$__["PublicKey"](userWallet)
    });
    const { blockhash } = await connection.getLatestBlockhash();
    poolTx.feePayer = new __TURBOPACK__imported__module__$5b$externals$5d2f40$solana$2f$web3$2e$js__$5b$external$5d$__$2840$solana$2f$web3$2e$js$2c$__cjs$29$__["PublicKey"](userWallet);
    poolTx.recentBlockhash = blockhash;
    return poolTx;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__221332dc._.js.map