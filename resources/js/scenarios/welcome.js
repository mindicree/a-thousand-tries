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
                title: "Mememe",
                text: ".............................."
            },
            {
                calcDialog: () => {
                    return "......ow..."
                }
            },
        ],
    }
}

export default welcomeScenario;