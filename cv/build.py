"""Build the CV PDFs in both languages.

    python3 cv/build.py            # writes public/CV_Mohamed_Touhami_Rhaima_FR.pdf and _EN.pdf
Requires: pip install reportlab
"""
import pathlib
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable

NAVY, BLUE, GREY = HexColor("#1B2A4A"), HexColor("#2E5C8A"), HexColor("#666666")
S = lambda name, **kw: ParagraphStyle(name, **{"fontName": "Helvetica", "fontSize": 9, "leading": 12.2, **kw})
name = S("n", fontName="Helvetica-Bold", fontSize=22, leading=26, textColor=NAVY)
sub = S("s", fontSize=12.5, leading=16, textColor=BLUE)
meta = S("m", fontSize=8.2, leading=11, textColor=GREY)
h = S("h", fontName="Helvetica-Bold", fontSize=11.5, leading=14, textColor=NAVY, spaceBefore=9, keepWithNext=1)
body = S("b", spaceAfter=3)
job = S("j", fontName="Helvetica-Bold", fontSize=9.4, textColor=NAVY, spaceBefore=5, keepWithNext=1)
proj = S("p", fontName="Helvetica-Bold", spaceBefore=3, keepWithNext=1)
where = S("w", fontName="Helvetica-Oblique", fontSize=8.4, leading=11, textColor=GREY, keepWithNext=1)
stack = S("st", fontName="Helvetica-Oblique", fontSize=7.8, leading=10.5, textColor=GREY, leftIndent=4)
bullet = S("bu", leftIndent=14, bulletIndent=4)
label = S("l", fontName="Helvetica-Bold", textColor=NAVY)

P = lambda t, s=body: out.append(Paragraph(t, s))
def H(t):
    P(t, h)
    out.append(HRFlowable(width="100%", thickness=0.8, color=NAVY, spaceBefore=1, spaceAfter=4))
def B(*items):
    for t in items: out.append(Paragraph(t, bullet, bulletText="•"))



