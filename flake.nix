{

    # References:
    # https://zero-to-nix.com/start/nix-develop
    # https://github.com/DeterminateSystems/zero-to-nix/blob/main/nix/templates/dev/javascript/flake.nix
    # https://nixos.wiki/wiki/Flakes

    description = "justinschaaf.com built with Yarn and Svelte";

    inputs.nixpkgs.url = "github:nixos/nixpkgs";

    outputs = { self, nixpkgs }: 
    let

        # Every architecture
        allSystems = [
            "x86_64-linux"
            "aarch64-linux"
            "x86_64-darwin"
            "aarch64-darwin"
        ];

        # Setup the correct nixpkgs version for each architecture
        forAllSystems = f: nixpkgs.lib.genAttrs allSystems (system: f {
            pkgs = import nixpkgs { inherit system; };
        });

    in
    {

        # Setup dev shell correctly for each environment
        devShells = forAllSystems({ pkgs }: {

            default = pkgs.mkShell {

                packages = with pkgs; [

                    yarn-berry

                ];

            };

        });

    };

}
