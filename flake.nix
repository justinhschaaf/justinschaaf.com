{

    # References:
    # https://zero-to-nix.com/start/nix-develop
    # https://github.com/DeterminateSystems/zero-to-nix/blob/main/nix/templates/dev/javascript/flake.nix
    # https://nixos.wiki/wiki/Flakes

    description = "justinschaaf.com built with Yarn and Svelte";

    inputs.nixpkgs.url = "github:nixos/nixpkgs";
    inputs.flake-utils.url = "github:numtide/flake-utils";

    outputs = { self, nixpkgs, flake-utils }: 
    flake-utils.lib.eachDefaultSystem(system:
        let pkgs = import nixpkgs { inherit system; }; in {
            devShells.default = pkgs.mkShell {

                packages = with pkgs; [
                    nodePackages.vercel
                    yarn-berry
                ];

                # Playwright is fucked
                # https://nixos.wiki/wiki/Playwright
                # https://www.giacomodebidda.com/posts/playwright-on-nixos/

            };
        }
    );

}
