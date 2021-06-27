# Gatsby Serverless Tutorial

### Todo Application Project

## Steps :

### Project's setup

- Create your project's directory: for example my-project
- Initialize git repository, run : `git init`
- Initialize new gatsby project with yarn workspace, run : `yarn init -y`
- Edit your package.json, and include these lines at the bottom after `"lisense":"MIT",`

```javascript
"private": true,
"workspaces": [
    "packages/*"
]
```

- create packages directory in the root
- create your workspace for your gatsby project, I've created it as www
- Navigate to your project directory : `cd packages/www`
- Initialize yarn, run : `yarn init -y`
- Install dependencies, run : `yarn add gatsby react react-dom`
- Edit your package.json, and include these lines at the bottom after `"lisense":"MIT",`

```javascript
"scripts": {
    "develop": "gatsby develop",
    "build": "gatsby build",
    "clean": "gatsby clean"
  },
```

- create gatsby-config.js
- create src/pages/index.js
- create .gitignore and add these files to gitignore

```
node_modules
.cache
public
```

- run : `yarn workspaces www develop`

### Setting up theme-ui to create my site

- run : `yarn add theme-ui @theme-ui/presets`
- create wrap-root-element.js and add theme-ui provider code, replacing props with element
- crete gatsby-browser.js and gatsby-ssr.js and import and export wrap-root-element from there
- create your site using theme-ui components

### Deploy your site to netlify

### Adding Authentication

- I am using netlify-identity-widget for Authentication
- Run : `yarn add netlify-identity-widget`
- Enable identity from netlify in the Identity tab
- Configure netlify-identity-widget in the app
