<script lang="ts">
    import {ThemeController} from '$lib/components/ui'
</script>



<div class="grid grid-cols-2 xl:grid-cols-3 gap-4 bg-base-100 h-screen">
    <div class="bg-base-500 col-span-3 xl:col-span-1  flex flex-col">
      <ThemeController/>

        <div class="w-96 m-auto">
            <form class="card-body" action="?/login" method="post">
                <div class="form-control">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="text-xl flex items-center gap-2 mb-4">
                        <span>
                            Sign in
                        </span>
                    </label>
                  <!-- svelte-ignore a11y-label-has-associated-control -->
                  <label class="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      class="h-4 w-4 opacity-70">
                      <path
                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                      <path
                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="text" class="grow" name="username" placeholder="Username / Email" required  />
                  </label>
                </div>
                <div class="form-control">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="input input-bordered flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          class="h-4 w-4 opacity-70">
                          <path
                            fill-rule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clip-rule="evenodd" />
                        </svg>
                        <input type="password" class="grow" name="password" placeholder="Password" required/>
                      </label>

                </div>
                <div class="form-control mt-2">
                  <button class="btn btn-primary" type="submit">Login</button>
                </div>
              </form>
        </div>


    </div>
    <div class="invisible xl:visible col-span-2 bg-[url('/splashlogo.svg')] bg-center bg-no-repeat bg-cover">
        <!-- <img src="/splashlogo.svg" alt="MJCC - CPE - Nador - Splash Logo"> -->
    </div>

</div>