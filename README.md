# untitled-integration

- [Notion API](#notion-api)
- [Zotero API](#zotero-api)

## 📃 Notion API

Required variables for integration

```
NOTION_API_KEY=
DATABASE_ID=
```
Where can I find my database's ID? Check it out here https://developers.notion.com/docs/working-with-databases

example:

```
https://www.notion.so/{workspace_name}/{database_id}?v={view_id}
```

## 📃 Zotero API

Documentation https://www.zotero.org/support/dev/start

- [ ] TODO

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
