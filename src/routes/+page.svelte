<script lang="ts">
	import { each } from "svelte/internal";

    type Subscription = {
		name: string;
		price: number;
		included: Array<string>;
        missing: Array<string>;
	}

    // Free subscribtion model
    let free: Subscription = {
        name: "Free", 
        price: 0, 
        included: [
            "Google autofill", 
            "10 passwords"
        ],
        missing: [
            "Unlimited passwords", 
            "Family Sharing", 
            "Password sharing",
            "Password leak detection"
        ]
    };

    //Basis subscribtion model
    let basis: Subscription = {
        name: "Basic", 
        price: 10, 
        included: [
            "Google autofill", 
            "100 passwords", 
            "Family Sharing", 
            "Password sharing"
        ],
        missing: [
            "Unlimited passwords",
            "Password leak detection"
        ]
    };
    
    //Premium subscribtion model
    let premium: Subscription = {
        name: "Premium", 
        price: 20, 
        included: [
            "Google autofill", 
            "Unlimited passwords", 
            "Family Sharing", 
            "Password sharing",
            "Password leak detection"
        ],
        missing: [
            "Nothing"
        ]
        };
        
    let subscriptionModels: Array<Subscription> = [free, basis, premium]

</script>



<!--Main Div-->
<div class="bg-white">

    <!--Homepage top div-->
    <div class="bg-blue-50 w-12/12 py-16 md:py-20 lg:py-24 px-20 flex flex-row place-items-center">

        <!--Left div, the div with text-->
        <div class="w-7/12">

            <!--Header-->
            <h1 class="text-4xl font-helvetica text-main-300 mb-2">
                Take control of your online security with PassProtector!
            </h1>

            <!--Sales pitch-->
            <span class="text-xl">
                Unlock the power of online security with PassProtector! Say goodbye to endless password resets, account lockouts, and security headaches. Store all your passwords in one secure and convenient place and enjoy peace of mind with just one master password.
            </span>
    
            <!--list of features-->
            <ul class="my-10">
                <li class="flex flex-row">
                    <img class="h-5" src="checkmark.png" alt="checkmark">
                    <h2 class="ml-2 mb-3 text-xl">
                        Military grade encryption
                    </h2>
                </li>
                <li class="flex flex-row">
                    <img class="h-5" src="checkmark.png" alt="checkmark">
                    <h3 class="ml-2 mb-3 text-xl">
                        Password generation
                    </h3>
                </li>
                <li class="flex flex-row">
                    <img class="h-5" src="checkmark.png" alt="checkmark">
                    <h4 class="ml-2 text-xl">
                        Endnu en god ting ved vores passwordmanager
                    </h4>
                </li>
            </ul>

            <!--Try for free button-->
            <a href="/auth/register"
            class="bg-main-300 rounded-lg p-2 font-poppins text-white ease-in duration-150 hover:bg-main-200 ">
                Try PassProtector for Free
            </a>
        </div>

        <!--right div, the div with a picture-->
        <div class="w-5/12 flex justify-center">
            <img class="h-max" src="PLACEHOLDER.png" alt="PassProtector example">
        </div>
    </div>

    <!--Reviews-->
    <div class="py-5 flex justify-evenly place-items-center px-14 shadow-y">

        <!--Review carousel-->
        <div>

            <!--Corousel items, review list-->
            <div>

                <!--MKBHD review-->
                <div id="review" class="">
                    <h1 class="italic font-bold mb-1 text-main-300">Marques Brownley (MKBHD)</h1>
                    <span class="mb-1 text-black">
                        If you're looking for a new password manager, I'd definitely give PassProtector a look.
                    </span>
                </div>

                <!--Harald review-->
                <div id="review" class="">
                    <h1 class="italic font-bold mb-1 text-main-300">Harald Riber (Jøden)</h1>
                    <span class="mb-1 text-black">
                        Bedre end badene i Auschwitz
                    </span>
                </div>

            </div>

        </div>


        <!--Trust pilot billede-->
        <img class="w-48 h-16 mr-4 object-center" src="trustpilot5stars.png" alt="Trustpilot rating">


        <!--Amount of users-->
        <div class="flex flex-col place-items-center">
            <h1 class="font-bold text-3xl">
                4.3B+
            </h1>
            <span class="text-sm">
                users worldwide
            </span>
        </div>
    </div>

    
    <!--Subscription models-->
    <div class="py-10 flex flex-row justify-center place-items-center">

        <!--Subscription model box builder-->
        {#each subscriptionModels as sub}

        <!--Subscription model box-->
        <div class="border-2 border-green-500 py-4 rounded-2xl w-60 px-5 mx-4 hover:py-6 duration-300">
            <h1 class="flex justify-center mb-6 font-bold text-lg">{sub.name}</h1>

            <!--Model included features list-->
            <h2> Included </h2>
            {#each sub.included as feature}
            <p class="mb-1 italic">- {feature}</p>
            {/each}

            <!--Model missing features list-->
            <h3 class="mt-3"> Missing </h3>
            {#each sub.missing as feature}
            <p class="mb-1 italic">- {feature}</p>
            {/each}
        </div>
        {/each}

    </div>
</div>
