<script lang="ts">
	import { each } from "svelte/internal";

    type Subscription = {
		name: string;
		price: number;
		included: Array<string>;
        missing: Array<string>;
        color: string;
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
        ],
        color: "bg-gray-50"
    };

    //Basis subscribtion model
    let basis: Subscription = {
        name: "Basis", 
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
        ],
        color: "bg-slate-600"
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
        ],
        color: "bg-orange-400"
    };
        
    let subscriptionModels: Array<Subscription> = [free, basis, premium]

</script>



<!--Main Div-->
<div class="grid grid-cols-6 bg-white">

    <!--Left hero div, the div with text-->
    <div class="bg-blue-50 col-start-2 col-span-2 py-44">

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
                    Password Leak Detection
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


    <!--right hero div, the div with a picture-->
    <div class="bg-blue-50 col-start-4 col-span-2 flex justify-center">
        <img src="PLACEHOLDER.png" alt="PassProtector example">
    </div>


    <!--Reviews-->
    <div class="row-start-2 col-span-6 py-5 flex justify-evenly place-items-center px-14 shadow-y">

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
    <div class="row-start-3 col-span-6 py-10 flex flex-col justify-center place-items-center">

        <h1 class="text-4xl font-helvetica text-main-300">PassProtector Plans</h1>


        <div class="flex flex-row mt-8">
            <!--Subscription model box builder-->
            {#each subscriptionModels as sub}

            <!--Subscription model box   style="background: linear-gradient(rgb(0, 91, 187) 50%, rgb(255, 213, 0) 50%);-->
            <a href="https://youtube.com"
            class="{sub.color} rounded-lg px-5 hover:px-6 mx-10 hover:mx-[2.25rem] my-2 hover:my-0 h-[30rem] hover:h-[30.5rem] w-80 hover:w-[20.5rem] shadow-y hover:shadow-yxl duration-300">
                <h1 class="font-helvetica flex justify-center text-2xl mt-8 mb-4">{sub.name}</h1>

                <!--Plan Price-->
                <div class="">
                    <span class="text-2xl italic font-medium flex justify-center">{sub.price} DKK</span>
                    <p class="flex justify-center text-sm mb-4">Per month</p>
                </div>

                <!--Model included features list-->
                <h2 class="underline"> Included </h2>
                {#each sub.included as feature}
                <p class="mb-1 italic">- {feature}</p>
                {/each}

                <!--Model missing features list-->
                <h3 class="mt-3 underline"> Missing </h3>
                {#each sub.missing as feature}
                <p class="mb-1 italic">- {feature}</p>
                {/each}
            </a>
            {/each}
        </div>
    </div>

    <!--Military grade encryption text-->
    <div class="row-start-4 col-start-2 col-span-2 border-b-2 border-gray-200 py-44 px-20">
        <h1 class="font-helvetica font-semibold text-2xl">Military Grade Encryption</h1>
        <span> 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </span>
    </div> 

    <!--Military grade encryption Picture-->
    <div class="row-start-4 col-start-4 col-span-2 border-b-2 border-gray-200" >
        <img src="logo.png" alt="Military Grade Encryption">
    </div>


    <!--Password Leak Detection-->
    <div class="row-start-5 col-start-4 col-span-2 border-b-2 border-gray-200 py-44 px-20">
        <h1 class="font-helvetica font-semibold text-2xl">Password Leak Detection</h1>
        <span> 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </span>
    </div>

    <!--Password Leak Detection Picture-->
    <div class="row-start-5 col-start-2 col-span-2 border-b-2 border-gray-200" >
        <img src="logo.png" alt="Military Grade Encryption">
    </div>


    <!--Lorum Ipsum-->
    <div class="row-start-6 col-start-2 col-span-2 border-b-2 border-gray-200 py-44 px-20">
        <div>
            <h1 class="font-helvetica font-semibold text-2xl">Lorem Ipsum</h1>
            <span> 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </span>
        </div>
    </div>

    <!--Lorem Ipsum Picture-->
    <div class="row-start-6 col-start-4 col-span-2 border-b-2 border-gray-200" >
        <img src="logo.png" alt="Military Grade Encryption">
    </div>

</div>
