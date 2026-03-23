# shipledger

Onchain shipping proof layer for solo builders on Base.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Blockchain:** Base (L2 on Ethereum)
- **Package Manager:** npm

## Project Structure

```
app/           # Next.js App Router pages and layouts
public/        # Static assets
next.config.ts # Next.js configuration
```

## Development

The app runs on port 5000 via `npm run dev`.

## Deployment

- Target: autoscale
- Build: `npm run build`
- Run: `npm start` (Next.js production server on port 5000)
