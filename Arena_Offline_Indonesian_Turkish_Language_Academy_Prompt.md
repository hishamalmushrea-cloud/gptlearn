# Arena.ai Agent Mode — Master Build Prompt
## Offline Indonesian + Turkish Language Academy for Arabic Speakers

> **Role:** You are an autonomous senior product, Android, UX/UI, language-learning, content, QA, and on-device AI engineering team.
>
> **Mission:** Build a production-quality Android application from scratch that teaches **Indonesian (Bahasa Indonesia)** and **Turkish (Türkçe)** to Arabic-speaking users from absolute beginner **A0** through **C2**, with an optional post-C2 professional/native-like track. The app must be **Offline-first** and remain genuinely useful with airplane mode enabled.

---

# 1. Non-negotiable product vision

Do NOT build a simple vocabulary app, translator, or collection of static lessons.

Build an **Offline Language Academy** combining:

- structured courses
- vocabulary
- phrases and chunks
- grammar
- pronunciation
- listening
- speaking practice
- reading
- writing
- dialogues
- realistic scenarios
- travel language
- business/sales language
- customer interaction language
- everyday spoken language
- formal language
- useful colloquial language
- cultural notes
- dictionary
- local search
- spaced repetition
- active recall
- adaptive review
- personalized learning plans
- progress tracking
- tests
- role-play
- optional on-device AI
- downloadable/versioned content packs
- strong privacy
- accessibility
- excellent Arabic RTL UX

The application must be architected so additional languages can be added later without rebuilding the core platform.

---

# 2. Arena Agent Mode operating rules

You are working as an autonomous coding agent.

## Before coding

1. Inspect the repository/workspace.
2. Detect whether an Android project already exists.
3. Inspect available files and existing configuration.
4. Check current stable Android/Kotlin/Compose/library documentation when necessary.
5. Do not invent APIs, library versions, or Gradle syntax.
6. Produce a concise implementation plan.
7. Create or update a project-level `AGENTS.md` containing the essential project rules.
8. Create a `docs/` directory containing architecture and content documentation.

## While coding

- Work in small, verifiable phases.
- Keep the project buildable.
- Prefer working code over pseudo-code.
- Do not create fake buttons that do nothing.
- Do not fill the application with Lorem Ipsum or meaningless placeholder data.
- Do not claim a feature is implemented when it is not.
- If a feature depends on an asset/model that is not available, implement a clean abstraction and a graceful fallback.
- Never expose secrets/API keys in the app.
- Never make a cloud API mandatory for core learning.
- Preserve user progress during migrations and content updates.
- Add tests for important business logic.
- After each major phase, run the appropriate build/tests and fix failures before continuing.

## If Arena has a token/output limitation

Continue in subsequent agent turns/phases without discarding requirements.

Maintain:
- `docs/IMPLEMENTATION_STATUS.md`
- `docs/ROADMAP.md`
- `docs/CONTENT_STATUS.md`

At the end of every phase, update these files.

---

# 3. Required technology direction

Use native Android unless there is a compelling technical reason not to.

Preferred stack:

- Kotlin
- Jetpack Compose
- Material 3
- Navigation Compose
- ViewModel
- Coroutines
- Flow / StateFlow
- Room
- DataStore
- Hilt
- WorkManager where genuinely appropriate
- Android testing frameworks
- Kotlin serialization or another robust local serialization approach

Architecture:

**Clean Architecture + feature-oriented modularization**, or an equally strong architecture.

Separate:

- UI
- Domain
- Data
- Database
- Content
- Audio
- Learning Engine
- Review Engine
- Search
- Progress
- Speech
- AI abstraction
- Settings
- Optional synchronization

Do not put business logic inside Composables.

---

# 4. Offline-first is mandatory

The core application must work with:

- Wi-Fi disabled
- mobile data disabled
- airplane mode
- no SIM
- no server
- no cloud account

Offline functionality must include:

- opening the app
- navigating
- courses
- lessons
- vocabulary
- grammar
- local dictionary
- local search
- local audio
- dialogues
- exercises
- tests
- progress
- favorites
- review
- learning plans
- statistics
- saved notes if implemented
- core pronunciation practice where supported

