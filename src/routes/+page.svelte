<script lang="ts">
    let i

</script>



<!--Main Div-->
<div class="bg-white">

    <!--Homepage top div-->
    <div class="bg-blue-50 w-12/12 py-[22vh] lg:px-40 md:px-20 flex flex-row place-items-center">

        <!--Left div, the div with text-->
        <div class="w-8/12 px-20">

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
        <div class="w-4/12 flex justify-center">
            <img class="h-96" src="PLACEHOLDER.png" alt="PassProtector example">
        </div>
    </div>

    <!--Reviews-->
    <div class="h-40 flex justify-evenly place-items-center px-14 shadow-y">

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

    
    <!--Subscription model-->
    <div class="h-[50vh] flex flex-row justify-center place-items-center">

        <!--Basis model-->
        <div class="border-2 border-green-500 w-64 h-[80%] mr-3 rounded-3xl py-3 px-6 hover:py-6 hover:px-10 hover:w-[18rem] hover:h-[85%] hover:mx-0 duration-150">
            <h1 class="flex justify-center mb-3 font-bold">
                Basis
            </h1>
            <ul>
                <li class="mb-1"> - Google autofill </li>
                <li class="mb-1"> - Unlimited passwords </li>
                <li class="mb-1"> - Multiple accounts </li>
                <li class="mb-1"> - Password sharing </li>
                <li class="mb-1"> - Password leak detection </li>
            </ul>
        </div>

        <!--Medium model-->
        <div class="border-2 border-green-500 w-64 h-[80%] mx-3 rounded-3xl py-3 px-6 hover:py-6 hover:px-10 hover:w-[18rem] hover:h-[85%] hover:mx-0 duration-150">
            <h1 class="flex justify-center mb-3 font-bold">
                Medium
            </h1>
            <ul>
                <li class="mb-1"> - Google autofill </li>
                <li class="mb-1"> - Unlimited passwords </li>
                <li class="mb-1"> - Multiple accounts </li>
                <li class="mb-1"> - Password sharing </li>
                <li class="mb-1"> - Password leak detection </li>
            </ul>
        </div>

        <!--Expensive model-->
        <div class="border-2 border-green-500 w-64 h-[80%] ml-3 rounded-3xl py-3 px-6 hover:py-6 hover:px-10 hover:w-[18rem] hover:h-[85%] hover:mx-0 duration-150">
            <h1 class="flex justify-center mb-3 font-bold">
                Premium
            </h1>
            <ul>
                <li class="mb-1"> - Google autofill </li>
                <li class="mb-1"> - Unlimited passwords </li>
                <li class="mb-1"> - Multiple accounts </li>
                <li class="mb-1"> - Password sharing </li>
                <li class="mb-1"> - Password leak detection </li>
            </ul>
        </div>

    </div>
</div>
