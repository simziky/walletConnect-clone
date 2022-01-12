<template>
<div class="home">
  <div class="home-1">
      <div class="home-1-text">
           <h1>Any Wallet. Any Dapp. Any Chain.</h1> 
          <p>WalletConnect is the web3 standard to connect blockchain wallets to dapps.</p>
        <router-link to="/wallets" >  <button>Connect Wallet</button> </router-link>
      </div>


      <div class="home-1-img">
          <img src="../assets/hero-illustration.png" alt="" >
      </div>
  </div>

    <div class="home-2">

        <div class="home-2-text">
            <h1>The Blockchain SDK </h1>
            <p> Built for developers, the WalletConnect web, android, and iOS SDK’s power millions of web3 connections every day. </p>
       
       <img src="../assets/blockchain-connect.png" alt="" >
        </div>


        <div class="home-2-flex">
            <span>
                <img src="../assets/check-circle-solid.svg" alt="" class="check">
                <h3>Protocol</h3>
                <p>WalletConnect is not an app, but an open protocol to communicate securely between Wallets and Dapps (Web3 Apps).</p>
            </span>

            <span>
                <img src="../assets/check-circle-solid.svg" alt="" class="check">
                <h3>Secure Encryption</h3>
                <p>The protocol establishes a remote connection between two apps and/or devices. These payloads are symmetrically encrypted through a shared key between the two peers.</p>
            </span>

            <span>
                <img src="../assets/check-circle-solid.svg" alt="" class="check">
                <h3>QR Codes & Deep Links</h3>
                <p>The connection is initiated by one peer displaying a QR Code or deep link with a standard WalletConnect URI and is established when the counter-party approves this connection request.</p>
            </span>

            <span>
                <img src="../assets/check-circle-solid.svg" alt="" class="check">
                <h3>Push Server</h3>
                <p>Also included is an optional Push server to allow native applications to notify the user of incoming payloads for established connections.</p>
            </span>
        </div>

    </div>


        <div class="home-3">

            <div class="home-3-code">
                <div style="font-size:14px;overflow-x:auto;font-family:SF Mono, Menlo, monospace;background:#152D58; padding:30px;  border-radius: 10px; " data-language="typescript"><pre class="prism-code language-typescript" style="color:#d6deeb;background-color:#011627;background:#152D58;margin-left:0;text-overflow:ellipsis;width:100%"><div class="token-line css-zbg2gu" style="color:#d6deeb"><span class="token keyword" style="color:rgb(127, 219, 202)">import</span><span class="token plain"> </span><span class="token imports maybe-class-name">WalletConnectClient</span><span class="token plain"> </span><span class="token keyword" style="color:rgb(127, 219, 202)">from</span><span class="token plain"> </span><span class="token string" style="color:rgb(173, 219, 103)">"@walletconnect/client"</span><span class="token punctuation" style="color:rgb(199, 146, 234)">;</span><span class="token plain"></span></div><div class="token-line css-zbg2gu" style="color:#d6deeb"><span class="token plain">            </span></div><div class="token-line css-zbg2gu" style="color:#d6deeb"><span class="token plain"></span><span class="token keyword" style="color:rgb(127, 219, 202)">const</span><span class="token plain"> client </span><span class="token operator" style="color:rgb(127, 219, 202)">=</span><span class="token plain"> </span><span class="token keyword" style="color:rgb(127, 219, 202)">await</span><span class="token plain"> </span><span class="token maybe-class-name">WalletConnectClient</span><span class="token punctuation" style="color:rgb(199, 146, 234)">.</span><span class="token method function property-access" style="color:rgb(130, 170, 255)">init</span><span class="token punctuation" style="color:rgb(199, 146, 234)">(</span><span class="token punctuation" style="color:rgb(199, 146, 234)">{</span><span class="token plain"></span></div><div class="token-line css-zbg2gu" style="color:#d6deeb"><span class="token plain">  apiKey</span><span class="token operator" style="color:rgb(127, 219, 202)">:</span><span class="token plain"> </span><span class="token string" style="color:rgb(173, 219, 103)">"c4f79cc821944d9680842e34466bfbd"</span><span class="token punctuation" style="color:rgb(199, 146, 234)">,</span><span class="token plain"></span></div><div class="token-line css-zbg2gu" style="color:#d6deeb"><span class="token plain"></span><span class="token punctuation" style="color:rgb(199, 146, 234)">}</span><span class="token punctuation" style="color:rgb(199, 146, 234)">)</span><span class="token punctuation" style="color:rgb(199, 146, 234)">;</span></div></pre></div>
            </div>


            <div class="home-3-text">
                <h1>Simple Integration</h1>
                <p>WalletConnect can be integrated with just a few lines of code. SDK’s available for javascript, iOS/Swift, and Android/Kotlin.</p>
                <a href="#"><h6>Read the docs</h6> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" class="css-1kqzb4d" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
            </div>

        </div>


        <div class="home-4-main">
            <div class="home-4">
            <div class="home-4-text">
                  <h1>Any Wallet.</h1>
                <p>WalletConnect is built into more than 75 leading wallets. Easily integrate WalletConnect into your wallet with our Javascript, Swift, or Kotlin SDK’s.</p>
                 <router-link to="/Wallets"> <h6>See all wallets</h6> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" class="css-1kqzb4d" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></router-link>

            </div>

                <div class="home-4-flex-main">
            <div class="home-4-flex-inner">
               <div class="home-4-flex"><img src="../assets/rainbow.jpeg" alt=""><h6>Rainbow</h6></div>
               <div class="home-4-flex"><img src="../assets/trust.jpeg" alt=""> <h6>Trust Wallet</h6> </div>
               <div class="home-4-flex"><img src="../assets/argent.jpeg" alt=""><h6>Argent</h6></div>
               <div class="home-4-flex"><img src="../assets/metamask.jpeg" alt=""><h6>MetaMask</h6></div>
               <div class="home-4-flex"><img src="../assets/gnosis.jpeg" alt=""> <h6>Gnosis Safe Multisig</h6></div>
               <div class="home-4-flex"><img src="../assets/cryptocom.jpeg" alt=""> <h6>Crypto.com| Defi Wallet</h6></div>
               <div class="home-4-flex"><img src="../assets/pillar.jpeg" alt=""> <h6>Pillar</h6></div>
               <div class="home-4-flex"><img src="../assets/imtoken.jpeg" alt=""> <h6>imToken</h6></div>
               <div class="home-4-flex"><img src="../assets/onto.jpeg" alt=""> <h6>ONTO</h6></div>
               <div class="home-4-flex"><img src="../assets/tokenpocket.jpeg" alt=""> <h6>TokenPocket</h6></div>
               <div class="home-4-flex"><img src="../assets/mathwallet.jpeg" alt=""> <h6>MathWallet</h6></div>
               <div class="home-4-flex"><img src="../assets/Bitpay.jpeg" alt=""> <h6>BitPay</h6></div>

            </div>
            </div>
        </div>
    </div>





        <div class="home-5-main">
            <div class="home-5">
            
                <div class="home-5-flex-main" style="1">
            <div class="home-5-flex-inner" >
               <div class="home-5-flex"><img src="../assets/etherscan.jpeg" alt=""><h6>Rainbow</h6></div>
               <div class="home-5-flex"><img src="../assets/uniswap.jpeg" alt=""> <h6>Trust Wallet</h6> </div>
               <div class="home-5-flex"><img src="../assets/binance.jpeg" alt=""><h6>Argent</h6></div>
               <div class="home-5-flex"><img src="../assets/opensea.jpeg" alt=""><h6>MetaMask</h6></div>
               <div class="home-5-flex"><img src="../assets/compond.jpeg" alt=""> <h6>Gnosis Safe Multisig</h6></div>
               <div class="home-5-flex"><img src="../assets/zapper.jpeg" alt=""> <h6>Crypto.com| Defi Wallet</h6></div>
               <div class="home-5-flex"><img src="../assets/Ave.jpeg" alt=""> <h6>Pillar</h6></div>
               <div class="home-5-flex"><img src="../assets/zerion.jpeg" alt=""> <h6>imToken</h6></div>
               <div class="home-5-flex"><img src="../assets/local.jpeg" alt=""> <h6>ONTO</h6></div>
               <div class="home-5-flex"><img src="../assets/Debank.jpeg" alt=""> <h6>TokenPocket</h6></div>
               <div class="home-5-flex"><img src="../assets/tokenpocket.jpeg" alt=""> <h6>MathWallet</h6></div>
               <div class="home-5-flex"><img src="../assets/rarible.jpeg" alt=""> <h6>BitPay</h6></div>

            </div>
            </div>

            <div class="home-5-text" style="2">
                  <h1>Any Dapp.</h1>
                <p>Hundreds of dapp’s use WalletConnect to connect with wallets. Give users the choice to use your dapp with their favorite wallet on any device. There is easy integration with our Javascript, Swift, or Kotlin SDK’s.</p>
                 <router-link to="/Wallets"><h6>See all dapp's</h6> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" class="css-1kqzb4d" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></router-link>

            </div>
        </div>
    </div>




        <div class="home-6-main">
            <div class="home-6">
            <div class="home-6-text">
                  <h1>Any Chain.</h1>
                <p>WalletConnect is chain agnostic and built to work with any blockchain. Developers can create multi-chain experiences and applications.</p>
                <h6>More chains coming soon.</h6>

            </div>

                <div class="home-6-flex-main">
            <div class="home-6-flex-inner">
        
               <div class="home-6-flex"><img src="../assets/eth.png" alt=""> <h6>Etherum</h6></div>
               <div class="home-6-flex"><img src="../assets/cosmos.png" alt=""> <h6>Cosmos</h6></div>
               <div class="home-6-flex"><img src="../assets/polkadot-chain2.png" alt=""> <h6>Polkadot</h6></div>
               <div class="home-6-flex"><img src="../assets/celo-chain.png" alt=""> <h6>Celo</h6></div>
               <div class="home-6-flex"><img src="../assets/solana-chain.png" alt=""> <h6>Solana</h6></div>
               <div class="home-6-flex"><img src="../assets/near-chain2.png" alt=""> <h6>Near</h6></div>

            </div>
            </div>
        </div>
    </div>


    <div class="home-8">

        <div class="home-8-text">
            <h1>Top Features</h1>
            <h5>Rebuilt from the ground up, v2 was created with features for the next generation of blockchain applications.</h5>
        </div>



        <div class="home-8-flex-main">

                <div class="home-8-flex">
                    <img src="../assets/chain-agnostic.svg" alt="">
                    <h3>Chain Agnostic</h3>
                    <h6>Interoperate with any blockchain. Support new blockchains and rollups out-of-the-box.</h6>
                </div>

                <div class="home-8-flex">
                     <img src="../assets/multi-chain.svg" alt="">
                    <h3>Multi Chain</h3>
                    <h6>Connect to a wallet with one or more chains simultaneously and send transactions to different chains at the same time. No more chain switching.</h6>
                </div>

                <div class="home-8-flex">
                     <img src="../assets/multi-session.svg" alt="">
                    <h3>Multi Session</h3>
                    <h6>Manage as many sessions as needed. A flexible API is provided to build the desired UX.</h6>
                </div>

                <div class="home-8-flex">
                     <img src="../assets/one-time-pairing.svg" alt="">
                    <h3>One-time Pairing</h3>
                    <h6>Establishes multiple sessions from a single pairing. Only one connection for an infinite number of sessions.</h6>
                </div>

                <div class="home-8-flex">
                     <img src="../assets/reduced-bandwidth.svg" alt="">
                    <h3>Reduced Bandwidth</h3>
                    <h6>Websocket management efficiently re-uses resources to multiplex all messages through a single socket without interruption.</h6>
                </div>

                <div class="home-8-flex">
                     <img src="../assets/decentralized-messaging.svg" alt="">
                    <h3>Decentralized Messaging</h3>
                    <h6>Message relaying now uses Waku network to gossip messages through all nodes. No more depending on centralized servers.</h6>
                </div>

                <div class="home-8-flex">
                     <img src="../assets/permission-system.svg" alt="">
                    <h3>Permission System</h3>
                    <h6>Explicitly require wallets to meet compatibility with all signing methods that your dapp requires.</h6>
                </div>

                <div class="home-8-flex">
                     <img src="../assets/guaranteed-delivery.svg" alt="">
                    <h3>Guaranteed Delivery</h3>
                    <h6>Smarter caching mechanisms guarantee message delivery in more diverse network conditions.</h6>
                </div>

                <div class="home-8-flex">
                     <img src="../assets/platform-agnostic.svg" alt="">
                    <h3>Platform Agnostic</h3>
                    <h6>Works everywhere across desktop apps, browser apps, mobile apps, gaming apps and much more.</h6>
                </div>

        </div>


    </div>






  </div>   
</template>

<script>
export default {

}
</script>

<style>

</style>