Online functionality, if added later, must be optional.

Never design the app so a network failure blocks learning.

---

# 5. Language switching

The app supports two independently tracked languages:

🇮🇩 Indonesian  
🇹🇷 Turkish

The user can:

- learn one language
- learn both
- switch instantly between languages
- assign different daily goals
- have separate progress
- have separate review queues
- have separate levels
- use a combined dual-language mode

Example:

Indonesian: A2 — 51%  
Turkish: A1 — 24%

Add a highly visible language switcher.

---

# 6. Dual Language Mode

Provide a mode where the user studies both languages in one session.

Examples:

- 70% Indonesian / 30% Turkish
- 50% / 50%
- 20 minutes Indonesian + 20 minutes Turkish
- alternating days

The adaptive engine must keep the two learning histories separate.

Also provide a comparison feature:

Arabic:
"أريد شراء هذا."

Indonesian:
...

Turkish:
...

With:
- pronunciation
- grammar notes
- word order
- natural vs literal translation
- context

---

# 7. Course levels

Required:

- A0 — Absolute Beginner
- A1
- A2
- B1
- B2
- C1
- C2
- Optional Professional / Native-like track

Each level:

Course
→ Units
→ Modules
→ Lessons
→ Practice
→ Review
→ Assessment

Do not force the user to complete everything sequentially if the placement system proves prior knowledge.

---

# 8. Placement test

Onboarding:

1. Welcome
2. Choose one or both languages
3. Ask learning goals
4. Ask daily time
5. Optional placement test
6. Vocabulary assessment
7. Grammar assessment
8. Reading assessment
9. Listening assessment where available
10. Calculate recommended starting point

Allow manual "Start from zero."

Do not pretend the test is scientifically certified unless it actually is.

---

# 9. Home dashboard

Create a clean professional dashboard.

Suggested sections:

- Continue Learning
- Today's Goal
- Review Due
- Quick Practice
- Vocabulary
- Grammar
- Listening
- Speaking
- Reading
- Writing
- Conversations
- Dictionary
- Search
- Travel
- Business / Sales
- Favorites
- Weak Areas
- Progress

Keep the interface simple despite the depth of the product.

---

# 10. Learning science

Implement the following concepts where appropriate:

- Spaced Repetition
- Active Recall
- Retrieval Practice
- Interleaving
- Comprehensible Input
- Shadowing
- Deliberate Practice
- Error-based review
- Frequency-based vocabulary
- Progressive difficulty

Do not turn these into marketing labels only. They must affect actual behavior.

---

# 11. Learning Engine

Create a domain-level `LearningEngine`.

It should decide or recommend:

- what to learn next
- what to review
- what is weak
- what is strong
- which skill needs attention
- when to repeat a lesson
- how difficult the next exercise should be
- how to balance the two languages

Track at least:

- exposure
- attempts
- correct answers
- wrong answers
- response time
- review intervals
- confidence
- skill
- language
- level
- topic

---

# 12. Spaced Repetition

Create a configurable review system.

Possible states:

- New
- Learning
- Familiar
- Good
- Strong
- Mastered

Possible review actions:

- Again
- Hard
- Good
- Easy

Use a proven or clearly documented algorithmic approach.

Do not hard-code arbitrary review intervals without documenting the reason.

The system must be replaceable later.

---

# 13. Vocabulary system

Create a large extensible local dictionary.

A word record should support:

- language
- lemma
- surface form
- pronunciation
- IPA where useful
- Arabic meaning
- multiple meanings
- part of speech
- CEFR level
- frequency rank where available
- example sentences
- audio
- synonyms
- antonyms
- collocations
- related words
- register
- cultural notes
- grammatical information
- gender/context where linguistically relevant

Add:

- favorites
- personal lists
- review
- learned/mastered state

Do not treat a word as a single translation.

---

# 14. Phrase/chunk learning

Create a first-class phrase system.

Teach complete usable chunks such as:

