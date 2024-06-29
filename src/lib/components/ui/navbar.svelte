<script lang="ts">
	export let user_name:string;

    
	let query: string = '';
	let form: HTMLFormElement;
</script>

<nav class="navbar bg-base-200">
	<div class="navbar-start">
		<div class="dropdown mr-4">
			<div tabindex="0" role="button" class="btn btn-ghost">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/>
				</svg>
				Menu
			</div>
			<ul class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
				<li><a>Dashboard</a></li>
				<li><a>Portfolio</a></li>
				<li><a>About</a></li>
			</ul>
		</div>

		<label class="input input-bordered flex items-center gap-2">
			<input id="searchBox" type="text" class="grow" placeholder="Search" bind:value={query} />
			<kbd class="kbd kbd-sm">⌘</kbd>
			<kbd class="kbd kbd-sm">K</kbd>
		</label>
	</div>

	<div class="navbar-center">
		<div class="max-w-[150px]">
			<img src="/cpen2.png" alt="mjcc logo" />
		</div>
		<div class="divider divider-horizontal m-0"></div>
		<div class="max-w-[150px]">
			<img src="/mjcc.png" alt="mjcc logo" />
		</div>
	</div>

	<div class="navbar-end">
		<!-- <button class="btn btn-circle btn-ghost">
			<div class="indicator">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
					/>
				</svg>
				<span class="badge indicator-item badge-primary badge-xs"></span>
			</div>
		</button> -->

		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost">
				{user_name}
				<svg
					viewBox="0 0 24 24"
					fill="none"
					class="h-5 w-5"
					stroke="currentColor"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
			<ul class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
				<li>
					<form action="/auth/logout" method="POST" bind:this={form}>
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a href="#" on:click={() => form.submit()}>Logout</a>
					</form>
				</li>
			</ul>
		</div>
	</div>
</nav>
