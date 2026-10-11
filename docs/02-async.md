# ব্লক ২ — Async

*দিন ০১৭–০২৭ · async · client*

উৎসের সেকশন ১ (*Eliminating Waterfalls*) আর ৪ (*Client-Side Data Fetching*) — ১০টা rule, দিনে একটা; শেষ দিনে ⚑। await-এর ক্রম, পাশাপাশি চালানো আর Suspense; তারপর client-এ data আনা আর event listener। ⚑-এর প্রশ্নটা ইন্টারভিউ-বিষয়গুলোর তৃতীয়টা — async কাজে `useEffect`; এই ব্লকের rule তার একটা অংশ ছোঁয়, বাকিটা আপনার নিজের উত্তর। 🧠 (Concepts vs Facts)

> **ব্লক শেষে:** ১০টা rule-এর প্রতিটায় না দেখে লেখা আর "কেন" ইংরেজিতে বলা হয়েছে, আর ⚑-এর উত্তর ২ মিনিটে মুখে এসেছে?

### দিন ০১৭ · Check Cheap Conditions Before Async Flags

- [ ] ১০′ **Check Cheap Conditions Before Async Flags** — নিচের Incorrect কোড পড়ে, না দেখে ঠিক সংস্করণটা লিখুন; তারপর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন, আর খাতায় এক লাইন: নিজের কোন সাইটে এটা আছে, বা নেই (rule · async-cheap-condition-before-await) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** না দেখে ঠিকটা লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০১৮ · Defer Await Until Needed

- [ ] ১০′ **Defer Await Until Needed** — নিচের Incorrect কোড পড়ে, না দেখে ঠিক সংস্করণটা লিখুন; তারপর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন, আর খাতায় এক লাইন: নিজের কোন সাইটে এটা আছে, বা নেই (rule · async-defer-await) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** না দেখে ঠিকটা লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০১৯ · Dependency-Based Parallelization

- [ ] ১০′ **Dependency-Based Parallelization** — নিচের Incorrect কোড পড়ে, না দেখে ঠিক সংস্করণটা লিখুন; তারপর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন, আর খাতায় এক লাইন: নিজের কোন সাইটে এটা আছে, বা নেই (rule · async-dependencies) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** না দেখে ঠিকটা লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০২০ · Prevent Waterfall Chains in API Routes

- [ ] ১০′ **Prevent Waterfall Chains in API Routes** — নিচের Incorrect কোড পড়ে, না দেখে ঠিক সংস্করণটা লিখুন; তারপর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন, আর খাতায় এক লাইন: নিজের কোন সাইটে এটা আছে, বা নেই (rule · async-api-routes) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** না দেখে ঠিকটা লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০২১ · Promise.all() for Independent Operations

- [ ] ১০′ **Promise.all() for Independent Operations** — নিচের Incorrect কোড পড়ে, না দেখে ঠিক সংস্করণটা লিখুন; তারপর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন, আর খাতায় এক লাইন: নিজের কোন সাইটে এটা আছে, বা নেই (rule · async-parallel) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** না দেখে ঠিকটা লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০২২ · Strategic Suspense Boundaries

- [ ] ১০′ **Strategic Suspense Boundaries** — নিচের Incorrect কোড পড়ে, না দেখে ঠিক সংস্করণটা লিখুন; তারপর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন, আর খাতায় এক লাইন: নিজের কোন সাইটে এটা আছে, বা নেই (rule · async-suspense-boundaries) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** না দেখে ঠিকটা লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০২৩ · Deduplicate Global Event Listeners

- [ ] ১০′ **Deduplicate Global Event Listeners** — নিচের Incorrect কোড পড়ে, না দেখে ঠিক সংস্করণটা লিখুন; তারপর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন, আর খাতায় এক লাইন: নিজের কোন সাইটে এটা আছে, বা নেই (rule · client-event-listeners) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** না দেখে ঠিকটা লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০২৪ · Use Passive Event Listeners for Scrolling Performance

- [ ] ১০′ **Use Passive Event Listeners for Scrolling Performance** — নিচের Incorrect কোড পড়ে, না দেখে ঠিক সংস্করণটা লিখুন; তারপর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন, আর খাতায় এক লাইন: নিজের কোন সাইটে এটা আছে, বা নেই (rule · client-passive-event-listeners) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** না দেখে ঠিকটা লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০২৫ · Use SWR for Automatic Deduplication

- [ ] ১০′ **Use SWR for Automatic Deduplication** — নিচের Incorrect কোড পড়ে, না দেখে ঠিক সংস্করণটা লিখুন; তারপর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন, আর খাতায় এক লাইন: নিজের কোন সাইটে এটা আছে, বা নেই (rule · client-swr-dedup) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** না দেখে ঠিকটা লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০২৬ · Version and Minimize localStorage Data

- [ ] ১০′ **Version and Minimize localStorage Data** — নিচের Incorrect কোড পড়ে, না দেখে ঠিক সংস্করণটা লিখুন; তারপর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন, আর খাতায় এক লাইন: নিজের কোন সাইটে এটা আছে, বা নেই (rule · client-localstorage-schema) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** না দেখে ঠিকটা লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০২৭ · মুখে — useEffect-এ async

- [ ] ১০′ ⚑ **useEffect-এ async কাজ — দুবার fetch, বাসি data, unmount-এর পরে setState** — প্রতিটা কীভাবে ঠেকান, গাইড না খুলে, ইংরেজিতে ২ মিনিটে জোরে বলুন 🔁 🧠 (Feynman technique · Trunk based knowledge)

> **দিন শেষে:** ২ মিনিটে, গাইড না খুলে, ইংরেজিতে বলা হয়েছে?