- greetings
- introductions
- requests
- apologies
- agreement
- disagreement
- shopping
- selling
- bargaining
- hospitality
- travel
- work
- customer service
- phone calls
- messaging
- invitations
- asking for help
- emergencies

Every important phrase can have:

- Arabic
- target language
- natural translation
- literal translation where useful
- pronunciation
- audio
- register
- context
- speaker/audience
- gender distinction when real
- cultural note
- related phrases

---

# 15. "Say it like people actually say it"

Create a signature feature.

For a useful sentence, show:

### Arabic
...

### Literal translation
...

### Natural Indonesian
...

### Natural Turkish
...

### More formal
...

### More casual
...

### When to use it
...

### When NOT to use it
...

Never force literal translations when they sound unnatural.

If there is no direct equivalent, explicitly provide the natural cultural equivalent.

---

# 16. Sales and customer attraction language

Create a substantial **Sales & Customer Interaction** track.

This is especially important.

Include realistic phrases for:

- welcoming customers
- attracting attention
- inviting someone to look
- offering products
- describing products
- asking what they need
- discussing prices
- discounts
- bargaining
- persuasion
- handling hesitation
- handling refusal
- closing a sale
- thanking the customer
- follow-up
- repeat customers
- customer complaints

The intended style is similar in purpose to Arabic expressions such as:

"هلا بالنشاما، هلا برجال الأردن، نورتونا"

"يا هلا وسهلا"

"اتفضلوا، كل شيء ببلاش"

"دكتورة / يا أستاذة، تعالي أقول لك"

"تعالي شوفي الأشياء اللي عندنا"

But do NOT translate these literally if that creates unnatural Indonesian or Turkish.

For every phrase, provide the natural equivalent used in the target culture.

Distinguish when relevant:

- male customer
- female customer
- individual
- group
- older customer
- younger customer
- formal customer
- casual customer
- new customer
- returning customer

---

# 17. Real-world scenarios

Create scenario packs.

Required:

- market
- shop
- mall
- supermarket
- restaurant
- cafe
- hotel
- airport
- taxi
- public transport
- university
- school
- workplace
- job interview
- hospital
- pharmacy
- bank
- embassy
- police
- car rental
- apartment rental
- online shopping
- phone call
- messaging
- social visit
- invitations
- misunderstandings
- apology
- requesting help
- emergencies

Each scenario:

- objective
- key vocabulary
- key phrases
- dialogue
- role play
- exercises
- review
- assessment

---

# 18. Conversations

Build progressive dialogues.

A0/A1:
very short.

A2:
basic everyday conversations.

B1:
natural everyday conversations.

B2:
longer discussions.

C1:
complex discussion.

C2:
advanced nuanced interaction.

Each dialogue should support:

- speaker
- line
- target text
- Arabic translation
- audio
- slow playback
- normal playback
- repeat
- hide translation
- hide target text
- comprehension questions
- vocabulary extraction
- grammar extraction

---

# 19. Role-play

Provide roles such as:

- customer
- shopkeeper
- teacher
- student
- doctor
- waiter
- hotel employee
- taxi driver
- manager
- colleague
- friend
- host
- guest

User can practice either side.

If local AI is unavailable, use structured branching dialogues.

---

# 20. Grammar

Create a full grammar curriculum.

Each rule:

1. Simple Arabic explanation
2. Why it is used
3. Form
4. Examples
5. Natural examples
6. Common Arabic-speaker mistakes
7. Listening example
8. Practice
9. Mini test
10. Review

## Indonesian grammar coverage

Include, where relevant:

- pronouns
- basic sentence structure
- negation
- questions
- possession
- classifiers where useful
- time expressions
- prepositions
- verbs
- adjectives
- reduplication
- affixes
- me-
- ber-
- di-
- ter-
- pe-
- ke-
- -an
- -kan
- -i
- formal vs everyday usage

## Turkish grammar coverage

Include:

- alphabet
- pronunciation
- vowel harmony
- pronouns
- noun structure
- plural
- possessive
- cases
- suffixes
- verbs
- tense/aspect where appropriate
- negation
- questions
- sentence structure
- evidentiality where relevant
- politeness
- formal vs everyday usage

