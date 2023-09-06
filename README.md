# Node Template

By: Stella Marie

<!-- View on [Github Pages](https://username.github.io/repo-name/) -->

## **Technologies Used**

- HTML5
- CSS3
- Skeleton 2.0.4 by Dave Gamache
- Node.js
  - Webpack
  - ESLint
  - Jest, Jest-Each
  - Babel
  - P5.js

## **Description**

Container: logic and state management
Component: display and presentation
Structs: data structures

### Web

A visual simulation of a quad expanding and shrinking, moving about the canvas. [Incomplete]

## **Rendering**

Before publishing your website, app, or api, delete the rules in .eslintrc, "no-console": "off" and "no-unused-vars": "off", then run ```npm run lint```

**Github Pages**

```bash
git add .
git commit -m "Save final changes"
git push origin main
git checkout -b gh-pages
git push origin gh-pages
```

**To update Github Pages**

```bash
git add .
git commit -m "Save changes in main"
git push origin main
git checkout gh-pages
git merge main
git push origin gh-pages
```

### **How to render from dist/**

1. Remove dist/ from .gitignore

2.  
```bash
git add dist
git commit -m "Initial dist subtree commit"
```

3.  
```bash
git subtree push --prefix dist origin gh-pages
```

## **Known Bugs**

Please report any issues in using this template.

## **License**

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2023 Sm Kou
