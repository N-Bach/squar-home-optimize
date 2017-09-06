# Asset Pipeline for Node

**Support:**
- Stylus
- CSS sprites generate (Retina support)
- ES6/7 (no async/await)

**Assets folder structure:**
```
app/assets
|
├── css
│   ├── main.styl (Import all .styl files)
│   ├── base
│   │   ├── fonts.styl
│   │   ├── reset.styl
│   │   └── ...
│   ├── utils
│   │   ├── variables.styl
│   │   ├── helpers.styl
│   │   ├── sprites.styl (Run `npm run sprite` to generate)
│   │   └── ...
│   ├── vendors
│   |   ├── font-awesome
│   |   │   └── font-awesome.styl
|   |   ├── plugin-1
|   |   │   └── plugin-1.styl
│   |   └── ...
│   ├── layouts
│   │   ├── common.styl
│   │   ├── grid.styl
│   │   ├── header.styl
│   │   ├── footer.styl
│   │   └── ...
│   ├── components
│   │   ├── component-1.styl
│   │   ├── component-2.styl
│   │   └── ...
│   └─── pages
│       ├── page-1.styl
│       ├── page-2.styl
│       └── ...
|
├── fonts
│   ├── Rubik.ttf
│   ├── FontAwesome.otf
│   └── ...
|
├── img
│   ├── css (Contain images use for CSS only)
│   |   ├── sprites
│   |   |   ├── _sprites.png (Run `npm run sprite` to generate)
│   |   |   ├── _sprites@2x.png (Run `npm run sprite` to generate retina sprite)
│   |   |   ├── icon-1.png
│   |   |   ├── icon-1@2x.png
│   |   |   └── ...
│   │   ├── css-image-1.png
│   |   └── ...
│   └── common (Other images)
│       ├── common-image-1.png
│       └── ...
|
├── js
|   ├── common.js
│   ├── pages
│   │   ├── page-1.js
│   │   └── ...
|   └── vendors
|       ├── jquery
|       │   └── jquery.min.js
|       ├── plugin-1
|       |   └── plugin-1.js
|       └── ...
```

## Development
```
npm run dev
```

Clean built assets:
```
npm run clean
```

Generate CSS sprites:
```
npm run sprite
```

Minify image:
```
npm run imagemin
```

## Build & Run
```
npm run build
npm start
```

## Testing
```
npm test
```

Testing with watch:
```
npm test:watch
```

Have coverage report:
```
npm run test:cov
```
