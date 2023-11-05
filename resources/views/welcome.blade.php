<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        @vite('resources/css/app.css')
        <style>
            @font-face {
                font-family: "TITLEFONT";
                src: url("/fonts/title.ttf")
            }
            .titlefont, #home-sarah {
                font-family: "TITLEFONT";
                filter: drop-shadow(4px 4px 4px #000);
            }

            @supports (-webkit-text-stroke: 1px black) {
                .titlefont {
                    /* -webkit-text-stroke: 1px black; */
                    /* -webkit-text-fill-color: white; */
                }
            }
        </style>
    </head>
    <body class="">
        <div id="content-container" class="min-w-full max-w-full h-screen min-h-screen max-h-screen overflow-hidden">
            <div id="loading-screen" class="bg-white flex flex-col w-full max-w-full h-screen max-h-screen transition ease-linear duration-500">
                <h1 class="m-auto text-5xl">Loading</h1>
                <span id="loading-spinner" class="m-auto"></span>
            </div>
            <div id="home-screen" class="grid w-full min-w-full max-w-full h-screen max-h-screen overflow-hidden bg-center bg-cover opacity-0 transition ease-linear duration-2000" style="background-image: url('/img/home_screen/home.png')">
                <h1 id="home-title" class="absolute left-20 top-20 text-white text-2xl md:text-6xl 2xl:text-8xl titlefont w-1/2 drop-shadow-xl transition ease-linear duration-500">Although It May Take A 1000 Tries, Our Love Will Blossom Only Once</h1>
                <img id="home-sarah" src="/img/home_screen/sarah.png" class="absolute w-1/2 right-0 top-10 transition ease-linear duration-500">
                <div id="home-menu" class="absolute left-20 bottom-20 flex flex-col gap-4 transition ease-linear duration-500">
                    <button onclick="startGame()" class="w-52 py-2 bg-fuchsia-300 text-white text-xl font-bold rounded-full transition ease-in-out duration-50 hover:bg-fuchsia-400">Start</button>
                    <button onclick="showTutorial()" class="w-52 py-2 bg-fuchsia-300 text-white text-xl font-bold rounded-full transition ease-in-out duration-50 hover:bg-fuchsia-400">How To Play</button>
                    <button onclick="showCredits()" class="w-52 py-2 bg-fuchsia-300 text-white text-xl font-bold rounded-full transition ease-in-out duration-50 hover:bg-fuchsia-400">Credits</button>
                    <button class="w-52 py-2 bg-fuchsia-300 text-white text-xl font-bold rounded-full transition ease-in-out duration-50 hover:bg-fuchsia-400">Exit</button>
                </div>
                <div id="home-credits" class="flex flex-col relative -z-50 opacity-0 gap-4 p-8 m-auto w-1/2 h-[60vh] bg-fuchsia-300/90 transition ease-linear duration-500">
                    <span class="text-lg text-white"><b>Conceptualization and Game Design:</b> Tyler Johnson</span>
                    <span class="text-lg text-white"><b>Programming: Tyler Johnson</b></span>
                    <span class="text-lg text-white"><b>Stable Diffusion Prompt Engineering:</b> Tyler Johnson</span>
                    <span class="text-lg text-white"><b>DevOps Engineer:</b> Tyler Johnson</span>
                    <button onclick="hideCredits()" class="absolute -bottom-20 right-0 w-52 py-2 bg-fuchsia-300 text-white text-xl font-bold rounded-full transition ease-in-out duration-50 hover:bg-fuchsia-400">Back</button>
                </div>
                <div id="home-tutorial" class="flex flex-col relative -z-50 opacity-0 gap-4 p-8 m-auto w-1/2 h-[60vh] bg-fuchsia-300/90 transition ease-linear duration-500">
                    <p class="lg:text-lg text-white">Welcome to Project SenTry (that's the shorthand). This is a special game that combines elements of visual novels and rogue likes to create a unique style of story telling that doesn't necessarily make sense, but adds challenge to the typical VN genre.</p>
                    <p class="lg:text-lg text-white">Progress through the story and make decisions based on your situation. But be careful, your actions have consequences and you need only slip up once before things can come crumbling down.</p>
                    <p class="lg:text-lg text-white">To advance the story, simply click on the game or press the <b>spacebar</b> button. When you need to choose an option, you can simply click on the option or press the option's corresponding number.</p>
                    <button onclick="hideTutorial()" class="absolute -bottom-20 right-0 w-52 py-2 bg-fuchsia-300 text-white text-xl font-bold rounded-full transition ease-in-out duration-50 hover:bg-fuchsia-400">Back</button>
                </div>
            </div>
            <div id="game-screen" class="flex relative w-full min-w-full max-w-full overflow-hidden min-h-screen max-h-screen h-screen bg-black">
                <div id="textbox" class="absolute bottom-3 left-[16.66%] mx-auto flex flex-col w-2/3 h-[30vh]">
                    <div class="bg-fuchsia-300/90 border-4 border-fuchsia-500 rounded-t-lg w-1/3 min-w-[200px] h-[8vh] grid pl-4">
                        <span id="textbox-title" class="text-white my-auto text-2xl lg:text-3xl xl:text-4xl">Sarah</span>
                    </div>
                    <div class="bg-fuchsia-300/90 border-4 border-fuchsia-500 rounded-b-lg rounded-r-lg w-full h-[22vh] grid px-4 py-1.5 overflow-hidden">
                        <p id="textbox-text" class="mx-auto w-full text-white text-xl 2xl:text-2xl overflow-hidden"></p>
                    </div>
                </div>
            </div>
        </div>
    </body>
    @vite('resources/css/sakura.min.css')
    @vite('resources/js/app.js')
</html>
