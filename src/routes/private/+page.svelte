<script lang="ts">

    export let data;
    
</script>

<p class="text-lg"> Welcome back {data?.user?.username} </p>


<form action="/auth/logout" method="POST">
    <button class="btn btn-primary">
        Logout
    </button>
</form>