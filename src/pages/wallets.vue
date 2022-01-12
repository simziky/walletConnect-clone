<template>
  <div class="wallet-main">
     <div class="wallet-inner">
         <div class="wallet-nav">
             <span>
             <h3>Registry</h3>
             <a href="">Wallets</a>
             </span>
             <h6>Registry of all Apps and Wallets supporting WalletConnect Protocol</h6>
         </div>

        <div class="wallet-gallery">
            
                <div v-for="item in image_items" :key="item"  class="wallet-gallery-inner">
                     <router-link to="/Connect" class="wallet-link"> 
                      <img  :src="item.image_path" alt="" />
                        <h4>{{item.title}}</h4>
                        <h5>Wallet</h5>
                        </router-link>
                </div>
        </div>

     </div>
  </div>
</template>

<script>
export default {
    data (){
        return{
            image_items: [
                {
                image_path : require("@/assets/rainbow.jpeg"),
                title: "Rainbow",
                
                },
                {
                image_path : require ("@/assets/trust.jpeg"),
                 title: "Trust Wallet",
                
                },
                {
                image_path : require ("@/assets/argent.jpeg"),
                 title: "Argent",
                
                },
                {
                image_path : require ("@/assets/metamask.jpeg"),
                 title: "MetaMask",
                
                },
                {
                image_path : require ("@/assets/gnosis.jpeg"),
                 title: "Gnosis Safe Multisig",
                
                },
                {
                image_path : require ("@/assets/cryptocom.jpeg"),
                 title: "Crypto.com",
                
                },
                {
                image_path : require ("@/assets/pillar.jpeg"),
                 title: "Pillar",
                
                },
                {
                image_path : require ("@/assets/imtoken.jpeg"),
                 title: "imToken",
                
                },
                {
                image_path : require ("@/assets/onto.jpeg"),
                 title: "ONTO",
                
                },
                {
                image_path : require ("@/assets/tokenpocket.jpeg"),
                 title: "TokenPocket",
                
                },
                {
                image_path : require ("@/assets/mathwallet.jpeg"),
                 title: "MathWallet",
                
                },
                {
                image_path : require ("@/assets/Bitpay.jpeg"),
                 title: "Bitpay",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/4ab2542c2799c825a8465ba5ab8aa7def52b7904f38b74484af917ed9c0fc4e5.jpeg",
                 title: "Ledger Live",
                
                },
                {
                image_path :"https://registry.walletconnect.org/logo/lg/83f26999937cbc2e2014655796da4b05f77c1de9413a0ee6d0c6178ebcfc3168.jpeg",
                 title: "WallETH",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/71dad538ba02a9b321041d388f9c1efe14e0d1915a2ea80a90405d2f6b67a33d.jpeg",
                 title: "Authereum",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/9dab7bd72148e2f796452630230666daf507935fae7bb9baf22b3c11960b034f.jpeg",
                 title: "Dharma",
                
                },
                {
                image_path :"https://registry.walletconnect.org/logo/lg/09102e7bbbd3f92001eda104abe23803181629f695e8f1b95af96d88ff7d5890.jpeg",
                 title: "1inch Wllet",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/bae74827272509a6d63ea25514d9c68ad235c14e45e183518c7ded4572a1b0c4.jpeg",
                 title: "Huobi Wallet",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/efba9ae0a9e0fdd9e3e055ddf3c8e75f294babb8aea3499456eff27f771fda61.jpeg",
                 title: "Eidoo",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/61f6e716826ae8455ad16abc5ec31e4fd5d6d2675f0ce2dee3336335431f720e.jpeg",
                 title: "MYKEY",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/dcf291a025ead3e94ef694fa75617568daf76bf1e525bb240ecf5bf1add53756.jpeg",
                 title: "Loopring Wallet",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/6bb4596640ce9f8c02fbaa83e3685425455a0917d025608b4abc53bfe55887c6.jpeg",
                 title: "TrustVault",
                
                },
                {
                image_path :"https://registry.walletconnect.org/logo/lg/185850e869e40f4e6c59b5b3f60b7e63a72e88b09e2a43a40b1fd0f237e49e9a.jpeg",
                 title: "Atomic",
                
                },
                {
                image_path :"https://registry.walletconnect.org/logo/lg/b021913ba555948a1c81eb3d89b372be46f8354e926679de648e4fa2938bed3e.jpeg",
                 title: "Coin98",
                
                },
                {
                image_path :"https://registry.walletconnect.org/logo/lg/1f69170bf7a9bdcf89403ec012659b7124e158f925cdd4a2be49274c24cf5e5d.jpeg",
                 title: "CoolWallet S",
                
                },
                {
                image_path :"https://registry.walletconnect.org/logo/lg/beea4e71c2ffbb48b59b21e33fb0049ef6522585aa9c8a33a97d3e1c81f16693.jpeg",
                 title: "Alice",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/138f51c8d00ac7b9ac9d8dc75344d096a7dfe370a568aa167eabc0a21830ed98.jpeg",
                 title: "AlphaWallet",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/468b4ab3582757233017ec10735863489104515ab160c053074905a1eecb7e63.jpeg",
                 title: "D'CENT Wallet",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/29f4a70ad5993f3f73ae8119f0e78ecbae51deec2a021a770225c644935c0f09.jpeg",
                 title: "ZelCore",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/8605171a052e85d629c5efe5db804c7a3fb6d0ecc759d6817f0a18cb3dacbb14.jpeg",
                 title: "Nash",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/9277bc510b6d95f29be38e7c0e402ae8438262f0f4c6dbb40dfc22f5043e8814.jpeg",
                 title: "Coinomi",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/6ec1ffc9627c3b9f87676da3f7b5796828a6c016d3253e51e771e6f951cb5702.jpeg",
                 title: "GridPlus",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/a395dbfc92b5519cbd1cc6937a4e79830187daaeb2c6fcdf9b9cce4255f2dcd5.jpeg",
                 title: "CYBAVO Wallet",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/c889f5add667a8c69d147d613c7f18a4bd97c2e47c946cabfdd13ec1d596e4a0.jpeg",
                 title: "Tokenary",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/3f1bc4a8fd72b3665459ec5c99ee51b424f6beeebe46b45f4a70cf08a84cbc50.jpeg",
                 title: "Torus",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/7b83869f03dc3848866e0299bc630aaf3213bea95cd6cecfbe149389cf457a09.jpeg",
                 title: "Spatium",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/0b415a746fb9ee99cce155c2ceca0c6f6061b1dbca2d722b3ba16381d0562150.jpeg",
                 title: "SafePal",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/d0387325e894a1c4244820260ad7c78bb20d79eeec2fd59ffe3529223f3f84c6.jpeg",
                 title: "Infinito",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/176b83d9268d77438e32aa44770fb37b40d6448740b6a05a97b175323356bd1b.jpeg",
                 title: "wallet.io",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/802a2041afdaf4c7e41a2903e98df333c8835897532699ad370f829390c6900f.jpeg",
                 title: "Infinity Wallet",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/8fb830a15679a8537d84c3852e026a4bdb39d0ee3b387411a91e8f6abafdc1ad.jpeg",
                 title: "Ownbit",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/244a0d93a45df0d0501a9cb9cdfb4e91aa750cfd4fc88f6e97a54d8455a76f5c.jpeg",
                 title: "EasyPocket",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/881946407ff22a32ec0e42b2cd31ea5dab52242dc3648d777b511a0440d59efb.jpeg",
                 title: "Bridge Wallet",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/3b0e861b3a57e98325b82ab687fe0a712c81366d521ceec49eebc35591f1b5d1.jpeg",
                 title: "SparkPoint",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/ca86f48760bf5f84dcd6b1daca0fd55e2aa073ecf46453ba8a1db0b2e8e85ac1.jpeg",
                 title: "ViaWallet",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/42d72b6b34411dfacdf5364c027979908f971fc60251a817622b7bdb44a03106.jpeg",
                 title: "BitKeep",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/b642ab6de0fe5c7d1e4a2b2821c9c807a81d0f6fd42ee3a75e513ea16e91151c.jpeg",
                 title: "Vision",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/38ee551a01e3c5af9d8a9715768861e4d642e2381a62245083f96672b5646c6b.jpeg",
                 title: "PEAKDEFI Wallet",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/7e90b95230bc462869bbb59f952273d89841e1c76bcc5319898e08c9f34bd4cd.jpeg",
                 title: "Unstoppable Wallet",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/025247d02e1972362982f04c96c78e7c02c4b68a9ac2107c26fe2ebb85c317c0.jpeg",
                 title: "HaloDeFi Wallet",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/d12b6e114af8c47a6eec19a576f1022032a5ee4f8cafee612049f4796c803c7e.jpeg",
                 title: "Dok Wallet",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/3d56ed42374504f1bb2ba368094269eaea461c075ab796d504f354baac213dc5.jpeg",
                 title: "AT.Wallet",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/1e04cf5cddcd84edb1370b12eae1fcecedf125b77209fff80e7ef2a6d3c74719.jpeg",
                 title: "Midas Wallet",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/15d1d97de89526a3c259a235304a7c510c40cda3331f0f8433da860ecc528bef.jpeg",
                 title: "Ellipal",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/0fa0f603076de79bbac9a4d47770186de8913da63c8a4070c500a783cddbd1e3.jpeg",
                 title: "KEYRING PRO",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/19ad8334f0f034f4176a95722b5746b539b47b37ce17a5abde4755956d05d44c.jpeg",
                 title: "Aktionariat",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/95501c1a07c8eb575cb28c753ab9044259546ebcefcd3645461086e49b671f5c.jpeg",
                 title: "Talken Wallet",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/78640a74036794a5b7f8ea501887c168232723696db4231f54abd3fe524037b4.jpeg",
                 title: "XinFin XDC Network",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/d612ddb7326d7d64428d035971b82247322a4ffcf126027560502eff4c02bd1c.jpeg",
                 title: "Flare Wallet",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/55e5b479c9f49ddac5445c24725857f19888da1ef432ae5e4e01f8054d107670.jpeg",
                 title: "KyberSwap",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/6193353e17504afc4bb982ee743ab970cd5cf842a35ecc9b7de61c150cf291e0.jpeg",
                 title: "AToken Wallet",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/4e6af4201658b52daad51a279bb363a08b3927e74c0f27abeca3b0110bddf0a9.jpeg",
                 title: "Tongue Wallet",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/b13fcc7e3500a4580c9a5341ed64c49c17d7f864497881048eb160c089be5346.jpeg",
                 title: "RWallet",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/13c6a06b733edf51784f669f508826b2ab0dc80122a8b5d25d84b17d94bbdf70.jpeg",
                 title: "PlasmaPay",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/0aafbedfb8eb56dae59ecc37c9a5388509cf9c082635e3f752581cc7128a17c0.jpeg",
                 title: "O3Wallet",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/761d3d98fd77bdb06e6c90092ee7071c6001e93401d05dcf2b007c1a6c9c222c.jpeg",
                 title: "HashKey Me",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/0a00cbe128dddd6e096ebb78533a2c16ed409152a377c1f61a6a5ea643a2d950.jpeg",
                 title: "Jade Wallet",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/c04ae532094873c054a6c9339746c39c9ba5839c4d5bb2a1d9db51f9e5e77266.jpeg",
                 title: "Guarda Wallet",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/ffa139f74d1c8ebbb748cf0166f92d886e8c81b521c2193aa940e00626f4e215.jpeg",
                 title: "Defiant",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/1ce6dae0fea7114846382391d946784d95d9032460a857bb23b55bd9807259d1.jpeg",
                 title: "Trustee Wallet",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/be6607b0a4093c0443bfe9c19ab30c99c91d2638866c99a6a16a71d3c1df78f8.jpeg",
                 title: "CoinUs",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/ca151c4caeec5f9cc02ef03e498cb38c02ee5e498a8db13e853315077a5b45dc.jpeg",
                 title: "cmorq",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/d01c7758d741b363e637a817a09bcf579feae4db9f5bb16f599fdd1f66e2f974.jpeg",
                 title: "Valora",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/e05615ed22df39c8d9b99ea38b45d4accb103fcef9cfa5d5edd38f5839b5182e.jpeg",
                 title: "QuiverX",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/36d854b702817e228d5c853c528d7bdb46f4bb041d255f67b82eb47111e5676b.jpeg",
                 title: "Celo Wallet",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/717911f4db0c5eda0e02e76ed179b7940ba1eefffdfb3c9e6540696226860da0.jpeg",
                 title: "Elastos Essentials",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/c20b97dd1679625f4eb0bccd727c80746cb13bd97208b0c8e62c89cfd1d4b9cc.jpeg",
                 title: "fuse.cash",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/9e3f6d07815cfaf1ef7afb089e5c6895b254fced0b84a9ff2b449a631605b5db.jpeg",
                 title: "Bitpie",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/fbc8d86ad914ebd733fec4812b4b7af5ca709fdd9e75a930115e5baa02c4ef4c.jpeg",
                 title: "Rabby",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/9d6c614d1995741d5313f1f3dbf1f66dcba694de782087d13b8721822502692f.jpeg",
                 title: "Stasis",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/a6ffb821a3c32d36fc9d29e29c2ff79a0cd1db0bca453714777846ddf3fdff76.jpeg",
                 title: "JulWallet",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/2f010ad2b0777998e950b5d72969e3b6a7090f0dde59b509ce9a41a5d1b2f9f4.jpeg",
                 title: "f(x) Wallet",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/96bf9b7141215037f4a9f567ce536b1eb2836fb71cc67c07ba73f3c3eadc53d6.jpeg",
                 title: "Bull App",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/fc65284c7e407387d732fbfe5d57ed378a89db28c3559ada079f9097d43d2575.jpeg",
                 title: "Anybit",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/ddc09197f1b87a19f5f40e842a6a502cc64bde8a1d7c03073182f2f23f021398.jpeg",
                 title: "Bitpie",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/dea4ab675289353a508956c4f821bc4e9141d9f99a5d244ae7af92b4d575db6d.jpeg",
                 title: "Minerva Wallet",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/8db861466b91fbfe382fbbc55eb5209d38d2c91fcb3fe03ab622bf6dcb5885bc.jpeg",
                 title: "ArchiPage",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/76745388a50e6fea982c4dee2a3ad61a8aa417668be870754689caa8a7506c93.jpeg",
                 title: "Tangem",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/67d728ec0a4d650a7a5b28390df634b86f775efc5075123aab537fc7fc53f045.jpeg",
                 title: "Chainge Finance",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/9d93c497dc5c835abd1ddd3c5d388eaf54b995b49573340d9580b366259b7972.jpeg",
                 title: "ioPay",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/0105fbfd71efd3b19dde8060d6c9d959f555c078515a47b1a29cc9b67e6a4531.jpeg",
                 title: "Coinhub",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/b397a6d7fc2eb4895579d0fa043d66bbb0396e40237876d6d9f294f41cf755ac.jpeg",
                 title: "Go Pocket",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/addb6cfece8fe6d2e7039baf5b2ba3249da48957b08bcc877a2e32eaffa6e7aa.jpeg",
                 title: "Wallet 3",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/1bc1d561a2a38a2ff0c4dfb21c2236f7335084f822cd5de016bd4725fed389df.jpeg",
                 title: "yiToken",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/416a17a68726c10896a46e9ecbb25eaa0e342611b2387d4787902bf1984b68e9.jpeg",
                 title: "DID Wallet",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/c1abb33fa718be77d96c56a3f9720400e9c5de2f79ef50ad6a2c19b1c28659f3.jpeg",
                 title: "StarBase",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/29449bf9d53ae02dd64a6719915c65882d7d634cca2d2de19586c772e6cbe759.jpeg",
                 title: "Shinobi Wallet",
                
                },
                {
                image_path : "https://registry.walletconnect.org/logo/lg/0c72ae93696df557d174b7a9616fb4f9128e4476cbaa7afc7788d5c7c935de40.jpeg",
                 title: "Steakwallet",
                
                },
                {
                    image_path:"https://registry.walletconnect.org/logo/lg/403308a7b7d5da26558cb3658d963d9a87648940a38cc04143f223815d631aa5.jpeg",
                    title: "GD Wallet",
                },
                {
                    image_path:"https://registry.walletconnect.org/logo/lg/2235b648bdf382bc1a6960f1db8eda5c71f65a1996e6cb549d24783ca58a2903.jpeg",
                    title: "Binana",
                },
                {
                    image_path:"https://registry.walletconnect.org/logo/lg/a0718f5fb1493e4aaac72cff62d162cb85db40ed68fd8700298f36f1d5c4b73d.jpeg",
                    title: "AirGap",
                },
                {
                    image_path:"https://registry.walletconnect.org/logo/lg/76428179ce9213ab6f8f49923310efcf5eea089764196c7a2018bea8afcd6603.jpeg",
                    title: "PayTube",
                },
               
                {
                    image_path:"https://registry.walletconnect.org/logo/lg/42049d5de7c9e88664bb4e13db614decb08a4ba4f0e6eefd5617f25d3cb2983b.jpeg",
                    title: "BlockBank",
                },
                {
                    image_path:"https://registry.walletconnect.org/logo/lg/d864d048f82084fac88d386c32b3261513ed7b5d1d4b52f96f91022059e984f9.jpeg",
                    title: "Orange",
                },
                {
                    image_path:"https://registry.walletconnect.org/logo/lg/28ec413631bf709cc6aeb3d4e3fdd7be541d38ba852ac491840e2501eaa7cb4b.jpeg",
                    title: "NEFTiPEDiA",
                },
                {
                    image_path:"https://registry.walletconnect.org/logo/lg/2969649937a2a6c587e1391446d60e2e06b9c5196162a6aa70a0002292aa8d22.jpeg",
                    title: "Avacus",
                },
                {
                    image_path:"https://registry.walletconnect.org/logo/lg/e70cbcfd76d90f45de86fc1d1548ecd7cbc700c999d26feac0b2badfd05090b3.jpeg",
                    title: "Krystal",
                },
                {
                    image_path:"https://registry.walletconnect.org/logo/lg/dd8ee41915d967e547c80266e883d77ee808427405f4e8026a85ac1308104221.jpeg",
                    title: "Linen",
                },
                {
                    image_path:"https://registry.walletconnect.org/logo/lg/2c81da3add65899baeac53758a07e652eea46dbb5195b8074772c62a77bbf568.jpeg",
                    title: "Ambire Wallet",
                },
                
               
            ]
        }
    }
}
</script>

<style>

</style>