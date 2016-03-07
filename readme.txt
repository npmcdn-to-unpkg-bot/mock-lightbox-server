TypeScript on GitHub: https://github.com/Microsoft/TypeScript/wiki/tsconfig.json

tsconfig.json - TypeScript Configuration File
    TypeScript on GitHub: https://github.com/Microsoft/TypeScript/wiki/tsconfig.json

typings.json - List of TypeScript type definition files to use. TypeScript type definition files, d.ts files, specify
    features and syntax for JavaScript libraries that TypeScript doen't recongize natively.

package.json - npm package manager configuration for project. Lists npm scripts and dependencies to install.
    Install npm scripts by running "npm install" on command line.
        npm start - run the compiler and a server at the same time, both in "watch mode"
        npm run tsc - run the TypeScript compiler once
        npm run tsc:w - run the TypeScript compiler in watch mode; the process keeps running, awaiting changes to
                        TypeScript files and re-compiling when it sees them.
        npm run lite - run the lite-server, a light-weight, static file server, written and maintained by
                        John Papa with excellent support for Angular apps that use routing.
        npm run typings - runs the typings tool
        npm postinstall - called by npm automatically after it successfully completes package installation.
                        This script installs the TypeScript definition files this app requires.


app/app.component.ts -- component typescript file.
    AppComponent is the root of the application; every angular app has at least one root component that host the
    client user experience

Components are basic building blocks of Angular Applications. A component controls a portion of the screen, a view,
through its associated template. It is composed of import statements, @Component decorator to indicate the template
to use, and a component class that controls the appearance and behavior of a view through its template.

