![JUSTIN[SCHAAF]](https://content.justinschaaf.com/common/logos/js-fullname256.png)

# justinschaaf.com

*Personal Website V4*

## Donate

If you like what I do, please consider supporting me on Liberapay.

[![Donate](https://liberapay.com/assets/widgets/donate.svg)](https://liberapay.com/justinhschaaf) 

## How It's Made

This website is developed in [TypeScript](https://www.typescriptlang.org) and [SCSS](https://sass-lang.com/) utilizing [Node Package Manager](https://www.npmjs.com), [Rollup](https://www.rollupjs.org), and [Sapper](https://sapper.svelte.dev). Much of the information in this section is for my own future reference because I know I'm likely to forget it without some assistance (as this is my first time properly using Svelte).

### File Structure

- All website code is in `src`
    - Components used in the pages are under `src/components`
    - Pages are under `src/routes` (which also serves to define the routes to access them)
    - `content.ts` provides assistance in loading content from a JSON file
- All static images are in `static/assets`
    - `static/assets/images` contains the background banner images used in the website
    - `static/assets/logos` contains special logo versions not available on `content.justinschaaf.com`
    - `static/assets/socialicons` contains third-party logos used for social links

### Running the Project

In the project directory, run `npm run dev` in your preferred terminal. This will open a development server on [localhost:3000](http://localhost:3000).

### Building the Project

To build, simply run `build.bat`. This should automatically execute the commands to build the project and copy the necessary files to `docs` for deployment on GitHub Pages.

### Additional Resources

If you want to make a website in Svelte using Sapper yourself, here are some of the sources I used to learn:

- [Svelte Tutorial](https://svelte.dev/tutorial/basics)
- [Sapper Docs](https://sapper.svelte.dev/docs)
- [Svelte Preprocessors](https://github.com/sveltejs/language-tools/tree/master/docs/preprocessors)
- [Svelte/Sapper with Sass!](https://codepilotsf.medium.com/svelte-sapper-with-sass-271fff662da9)

## License

The source code for the website itself is licensed under the [MIT License](https://github.com/justinhschaaf/justinschaaf.com/blob/master/LICENSE). 

I'm still not certain what I want to specifically license the banner images under at this time, so assume that they're All Rights Reserved with exceptions when used for reference or educational purposes with proper attribution provided. 

Third-party social icons are copyrighted trademarks of their resepctive owners (See [`README.md`](https://github.com/justinhschaaf/justinschaaf.com/blob/master/static/assets/socialicons/README.md) in the `static/assets/socialicons` folder of the project)

[Major Mono Display](https://github.com/googlefonts/majormono) is licensed under the [SIL Open Font License](https://github.com/googlefonts/majormono/blob/master/OFL.txt), and [Overpass Mono](https://overpassfont.org) is licensed under the [SIL Open Font License](https://github.com/RedHatOfficial/Overpass/blob/master/LICENSE.md).