---

# 21. Everyday language

Create a dedicated section:

**Real Everyday Language**

Differentiate:

- Standard
- Neutral
- Everyday
- Casual
- Colloquial
- Professional
- Formal

Never present narrow regional slang as universally standard.

---

# 22. Culture

Create cultural notes.

Explain:

- greetings
- politeness
- addressing people
- age/status considerations
- formal vs casual communication
- hospitality
- social norms
- common misunderstandings
- phrases that sound strange when translated literally

Do not invent cultural claims.

When a point varies by region/context, say so.

---

# 23. Indonesian curriculum

Build a complete curriculum around:

- pronunciation
- survival vocabulary
- daily life
- sentence patterns
- affixes
- formal Indonesian
- everyday spoken Indonesian
- useful colloquial expressions
- frequency vocabulary
- conversations
- travel
- business
- culture

Do not teach only textbook Indonesian.

---

# 24. Turkish curriculum

Build a complete curriculum around:

- alphabet
- pronunciation
- vowel harmony
- sentence construction
- suffixes
- cases
- verb system
- tense
- questions
- negation
- possession
- politeness
- daily language
- business
- travel
- culture
- common Arabic-speaker mistakes

---

# 25. Skills

Create independent skill tracking for:

- Vocabulary
- Grammar
- Listening
- Speaking
- Reading
- Writing
- Pronunciation
- Conversation

Do not infer mastery from vocabulary alone.

---

# 26. Listening

Exercise types:

- listen and choose
- listen and type
- fill the blank
- identify word
- identify meaning
- reorder sentence
- comprehension
- dialogue comprehension
- slow audio
- normal audio
- fast/natural audio

Core lesson audio must work offline.

---

# 27. Pronunciation and speaking

Provide:

- listen
- repeat
- shadowing
- syllable practice
- difficult sounds
- minimal pairs where relevant
- stress
- rhythm
- intonation

Audio playback must always work offline.

If on-device speech recognition is feasible, create a `SpeechProvider` abstraction.

Possible implementations:

- LocalSpeechProvider
- AndroidSpeechProvider if appropriate
- Optional cloud provider later

Do not make cloud speech mandatory.

Do not display fake precision scores.

---

# 28. Writing

Progress from:

- copying
- recall
- word ordering
- sentence completion
- translation
- short answer
- messages
- email
- paragraph
- formal writing
- reports
- essays/discussions at advanced levels

---

# 29. Reading

Progress from:

- words
- sentences
- short dialogues
- short stories
- graded texts
- articles written for learners
- professional texts
- advanced texts

Allow tapping a word to see its local dictionary entry.

---

# 30. Dictionary and search

Search must work offline.

Search:

- Arabic → Indonesian
- Arabic → Turkish
- Indonesian → Arabic
- Turkish → Arabic
- phrase search
- lesson search
- grammar search
- scenario search

Use local indexing and fuzzy matching.

Search results should prioritize:

1. exact match
2. phrase match
3. common/frequent match
4. related content

---

# 31. Semantic search future-proofing

Create an abstraction for optional local semantic search.

Do not require an embedding model in MVP.

Possible future:

- local embeddings
- vector index
- semantic phrase retrieval

---

# 32. Frequency-based vocabulary

Where reliable/licensed data is available, support:

- Top 100
- Top 500
- Top 1,000
- Top 3,000
- Top 5,000
- Top 10,000

Store frequency metadata.

Do not invent frequency rankings.

---

# 33. Survival/Travel Mode

Provide a one-tap **Survival Mode**.

Categories:

- airport
- hotel
- taxi
- directions
- restaurant
- money
- shopping
- emergencies
- asking for help

A phrase must be reachable quickly.

---

# 34. Business/Sales Mode

Provide a one-tap **Business & Sales Mode**.

Categories:

- greeting customers
- product presentation
- price
- discount
- negotiation
- objections
- closing
- complaints
- follow-up
- supplier communication
- meetings
- phone
- messaging
- email

---

