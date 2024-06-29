<script lang="ts">
    export let data;
    const {user, detainees} = data;
    import {Navbar} from '$lib/components/ui'
    console.log(detainees)
</script>

<Navbar user_name={user?.name}/>
<slot/>
