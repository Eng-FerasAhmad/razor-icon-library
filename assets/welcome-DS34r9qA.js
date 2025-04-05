import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as i}from"./index-g1RYzhTK.js";import{M as o}from"./index-CYCrkESC.js";import"./index-yBjzXJbu.js";import"./index-Dh8cFXwY.js";import"./iframe-BL0IWbQd.js";import"./index-fNjTmf9T.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function r(s){const e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Get Started"}),`
`,n.jsx("div",{style:{width:"fit-content",margin:"auto"},children:n.jsx("h1",{children:"Razor Icons Library"})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.p,{children:`This Library is a collection of custom icons. The icon components are documented and showcased using Storybook,
providing an interactive environment for testing and visualization.`}),`
`,n.jsx(e.h2,{id:"install",children:"Install"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Razor Shared library is published on node package manager ",n.jsx(e.a,{href:"https://www.npmjs.com/package/razor-icon-library",rel:"nofollow",children:"npm"})]}),`
`,n.jsxs(e.li,{children:["Repository: ",n.jsx(e.a,{href:"https://github.com/Eng-FerasAhmad/razor-icon-library",rel:"nofollow",children:"GitHub"})]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`npm i razor-icon-library
`})}),`
`,n.jsx(e.h2,{id:"getting-started",children:"Getting Started"}),`
`,n.jsx(e.p,{children:`To use this library, you can browse through the icons listed in the sidebar.
Each component has its own story where you can see usage examples and documentation.`}),`
`,n.jsx(e.p,{children:"In the Documentation page for each icon component you can find out how to use the component and copy the code."}),`
`,n.jsx(e.h3,{id:"contributing",children:"Contributing"}),`
`,n.jsx(e.p,{children:`We welcome contributions to improve and extend the functionality of this library! Whether you're fixing bugs,
adding new features, or enhancing documentation, your input is valuable.`}),`
`,n.jsx(e.h4,{id:"how-to-contribute",children:"How to Contribute"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Clone the Repository:"})," Clone the repository to your local machine"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`git clone https://github.com/Eng-FerasAhmad/razor-icon-library
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Install Dependencies:"}),` install the project dependencies
npm install`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:`Create a Branch: Create a new branch for your feature or bug fix:
git checkout -b feature/your-feature-name`}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Make Your Changes:"})," Write your code, add tests if necessary, and ensure your changes follow the project’s linting and formatting rules"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Follow the AirBnB JavaScript Style Guide with Prettier formatting."}),`
`,n.jsx(e.li,{children:"Ensure your changes are covered by tests."}),`
`,n.jsx(e.li,{children:"Avoid adding comments in the code (code should be self-explanatory)."}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Test Your Changes:"}),` Add new Test Run the test suite to ensure your changes don't break anything
npm run test`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Update Storybook:"}),` If you’re adding or modifying components, update the Storybook documentation.
npm run storybook`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Export new components and types:"})," adding new components and types should also be exported, see index.ts"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Commit Your Changes:"}),` Make sure your commit messages are descriptive.
git commit -m "Add feature X or Fix issue Y"`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Push to GitHub:"}),` Push your branch to GitHub
git push origin feature/your-feature-name`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Open a Pull Request:"}),` Go to the repository on GitHub and open a pull request.
Provide a clear and detailed description of what your change does and why it’s necessary.`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Pipelines:"}),` Pipelines on GitHub will start automatic after create pull Request.
Make sure the pipelines are finished successfully.`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Merge info Main"}),": After approval you can merge the changes to main."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Publish to npm"}),": after merge to main you can now publish the changes to npm whit new version:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["locally run ",n.jsx(e.strong,{children:"npm run build"})]}),`
`,n.jsx(e.li,{children:"npm version xx.xx (check the last version)"}),`
`,n.jsx(e.li,{children:"npm publish"}),`
`,n.jsx(e.li,{children:"watch the cli you will be asked to click 'enter' form your keyboard"}),`
`,n.jsx(e.li,{children:"the browser page will be open, you should add the 2-factor auth from you authenticator."}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Deploy & Publish storybook"}),": new changes and fix bugs should also be published on storybook"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"npm run deploy-storybook"}),`
`,n.jsx(e.li,{children:"this script will deploy storybook to GitHub pages."}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"local-development",children:"Local development"}),`
`,n.jsx(e.p,{children:"To test your changes locally you can check user stoy locally with this script:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm run storybook
`})})]})}function j(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{j as default};