# 35. Chat language

Teach messaging style:

- formal
- neutral
- casual
- concise

Include examples suitable for common messaging contexts.

Do not assume slang is universally appropriate.

---

# 36. Error learning

Create:

**My Mistakes**

Track:

- vocabulary mistakes
- grammar mistakes
- listening mistakes
- reading mistakes
- pronunciation issues
- repeated errors

When an answer is wrong, explain:

- correct answer
- why
- relevant rule
- example
- similar exercise

---

# 37. Daily plan

Allow:

- 5 min
- 10 min
- 20 min
- 30 min
- 45 min
- 60 min

Example 20-minute session:

- review
- vocabulary
- listening
- grammar
- conversation

The plan should adapt to weaknesses.

---

# 38. Microlearning

Lessons can be 5–15 minutes.

But also provide longer deep lessons.

Do not force every concept into tiny cards.

---

# 39. Quick modes

Create:

### 5 Minutes
- 3–5 words
- 2 phrases
- review
- one listening question
- one conversation prompt

### Focus Mode
Minimal distractions.

### No Translation
Hide Arabic when appropriate.

### Exam Mode
No hints and optional timer.

---

# 40. Stories

Create original graded stories.

Each story:

- text
- audio
- translation
- vocabulary
- grammar
- comprehension
- review

Do not copy copyrighted stories without a valid license.

---

# 41. Frequency + context

A common word should appear in multiple contexts.

Avoid teaching words only as isolated cards.

---

# 42. Verb trainers

Create dedicated verb practice.

For each important verb:

- forms
- examples
- tense/aspect
- negation
- questions
- contextual sentences
- exercises

---

# 43. Numbers and practical language

Include:

- numbers
- prices
- dates
- time
- phone numbers
- addresses
- measurements
- money
- quantities

---

# 44. Gender/context awareness

Where the target language genuinely requires different forms or social choices, distinguish:

- male
- female
- child
- group
- formal
- informal
- older person
- peer

Do not invent distinctions that do not exist.

---

# 45. Content quality system

Every content item should support metadata such as:

- language
- level
- topic
- register
- region
- source
- license
- version
- review status
- native review status
- notes

Statuses:

- draft
- reviewed
- verified
- native_reviewed
- deprecated

Only approved content should ship in production.

---

# 46. Copyright and source integrity

Never copy copyrighted textbooks, websites, articles, or audio without permission.

Prefer:

- original content
- properly licensed datasets
- public-domain resources
- permissively licensed resources

Store source/license metadata.

---

# 47. Content architecture

Recommended directory:

```text
content/
  indonesian/
    a0/
    a1/
    a2/
    b1/
    b2/
    c1/
    c2/
    professional/
  turkish/
    a0/
    a1/
    a2/
    b1/
    b2/
    c1/
    c2/
    professional/
```

Use versioned content packs.

Example conceptual JSON:

```json
{
  "contentPack": {
    "id": "id-a1-core",
    "language": "id",
    "level": "A1",
    "version": 1,
    "schemaVersion": 1
  }
}
```

The exact schema may be improved by the agent.

---

# 48. Content JSON model

Design schemas for at least:

```text
Language
Course
Level
Unit
Module
Lesson
Topic
Word
WordMeaning
Phrase
Sentence
GrammarRule
Example
Dialogue
DialogueLine
Scenario
Character
Exercise
Question
Answer
AudioAsset
CulturalNote
BusinessPhrase
TravelPhrase
ContentPack
ContentVersion
```

Do not duplicate large text unnecessarily.

Use stable IDs.

---

# 49. Room database model

Create a normalized Room schema.

At minimum consider tables/entities equivalent to:

```text
languages
levels
courses
units
modules
lessons
topics
words
word_meanings
phrases
sentences
grammar_rules
examples
dialogues
dialogue_lines
scenarios
characters
exercises
questions
answers
audio_assets
cultural_notes
content_packs
content_versions
user_word_progress
user_phrase_progress
user_lesson_progress
user_grammar_progress
review_items
favorites
user_goals
achievements
user_settings
search_documents
```

