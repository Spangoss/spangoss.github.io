var storedTheme = localStorage.getItem('theme');
var preferredTheme = getPreferredTheme();


function getPreferredTheme() {
    if (storedTheme) {
        return storedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function setTheme(theme) {
    //alert('setTheme called: ' + theme);
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-bs-theme', theme);
    }
}

setTheme(getPreferredTheme());



function showActiveTheme(theme) {
    var activeThemeIcon = document.querySelector('.theme-icon-active');
    var btnToActive = document.querySelector(`[data-bs-theme-value="` + theme + '"]');
    var activeIcon = btnToActive.querySelector('.theme-icon');
    var icon = activeIcon.classList.item(0);

    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
        element.classList.remove('active')
    })

    btnToActive.classList.add('active')
    activeThemeIcon.classList.remove('bi-sun-fill', 'bi-moon-stars-fill', 'bi-circle-half');
    activeThemeIcon.classList.add(icon);
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    //alert('Event listener working')
    if (storedTheme !== 'light' || storedTheme !== 'dark') {
        setTheme(getPreferredTheme())
    }
})

window.addEventListener('DOMContentLoaded', () => {
    //alert('Event listener working')
    showActiveTheme(getPreferredTheme());



    document.querySelectorAll('[data-bs-theme-value]')
        .forEach(toggle => {
            toggle.addEventListener('click', () => {
                var theme = toggle.getAttribute('data-bs-theme-value')
                localStorage.setItem('theme', theme)
                setTheme(theme)
                showActiveTheme(theme)
            })
        })
})
