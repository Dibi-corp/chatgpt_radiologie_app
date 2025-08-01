// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Fichier HTML principal
    "./src/**/*.{js,ts,jsx,tsx}", // Tous les fichiers JS, TS, JSX, TSX dans src/
  ],
  theme: {
    extend: {
      // Ici, nous pourrons ajouter vos couleurs personnalisées plus tard
      colors: {
        'brand-blue': '#005bba', // Votre bleu d'accentuation
        // Vous pouvez ajouter d'autres couleurs primaires/secondaires ici si besoin
        // par exemple, si "project-bolt" avait une palette plus complexe :
        // 'primary': {
        //   '50': '#eef7ff',
        //   '100': '#d9edff',
        //   // ...
        //   '600': '#005bba', // correspond à votre brand-blue
        //   // ...
        //   '900': '#002d59',
        // },
        // 'accent': {
        //   '500': '#34d399', // un exemple de couleur d'accent
        // }
      },
      // Vous pouvez aussi étendre la typographie ici si besoin,
      // mais le plugin typography gère déjà beaucoup de choses.
      // typography: ({ theme }) => ({
      //   DEFAULT: {
      //     css: {
      //       // Styles de base pour .prose
      //     },
      //   },
      //   // Vous pouvez définir des variantes comme .prose-sm, .prose-lg, etc.
      //   sm: {
      //     css: {
      //       // Styles pour .prose-sm
      //     }
      //   }
      // }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // <--- AJOUTEZ CETTE LIGNE
    // Vous pouvez ajouter d'autres plugins Tailwind ici si nécessaire à l'avenir
    // Par exemple, @tailwindcss/forms pour styler les formulaires
    // require('@tailwindcss/forms'),
  ],
}
