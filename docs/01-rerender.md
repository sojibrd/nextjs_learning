# ব্লক ১ — Re-render

*দিন ০০১–০১৬ · rerender*

উৎসের সেকশন ৫ (*Re-render Optimization*) — ১৫টা rule, দিনে একটা; শেষ দিনে ⚑। State, effect আর memo — কখন component আবার render হয়, আর কখন হওয়ার দরকার নেই। `brainstorming/application-to-offer.md`-এর ইন্টারভিউ-বিষয়গুলোর প্রথমটা — Ember-এর autotracking বনাম React-এর re-render — React-এর দিক থেকে এই ব্লকের, তাই এটা সবার আগে। 🧠 (Trunk based knowledge)

> **ব্লক শেষে:** ১৫টা rule-এর প্রতিটায় না দেখে লেখা আর "কেন" ইংরেজিতে বলা হয়েছে, আর ⚑-এর উত্তর ২ মিনিটে মুখে এসেছে?

### দিন ০০১ · Calculate Derived State During Rendering

- [ ] ১০′ **Calculate Derived State During Rendering** — নিচের Incorrect কোড পড়ে, না দেখে ঠিক সংস্করণটা লিখুন; তারপর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন, আর খাতায় এক লাইন: নিজের কোন সাইটে এটা আছে, বা নেই (rule · rerender-derived-state-no-effect) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** না দেখে ঠিকটা লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০০২ · Defer State Reads to Usage Point

- [ ] ১০′ **Defer State Reads to Usage Point** — নিচের Incorrect কোড পড়ে, না দেখে ঠিক সংস্করণটা লিখুন; তারপর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন, আর খাতায় এক লাইন: নিজের কোন সাইটে এটা আছে, বা নেই (rule · rerender-defer-reads) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** না দেখে ঠিকটা লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০০৩ · Do not wrap a simple expression with a primitive result type in useMemo

- [ ] ১০′ **Do not wrap a simple expression with a primitive result type in useMemo** — নিচের Incorrect কোড পড়ে, না দেখে ঠিক সংস্করণটা লিখুন; তারপর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন, আর খাতায় এক লাইন: নিজের কোন সাইটে এটা আছে, বা নেই (rule · rerender-simple-expression-in-memo) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** না দেখে ঠিকটা লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০০৪ · Don't Define Components Inside Components

- [ ] ১০′ **Don't Define Components Inside Components** — নিচের Incorrect কোড পড়ে, না দেখে ঠিক সংস্করণটা লিখুন; তারপর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন, আর খাতায় এক লাইন: নিজের কোন সাইটে এটা আছে, বা নেই (rule · rerender-no-inline-components) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** না দেখে ঠিকটা লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০০৫ · Extract Default Non-primitive Parameter Value from Memoized Component to Constant

- [ ] ১০′ **Extract Default Non-primitive Parameter Value from Memoized Component to Constant** — নিচের Incorrect কোড পড়ে, না দেখে ঠিক সংস্করণটা লিখুন; তারপর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন, আর খাতায় এক লাইন: নিজের কোন সাইটে এটা আছে, বা নেই (rule · rerender-memo-with-default-value) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** না দেখে ঠিকটা লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০০৬ · Extract to Memoized Components

- [ ] ১০′ **Extract to Memoized Components** — নিচের Incorrect কোড পড়ে, না দেখে ঠিক সংস্করণটা লিখুন; তারপর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন, আর খাতায় এক লাইন: নিজের কোন সাইটে এটা আছে, বা নেই (rule · rerender-memo) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** না দেখে ঠিকটা লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০০৭ · Narrow Effect Dependencies

- [ ] ১০′ **Narrow Effect Dependencies** — নিচের Incorrect কোড পড়ে, না দেখে ঠিক সংস্করণটা লিখুন; তারপর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন, আর খাতায় এক লাইন: নিজের কোন সাইটে এটা আছে, বা নেই (rule · rerender-dependencies) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** না দেখে ঠিকটা লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০০৮ · Put Interaction Logic in Event Handlers

