import { createStitches, globalCss } from "@stitches/react";

export const { styled } = createStitches({
  theme: {
    colors: {
      main: "#353b48",
    },
  },
});

export const useGlobalStyles = globalCss({
  ':root': {
    fontFamily: 'Inter, Avenir, Helvetica, Arial, sans-serif',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 400,

    colorScheme: 'light dark',
    color: 'rgba(255, 255, 255, 0.87)',
    backgroundColor: '#242424',

    fontSynthesis: 'none',
    textRendering: 'optimizeLegibility',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-text-size-adjust': '100%'
  },
  body: {
    margin: 0
  }
})