def build(lang, path):
    global out
    out = []
    if lang == "fr":
        P("MOHAMED TOUHAMI RHAIMA", name)
        P("Développeur Full-Stack Senior — Laravel / Vue.js", sub)
        P("6+ ans d'expérience | Team Lead | Contributeur au framework Laravel | Gabès, Tunisie", meta)
        L = lambda url, text: f'<link href="{url}" color="#666666">{text}</link>'
        P("+216 24 836 687 | " + L("mailto:mohamed.rhaima96@gmail.com", "mohamed.rhaima96@gmail.com")
          + " | Portfolio : " + L("https://med-rhaima.me", "<b>med-rhaima.me</b>"), meta)
        P(L("https://www.linkedin.com/in/mohamed-touhami-rhaima", "linkedin.com/in/mohamed-touhami-rhaima")
          + " | " + L("https://github.com/Rhaima96", "github.com/Rhaima96"), meta)

        H("PROFIL PROFESSIONNEL")
        P("Développeur Full-Stack Senior Laravel / Vue.js avec 6 ans d'expérience, spécialisé dans la conception d'architectures "
          "évolutives et le développement de plateformes métier complexes (CRM, LMS, e-commerce, VTC). Autonome et rigoureux, "
          "force de proposition à chaque étape : analyse des besoins, choix techniques, développement, optimisation et déploiement.")
        P("Contributeur au framework Laravel : 7 pull requests mergées ajoutant le support de la recherche vectorielle MariaDB, "
          "étendant la CI de Laravel aux versions récentes de MariaDB et améliorant la documentation officielle. Conçoit des "
          "fonctionnalités d'IA appliquée (RAG, serveurs MCP) et intègre les outils d'IA générative (Claude Code, Cursor) pour "
          "fiabiliser et accélérer le développement. Habitué à collaborer avec des équipes internationales et des clients français "
          "à distance depuis 2022. Disponible sous un mois (préavis), ouvert au télétravail comme au présentiel.")

        H("COMPÉTENCES TECHNIQUES")
        skills = [
            ("Backend", "PHP, Laravel (v5–v13), Symfony (v6 &amp; v7), REST APIs, MVC / HMVC Architecture, SOLID, Clean Architecture, authentification &amp; sécurité"),
            ("Frontend", "Vue.js 2 &amp; 3, Nuxt.js, Inertia.js, Livewire 3 &amp; 4, JavaScript, TypeScript, Tailwind CSS, Bootstrap, HTML5, CSS3"),
            ("Mobile", "Flutter"),
            ("Databases", "MySQL, MariaDB (dont MariaDB Vector), PostgreSQL (dont pgvector), SQLite, MongoDB, Redis (cache, files d'attente, sessions), architectures multi-tenant"),
            ("IA &amp; LLM", "RAG (embeddings, recherche sémantique sur pgvector / MariaDB Vector), création de serveurs MCP (Model Context Protocol)"),
            ("DevOps &amp; outils", "Git (GitHub / GitLab), Docker, CI/CD (GitHub Actions, Codemagic), Filament v3, Nginx, Apache, Linux, OVH, Ionos, Hostinger, Agile / Scrum, JIRA, ClickUp"),
            ("Dév. assisté par IA", "Claude Code, Cursor, GitHub Copilot — automatisation de la revue de code, des tests et de la documentation"),
        ]
        t = Table([[Paragraph(a, label), Paragraph(b, body)] for a, b in skills], colWidths=[36 * mm, None])
        t.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0),
                               ("TOPPADDING", (0, 0), (-1, -1), 1), ("BOTTOMPADDING", (0, 0), (-1, -1), 1)]))
        out.append(t)

        H("EXPÉRIENCE PROFESSIONNELLE")
        P("Développeur Full-Stack Laravel / Vue.js (CDI)", job)
        P("ECG Assurance • Gabès, Tunisie | Sept. 2025 – Aujourd'hui", where)
        B("Conception et développement d'un CRM métier multi-tenant avec une base de données distincte par client, de l'analyse des besoins jusqu'au déploiement",
          "Optimisation des performances et maintenance continue du système en production")
        P("Stack: Laravel, Vue.js, MySQL, Git, méthodologie Agile", stack)

        P("Développeur Full-Stack Laravel / Inertia / Vue.js (CDD)", job)
        P("Black Gold • Dammam, Arabie saoudite | Sept. 2024 – Août 2025", where)
        B("Participation à l'architecture technique et aux choix technologiques des solutions full-stack",
          "Développement de plateformes spécialisées : LMS (formation), SIRH (ressources humaines) et portail d'emploi",
          "Collaboration active avec des équipes techniques internationales pour aligner les livrables")
        P("Stack: Laravel 10, Vue.js, Inertia.js, MySQL, Git", stack)

        P("Team Lead &amp; Développeur Full-Stack Laravel (Freelance)", job)
        P("itSolve • Île-de-France, France (à distance) | Août 2022 – Août 2024 | Management d'une équipe de 4", where)
        P("Jasmin Emballage — jasminemballage.fr (Août 2022 – Août 2023)", proj)
        B("Développement d'une solution e-commerce ayant traité plus de 10 000 commandes, avec un temps de traitement réduit de 40 %",
          "Développement d'API pour les applications mobiles ; intégration du paiement (Sogecommerce) et de la livraison (Boxtal)")
        P("Stack: Laravel, Vue.js, REST API, Pusher, Ionos", stack)
        P("SOS Protech — sosprotech.fr (Août 2023 – Déc. 2023)", proj)
        B("Développement d'une plateforme de gestion des interventions techniques, devis, factures et affectation des techniciens",
          "Mise en place du SSR avec Inertia.js, entraînant une hausse de 45 % du trafic organique",
          "Génération de rapports PDF avec signature numérique et tableaux de bord statistiques multi-rôles (Chart.js)",
          "Déploiement et optimisation de serveurs VPS (Ubuntu, Apache), temps de chargement réduit de 30 %")
        P("Stack: Laravel, Vue.js 3, Inertia.js, Tailwind CSS, MySQL, GitHub Actions", stack)
        P("Préfev — plateforme VTC (Déc. 2023 – Août 2024)", proj)
        B("Développement full-stack (backend et frontend) d'une plateforme de gestion VTC",
          "Réservation et dispatch des courses en temps réel",
          "Gestion des chauffeurs, des véhicules et de la facturation",
          "Intégration du paiement en ligne et gestion de la tarification",
          "Management d'équipe, estimation de charge et planification")
        P("Stack: Laravel, Livewire, Bootstrap, MySQL", stack)

        P("Développeur Laravel (CDD)", job)
        P("TMKiiN • Gabès, Tunisie | Juil. 2020 – Août 2022", where)
        B("Développement backend de plateformes de livraison et de messagerie",
          "Intégration d'API tierces (WhatsApp, paiement Geidea)",
          "Maintenance continue, développement d'API et documentation technique")
        P("Stack: Laravel, Vue.js, Flutter, API tierces, Docker, HMVC, JIRA, GitLab", stack)

        H("OPEN SOURCE")
        P("Framework Laravel — Contributeur (2026) · 7 pull requests mergées", job)
        P("github.com/laravel/framework | github.com/laravel/docs", where)
        B("Ajout du support MariaDB pour les requêtes de distance vectorielle, utilisées par la recherche sémantique de Laravel (framework #61250)",
          "Extension de la CI de Laravel à MariaDB 11.8 et 12.3 LTS, pour que les tests vectoriels et 11.7+ tournent sur chaque pull request ; "
          "le nouveau job a détecté un test cassé par un changement de comportement de MariaDB 11.8.1 (#61615, #61641)",
          "Documentation des index vectoriels dans la documentation officielle de Laravel (docs #11368, #11371)",
          "Mise à jour de la documentation MariaDB : driver <i>mariadb</i> dédié pour Homestead, DELETE multi-tables depuis 11.8.1, "
          "et clarification du support vectoriel natif de MariaDB (docs #11374, #11399)")
        P("Packages Laravel (Packagist)", proj)
        B("<b>laravel-vector-metrics</b> : recherche vectorielle euclidienne et cosinus, index vectoriels configurables pour MariaDB et PostgreSQL — packagist.org/packages/rhaima96/laravel-vector-metrics",
          "<b>laravel-flouci</b> : intégration de la passerelle de paiement Flouci — packagist.org/packages/rhaima/laravel-flouci",
          "<b>Larakonnect</b> : intégration de la passerelle de paiement Konnect.network — packagist.org/packages/rhaima/larakonnect",
          "<b>VoltPanel</b> : générateur de panneaux d'administration Laravel (stack VILT) — rhaima96.github.io/voltpaneldocs")

        H("PROJET PERSONNEL")
        P("Flync — Plateforme de livraison de repas — flync.pro", job)
        B("3 applications Flutter (client, restaurant, livreur) publiées sur l'App Store et Google Play",
          "Backend Laravel et frontend Next.js déployés en production ; CI/CD automatisée (Codemagic, GitHub Actions)",
          "Intégration Firebase, paiement Flouci, zones de livraison, notifications push, tableau de bord temps réel")
        P("Stack: Flutter, Laravel, Next.js, Firebase, MySQL, Codemagic, GitHub Actions", stack)

        H("FORMATION")
        P("BTS Informatique &amp; Multimédia — ENTIC, Gabès (2021)")
        H("LANGUES")
        P("Français : courant | Anglais : bon niveau professionnel | Arabe : langue maternelle")

    else:
        P("MOHAMED TOUHAMI RHAIMA", name)
        P("Senior Full-Stack Developer — Laravel / Vue.js", sub)
        P("6+ years of experience | Team Lead | Laravel framework contributor | Gabès, Tunisia", meta)
        L = lambda url, text: f'<link href="{url}" color="#666666">{text}</link>'
        P("+216 24 836 687 | " + L("mailto:mohamed.rhaima96@gmail.com", "mohamed.rhaima96@gmail.com")
          + " | Portfolio: " + L("https://med-rhaima.me/en/", "<b>med-rhaima.me</b>"), meta)
        P(L("https://www.linkedin.com/in/mohamed-touhami-rhaima", "linkedin.com/in/mohamed-touhami-rhaima")
          + " | " + L("https://github.com/Rhaima96", "github.com/Rhaima96"), meta)

        H("PROFESSIONAL SUMMARY")
        P("Senior Full-Stack Laravel / Vue.js developer with 6 years of experience, specialized in designing scalable architectures "
          "and building complex business platforms (CRM, LMS, e-commerce, ride-hailing). Autonomous and rigorous, proactive at every "
          "stage: requirements analysis, technical choices, development, optimization and deployment.")
        P("Laravel framework contributor: 7 merged pull requests adding MariaDB vector search support, extending Laravel's CI to "
          "recent MariaDB releases and improving the official documentation. Builds applied AI features (RAG, MCP servers) and uses "
          "generative AI tools (Claude Code, Cursor) to make development more reliable and faster. Experienced in working remotely "
          "with international teams and French clients since 2022. Available within one month (notice period), open to remote or on-site roles.")

        H("TECHNICAL SKILLS")
        skills = [
            ("Backend", "PHP, Laravel (v5–v13), Symfony (v6 &amp; v7), REST APIs, MVC / HMVC Architecture, SOLID, Clean Architecture, authentication &amp; security"),
            ("Frontend", "Vue.js 2 &amp; 3, Nuxt.js, Inertia.js, Livewire 3 &amp; 4, JavaScript, TypeScript, Tailwind CSS, Bootstrap, HTML5, CSS3"),
            ("Mobile", "Flutter"),
            ("Databases", "MySQL, MariaDB (incl. MariaDB Vector), PostgreSQL (incl. pgvector), SQLite, MongoDB, Redis (cache, queues, sessions), multi-tenant architectures"),
            ("AI &amp; LLM", "RAG (embeddings, semantic search on pgvector / MariaDB Vector), building MCP servers (Model Context Protocol)"),
            ("DevOps &amp; tools", "Git (GitHub / GitLab), Docker, CI/CD (GitHub Actions, Codemagic), Filament v3, Nginx, Apache, Linux, OVH, Ionos, Hostinger, Agile / Scrum, JIRA, ClickUp"),
            ("AI-assisted dev", "Claude Code, Cursor, GitHub Copilot — automated code review, testing and documentation"),
        ]
        t = Table([[Paragraph(a, label), Paragraph(b, body)] for a, b in skills], colWidths=[36 * mm, None])
        t.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0),
                               ("TOPPADDING", (0, 0), (-1, -1), 1), ("BOTTOMPADDING", (0, 0), (-1, -1), 1)]))
        out.append(t)

        H("PROFESSIONAL EXPERIENCE")
        P("Full-Stack Developer, Laravel / Vue.js (Permanent)", job)
        P("ECG Assurance • Gabès, Tunisia | Sep 2025 – Present", where)
        B("Designed and developed a multi-tenant business CRM with a separate database per client, from requirements analysis to deployment",
          "Performance optimization and ongoing maintenance of the production system")
        P("Stack: Laravel, Vue.js, MySQL, Git, Agile methodology", stack)

        P("Full-Stack Developer, Laravel / Inertia / Vue.js (Fixed-term contract)", job)
        P("Black Gold • Dammam, Saudi Arabia | Sep 2024 – Aug 2025", where)
        B("Contributed to the technical architecture and technology choices for full-stack solutions",
          "Built specialized platforms: LMS (training), HRIS (human resources) and a job portal",
          "Worked closely with international engineering teams to align deliverables")
        P("Stack: Laravel 10, Vue.js, Inertia.js, MySQL, Git", stack)

        P("Team Lead &amp; Full-Stack Laravel Developer (Freelance)", job)
        P("itSolve • Île-de-France, France (remote) | Aug 2022 – Aug 2024 | Managed a team of 4", where)
        P("Jasmin Emballage — jasminemballage.fr (Aug 2022 – Aug 2023)", proj)
        B("Built an e-commerce platform that processed more than 10,000 orders, with processing time cut by 40%",
          "Built APIs for the mobile apps; integrated payments (Sogecommerce) and shipping (Boxtal)")
        P("Stack: Laravel, Vue.js, REST API, Pusher, Ionos", stack)
        P("SOS Protech — sosprotech.fr (Aug 2023 – Dec 2023)", proj)
        B("Built a platform for managing technical interventions, quotes, invoices and technician assignment",
          "Implemented SSR with Inertia.js, increasing organic traffic by 45%",
          "Generated PDF reports with digital signatures and multi-role statistics dashboards (Chart.js)",
          "Deployed and tuned VPS servers (Ubuntu, Apache), cutting load time by 30%")
        P("Stack: Laravel, Vue.js 3, Inertia.js, Tailwind CSS, MySQL, GitHub Actions", stack)
        P("Préfev — ride-hailing (VTC) platform (Dec 2023 – Aug 2024)", proj)
        B("Full-stack development (backend and frontend) of a ride-hailing management platform",
          "Real-time ride booking and dispatch",
          "Driver, vehicle and billing management",
          "Online payment integration and pricing management",
          "Team management, effort estimation and planning")
        P("Stack: Laravel, Livewire, Bootstrap, MySQL", stack)

        P("Laravel Developer (Fixed-term contract)", job)
        P("TMKiiN • Gabès, Tunisia | Jul 2020 – Aug 2022", where)
        B("Backend development of delivery and messaging platforms",
          "Third-party API integrations (WhatsApp, Geidea payments)",
          "Ongoing maintenance, API development and technical documentation")
        P("Stack: Laravel, Vue.js, Flutter, third-party APIs, Docker, HMVC, JIRA, GitLab", stack)

        H("OPEN SOURCE")
        P("Laravel Framework — Contributor (2026) · 7 merged pull requests", job)
        P("github.com/laravel/framework | github.com/laravel/docs", where)
        B("Added MariaDB support for vector distance queries, used by Laravel's semantic search (framework #61250)",
          "Extended Laravel's CI to MariaDB 11.8 and 12.3 LTS so vector and 11.7+ tests run on every pull request; "
          "the new job caught a test broken by a behavior change in MariaDB 11.8.1 (#61615, #61641)",
          "Documented vector indexes in the official Laravel documentation (docs #11368, #11371)",
          "Updated the MariaDB documentation: dedicated <i>mariadb</i> driver for Homestead, multi-table DELETE since 11.8.1, "
          "and clarified MariaDB's native vector support (docs #11374, #11399)")
        P("Laravel packages (Packagist)", proj)
        B("<b>laravel-vector-metrics</b>: Euclidean and cosine vector search, configurable vector indexes for MariaDB and PostgreSQL — packagist.org/packages/rhaima96/laravel-vector-metrics",
          "<b>laravel-flouci</b>: integration for the Flouci payment gateway — packagist.org/packages/rhaima/laravel-flouci",
          "<b>Larakonnect</b>: integration for the Konnect.network payment gateway — packagist.org/packages/rhaima/larakonnect",
          "<b>VoltPanel</b>: Laravel admin panel builder (VILT stack) — rhaima96.github.io/voltpaneldocs")

        H("PERSONAL PROJECT")
        P("Flync — Food delivery platform — flync.pro", job)
        B("3 Flutter apps (customer, restaurant, courier) published on the App Store and Google Play",
          "Laravel backend and Next.js frontend deployed to production; automated CI/CD (Codemagic, GitHub Actions)",
          "Firebase integration, Flouci payments, delivery zones, push notifications, real-time dashboard")
        P("Stack: Flutter, Laravel, Next.js, Firebase, MySQL, Codemagic, GitHub Actions", stack)

        H("EDUCATION")
        P("BTS (two-year higher national diploma) in Computer Science &amp; Multimedia — ENTIC, Gabès (2021)")
        H("LANGUAGES")
        P("French: fluent | English: professional working proficiency | Arabic: native")

    titles = {"fr": "CV — Mohamed Touhami Rhaima", "en": "Résumé — Mohamed Touhami Rhaima"}
    SimpleDocTemplate(str(path), pagesize=A4, leftMargin=18 * mm, rightMargin=18 * mm, topMargin=15 * mm, bottomMargin=14 * mm,
                      title=titles[lang], author="Mohamed Touhami Rhaima").build(out)


if __name__ == "__main__":
    public = pathlib.Path(__file__).resolve().parent.parent / "public"
    for lang in ("fr", "en"):
        build(lang, public / f"CV_Mohamed_Touhami_Rhaima_{lang.upper()}.pdf")
