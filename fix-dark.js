const fs = require('fs');
const path = require('path');

const files = [
  'src/app/what-helps/page.tsx',
  'src/app/brain/page.tsx',
  'src/app/age-groups/page.tsx',
  'src/app/sources/page.tsx',
  'src/app/types/page.tsx',
  'src/app/types/combined/page.tsx',
  'src/app/types/inattentive/page.tsx',
];

const replacements = [
  { regex: /text-stone-900(?! dark:text-stone)/g, replace: 'text-stone-900 dark:text-stone-100' },
  { regex: /text-stone-800(?! dark:text-stone)/g, replace: 'text-stone-800 dark:text-stone-200' },
  { regex: /text-stone-700(?! dark:text-stone)/g, replace: 'text-stone-700 dark:text-stone-300' },
  { regex: /text-stone-600(?! dark:text-stone)/g, replace: 'text-stone-600 dark:text-stone-400' },
  { regex: /text-stone-500(?! dark:text-stone)/g, replace: 'text-stone-500 dark:text-stone-400' },
  { regex: /bg-white(?!\/)(?! dark:bg-stone)/g, replace: 'bg-white dark:bg-stone-800/50' },
  { regex: /bg-white\/70(?! dark:bg-stone)/g, replace: 'bg-white/70 dark:bg-stone-800/50' },
  { regex: /border-stone-200(?! dark:border-stone)/g, replace: 'border-stone-200 dark:border-stone-700' },
  { regex: /border-stone-300(?! dark:border-stone)/g, replace: 'border-stone-300 dark:border-stone-700' },
  { regex: /bg-stone-50(?!\/)(?! dark:bg-stone)/g, replace: 'bg-stone-50 dark:bg-stone-900/50' },
  { regex: /bg-indigo-50(?! dark:bg-indigo)/g, replace: 'bg-indigo-50 dark:bg-indigo-950/20' },
  { regex: /border-indigo-100(?! dark:border-indigo)/g, replace: 'border-indigo-100 dark:border-indigo-800/40' },
  { regex: /border-indigo-200(?! dark:border-indigo)/g, replace: 'border-indigo-200 dark:border-indigo-800/40' },
  { regex: /bg-violet-50(?! dark:bg-violet)/g, replace: 'bg-violet-50 dark:bg-violet-950/20' },
  { regex: /border-violet-100(?! dark:border-violet)/g, replace: 'border-violet-100 dark:border-violet-800/40' },
  { regex: /border-violet-200(?! dark:border-violet)/g, replace: 'border-violet-200 dark:border-violet-800/40' },
  { regex: /text-violet-800(?! dark:text-violet)/g, replace: 'text-violet-800 dark:text-violet-300' },
  { regex: /text-indigo-800(?! dark:text-indigo)/g, replace: 'text-indigo-800 dark:text-indigo-300' },
  { regex: /text-indigo-900(?! dark:text-indigo)/g, replace: 'text-indigo-900 dark:text-indigo-200' },
];

files.forEach(file => {
  const fullPath = path.join(__dirname, file);
  let content = fs.readFileSync(fullPath, 'utf8');
  let originalContent = content;

  replacements.forEach(({ regex, replace }) => {
    content = content.replace(regex, replace);
  });

  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
