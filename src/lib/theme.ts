import { browser } from "$app/environment";
import { writable } from "svelte/store";

let theme_color:string|null = ""

if (browser){
    theme_color = localStorage.getItem("theme")
}

export const theme = writable(theme_color)

theme.subscribe( value => {
    if (browser){
        localStorage.setItem("theme", value ? value : "light")
        document.documentElement.setAttribute('data-theme', value? value : "");
    }
} )