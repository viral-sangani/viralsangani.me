import React from 'react'
import { COLORS } from './src/components/utils'

const MagicScriptTag = () => {
    const codeToRunOnClient = `
        (function() {
            function getInitialColorMode() {
                const persistedColorPreference = window.localStorage.getItem('color-mode')
                const hasPersistedPreference = typeof persistedColorPreference === 'string'


                if (hasPersistedPreference) {
                    return persistedColorPreference
                }

                const mql = window.matchMedia('(prefers-color-scheme: dark)')
                const hasMediaQueryPreference = typeof mql.matches === 'boolean'
                if (hasMediaQueryPreference) {
                    return mql.matches ? 'dark' : 'light'
                }

                return 'light'
            }
            const colorMode = getInitialColorMode();
            const root = document.documentElement;
            root.style.setProperty(
                '--background',
                colorMode === 'light'
                ? '${COLORS.light.background}'
                : '${COLORS.dark.background}'
            );
            root.style.setProperty(
                '--font-color',
                colorMode === 'light'
                ? '${COLORS.light.font}'
                : '${COLORS.dark.font}'
            );
            root.style.setProperty(
                '--hover-color',
                colorMode === 'light'
                ? '${COLORS.light.hover}'
                : '${COLORS.dark.hover}'
            );
            root.style.setProperty('--initial-color-mode', colorMode);
            })()`
    // eslint-disable-next-line react/no-danger
    return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}
export const onRenderBody = ({ setPreBodyComponents }) => {
    setPreBodyComponents(<MagicScriptTag />)
}
