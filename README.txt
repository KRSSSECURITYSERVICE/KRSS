KRSS MANAGEMENT WEBSITE — UPDATED PACKAGE

WHAT IS INCLUDED
- KRSS public website and service/job pages.
- Existing job applications, service enquiries, vacancy management and salary ledger.
- Existing protected owner/guard attendance pages and Chatworks.
- CEO Management Dashboard label; CEO is accepted as an alias for the same primary administrator password as Amit Tiwari.
- Protected CSV export for job applications and service enquiries: /api/admin/report.csv
- Protected JSON data backup download: /api/admin/backup
- Atomic local JSON writes to reduce risk of a partially written data file.
- Fixed Guard Attendance JavaScript: payment-history loading is now asynchronous and no longer uses invalid top-level await.
- Admin sessions now enforce their expiry when checking authorization.
- No built-in default admin password: login remains disabled until you configure ADMIN_PASSWORD_HASH.

SETUP
1. Use Node.js 18 or newer.
2. Run `npm start`.
3. Generate a strong unique password hash: `node scripts/hash-password.js`
4. Copy the printed ADMIN_PASSWORD_HASH value into your hosting provider's environment variables.
5. Restart/redeploy the service.
6. Open /admin. Use owner name `CEO` or `Amit Tiwari` with that configured password.
7. Set a persistent writable storage location for the `private` folder, and schedule off-site backups.

IMPORTANT DEPLOYMENT LIMITATIONS — READ BEFORE PUBLIC LAUNCH
- This package still uses a local JSON file as its data store and in-memory login sessions. A hosting restart can end sessions; ephemeral hosting storage can lose records. Use a managed persistent database and durable file/object storage before relying on this for live staff/payroll operations.
- CEO and Amit Tiwari are aliases for the same administrator credential. This update does NOT implement separate CEO/Owner/HR/Finance/Field Officer/Guard user accounts or per-role permission boundaries.
- Guard attendance is still administered from the protected management page; self-service guard phone/password login and OTP are not implemented.
- Salary ledger is a basic record list, not a statutory payroll engine or downloadable payslip system.
- CSV export includes application and service enquiry records; it does not replace accounting or payroll reports.
- Chatworks remains a trial implementation. Review moderation, file scanning, retention, backups and production database/object storage before launch.
- HTTPS, environment secrets, database, backups, privacy notice, terms, consent, employment documents, and applicable legal/licensing review must be completed before production.
- Do not put passwords, API keys, applicant documents or private data into GitHub.

This is an improved starter package, not a certified secure or production-ready HR/security operations platform.