- [ ] ১০′ **Put Interaction Logic in Event Handlers** — নিচের Incorrect কোড পড়ে, না দেখে ঠিক সংস্করণটা লিখুন; তারপর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন, আর খাতায় এক লাইন: নিজের কোন সাইটে এটা আছে, বা নেই (rule · rerender-move-effect-to-event) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** না দেখে ঠিকটা লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০০৯ · Split Combined Hook Computations

- [ ] ১০′ **Split Combined Hook Computations** — নিচের Incorrect কোড পড়ে, না দেখে ঠিক সংস্করণটা লিখুন; তারপর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন, আর খাতায় এক লাইন: নিজের কোন সাইটে এটা আছে, বা নেই (rule · rerender-split-combined-hooks) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** না দেখে ঠিকটা লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০১০ · Subscribe to Derived State

- [ ] ১০′ **Subscribe to Derived State** — নিচের Incorrect কোড পড়ে, না দেখে ঠিক সংস্করণটা লিখুন; তারপর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন, আর খাতায় এক লাইন: নিজের কোন সাইটে এটা আছে, বা নেই (rule · rerender-derived-state) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** না দেখে ঠিকটা লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০১১ · Use Functional setState Updates

- [ ] ১০′ **Use Functional setState Updates** — নিচের Incorrect কোড পড়ে, না দেখে ঠিক সংস্করণটা লিখুন; তারপর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন, আর খাতায় এক লাইন: নিজের কোন সাইটে এটা আছে, বা নেই (rule · rerender-functional-setstate) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** না দেখে ঠিকটা লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০১২ · Use Lazy State Initialization

- [ ] ১০′ **Use Lazy State Initialization** — নিচের Incorrect কোড পড়ে, না দেখে ঠিক সংস্করণটা লিখুন; তারপর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন, আর খাতায় এক লাইন: নিজের কোন সাইটে এটা আছে, বা নেই (rule · rerender-lazy-state-init) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** না দেখে ঠিকটা লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০১৩ · Use Transitions for Non-Urgent Updates

- [ ] ১০′ **Use Transitions for Non-Urgent Updates** — নিচের Incorrect কোড পড়ে, না দেখে ঠিক সংস্করণটা লিখুন; তারপর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন, আর খাতায় এক লাইন: নিজের কোন সাইটে এটা আছে, বা নেই (rule · rerender-transitions) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** না দেখে ঠিকটা লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০১৪ · Use useDeferredValue for Expensive Derived Renders

- [ ] ১০′ **Use useDeferredValue for Expensive Derived Renders** — নিচের Incorrect কোড পড়ে, না দেখে ঠিক সংস্করণটা লিখুন; তারপর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন, আর খাতায় এক লাইন: নিজের কোন সাইটে এটা আছে, বা নেই (rule · rerender-use-deferred-value) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** না দেখে ঠিকটা লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০১৫ · Use useRef for Transient Values

- [ ] ১০′ **Use useRef for Transient Values** — নিচের Incorrect কোড পড়ে, না দেখে ঠিক সংস্করণটা লিখুন; তারপর "কেন" ইংরেজিতে ২–৩ বাক্যে জোরে বলুন, আর খাতায় এক লাইন: নিজের কোন সাইটে এটা আছে, বা নেই (rule · rerender-use-ref-transient-values) 🔁 🧠 (Test yourself · Feynman technique)

> **দিন শেষে:** না দেখে ঠিকটা লেখা, আর "কেন" ইংরেজিতে জোরে বলা হয়েছে?

### দিন ০১৬ · মুখে — re-render বনাম autotracking

- [ ] ১০′ ⚑ **React-এর re-render আর Ember-এর autotracking কীভাবে আলাদা** — গাইড না খুলে, ইংরেজিতে ২ মিনিটে জোরে বলুন, এই ব্লকের rule থেকে অন্তত দুটো উদাহরণ টেনে; যেখানে আটকালেন সেই rule-এর পাতায় ফিরে গিয়ে আবার 🔁 🧠 (Feynman technique · Trunk based knowledge)

> **দিন শেষে:** ২ মিনিটে, গাইড না খুলে, ইংরেজিতে বলা হয়েছে?
