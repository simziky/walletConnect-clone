import {createRouter, createWebHistory}  from "vue-router";
import Home from "./pages/home";
import Wallet from "./pages/wallets";
import Connect from "./pages/connect";



const routes = [
    {path:"/",component:Home},
    {path:"/wallets",component:Wallet},
    {path:"/Connect",component:Connect},
 
    
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;