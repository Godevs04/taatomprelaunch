# 🚀 Taatom Prelaunch to Production Migration Plan

**Purpose**: Smooth transition from prelaunch user system to production authentication  
**Timeline**: Pre-launch week to Launch + 7 days  
**Status**: Planning Phase

---

## 📋 Table of Contents

1. [Phase 1 - Database Transition Setup](#phase-1)
2. [Phase 2 - Early Access Authentication Strategy](#phase-2)
3. [Phase 3 - Communication & Email Campaign](#phase-3)
4. [Phase 4 - Brand & Launch Alignment](#phase-4)
5. [Phase 5 - Backup, Analytics & Reporting](#phase-5)
6. [Phase 6 - Post-Launch Cleanup](#phase-6)
7. [Execution Checklist](#execution-checklist)

---

## 🧩 Phase 1 — Database Transition Setup

### Current State
- **Prelaunch DB**: `taatompreusers.prelaunch_users`
- **Production DB**: `taatom.users` (to be created)
- **Users**: Pre-registered signups with name, email, hashed password

### Goal
Consolidate all early signups into the main system while keeping track of early members.

### Schema Alignment

**Unified User Schema**:
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  joinedAt: Date,
  isEarlyMember: Boolean,  // NEW: tracks prelaunch users
  passwordSetAt: Date,      // NEW: when they set their password
  lastLogin: Date,          // NEW: track engagement
  accountStatus: String     // NEW: 'pending', 'active', 'inactive'
}
```

### Migration Script Structure

**File**: `scripts/migrateUsers.ts`

The migration script will:
1. Connect to both databases
2. Fetch all prelaunch users
3. Create production users with `isEarlyMember: true`
4. Generate migration report
5. Handle errors gracefully

### Migration Execution

**Timing**: T-7 days (1 week before launch)  
**Approach**: Controlled, monitored, with rollback capability  
**Validation**: Pre-flight checks, dry-run, then production migration

---

## 🔐 Phase 2 — Early Access Authentication Strategy

### Option A: Magic Link Flow (Recommended) ⭐

**Implementation**:

1. **Generate Unique Token**
   - JWT token with user email and expiry (15 minutes)
   - Store in database with `tokenUsed: false`

2. **Email Magic Link**
   - Send email on launch day
   - Link format: `https://taatom.app/activate?token=XXX`

3. **Token Verification Route**
   - Verify token and expiry
   - Log user in automatically
   - Redirect to password setup page

**Benefits**:
- ✅ Seamless UX
- ✅ Secure (single-use, time-limited)
- ✅ Professional appearance

### Option B: Temporary Password Flow

**Implementation**:

1. **Generate Temporary Passwords**
   - Random 12-character password per user
   - Store as plain text (temporary only)

2. **Welcome Email**
   - Include temporary password
   - Prompt to change password on first login

**Benefits**:
- ✅ Simple implementation
- ✅ No token management
- ⚠️ Requires password change

### Implementation Priority

**Week 1-2**: Implement Option A (Magic Link)  
**Backup**: Keep Option B as fallback

---

## 💌 Phase 3 — Communication & Email Campaign

### Email Schedule

| Timing | Subject | Focus | Trigger |
|--------|---------|-------|---------|
| **T-3 Days** | "Taatom launches soon 🌍" | Sneak peek, countdown | Manual send |
| **Launch Day** | "We're Live! Your Early Access Awaits 🚀" | Magic link + login | Automated |
| **T+7 Days** | "Your First Adventure Awaits" | Engagement & feedback | Automated |

### Email Templates Location

```
lib/emails/
├── launch-reminder-3days.html
├── launch-day-magic-link.html
└── post-launch-engagement.html
```

### Brand Guidelines

**Tone**: Warm, adventure-focused, community-driven  
**Signature**: "Travel Anywhere And Take Only Memories — Team Taatom"  
**Color Palette**: Deep Blue (#0A2342), Sky Teal (#00B7C2), Warm Sand (#F4EBD0)  
**Emoji Usage**: Light and purposeful (🌍 ✨ 🚀)

---

## 🧭 Phase 4 — Brand & Launch Alignment

### Website Changes

**Pre-Launch → Post-Launch**:

| Element | Before | After |
|---------|--------|-------|
| Hero CTA | "Join Early Access" | "Download App" |
| Countdown | Active timer | "We're Live!" badge |
| Navigation | Signup only | Login + Signup |
| Footer | Email signup | App download links |

### Mobile App Features

- **Early Explorer Badge** for prelaunch users
- **Launch Rewards** (free features, bonus points)
- **Referral System** for early users
- **Welcome Onboarding** with special intro for early members

---

## 🧠 Phase 5 — Backup, Analytics & Reporting

### Pre-Migration Checklist

- [ ] Create MongoDB Atlas snapshot of `prelaunch_users`
- [ ] Export CSV of all prelaunch users
- [ ] Document current user count
- [ ] Test migration script on staging environment

### Post-Migration Monitoring

| Metric | Tool | Frequency | Owner |
|--------|------|-----------|-------|
| User migration count | Internal dashboard | One-time | DevOps |
| Login success rate | Firebase Analytics | Daily (week 1) | QA |
| Email open rates | Email provider | Daily (week 1) | Marketing |
| Magic link click rate | Analytics | Daily (week 1) | Product |

---

## 🧾 Phase 6 — Post-Launch Cleanup

### Week 1 Post-Launch

- [ ] Archive `prelaunch_users` collection (read-only)
- [ ] Redirect prelaunch subdomain → main domain
- [ ] Update environment variables to production
- [ ] Deactivate prelaunch email templates
- [ ] Archive prelaunch codebase

### Documentation

- [ ] Create "Prelaunch Migration Summary" report
- [ ] Document any issues encountered
- [ ] Update team wiki with production setup
- [ ] Celebrate with launch day announcement 🎉

---

## 📋 Execution Checklist

### Pre-Launch (T-7 Days)

- [ ] **T-7**: Run database migration script
- [ ] **T-6**: Verify all users migrated successfully
- [ ] **T-5**: Set up production authentication system
- [ ] **T-4**: Test magic link flow end-to-end
- [ ] **T-3**: Send "Launching Soon" email campaign
- [ ] **T-2**: Final testing and QA pass
- [ ] **T-1**: Final backup and rollback plan ready

### Launch Day (T-0)

- [ ] **T-0 Hour**: Deploy production changes
- [ ] **T-0 + 1hr**: Send "We're Live" email with magic links
- [ ] **T-0 + 6hr**: Monitor login success rate
- [ ] **T-0 + 12hr**: Send follow-up engagement email to non-active users
- [ ] **T-0 + 24hr**: Generate day-one analytics report

### Post-Launch (T+1 to T+7)

- [ ] **T+3**: Send engagement email to early users
- [ ] **T+7**: Send feedback request email
- [ ] **T+7**: Complete post-launch cleanup tasks
- [ ] **T+7**: Generate final migration report

---

## 💼 Success Metrics

### Key Performance Indicators

1. **Migration Success Rate**: >99% of prelaunch users migrated
2. **Login Success Rate**: >80% of magic links clicked within 24hr
3. **Active Users (Day 7)**: >60% of migrated users active
4. **Email Open Rate**: >40% for launch emails
5. **Zero Data Loss**: 100% data integrity during migration

### Business Impact

- ✅ **User Retention**: Convert prelaunch interest into active users
- ✅ **Faster Adoption**: Eliminate signup friction
- ✅ **Brand Loyalty**: Reward early supporters
- ✅ **Professional Transition**: Demonstrate mature planning
- ✅ **Data Continuity**: Unified analytics from day one

---

## 🎯 Next Steps

1. **Review**: Team review of this migration plan
2. **Approve**: Get stakeholder sign-off
3. **Implement**: Begin Phase 1 database setup
4. **Test**: Run dry-run migration in staging
5. **Execute**: Proceed with full migration

---

**Last Updated**: 2025-01-27  
**Owner**: Development Team  
**Status**: Planning → Implementation Ready
