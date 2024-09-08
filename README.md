<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
=======
# twitter-replica-reactjs

Este projeto é uma réplica visual da main page do Twitter criada com React.js. O objetivo é criar uma interface que imita o design do Twitter, focando na estrutura e aparência dos componentes principais da plataforma.

Está aplicação tem somente alcance ao Front-end, todos os dados são 'estáticos'

## Funcionalidades

- Interface com o design do Twitter
- Componentes principais: feed de tweets
- Navegação básica entre as seções de main page e respostas de um tweet

## Tecnologias Utilizadas

- [React.js](https://reactjs.org/) - Biblioteca JavaScript para construir interfaces de usuário
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Para estilização
- [React Router](https://reactrouter.com/) - Para navegação entre páginas (se aplicável)

## Instalação

Para começar a trabalhar com este projeto, siga estas etapas:

1. Clone o repositório:

{url}

2. Navegue até o diretório do projeto

cd twitter-replica-reactjs

3. Instale as dependências

npm install

4. Inicie o servidor de desenvolvimendo

npm dev
>>>>>>> fffdc761566273668bb900b60f93ec7af724d163
