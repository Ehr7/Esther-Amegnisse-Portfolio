<!-- ProjectDetails.svelte -->
<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let projectDetails = {
		name: '',
		description: '',
		images: [],
		content: '',
		techno: '',
	};

	function closeDetails() {

		dispatch('toggleDetails');
	}

</script>

<div class="fixed top-0 left-0 p-10 bg-black/50 flex justify-center items-center h-full w-full">
	<div
		class="bg-white p-5 rounded-lg shadow-white text-black flex flex-col justify-center items-center w-max"
	>
		<h2 class="text-2xl font-bold">{projectDetails.name}</h2>
		<p>{projectDetails.description}</p>
		<div class="flex justify-evenly content-center">
			<div class="flex flex-col justify-center items-center w-1/2">
				{#each projectDetails.images as image}
					<img src={image} alt={`Image de ${projectDetails.name}`} class="rounded py-3" />
				{/each}
			</div>
			<div class="flex flex-col justify-center items-center w-1/2">
				<h3 class="text-2xl font-semibold">Détails du projets</h3>
				<p class="p-3">{projectDetails.content}</p>
				<h3 class="text-2xl font-semibold">Technologies utilisées :</h3>
                <div class="p-5">
				{#each projectDetails.techno as techno}
                    <span class="text-white rounded-2xl text-sm font-bold p-3 m-2 bg-black w-fit">{techno}</span>
                {/each}
            </div>
			</div>
		</div>
		<!-- Affichez les détails de votre projet ici -->
		<button on:click={closeDetails} class="text-black">Fermer</button>
	</div>
</div>
