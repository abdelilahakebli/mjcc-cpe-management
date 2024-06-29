<script lang="ts">
	  import type { Detainee } from "$lib/types";

    export let detainees:Detainee[];

    const header:Detainee = {
      id: "",
      cpe_id:"",
      name: "",
      name_ar: "",
      photo:"",
      date_of_birth:new Date()
    }
    const headers = Object.keys(header) as (keyof Detainee)[];
    console.log(headers)

    function handleDetaineeDetains(event:Event) {

    }
</script>

<div class="overflow-x-auto">
    <table class="table table-xs table-zebra">
      <thead>
        <tr>
          <th></th>
          <th>Nom</th>
          <th>Nom en arabe</th>
          <th>Date de naissance</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>

        {#each detainees as detainee}
          <tr>
            <th>{detainee.cpe_id}</th>
            <td>{detainee.name}</td>
            <td>{detainee.name_ar}</td>
            <td>{detainee.date_of_birth?.toString().split(' ')[0]}</td>
            <td>
              <button class="btn btn-link m-0 btn-xs leading-normal p-0 text-sm" value={detainee.id}>View</button>
            </td>
          </tr>
        {/each}
      
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          <th>Nom</th>
          <th>Nom en arabe</th>
          <th>Date de naissance</th>
          <th>Actions</th>
        </tr>
      </tfoot>
    </table>
  </div>