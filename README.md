# Jiayi Shen — Academic Website

This site uses [Qirun Zeng's complete Jekyll template](https://github.com/qirunzeng/qirunzeng.github.io), adapted with the author's permission. See [TEMPLATE-NOTICE.md](TEMPLATE-NOTICE.md) for provenance and copyright. The original template copyright remains in the footer.

## Edit content

- `_data/profile.yml`: name, affiliation, emails, photo and profile links.
- `_data/home.yml`: biography, research interests, education and news.
- `_data/teaching.yml`: teaching assistant appointments.
- `files/CV_Shen_Jiayi.pdf`: personal CV.
- `assets/images/avatar.jpg`: personal photo.
- `assets/css/main.css`: original template stylesheet.
- `assets/css/custom.css`: Source Serif 4 and small personal style adjustments.

Home, research, teaching, news and the 404 page share the upstream layout and components. The bandit demonstration is retained. No publications, citation metrics, or reviewing roles are displayed without personal records. The original author's Scholar automation is not enabled.

## Preview

Use Ruby 3.3 or another compatible Ruby with development headers:

```sh
bundle install
bundle exec jekyll serve
```

Open http://127.0.0.1:4000. The site is compatible with GitHub Pages' Jekyll build.

The previous site is archived under `local/before-template-migration-*`; `local/` is ignored by Git and excluded from the published site.

## Fonts

Source Serif 4 is stored locally, with Adobe's original SIL Open Font License in `assets/fonts/SourceSerif4-LICENSE.md`.
