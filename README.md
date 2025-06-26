# Mini-site de présentation d'entreprise

## Stratégie de branches

- `main` : branche stable, prête pour la mise en ligne.
- `dev` : branche de développement semi-stable, intégration globale.
- `test/frontend` : branche pour tester l’intégration des fonctionnalités.
- `feature/*` : branches pour le développement de chaque fonctionnalité spécifique.

## Étapes suivies

1. Création des branches pour chaque fonctionnalité (`feature/html-structure`, `feature/css-theme`, etc.).
2. Développement en isolation dans chaque branche.
3. Fusion dans `test/frontend` pour tests intermédiaires.
4. Fusion dans `dev` pour intégration globale.
5. Fusion finale dans `main` pour la version finale.

## Commandes Git utilisées

- `git init`
- `git checkout -b <branche>`
- `git add`
- `git commit -m "message"`
- `git merge <branche>`
- `git push`
- `git pull`
- `git status`
- `git log`