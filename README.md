# Annai Tuition Centre website

Responsive React + Vite website and Django REST API for Annai Tuition Centre. The public site includes Home, About, Classes, Results, Contact, Admission Enquiry and a custom 404 route. Admission applications open a prefilled WhatsApp message to 96262 65456; families review and send the message in WhatsApp. Applications are not stored or exported as spreadsheets. The private `/admin` page is retained for authorized staff to view existing database records. `/admin/` is also available as the standard Django administrator interface.

## Run locally (Windows PowerShell)

### Start the frontend

```powershell
cd C:\Users\choco\Documents\Codex\2026-10-21\i-x20\outputs\annai-tuition-centre
npm install
Copy-Item .env.example .env.local
npm run dev
```

### Start the API (Windows PowerShell)

Use Python 3.14 (available in the workspace) or another supported Python. The official MongoDB backend 5.2 series supports Django 5.2 and Python 3.14; install the matching dependency pins in `backend/requirements.txt`. Djongo itself is intentionally not used.

```powershell
cd C:\Users\choco\Documents\Codex\2026-10-21\i-x20\outputs\annai-tuition-centre\backend
py -3.14 -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
Copy-Item .env.example .env
```

Edit the values in `backend/.env` before starting Django; the backend loads it with python-dotenv. The following session variables are an alternative and take precedence over the file:

```powershell
$env:DJANGO_SECRET_KEY = 'your-long-random-secret'
$env:DJANGO_DEBUG = 'true'
$env:DJANGO_ALLOWED_HOSTS = '127.0.0.1,localhost'
$env:FRONTEND_URL = 'http://localhost:5173'
$env:MONGODB_URI = 'mongodb+srv://USER:PASSWORD@YOUR-CLUSTER.mongodb.net/?retryWrites=true&w=majority'
$env:MONGODB_DATABASE = 'annai_tuition'
```

After creating the MongoDB Atlas database user and allowing the development machine’s IP in Atlas, initialize and run the service:

```powershell
python manage.py makemigrations admissions contact
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver 127.0.0.1:8000
```

In a second terminal, start Vite. The included frontend `.env.example` uses `http://localhost:8000/api` so Django’s CSRF/session cookies stay on the same host as the frontend. Visit `http://localhost:5173`, `http://localhost:5173/admin` for the custom dashboard, or `http://localhost:8000/admin/` for Django admin.

## Service setup and verification limits

MongoDB credentials, IP access, SMTP credentials, a verified sender, centre notification email and a centre administrator account must be supplied by the owner. No credentials are included. The API returns `saved: true` only after a database write succeeds. Admission requests include an idempotency key so a retried browser request does not create another record or repeat its notification; a separate mail failure does not discard a saved application. Use `/api/health/` to check the live database connection. No MongoDB or SMTP service is configured in this workspace, so remote persistence and email delivery still need owner credentials and a real connection check.

The official MongoDB starter template migrations for Django auth, contenttypes and admin are included under `backend/mongo_migrations/`; the matching app configurations, router and migration mappings are enabled in `backend/config/settings.py`. Django MongoDB Backend supports Django admin/auth but has documented limits (for example, its transaction API requires a replica set or sharded cluster and does not support nested atomic blocks). This project does not rely on multi-document transactions.

No fees, opening hours, notification email, SMTP details, administrator account, course subjects or class availability have been invented. Results where the source omits a denominator display marks without a denominator.

## Poster details to confirm

The supplied master prompt says the centre began in 2008; the supplied logo says “Since 2009.” To avoid publishing conflicting history, the site omits an establishment year. The Results page uses three standalone student portraits and typed marks; it does not display the posters.

## Images

`public/images/` contains the centre logo and three portrait crops from the supplied student-results poster.

The `backend/mongo_migrations/` files for built-in Django apps are copied from MongoDB's official 5.2 project template so Django auth/admin use MongoDB-compatible ObjectId fields.
