/**
 * Switch between light and dark themes (color modes)
 * Copyright 2023 Createx Studio
 */

(() => {
    'use strict'

    const getStoredTheme = () => localStorage.getItem('theme')
    const setStoredTheme = theme => localStorage.setItem('theme', theme)

    const getPreferredTheme = () => {
        const storedTheme = getStoredTheme()
        if (storedTheme) {
            return storedTheme
        }

        // Set default theme
        // Possible options: 'light', 'dark' or system color mode (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        return (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    }

    const setTheme = theme => {

        const colors = {
            dark: '#1F2124', // color for the dark-mode theme
            light: '#F7F7F9' // color for the retro theme
        }

        var metaThemeColor = document.querySelector("meta[name=theme-color]")

        if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-bs-theme', 'dark')
            metaThemeColor.setAttribute('content', colors[theme]);
        } else {
            document.documentElement.setAttribute('data-bs-theme', theme)
            metaThemeColor.setAttribute('content', colors[theme]);
        }
    }

    setTheme(getPreferredTheme())

    const showActiveTheme = (theme) => {
        const themeSwitcher = document.querySelector('[data-bs-toggle="mode"]')
        const themeSwitcherCheck = themeSwitcher.querySelector('input[type="checkbox"]')

        if (!themeSwitcher) {
            return
        }

        if (theme === 'dark') {
            themeSwitcherCheck.checked = 'checked'
        } else {
            themeSwitcherCheck.checked = false
        }
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        const storedTheme = getStoredTheme()
        if (storedTheme !== 'light' && storedTheme !== 'dark') {
            setTheme(getPreferredTheme())
        }
    })

    window.addEventListener('DOMContentLoaded', () => {
        showActiveTheme(getPreferredTheme())

        document.querySelectorAll('[data-bs-toggle="mode"]')
            .forEach(toggle => {
                toggle.addEventListener('click', () => {
                    const theme = toggle.querySelector('input[type="checkbox"]').checked === true ? 'dark' : 'light'
                    setStoredTheme(theme)
                    setTheme(theme)
                    showActiveTheme(theme, true)
                })
            })
    })
})()