Use foreign keys and indices appropriately.

Do not load the entire database into memory.

---

# 50. Suggested core data relationships

Conceptually:

```text
Language
  └── Course
       └── Level
            └── Unit
                 └── Module
                      └── Lesson
                           ├── Vocabulary
                           ├── Grammar
                           ├── Dialogues
                           ├── Scenarios
                           └── Exercises
```

User state must be separate from content.

This allows content updates without destroying learning progress.

---

# 51. Content Pack installation

Design a system that can eventually support:

- built-in content
- optional local content packs
- future downloadable packs
- version updates
- validation
- migration

Core content must not require network access.

---

# 52. Audio architecture

Create:

```text
audio/
  id/
    words/
    phrases/
    dialogues/
    lessons/
  tr/
    words/
    phrases/
    dialogues/
    lessons/
```

Use an `AudioRepository` / `AudioProvider`.

Support:

- local files
- caching
- speed control
- repeat
- sentence-level playback

Prefer high-quality licensed/native recordings for core content.

TTS can be an optional fallback, not the only source of audio.

---

# 53. Optional on-device AI

Create an abstraction:

```text
AiEngine
SpeechEngine
SemanticSearchEngine
```

Possible future implementations:

- ONNX Runtime Mobile
- other appropriate on-device inference

Use AI only where it genuinely improves learning.

Potential uses:

- local speech analysis
- local semantic search
- exercise generation from approved content
- error classification
- adaptive practice
- limited role-play

The app must work without the AI model.

Do not ship a huge model by default if it makes the core app impractical.

---

# 54. Accessibility

Support:

- RTL
- large text
- screen readers
- strong contrast
- large touch targets
- reduced motion
- no color-only meaning
- correct LTR rendering for target-language text

---

# 55. UI/UX

Use modern Material 3 / Compose design.

The app should feel:

- premium
- clean
- calm
- fast
- professional
- easy for Arabic speakers

Avoid:

- clutter
- childish gamification
- excessive animation
- tiny buttons
- confusing navigation

---

# 56. Navigation

Suggested primary navigation:

- Home
- Learn
- Review
- Practice
- Dictionary
- Progress
- Settings

Within Practice:

- Vocabulary
- Grammar
- Listening
- Speaking
- Reading
- Writing
- Conversations
- Scenarios

Within Learn:

- Course
- Survival
- Business
- Everyday Language

---

# 57. Progress

Track separately for each language:

- level
- XP
- time
- words learned
- words mastered
- lessons
- listening
- speaking
- reading
- writing
- grammar
- pronunciation
- streak
- weak areas

Never claim CEFR certification unless an actual validated assessment exists.

---

# 58. Achievements

Use tasteful achievements:

- first lesson
- 100 words
- 500 words
- 1,000 words
- first dialogue
- 7-day streak
- first level completion

Do not let gamification dominate the learning experience.

---

# 59. Backup and migration

Provide local export/import of learning progress where practical.

Never delete user progress during:

- app update
- content update
- database migration

Write migration tests.

---

# 60. Privacy

Default to local data.

Do not upload:

- user voice
- learning history
- personal notes
- progress

unless the user explicitly opts into a future online feature.

Do not embed secrets/API keys.

---

# 61. Performance

Optimize for mid-range and lower-end Android devices.

Use:

- lazy lists
- pagination
- database indices
- caching
- efficient audio loading
- background work only when necessary

Avoid unnecessary:

- network monitoring
- GPS
- background processing
- memory-heavy models

---

# 62. Search implementation

Build an indexed local search.

Support:

- exact match
- prefix match
- fuzzy match
- phrase match
- lesson match
- grammar match
- scenario match

Potential implementation:

Room FTS where appropriate, or another local indexing strategy.

Choose based on actual Android constraints.

---

# 63. Error handling

Never show stack traces to users.

Provide:

- user-friendly error
- retry
- graceful fallback

Log safely during development.

Do not log sensitive user data in release builds.

---

# 64. Testing requirements

Create tests for:

