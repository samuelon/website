/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      tablet: '576px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        sans: ['Newsreader', 'sans'],
        facultyGlyphic: ['Faculty Glyphic', 'sans'],
        ibm: ['IBM Plex Sans', 'sans']
      },
      colors: {
        midnightGreen: '#084C61',
        jasper: '#DB504A',
        saffron: '#E3B505',
        payneGray: '#4F6D7A',
        verdigris: '#56A3A6',
        selectiveYellow: '#FFB20F',
        skyBlue: 'rgba(129,166,195,0.7)'
      },
      backgroundImage: {
        'hero-desktop': "url('../images/DSCF6278.jpg')",
        'hero-mobile': "url('../images/DSCF6278-Hero-Mobile.jpg')",
        'projects-section': "url('../images/DSCF3072.jpg')",
        'footer-section': "url('../images/DSCF6318.jpg')"
      }
    }
  },
  plugins: []
};
