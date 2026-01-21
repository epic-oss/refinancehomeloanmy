# Yearly Update Checklist for RefinanceHomeLoanMY

## When to Update
- **Quarterly (Jan, Apr, Jul, Oct)**: Bank rates, lastUpdated date
- **Annually (January)**: Costs, eligibility criteria, full review
- **As Needed**: When banks announce rate changes

---

## Quarterly Update (15 mins)

### 1. Update src/lib/constants.ts

#### lastUpdated
```typescript
lastUpdated: "Januari 2026",  // Change to current month/year
lastUpdatedEn: "January 2026",
```

#### Bank Rates
Check each bank's website and update rateFrom for:
- [ ] Maybank: https://www.maybank2u.com.my
- [ ] CIMB: https://www.cimb.com.my
- [ ] Public Bank: https://www.publicbank.com.my
- [ ] RHB: https://www.rhb.com.my
- [ ] Hong Leong: https://www.hlb.com.my
- [ ] AmBank: https://www.ambank.com.my
- [ ] Bank Islam: https://www.bankislam.com.my
- [ ] BSN: https://www.bsn.com.my
- [ ] OCBC: https://www.ocbc.com.my
- [ ] Alliance Bank: https://www.alliancebank.com.my

### 2. Verify Changes
```bash
npm run build
npm run dev
```
- [ ] Check homepage shows new date
- [ ] Check BankRatesTable shows updated rates
- [ ] Spot check 3 random pages

### 3. Deploy
```bash
git add .
git commit -m "Update rates: [Month Year]"
git push
```

---

## Annual Update (2 hours)

### 1. All Quarterly Tasks Above

### 2. Update Costs (src/lib/constants.ts)
```typescript
costs: {
  legalFeesText: "RM2,000 - RM5,000",  // Verify with lawyers
  valuationFeesText: "RM300 - RM1,000", // Verify with valuers
  stampDutyRate: 0.5,                   // Check if rate changed
  // etc.
}
```

### 3. Update Eligibility
```typescript
eligibility: {
  minAge: 21,      // Check BNM guidelines
  maxAge: 65,      // Check BNM guidelines
  minIncome: 3000, // Check if changed
  maxDSR: 70,      // Check BNM guidelines
}
```

### 4. Review Content
- [ ] Check all FAQ answers still accurate
- [ ] Update any outdated screenshots
- [ ] Review and update process steps if changed
- [ ] Check all external links still work

### 5. SEO Review
- [ ] Check Search Console for new keyword opportunities
- [ ] Update meta descriptions if needed
- [ ] Review top 10 pages performance

---

## Emergency Update (Rate Change Announcement)

When a bank announces rate change:

1. Update only that bank in src/lib/constants.ts
2. Update lastUpdated date
3. Deploy immediately
4. Post on social media (if any)

---

## Files to Update

| What | File | Frequency |
|------|------|-----------|
| Bank rates | src/lib/constants.ts | Quarterly |
| Last updated date | src/lib/constants.ts | Quarterly |
| Costs | src/lib/constants.ts | Annually |
| Eligibility | src/lib/constants.ts | Annually |
| Content | /content/*.md | As needed |

---

## Post-Update Verification

After every update:
1. [ ] `npm run build` passes
2. [ ] Homepage loads correctly
3. [ ] Calculator works
4. [ ] BankRatesTable shows new data
5. [ ] Mobile view works
6. [ ] Lead form submits successfully

---

## Data Sources

- BNM Base Rate: https://www.bnm.gov.my
- Individual bank websites (listed above)
- iMoney: https://www.imoney.my (for comparison)
- RinggitPlus: https://ringgitplus.com (for comparison)

---

Last checklist update: January 2026
