# Note for Thursday:

```
Add "prettier.documentSelectors": ["**/*.astro"],
"[astro]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
}
to VSCode in HP Laptop!!
```

# Landing page and some examples from Fazt mini-course

Using:

- TailwindCSS
- React components (just for demo purposes)
  -- With Toastify (React plugin)

Features:

- Landing page
- About page
- Blog section (with posts written in Markdown)
- Posts section (fetched from external API, and getted via SSR to just print the RAW HTML)

Recommended instalations:

- Tailwind plugin for VSCode
- Astro plugin for VSCode

And add:

```
"prettier.documentSelectors": ["**/*.astro"],
"[astro]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
}
to VSCode in HP Laptop!!
```

for full integration with Prettier in Astro files

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
