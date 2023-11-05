let welcomeScenario = {
    name: 'template',
    dialogTree: {
        'start': [
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
                    canAdvance = false;
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
            {
                title: "Me",
                text: "Amnesia, huh...",
            },
            {
                text: "That explains why I'm not in my room and I don't recognize anyone here. What a pain...",
            },
            {
                preDialog: () => {
                    toggleTextBox(false)
                    changeSceneFTB('street-night', 8000)
                    setTimeout(() => {
                        toggleTextBox(true)
                    }, 8500)
                },
                textDelay: 9000,
                text: '......'
            },
            {
                text: "So, that's it. I had an accident, I have amnesia, and I'm supposedly going home with my 'girlfriend' that I know nothing about (but is totally cute though)."
            },
            {
                text: "There's no handbook for this and I still feel aweful after...whatever happened. I still don't even know that."
            },
            {
                text: "Things aren't all bad though."
            },
            {
                preDialog: () => {
                    changeSpriteRight('sarah_sad')
                    spriteRight.style.transitionDuration = "1.5s";
                    spriteRight.style.transitionTiming = 'linear';
                    spriteRight.classList.add('translate-x-4')
                    spriteRight.classList.remove('opacity-0')
                },
                title: "Girlfriend?",
                text: 'So...you really don\'t remember me, huh?'
            },
            {
                title: 'Me',
                text: "Sorry, I know I said I'd try to remember while walking but nothing's come up.",
            },
            {
                title: 'Me',
                text: "Actually, to tell you the truth, I still don't even know your name."
            },
            {
                preDialog: () => {
                    changeSpriteRight('sarah_nervous')
                    spriteRight.style.transitionDuration = "1s";
                    spriteRight.style.transitionTiming = 'ease-in-out';
                    spriteRight.classList.add('translate-x-8');
                },
                title: "Girlfriend?",
                text: 'Ah! Yea, I guess that\'s my bad!'
            },
            {
                preDialog: () => {
                    changeSpriteRight('sarah_sad')
                    spriteRight.style.transitionDuration = "8s";
                    spriteRight.style.transitionTiming = 'ease-in-out';
                    spriteRight.classList.add('translate-y-10');
                },
                title: "Girlfriend?",
                text: 'Actually, I don\'t know how to go about this either. It\'s kind of weird reintroducing myself to my, uh, boyfriend...'
            },
            {
                title: "Girlfriend?",
                text: 'Hmm......'
            },
            {
                preDialog: () => {
                    changeSpriteRight('sarah_happy_closed')
                    spriteRight.style.transitionDuration = "1s";
                    spriteRight.style.transitionTiming = 'ease-in-out';
                    spriteRight.className = spriteRight.className.split(" ").filter((e) => !e.includes('translate')).join(" ").trim()
                },
                title: "Girlfriend?",
                text: 'Well, anyway, I\'m Sarah. It\'s, nice to...finally be back with you, even given the circumstances.'
            },
            {
                decisionTree: [
                    {
                        text: "Nice to meet you...again? It is kinda weird haha...",
                        result: (win) => {
                            loveLevel++;
                            currentDialogTree = [
                                {
                                    preDialog: () => {
                                        win.changeSpriteRight('sarah_nervous')
                                    },
                                    title: "Sarah",
                                    text: "Haha, we'll have fun with that one."
                                },
                                {
                                    title: "Me",
                                    text: "Haha, yea.",
                                    changeDialogTree: () => {
                                        return 'feelsgoodman'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        text: "So, are you the only that I know about in my life?",
                        result: (win) => {
                            listOfConcerns.parents++;
                            listOfConcerns.prev_girl++;
                            listOfConcerns.best_friend++;
                            currentDialogTree = [
                                {
                                    preDialog: () => {
                                        changeSpriteRight('sarah_nervous')
                                    },
                                    title: "Sarah",
                                    text: "...What do you mean?"
                                },
                                {
                                    title: "Me",
                                    text: "I mean, where's my family, my friends? It's kind of weird that only my girfriend would show up if my accident was so severe."
                                },
                                {
                                    preDialog: () => {
                                        changeSpriteRight('sarah_upset')
                                        spriteRight.style.transitionDuration = "5s";
                                        spriteRight.style.transitionTiming = 'ease-in-out';
                                        spriteRight.classList.add('translate-x-20');
                                    },
                                    title: "Sarah",
                                    text: "........................Let's not talk about it right now.",
                                    textDelay: 2500
                                },
                                {
                                    title: "Me",
                                    text: "Huh?"
                                },
                                {
                                    preDialog: () => {
                                        changeSpriteRight('sarah_nervous')
                                        spriteRight.style.transitionDuration = "1s";
                                        spriteRight.style.transitionTiming = 'ease-in-out';
                                        spriteRight.classList.remove('translate-x-20');
                                    },
                                    title: "Sarah",
                                    text: "I mean, it's all so sudden, and I don't want you overwhelmed with certain things, so let's just focus on what you do have.",
                                },
                                {
                                    preDialog: () => {
                                        changeSpriteRight('sarah_sad')
                                        spriteRight.style.transitionDuration = "6s";
                                        spriteRight.style.transitionTiming = 'ease-in-out';
                                        spriteRight.classList.add('translate-x-4');
                                        spriteRight.classList.add('translate-y-4');
                                    },
                                    title: "Sarah",
                                    text: "I'm sorry I'm not really the family you're looking for..."
                                },
                                {
                                    title: "Me",
                                    text: "Oh, I didn't mean it like that! If anything, I'm really happy that someone who cared for me actually showed up at all in my time of need. Im very grateful."
                                },
                                {
                                    preDialog: () => {
                                        changeSpriteRight('sarah_nervous')
                                        spriteRight.style.transitionDuration = "3s";
                                        spriteRight.style.transitionTiming = 'ease-in-out';
                                        spriteRight.classList.remove('translate-x-4');
                                        spriteRight.classList.remove('translate-y-4');
                                    },
                                    title: "Sarah",
                                    text: "Don't mention it, I wouldn't be much use as a...girlfriend if I didn't care about you a little. It's the least I can do."
                                },
                                {
                                    title: "Me",
                                    text: "Haha, yea.",
                                    changeDialogTree: () => {
                                        return 'feelsgoodman'
                                    }
                                }
                            ]
                        }
                    },
                    {
                        text: "Well, it's nice to have such a hot girlfriend.",
                        result: () => {
                            listOfConcerns.parents--;
                            listOfConcerns.prev_girl--;
                            listOfConcerns.best_friend--;
                            listOfConcerns.sarah++;
                            console.log('Chose Option 1')
                            currentDialogTree = [
                                {
                                    preDialog: () => {
                                        changeSpriteRight('sarah_nervous')
                                        spriteRight.style.transitionDuration = "0.5s";
                                        spriteRight.style.transitionTiming = 'ease-in-out';
                                        spriteRight.classList.add('translate-x-6');
                                    },
                                    title: "Sarah",
                                    text: "Wow, talk about forward! You'll make me blush!"
                                },
                                {
                                    title: "Me",
                                    text: 'I mean, I\'m not wrong. You\'re super cute.'
                                },
                                {
                                    preDialog: () => {
                                        changeSpriteRight('sarah_happy_open')
                                        spriteRight.style.transitionDuration = "3s";
                                        spriteRight.style.transitionTiming = 'ease-in-out';
                                        spriteRight.classList.remove('translate-x-6');
                                    },
                                    title: "Sarah",
                                    text: "Hehe, I gues even with amnsesia, you still have a type."
                                },
                                {
                                    title: "Me",
                                    text: "Haha, yea.",
                                    changeDialogTree: () => {
                                        return 'feelsgoodman'
                                    }
                                }
                            ]
                        }
                    },
                ]
            },
        ],
        'feelsgoodman': [
            {
                title: 'Sarah',
                text: "..."
            },
            {
                title: 'Me',
                text: "..."
            },
            {
                preDialog: () => {
                    changeSpriteRight('sarah_neutral')
                    spriteRight.style.transitionDuration = "2s";
                    spriteRight.style.transitionTiming = 'ease-in-out';
                    spriteRight.classList.add('translate-x-4')
                },
                title: 'Sarah',
                text: "..."
            },
            {
                title: 'Me',
                text: "..."
            },
            {
                preDialog: () => {
                    changeSpriteRight('sarah_upset')
                    spriteRight.style.transitionDuration = "2s";
                    spriteRight.style.transitionTiming = 'ease-in-out';
                    spriteRight.classList.add('-translate-x-4')
                },
                title: 'Sarah',
                text: "..."
            },
            {
                title: 'Me',
                text: "..."
            },
            {
                preDialog: () => {
                    changeSpriteRight('sarah_angry')
                    spriteRight.style.transitionDuration = "1s";
                    spriteRight.style.transitionTiming = 'ease-in-out';
                    spriteRight.className = spriteRight.className.split(" ").filter((e) => !e.includes('translate')).join(" ").trim()
                },
                title: 'Sarah',
                text: "Aaah! I can't stand it, it's too awkward!"
            },
            {
                title: 'Me',
                text: "Yea..."
            },
            {
                title: 'Me',
                text: "Hey, I mean...maybe it's for the best? "
            },
            {
                preDialog: () => {
                    changeSpriteRight('sarah_neutral')
                },
                title: 'Sarah',
                text: "Hm?"
            },
            {
                title: 'Me',
                text: "I mean, I'm probably not going to be able to show whatever you saw in me. And who knows how long this thing will last."
            },
            {
                preDialog: () => {
                    changeSpriteRight('sarah_sad')
                },
                title: 'Sarah',
                text: "............."
            },
            {
                title: 'Me',
                text: "I just don't want to be a disappointment, is all."
            },
            {
                preDialog: () => {
                    spriteRight.style.transitionDuration = "3s";
                    spriteRight.style.transitionTiming = 'ease-in-out';
                    spriteRight.classList.add('translate-x-8')
                },
                title: 'Sarah',
                text: "..........................."
            },
            {
                title: 'Me',
                text: "Hm?"
            },
            {
                preDialog: () => {
                    changeSpriteRight('sarah_upset')
                },
                title: 'Sarah',
                text: "No."
            },
            {
                title: 'Me',
                text: "I'm sorry?"
            },
            {
                preDialog: () => {
                    changeSpriteRight('sarah_nervous')
                    spriteRight.style.transitionDuration = "1s";
                    spriteRight.style.transitionTiming = 'ease-in-out';
                    spriteRight.className = spriteRight.className.split(" ").filter((e) => !e.includes('translate')).join(" ").trim()
                },
                title: 'Sarah',
                text: "I mean, it's my fault. I shouldn't have made you feel that way."
            },
            {
                preDialog: () => {
                    changeSpriteRight('sarah_sad')
                },
                title: 'Sarah',
                text: "You can't help it. "
            },
            {
                preDialog: () => {
                    changeSpriteRight('sarah_upset')
                    spriteRight.style.transitionDuration = "3s";
                    spriteRight.style.transitionTiming = 'ease-in-out';
                    spriteRight.classList.add('translate-x-8')
                },
                title: 'Sarah',
                text: "...............",
                textDelay: 500
            },
            {
                preDialog: () => {
                    changeSpriteRight('sarah_teeth')
                    spriteRight.style.transitionDuration = "1s";
                    spriteRight.style.transitionTiming = 'ease-in-out';
                    spriteRight.className = spriteRight.className.split(" ").filter((e) => !e.includes('translate')).join(" ").trim()
                },
                title: 'Sarah',
                text: "Doesn't mean I can't do anything about it though."
            },
            {
                title: 'Me',
                text: "What do you mean?"
            },
            {
                preDialog: () => {
                    changeSpriteRight('sarah_nervous')
                    spriteRight.style.transitionDuration = "1s";
                    spriteRight.style.transitionTiming = 'ease-in-out';
                    spriteRight.classList.add('translate-x-4')
                },
                title: 'Sarah',
                text: "I mean, this probably sounds crazy, talking to the 'guy that doesn't know me', but I genuinely loved you. And I still do.",
                textDelay: 500
            },
            {
                title: 'Sarah',
                text: "For the longest time, I've seen the rest of my life with you. I'm not throwing any of that away."
            },
            {
                preDialog: () => {
                    changeSpriteRight('sarah_happy_open')
                    spriteRight.style.transitionDuration = "1s";
                    spriteRight.style.transitionTiming = 'ease-in-out';
                    spriteRight.className = spriteRight.className.split(" ").filter((e) => !e.includes('translate')).join(" ").trim()
                },
                title: 'Sarah',
                text: "We're still young, it's summer, and we have all the time in the world."
            },
            {
                preDialog: () => {
                    changeSpriteRight('sarah_happy_open')
                    spriteRight.style.transitionDuration = "3s";
                    spriteRight.style.transitionTiming = 'ease-in-out';
                    spriteRight.classList.add('-translate-x-8')
                },
                title: 'Sarah',
                text: "What I'm saying is...work on just being you, because that's what I like, and I'll figure out how to make you love me again. Easy!"
            },
            {
                text: "That smile, and that confidence..."
            },
            {
                title: 'Me',
                text: "Is it really that easy?"
            },
            {
                preDialog: () => {
                    changeSpriteRight('sarah_happy_closed')
                },
                title: 'Sarah',
                text: "Sure it is! We'll go on dates, we'll go to events, all the things we used to do."
            },
            {
                title: 'Me',
                text: "Sounds fun, let's do it!"
            },
            {
                text: "And we'll just call this the interpretive ending simply due to time constraints."
            },
        ]
    }
}

export default welcomeScenario;