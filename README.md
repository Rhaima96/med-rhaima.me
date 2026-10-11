# med-rhaima.me

Portfolio de Mohamed Touhami Rhaima. Nuxt 3, TypeScript, Tailwind CSS, généré en site statique.

## Modifier le contenu

Le site existe en français (`/`, langue par défaut) et en anglais (`/en/`).

- **`data/i18n/fr.ts`** et **`data/i18n/en.ts`** : tout le texte d'une langue (titres, paragraphes, projets, expériences, boutons, libellés d'accessibilité, SEO). Les deux fichiers ont la même forme, imposée par le type `Content` de `data/types.ts` : si une clé manque dans une langue, `npm run typecheck` le signale.
- **`data/shared.ts`** : ce qui ne change pas avec la langue (identité, liens, stacks, liens des stores, PR Laravel, packages, points du champ vectoriel).

### CV

Les deux CV sont générés par `cv/build.py` (Python + ReportLab) :

```bash
pip install reportlab
python3 cv/build.py   # écrit public/CV_Mohamed_Touhami_Rhaima_FR.pdf et _EN.pdf
```

Le bouton CV de chaque page télécharge le PDF de sa langue.

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
data/i18n/{fr,en}.ts    contenu de chaque langue
data/shared.ts          données communes aux deux langues
pages/index.vue         page française (/)
pages/en/index.vue      page anglaise (/en/)
components/HomePage     sections + SEO par langue (hreflang, Open Graph, JSON-LD)
cv/build.py             génération des CV PDF FR et EN
components/             sections (Hero, About, Skills, Projects, Experience, OpenSource, Contact), header, footer
components/VectorField  le champ vectoriel interactif du hero
composables/useNav.ts   navigation et section active
plugins/reveal.ts       directive v-reveal (apparitions au défilement)
assets/css/main.css     styles de base, focus, reduced motion
public/                 favicon, og.png, robots.txt, sitemap.xml, CV
```

## SEO

- Titre, description, Open Graph, Twitter Card, `hreflang` et JSON-LD par langue dans `components/HomePage.vue`
- `public/sitemap.xml` (les deux langues avec leurs alternates) et `public/robots.txt` : mettre à jour `lastmod` après une grosse modification
- Images de partage `public/og.png` (FR) et `public/og-en.png` (EN), 1200 × 630

## Déploiement sur med-rhaima.me (VPS)

Le site est 100 % statique (`npm run generate` → `.output/public`). Le workflow `.github/workflows/deploy.yml` le reconstruit et le synchronise sur le VPS par rsync/SSH à chaque push sur `main`.

### Mise en place (une seule fois)

**1. DNS** chez le registrar du domaine :

| Type | Nom | Valeur |
|------|-----|--------|
| A | `@` | IP du VPS |
| A | `www` | IP du VPS |

(ajoutez des enregistrements `AAAA` si le VPS a une IPv6).

**2. Sur le VPS** (Apache). `deploy` est un utilisateur sans sudo qui ne peut écrire que dans le dossier du site :

```bash
sudo adduser --disabled-password --gecos "" deploy
sudo mkdir -p /var/www/med-rhaima.me
sudo chown deploy:deploy /var/www/med-rhaima.me
sudo -u deploy mkdir -p -m 700 /home/deploy/.ssh

# Config Apache fournie dans deploy/apache.conf
sudo curl -fsSL https://raw.githubusercontent.com/Rhaima96/med-rhaima.me/main/deploy/apache.conf \
  -o /etc/apache2/sites-available/med-rhaima.me.conf
sudo a2enmod headers expires deflate
sudo a2ensite med-rhaima.me
sudo apache2ctl configtest && sudo systemctl reload apache2

# HTTPS (une fois le DNS propagé : dig +short med-rhaima.me)
sudo certbot --apache -d med-rhaima.me -d www.med-rhaima.me --redirect
```

**3. Clé de déploiement** (sur votre Mac) :

```bash
ssh-keygen -t ed25519 -f ~/.ssh/med-rhaima-deploy -N "" -C "github-actions med-rhaima.me"

# deploy n'a pas de mot de passe : on installe la clé publique via le compte ubuntu
cat ~/.ssh/med-rhaima-deploy.pub | ssh -t ubuntu@IP_DU_VPS \
  "sudo -u deploy tee -a /home/deploy/.ssh/authorized_keys >/dev/null && sudo chmod 600 /home/deploy/.ssh/authorized_keys"

ssh -i ~/.ssh/med-rhaima-deploy deploy@IP_DU_VPS 'echo ok'   # test
ssh-keyscan IP_DU_VPS        # pour VPS_KNOWN_HOSTS (ajoutez -p PORT si SSH n'est pas sur 22)
```

**4. Secrets GitHub** : dépôt → Settings → Secrets and variables → Actions.

| Secret | Valeur |
|--------|--------|
| `VPS_HOST` | IP du VPS |
| `VPS_USER` | `deploy` |
| `VPS_SSH_KEY` | contenu de `~/.ssh/med-rhaima-deploy` (clé privée) |
| `VPS_KNOWN_HOSTS` | sortie de `ssh-keyscan` |

Variables facultatives (onglet *Variables*) : `VPS_PORT` (22 par défaut), `VPS_PATH` (`/var/www/med-rhaima.me` par défaut).

**5. Premier déploiement** : Actions → Deploy → *Run workflow*, ou un simple `git push`.

### Déploiement manuel (sans GitHub Actions)

```bash
npm run generate
rsync -az --delete .output/public/ deploy@IP_DU_VPS:/var/www/med-rhaima.me/
```

### Après la mise en ligne

- Ajoutez le site dans Google Search Console et soumettez `https://med-rhaima.me/sitemap.xml`.
- Vérifiez l'aperçu de partage avec l'inspecteur de publication LinkedIn.
