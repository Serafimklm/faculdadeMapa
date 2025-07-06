
        //----------------------------------FUNCIONALIDADE DO TERMINAL LATERAL ESQUERDO, USADO EM PORTFOLIO, SOBRE, CONTATO----------------------------------//
    const terminalInput = document.getElementById('terminal-cmd');
    const terminalOutput = document.getElementById('terminal-output');

    // Lista de comandos disponíveis
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

    // Exibir ajuda
    function showHelp() {
        addOutput('<div>Comandos disponíveis:</div>');
        for (const cmd in commands) {
            addOutput(`<div><span style="color:#00ff00">${cmd}</span> - ${commands[cmd].description}</div>`);
        }
    }

    // Navegar para outra página
    function navigate(page) {
        addOutput(`<div>Redirecionando para ${page}...</div>`);
        setTimeout(() => {
            window.location.href = page;
        }, 1000);
    }

    // Adicionar saída ao terminal
    function addOutput(content) {
        terminalOutput.innerHTML += content;
        terminalOutput.scrollTop = terminalOutput.scrollHeight; // Rola para o final
    }

    // Processar entrada do usuário
    terminalInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const input = terminalInput.value.trim();
            terminalInput.value = ''; // Limpa o campo de entrada
            if (commands[input]) {
                commands[input].execute();
            } else {
                addOutput(`<div>Comando não encontrado, digite "help"</div>`);
            }
        }
    });
