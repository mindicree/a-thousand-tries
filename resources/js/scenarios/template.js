let template = {
    name: 'template',
    isFailed: false,
    dialogTree: {
        'start': [
            {
                title: 'Some Person',
                text: 'Lorem ipsum something about the way she makes me feel', // use $name for fake name
                textDelay: 0,
                preDialog: () => {
                    // for animations, sfx, changing scenes, and hiding textbox temporarily
                    console.log()
                },
                postDialog: () => {
                    // for assigning memories, creating alerts, loading the next dialog tree, and ending scenarios
                    console.log()
                },
                calcDialog: () => {
                    // ignore text and use case situation
                    if (Math.random() < 0.5) {
                        return "Some text"
                    } else {
                        return "Some other text"
                    }
                },
                changeDialogTree: () => {
                    // move to a particular dialog tree depending on situation, also can perform certain calculations beforehand
                    return "Name of dialog tree"
                },
                decisionTree: [
                    {
                        text: "Option 1",
                        result: () => {
                            console.log('Chose Option 1')
                        }
                    },
                    {
                        text: "Option 2",
                        result: () => {
                            console.log('Chose Option 2')
                        }
                    },
                ]
            },
        ],
    }
}

export default template;