// Funções do Terminal
function setupTerminal() {
    const terminalInput = document.getElementById('terminal-cmd');
    const terminalOutput = document.getElementById('terminal-output');


    //-------------------- LOGICA DO TERMINAL-----------------
    const commands = {
        'help': {
            description: 'Mostra os comandos disponíveis',
            execute: () => showHelp()
        },
        'home': {
            description: 'Volta para a página inicial',
            execute: () => navigate('index.html')
        },
        'sobre': {
            description: 'Navega para a página Sobre',
            execute: () => navigate('sobre.html')
        },
        'portfolio': {
            description: 'Navega para a página Portfólio',
            execute: () => navigate('portfolio.html')
        },
        'contato': {
            description: 'Navega para a página Contato',
            execute: () => navigate('contato.html')
        }
    };

    function showHelp() {
        addOutput('<div>Comandos disponíveis:</div>');
        for (const cmd in commands) {
            addOutput(`<div><span style="color:#00ff00">${cmd}</span> - ${commands[cmd].description}</div>`);
        }
    }

    function navigate(page) {
        addOutput(`<div>Redirecionando para ${page}...</div>`);
        setTimeout(() => {
            window.location.href = page;
        }, 1000);
    }


    function addOutput(content) {
        terminalOutput.innerHTML += content;
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    if (terminalInput) {
        terminalInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                const input = terminalInput.value.trim().toLowerCase();
                terminalInput.value = '';
                
                if (commands[input]) {
                    commands[input].execute();
                } else {
                    addOutput(`<div>Comando não encontrado, digite help:</div>`);
                }
            }
        });

        document.addEventListener('click', () => {
            terminalInput.focus();
        });
    }
}
//-------------------- FIM LOGICA DO TERMINAL-----------------


// Inicializar o FinisherHeader
new FinisherHeader({
    "count": 12,
    "size": {
        "min": 1300,
        "max": 1500,
        "pulse": 0.9
    },
    "speed": {
        "x": {
            "min": 0.6,
            "max": 3
        },
        "y": {
            "min": 0.6,
            "max": 3
        }
    },
    "colors": {
        "background": "#141214", // Fundo escuro
        "particles": [
            "#2f2f2f", // Cinza escuro
            "#000000", // Preto
            "#5a5555", // Cinza médio
            "#706f6f"  // Cinza claro
        ]
    },
    "blending": "lighten", // Mistura de partículas
    "opacity": {
        "center": 0.6,
        "edge": 0
    },
    "skew": -2,
    "shapes": [
        "c" // Partículas circulares
    ]
});

//-------------------- Inicialização do FinisherHeader----------------
function initFinisherHeader() {
    if (typeof FinisherHeader !== 'undefined') {
        new FinisherHeader({
            "count": 12,
            "size": {
                "min": 1300,
                "max": 1500,
                "pulse": 0.9
            },
            "speed": {
                "x": {
                    "min": 0.6,
                    "max": 3
                },
                "y": {
                    "min": 0.6,
                    "max": 3
                }
            },
            "colors": {
                "background": "#141214",
                "particles": [
                    "#2f2f2f",
                    "#000000",
                    "#5a5555",
                    "#706f6f"
                ]
            },
            "blending": "lighten",
            "opacity": {
                "center": 0.6,
                "edge": 0
            },
            "skew": -2,
            "shapes": [
                "c"
            ]
        });
    }
}
document.getElementById('menu').addEventListener('click', function() {
    this.classList.toggle('active');
});

// ----------------Inicialização do FinisherHeader-------------


// ---------------Inicialização de todos os componentes-------------------
document.addEventListener("DOMContentLoaded", function() {
    setupTerminal();
    setupFormValidation();
    setupMenuHover();
    setupProjectAnimations();
    initFinisherHeader();
});