- database
- migrations
- repositories
- learning engine
- spaced repetition
- search
- progress
- content import
- navigation
- important ViewModels/use cases
- core UI flows

Create an explicit offline test suite.

---

# 65. Mandatory offline acceptance test

With network disabled:

1. Launch app.
2. Open course.
3. Open lesson.
4. Play local audio.
5. Search dictionary.
6. Search phrase.
7. Complete exercise.
8. Save progress.
9. Review due cards.
10. Open statistics.
11. Close app.
12. Reopen app.
13. Confirm progress remains.

No crash.
No blocking network request.
No "connect to internet" requirement.

---

# 66. Security

Never:

- hard-code secret keys
- trust unvalidated content packs
- execute arbitrary downloaded code
- allow unsafe file paths

Validate content pack structure and version.

---

# 67. Content validation

Create validation rules for imported content:

- required IDs
- language exists
- level valid
- references valid
- no duplicate stable IDs
- valid audio references
- valid license/source metadata
- no empty mandatory fields

Fail safely and report useful validation errors.

---

# 68. Adding another language later

The architecture must make this possible without rewriting core features.

Future example:

```text
Spanish
Malay
English
French
German
```

Do not build Indonesian/Turkish-specific assumptions into core entities unless necessary.

Language-specific grammar can use extensible structures.

---

# 69. Recommended project structure

Use something close to:

```text
app/
core/
  common/
  database/
  datastore/
  designsystem/
  audio/
  content/
  search/
  learning/
  review/
  speech/
  ai/
feature/
  home/
  onboarding/
  course/
  lesson/
  vocabulary/
  grammar/
  listening/
  speaking/
  reading/
  writing/
  dialogue/
  scenario/
  dictionary/
  search/
  review/
  progress/
  settings/
content/
docs/
testing/
```

Adjust if a better structure is justified.

---

# 70. Documentation files

Create:

```text
README.md
AGENTS.md

docs/
  ARCHITECTURE.md
  DATABASE.md
  CONTENT_SCHEMA.md
  AUDIO.md
  OFFLINE.md
  AI.md
  TESTING.md
  ROADMAP.md
  IMPLEMENTATION_STATUS.md
  CONTENT_STATUS.md
```

---

# 71. Implementation phases

## PHASE 0 — Discovery

- inspect workspace
- determine project state
- establish toolchain
- establish architecture
- create documentation

Deliverable:
buildable skeleton.

## PHASE 1 — Core Android

- Kotlin
- Compose
- navigation
- theme
- RTL/LTR
- dependency injection
- basic persistence

Deliverable:
launchable app.

## PHASE 2 — Database + Content Engine

- Room
- schemas
- repositories
- content pack format
- seed content

Deliverable:
real local content can load.

## PHASE 3 — Learning Core

- lessons
- vocabulary
- grammar
- progress
- exercises

Deliverable:
real learning loop.

## PHASE 4 — Review Engine

- spaced repetition
- review queue
- weak areas
- daily review

Deliverable:
adaptive review.

## PHASE 5 — Audio

- local audio
- playback
- speed
- repeat
- sentence audio

Deliverable:
offline listening.

## PHASE 6 — Search + Dictionary

- local dictionary
- fuzzy search
- phrase search
- lesson search

Deliverable:
fast offline search.

## PHASE 7 — Conversations + Scenarios

- dialogues
- role-play
- travel
- sales
- everyday language

Deliverable:
real-world practice.

## PHASE 8 — Speaking

- pronunciation
- shadowing
- speech abstraction
- optional on-device recognition

Deliverable:
speaking practice with graceful fallback.

## PHASE 9 — Progress + Gamification

- dashboard
- goals
- streak
- achievements
- statistics

Deliverable:
retention system.

## PHASE 10 — Content Expansion

- Indonesian A0–C2
- Turkish A0–C2
- professional tracks
- stories
- culture
- frequency vocabulary

Deliverable:
substantial curriculum.

## PHASE 11 — QA + Performance

- offline tests
- migration tests
- UI tests
- performance
- memory
- battery
- accessibility

Deliverable:
release candidate.

## PHASE 12 — Release

