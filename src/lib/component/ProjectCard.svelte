<!-- ProjectCard.svelte -->
<script lang="ts">
    import { createEventDispatcher } from 'svelte';
  
    export let projectId: string;
    export let projectName: string;
    export let projectDescription: string;
    export let imageUrl: any;
  
    const dispatch = createEventDispatcher();
    let isHovered = false;

    const showDetails = () => {
    dispatch('showDetails', projectId);
  };
  </script>
  
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="project-card bg-center bg-cover bg-no-repeat shadow-lg flex flex-col justify-center items-center"
    on:mouseenter={() => isHovered = true}
    on:mouseleave={() => isHovered = false}
  >
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src={imageUrl} class="w-1/2" />
    <div class="text-white text-center mt-4">
    
      <p class="font-bold">{projectName}</p>
      <p>{projectDescription}</p>
    </div>
    {#if isHovered}
      <button on:click={showDetails}>Voir les détails</button>
    {/if}
  </div>
  
  
  <style>
    .project-card {
      @apply w-full cursor-pointer overflow-hidden rounded-lg;
    }
  
    .project-card:hover {
      @apply scale-110; /* Grossit la carte */
    }
  
    .project-card {
      @apply transition-transform duration-300 ease-in-out; /* Animation douce */
    }
  </style>
  