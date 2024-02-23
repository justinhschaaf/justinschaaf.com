![JUSTIN[SCHAAF]](https://content.justinschaaf.com/common/logos/js-fullname256.png)

# justinschaaf.com

*Personal Website v4.5*

## Donate

If you like what I do, please consider supporting me on Liberapay.

[![Donate](https://liberapay.com/assets/widgets/donate.svg)](https://liberapay.com/justinhschaaf) 

## How It's Made

This website is developed in TypeScript and SCSS, using the SvelteKit framework, all atop of the Yarn Berry and Nix package managers. Much of the information in this section is for my own future reference because I know I'm likely to forget it without some assistance.

### File Structure

- All website code is in `src`
    - Components and shared scripts used in the pages are under `src/lib`
        - `content.ts` provides assistance in loading content from a JSON file
    - Pages are under `src/routes` (which also serves to define the routes to access them)
- All static images are in `static/assets`
    - `static/assets/images` contains the background banner images used in the website
    - `static/assets/logos` contains special logo versions not available on `content.justinschaaf.com`
    - `static/assets/socialicons` contains third-party logos used for social links

### Workspace Setup

To make sure the Yarn version doesn't change, the version is locked by the Nix package manager. If you're not on NixOS, install the Nix package manager for your system using the [Determinate Nix Installer](https://github.com/DeterminateSystems/nix-installer).

> *I recommend the Determinate installer over the default provided on the NixOS website since the default doesn't work on SELinux systems (e.g. Fedora) while the Determinate installer does.*

Once Nix is installed, enter the dev shell by running `nix develop` in the project directory. **Assume ALL commands hereafter are in this shell unless otherwise stated.**

> *For reference, a new Svelte project can be created here with `yarn create svelte`.*

At this point, you can install the project's dependencies with `yarn install`. 

### Developing

Run `yarn run dev` to open a development server on [localhost:5173](http://localhost:5173), allowing you to preview changes in real time.

### Building

> ***TODO** I still need to figure out the exact details for gh-pages deployment.*

Basic instructions are to use `yarn run build`; however, 

Run a preview server with `yarn run preview`.

### Additional Resources

If you want to make a website in Svelte using SvelteKit yourself, here are some of the sources I used:

- [Svelte Docs](https://svelte.dev/docs)
- [SvelteKit Docs](https://kit.svelte.dev/docs)

I've also scatterd references here and there for specific bits of code.

## License

The source code for the website itself is licensed under the [zlib license](LICENSE.md). 

I'm still not certain what I want to specifically license the banner images under at this time, so assume that they're All Rights Reserved with exceptions when used for reference or educational purposes with proper attribution provided. 

Most icons are made by other artists and used under Creative Commons licenses (See [`README.md`](static/assets/icons/README.md) in the `static/assets/icons` folder of the project)

Third-party social icons are copyrighted trademarks of their resepctive owners (See [`README.md`](static/assets/socialicons/README.md) in the `static/assets/socialicons` folder of the project)

[Major Mono Display](https://github.com/googlefonts/majormono) is licensed under the [SIL Open Font License](https://github.com/googlefonts/majormono/blob/master/OFL.txt), and [Overpass Mono](https://overpassfont.org) is licensed under the [SIL Open Font License](https://github.com/RedHatOfficial/Overpass/blob/master/LICENSE.md).
