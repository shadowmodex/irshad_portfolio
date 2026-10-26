<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Portfolio content (projects, links, media, profile) lives only in typed files under src/data/; components read from there so placeholders can be swapped in one place.
- Unconfigured external links are `null` and render via ExternalAction as a disabled "soon" state — never `#` or fake URLs.
- All project detail pages share one dynamic route (projects.$slug) driven by src/data/projects.ts.
