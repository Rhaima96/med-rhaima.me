# med-rhaima.me

Portfolio de Mohamed Touhami Rhaima. Nuxt 3, TypeScript, Tailwind CSS, généré en site statique.

## Modifier le contenu

Tout le contenu est dans **`data/profile.ts`** : identité, à propos, compétences, projets, expériences, contributions Laravel, packages, et les points du champ vectoriel du hero. Les composants ne contiennent pas de texte métier à part les titres de section.

Le CV téléchargeable est `public/CV_Mohamed_Touhami_Rhaima_FR.pdf`. Remplacez le fichier en gardant le même nom, ou changez `site.cv` dans `data/profile.ts`.

## Développement

```bash
npm install
npm run dev          # http://localhost:3000
npm run typecheck
npm run generate     # site statique dans .output/public
npx serve .output/public   # prévisualiser le build
```

Node 20 ou plus récent.

## Structure

```
data/profile.ts         contenu du site (source unique)
components/             sections (Hero, About, Skills, Projects, Experience, OpenSource, Contact), header, footer
components/VectorField  le champ vectoriel interactif du hero
composables/useNav.ts   navigation et section active
plugins/reveal.ts       directive v-reveal (apparitions au défilement)
assets/css/main.css     styles de base, focus, reduced motion
public/                 favicon, og.png, robots.txt, sitemap.xml, CV
```

## SEO

- Titre, description, Open Graph et Twitter Card dans `nuxt.config.ts`
- Données structurées `ProfilePage` + `Person` (JSON-LD) dans `app.vue`
- `public/sitemap.xml` et `public/robots.txt` (une seule page : mettre à jour `lastmod` après une grosse modification)
- Image de partage `public/og.png` (1200 × 630)

## Déploiement sur med-rhaima.me

Le site est 100 % statique : commande de build `npm run generate`, dossier de sortie `.output/public`.

### Option recommandée : Cloudflare Pages (gratuit)

1. Poussez ce dossier sur un dépôt GitHub (par exemple `Rhaima96/med-rhaima.me`).
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git → choisissez le dépôt.
3. Réglages de build :
   - Framework preset : **Nuxt.js**
   - Build command : `npm run generate`
   - Build output directory : `.output/public`
   - Variable d'environnement : `NODE_VERSION` = `22`
4. Une fois déployé : onglet **Custom domains** → ajoutez `med-rhaima.me`, puis `www.med-rhaima.me`.
5. DNS :
   - Si le domaine est géré par Cloudflare, les enregistrements sont créés automatiquement.
   - Sinon, chez votre registrar : soit vous passez les nameservers sur Cloudflare (le plus simple pour un domaine racine), soit vous ajoutez un `CNAME www → <projet>.pages.dev` et une redirection de `med-rhaima.me` vers `www`.
6. Le HTTPS est activé automatiquement. Chaque `git push` redéploie le site.

### Vercel ou Netlify

Mêmes réglages : build `npm run generate`, sortie `.output/public`. Ajoutez le domaine dans les paramètres du projet et suivez les enregistrements DNS indiqués (A `76.76.21.21` pour Vercel sur le domaine racine, CNAME pour `www`).

### Votre propre VPS (Nginx)

```bash
npm run generate
rsync -avz --delete .output/public/ user@serveur:/var/www/med-rhaima.me/
```

```nginx
server {
    server_name med-rhaima.me www.med-rhaima.me;
    root /var/www/med-rhaima.me;
    location / { try_files $uri $uri/ /index.html; }
    location /_nuxt/ { expires 1y; add_header Cache-Control "public, immutable"; }
}
```

Puis `certbot --nginx -d med-rhaima.me -d www.med-rhaima.me` pour le HTTPS, et un enregistrement DNS `A` vers l'IP du serveur.

### Après la mise en ligne

- Ajoutez le site dans Google Search Console et soumettez `https://med-rhaima.me/sitemap.xml`.
- Vérifiez l'aperçu de partage avec l'inspecteur de publication LinkedIn.
