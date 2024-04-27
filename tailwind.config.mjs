import plugin from 'tailwindcss/plugin';
import tailwindcssLogical from 'tailwindcss-logical';

// function withOpacityValue(cssVariable) {
//   return ({ opacityValue }) => {
//     return opacityValue
//       ? `rgba(var(${cssVariable})/ ${opacityValue})`
//       : `rgb(var(${cssVariable}))`;
//   };
// }
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    // https://github.com/stevecochrane/tailwindcss-logical
    tailwindcssLogical,
    plugin(({ addVariant, e }) => {
      addVariant('children', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          const newClass = e(`children${separator}${className}`);
          return [
            `.${newClass} > *`,
            // `.${newClass}:hover `,
          ].join(',');
        });
      });

      addVariant('children-hover', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          const newClass = e(`children-hover${separator}${className}`);
          return [`.${newClass}:hover > *`].join(',');
        });
      });

      addVariant('grand-children-hover', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          const newClass = e(`grand-children-hover${separator}${className}`);
          return [`.${newClass}:hover > * > *`].join(',');
        });
      });

      addVariant('children-active', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          const newClass = e(`children-active${separator}${className}`);
          return [`.${newClass}:active > *`].join(',');
        });
      });

      addVariant('grand-children-active', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          const newClass = e(`grand-children-active${separator}${className}`);
          return [`.${newClass}:active > * > *`].join(',');
        });
      });

      addVariant('children-first', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          const newClass = e(`children-first${separator}${className}`);
          return [`.${newClass} > *:first-child`].join(',');
        });
      });
    }),
  ],
};
