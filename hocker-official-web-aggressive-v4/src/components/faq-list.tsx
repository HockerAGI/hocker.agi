import { FAQS } from "@/lib/site-data";

export function FaqList() {
  return (
    <div className="card faq">
      {FAQS.map((faq) => (
        <details key={faq.q}>
          <summary>{faq.q}</summary>
          <p>{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
