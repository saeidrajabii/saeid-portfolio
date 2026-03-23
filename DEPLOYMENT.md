# Deploying `saeid-portfolio` to Vercel

## 1) Authenticate Vercel CLI
From project root:

```bash
npx vercel login
```

This opens an authentication flow in your browser.

## 2) First deploy (production)

```bash
npx vercel --prod --yes
```

After success, Vercel prints your production URL.

## 3) Subsequent production updates

```bash
npx vercel --prod --yes
```

## 4) Optional: link to a specific Vercel project

```bash
npx vercel link
```

Then deploy as usual.
