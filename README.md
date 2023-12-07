# Consignes pour le projet

## Objectif

L'objectif de ce projet et d'apprendre à utiliser un système de connexion et d'inscription avec une base de données.

## Consignes

1. Complétez l'application pour qu'elle permette à un utilisateur de se connecter.
2. Stockez les informations de connexion dans le local storage.
3. Ajouter les requêtes permettant de récupérer les informations jeux et les afficher sur la page `home` avec le composant `Home.tsx`.
4. Ajouter une page permettant à un utilisateur de se créer un compte. Pour cela, ajoutez un lien sur la page de connexion pour vous y amener.
5. Ajouter une page permettant à un utilisateur de modifier son mot de passe. Pour cela, ajoutez un lien sur la page `home` pour vous y amener.
6. Ajouter une callback permettant à un utilisateur de se déconnecter. Pour cela, ajoutez un bouton sur la page `home` pour vous déconnecter et vous ramener vers la page de connexion.

## Comment faire ?

### fetch

Pour une méthode GET, on se souvient :

```ts
const response = await fetch('http://localhost:1337/api/games')
const data = await response.json()
```

Pour une méthode POST, on se souvient :

```ts
const response = await fetch('http://localhost:1337/api/games', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Mon jeu',
    description: 'La description de mon jeu',
    price: 10
  })
})
const data = await response.json()
```

Pour une méthode PUT, avec un token d'authentification :

```ts
const response = await fetch("http://localhost:1337/api/games/1", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      title: 'Mon jeu',
      description: 'La description de mon jeu',
      price: 10
    })
  })
const data = await response.json()
```

Adaptez ces exemples à votre projet, en fonction des routes que vous avez créées, en fonction du body que vous souhaitez envoyer, etc.

### localStorage

Pour stocker des informations dans le localStorage, on utilise la méthode `setItem` :

```ts
localStorage.setItem('token', 'mon-token')
```

Pour récupérer des informations dans le localStorage, on utilise la méthode `getItem` :

```ts
const token = localStorage.getItem('token')
```

Pour supprimer une information du localStorage, on utilise la méthode `removeItem` :

```ts
localStorage.removeItem('token')
```