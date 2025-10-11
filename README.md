This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Scheduled jobs (Inngest cron)

This project uses Inngest to run background jobs. Some functions are triggered on a schedule using a cron expression.

- Example: `"0 12 * * *"` runs every day at 12:00 UTC.
- Cron format: `minute hour day-of-month month day-of-week`.
- Timezone: Inngest evaluates cron in UTC by default unless a different timezone is configured in Inngest.

Common examples:
- `0 9 * * *` → 09:00 UTC daily
- `0 8 * * 1-5` → 08:00 UTC Monday–Friday
- `30 23 * * *` → 23:30 UTC daily

Notes:
- Local run times vary by your timezone and DST (daylight saving) changes. Treat the schedule as UTC and convert to your local time accordingly.
- You can validate/experiment with cron expressions at https://crontab.guru/.

To change the send time for the daily news summary, edit the cron string in `lib\ingest\functions.ts` where `sendDailyNewsSummary` is declared.
