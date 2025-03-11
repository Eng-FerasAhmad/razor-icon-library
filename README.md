# Razor icon Library

---

This Library is a collection of custom icons. The icon components are documented and showcased using Storybook,
providing an interactive environment for testing and visualization.

## Storybook

Hier are the components and how to use them in [storybook](https://eng-ferasahmad.github.io/razor-icon-library/?path=/docs/get-started--docs)

## Install

-   Razor Shared library is published on node package manager [npm](https://www.npmjs.com/package/razor-icon-library)
-   Repository: [GitHub](https://github.com/Eng-FerasAhmad/razor-icon-library)

```js
npm i razor-icon-library
```

## Getting Started

To use this library, you can browse through the icons listed in the sidebar.
Each component has its own story where you can see usage examples and documentation.

In the Documentation page for each icon component you can find out how to use the component and copy the code.

### Contributing

We welcome contributions to improve and extend the functionality of this library! Whether you're fixing bugs,
adding new features, or enhancing documentation, your input is valuable.

#### How to Contribute

-   **Clone the Repository:** Clone the repository to your local machine

```bash
git clone https://github.com/Eng-FerasAhmad/razor-icon-library
```

-   **Install Dependencies:** install the project dependencies
    npm install

-   Create a Branch: Create a new branch for your feature or bug fix:
    git checkout -b feature/your-feature-name

-   **Make Your Changes:** Write your code, add tests if necessary, and ensure your changes follow the project’s linting and formatting rules

    -   Follow the AirBnB JavaScript Style Guide with Prettier formatting.
    -   Ensure your changes are covered by tests.
    -   Avoid adding comments in the code (code should be self-explanatory).

-   **Test Your Changes:** Add new Test Run the test suite to ensure your changes don't break anything
    npm run test

-   **Update Storybook:** If you’re adding or modifying components, update the Storybook documentation.
    npm run storybook

-   **Export new components and types:** adding new components and types should also be exported, see index.ts

-   **Commit Your Changes:** Make sure your commit messages are descriptive.
    git commit -m "Add feature X or Fix issue Y"

-   **Push to GitHub:** Push your branch to GitHub
    git push origin feature/your-feature-name

-   **Open a Pull Request:** Go to the repository on GitHub and open a pull request.
    Provide a clear and detailed description of what your change does and why it’s necessary.

-   **Pipelines:** Pipelines on GitHub will start automatic after create pull Request.
    Make sure the pipelines are finished successfully.
-   **Merge info Main**: After approval you can merge the changes to main.

-   **Publish to npm**: after merge to main you can now publish the changes to npm whit new version:

    -   locally run **npm run build**
    -   npm version xx.xx (check the last version)
    -   npm publish
    -   watch the cli you will be asked to click 'enter' form your keyboard
    -   the browser page will be open, you should add the 2-factor auth from you authenticator.

-   **Deploy & Publish storybook**: new changes and fix bugs should also be published on storybook
    -   npm run deploy-storybook
    -   this script will deploy storybook to GitHub pages.

### Local development

To test your changes locally you can check user stoy locally with this script:

```bash
npm run storybook
```

## Used technology

-   React
-   Vite
-   Typescript
-   Eslint

## Components

The library still in development phase, so any new icon components and feature of this components will be added as soon as it is ready:

### Card

```tsx
import { AccountSymbol } from 'razor-icon-library';

export default function Example() {
    return (
        <div>
            <AccountSymbol size={36} color={green} />
        </div>
    );
}
```

## License

[MIT](https://github.com/Eng-FerasAhmad/razor-icon-library/blob/master/LICENSE)
