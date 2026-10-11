import type { Config } from 'tailwindcss'

// Palette: Gabès at night. The coastal oasis gives the petrol blue-green base,
// date-gold for emphasis, sea-glass for the vector field's query line.
export default <Partial<Config>>{
  content: ['./components/**/*.vue', './pages/**/*.vue', './layouts/**/*.vue', './app.vue', './data/**/*.ts'],
  theme: {
    extend: {
      colors: {
        petrol: { DEFAULT: '#0F2A30', deep: '#0A1F24', raised: '#15363D', line: '#234850' },
        sand: { DEFAULT: '#EDE4CF', dim: '#B9B19E', faint: '#7F8B85' },
        date: { DEFAULT: '#E9A93B', soft: '#F3C976' },
        glass: { DEFAULT: '#7CCFBE', dim: '#4E9C8D' },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Instrument Sans Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: { prose: '68ch' },
    },
  },
}