- release configuration
- signed build instructions
- APK/AAB
- final documentation
- final acceptance test

---

# 72. MVP definition

The MVP must NOT be an empty shell.

MVP should contain:

### Both languages
- Indonesian
- Turkish

### At least:
- A0
- A1
- selected A2 foundation content

### Features:
- onboarding
- language switch
- course
- lessons
- vocabulary
- grammar
- phrases
- dialogues
- audio
- exercises
- dictionary
- search
- spaced repetition
- progress
- offline operation

The MVP should demonstrate the entire learning loop.

---

# 73. Professional Version definition

The full version should include:

- A0–C2
- professional tracks
- large phrase library
- business/sales
- travel
- cultural notes
- role-play
- speaking
- advanced listening
- writing
- stories
- adaptive engine
- richer local AI where feasible
- extensive content packs
- robust QA

---

# 74. Quality gates

Do not move to the next phase if:

- build fails
- critical tests fail
- core navigation crashes
- offline mode breaks
- database migrations lose progress
- content import corrupts data
- major buttons are nonfunctional

Maintain a simple checklist in:

`docs/IMPLEMENTATION_STATUS.md`

---

# 75. Agent self-review before completion

Before declaring completion, ask:

1. Can it run completely offline?
2. Can a beginner actually learn from it?
3. Can the user switch languages instantly?
4. Is progress separate per language?
5. Are the phrases natural rather than literal translations?
6. Are daily/business/travel scenarios useful?
7. Are the lessons structured?
8. Is review adaptive?
9. Is search fast and local?
10. Does audio work offline?
11. Does the app handle weak devices reasonably?
12. Is Arabic RTL correct?
13. Are Turkish characters correct?
14. Are Indonesian examples natural?
15. Are cultural notes cautious and contextual?
16. Is content source/licensing tracked?
17. Are migrations safe?
18. Are tests present?
19. Are there fake features?
20. Can another developer add a third language without rewriting the platform?

Fix problems before finalizing.

---

# 76. Critical content rule

Do not optimize for "number of words."

Optimize for:

**usable language acquisition.**

A smaller collection of excellent, natural, contextualized content is better than thousands of bad translations.

---

# 77. Critical translation rule

Never assume:

Arabic sentence → literal Indonesian → literal Turkish.

Instead:

Arabic intent/context
→ natural Indonesian equivalent
→ natural Turkish equivalent

Then explain literal structure only when pedagogically useful.

---

# 78. Critical cultural rule

Do not assume Indonesian culture and Turkish culture behave identically.

Do not assume Arabic social expressions have direct equivalents.

Teach the user what a native speaker would naturally say in the same situation.

---

# 79. Critical engineering rule

Do not create an architecture that only works for the demo.

The first implementation must already support:

- content versioning
- migrations
- offline
- independent user progress
- adding content
- adding languages
- testing

---

# 80. Critical UX rule

Hide complexity from the user.

The internal architecture may be sophisticated.

The user experience should feel:

**"Open → learn → practice → review → improve."**

---

# 81. Start execution now

Start with:

1. Workspace inspection.
2. Current project/toolchain assessment.
3. Architecture decision.
4. Create `AGENTS.md`.
5. Create `docs/`.
6. Create buildable Android project if needed.
7. Implement Phase 1.
8. Verify build.
9. Implement Phase 2.
10. Continue phase by phase.

Do not stop at a written plan.

The goal is a working application.

If a requirement cannot be implemented exactly in the current environment, implement the strongest offline-safe abstraction possible and document the limitation in `docs/IMPLEMENTATION_STATUS.md`.

---

# 82. Final product principle

The final product should feel like:

**A personal Indonesian + Turkish teacher inside the phone that does not need the internet.**

It should teach:

**words → phrases → grammar → listening → pronunciation → conversation → real-world competence.**

It must be useful for:

- complete beginners
- travelers
- workers
- shoppers
- sellers
- business users
- students
- people who want everyday conversational ability
- advanced learners

And it must be designed from day one so it can grow into a much larger multilingual Offline Language Academy.

**Begin.**
