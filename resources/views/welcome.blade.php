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
            .titlefont {
                font-family: "TITLEFONT"
            }
        </style>
    </head>
    <body>
        <div id="loading-screen" class="flex flex-col w-full max-w-full h-screen max-h-screen transition ease-linear duration-500">
            <h1 class="m-auto text-5xl">Loading</h1>
            <span id="loading-spinner" class="m-auto"></span>
        </div>
        <div id="home-screen" class="flex w-full max-w-full h-screen max-h-screen overflow-hidden bg-center opacity-0 transition ease-linear duration-1000" style="background-image: url('/img/home_screen/home.png')">
            <h1 class="absolute left-20 top-20 text-white text-8xl titlefont w-1/2 drop-shadow-xl">Although It May Take A 1000 Tries, Our Love Will Blossom Only Once</h1>
            <img src="/img/home_screen/sarah.png" class="absolute w-1/2 right-0 top-10">
        </div>
        <div id="game-container" class="hidden w-full min-h-screen bg-black">
            
        </div>
    </body>
    @vite('resources/css/sakura.min.css')
    @vite('resources/js/app.js')
</html>
