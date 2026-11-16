// IFM flashcards. Source: "IFM Exam Prep – All Practice Questions by Topic"
// and "IFM Exam Prep – Model Answers by Topic" (Nov 15, 2026).
// Card ids are stable: editing text keeps progress; changing an id resets that card.
// type "open" = flip and self-rate · type "mcq" = tap an option, auto-graded.
// src: MCQ, Rev 6–9, G1, G2, G5, Disc, Concept (short cards drawn from the model answers).

window.TOPICS = {
  3: "International Financial Markets",
  4: "What Determines Exchange Rates?",
  5: "Forward Exchange & International Investment",
  6: "Government Policies toward the FX Market",
  7: "Internal & External Balance with Fixed Rates",
  8: "Floating Rates & Internal Balance",
  9: "Floating Rates and the Alternatives",
  10: "Market Structures",
  14: "Microstructure of the FX Market",
};

window.CARDS = [
  // ───────────── Topic 3 ─────────────
  {
    id: "t3-g1-1", topics: [3], src: "G1", type: "open",
    q: `The exchange rate rises from $1.10 to $1.20 per euro. Which currency has appreciated? How does this affect the dollar price of European exports and the euro price of US exports, if producers keep their prices unchanged?`,
    a: `<p>The <b>euro appreciated</b> and the <b>dollar depreciated</b>: one euro now buys $1.20 instead of $1.10. Always name the pair.</p>
<ul>
<li><b>European exports get dearer for Americans.</b> Dollar price = euro price × rate. €50 costs $55 at 1.10 and $60 at 1.20 (about +9%).</li>
<li><b>US exports get cheaper for Europeans.</b> Euro price = dollar price ÷ rate. $45 costs €40.91 at 1.10 and €37.50 at 1.20 (about −8%).</li>
</ul>
<p>Rule: an appreciation raises the relative price of a country's exports and lowers the relative price of its imports. A depreciation does the reverse.</p>`,
  },

  // ───────────── Topic 4 ─────────────
  {
    id: "t4-c-horizons", topics: [4], src: "Concept", type: "open",
    q: `What drives exchange rates in the short run versus the long run? What links the two?`,
    a: `<ul>
<li><b>Short run</b> (seconds to months): prices are sticky; <b>asset demand</b> drives the rate through interest differentials and expectations (UIP, asset market approach).</li>
<li><b>Long run</b> (years to decades): prices are flexible; <b>relative price levels and money supplies</b> drive it (PPP, monetary approach).</li>
<li><b>Overshooting</b> links the two.</li>
</ul>`,
  },
  {
    id: "t4-g2-1", topics: [4], src: "G2", type: "open",
    q: `"Short-run pressures on market exchange rates result mainly from gradual changes in flows of international trade in goods and services." Do you agree or disagree? Why?`,
    a: `<p><b>Disagree.</b> Currency demand has two sources:</p>
<ul>
<li><b>Trade demand</b>, which adjusts slowly because goods take time to move.</li>
<li><b>Asset demand</b>, which adjusts almost instantly because portfolios can be rebalanced in seconds.</li>
</ul>
<p>Asset demand is much faster and larger, so short-run moves come mainly from interest rate differentials and expectations, not from gradual trade flows. Trade flows matter at longer horizons.</p>`,
  },
  {
    id: "t4-g2-2", topics: [4], src: "G2", type: "open",
    q: `If PPP fails so badly in the short run, why is it still taught as the central long-run theory of exchange rates?`,
    a: `<p>Because it works as a <b>long-run anchor</b>. Over decades relative PPP holds reasonably well: for 1975–2019, low-inflation currencies (CHF, JPY, DEM) appreciated and high-inflation ones depreciated, roughly one-for-one with the inflation gap. Deviations are persistent but not permanent: <b>half-life of about 3–4 years</b>.</p>
<p>It fails short-run for four reasons:</p>
<ol>
<li>Trade barriers and transport costs</li>
<li>Nontradables (about ¾ of output in advanced economies)</li>
<li>Pricing to market by firms with market power</li>
<li>Different consumption baskets</li>
</ol>
<p>It is also the base of the monetary approach. So: a long-run anchor, not a short-run predictor.</p>`,
  },
  {
    id: "t4-g2-3", topics: [4], src: "G2", type: "open",
    q: `The 2022 dollar surge has been attributed to safe-haven flows, to PPP correction, and to overshooting. Which explanation is most convincing, and how would you distinguish between them empirically?`,
    a: `<p>Judgement question: give an argument and a test for each.</p>
<ul>
<li><b>Safe-haven flows</b> (asset demand): dollar rises with global risk, together with other safe havens (CHF, JPY). <i>Test:</i> correlate dollar moves with risk indicators; does the dollar rise on risk-off days regardless of interest rates?</li>
<li><b>Overshooting</b>: a monetary surprise causes a jump beyond the long-run level, then gradual reversal. <i>Test:</i> event studies around policy surprises (Ruth 2020: surprise 0.25% cut → immediate ~1% dollar fall, then partial recovery).</li>
<li><b>PPP correction</b>: slow movement of the real rate toward PPP. <i>Test:</i> measure the gap to PPP before the surge; is the move gradual and proportional to the gap?</li>
</ul>
<p><b>Conclusion:</b> PPP correction is too slow (half-life 3–4 years) for a fast surge, so the fast part is better explained by asset-market forces (interest differentials, safe haven) with overshooting dynamics. The three can operate together.</p>`,
  },
  {
    id: "t4-g2-4", topics: [4], src: "G2", type: "open",
    q: `Why can structural models not beat a random walk at short horizons? Is this a failure of the models or a feature of the market?`,
    a: `<p><b>Mostly a feature of the market.</b> Exchange rates are asset prices driven by news and expectations. Predicting next month's rate means predicting next month's news, which is unpredictable by definition. An efficient price already contains known information, so the best forecast is close to "no change".</p>
<p><b>Partly a model limit:</b> slow-moving fundamentals (money, income, prices) explain little of daily and monthly changes (the "disconnect" puzzle, <b>Meese & Rogoff 1983</b>).</p>
<p>Models remain useful for long-run direction and for understanding mechanisms.</p>`,
  },
  {
    id: "t4-g2-5", topics: [4], src: "G2", type: "open",
    q: `Dornbusch's overshooting is rational, yet it produces volatility that looks like inefficiency. Where is the line between rational overshooting and speculative bubbles?`,
    a: `<p><b>Why rational:</b> investors anticipate the long-run level and know prices are sticky. After a permanent money supply increase the interest rate falls and expected depreciation rises, so the currency jumps past its long-run value, then returns as prices adjust.</p>
<p><b>The line.</b> Overshooting:</p>
<ol>
<li>follows an identifiable shock,</li>
<li>is tied to a fundamentals-based long-run target,</li>
<li>reverses at a speed consistent with price stickiness.</li>
</ol>
<p>A <b>bubble</b> is a self-fulfilling move away from fundamentals with no such anchor or reversion.</p>
<p>Hard to draw empirically. Evidence for rational overshooting: <b>Frankel (1979)</b>, 10% surprise money increase → 12.3% jump; <b>Bjørnland (2009)</b>, "Dornbusch was right".</p>`,
  },
  {
    id: "t4-g2-6", topics: [4], src: "G2", type: "open",
    q: `Should central banks target exchange rates? Discuss with reference to the trade-off between inflation control and exchange rate stability.`,
    a: `<ul>
<li><b>For a target:</b> price discipline and predictability for trade and investment. A credible peg anchors inflation expectations and import prices.</li>
<li><b>Cost:</b> loss of monetary independence. To defend the rate the bank must adjust interest rates or intervene, so it cannot freely respond to domestic shocks (<b>the trilemma</b>), and reserves can run out.</li>
<li><b>Floating:</b> freedom to target inflation and output, but depreciation raises import prices and volatility makes trade planning harder.</li>
</ul>
<p><b>It depends on</b> the main shocks, the central bank's credibility, and how open the economy is.</p>`,
  },
  {
    id: "t4-g2-7", topics: [4], src: "G2", type: "open",
    q: `Why has exchange rate pass-through fallen in many countries? What does this imply for the usefulness of PPP as a long-run anchor?`,
    a: `<p><b>Mechanism from the deck: pricing to market.</b> Firms with market power absorb currency moves in their margins and keep local prices stable.</p>
<p>Other commonly given reasons (not detailed in the deck): lower, more credible inflation; invoicing in a few dominant currencies.</p>
<p><b>Implication:</b> if exchange rate changes pass less into prices, price levels and exchange rates drift further apart, so PPP deviations become larger and more persistent. PPP is a weaker anchor: still a long-run reference, but convergence is slower.</p>`,
  },
  {
    id: "t4-g2-8", topics: [4], src: "G2", type: "open",
    q: `What would the Balassa-Samuelson effect predict for China and India over the next twenty years? What could cause the prediction to fail?`,
    a: `<p><b>The effect:</b> high productivity growth in tradables raises wages economy-wide. Nontradables (services) are labour-intensive and cannot import productivity, so their prices rise. The price level rises with income per capita.</p>
<p><b>Prediction:</b> China's and India's price levels and <b>real exchange rates rise</b> toward richer-country levels, either through nominal appreciation or through domestic inflation above foreign inflation.</p>
<p><b>Could fail if:</b></p>
<ul>
<li>tradables productivity growth stalls,</li>
<li>productivity gains are not passed to wages,</li>
<li>wage growth is held down or the exchange rate is managed,</li>
<li>measurement and basket differences distort the comparison.</li>
</ul>`,
  },
  {
    id: "t4-g2-9", topics: [4], src: "G2", type: "open",
    q: `In the monetary approach, a rise in the domestic interest rate depreciates the currency. In the asset market approach, it appreciates the currency. Reconcile these two results.`,
    a: `<p>Ask <b>why the rate rose</b> (Fisher effect).</p>
<ul>
<li><b>Monetary tightening with sticky prices</b> (real rate rises): investors move into domestic assets → currency <b>appreciates</b> in the short run. (Asset market approach.)</li>
<li><b>Higher expected inflation:</b> nominal rate rises one-for-one (R − R* = expected inflation differential), real rate unchanged, price level will be higher → by relative PPP the currency <b>depreciates</b>. (Monetary approach.)</li>
</ul>
<p>The two results answer different cases and different horizons.</p>`,
  },
  {
    id: "t4-g1-10", topics: [4], src: "G1", type: "open",
    q: `A US investor can earn 5% on a dollar deposit or 3% on a euro deposit. The euro is expected to appreciate by 4% against the dollar. Which deposit offers the higher expected dollar return? Explain the calculation and the risk.`,
    a: `<p>Expected dollar return on euros = R€ + expected euro appreciation = 3% + 4% = <b>7%</b> (exactly 1.03 × 1.04 − 1 = 7.12%).</p>
<p>7% > 5%, so the <b>euro deposit wins by about 2 points</b>.</p>
<p>Check: R$ − R€ − expected dollar depreciation = 5 − 3 − 4 = −2 (negative → euro deposit pays more).</p>
<p><b>Risk:</b> the 4% is only an expectation; nothing locks it in (uncovered position). If the euro appreciates by less than 2%, the dollar deposit wins; if the euro falls, the investor can lose money.</p>`,
  },
  {
    id: "t4-g1-11", topics: [4], src: "G1", type: "open",
    q: `The Fed raises interest rates, but the dollar depreciates immediately afterward. Why might this happen? Distinguish an anticipated rate increase from unexpected information about future monetary policy.`,
    a: `<p>Interest parity: R$ = R€ + (E<sup>e</sup> − E)/E; today's spot rate E is what adjusts.</p>
<ul>
<li>An <b>anticipated</b> hike is already priced in, so it moves nothing when it happens.</li>
<li><b>New information</b> moves E. If the Fed signals fewer or slower future hikes than expected (forward guidance), investors revise expected future rates and the expected exchange rate; the return on dollar assets falls relative to the alternative → the dollar depreciates today.</li>
</ul>
<p><b>Course example:</b> ECB and Fed both delivered the expected 25bp hike and EURUSD still fell 1.12%: the surprise relative to expectations moved the rate, not the hike itself.</p>`,
  },

  // ───────────── Topic 5 ─────────────
  {
    id: "t5-g1-1", topics: [5], src: "G1", type: "open",
    q: `A US company must pay a European supplier €500,000 in three months. Which exchange rate movement would increase its dollar costs? How could a forward contract protect it, and what benefit would it give up?`,
    a: `<p>It owes euros, so it is hurt if the <b>euro appreciates</b>. Dollar cost = 500,000 × rate at payment.</p>
<p><b>Forward:</b> agree now to buy €500,000 in 3 months at forward rate F. Cost is known today: 500,000 × F.<br>Example F = $1.20 → locked at $600,000. If spot ends at $1.25, unhedged cost = $625,000, so the forward saves $25,000.</p>
<p><b>Given up:</b> the gain from a favourable move. If spot ends at $1.15, unhedged = $575,000 and the hedger pays $25,000 more. Hedging removes risk in both directions.</p>
<p>Course parallel (Best Buy): unhedged = +$5.50 or −$3.50 per radio depending on the yen; a 30-day forward locks in $3.70.</p>`,
  },
  {
    id: "t5-c-premium", topics: [5], src: "Concept", type: "open",
    q: `How do you calculate the forward premium on a foreign currency? Spot is $1.00/SFr and forward is $1.02/SFr: what is it?`,
    a: `<p><b>Forward premium = (F − S) / S</b>, with rates in domestic currency per foreign unit.</p>
<p>Positive = forward <b>premium</b>; negative = forward <b>discount</b>.</p>
<p>(1.02 − 1.00) / 1.00 = <b>+2%</b>: the franc is at a 2% forward premium.</p>`,
  },
  {
    id: "t5-c-covered", topics: [5], src: "Concept", type: "open",
    q: `Define the covered return on a foreign investment, the covered interest differential, and covered interest parity (CIP).`,
    a: `<ul>
<li><b>Covered return</b> ≈ foreign interest rate + forward premium (the forward premium is the gain or loss from locking in the conversion back).</li>
<li><b>Covered interest differential</b> = covered foreign return − domestic return. Positive → the foreign investment is better after cover.</li>
<li><b>CIP:</b> the differential is zero, so domestic rate ≈ foreign rate + forward premium. A higher foreign rate must come with a forward <b>discount</b> on the foreign currency.</li>
</ul>`,
  },
  {
    id: "t5-c-arbitrage", topics: [5], src: "Concept", type: "open",
    q: `The covered interest differential favours the foreign country. Walk through covered interest arbitrage and explain what it does to rates.`,
    a: `<ol>
<li>Borrow at home.</li>
<li>Convert to foreign currency at spot.</li>
<li>Invest abroad.</li>
<li>Sell the foreign proceeds forward.</li>
</ol>
<p>Essentially riskless (as long as nobody defaults). The flows push toward CIP: <b>foreign rate falls, domestic rate rises</b>, and spot/forward rates move to close the gap.</p>`,
  },
  {
    id: "t5-c-worked", topics: [5], src: "Concept", type: "open",
    q: `US rate 3%, British rate 4%, spot $1.50/£, forward $1.50/£. What is the covered return in Britain, the covered differential, and what forward rate would CIP require?`,
    a: `<p>Forward premium = 0, so covered British return = 4% + 0% = <b>4%</b> vs 3% at home → <b>+1 point</b> covered advantage for Britain.</p>
<p>CIP requires the pound at a forward <b>discount</b> of about 1%: forward ≈ <b>$1.485/£</b>.</p>`,
  },
  {
    id: "t5-c-uip", topics: [5], src: "Concept", type: "open",
    q: `State uncovered interest parity (UIP). How does it differ from CIP, and what does the evidence say about each?`,
    a: `<p><b>UIP:</b> domestic rate ≈ foreign rate + <b>expected</b> appreciation of the foreign currency, (E<sup>e</sup> − S)/S.</p>
<p>Same as CIP but with the <b>expected future spot rate</b> instead of the forward rate. Expectations are not observable, so UIP is harder to test.</p>
<p><b>Evidence:</b> CIP held closely for major currencies with free capital flows, with larger deviations in crises and under post-crisis bank regulation. UIP holds much less tightly.</p>`,
  },
  {
    id: "t5-mcq-01", topics: [5], src: "MCQ", type: "mcq",
    q: `A person is exposed to exchange-rate risk when:`,
    options: [
      "They exchange currencies only in the spot market",
      "Their income, wealth, or net worth can change because of unpredictable future exchange-rate movements",
      "They invest only in domestic assets",
      "They know exactly what the future exchange rate will be",
    ], correct: 1,
    explain: `Unpredictable exchange-rate changes can alter a person's income, wealth, or net worth.`,
  },
  {
    id: "t5-mcq-02", topics: [5], src: "MCQ", type: "mcq",
    q: `Which statement correctly distinguishes hedging from speculation?`,
    options: [
      "Hedging increases exchange-rate exposure, while speculation eliminates it",
      "Hedging and speculation both eliminate exchange-rate risk",
      "Hedging reduces or eliminates an existing exposure, while speculation deliberately takes or maintains an exposed position",
      "Speculation can only be conducted through forward contracts",
    ], correct: 2,
    explain: `Hedging reduces or eliminates a foreign-currency exposure; speculation means taking or keeping a net position exposed to currency movements.`,
  },
  {
    id: "t5-mcq-03", topics: [5], src: "MCQ", type: "mcq",
    q: `An investor holding a net asset position in a foreign currency is described as:`,
    options: ["Short the foreign currency", "Long the foreign currency", "Covered", "At parity"], correct: 1,
    explain: `A net foreign-currency asset position is long; a net liability position is short.`,
  },
  {
    id: "t5-mcq-04", topics: [5], src: "MCQ", type: "mcq",
    q: `What is a forward foreign exchange contract?`,
    options: [
      "An agreement to exchange currencies immediately at a predetermined rate",
      "An agreement to exchange currencies in the future at whatever spot rate exists then",
      "An agreement made today to exchange currencies on a future date at an exchange rate established today",
      "An agreement that gives the holder the right, but not the obligation, to exchange currencies",
    ], correct: 2,
    explain: `Agreed now, currencies exchanged in the future, rate fixed now. (The "right but not obligation" option describes an option contract.)`,
  },
  {
    id: "t5-mcq-05", topics: [5], src: "MCQ", type: "mcq",
    q: `Which statement about the forward exchange rate and the future spot exchange rate is correct?`,
    options: [
      "They must always be equal",
      "The forward rate is known today, whereas the future spot rate is uncertain today",
      "The future spot rate is known today, whereas the forward rate is uncertain",
      "A forward contract automatically adjusts to the future spot rate",
    ], correct: 1,
    explain: `The forward rate is agreed today; the future spot rate can end up above, below, or equal to it.`,
  },
  {
    id: "t5-mcq-06", topics: [5], src: "MCQ", type: "mcq",
    q: `A U.S. company must pay £500,000 to a British supplier in three months. How could it hedge using the forward market?`,
    options: [
      "Sell £500,000 forward",
      "Buy £500,000 forward",
      "Buy dollars forward",
      "Wait three months and purchase pounds in the spot market",
    ], correct: 1,
    explain: `A future pound liability is offset by agreeing now to buy pounds forward.`,
  },
  {
    id: "t5-mcq-07", topics: [5], src: "MCQ", type: "mcq",
    q: `A U.S. company expects to receive €2 million from a European customer in 90 days. Which forward position would hedge its exposure?`,
    options: [
      "Buy €2 million forward",
      "Sell €2 million forward",
      "Borrow €2 million today",
      "Buy additional euro-denominated assets",
    ], correct: 1,
    explain: `A future euro receivable is hedged by selling the euros forward.`,
  },
  {
    id: "t5-mcq-08", topics: [5], src: "MCQ", type: "mcq",
    q: `A speculator believes the British pound will depreciate substantially over the next three months. Which position is consistent with this?`,
    options: [
      "Buy pounds forward",
      "Sell pounds forward",
      "Buy pounds spot and hold them",
      "Take a long position in pounds",
    ], correct: 1,
    explain: `Selling pounds forward lets the speculator buy them more cheaply in the spot market later and deliver them at the higher forward price.`,
  },
  {
    id: "t5-mcq-09", topics: [5], src: "MCQ", type: "mcq",
    q: `Which statement correctly describes a covered international investment?`,
    options: [
      "The investor waits to use the future spot rate",
      "The investor eliminates exchange-rate exposure by locking in the future currency conversion using a forward contract",
      "The investor does not convert currencies",
      "The investor is guaranteed to earn more than on a domestic investment",
    ], correct: 1,
    explain: `A forward contract locks in the rate at which the foreign investment's proceeds are converted back into the home currency.`,
  },
  {
    id: "t5-mcq-10", topics: [5], src: "MCQ", type: "mcq",
    q: `An uncovered international investment differs from a covered investment primarily because:`,
    options: [
      "It contains no foreign financial asset",
      "It must involve borrowing",
      "The future proceeds are converted using the future spot rate rather than a forward rate locked in today",
      "It has no exchange-rate risk",
    ], correct: 2,
    explain: `The conversion is exposed to the future spot rate, which is unknown when the investment is made.`,
  },
  {
    id: "t5-mcq-11", topics: [5], src: "MCQ", type: "mcq",
    q: `The forward premium on a foreign currency is based on:`,
    options: [
      "The difference between domestic and foreign inflation",
      "The proportionate difference between its forward exchange rate and current spot exchange rate",
      "The difference between expected and actual future spot rates",
      "Only the foreign country's interest rate",
    ], correct: 1,
    explain: `Forward premium = (F − S) / S, the proportionate difference between the current forward and spot values.`,
  },
  {
    id: "t5-mcq-12", topics: [5], src: "MCQ", type: "mcq",
    q: `The spot rate is $1.00/SFr and the forward rate is $1.02/SFr. The Swiss franc is:`,
    options: [
      "At a forward discount",
      "At a forward premium",
      "At uncovered interest parity",
      "Depreciating by exactly 2% in the spot market",
    ], correct: 1,
    explain: `The franc is worth more dollars forward ($1.02) than spot ($1.00): a 2% forward premium.`,
  },
  {
    id: "t5-mcq-13", topics: [5], src: "MCQ", type: "mcq",
    q: `A U.S. investor compares a domestic investment with a covered British investment. The covered interest differential is positive in favour of Britain. This means:`,
    options: [
      "The domestic investment provides the higher covered return",
      "The British investment provides the higher covered return",
      "The investor necessarily faces greater exchange-rate risk by investing in Britain",
      "Covered interest parity already holds",
    ], correct: 1,
    explain: `A positive covered interest differential means the covered foreign investment offers the higher return. It is covered, so there is no extra exchange-rate risk.`,
  },
  {
    id: "t5-mcq-14", topics: [5], src: "MCQ", type: "mcq",
    q: `What is covered interest arbitrage?`,
    options: [
      "Investing abroad while deliberately remaining exposed to exchange-rate risk",
      "Exploiting a covered interest differential using spot and forward currency transactions together with investments or borrowing",
      "Predicting future exchange rates and buying currency options",
      "Investing only in currencies with high interest rates",
    ], correct: 1,
    explain: `It is essentially riskless as long as nobody defaults on the contracts.`,
  },
  {
    id: "t5-mcq-15", topics: [5], src: "MCQ", type: "mcq",
    q: `British 90-day rates are 4% and U.S. 90-day rates are 3%. The pound has no forward premium or discount. What opportunity exists?`,
    options: [
      "Covered investment in Britain offers a higher return",
      "Covered investment in the United States offers a higher return",
      "Both investments necessarily earn exactly the same return",
      "The pound must immediately appreciate in the spot market",
    ], correct: 0,
    explain: `Britain pays 4% vs 3%, with no currency gain or loss on the forward: a 1 percentage-point covered advantage.`,
  },
  {
    id: "t5-mcq-16", topics: [5], src: "MCQ", type: "mcq",
    q: `Under covered interest parity, if the British interest rate is higher than the comparable U.S. rate, the pound should generally:`,
    options: [
      "Trade at a forward premium sufficient to reinforce the interest advantage",
      "Trade at a forward discount that offsets the interest advantage",
      "Have identical spot and forward exchange rates",
      "Appreciate in the future by exactly the interest differential",
    ], correct: 1,
    explain: `The forward discount on the pound offsets the higher British rate, removing the arbitrage opportunity.`,
  },
  {
    id: "t5-mcq-17", topics: [5], src: "MCQ", type: "mcq",
    q: `Many investors exploit a covered interest arbitrage opportunity by moving funds from U.S. investments into British investments. Which pressures should occur?`,
    options: [
      "U.S. interest rates fall and British interest rates rise",
      "U.S. interest rates rise and British interest rates fall",
      "Both countries' interest rates must rise",
      "Neither country's interest rate is affected",
    ], correct: 1,
    explain: `Funds leaving the U.S. push U.S. rates up; funds flowing into British assets push British rates down, closing the differential.`,
  },
  {
    id: "t5-mcq-18", topics: [5], src: "MCQ", type: "mcq",
    q: `What is the key difference between covered interest parity (CIP) and uncovered interest parity (UIP)?`,
    options: [
      "CIP uses the current forward exchange rate, while UIP involves the expected future spot exchange rate",
      "CIP uses the expected future spot rate, while UIP uses the forward rate",
      "UIP eliminates exchange-rate risk whereas CIP does not",
      "There is no difference; they are two names for the same relationship",
    ], correct: 0,
    explain: `CIP: forward rate (observable, locked in). UIP: expected future spot rate (unobservable, risk remains).`,
  },
  {
    id: "t5-mcq-19", topics: [5], src: "MCQ", type: "mcq",
    q: `Why is uncovered interest parity more difficult to test empirically than covered interest parity?`,
    options: [
      "Current spot exchange rates cannot be observed",
      "Interest rates cannot be observed",
      "Investors' expected future spot exchange rates cannot be directly observed",
      "Forward exchange rates cannot be observed",
    ], correct: 2,
    explain: `Spot rates, forward rates and market interest rates are observable; expectations are not.`,
  },
  {
    id: "t5-mcq-20", topics: [5], src: "MCQ", type: "mcq",
    q: `Which statement best reflects the empirical evidence in Chapter 18?`,
    options: [
      "Both covered and uncovered interest parity always hold exactly",
      "CIP has generally held relatively closely for major currencies with liberalized capital flows (with larger deviations in crises and under newer banking constraints); UIP holds much less tightly",
      "Uncovered interest parity performs better empirically than covered interest parity",
      "Neither relationship has any empirical usefulness",
    ], correct: 1,
    explain: `CIP is close for major currencies; UIP is a rougher empirical approximation.`,
  },

  // ───────────── Topic 6 ─────────────
  {
    id: "t6-rev-1", topics: [6], src: "Rev 6–9", type: "open",
    q: `What is the main difference between a clean float and a managed float, and how does a central bank use official intervention to defend a currency against depreciation?`,
    a: `<ul>
<li><b>Clean float:</b> purely private supply and demand; no official participation.</li>
<li><b>Managed ("dirty") float:</b> the authority buys or sells foreign currency to nudge the rate (if the currency is rising, it buys foreign and sells domestic currency to slow the rise).</li>
</ul>
<p><b>Defending against depreciation:</b> the central bank <b>sells foreign currency and buys its own</b>.</p>
<p>Course example: peg 25 pesos/$ with ±4% band (24–26); market would clear at 28. The bank sells $3bn at 26 and buys back 78bn pesos. Financed from reserves (foreign assets, IMF position, SDRs, gold) or swap-line borrowing. Selling foreign assets shrinks the monetary base unless sterilized.</p>
<p>Works for a <b>temporary</b> disequilibrium (e.g. seasonal export swings), not a <b>fundamental</b> one: reserves run out.</p>`,
  },
  {
    id: "t6-rev-2", topics: [6], src: "Rev 6–9", type: "open",
    q: `Why are exchange controls often considered economically inferior to other methods of defending a fixed exchange rate, and what unintended consequences do they create?`,
    a: `<p>Controls ration <b>access</b> (who may trade) instead of letting the price adjust. If officials value the pound at $1.00 while the marginal buyer would pay $1.50, a willing buyer and seller are forbidden to trade → <b>deadweight loss</b> (the triangle, ~$5bn in the course example). Even an auction only redistributes the gap; it never recovers the loss.</p>
<p><b>Unintended consequences:</b></p>
<ul>
<li>administrative costs of applications and enforcement,</li>
<li>misallocation: officials, not the market, pick who gets currency,</li>
<li>bribery to jump the queue,</li>
<li><b>parallel (black) markets</b>: Nigeria, May 2022, official 416 naira/$ vs ~600 parallel.</li>
</ul>
<p>Controls persist partly because they give officials discretionary power. They treat the symptom and distort real behaviour.</p>`,
  },
  {
    id: "t6-rev-3", topics: [6], src: "Rev 6–9", type: "open",
    q: `How did the "one-way speculative gamble" under the Bretton Woods adjustable peg contribute to currency crises and the eventual collapse of the system?`,
    a: `<p>Under the adjustable peg (1944–1971) rates changed only when a "fundamental" disequilibrium built up. Everyone could see the weak currencies. Selling one risked almost nothing (the peg caps how far it can rise) but paid a lot if the peg broke: a <b>one-way bet</b>. Capital fled at the first doubt, draining reserves and making devaluation more likely: <b>self-feeding crisis</b>.</p>
<p><b>Reserve-center asymmetry:</b> with N currencies pegged to one, only N−1 rates need fixing, so the US never intervened and kept independent monetary policy while others imported it. US gold fell from 643m to 306m oz (1958–68) as dollar claims piled up abroad.</p>
<p><b>End:</b> Aug 1971 Nixon suspends gold convertibility → Dec 1971 Smithsonian Agreement (dollar −~10%) → 1973 major currencies float.</p>
<p>The gamble returned in 1994–2002: peso ≈33%, baht 45%, won 48%, ruble 60%.</p>`,
  },
  {
    id: "t6-rev-4", topics: [6], src: "Rev 6–9", type: "open",
    q: `How can a central bank perform an intervention on the foreign exchange market without altering the money supply?`,
    a: `<p><b>Sterilization</b>: a double operation. To defend against depreciation:</p>
<ol>
<li>Sell foreign assets: reserves −$100, monetary base −$100.</li>
<li>Simultaneously <b>buy domestic assets</b> (e.g. bonds) for $100, putting the money back.</li>
</ol>
<p>Net: reserves −$100, domestic assets +$100, <b>monetary base unchanged</b>, so domestic interest rates are unchanged.</p>
<p><b>Limits:</b> since rates and money don't change, the effect is limited and short-lived; reserves are finite, so it cannot continue indefinitely.</p>`,
  },
  {
    id: "t6-g1-5", topics: [6], src: "G1", type: "open",
    q: `A central bank maintains a fixed exchange rate, but market pressure is pushing its currency toward depreciation. Which currency should it buy and which sell? What happens to its reserves, and why may this be hard to sustain?`,
    a: `<p>It <b>buys its own currency and sells foreign currency</b> (usually the currency it pegs to). Its FX <b>reserves fall</b> with each sale.</p>
<p><b>Hard to sustain:</b></p>
<ul>
<li>Reserves are limited; with a fundamental disequilibrium, financing only delays adjustment (Mexico 1994: reserves ~$30bn → $6bn, then the peso fell ~33%).</li>
<li>Without sterilization the money supply shrinks, raising rates and hurting output.</li>
</ul>
<p>Eventually the bank must adjust policy, devalue, or float.</p>`,
  },

  // ───────────── Topics 7–8 ─────────────
  {
    id: "t7-c-trilemma", topics: [7, 9], src: "Concept", type: "open",
    q: `State the trilemma (impossible trinity).`,
    a: `<p>A country cannot have all three at once:</p>
<ol>
<li>a <b>fixed exchange rate</b>,</li>
<li><b>free capital flows</b>,</li>
<li><b>independent monetary policy</b>.</li>
</ol>
<p>It can pick two (Mundell).</p>`,
  },
  {
    id: "t7-rev-5", topics: [7], src: "Rev 6–9", type: "open",
    q: `Under a fixed exchange rate, what happens when the central bank implements an expansionary monetary policy by increasing the money supply?`,
    a: `<ol>
<li>Money supply up → <b>interest rate falls</b>.</li>
<li>With free capital movement, funds flow out for higher returns → <b>downward pressure</b> on the currency. (Higher income also raises imports.)</li>
<li>To hold the peg the bank <b>sells foreign assets and buys domestic currency</b> → money supply shrinks back; reserves fall.</li>
</ol>
<p><b>Result:</b> the expansion is largely reversed; the main effect is a loss of reserves; output barely changes. Sterilization can't go on forever (reserves run out).</p>
<p>With perfect capital mobility the balance of payments rules the money supply: monetary policy cannot change the rate or the economy. This is the <b>trilemma</b>.</p>`,
  },
  {
    id: "t7-rev-6", topics: [7, 8], src: "Rev 6–9", type: "open",
    q: `A country with perfect capital mobility wants to fight a recession. Under a fixed exchange rate, should it use monetary or fiscal policy? Would the answer change under a floating rate?`,
    a: `<p><b>Fixed rate → fiscal policy.</b></p>
<ul>
<li>Monetary policy is powerless (defending the peg reverses it).</li>
<li>Fiscal expansion nudges the rate up → foreign inflow → bank buys foreign currency to hold the peg → money supply expands → rate stays at the world level. <b>No crowding out</b>, full multiplier (course: output 110 → 160, rate unchanged at 6%).</li>
<li>Catch: fiscal decisions are slow and political.</li>
</ul>
<p><b>Floating rate → monetary policy.</b></p>
<ul>
<li>A rate cut depreciates the currency → exports up, imports down, reinforcing the effect (OECD: depreciation made monetary expansion ~50% more effective on GDP after 2 years). Risk: inflation.</li>
<li>Fiscal is weaker: higher rates attract capital, currency appreciates, net exports fall ("<b>international crowding out</b>"). With perfect mobility the capital-flow effect dominates.</li>
</ul>`,
  },
  {
    id: "t8-rev-7", topics: [8], src: "Rev 6–9", type: "open",
    q: `Investors suddenly lose confidence in a country and pull their money out. Would the country rather have a fixed or a floating exchange rate?`,
    a: `<p><b>Floating</b>: capital-flow shocks are more disruptive under a fixed rate.</p>
<ul>
<li><b>Fixed:</b> outflow → payments deficit → bank sells reserves → (unsterilized) money supply shrinks, rates rise, output falls (course: output 110 → 100, rate 6% → 7%), unemployment rises. If reserves run out, the peg breaks anyway (1994–2002 crisis wave).</li>
<li><b>Floating:</b> the currency depreciates, exports rise, imports fall, current account improves, output tends to rise. Money supply isn't tied to defending a rate.</li>
</ul>
<p><b>Caveat:</b> the problems behind the outflow may contract the economy anyway, and the outflow can disrupt domestic financial markets.</p>`,
  },

  // ───────────── Topic 9 ─────────────
  {
    id: "t9-rev-8", topics: [9], src: "Rev 6–9", type: "open",
    q: `What key issues should a country consider when choosing an exchange-rate policy, and how do economic shocks, inflation control and monetary-policy independence influence the decision?`,
    a: `<p><b>Five issues:</b> (1) effects of macro shocks, (2) effectiveness of government policies, (3) differences in macro goals and priorities, (4) controlling inflation, (5) real effects of exchange-rate variability.</p>
<ul>
<li><b>Shocks:</b> floating absorbs <b>external</b> shocks (trade, capital flows) better: depreciation helps exports recover (cost: dearer imports, inflation). Fixed is less disruptive for <b>internal</b> shocks (monetary, spending).</li>
<li><b>Inflation:</b> a credible peg to a stable currency anchors expectations and imposes discipline but limits money creation. Floating gives freedom but depreciation raises import prices.</li>
<li><b>Monetary independence:</b> the trilemma, pick two of fixed rate, free capital, independent policy.</li>
<li><b>Variability:</b> swings create uncertainty and hedging costs → favours fixed.</li>
</ul>
<p><b>Conclusion:</b> floating suits countries valuing flexibility and independence; fixed suits those valuing stability, discipline and predictable trade.</p>`,
  },
  {
    id: "t9-rev-9", topics: [9], src: "Rev 6–9", type: "open",
    q: `What are the main differences between floating and fixed exchange rates, and how do they affect a country's monetary policy?`,
    a: `<dl class="cmp">
<dt>Exchange rate</dt><dd><span>Float</span>Set by the market, adjusts to shocks</dd><dd><span>Fixed</span>Defended by the central bank</dd>
<dt>Monetary policy</dt><dd><span>Float</span>Independent and powerful: a cut depreciates the currency, raises net exports and output</dd><dd><span>Fixed</span>Limited: must defend the rate, cannot freely set rates or money</dd>
<dt>Fiscal policy</dt><dd><span>Float</span>Weaker: spending appreciates the currency, cuts net exports</dd><dd><span>Fixed</span>Stronger: defending the peg reinforces the expansion</dd>
<dt>Inflation</dt><dd><span>Float</span>Depends on own credibility; depreciation raises import prices</dd><dd><span>Fixed</span>A credible peg anchors expectations, price discipline</dd>
<dt>Shocks</dt><dd><span>Float</span>Better for external shocks (trade, capital)</dd><dd><span>Fixed</span>Better for internal shocks (monetary, spending)</dd>
<dt>Trade & investment</dt><dd><span>Float</span>More uncertainty</dd><dd><span>Fixed</span>More predictability</dd>
</dl>`,
  },
  {
    id: "t9-rev-10", topics: [9], src: "Rev 6–9", type: "open",
    q: `What is the difference between a currency board, dollarization and the European Monetary Union (EMU)? What are their main advantages and disadvantages?`,
    a: `<p><b>Currency board:</b> keeps its own currency, fixed to a foreign one (e.g. 5 local = US$1), fully backed by foreign reserves; money creation tied to reserves; converts on demand.<br><i>+</i> certainty, confidence, price discipline. <i>−</i> very limited monetary independence, little room for recessions or banking stress; must defend the peg if demand for local currency falls (Argentina debate).</p>
<p><b>Dollarization:</b> adopts the US dollar as official currency, drops its own. Extreme fixed rate.<br><i>+</i> credibility, no FX risk vs the dollar, stable expectations. <i>−</i> no monetary policy, cannot devalue (adjusts via prices, wages, fiscal, external financing), limited emergency liquidity.</p>
<p><b>EMU:</b> members share the euro and one monetary policy (ECB, 2% medium-term target); fiscal stays national under EU rules.<br><i>+</i> no FX uncertainty among members, lower conversion costs, more trade and investment. <i>−</i> no national monetary policy or devaluation for country-specific shocks; one policy for different economies.</p>
<p><b>Key contrast:</b> board = national currency tied by rule; dollarization = no national currency, hardest to reverse; EMU = shared currency <i>and</i> shared decision-making, so members have a say in the common policy.</p>`,
  },

  // ───────────── Topic 10 ─────────────
  {
    id: "t10-g5-1", topics: [10], src: "G5", type: "open",
    q: `What distinguishes a continuous market from a call market?`,
    a: `<ul>
<li><b>Continuous:</b> trade any time it is open; a trade executes as soon as buyer and seller agree (NYSE, Nasdaq, forex, futures).</li>
<li><b>Call:</b> orders accumulate; when the market is "called", everything executes at once at the <b>single price</b> that matches the most buyers and sellers.</li>
</ul>
<p><b>Trade-off:</b> call markets are better at <b>price discovery</b> (all orders in before the price is set); continuous markets are better at <b>flexibility</b> (trade exactly when you need to).</p>`,
  },
  {
    id: "t10-g5-2", topics: [10], src: "G5", type: "open",
    q: `Why does a continuous market still run a single call at the open?`,
    a: `<p>Overnight, orders pile up and information accumulates. A call uses all of them together to set <b>one fair opening price</b> before switching to continuous trading. It borrows the call mechanism's price-discovery strength exactly when it is most needed.</p>`,
  },
  {
    id: "t10-g5-3", topics: [10], src: "G5", type: "open",
    q: `What separates a dealer market from an order-driven market?`,
    a: `<ul>
<li><b>Dealer (quote-driven):</b> a dealer trades for own account, quotes bid and ask, profits from the <b>spread</b>; dealers provide liquidity and set the price.</li>
<li><b>Order-driven (auction):</b> no dealer; price emerges from traders' competing <b>limit orders</b> in an order book. Precedence rules decide who trades; pricing rules decide at what price.</li>
</ul>
<p>Example: sells at $50.10, $50.05, $50.02; buys at $50.00, $49.95. A new buy at $50.02 matches the best sell instantly.</p>
<p>Most real markets are <b>hybrids</b> (NYSE mostly order-driven with designated market makers; Nasdaq began as dealer, now displays public limit orders). A <b>broker</b> differs from a dealer: never takes the other side or risks own capital.</p>`,
  },
  {
    id: "t10-g5-4", topics: [10], src: "G5", type: "open",
    q: `Why does market price differ from fundamental value?`,
    a: `<ul>
<li><b>Market value</b>: the clearing price observed now, an observable fact.</li>
<li><b>Fundamental value</b>: risk-adjusted expected present value of all future cash flows; nobody knows it for sure, it is always an estimate.</li>
</ul>
<p>Prices drift from fundamental value because of <b>uninformed (noise) traders</b> and because values change constantly with news. Markets close the gap through informed traders trading on their estimates.</p>`,
  },
  {
    id: "t10-g5-5", topics: [10], src: "G5", type: "open",
    q: `Why might an informed trader be correct about value yet still lose money in the short run?`,
    a: `<p>Being right ≠ profiting. Example: you value an asset at €60, it trades at €50, you buy; noise traders panic-sell on a rumour and it falls to €40. Right in the long run, losing in the short run.</p>
<p>Prices can move further away before the market corrects, so profiting takes <b>capital and risk management</b> to survive until prices converge.</p>`,
  },
  {
    id: "t10-g5-6", topics: [10], src: "G5", type: "open",
    q: `What distinguishes a value trader from a news trader?`,
    a: `<ul>
<li><b>Value traders</b> estimate <b>fundamental values</b> (sales, costs, management, rates); buy if undervalued, sell if overvalued. Large, pyramid-shaped organisations with layers of review → <b>slow</b>, but estimate well; liquidity providers of last resort.</li>
<li><b>News traders</b> estimate <b>how new information will change prices</b>. Need speed (flat organisations, headline-reading algorithms); usually right on direction, poor on size; most common mistake: trading on <b>stale news</b>.</li>
</ul>`,
  },
  {
    id: "t10-g5-7", topics: [10], src: "G5", type: "open",
    q: `Why does informed trading depend on uninformed traders to remain profitable?`,
    a: `<p>Trading among the informed is <b>zero-sum</b>; someone must be on the losing side. Informed trading pays only when trading with the <b>uninformed</b>, and more uninformed traders → more profit.</p>
<p>Reinforcing loop: more uninformed → more profit for informed → more informed trading → more informative prices.</p>
<p>Resolves "if prices are informative, why trade?": uninformed traders keep pushing prices slightly away from fundamental value, leaving profit for the informed.</p>`,
  },
  {
    id: "t10-g5-8", topics: [10], src: "G5", type: "open",
    q: `What is the trade-off between liquidity and informative prices?`,
    a: `<p>Informative prices help allocate capital, but come from informed trading, which raises <b>adverse-selection risk</b> for everyone else. Market makers respond by <b>widening spreads</b> → less liquidity.</p>
<p>Reducing informed trading (e.g. restricting insider trading) restores liquidity but makes prices less informative.</p>
<p><b>Public information</b> helps: it lowers the cost of being informed and cuts informed traders' profits from the uninformed.</p>`,
  },

  // ───────────── Topic 14 ─────────────
  {
    id: "t14-c-orderflow", topics: [14], src: "Concept", type: "open",
    q: `What is order flow, and what did Evans & Lyons (2002) find about it?`,
    a: `<p><b>Order flow</b> = net signed trading pressure (buyer-initiated minus seller-initiated trades).</p>
<p>Lyons (2001): macro models assume everyone has the same information and reads it the same way; relax either and trading reveals information.</p>
<ul>
<li>Macro variables explain very little daily: interest differentials ≤1% of daily DM/$ and ¥/$ moves.</li>
<li><b>Evans & Lyons (2002):</b> order flow explains ~<b>64%</b> of daily USD/DEM and ~<b>46%</b> of USD/JPY changes.</li>
<li>Price impact ≈ <b>+0.5% per $1bn</b> of net dollar buying.</li>
</ul>`,
  },
  {
    id: "t14-disc-1", topics: [14], src: "Disc", type: "open",
    q: `Causality: does order flow cause exchange-rate movements, or vice versa?`,
    a: `<p><b>Both directions matter.</b></p>
<ul>
<li><b>Trading moves prices:</b> trades carry information; dealers learn from them (Payne 2003; Evans & Lyons 2002). But a high R² shows association, not one-way causality.</li>
<li><b>Prices trigger trading:</b> falling prices trigger selling that amplifies the fall. <b>Osler (2005)</b>: trends accelerate around stop-loss clusters, stronger and longer-lasting than take-profit orders. <b>Sterling flash event, Oct 2016</b>: pound −~9% vs dollar then largely recovered; BIS linked it to options hedging, stop-losses and thin liquidity.</li>
</ul>
<p><b>Conclusion:</b> causation runs both ways, so causal inference has limits.</p>`,
  },
  {
    id: "t14-disc-2", topics: [14], src: "Disc", type: "open",
    q: `Macroeconomic fundamentals: can order flow replace traditional macroeconomic explanations?`,
    a: `<p><b>No, they are complementary: order flow is the messenger, not the rival.</b></p>
<ul>
<li><b>Messenger view</b> (Evans & Lyons): fundamentals feed through order flow to the rate; order flow is the <i>proximate</i> cause, fundamentals the underlying one. Adding order flow makes the interest-differential effect significant again.</li>
<li><b>Love & Payne (2008):</b> roughly ⅓ to ⅔ of the effect of public macro news travels through trading.</li>
<li><b>Rime, Sarno & Sojli (2010):</b> order flow forecasts next-day rates (out-of-sample Sharpe 1.06 vs −1.27 random walk): "votes backed by money, not polls".</li>
</ul>
<p><b>Limits:</b> Evans & Lyons fit is same-day (explains, doesn't forecast); Rime et al. use one year and one platform; if hedging and liquidity trades count as fundamentals, the view is hard to disprove.</p>
<p><b>Summary:</b> fundamentals are what moves currencies; order flow is how the information reaches prices.</p>`,
  },
  {
    id: "t14-disc-3", topics: [14], src: "Disc", type: "open",
    q: `Persistence: are order-flow effects temporary or permanent?`,
    a: `<p><b>It depends on the mechanism, not volume alone.</b> Lyons (2001):</p>
<ul>
<li><b>Payoff (fundamental) information</b> → potentially <b>persistent</b>.</li>
<li><b>Dealer inventory effects</b> → usually <b>temporary</b> (reverse as inventories rebalance).</li>
<li><b>Portfolio-balance effects</b> → potentially <b>persistent</b> (required risk compensation changes).</li>
</ul>
<p><b>Evidence:</b> Berger et al. (2008): link stronger at short horizons, weaker longer, without proving full reversal. Breedon & Vitale (2010): portfolio-balance explains much of it. Froot & Ramadorai (2005): institutional flows correlate with transitory expected-return shocks, not permanent intrinsic-value shocks. Not contradictory: each studies different trading.</p>
<p><b>Limits:</b> institutional flows ≠ all FX trading; the split depends on model assumptions; a lasting change need not mean private information. Long-run, rates re-anchor to PPP.</p>`,
  },
];
