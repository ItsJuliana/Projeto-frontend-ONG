let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const updateAriaLabel = () => {
    const isDark = document.body.classList.contains('darkmode')
    if (themeSwitch) {
        themeSwitch.setAttribute('aria-label', isDark ? 'Ativar modo claro' : 'Ativar modo escuro')
    }
}

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
    updateAriaLabel()
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.removeItem('darkmode')
    updateAriaLabel()
}

if (darkmode === 'active') {
    enableDarkmode()
} else if (darkmode === null && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enableDarkmode()
}

document.addEventListener('click', (e) => {
    if (e.target.closest('#theme-switch')) {
        darkmode = localStorage.getItem('darkmode')
        darkmode !== 'active' ? enableDarkmode() : disableDarkmode()
    }
})