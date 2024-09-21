# Blog com Painel Administrativo

## 📖 Descrição do Projeto

Este projeto é uma plataforma de blog com painel administrativo, desenvolvido usando **[Node.js](https://nodejs.org/)** e **[Express](https://expressjs.com/)**. A plataforma permite a criação, edição, e gerenciamento de artigos, além de proporcionar um painel administrativo para gerenciar categorias e usuários.

## 🚀 Tecnologias e Bibliotecas

- **[Node.js com Express](https://expressjs.com/)**: Framework para gerenciar rotas, middlewares e controladores.
- **[Sequelize ORM](https://sequelize.org/)**: Integrado com **[MySQL2](https://www.npmjs.com/package/mysql2)** para operações de banco de dados.
- **[EJS (Embedded JavaScript)](https://ejs.co/)**: Utilizado para renderização de templates dinâmicos no front-end.
- **[Slugify](https://www.npmjs.com/package/slugify)**: Biblioteca para criar URLs amigáveis a partir de títulos dos artigos.
- **[Bcrypt](https://www.npmjs.com/package/bcrypt)**: Usado para criptografar senhas e garantir a segurança dos usuários.
- **[Express-session](https://www.npmjs.com/package/express-session)**: Utilizado para a autenticação de usuários via sessões.
- **[Nodemon](https://www.npmjs.com/package/nodemon)**: Ferramenta de monitoramento para reinicialização automática do servidor durante o desenvolvimento.

## 🛠️ Funcionalidades

- **Gerenciamento de Artigos**: Criação, edição e exclusão de artigos com URLs amigáveis (slug).
- **Gerenciamento de Categorias**: Administradores podem organizar artigos por categorias.
- **Autenticação de Usuários**: Segurança garantida com criptografia de senhas usando bcrypt e sessões com express-session.
- **Painel Administrativo**: Gerencie artigos, categorias e usuários a partir de uma interface administrativa intuitiva.

### 📂 Estrutura de pasta do projeto
```bash
BLOG_WITH_ADMIN_PANEL/
    core/
        articles/
        categories/
        home/
        users/
        definitions.js  # Defines relationships between tables
    database/
    middlewares/
    migrations/
    public/
        css/
        js/
        tinymce/
    views/
        admin/
        partials/
        article.ejs
        index.ejs
    index.js
```


## 💻 Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-repo/blog_com_painel_administrativo.git
    cd blog_com_painel_administrativo
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Execute as migrações para configurar o banco de dados:
    ```bash
    npm run migrations:run
    ```

4. Inicie o servidor de desenvolvimento usando o Nodemon:
    ```bash
    npm run start
    ```

---

## 🔧 Como Contribuir

1. Faça um fork do projeto.
2. Crie um branch para sua feature ou correção:
    ```bash
    git checkout -b minha-feature
    ```
3. Faça o commit das suas alterações:
    ```bash
    git commit -m 'Adiciona nova feature'
    ```
4. Envie para o branch remoto:
    ```bash
    git push origin minha-feature
    ```
5. Crie um novo Pull Request.

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
