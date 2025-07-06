const commandInput = document.getElementById('command-input');
const terminalOutput = document.getElementById('terminal-output');



// Comandos disponíveis
const commands = {
    'help': {
        description: 'Mostra esta mensagem de ajuda',
        execute: () => showHelp()
    },
    'clear': {
        description: 'Limpa o terminal',
        execute: () => clearTerminal()
    },
    'home': {
        description: 'Navega para a página inicial',
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

// Mostrar ajuda
function showHelp() {
    addOutput('<div>Comandos disponíveis:</div>');
    for (const cmd in commands) {
        addOutput(`<div><span style="color:#00ff00">${cmd}</span> - ${commands[cmd].description}</div>`);
    }
}

// Limpar terminal
function clearTerminal() {
    terminalOutput.innerHTML = '';
}

// Navegação
function navigate(page) {
    addOutput(`<div>Redirecionando para ${page}...</div>`);
    setTimeout(() => {
        window.location.href = page;
    }, 1000);
}

// Adicionar saída ao terminal
function addOutput(html) {
    terminalOutput.innerHTML += html;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

// Processar comandos
commandInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const command = commandInput.value.trim().toLowerCase();
        addOutput(`<div><span style="color:#00ff00">joao@portfolio:~$</span> ${command}</div>`);
        
        if (commands[command]) {
            commands[command].execute();
        } else if (command) {
            addOutput(`<div>Comando não encontrado: ${command}</div>`);
            addOutput('<div>Digite "help" para ver os comandos disponíveis</div>');
        }
        
        commandInput.value = '';
    }
});

// Manter o foco no input
document.addEventListener('click', () => {
    commandInput.focus();
});