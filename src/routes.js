/*jshint esversion: 6*/

import Home from "./components/pages/Home.vue";
import About from "./components/pages/About.vue";
import Shop from "./components/pages/Shop.vue";
import Contact from "./components/pages/Contact.vue";

export const routes = [
    {
        path: '/', label: "Accueil", name: "home",
        component: Home
    },
    {
        path: '/about', label: "About", name: "about",
        component: About
    },
    {
        path: "/shop", label: "Shop", name:"shop",
        component: Shop
    },
    {
        path: "/contact", label: "Contact", name:"contact",
        component: Contact
    }
];
