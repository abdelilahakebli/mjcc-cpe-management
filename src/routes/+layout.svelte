<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import {theme} from '$lib/theme'


	async function handleKeyPress (event:KeyboardEvent) {
		
    // Check if Control/Command key is pressed along with 'K'
		if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
			event.preventDefault()
			enableSearch(); // Call a function to enable the search input
		}
	}

	async function enableSearch()  {
		
		let searchBox:HTMLElement|null = document.getElementById("searchBox")

		if (searchBox) {
			searchBox.focus()
		}
	}

	onMount( () => {
		document.documentElement.setAttribute('data-theme', $theme ? $theme : "");
		window.addEventListener('keydown', handleKeyPress);

		return () => {
			window.removeEventListener('keydown', handleKeyPress);
		}
	} )
</script>

<slot />
