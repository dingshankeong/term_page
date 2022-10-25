export default {
    commands: {
        echo: {
            description: 'prints the given text to the console',
            usage: 'echo <text>',
            fn: (...args) => args.join(" ")
        },
        linkedin: {
            description: 'opens my linkedin page',
            usage: 'linkedin',
            fn: () => {
                window.open('https://www.linkedin.com/in/dingshankeong/', '_blank')
                return "opening linkedin page..."
            }
        },
        telegram: {
            description: 'connect with me on telegram',
            usage: 'telegram',
            fn: () => {
                window.open('https://telegram.me/shan_icp', '_blank')
                return "opening github page..."
            }
        },
        github: {
            description: 'opens my github page',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/dingshankeong', '_blank')
                return "opening github page..."
            }
        },
        discord: {
            description: 'connect with me on discord',
            usage: 'discord',
            fn: () => {
                window.open('https://discordapp.com/users/802549227343314996', '_blank')
                return "connecting with me on discord..."
            }
        },
    },
    overwrites:{
        help: {
            description: 'list all available commands',
            usage: 'help',
        },
        cd: {
            description: 'change directory',
            usage: 'cd <directory>',
        },
        ls: {
            description: 'list files in the current directory',
            usage: 'ls',
        },
        mkdir: {
            description: 'make a directory',
            usage: 'mkdir <directory>',
        },
        clear: {
            description: 'clears the terminal',
            usage: 'clear'
        },
        cat: {
            description: 'get a cute cat image',
            usage: 'cat',
        }
    }
}
