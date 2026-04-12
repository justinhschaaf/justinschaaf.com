+++
title = "Architectury"
description = "So I make a certain mod for a certain game. The game updated two months ago, and to make future updates easier, I figured I should port the mod to Architectury, a toolchain which aims to make supporting multiple modloaders easier. This is how that went."
date = 2024-08-18T09:15:35+00:00
aliases = ["/blog/2024/08/18/architectury"]
extra.cover = "/blog/2024-08-18_architectury/architecturyllama.webp"
+++

So I make [a certain mod](https://justinschaaf.com/projects/llama_steeds) for [a certain game](https://www.minecraft.net/). The game updated two months ago, and due to life events, I only managed getting around to updating the mod now. To make future updates easier and because the modding community has more than two major modloaders now, I figured I should port the mod to [Architectury](https://architectury.dev), a toolchain which aims to make supporting multiple modloaders[^1] easier.

## Starting a new project

You might've noticed the link to Architectury included above doesn't work. That's because they have no homepage, even though that's their domain. Starting off on GitHub, I was quickly able to find [architectury-templates](https://github.com/architectury/architectury-templates/releases/tag/release_build_1698078656340). Well, this seems like the place to start.

![The GitHub Releases page for Architectury Templates from October 23, 2023. This is the latest version as of writing](/blog/2024-08-18_architectury/architecturytemplates.webp)

The first line in the description here says to refer to the [Architectury Example Mod](https://github.com/architectury/architectury-example-mod) if I would like to convert an existing project to Architectury. Unfortunately, the example mod repository is just [a README file that says to use Architectury Templates instead](https://github.com/architectury/architectury-example-mod/blob/795b9921e60cdba1ff959271836f5e4afd1687d8/README.md). Lovely.

![The GitHub page for architectury-example-mod with a warning in the README from 2 years ago: "DEPRECATED. You might want to visit Architectury Templates instead, for easier set-up and more up-to-date dependencies."](/blog/2024-08-18_architectury/examplemod.webp)

Reading on, there's some useful details about the different ways to structure an Architectury project, then [a convenient link to the documentation on how to setup the template](https://docs.architectury.dev/docs/architectury_api/getting_started.html)--which doesn't work. At least we get an actual website this time.

![Further down on the GitHub Releases page for Architectury Templates. The section is entitled "How to setup the template" with links to "Please read this documentation" and Discord.](/blog/2024-08-18_architectury/templatesetup.webp)

![The Architectury Documentation website with an error message stating "This topic does not exist yet."](/blog/2024-08-18_architectury/gettingstarted.webp)

Moving on to actually downloading one of the templates, the latest supported game version is 1.20.1. *I need 1.21.*

Going to the docs homepage, there's [a getting started link that actually works this time](https://docs.architectury.dev/plugin/get_started). Now, you're supposed to use a [template generator](https://generate.architectury.dev/) that you can configure for your specific setup. Very convenient, but under the "Subprojects" section, one of the modloaders I currently support (Forge) isn't selectable. Guess it just doesn't work on 1.21?

![A screenshot of the Architectury Template Generator website, with options to enter the mod's name, ID, package name, Minecraft version, and code mappings. There's also options to select what platforms the mod supports, including Fabric, Forge, NeoForge, and Quilt. The box for Forge is greyed out and cannot be selected.](/blog/2024-08-18_architectury/templategen.webp)

> [!NOTE]
>
> The four major client/server modloaders for Minecraft are Forge, NeoForge, Fabric, and Quilt. Fabric and Quilt are almost the same, as are Forge and NeoForge. About a year ago, there was some controvercy in the Forge project that caused NeoForge to branch off from it.
>
> Since then, NeoForge has been making progress on improving upon Forge's base architecture and making a name for itself. I've also been encountering more issues with Forge, such as being unable to create profiles for Minecraft 1.20.5 and 1.20.6 with it in Modrinth and MultiMC[^2]. Checking Forge's website, builds for these game versions do exist, so I don't know what's up.
>
> As for Architectury's support for Forge, [there have been discussions of deprecating it in favor of NeoForge](https://docs.architectury.dev/api/migration/version_10), but this was as of 1.20.2. Support for Forge has been broken since 1.20.5. It seems that there has been work to fix it, but I haven't seen any news since then. I'm fairly out of the loop, and I'm running blind here.

## Importing the template

Alright, so I've finally got my template downloaded. I get it imported into my IDE (IntelliJ my beloved) and it's broken out of the box.

![A screenshot of IntelliJ stating that "ArchitecturyExampleMod: failed" with the error "Mod was built with a newer version of Loom (1.7.3), you are using Loom (1.6.411)"](/blog/2024-08-18_architectury/oldloom.webp)

Welp, this is confusing. So [Loom](https://fabricmc.net/wiki/documentation:fabric_loom) is the plugin for Gradle (the build tool) that sets up the development environment for Fabric ([and Quilt](https://github.com/QuiltMC/quilt-loom)) mod development. [Architectury has it's own variant](https://docs.architectury.dev/loom/introduction). Upon doing some digging, it seems like Architectury Loom is a version behind Fabric Loom and Quilt Loom (1.6 vs 1.7). The version of Fabric API the template comes with looks like it should work on Loom 1.6--Quilt Standard Libraries (QSL) is the problem child here.

Well, when I first made the mod, I didn't need Fabric API, why would I need QSL either? Removing all references to both in the build files let it import just fine.

## Porting mod content

Now that the template is good to go, we can actually start adding back the 3 things the mod does. In about 30 minutes, I've added all the features to the module where the shared code goes. Testing it out on Fabric, it's working flawlessly... almost.

You see, I add a whopping 1 line of localization to the game: the name of a gamerule the mod adds. Everything was working except this string of text.[^3]

Alright, how do the other mod loaders fair?

I load up NeoForge, and surprisingly, it's perfect. No weird complicated errors. No strange bugs. Everything just works--even that 1 line of localization.

As for Quilt, you know how I said we don't need QSL? Apparently I'm wrong.

So if you'll recall, QSL is based on Fabric API, which is just a mod for Fabric. Fabric Loader (the core part of Fabric that actually adds mods to the game) provides the mechanism for mods to register themselves to be loaded so you don't need the entirety of Fabric API.

Not Quilt. You see, the mechanism for mods to register themselves in Quilt is provided by QSL, so you have to include it for your mod to actually work. This is in spite of it being based off Fabric API, which is just a mod that you can live without.

And what happens when I try to get rid of the registration system?

```log
Caused by: java.nio.file.NoSuchFileException: /mnt/Files/Programming/ArchitecturyExampleMod/quilt/build/resources/main/example_mod.mixins.json
```

It can't find the Mixin file, you know, that thing that registers all the game code changes my mod needs to work. I'll blame this one on Architectury though, considering the issue with Fabric was likely caused by Architectury not giving it the localization file either.

## Outcome

So when compiling both the Fabric and NeoForge versions, all the issues were gone. Quilt is going to have to wait, and old Forge is... well, we'll see. At this point, the builds for those versions have already been released on [Curseforge](https://www.curseforge.com/minecraft/mc-mods/llama-steeds), [Modrinth](https://modrinth.com/mod/llama-steeds), and [GitHub Releases](https://github.com/justinhschaaf/LlamaSteeds/releases), so go grab them for yourself if you like. Feels good to get this off my To-Do list.

[What do you mean the game got updated again?](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-21-1)

[^1]: A modloader is a special program that interfaces with a game to allow modifications (packaged as "mods") to be added onto it. Different modloaders interface with the game slightly differently, and one mod written specifically to work with one modloader doesn't work on others. Architectury aims to bridge the gap and allow for one mod to work on multiple modloaders.

[^2]: Modrinth and MultiMC are both prominent launchers for Minecraft, meaning they're applications that manage different versions of the game. They allow you to have different "profiles" running a different game version, modloader, set of mods, settings, worlds, servers, etc.

[^3]: So funny story. The night I go to release this, I go to check whether the mod works with 1.21.1, starting with Fabric, and the game doesn't load. Apparently, I put out a faulty build, and while troubleshooting this I realized that the resources for Fabric mods are loaded by Fabric API and not Fabric Loader, so none of the localization was registering because of it despite existing in the project. FML.
