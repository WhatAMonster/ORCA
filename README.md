# ORCA — A Vision to shape the modern education.

---

## 1. Overview

### About ORCA
**ORCA** is an academic platform built around a conviction: **intellectual challenges fuel the instinct to learn, develop, and dive deep.** 

In an era saturated with passive video feeds, algorithmic micro-content, and surface-level tutorials, students frequently suffer from cognitive fatigue and passive consumption. ORCA replaces passive knowledge consumption with active adventurous learning. By combining rigorous problem-solving across core disciplines(Subjects) with community collaboration and gamified progression, ORCA transforms learning into a sport of depth and mastery.

### Current Status: Prototype Phase
 ORCA is currently in **Prototype Phase**. 

The current codebase is a frontend only prototype however we have plugged in hooks for quick backend integration too.

### A Mapping of how we visualise ORCA

```
       ┌───────────────────────────────────────────────────┐
       │                   ORCA PLATFORM                   │
       │           "Learn.  Solve.  Discuss."              │
       └──────────────────────────┬────────────────────────┘
                                  │
         ┌────────────────────────┼─────────────────────────┐
         ▼                        ▼                         ▼
  ┌──────────────┐         ┌──────────────┐          ┌──────────────┐
  │    LEARN     │         │    SOLVE     │          │   DISCUSS    │
  │ Community pr-│         │ Timed arenas │          │ Persistent & │
  │ ovided lear- │ ──────► │ Multi-tier:  │ ───────► │ User-driven  │
  │ ning material│         │ Solo & Guild │          │  Communities │
  └──────────────┘         └──────────────┘          └──────────────┘
         ▲                                                  │
         └──────────────────────────────────────────────────┘
                 Peer Explanations, Knowledge Compounding
                  & an eagerness to Win over challenges.
```

---

## 2. Core Philosophy

### 2.1 The Learning Loop: Learn -► Solve -► Discuss
Traditional educational apps isolate learning from socialization or reduce social interaction to superficial message boards. ORCA unifies them into a tight triad:

1. **Learn**: Providing students with subject specific learning material, And incoporating communities into the learning process by enabling them to be the agents of knowledge - giving expert advices, methods, clearing concepts with video tutorials or holding live lectures.
2. **Solve**: Learners test their understanding through multi-tiered challenges—ranging from quick conceptual warm-ups to high-stakes, mind-bending puzzles. With AI assisted solutions to practice problems.
3. **Discuss**: Solutions, alternative derivations, and sticking points are brought directly into community rooms. Peer explanations solidify understanding for the explainer while demystifying concepts for the learner.

### 2.2 Feeling the Win: Gamifying small highs
Global leaderboards often demotivate learners: when a student is ranked `#29382810` something, their hard work feels invisible. ORCA's progression philosophy centers on **visible, tangible micro-wins** inspired from how *Minecraft's Achievements* work:

- **Neighbourhood & Slice Boards**: Rather than forcing everyone onto a single intimidating global board, learners are grouped into localized, winnable cohorts (by subject, tier, and community). Every active student should be within striking distance of topping a board within 7 days.
- **Dual-Track Progression (Open vs. Purist)**:
  - *Open Track*: Encourages curiosity and experimentation. Students can request progressive hints and AI guidance without harsh point penalties.
  - *Purist Track*: Tailored for high-stakes competition. No hints, strict timers, and unassisted solutions that feed prestigious crown standings.
- **Circulating Crowns**: Top honors reset weekly so that leaderboards don't stagnate.

---

## 3. Abstract System Topology & Server Architecture

Rather than hardcoding arbitrary chat rooms, ORCA adopts an **adaptive community topology** balanced between default discipline/subject wise servers and user-driven servers.

### 3.1 The 5 Persistent Core Commons
ORCA maintains **5 persistent subject servers** that exist permanently for everyone *(however the scope is beyond just 5 disciplines - with plans to include a diverse array of subjects and their Inter-disciplinary subjects.)*
They serve as global anchor communities for specific subjects.

### 3.2 User-Driven & On-Demand Community Nodes
Beyond the default servers ORCA’s social fabric is entirely **user-driven, and on-demand** where users can form their own communities to share their expertise, learn and discuss.
---

## 4. Collaborative Problem-Solving & Guild Mechanics

ORCA treats problem-solving not merely as an isolated test, but as a collaborative expedition.

### 4.1 Guild System
In collaborative team rounds, students get a chance to tackle larger and wide scope problems with their own guilds(teams).This keeps up the momentum of learning with shared experiences.

### 4.2 Valuing knowledge
In traditional chat applications, great explanations drown under message scroll and vanish within hours. ORCA solves this through **Threads**:
- Every question gets an anchor thread.
- User made explanations can be upvoted by community members.
- Solvers earn **"Reputation Badges"**, encouraging them to keep teaching and carrying the community momentum.

---

## 5. Safety, Privacy & Academic Integrity

Building a community for students demands uncompromising standards of safety, privacy, and fair play.


### 5.1 Student & Minor Safety: 
- **No Unsolicited Direct Messaging**: Direct peer interactions are confined to public server channels and established squad spaces. Unsolicited, private 1-on-1 messaging between unverified accounts is disabled by default to safeguard younger students, which would require an request/trust approval from both sides - but in-chat filters will remain.
- **Community Moderation & Reporting**: Guild and community leaders possess real-time moderation capabilities (muting, temporary time-outs, and report routing). Automated filters intercept toxic language, harassment, and inappropriate media.

### 5.2 Academic Integrity & Anti-Cheating
- **Server-Side Verification**: In production, all answer validation, time auditing, and point computation are conducted strictly server-side.
- **Dynamic Parameters**: Numerical challenges are modified per-user basis.
- **Integrity Tracking**: Students are audited against statistical anomalies, unassisted solve timings, and attempt patterns to ensure legitimate achievement.

### 5.3 Privacy & Data Sovereignty
- **Minimal Telemetry**: ORCA respects student attention and privacy. Onboarding requires only an optional display handle and avatar.
- **Friend Discovery via User Codes**: Friend requests can be initiated securely through 8-character rotating friend codes, eliminating the need to expose private email addresses or phone numbers.
- **Full Data Sovereignty**: Students retain unspoken control over their academic records, including on demand data removal.

---

## 6. Progression

ORCA also maintains a balance between persistent achievements and transistory achievemnets throuch ORCA COINS (OC)

- Orca Coins are permanent Coins attached to a students account that compound over their account life.
- These Orca Coins are saved in a dual manner with week's total and life-time total such that *efforts irrespective of time periods can be respected*.
---
## 7. Our Final Words

ORCA is more than a question bank or a study chatroom—it is an ecosystem crafted to revive genuine intellectual curiosity.ORCA creates a space where students do not merely prepare for tests; they learn to think deeply, solve curiously, and build lasting intellectual camaraderie.
