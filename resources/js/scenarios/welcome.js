let welcomeScenario = {
    name: 'template',
    dialogTree: {
        'start': [
            {
                text: "..."
            },
            {
                text: "......"
            },
            {
                text: ".............................."
            },
            {
                preDialog: () => {
                    changeScene('hospital-bed')
                },
                calcDialog: () => {
                    return "......ow..."
                }
            },
            {
                calcDialog: () => {
                    return "......owowowo..."
                }
            },
            {
                text: "Where am I? Is this a hospital?"
            },
            {
                title: '???',
                text: "Doctor! He's waking up!"
            },
            {
                text: "Who is that?"
            },
            {
                preDialog: () => {
                    changeSpriteRight('sarah_nervous')
                    spriteRight.style.transitionDuration = "3s";
                    spriteRight.style.transitionTiming = 'linear';
                    spriteRight.classList.remove('opacity-0')
                },
                title: "???",
                text: "Don't worry babe, you're gonna be ok.",
                textDelay: 3000,
            },
            {
                text: "Woah, she's pretty cute."
            },
            {
                text: "And she said...babe?"
            },
            {
                preDialog: () => {
                    changeSpriteRight('sarah_teeth')
                    spriteRight.style.transitionDuration = "0.5s";
                    spriteRight.style.transitionTiming = 'ease-in-out';
                    spriteRight.classList.add('translate-x-6');
                },
                title: "???",
                text: "Doc! I said he's waking up!",
            },
            {
                preDialog: () => {
                    spriteRight.style.transitionDuration = "0.5s";
                    spriteRight.style.transitionTiming = 'linear';
                    spriteRight.classList.add('opacity-0');
                    setTimeout(() => {
                        spriteRight.classList.remove('translate-x-6');
                    }, 1000)
                },
                title: "Doctor?",
                text: "Yes, yes, hear I am. I'm just as excited as you are.",
            },
            {
                text: "What the heck is going on?"
            },
            {
                title: "Doctor",
                text: "You've had quite the journey to get here, back to the world of the living. Hope you had a nice nap."
            },
            {
                title: "Me",
                text: ".........I'm sorry"
            },
            {
                title: "Me",
                text: "I have no idea what's going on right now. I don't even know who you guys are."
            },
            {
                preDialog: () => {
                    changeSpriteRight('sarah_sad')
                    spriteRight.style.transitionDuration = "0.25s";
                    spriteRight.style.transitionTiming = 'linear';
                    spriteRight.classList.remove('opacity-0');
                },
                title: "???",
                text: "...",
            },
            {
                preDialog: () => {
                    spriteRight.style.transitionDuration = "0.5s";
                    spriteRight.style.transitionTiming = 'linear';
                    spriteRight.classList.add('opacity-0');
                    setTimeout(() => {
                        spriteRight.classList.remove('translate-x-6');
                    }, 1000)
                },
                title: "Doctor?",
                text: "Hm, that's what I was afraid of. With the way you were, a case of amnesia was probably the best outcome.",
            },
        ],
    }
}

export default welcomeScenario;