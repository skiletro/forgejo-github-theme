{
  description = "Forgejo GitHub layouts with the warm.vodka dark theme";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";

  outputs = { self, nixpkgs }:
    let
      systems = [ "x86_64-linux" "aarch64-linux" "aarch64-darwin" ];
      forAllSystems = nixpkgs.lib.genAttrs systems;
    in
    {
      packages = forAllSystems (system:
        let
          pkgs = nixpkgs.legacyPackages.${system};
          theme = pkgs.buildNpmPackage {
            pname = "forgejo-github-theme";
            version = "0-unstable-${builtins.substring 0 8 (self.lastModifiedDate or "19700101")}";

            src = self;
            npmDepsHash = "sha256-aFrnwjm2A89naq5++v0i3LOsl9WOHxhMXrIaK9eltMk=";
            # Unused ESLint tooling has peers that exclude TypeScript 7.
            npmFlags = [ "--legacy-peer-deps" ];
            nativeBuildInputs = [ pkgs.bun ];

            # Stamp the footer without relying on Git metadata in the sandbox.
            THEME_VERSION = theme.version;

            buildPhase = ''
              runHook preBuild
              # Invoke Bun directly: Nix-patched shebangs otherwise select Node.
              bun node_modules/typescript/bin/tsc -b
              bun node_modules/vite/bin/vite.js build
              bun scripts/assembleForgejo.ts
              runHook postBuild
            '';

            installPhase = ''
              runHook preInstall
              cp -r dist/forgejo "$out"
              runHook postInstall
            '';

            meta = {
              description = "Forgejo GitHub layouts with the warm.vodka dark theme";
              homepage = "https://github.com/warm-vodka/forgejo-theme";
              license = pkgs.lib.licenses.asl20;
              platforms = pkgs.lib.platforms.unix;
            };
          };
        in
        {
          default = theme;
          forgejo-github-theme = theme;
        });
    };
}
