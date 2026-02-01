export interface Article {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    category: string;
    image: string;
}

export const articles: Article[] = [
    {
        slug: 'consumer-protection-opt-out-2025',
        title: 'New Consumer Protection Rules: The 2025 Direct Marketing Opt-Out Registry',
        excerpt: 'The NCC is establishing a strict new opt-out registry for direct marketing. Discover how this protects your privacy and what it means for businesses.',
        content: `
            <p><strong>October 2025 Update:</strong> The National Consumer Commission (NCC) has introduced draft amendments to the Consumer Protection Act (CPA) regulations that will significantly change the landscape of direct marketing in South Africa.</p> 

            <h3>The New Opt-Out Registry</h3>
            <p>For years, consumers have been frustrated by unsolicited calls and messages. The new regulations establish a centralized <strong>Opt-Out Registry</strong>. Once a consumer registers their number, it is illegal for *any* direct marketer to contact them.</p>

            <h3>Obligations for Businesses</h3>
            <p>Direct marketers are now required to register with the NCC annually. More importantly, they must "cleanse" their databases against the Opt-Out Registry every month. Failure to do so can result in substantial fines and enforcement action.</p>

            <h3>What This Means for You</h3>
            <p>This is a major victory for consumer privacy. If you are tired of spam calls, you will soon have a powerful, legally enforceable tool to stop them. At Legal Wellness, we can guide you on how to register and how to lodge complaints against non-compliant companies.</p>
        `,
        date: 'February 1, 2026',
        author: 'Ilse Marlow',
        category: 'Consumer Law',
        image: '/assets/news/consumer.png'
    },
    {
        slug: 'wills-estates-amendment-bill',
        title: 'Game Changer for Spouses: The General Laws (Family Matters) Amendment Bill',
        excerpt: 'New legislation seeks to allow asset redistribution for spouses married out of community of property upon death, correcting historical unfairness.',
        content: `
            <p>A landmark bill anticipated for 2025, the <strong>General Laws (Family Matters) Amendment Bill</strong>, is set to reshape inheritance law in South Africa. Its primary goal is to protect vulnerable spouses who were previously left without assets upon the death of a partner.</p>
            
            <h3>Redistribution of Assets</h3>
            <p>Historically, if you were married out of community of property without the accrual system, you had no claim to your spouse's estate beyond what was in their will. This often disadvantaged women who contributed to the household non-financially.</p>
            
            <p>The new Bill empowers courts to order a "redistribution of assets" from the deceased estate to the surviving spouse if it is deemed just and equitable. This applies even if the marriage contract explicitly excluded accrual.</p>

            <h3>Why You Need to Review Your Will</h3>
            <p>This potential law change makes it critical to review your estate planning. A rigid will might be challenged in court. Consulting with a specialist like Ilse Marlow ensures your wishes are structured in a way that is both legally sound and fair to your loved ones.</p>
        `,
        date: 'January 28, 2026',
        author: 'Ilse Marlow',
        category: 'Estates & Trusts',
        image: '/assets/news/will.png'
    },
    {
        slug: 'raf-amendment-2025',
        title: 'Road Accident Fund 2025: The Shift to Annuity Payments',
        excerpt: 'The RAF is proposing a shift from lump-sum payouts to monthly annuity payments to ensure long-term financial sustainability.',
        content: `
            <p>The Road Accident Fund (RAF) is facing significant reforms in 2025. In an effort to ensure the Fund's survival and prevent claimants from mismanaging funds, a major legislative amendment is on the table.</p>

            <h3>Lump Sums vs. Annuities</h3>
            <p>Traditionally, accident victims received a large, once-off lump sum. The proposed amendment seeks to replace this with <strong>monthly annuity payments</strong> for loss of income and support. This model mirrors a pension or salary, ensuring that victims have a steady income stream for life rather than a single payout that could be exhausted quickly.</p>

            <h3>Settlement Initiatives</h3>
            <p>To tackle the massive backlog, the RAF has also launched regional "block settlement" initiatives. Law firms are invited to submit batches of settlement-ready claims during specific windows. Having a specialist attorney is more crucial than ever to navigate these submission windows and ensure your claim isn't lost in the system.</p>
        `,
        date: 'January 15, 2026',
        author: 'Werner Bornman',
        category: 'MVA Claims',
        image: '/assets/news/accident.png'
    },
    {
        slug: 'rental-housing-act-2025',
        title: 'Mandatory Written Leases: The 2025 Rental Housing Amendment',
        excerpt: 'Verbal lease agreements are no longer legally sufficient. New amendments require written contracts and stricter deposit handling.',
        content: `
            <p>The days of "handshake agreements" for renting property are over. The latest amendments to the Rental Housing Act, effective in 2025, have introduced strict new compliance requirements for landlords.</p>

            <h3>Written Leases are Mandatory</h3>
            <p>Previously, a written lease was only required if a tenant requested one. Now, <strong>all lease agreements must be in writing</strong>. Failure to provide a written lease is a criminal offense punishable by a fine or imprisonment.</p>

            <h3>Interest on Deposits</h3>
            <p>The amendments clarify that landlords <em>must</em> invest the tenant's security deposit in an interest-bearing account. Tenants have the right to request written proof of this investment. Using a tenant's deposit for personal cash flow is strictly prohibited.</p>

            <p>Ilse Marlow, our specialist in Property Law, advises all landlords to act immediately. "If you are renting out a property without a compliant written contract, you are exposed to significant legal risk."</p>
        `,
        date: 'January 10, 2026',
        author: 'Ilse Marlow',
        category: 'Property Law',
        image: '/assets/news/property.png'
    },
    {
        slug: 'family-law-mediation-rules',
        title: 'New High Court Rules: Mediation Before Litigation',
        excerpt: 'Rule 41A of the High Court Rules now effectively mandates mediation in family law disputes before a case can be heard in court.',
        content: `
            <p>South African courts are increasingly moving away from adversarial divorce litigation. Rule 41A of the Uniform Rules of Court now requires parties to consider <strong>meditation</strong> at the finding of any new action.</p>

            <h3>The Declaration of Mediation</h3>
            <p>When filing for divorce, your attorney must now file a notice stating whether you agree to mediation or not. If you refuse, you must provide valid reasons. Judges can now penalize parties with "punitive cost orders" if they unreasonably refuse to mediate and insist on expensive litigation.</p>

            <h3>Why This Matters</h3>
            <p>This shift puts the power back in the hands of the family. Instead of a judge deciding your custody or asset split, you and your spouse negotiate a settlement with a neutral mediator. It is faster, cheaper, and far less traumatic for children.</p>
        `,
        date: 'January 5, 2026',
        author: 'Werner Bornman',
        category: 'Family Law',
        image: '/assets/news/family.png'
    },
    {
        slug: 'labor-law-dismissal-code',
        title: 'New Code of Good Practice: Dismissal & Incompatibility',
        excerpt: 'A new Code of Good Practice coming in late 2025 clarifies "incompatibility" as a valid ground for dismissal.',
        content: `
            <p>South African labor law has traditionally grouped dismissals into three categories: Misconduct, Incapacity, and Operational Requirements (Retrenchment). A new <strong>Code of Good Practice: Dismissal</strong> is set to formalize a fourth nuanced category: <strong>Incompatibility</strong>.</p>

            <h3>What is Incompatibility?</h3>
            <p>Incompatibility refers to a breakdown in the working relationship where an employee simply cannot get along with colleagues or fit into the improved corporate culture, causing disharmony. It is not necessarily "misconduct" (breaking a rule) or "incapacity" (inability to do the job).</p>

            <h3>Procedural Fairness</h3>
            <p>Employers cannot simply fire someone for being "difficult." The new Code emphasizes a remedial process: counseling, attempts to resolve the friction, and exploring alternatives before dismissal is considered. Werner Bornman notes, "This is a complex area. Employers must tread carefully to avoid unfair dismissal claims based on personality clashes."</p>
        `,
        date: 'January 2, 2026',
        author: 'Werner Bornman',
        category: 'Labor Law',
        image: '/assets/news/labor.png'
    }
];
