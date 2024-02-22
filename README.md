# The Cookbook

I present you the best online cookbook in the world. Check it out: <https://fedjaw.github.io/cookbook-astro/about/>

## Astro

### 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── components/
│       └── Blog.astro
│       └── Footer.astro
│       └── Hamburger.astro
│       └── Header.astro
│       └── Navigation.astro
│       └── Social.astro
│       └── Tag.astro
│   └── layouts/
│       └── BaseLayout.astro
│       └── MarkdownPostLayout.astro
│   └── pages/
│       └── recipes/
|           └── 0001_lavacake.mdx
|           └── 0002_creme_brulee.mdx
│       └── tags/
|           └── [tag].astro
|           └── index.astro
│       └── about.astro
│       └── blog.astro
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.mdx` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### Useful links

<https://open-props.style/#getting-started/>

<https://www.cyishere.dev/blog/astro-active-nav-item>

<https://www.markdownguide.org/cheat-sheet/>

### Weird stuff

A change of pubDate from pubDate: "02.22.2024" to pubDate: "22.02.2024" will lead to an build (`npm run build`) error.