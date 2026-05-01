// ─────────────────────────────────────────────────
// Projet #1 — Hello World
//
// Concepts appris :
//   - process.argv  → lire les arguments du terminal
//   - console.log   → afficher dans le terminal
//   - if / else     → logique de base
// ─────────────────────────────────────────────────


// process.argv est un tableau de strings.
// Voici ce qu'il contient quand tu tapes :
//   node src/index.ts Harry
//
//   process.argv[0] = "/usr/bin/node"   (node lui-même)
//   process.argv[1] = "/src/index.ts"   (ton fichier)
//   process.argv[2] = "Harry"           (ton 1er argument)
//
// Les arguments UTILISATEUR commencent à l'index 2.

const prenom = process.argv[2]; // peut être undefined si rien n'est tapé
const langue = process.argv[3]; // peut être undefined aussi

console.log(process.argv);

// ── Choisir le message selon la langue ──────────────
let message: string;

if (langue === "en") {
  message = "Hello";
} else if (langue === "es") {
  message = "Hola";
} else {
  message = "Bonjour"; // français par défaut
}

// ── Afficher le résultat ─────────────────────────────
if (prenom !== undefined) {
  console.log(`${message}, ${prenom} !`);
} else {
  console.log(`${message}, monde !`);
}