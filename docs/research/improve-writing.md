# Research: improving English prose for the Improve Writing prompt

Researched 2026-10-09. The goal is to find rules for a system prompt that edits short workplace text (Slack messages, PR comments, technical notes), often by non-native writers, without changing meaning or voice. Every claim links to the owner's text. Where the owner's text was closed, the gap is stated.

## 1. ASD-STE100 Simplified Technical English

### Source and status

- The current issue is Issue 9, dated 2025-01-15. The next issue is planned for January 2028 ([STEMG FAQ](https://www.asd-ste100.org/STE_faq.html)).
- The standard is free. The site offers a request form ([Downloads](https://www.asd-ste100.org/STE_downloads.html)), and the full PDF is also hosted on the owner's site ([ASD-STE100 Issue 9 PDF](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf)). The rule numbers below come from that PDF. Page anchors are PDF page numbers.
- STE has 53 writing rules in 9 sections and a dictionary of about 900 approved words, plus about 1,200 words that are not approved, each with alternatives ([About STE](https://www.asd-ste100.org/about_STE.html)).
- Scope: STE "is not intended for general-purpose writing, such as international correspondence", but "short sentences, one topic per sentence, and the use of the active voice" carry over to other writing ([STEMG FAQ](https://www.asd-ste100.org/STE_faq.html)).
- The STEMG's AI white paper (June 2026) warns that AI output can look compliant without being compliant, and that LLMs can "introduce undetected inaccuracies" ([STEMG white paper](https://www.asd-ste100.org/assets/files/WhitePaper-ASD-STE100_and_AI.pdf)).

### Writing rules with limits

| Rule       | Text (Issue 9)                                                                                                                                                    | Source                                                                             |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 1.1 to 1.4 | Use only approved dictionary words, only as the approved part of speech, with the approved meaning and forms                                                      | [p. 45](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf#page=45)     |
| 1.11       | Do not use different technical nouns for the same item                                                                                                            | [p. 57](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf#page=57)     |
| 1.14       | American English spelling unless directed otherwise                                                                                                               | [p. 61](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf#page=61)     |
| 2.1        | Multi-word nouns of no more than three words                                                                                                                      | [p. 63](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf#page=63)     |
| 3.2        | Only infinitive, imperative, simple present, simple past, simple future, and past participle as adjective                                                         | [p. 67](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf#page=67)     |
| 3.4        | No auxiliary verbs to build complex verb constructions                                                                                                            | [p. 67](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf#page=67)     |
| 3.5        | "-ing" forms only as or inside a technical noun                                                                                                                   | [p. 67](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf#page=67)     |
| 3.6        | Active voice. In descriptive writing, passive only when the agent is unknown                                                                                      | [p. 71](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf#page=71)     |
| 3.7        | Use a verb for an action, not a noun ("Before you remove the unit", not "Before the removal of the unit")                                                         | [p. 75](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf#page=75)     |
| 4.1        | Short, clear sentences. In descriptive text, one topic per sentence. Do not write abstract or inaccurate statements                                               | [p. 77-78](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf#page=77)  |
| 4.2        | Do not omit words or use contractions to shorten sentences (no dropped nouns, verbs, subjects, articles)                                                          | [p. 79](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf#page=79)     |
| 4.3        | Use a vertical list for complex text, introduced by a colon                                                                                                       | [p. 80](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf#page=80)     |
| 4.4        | Use connecting words ("and", "but", "then", "thus", "as a result") between related sentences                                                                      | [p. 83](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf#page=83)     |
| 4.5        | Use an article or "this/these" before a noun when applicable. No article for general statements                                                                   | [p. 84](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf#page=84)     |
| 5.1        | Procedures: maximum 20 words per sentence, safety instructions included. Notes may have 25                                                                        | [p. 87-88](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf#page=87)  |
| 5.2        | One instruction per sentence unless actions happen at the same time                                                                                               | [p. 88](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf#page=88)     |
| 5.3        | Instructions in the imperative                                                                                                                                    | [p. 89](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf#page=89)     |
| 5.4        | Put a condition the reader must know first at the start, separated by a comma                                                                                     | [p. 90](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf#page=90)     |
| 6.1, 6.2   | Give information gradually. Use key words to give the text a logical structure                                                                                    | [p. 95-96](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf#page=95)  |
| 6.3        | Descriptive writing: maximum 25 words per sentence                                                                                                                | [p. 98](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf#page=98)     |
| 6.4 to 6.6 | Paragraphs group related information, one topic each, no more than six sentences                                                                                  | [p. 99-101](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf#page=99) |
| 8.1        | All standard punctuation except the semicolon                                                                                                                     | [p. 108](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf#page=108)   |
| 8.4 to 8.7 | Word count: a colon in a vertical list ends a sentence. Parenthetical text, numbers with units, identifiers, quoted text, and proper nouns each count as one word | [p. 108](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf#page=108)   |
| 9.3        | No phrasal verbs ("extinguish", not "put out")                                                                                                                    | [p. 121](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf#page=121)   |
| 9.4        | Use the same terminology and wording each time the same context occurs                                                                                            | [p. 122](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf#page=122)   |

### Fit for casual workplace writing

These rules transfer: one topic per sentence (4.1), no dropped articles or subjects (4.2, 4.5), condition first (5.4), verbs over nominalizations (3.7), noun clusters of three words or fewer (2.1), one term per thing (1.11, 9.4), vertical lists for many items (4.3), and connecting words (4.4).

These rules are too rigid:

- The controlled dictionary (1.1 to 1.4). Its approved meanings rule out ordinary usage. "Check" is approved only as a noun, so "Check the laptop battery" must become "Do a check of the laptop battery" ([p. 75](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf#page=75)).
- The tense limits (3.2), the "-ing" ban (3.5), and the phrasal verb ban (9.3).
- The ban on contractions (4.2) and on semicolons (8.1).
- Fixed caps: 20 or 25 words, six sentences per paragraph. The spec gives no research basis for these numbers. Its only reason is that long sentences "are not easy to understand" and that descriptive text "is more complex than procedural text" ([p. 87](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf#page=87), [p. 98](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf#page=98)).
- STE expects a C1-level writer with domain knowledge ([STEMG FAQ](https://www.asd-ste100.org/STE_faq.html)), which is the opposite of an automatic rewrite.

## 2. Plain language guidelines

### US Federal Plain Language Guidelines

The guidelines now live on digital.gov, adapted from PlainLanguage.gov ([digital.gov guide](https://digital.gov/guides/plain-language)). The original pages, with their sources, are archived in [GSA/plainlanguage.gov](https://github.com/GSA/plainlanguage.gov).

- Write for your audience. Plain language does not mean "dumb down" ([Principles](https://digital.gov/guides/plain-language/principles)).
- One idea per sentence. Break up sentences "loaded with dependent clauses and exceptions" ([Clear and short](https://digital.gov/guides/plain-language/writing/clear-short)). No numeric sentence limit is given.
- Paragraphs: "no more than 150 words in three to eight sentences", never over 250. Vary paragraph length, because uniform sizes read as choppy. One topic per paragraph, starting with a topic sentence ([Clear and short](https://digital.gov/guides/plain-language/writing/clear-short)).
- Active voice, because it "makes it clear who should do what". Passive can fit when there is no actor ([Writing](https://digital.gov/guides/plain-language/writing)).
- Present tense where possible ([Writing](https://digital.gov/guides/plain-language/writing)).
- Avoid hidden verbs (nominalizations) such as "conduct an analysis of" ([Writing](https://digital.gov/guides/plain-language/writing)).
- Cut unneeded words, excess modifiers (really, very, quite, totally), and doublets ("cease and desist") ([Short and simple](https://digital.gov/guides/plain-language/principles/short-simple)).
- Use one term per concept. Synonyms for variety "can decrease clarity" ([Short and simple](https://digital.gov/guides/plain-language/principles/short-simple)).
- Avoid noun strings longer than three words, and replace wordy prepositional phrases ("in order to", "a number of") ([Style](https://digital.gov/guides/plain-language/writing/style)).
- Use positive language. Avoid double negatives, "exceptions to exceptions", and slashes such as "and/or". Write "for example" instead of "e.g." ([Style](https://digital.gov/guides/plain-language/writing/style)).
- Put the most important information first ([Organize](https://digital.gov/guides/plain-language/principles/organize)). Put the main idea before exceptions and conditions, unless the condition is a few words long and reading it first avoids misleading the reader ([archived guideline](https://github.com/GSA/plainlanguage.gov/blob/main/_pages/guidelines/organize/place-the-main-idea-before-exceptions-and-conditions.md)).
- Keep subject, verb, and object close together ([archived guideline](https://github.com/GSA/plainlanguage.gov/blob/main/_pages/guidelines/concise/keep-the-subject-verb-and-object-close-together.md)).
- Use "you" and other pronouns to address the reader ([archived guideline](https://github.com/GSA/plainlanguage.gov/blob/main/_pages/guidelines/audience/address-the-user.md)).
- Use contractions "wherever they sound natural", not everywhere ([archived guideline](https://github.com/GSA/plainlanguage.gov/blob/main/_pages/guidelines/conversational/use-contractions.md)).
- Prefer familiar words. The list maps "utilize" to "use", "commence" to "begin" or "start", and "in order to" to "to" ([archived guideline](https://github.com/GSA/plainlanguage.gov/blob/main/_pages/guidelines/words/use-simple-words-phrases.md)).
- Technical terms are not jargon when the audience needs them. Jargon is language "used to impress, rather than to inform" ([Avoid jargon](https://digital.gov/guides/plain-language/principles/avoid-jargon)).
- Lists: use a lead-in sentence and keep items parallel ([Lists](https://digital.gov/guides/plain-language/design/lists)).

### UK GOV.UK style guide and GDS content guidance

The old "Writing for GOV.UK" page now redirects to [Writing to GOV.UK standards](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/).

- Split sentences over 25 words. Paragraphs have at most 5 sentences ([Clear language](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/)). The A to Z says the same thing more softly: "Check sentences with more than 25 words to see if you can split them" ([A to Z, sentence length](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/style-guides/a-to-z-style-guide/)).
- Plain English helps specialists too, because they want to understand quickly ([Clear language](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/)).
- Use short words ("buy", not "purchase"). Words ending in "-ion" and "-ment" make sentences longer ([Clear language](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/)).
- Use positive contractions such as "you'll". Avoid negative ones ("can't", "don't") because readers misread them, and avoid "should've" and similar forms ([Clear language](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/)).
- Active voice, with exceptions when the outcome matters more than the agent ([Clear language](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/)).
- Write conversationally, address the user as "you", and drop "please" and "please note" ([Right tone](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/right-tone/)).
- Frontload: put the most important information first. Headings are descriptive and frontloaded, and not phrased as questions ([Clear structure](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-structure/)).
- Bullets need a lead-in line and more than one bullet, with one sentence per bullet ([A to Z, bullet points](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/style-guides/a-to-z-style-guide/)).
- No semicolons. Write "for example" in place of "eg", and rewrite to avoid "ie". "Words to avoid" lists buzzwords and metaphors such as "leverage", "deliver", "going forward", and "in order to". "Deploy" is exempt for software ([A to Z](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/style-guides/a-to-z-style-guide/)).

### ISO 24495-1:2023

The full text is paywalled (CHF 135, 14 pages). ISO's online preview sits behind a bot check and could not be read. The public abstract says the standard covers documents that are mainly text, applies to technical writing, and gives examples only in English ([ISO 24495-1](https://committee.iso.org/standard/78907.html)).

The International Plain Language Federation started the project. It lists the four governing principles ([IPLF](https://www.iplfederation.org/iso-standard/)):

1. Relevant: readers get what they need.
2. Findable: readers can easily find what they need.
3. Understandable: readers can easily understand what they find.
4. Usable: readers can easily use the information.

The IPLF definition says plain language is wording, structure, and design clear enough that intended readers can find, understand, and use the information ([IPLF definition](https://www.iplfederation.org/plain-language/)). The clause-level guidelines under "understandable" were not available to check.

## 3. What rule-based checkers check

### LanguageTool

The core categories are defined in [`Categories.java`](https://github.com/languagetool-org/languagetool/blob/master/languagetool-core/src/main/java/org/languagetool/rules/Categories.java): CASING, COMPOUNDING, GRAMMAR, TYPOS, PUNCTUATION, TYPOGRAPHY (dashes, quotes), CONFUSED_WORDS ("there" and "their"), REPETITIONS, REDUNDANCY, REPETITIONS_STYLE, STYLE ("overly verbose wording"), PLAIN_ENGLISH, GENDER_NEUTRALITY, SEMANTICS (logic and consistency), COLLOQUIALISMS, REGIONALISMS, FALSE_FRIENDS ("words easily confused by language learners"), WIKIPEDIA, and MISC.

Rule counts from the English XML files, counted with a script on 2026-10-09:

| Category       | Rules | Default | File                                                                                                                                                                  |
| -------------- | ----- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GRAMMAR        | 2,174 | on      | [grammar.xml](https://github.com/languagetool-org/languagetool/blob/master/languagetool-language-modules/en/src/main/resources/org/languagetool/rules/en/grammar.xml) |
| CONFUSED_WORDS | 1,236 | on      | grammar.xml                                                                                                                                                           |
| TYPOS          | 1,014 | on      | grammar.xml                                                                                                                                                           |
| STYLE          | 265   | on      | [style.xml](https://github.com/languagetool-org/languagetool/blob/master/languagetool-language-modules/en/src/main/resources/org/languagetool/rules/en/style.xml)     |
| COLLOCATIONS   | 247   | on      | grammar.xml                                                                                                                                                           |
| PROPER_NOUNS   | 228   | on      | grammar.xml                                                                                                                                                           |
| PUNCTUATION    | 184   | on      | grammar.xml                                                                                                                                                           |
| COMPOUNDING    | 181   | on      | grammar.xml                                                                                                                                                           |
| REDUNDANCY     | 159   | on      | style.xml                                                                                                                                                             |
| TYPOGRAPHY     | 107   | on      | grammar.xml                                                                                                                                                           |
| PLAIN_ENGLISH  | 106   | off     | style.xml                                                                                                                                                             |
| CASING         | 76    | on      | grammar.xml                                                                                                                                                           |
| SEMANTICS      | 76    | on      | grammar.xml                                                                                                                                                           |

The English Java rules add a spell checker per variant, an "a" versus "an" rule, repeated words, unpaired brackets and quotes, word coherency, and false friend rules for German, French, Spanish, and Dutch speakers ([rules/en](https://github.com/languagetool-org/languagetool/tree/master/languagetool-language-modules/en/src/main/java/org/languagetool/rules/en)). The long sentence rule fires at 40 words and is tagged "picky" ([English.java](https://github.com/languagetool-org/languagetool/blob/master/languagetool-language-modules/en/src/main/java/org/languagetool/language/English.java), [LongSentenceRule.java](https://github.com/languagetool-org/languagetool/blob/master/languagetool-core/src/main/java/org/languagetool/rules/LongSentenceRule.java)). The phrase lists [`wordiness.txt`](https://github.com/languagetool-org/languagetool/blob/master/languagetool-language-modules/en/src/main/resources/org/languagetool/rules/en/wordiness.txt) and [`redundancies.txt`](https://github.com/languagetool-org/languagetool/blob/master/languagetool-language-modules/en/src/main/resources/org/languagetool/rules/en/redundancies.txt) hold about 690 and 700 entries ("a number of" becomes "several", "absolutely essential" becomes "essential").

Most rules, and the ones on by default, target correctness: grammar, confused words, typos, and collocations. Plain English rewrites are off by default.

### Vale and its common styles

Vale rules are YAML files built on a fixed set of check types: existence, substitution, occurrence, repetition, consistency, conditional, capitalization, metric, readability, spelling, sequence, and script ([Vale docs](https://docs.vale.sh/checks/existence)).

- [Microsoft](https://github.com/errata-ai/Microsoft/tree/master/Microsoft) includes Passive, Wordiness, Adverbs, Contractions (enforces "don't" over "do not"), SentenceLength (suggestion over 30 words), Semicolon, Negative, Jargon, Gender, GenderBias, BiasFree, Foreign, Vocab, We, and FirstPerson.
- [Google](https://github.com/errata-ai/Google/tree/master/Google) includes Passive, Contractions, Will (future tense), Latin (e.g., i.e.), ExcessiveClaims, Slang, Gender, GenderBias, Semicolons, EmDash, Exclamation, and Anthropomorphism.
- [write-good](https://github.com/errata-ai/write-good/tree/master/write-good) includes Passive, Weasel, TooWordy, Illusions (repeated word), Cliches, So (sentence starting with "So"), ThereIs, and E-Prime (flags every form of "to be").
- [proselint (Vale port)](https://github.com/errata-ai/proselint/tree/master/proselint) includes Hedging, Needless, Very, Cliches, CorporateSpeak, Jargon, Malapropisms, Skunked, Nonwords, Oxymorons, Uncomparables, Apologizing, and GenderBias.

Passive voice detection in both Microsoft and Google is a regular expression: a form of "be" followed by a word ending in "-ed" or an irregular participle. Both styles set it to "suggestion" ([Microsoft Passive](https://github.com/errata-ai/Microsoft/blob/master/Microsoft/Passive.yml), [Google Passive](https://github.com/errata-ai/Google/blob/master/Google/Passive.yml)).

### proselint

The [proselint README](https://github.com/amperser/proselint/blob/main/README.md) lists checks for annotations left in text, archaisms, clichés, hedging, corporate speak and other industry jargon, lexical illusions (repeated words), malapropisms, mixed metaphors, needless variants, nonwords, oxymorons, redundancy, skunked terms, spelling patterns, typography, uncomparables ("very unique"), weasel words, and sexist or LGBTQ+ terminology. It also has opt-in "restricted" checks that limit writing to elementary-school words or the top 1,000 words.

### Google developer documentation style guide

- Active voice in general. Passive is fine to emphasize the object, to de-emphasize the actor, or when the actor does not matter ([Voice](https://developers.google.com/style/voice)).
- Use common contractions, including negative ones, because "it's easy for a reader to miss the word not". No three-word or nonstandard contractions ([Contractions](https://developers.google.com/style/contractions)).
- Present tense for general behavior. "Will" only for something that happens later ([Tense](https://developers.google.com/style/tense)).
- Put the condition or goal before the instruction ("To delete the entire document, click Delete") ([Sentence structure](https://developers.google.com/style/sentence-structure)).
- For a global audience ([Global audience](https://developers.google.com/style/translation)):
  - Use simple words and short sentences.
  - Avoid phrasal verbs where a simpler verb exists.
  - Use at most two nouns as modifiers of another noun.
  - Put "only" next to the word it modifies.
  - Keep helper words ("that", "then", "of") and relative pronouns.
  - Make pronoun antecedents clear.
  - Use one term per concept.
  - Use subject, verb, object order.
- Tone is conversational but not slang. Avoid "please", "simply", "it's easy", internet abbreviations, and exclamation marks ([Voice and tone](https://developers.google.com/style/tone)).
- Inclusive language: avoid gendered terms ("person-hours", not "man-hours") and ableist terms ("sanity check", "crazy", "cripple"). Avoid figurative language and metaphors ([Inclusive documentation](https://developers.google.com/style/inclusive-documentation)).

### Microsoft Writing Style Guide

- Use simple words with one clear meaning ("because", not "since"), and cut adverbs such as "quite", "very", and "easily". Choose verbs over weak "be/have/make/do" constructions. Use one term per concept ([Simple words, concise sentences](https://learn.microsoft.com/en-us/style-guide/word-choice/use-simple-words-concise-sentences)).
- Use common contractions for a friendly tone. Avoid ambiguous ones like "there'd" and "it'll" ([Contractions](https://learn.microsoft.com/en-us/style-guide/word-choice/use-contractions)).
- Present tense and indicative mood. Avoid the subjunctive. Passive is acceptable to avoid blaming the reader or to avoid an awkward sentence. Subject and verb must agree ([Verbs](https://learn.microsoft.com/en-us/style-guide/grammar/verbs)).
- For global readers ([Global writing tips](https://learn.microsoft.com/en-us/style-guide/global-communications/writing-tips)):
  - Rewrite sentences that hold "more than a few commas".
  - Keep "that", "who", and articles.
  - Avoid idioms and modifier stacks, and place "only" carefully.
  - Avoid linking more than three clauses with "and", "or", or "but".
  - Limit sentence fragments.
- Get to the point fast and "write like you speak" ([Top 10 tips](https://learn.microsoft.com/en-us/style-guide/top-10-tips-style-voice), [Brand voice](https://learn.microsoft.com/en-us/style-guide/brand-voice-above-all-simple-human)).
- Use no generic "he" or "she". Rewrite with "you", a plural, or a role, or use singular "they" ([Bias-free communication](https://learn.microsoft.com/en-us/style-guide/bias-free-communication)).

### Consolidated check categories

| Category                              | Owners that check it                                                                                 |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Spelling and typos                    | LanguageTool TYPOS, proselint spelling, Google Spelling                                              |
| Grammar and agreement                 | LanguageTool GRAMMAR, [Microsoft Verbs](https://learn.microsoft.com/en-us/style-guide/grammar/verbs) |
| Articles, "a" versus "an"             | LanguageTool AvsAnRule, STE 4.5, Microsoft global tips                                               |
| Commonly confused words, malapropisms | LanguageTool CONFUSED_WORDS, proselint malapropisms                                                  |
| Collocations and prepositions         | LanguageTool COLLOCATIONS                                                                            |
| False friends for L2 writers          | LanguageTool FALSE_FRIENDS                                                                           |
| Punctuation and typography            | LanguageTool PUNCTUATION, TYPOGRAPHY                                                                 |
| Casing and compounding                | LanguageTool CASING, COMPOUNDING                                                                     |
| Repeated words                        | LanguageTool REPETITIONS, write-good Illusions                                                       |
| Redundancy and doublets               | LanguageTool REDUNDANCY, proselint redundancy, Federal doublets                                      |
| Wordiness                             | LanguageTool wordiness list, write-good TooWordy, Microsoft Wordiness                                |
| Weasel words and intensifiers         | write-good Weasel, proselint Very, Microsoft Adverbs                                                 |
| Hedging                               | proselint Hedging                                                                                    |
| Nominalizations                       | Federal hidden verbs, STE 3.7, GOV.UK "-ion/-ment"                                                   |
| Passive voice                         | Microsoft, Google, write-good Passive (all suggestions)                                              |
| Sentence length                       | LanguageTool (40), Microsoft (30), GOV.UK (25), STE (20/25)                                          |
| Jargon, buzzwords, clichés            | proselint CorporateSpeak and Cliches, GOV.UK Words to avoid                                          |
| Inclusive language                    | Google, Microsoft BiasFree, proselint GenderBias                                                     |
| Consistency of terms                  | STE 1.11 and 9.4, Federal, Google, Microsoft                                                         |

## 4. Readability and sentence length

- The Flesch Reading Ease formula is `206.835 - 1.015 x ASL - 84.6 x ASW`, where ASL is average sentence length and ASW is average syllables per word. Flesch-Kincaid Grade Level is `0.39 x ASL + 11.8 x ASW - 15.59`. Microsoft recommends 60 to 70 and grade 7 to 8 ([Microsoft Support](https://support.microsoft.com/en-us/office/get-your-document-s-readability-and-level-statistics-85b4969e-e80a-4777-8dd3-f7fc3c8b3fd2)). Flesch's original 1948 paper is paywalled and was not read ([doi:10.1037/h0057532](https://doi.org/10.1037/h0057532)).
- The Kincaid formulas were refit on 531 Navy enlisted personnel reading 18 passages from Navy training manuals ([Kincaid et al. 1975, Research Branch Report 8-75](https://stars.library.ucf.edu/istlibrary/56)). The data comes from adults reading procedural material, not workplace chat.
- Formulas measure only sentence length and word length. The SEC Plain English Handbook warns that "no formula takes into account the content of the document". That quote is taken from the GSA-hosted reprint of Mazur (2000), because sec.gov blocked the download ([GSA reprint](https://github.com/GSA/plainlanguage.gov/blob/main/_pages/resources/articles/revisiting-plain-language.md)). The same article says plain language groups argued against formulas from 1980 on.
- Redish (2000) argues that formulas were built on children's school texts and miss what drives adult comprehension of technical documents ([doi:10.1145/344599.344637](https://doi.org/10.1145/344599.344637), paywalled, read via abstract only).
- Evidence for STE: 175 aircraft technicians reading 16 workcards understood Simplified English versions significantly better, most of all on difficult cards and among non-native speakers ([Chervak, Drury, Ouellette 1996](https://researchconnect.buffalo.edu/en/publications/simplified-english-for-aircraft-workcards/)). This tests the whole STE package, not the 20 and 25 word caps alone. No owner source found ties those exact numbers to a study.
- Reader preference: 376 respondents chose the plain version about 80% of the time, and preference rose with education. Passive-to-active items scored lowest, at 57% to 72%, compared with 78% to 97% for wordy-to-plain items ([Trudeau 2012, pp. 141-143](https://scribes.org/wp-content/uploads/2022/12/Scribes_vol14_07_The_Public_Speaks.pdf)). Cutting wordiness earns more than flipping voice.
- In short, sources agree on splitting long sentences but disagree on the threshold: 20 or 25 (STE), 25 (GOV.UK), 30 (Microsoft Vale), 40 (LanguageTool). Treat 25 as a prompt to look, not a cap.

## 5. Prompting LLMs for copy editing (Anthropic docs)

All from [Prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices) unless noted.

- Be clear and explicit. Treat Claude as "a brilliant but new employee who lacks context on your norms". State the output format and constraints ([Be clear and direct](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices#be-clear-and-direct)).
- Give the reason behind a rule. "Claude is smart enough to generalize from the explanation." The example replaces "NEVER use ellipses" with the reason, a text-to-speech engine ([Add context](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices#add-context-to-improve-performance)).
- Use examples. Make them relevant, diverse, and wrapped in `<example>` tags, three to five of them ([Use examples](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices#use-examples-effectively)).
- Put the input in its own XML tags, apart from the instructions ([XML tags](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices#structure-prompts-with-xml-tags)).
- Set a role in the system prompt. Even one sentence helps ([Give Claude a role](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices#give-claude-a-role)).
- Say what to do, not what to avoid ("smoothly flowing prose paragraphs", not "do not use markdown"). Match the prompt's own formatting to the output you want ([Control the format](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices#control-the-format-of-responses)).
- Positive examples of the desired style "tend to be more effective than negative examples or instructions that tell the model what not to do" ([Sonnet 5](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-sonnet-5#response-length-and-verbosity), [Opus 5](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-opus-5#user-facing-progress-updates)).
- Sonnet 5 follows instructions literally and "does not silently generalize an instruction from one item to another". State the scope of each rule ([Sonnet 5](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-sonnet-5#more-literal-instruction-following)).
- Sonnet 5 rejects non-default `temperature`, `top_p`, and `top_k` with a 400. Steer tone with the system prompt instead ([Sonnet 5](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-sonnet-5#tone-and-writing-style)).
- Opus 5 "can also expand the scope of a task". For narrow tasks, constrain scope with "Deliver what was asked, at the scope intended" ([Opus 5](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-opus-5#task-scope-and-over-verification)). The general page gives the same advice for code: "Only make changes that are directly requested or clearly necessary" ([Overeagerness](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices#overeagerness)). These are the closest first-party guidance against over-editing. No first-party page addresses copy editing directly, and the old prompt-library pages ("Prose polisher", "Grammar genie") now redirect to the best-practices page.

## Implications for the prompt

### Rules to include, ranked

1. **Meaning first, and no new facts.** Every claim survives, and nothing is added: no numbers, causes, or opinions the author did not write. The STEMG warns that LLMs introduce "undetected inaccuracies" ([white paper](https://www.asd-ste100.org/assets/files/WhitePaper-ASD-STE100_and_AI.pdf)). Opus 5 tends to widen scope ([Opus 5](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-opus-5#task-scope-and-over-verification)).
2. **Fix correctness errors.** Spelling, grammar, subject-verb agreement, "a/an", confused words, wrong prepositions and collocations, punctuation, casing, and repeated words. These are the largest, default-on LanguageTool categories ([section 3](#languagetool)).
3. **Fix non-native patterns that harm clarity.** Restore dropped articles, subjects, and verbs (STE 4.2, 4.5). Keep "that" and relative pronouns ([Google](https://developers.google.com/style/translation), [Microsoft](https://learn.microsoft.com/en-us/style-guide/global-communications/writing-tips)). Fix false friends ([LanguageTool FALSE_FRIENDS](https://github.com/languagetool-org/languagetool/blob/master/languagetool-core/src/main/java/org/languagetool/rules/Categories.java)).
4. **Split sentences that carry more than one idea.** Look closely past about 25 words, but treat that as a signal, not a cap (STE 4.1 and 6.3, [GOV.UK](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/), [Federal](https://digital.gov/guides/plain-language/writing/clear-short)). Rewrite sentences with many commas or more than three joined clauses ([Microsoft](https://learn.microsoft.com/en-us/style-guide/global-communications/writing-tips)).
5. **Cut wordy phrases and redundancy.** "in order to" becomes "to", "a number of" becomes "some", and doublets lose one half ([Federal](https://digital.gov/guides/plain-language/writing/style), [LanguageTool lists](https://github.com/languagetool-org/languagetool/blob/master/languagetool-language-modules/en/src/main/resources/org/languagetool/rules/en/wordiness.txt)). This is the change readers rewarded most ([Trudeau 2012](https://scribes.org/wp-content/uploads/2022/12/Scribes_vol14_07_The_Public_Speaks.pdf)).
6. **Turn hidden verbs back into verbs.** "conduct an analysis of" becomes "analyze" (STE 3.7, [Federal](https://digital.gov/guides/plain-language/writing)).
7. **Cut empty intensifiers, and keep hedges that carry meaning.** Drop "really", "very", "quite", "basically" ([Federal](https://digital.gov/guides/plain-language/principles/short-simple), [Microsoft](https://learn.microsoft.com/en-us/style-guide/word-choice/use-simple-words-concise-sentences)). Keep "I think" or "probably" when they state the author's real confidence.
8. **Use active voice when the actor is known and matters.** Keep passive when the actor is unknown or irrelevant, or when naming the actor would assign blame (STE 3.6, [Google](https://developers.google.com/style/voice), [Microsoft](https://learn.microsoft.com/en-us/style-guide/grammar/verbs)). Rank it below wordiness, given the weaker reader preference ([Trudeau 2012](https://scribes.org/wp-content/uploads/2022/12/Scribes_vol14_07_The_Public_Speaks.pdf)).
9. **Fix ambiguity.** Move "only" next to the word it modifies, replace an ambiguous "it" or "this" with its noun, turn "and/or" into "or" or "both", and untangle double negatives ([Google](https://developers.google.com/style/translation), [Federal](https://digital.gov/guides/plain-language/writing/style)).
10. **One term per thing.** Do not cycle synonyms (STE 1.11 and 9.4, [Federal](https://digital.gov/guides/plain-language/principles/short-simple)).
11. **Break noun stacks over three words.** Write "the handler that refreshes the token" (STE 2.1, [Federal](https://digital.gov/guides/plain-language/writing/style), [Google](https://developers.google.com/style/translation)).
12. **Put conditions before instructions, and keep subject and verb close.** Write "To X, do Y" (STE 5.4, [Google](https://developers.google.com/style/sentence-structure), [Federal](https://github.com/GSA/plainlanguage.gov/blob/main/_pages/guidelines/concise/keep-the-subject-verb-and-object-close-together.md)). Do not reorder whole messages.
13. **Use parallel lists.** Turn three or more parallel items or steps into a list with a lead-in, and make the items parallel (STE 4.3, [Federal](https://digital.gov/guides/plain-language/design/lists), [GOV.UK](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/style-guides/a-to-z-style-guide/)).
14. **Prompt construction.** State each rule with its reason, in positive form, and give its scope. Add three to five `<example>` pairs, including one where clean input comes back unchanged and one with non-native errors. Keep the input in tags ([Anthropic](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices#add-context-to-improve-performance)).

### Leave out, and why

- **The STE dictionary and its word-level rules** (approved words, one part of speech, the "-ing" ban, tense limits, phrasal verb ban). They turn "check the logs" into "do a check of the logs" ([STE p. 75](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf#page=75)), and STE is not meant for correspondence ([FAQ](https://www.asd-ste100.org/STE_faq.html)).
- **Hard numeric caps** on sentence or paragraph length. The thresholds disagree (20 to 40 words), no owner ties them to a study, and formulas ignore content ([section 4](#4-readability-and-sentence-length)). Short Slack messages rarely reach them anyway.
- **Readability scores as a target.** They reward short words and sentences, not understanding ([Redish 2000](https://doi.org/10.1145/344599.344637)).
- **A contraction policy.** Sources conflict. STE bans contractions, GOV.UK bans negative ones, and Google, Microsoft, and the Federal guidelines encourage them ([STE 4.2](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf#page=79), [GOV.UK](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/style-guides/a-to-z-style-guide/), [Google](https://developers.google.com/style/contractions)). Keep whatever the author used.
- **Switching to "you", imperative mood, or present tense.** These are rules for documentation aimed at a reader. Applied to a Slack message, they change who is speaking and what the sentence does.
- **Banning idioms, metaphors, and phrasal verbs.** Google and Microsoft give these rules for translated or global docs ([Google](https://developers.google.com/style/translation)). In chat between engineers they are the author's voice.
- **Government "words to avoid" lists applied blindly.** "Deploy", "key", "land", and "leverage" have literal software meanings, and GOV.UK itself exempts "deploy" for software ([A to Z](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/style-guides/a-to-z-style-guide/)).
- **Opinion checks from linters.** E-Prime, sentences starting with "So" or "But", "please", and exclamation marks ([write-good](https://github.com/errata-ai/write-good/tree/master/write-good), [proselint](https://github.com/amperser/proselint/blob/main/README.md)) flatten casual tone and are not errors.
- **Inclusive-language rewrites by default.** Google and Microsoft require them in published docs ([Google](https://developers.google.com/style/inclusive-documentation), [Microsoft](https://learn.microsoft.com/en-us/style-guide/bias-free-communication)). In a personal message they change the author's words. At most, replace a generic "he" with "they".
- **Headings, tables, and semicolon bans.** Slack does not render headings or tables (see the repo `CLAUDE.md`). The semicolon ban (STE 8.1, GOV.UK) is a house rule, not a correctness fix.

### Tensions with the current prompt

The current prompt is [`src/commands/improve-writing/prompt.ts`](../../src/commands/improve-writing/prompt.ts).

- "'runs quickly' becomes 'is fast' or the number" and "'significantly improves' becomes the measured delta" invite the model to invent a number. That breaks rule 1. Cut the adverb, or keep it, but never supply a figure.
- "If a sentence would fit unchanged in a different project's docs ... Cut it" deletes content, which conflicts with "every point in the source survives".
- The rule ranking "AI tells" above voice has no support in these sources. The sources put meaning first. Plain language authors quoted in Mazur (2000) call their advice "guidelines, not rules" that need judgment ([GSA reprint](https://github.com/GSA/plainlanguage.gov/blob/main/_pages/resources/articles/revisiting-plain-language.md)).
