# Landing page and some examples from Fazt mini-course

Using:

- TailwindCSS
- React and Vue components (just for demo purposes)
  -- With Toastify (plugin used with both libraries)

Features:

- Landing page
- About page
- Blog section (with posts written in Markdown) -- And using Tailwind Typography plugin to easily style them
- Posts section (fetched from external API, and getted via SSR to just print the RAW HTML)
- Custom Youtube embed component: to lazy load iFrame
- Really fast load (10/10 score in Lighthouse)

Recommended instalations:

- Tailwind plugin for VSCode
- Astro plugin for VSCode

And add:

```
"prettier.documentSelectors": ["**/*.astro"],
"[astro]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

for full integration with Prettier in Astro files

# Next steps:

- Astro + Sanity: https://www.sanity.io/plugins/astro-sanity
- Check CSS duplications and possible improvements
- Fill blog entries with actual implementation details
- Blog main page: with card of minidescription, images, etc...

# Based on Astro Starter Kit: Minimal

```
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/s/github/withastro/astro/tree/latest/examples/minimal)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

- [Astro documentation](https://docs.astro.build)
- [Discord server](https://astro.build/chat).
