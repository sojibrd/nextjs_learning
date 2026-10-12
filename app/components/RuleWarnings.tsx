import Markdown from "./Markdown";
import { TriangleAlert } from "./icons";

/**
 * rule-এর Correct যেখানে Next.js 16-এর সাথে মেলে না — plan-এর `> **সতর্কতা:**`
 * লাইন থেকে। দিনের কার্ডে টিকের পরে, আর গাইডের পাতার ভাঁজের ভেতরে Correct-এর
 * ঠিক আগে; Correct খোলার আগে দেখালে উত্তরটাই বলে দেওয়া হয়।
 */
export default function RuleWarnings({ warnings, className = "" }: { warnings: string[]; className?: string }) {
  if (warnings.length === 0) return null;

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {warnings.map((warning) => (
        <div key={warning} className="callout callout--alert p-3">
          <div className="t-label mb-1 flex items-center gap-1.5">
            <TriangleAlert />
            <span>সতর্কতা · Next.js 16</span>
          </div>
          <Markdown inline className="t-body text-xs md:text-sm">
            {warning}
          </Markdown>
        </div>
      ))}
    </div>
  );
}
