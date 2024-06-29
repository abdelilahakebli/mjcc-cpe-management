<script lang="ts">

	import type { PageData } from './$types';
    import type {Detainee} from '$lib/types'
    export let data: PageData;
    let {detainees} = data;
    import {Table, DetaineeCard} from '$lib/components/ui'

</script>


<div class="grid grid-cols-3 p-8">
    <div class="col-span-2">
        <div class="flex flex-row">
            <h3 class="flex-1">Table</h3>

            <button class="btn btn-link">Ajouter</button>
        </div>
        {#if detainees != undefined}
            <Table  detainees={detainees}/>
        {/if}
    </div>

    <div class="col-span-1">
        <!-- <DetaineeCard /> -->
    </div>
</div>