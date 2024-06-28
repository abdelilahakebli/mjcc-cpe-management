

<div class="h-screen flex ">

    <div class="card card-compact bg-base-100 w-full sm:w-[500px] m-auto">
        <div class="card-body shadow-xl">
          <h3 class="card-title">Avertissement!</h3>
          <div class="whitespace-pre-line text-sm">
            Vous êtes sur le point d'accéder à un système sécurisé. Toute tentative non autorisée d'accès ou d'altération de ce système est strictement interdite et sera punie par la loi. Les activités malveillantes sont surveillées et enregistrées en permanence.
    
            Si vous continuez à accéder à ce système sans autorisation, vous risquez de graves conséquences légales, y compris mais sans s'y limiter, des poursuites judiciaires et des sanctions pénales.
            
            Nous vous invitons à naviguer de manière responsable et légale.
          </div>
          <div class="card-actions justify-end">
            <form action="?/accept" method="POST">
                <button class="btn btn-link" type="submit">Accept</button>
            </form>

            <form action="/auth/logout" method="post">
                <button class="btn btn-link" type="submit">Deny</button>
            </form>
    
          </div>
        </div>
      </div>
</div>