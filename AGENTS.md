# nextjs_learning — Agent Instructions

React আর Next.js-এর best practice-এর দিনভিত্তিক সাইট — ৭৬ দিন: ৭০ দিনে একটা করে rule, প্রতি ব্লকের শেষে একটা ⚑। chassis `emberjs_learning` থেকে (২০২৬-১০-১১); তিন repo-র পরিবার নয়, একটাই সাইট।

- **`guide/` = ৭০টা rule ফাইল**, `vercel-react-best-practices` skill-এর `rules/` থেকে হুবহু (ইংরেজি; লেখক আর লাইসেন্স `guide/README.md`-এ)। **সম্পাদনা নয়** — উৎস বদলালে নতুন কপি। route `/guide/<ফাইলনাম>/`; সেকশন `_sections.md` থেকে, ফাইলনামের প্রথম অংশ ধরে।
- **`docs/` = plan** — `00-rules.md` আর ৬টা ব্লক, ইন্টারভিউর ক্রমে: Re-render → Async → Rendering → Bundle → Server → JS আর advanced। উৎসের সেকশন ভাঙা হয়নি; সেকশনের ভেতরে উৎসের মতো title-এর বর্ণানুক্রম। দিনের নম্বর পরপর না হলে build ভাঙে; ফাইলে তারিখ নেই, "আজ" = ক্যালেন্ডারের তারিখ।
- কাজে `(rule · <ফাইলনাম>)` = `guide/`-এর rule; না মিললে **build ভাঙে** — ইচ্ছাকৃত। দিনের শিরোনাম আর কাজের `**…**` = rule-এর `title` হুবহু।
- **দুই ধরনের rule** (`app/lib/guide.ts`-এর `kind`): `fix` — ৬৪টা, কার্ডে `**Incorrect …**` label থেকে তার প্রথম code block পর্যন্ত; `example` — ৬টা, Incorrect নেই, কার্ডে প্রথম label বা code block-এর আগের বর্ণনা আর কাজ একটা উদাহরণ লেখা। বাকিটা কার্ডে পাঠানো হয় না; টিকের পরে `/guide/<slug>/`-এর লিংক আসে, আর ঐ পাতার ভাঁজ টিক থাকলে নিজে খোলে (`RuleReveal`)। হোমে সব দিনের ডেটা যায় — পুরো rule কার্ডে তুললে হোম ভারী হবে।
- **`emberjs_learning`-এর কোড এক নয়** — `kind`-এর জন্য `guide.ts`, `TaskItem`, `RuleReveal` আর `guide/[slug]/page.tsx` আলাদা। এক সাইটের বদল অন্যটায় অন্ধভাবে কপি করবেন না।
- কাজ শুধু rule-এর লেখা থেকে — React বা Next.js নিয়ে নতুন rule নয়। একটাই সংযোজন: **Next.js 16-এর সাথে চারটা অমিল**, উৎসসহ, `docs/00-rules.md`-এ (২০২৬-১০-১১-এ মেলানো শুধু `next/…` ধরা rule-গুলো)। Next-এর version বদলালে বা `guide/` নতুন করে কপি হলে ঐ তালিকা আবার মেলান — ডক `node_modules/next/dist/docs/`-এ।
- ⚑ দিনের প্রশ্নের উৎস `docs/00-rules.md`-এর "সত্যের উৎস"-এ — `brainstorming/application-to-offer.md` আর `switch_in_6_month_local_company/docs/05-technical.md`।
- **নোটের ঘর আর `note` key নেই** — "নিজের কোন সাইটে এটা আছে"-র উত্তর ব্যবহারকারীর খাতায়। **Sandbox-ও নেই** — rule চালানোর আলাদা প্রজেক্ট বানাবেন না, ব্যবহারকারী না বললে।
- **সময় ⏳** — দিনের ১০′ সপ্তাহে ৭ ঘণ্টার ভেতরে না বাইরে, আর `emberjs_learning`-এর সাথে একসাথে না পরপর — ব্যবহারকারীর উত্তর বাকি। `suggestedStart` তাই `null`; কোনো plan-এর ঘর থেকে সময় কাটবেন না।
- 🧠 নাম → `app/lib/principles.ts`, `learning_to_learn`-এর ঐ ফাইলের কপি (৫৭টা বিষয়; এক লাইন = ব্যাখ্যার প্রথম বাক্য), লিংক ঐ সাইটের লাইভ Pages-এ। ওখানে বদলালে এখানেও।
- Progress চার key (`nextjs:v1:start`, `task`, `check`, `review`) — একমাত্র `app/hooks/useProgress.ts` দিয়ে; পঞ্চম key `nextjs:v1:meta` শুধু sync-এর timestamp। কাজের লেখা বদলালে ঐ কাজের টিক হারায় (id = দিন + লেখার hash)।
- **Cross-device sync** — বাকি সাইটের মতোই: `app/lib/supabase.ts`, `app/hooks/useSync(Key).ts`, `app/components/SyncSettings.tsx`, `app/sync/page.tsx` chassis থেকে হুবহু, নিজে থেকে বদলাবেন না। `site_prefix` = `SITE.storagePrefix` = `nextjs`। `deploy.yml`-এর env নাম `NEXT_PUBLIC_SUPABASE_*` — বদলালে sync চুপচাপ মরে যাবে। **এখনো deploy হয়নি** (২০২৬-১০-১১)।
- `app/lib/plan.ts` আর `app/lib/guide.ts` server-only।
- **Theme contract অলঙ্ঘনীয়**, সাইট **dark-only**। code block-এ syntax highlighting নেই — chassis-এর `.doc-prose pre`।

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
