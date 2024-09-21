# Blog with Admin Panel

## 📖 Project Overview

This project is a blog platform with an admin panel, built using **[Node.js](https://nodejs.org/)** and **[Express](https://expressjs.com/)**. The platform allows users to create, edit, and manage articles, while providing an admin interface for managing categories and users.

## 🚀 Technologies and Libraries

- **[Node.js with Express](https://expressjs.com/)**: Framework to manage routes, middleware, and controllers.
- **[Sequelize ORM](https://sequelize.org/)**: Integrated with **[MySQL2](https://www.npmjs.com/package/mysql2)** for database operations.
- **[EJS (Embedded JavaScript)](https://ejs.co/)**: Used for rendering dynamic front-end templates.
- **[Slugify](https://www.npmjs.com/package/slugify)**: Library to create SEO-friendly URLs from article titles.
- **[Bcrypt](https://www.npmjs.com/package/bcrypt)**: Used for encrypting passwords and ensuring user security.
- **[Express-session](https://www.npmjs.com/package/express-session)**: Used for session-based user authentication.
- **[Nodemon](https://www.npmjs.com/package/nodemon)**: Monitoring tool for automatically restarting the server during development.

### 📂 Project Structure
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


## 🛠️ Features

- **Article Management**: Create, edit, and delete articles with SEO-friendly URLs (slug).
- **Category Management**: Admins can organize articles by categories.
- **User Authentication**: Secure password encryption using bcrypt and session-based authentication with express-session.
- **Admin Panel**: Manage articles, categories, and users from an intuitive admin interface.

## 💻 Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/blog_with_admin_panel.git
    cd blog_with_admin_panel
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run migrations to set up the database:
    ```bash
    npm run migratios:run
    ```

4. Start the development server using Nodemon:
    ```bash
    npm run start
    ```

---

## 🔧 How to Contribute

1. Fork the project.
2. Create a branch for your feature or bug fix:
    ```bash
    git checkout -b my-feature
    ```
3. Commit your changes:
    ```bash
    git commit -m 'Add new feature'
    ```
4. Push to the remote branch:
    ```bash
    git push origin my-feature
    ```
5. Open a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
