/**
 * সাইটের পরিচয় — plan-এর কনটেন্ট নয়, তাই `docs/`-এ নয়, এখানে।
 *
 * chassis `emberjs_learning` থেকে; এই সাইট একটাই পথ, তিন repo-র পরিবার নয়।
 */
export const SITE: {
  title: string;
  short: string;
  emoji: string;
  description: string;
  storagePrefix: string;
  suggestedStart: string | null;
} = {
  title: "Next.js — কীভাবে থেকে কেন",
  short: "nextjs learning",
  emoji: "▲",
  description:
    "React আর Next.js-এর ৭০টা best practice — দিনে একটা, ১০′: Incorrect কোড দেখে না দেখে ঠিকটা লেখা আর কেন ইংরেজিতে বলা, ঝালাইসহ।",
  /** localStorage key-এর prefix */
  storagePrefix: "nextjs",
  /** শুরুর তারিখের প্রস্তাব নেই — কখন বসবেন ⏳ */
  suggestedStart: null,
};
