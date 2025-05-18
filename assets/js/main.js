let closeTimeout = null;
const language_index = {
  1: 'english',
  2: 'uzbek',
  3: 'russian',
};
const click_instructions = {
  1: 'Click to enlarge',
  2: 'Kattalashtirish uchun bosing',
};
function Redirect(index) {
  const indecies = {
    1: 'https://gov.uz/en/edu',
    2: 'https://www.hlcommission.org/',
    3: 'https://gdpr-info.eu/',
  };
  window.open(indecies[index], '_blank');
}
function tranlationNote(show=true){
  const structure = `
        <div class="translation-notice">
          <p class="notice-text">Russian translation will be published shortly</p>
        </div>      
  `;
  const noteLayer = document.getElementById('languageNote');
  noteLayer.innerHTML = show ? structure : '';
  if(show){
    const articleContainer = document.querySelector(".article");
    articleContainer.innerHTML = '';
  };
};
const data = {
  title: ["Unfair Webster University in Tashkent", "Toshkentdagi Adolatsiz Webster Universiteti"],
  author: "Mansur Davlatov.",
  thumbnail: "https://news.webster.edu/images/webster_tashkent_wide.jpg",
  date: 'May 4, 2025.',
  mainContent: {
    english: [
      { header:'Overview',
        text: `
In early 2025, 
Mr. Mansur Davlatov, a senior student at Webster University’s Tashkent campus, was dismissed from the university under circumstances that raise serious legal and ethical concerns. The case, as presented on this website, outlines a pattern of administrative misconduct, due process violations, and breach of academic contract — all of which were executed without transparency or accountability.
`
      },
      {text: `
        This public record has been created to shed light on what took place behind closed doors, how institutional safeguards were bypassed, and why this matter demands further review by both national and international regulatory bodies.
        `,
      space:2,
      },
      {text: ' ', space:2},
      { 
        header: [2, 'Background and Student Profile'],
        text: `
Mr. Davlatov was a senior-level student with a clean academic record and no prior disciplinary issues. 
At the time of the incident, he was on track to graduate in July 2025. His dismissal came after a single alleged violation of academic conduct, 
for which he was never granted a proper formal hearing, nor provided with written charges, appeal instructions, or a clear disciplinary timeline.
        `,},
      {
        header:[2, 'Key Issues and Violations Identified'], 
        listData:[
          'Suspension Without Notice, Explanation, or Procedural Transparency',
          'Dismissal was issued based on a Code of Conduct not referenced in the student’s signed contract.',
          'No proper formal hearing was conducted, and no advance notice was provided.',
          "The official dismissal letter deliberately did not include appeal instructions, in direct violation of the university's own policies.",
          "Communication was almost completely obstructed for nearly two months deliberately, during which Mr. Davlatov’s university email was disabled and no alternative contact was provided.",
          "The dismissal document was not delivered until Mr. Davlatov physically appeared on campus, two weeks after it had been finalized.",
          "Citation of a “GDPR document” as grounds for dismissal, which has never been provided or verified, raising questions of procedural fabrication.",
        ],
      },
      {text: ' ', space:1},
      { header: [2, 'Suspension With no Notice'], text: `
On January 31, Mr. Mansur Davlatov discovered that his access to the university's online student system had been suspended without any prior warning or notification, 
the issue occurred around 3:00 PM local time, with no email, message, or official communication from the university indicating a reason or context.
The following day, Mr. Davlatov attended a scheduled meeting with the GCP (Global Citizenship Program) Lead, where he openly discussed a situation involving an alleged academic misconduct. 
Following that, acting on his own initiative, he voluntarily approached the Senior Site Registrar and Supervisor, Mr. Ruban, in his office to further clarify and understand the situation.
      ` },
      { 
        text: `
          The discussion with Mr. Ruban was calm, professional, and respectful. 
          However, during their exchange, Dr. Anthony Jarvis, Rector of Webster University Tashkent, entered the office, and Mr. 
          Ruban briefed him on the matter. 
          What followed was an unexpectedly aggressive, stressful, and disrespectful conversation, during which Mr. Davlatov was told that he had been placed under suspension and accused of violating GDPR.
        `
      },
      {
        header: [1, 'At no point prior to or after this confrontation was Mr. Davlatov provided with:'],
        listData: [
          'Any formal notice of suspension,',
          'A written explanation of the allegations against him,',
          'A reference to what code or policy he was being charged under,',
          'Or any instructions regarding his right to respond, appeal, or defend himself.',
        ]
      },
      {text: ' ', space:1},
      {
        header: [2, 'Breach of Contract: Dismissal Based on Unreferenced Code of Conduct'],
        text: `
          Mr. Mansur Davlatov was dismissed from Webster University Tashkent based on an alleged violation of the Student Code of Conduct (SCC) published at webster.uz. 
          However, the disciplinary action taken against him raises serious concerns about both the legal enforceability of the SCC and the procedural validity of the university's actions.
        `
      },
      {image: './assets/img/agreement.png'},
      {
        header: [1, `
          The enrollment contract signed by Mr. Davlatov makes no explicit reference to the webster.uz Student Code of Conduct. Instead, it refers only to:
        `],
      },
      {
        listData: [
          'Webster University USA’s academic policies, hosted at webster.edu',
          'Unspecified “internal regulations of the center,” with no definitions, document titles, or access instructions.'
        ],
      },
      {text: ' ', space: 1},
      {
        text: `
          There is no indication that the SCC hosted at webster.uz was annexed, hyperlinked, or otherwise presented as part of the contractual framework governing Mr. Davlatov’s obligations as a student.
        `,
      },
      {
        header: [1, 'There is no evidence that Mr. Davlatov was ever:'],
        listData: [
          'Formally informed of the SCC',
          'Asked to acknowledge or agree to its terms',
        ],
      },
      {text: ' ', space: 1},
      {
        text: `
          The university’s decision to dismiss Mr. Davlatov under the webster.uz Student Code of Conduct — without properly incorporating that document into the contract or ensuring the student’s informed consent — raises serious questions of contractual validity and procedural fairness. 
          The enforcement of undisclosed or unspecified internal regulations could be deemed a breach of contract and subject to legal challenge under Uzbek civil law.
        `,
      },
      {},
      {
        text: `
          While it is possible that the university may argue the Student Code of Conduct falls under the broadly stated “internal regulations of the center,” the absence of any explicit reference to the SCC in the contract undermines that position. 
          More importantly, even if the SCC were assumed to apply, the university’s failure to follow its own prescribed procedures during the conduct and dismissal process further reinforces the breach of contract. This procedural inconsistency is outlined in detail below and highlights a lack of adherence not only to contractual obligations but also to basic principles of fairness and due process.
      `,
      },
      {text: ' ', space: 1},
      {
        header: [2, 'No Formal Hearing, No Proper Notification'],
        text: `
          Nearly a month of complete silence from the administration followed the alleged incident, raising serious concerns about due process and transparency, Mr. Mansur Davlatov was only partially informed of a meeting that would later be used as justification for his dismissal. 
          On February 26th, while on campus for a meeting with the Student Affairs Coordinator—arranged at his own initiative—Mr. 
          Davlatov voluntarily spoke with the Senior Site Registrar, Mr. Ruban, who stated, “We actually wanted to meet with you — come on Friday at 3PM.”
        `
      },
      {image: './assets/img/sms.png',},
      {

        text: `
          No official communication was sent before this exchange. Then, on the day of the meeting, Mr. Davlatov received a vague SMS notification just two hours prior, with no formal email, agenda, or clear identification of participants or purpose
          and it was sent through the personal phone number of Senior Site Registrar & Supervisor.
          The meeting in question was supposedly described as being with a so-called “Global GDPR Team”—a claim that is highly likely to be fabricated or false. 
          The decision to withhold any details about the nature of the meeting or the identities of the participants in the SMS notification further supports this conclusion. This lack of transparency, particularly in such a serious matter, raises serious doubts about the legitimacy of the claim. Additional evidence presented later in this article further substantiates these concerns.
        `,
      },
      {
        header: [1, 'This failure to provide:'],
        listData: [
          'Formal notice of a disciplinary hearing',
          'A list of individuals who would be present',
          'An opportunity to prepare a defense,',
          'Or even a clear explanation of what process was underway,',
        ],
      },
      {text: ' ', space: 1},
      {header: [
        1, 
        `
Raises serious concerns regarding transparency and procedural fairness, appearing to be a deliberate effort to prevent the student from preparing an adequate defense. At no point was the meeting described or framed as a formal hearing, and it was repeatedly referred to simply as a “meeting.” 
The nature of this meeting further demonstrated its one-sided character — it primarily consisted of the university asking Mr. Davlatov questions to gather more information, rather than providing a platform for him to present his case or defend himself.
No agenda, participant list, or procedural guidelines were shared in advance, and no outcome documentation or recording has ever been provided.

If Mansur Davlatov had not independently reached out to the Senior Site Registrar on February 26, he would not have been informed about the disciplinary meeting at all. 
The informal SMS notification was only sent on February 28, which clearly indicates that the meeting would not have been communicated to him otherwise. 
This delay constitutes a deliberate obstruction of communication.

Furthermore, both the Webster University Tashkent Student Code of Conduct and the Webster University USA policies explicitly state that students must be given at least three business days to prepare for a disciplinary hearing, to ensure a fair and equitable process. 
The failure to meet this requirement appears to be highly likely intentional, constituting a clear breach of institutional policy and representing serious procedural mistreatment. 
This further undermines the integrity and fairness of the disciplinary process. 
This clearly shows the university actively tried to conceal information, strongly suggesting that the so-called ‘Global GDPR Team’ was a misleading or fabricated claim, which was later used to obfuscate the situation under the guise of GDPR violations as a basis for dismissal.         
Additionally, Mr. Davlatov was not provided with any evidence that was claimed to exist during the meeting.
The failure to provide Mr. Davlatov with any evidence that was purportedly discussed during the meeting constitutes a violation of his fundamental right to access evidence.
`,
      ]},
      {
        text: `
          To this day, the University has not provided Mr. Davlatov with any official documentation or transcript of the alleged hearing, nor was he ever informed in writing that this meeting would serve as a formal disciplinary proceeding.
        `
      },

      {
        header: 'The official dismissal letter contained no appeal instructions',
        text: `

        `
      },

      {
        header: [2, 'The official dismissal letter contained no appeal instructions'],
        text: `
          The official dismissal letter issued by Webster University Tashkent contained no instructions regarding the right to appeal.
        `,
      },
      {
        image: ['./assets/img/dismissalDoc.jpg'],
      },
      {
        text: `
According to standard academic protocols and due process norms—particularly those outlined in Webster University’s official U.S. policies—students must be provided with clear instructions on how to challenge or appeal disciplinary decisions. 
The omission of such instructions in the official dismissal letter constitutes a serious procedural failure. 
Given that appeal guidelines are routinely included in such correspondence, their absence here—combined with the fact that Mansur Davlatov’s email to the Senior Site Registrar and Dr. Anthony Jarvis expressing his intent to appeal was left unanswered for over three weeks, as detailed in the 'Obstructed Communication and Deliberate Isolation' section—strongly indicates that this was not an oversight, but a deliberate attempt to obstruct his right to appeal.          `,
    },
      {
        text: `
          At the bottom of the letter, there appears a GDPR disclaimer—a generic legal note usually appended to email footers. 
          Its presence in an official disciplinary letter is highly irregular and raises concerns about the authenticity of the document. 
          This inclusion may reflect an attempt to retroactively frame the dismissal in the context of European data protection laws, 
          despite the university never substantiating the alleged GDPR violation or following proper investigative procedures.
        `,
      },
      {
        text: `
          This unusual insertion will be examined further in the following section, 
          where the possibility of either document fabrication or post-hoc procedural justification will be addressed in greater detail.
        `,
      },
      {
        header: [2, 'Obstructed Communication and Deliberate Isolation'],
        text: `

Following the issuance of an interim suspension, Mansur Davlatov was immediately disconnected from all university-related platforms, including his Canvas account and Webster University email. 
This action was taken under the pretext of interim measures, as outlined in the Webster University Tashkent Student Code of Conduct.
However, despite this suspension being interim in nature, the university failed to provide any alternative channels for communication, in direct contradiction to the Code of Conduct, which clearly states that “alternative forms of communication must be provided.” 
As a result, Mr. Davlatov was forced to physically visit the university on five separate occasions over a four- to five-week period. On two of those visits, he was denied entry by campus security due to his suspension status. 
On the remaining three occasions, he was allowed entry. These repeated visits were made necessary only because the university ignored its obligation to maintain communication and repeatedly failed to respond to Mr. Davlatov’s emails—almost all of which were intentionally left unanswered.


No response was ever issued, and no alternative method for engagement or correspondence was offered. 
The university’s failure to facilitate communication during a critical disciplinary period represents a clear breach of procedural fairness and strongly suggests intentional obstruction.




        `,
      },
      {
        text: `
          While Mr. Mansur Davlatov was actively pursuing legal action against Webster University Tashkent, his legal counsel requested contact with the university’s legal representative to clarify several procedural and legal concerns related to his dismissal. 
          Following this, Mr. Davlatov visited the university in person and made a formal request through the front desk receptionist. 
          As the legal representative was unavailable at that time, the receptionist took down Mr. Davlatov’s name and phone number, assuring him that his request would be forwarded and he would be contacted shortly.
          In the following days, having received no response, Mr. Davlatov personally followed up with the receptionist by phone. 
          She confirmed that both Dr. Anthony Jarvis and the university's legal representative had been informed of the request. 
          Nevertheless, no contact was initiated by the university.
          `,
      },
      {
        text: `
    In addition, between April 13th and 18th, Mr. Davlatov made two further attempts to schedule a meeting with Dr. Jarvis via the Webster Tashkent call center.
    These efforts were also ignored. 
    The complete lack of acknowledgment over a sustained period — especially while legal action was being pursued — raises serious questions about the institution’s willingness to engage in good faith and its compliance with the principles of transparency, due process, and procedural fairness.

     `,
      },
      {
        text : 'Below are screenshots of multiple unresponded emails sent to Webster Tashkent administration:'
      },
      {image: './assets/img/february13-Mr-Ruban.png'},
      {text:'Senior Site Registrar & Supervisor'},
      {image: './assets/img/february13-studentAffairs.png'},
      {text:'Student Affairs Office'},
      {image: './assets/img/march-30-noResponse.png'},
      {
        text: `
Mr. Davlatov’s email to the Senior Site Registrar & Supervisor requesting to appeal, which went unanswered—as shown in the screenshot—is clear proof that the omission of appeal instructions in the dismissal letter was intentional.          `
      },
      {image: './assets/img/april-2-AnthonyJarvis.png'},
      {
        text: `
        Mr. Davlatov’s email to Dr. Anthony Jarvis requesting to appeal was left unanswered, as shown in the screenshot—another clear evidence that the omission of appeal instructions in the dismissal letter was intentional.
        `,
      },
      {image: './assets/img/April2-no-Response.png'},
      {text:'Senior Site Registrar & Supervisor'},
      {text:' ', space: 2},
      {text:' This was the first formal response to Mr. Davlatov’s inquiries in over seven weeks, all of which he had submitted through his personal email account'},
      {image: './assets/img/First in 2-months.png'},
      {text: 'The response came from the Senior Site Registrar & the Supervisor, stating:'},
      {text: '“It appears you are on academic break. If you wish to resume your studies, please let us know.”'},
      {text: ' ', space:1},
      {
        header: [2, 'Dismissal Document Not Communicated Until Physical Visit'],
      },
      {
        text: `
    Mr. Davlatov, acting in good faith and believing that no formal decision had been made — based on the Senior Site Registrar’s statement, “It appears you are on academic break. 
    If you wish to resume your education, please let us know” — immediately followed up with the university the next day, on March 28. 
    It was only at this point, during his physical visit, that he was handed the dismissal document.

        `
      },
      {
        text: `
The delivery of the dismissal document came as a severe emotional blow to Mr. Davlatov. He was shocked to discover that the letter had been finalized, signed, and stamped on March 14 — nearly two weeks before it was actually provided to him. During that time, he had been left under the false impression that his case was still under review. This discrepancy not only deepened his distress but also pointed to a serious breakdown in transparent communication.

Just one day before receiving the dismissal letter, the Senior Site Registrar had informed Mr. Davlatov that he was merely on academic break and could return to his studies if he wished. Trusting that information, Mr. Davlatov visited the university in person the next day — only to be handed a dismissal letter that had been issued two weeks prior.

This abrupt reversal and the apparent withholding of critical information left Mr. Davlatov feeling misled and emotionally manipulated. He described the experience as being treated not as a student entitled to fairness and dignity, but as a passive figure in a predetermined process — “played like a doll” by an administration that had already made its decision in secret.


        `
      },

      {
        text: `
          During the initial weeks of his suspension, Mr. Davlatov made multiple good-faith efforts to speak directly with Interim Rector Dr. Anthony Jarvis to seek clarity and ensure fair communication. However, when he requested a meeting through the Student Affairs Coordinator, he was told over the phone that the Rector was “sick” and unavailable. 
          In a subsequent attempt, when Mr. Davlatov requested a joint meeting with the Senior Site Registrar, he was again denied, this time being told that the Rector was “too busy” and that even the Senior Site Registrar himself was waiting for the Rector’s availability. 
          These repeated deferrals created a sense of intentional inaccessibility at the highest administrative level, leaving Mr. Davlatov with no clear path for recourse or resolution.
        `,
      },
      {
        text: `
When viewed alongside the university’s persistent failure to reply to Mr. Davlatov’s written inquiries — despite multiple emails sent over several weeks — these actions suggest more than just administrative delays. 
They point to a deliberate pattern of obstruction, potentially reflecting an internal directive or informal decision not to engage with Mr. Davlatov’s correspondence during a critical period. 
Mr. Davlatov genuinely believes this was intentional and served to isolate him from any opportunity to advocate for himself.
        `,
      },

      {
        header: [2, 'Citation of Likely False or Non-Existent “GDPR Document” as Grounds for Dismissal'],
        text: `
          On April 2, 2025, Mr. Mansur Davlatov contacted the Senior Site Registrar and Supervisor by phone after repeated emails were ignored. 
          He requested clarification about his dismissal and expressed his desire to appeal the decision, especially since the official dismissal document contained no information regarding the right to appeal or the procedure to do so.
        `,
      },
      {
        text: `
  During this call, the Registrar informed Mr. Davlatov that his concerns had been forwarded to Dr. Anthony Jarvis. 
  The Registrar then stated, “We received a document from GDPR, according to which, you should be dismissed.” 
  When Mr. Davlatov directly asked what the document specifically stated, the Registrar replied, “I do not know. I’m just telling you what we received.”

  This vague and unverified citation of a “GDPR document” raises serious concerns about the legitimacy of the dismissal process. 
  There was no attempt to formally provide or describe the document, no written copy was shared, and the nature of the alleged “GDPR team” involved remains unknown to this day. 
  

        `,
      },
      {image: './assets/img/gdpr-failure.png'},
      {text: ' ', space: 1},
      {header: [1, `
        As shown in the attached screenshot, Mr. Davlatov emailed Webster University in Tashkent in response to the appeal rejection claims. 
      `
      ]},
      {
        header: [1, 'Specifically requesting:'],
      },
      {
        listData: [
          'A copy of the document originating from the so-called GDPR team',
          'The names and roles of the individuals involved in the meeting of this “Global GDPR team.”',
        ],
      },
      {text: ' ', space: 1},
      {
        text: `
        This email was entirely ignored, further proving that such a document never existed and that the individuals involved were not a legitimate team but rather part of an orchestrated process.
        `,
      },
      {text: ' ', space: 1},
      {
        text: `
        These facts, combined with the suspicious insertion of a GDPR legal note on the official dismissal letter, suggest the possible use of fabricated or procedurally invalid documentation to justify a predetermined decision.
This suspicious reference will become even more critical in light of the subsequent communication between Mr. Davlatov and Webster Tashkent, as detailed in the following section — suggesting that the GDPR citation may have been a retroactive or fabricated justification, rather than a legitimate legal directive.

        `,
      },
      {
        text: `GDPR (General Data Protection Regulation) is a European privacy law framework that has no authority to recommend or enforce disciplinary sanctions at educational institutions. `
      },
      {
        header: [2, 'Recent Communication'],
        text: `
          Mr. Davlatov, committed to pursuing an appropriate resolution, began escalating the issue through Webster University’s internal structures after experiencing what he perceived as unacceptable mistreatment and a disregard for his student rights. 
          As part of this effort, he reached out to the university’s headquarters in St. Louis, seeking accountability and intervention at the institutional level.
        `
      },
      {
        text: `
        As evidenced by a chain of unanswered emails, Webster University only responded to Mr. Davlatov’s appeal-related inquiry on April 22 — approximately 23 days after he had initially reached out on March 30. 
        This response came only after the situation had begun to escalate internally, further reinforcing the pattern of delayed and obstructive communication.
        `,
      },
      {
        header: [1, 'Response from Webster Tashkent was as follows:'],
        text: `Dear Mansur Davlatov,`,
      },
      {
        text: `Thank you for your inquiry.`,
      },
      {
        text: `As indicated in the dismissal notification sent to your university email, you were granted three days to appeal the decision. Unfortunately, you did not submit an appeal within the specified timeframe.`
      },
      {
        header: [1, 'For your reference, the grounds for appeal as outlined on page 9 of the SCC are:'],
        listData: [
          'A procedural error occurred that negatively impacted the student.',
          'New evidence has emerged that could not have been considered during the original process.',
          'The sanction imposed is inappropriate or excessively severe.',
        ],
        space: 1,
      },
      {
        text: `Let us address each in turn:`,
      },
      {
        header: [1, '1. Due Process'],
        text: `
          The student conduct process was followed rigorously. You were interviewed on four separate occasions — by the Registrar, the GCP Program Lead, myself, and representatives from the Global GDPR team. 
          At each stage, you were given full opportunity to explain your actions. 
          Unfortunately, your explanation regarding the unauthorized access to computer systems and the theft of your professor’s login credentials was not found credible. 
          As was made clear to you, 
          there were legal and ethical pathways to pursue your stated goal — understanding Canvas in order to develop a software application — but you chose to act outside those bounds.
        `,
      },
      {
        header: [1, '2. New Evidence'],
        text: `
          You have not submitted any new evidence that would warrant a reconsideration of the decision.         
        `,
      },
      {
        header: [1, '3. Appropriateness of Sanction'],
        text: `
          The sanction of dismissal is justified by the gravity of the offense. 
          All students at Webster University are entrusted to use university systems responsibly and ethically. 
          By stealing login credentials, accessing a professor’s data, and exposing confidential information belonging to fellow students, you violated that trust in a serious and unacceptable manner. 
          Your actions represent a clear breach of the Student Code of Conduct and demonstrate a fundamental failure to uphold the standards required for continued access to our academic and technological environment.
        `,
      },
      {text: 'For these reasons, the decision to dismiss you remains in effect.'},
      {text: `
        Sincerely,
        `},
      {text: `
         Dr. Anthony Jarvis
        `},
      {text: `
         Interim Rector
        `},
      {text: 'Webster University Tashkent'},
      {text: ' ', space: 1},
      {
        header: [1, 'Rebuttal to Webster University Tashkent’s Official Dismissal Response by Davlatov'],
        text: `
          Webster University Tashkent asserts that a dismissal notification was sent to Mr. Mansur Davlatov’s university email and that he failed to appeal within the three-business-day timeframe outlined in the Student Code of Conduct (SCC). 
          However, the university was aware that Mr. Davlatov no longer had access to his university email —  a fact evident from multiple ignored communications, the use of SMS to Mr. Davlatov's personal phone number, and the broader context of events. 
          This raises the concern that either no email was sent, or it was intentionally sent to an inaccessible address to deprive Mr. Davlatov of the opportunity to appeal, in direct contradiction to the SCC’s stipulated procedures.
        `,
      },
      {
        text: `
          In its response, the university outlines the three possible grounds for appeal but fails to acknowledge how its own procedural failures — Including the lack of formal notice, the absence of a proper hearing, repeated rejections of communication, no charges or notice of charges, and the failure to disclose the scope of investigations and timelines — did in fact negatively impact Mr. Davlatov’s ability to participate in a fair process and is directly contradictory to the university's own internal regulations.
.
        `,
      },
      {
        header: [1, 'Claim that conduct process was “rigorously followed” is contradicted directly by the reality that:'],
        listData: [
          'The administration failed to notify Mr. Davlatov of a meeting scheduled for February 28th, and the dismissal document was never communicated to him until he made a physical visit.',
          'No notice of charges or hearing format was ever provided.',
          'All follow-up requests, including appeals, were deliberately ignored.',
          'Administration likely deliberately failed to provide Mr. Davlatov with alternative forms of communication.',
          'The dismissal document deliberately did not include appeal instructions, and when requested via email, the inquiry was ignored.'
        ],
        
      },
      {text: ' ', space: 1},
      {
        text: `
          Moreover, Webster University Tashkent failed to notify Mr. Davlatov about the existence, scope, or structure of any internal investigation allegedly conducted against him. 
          At no point was he provided with a formal explanation of the procedures undertaken, the evidence reviewed, or the timeline of the investigative process. 
          This total absence of procedural transparency deprived Mr. Davlatov of the opportunity to respond meaningfully, seek guidance, or prepare a proper defense.
          This was not, and is not, merely a failure to follow proper student conduct procedures — it represents a complete disregard for them.
        `,
      },
      {text: ' ', space: 1},
      {
        text: `
          The accusation of “stealing login credentials” is misleading. 
          Mr. Davlatov has consistently maintained that he accessed a professor’s Canvas profile only once, with the sole purpose of testing a software application he had independently developed during the Fall 2024 semester as part of his coursework in System Analysis and Design. 
          The initial version of the application was built exclusively for student use, but Mr. Davlatov sought to expand its capabilities by adding functionalities tailored to professor accounts as part of a broader development initiative.

        `,
      },
      {
        text: `
        To achieve this, he generated an access token — a step he acknowledges was ethically and procedurally improper. 
        Mr. Davlatov openly admits that this act was morally questionable and did not comply with institutional protocols. 
        However, he underscores that there was no harmful intent, no confidential data was extracted or distributed, and the access was limited, purposeful, and solely related to technical testing.
        `,
      },
      {
        text: `
          His plan was to finalize the software prototype and then disclose both the tool and the manner of access to the professor involved after a few weeks. 
          Webster University failed to see that — even though Professor Subair Ali, who taught the System Analysis and Design course, can confirm that this was indeed the project Mr. Davlatov had developed during the semester.
        `,
      },
      {
        header: [1, `
          Mr. Davlatov categorically rejects the allegation made by Dr. Anthony Jarvis concerning the alleged exposure of confidential information belonging to fellow students. 
          He considers this claim to be a false accusation with no factual basis. 
          Mr. Davlatov formally demands that Dr. Jarvis and Webster University provide concrete evidence supporting this serious allegation. 
          In the absence of such evidence, he views the accusation as defamatory and a violation of his right to a fair and transparent process.
        `],
      },
      {
        text: `
            Contrary to the account presented by Dr. Anthony Jarvis regarding the student conduct process, only two of the four meetings cited — those with the GCP Program Lead and the group referred to as the “Global GDPR team” — were initiated by the university. The remaining meetings were arranged by Mr. Mansur Davlatov himself. 
            These were not part of a structured disciplinary process but were conducted at Mr. Davlatov’s own request as he sought clarity on his academic status amid institutional silence. 
            The initiative to engage in these discussions came entirely from Mr. Davlatov, not from any formal procedure undertaken by the university.
        `,
      },

      {
        text: `
          In relation to the so-called Global GDPR team, Mr. Davlatov submitted a formal inquiry to Webster University Tashkent, requesting the names and official roles of the three individuals — described as three women — who were presented as representatives of this entity. 
          As of the time of this publication, the university has failed to provide any such information. 
          This lack of transparency has cast serious doubt on the legitimacy of the team’s existence and their purported involvement in the disciplinary process.

          Concerns about procedural integrity are further deepened by the statement made by the Senior Site Registrar, who referenced a “document received from the GDPR team” as part of the justification for Mr. Davlatov’s dismissal. 
          When asked to elaborate, the Registrar was unable to explain the document’s content or its legal basis. 
          Additionally, the inclusion of an unusual and unexplained GDPR-related legal clause within the internal disciplinary record accompanying Mr. Davlatov’s official dismissal letter has raised further suspicions. 
          These elements collectively point not merely to administrative oversight, but to a possible fabrication of due process within Webster University Tashkent’s handling of the case.
        `,
      },
      {
        text: `
          Taken together — the university’s failure to identify the so-called GDPR team members, the Registrar’s inability to verify the GDPR-related documentation, and the unexplained and legally questionable reference to GDPR within the official dismissal record — all directly point to the fabrication or misuse of procedural elements within Webster University in Tashkent, which were unjustifiably used to justify Mr. Davlatov’s dismissal.
        `,
      },
      {
        header: [
          2, 
          `
            In Summary
          `,
        ],
        text: `
        It is evident that Mr. Davlatov, a graduating student with no disciplinary record and a history of standing as a senior student, had purely positive intentions throughout his time at the university. 
        In light of this, it is clear that:

        `,
      },
      {
        listData: [
          'The university deliberately denied Mr. Davlatov a fair opportunity to appeal his dismissal.',
          'The claims of GDPR violations were fabricated and misrepresented, with no legitimate evidence or support.',
          'Mr. Davlatov’s project was academically approved and carried no malicious intent, yet the university appears to have disregarded this crucial context.',
          'The dismissal was unfair, disproportionate, and unsupported by any proper evidence or communication.',
          'The university actively withheld transparency, carrying out actions and decisions without providing any clear or open communication.',
          'The university actively refused to respond to Mr. Davlatov’s emails despite his multiple attempts over several months.',
        ],
      },
      {
        text: ' ', space: 1,
      },
      {
        header: [1, 
        'Considering all of the above, it is evident that Mr. Davlatov was significantly mistreated, and his fundamental rights were entirely disregarded throughout the totally unfair and even illegal conduct process.'
      ]
      },
      {
        text: ' ', space: 2,
      },
      {
        header: [
          2, 
          `
            Regulatory Bodies
          `,
        ]
      },
      {
        header: [
          1, 
          `
            Mr. Davlatov possesses personal communications with university staff, including private chats, emails, and other supporting documents, which have not yet been publicly shared. 
            These materials, along with a screenshot and an official document, can be made available for comparison and further validation if requested by relevant regulatory bodies. 
            This ensures the integrity of the evidence and helps substantiate the claims.
            These documents will be shared only for official purposes and to uphold the credibility of the investigation.
          `,
        ]
      },
    ],
  }
};
data.mainContent.uzbek = uzbek_translation;
function createOrderedListElement(items) {
  if (!Array.isArray(items) || items.length === 0) return null;

  const ol = document.createElement('ol');
  ol.className = 'list-decimal pl-6 space-y-2 text-gray-900 text-lg';

  items.forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    ol.appendChild(li);
  });
  return ol;
}

function renderArticle(language_id, data) {
  const language = language_index[language_id];
  const articleContainer = document.querySelector(".article");
  articleContainer.innerHTML = '';

  const title = document.createElement('h1');
  title.className = 'article-title';
  title.textContent = data.title[language_id-1] || 'Untitled';
  const byline = document.createElement('p');
  byline.className = 'article-byline';
  const not_english = !(language_id == 1);
  byline.textContent = data.author ? `${not_english ? '' : 'Documented by'} ${data.author}` : '';
  const dateTag = document.createElement('p');
  dateTag.textContent = data.date ? `${not_english ? '' : 'posted on'} ${data.date}` : '';
  const body = document.createElement('div');
  body.className = 'article-body';
  if (data.thumbnail) {
    const introImage = document.createElement('img');
    introImage.className = 'article-image';
    introImage.src = data.thumbnail;
    introImage.alt = data.title;
    body.appendChild(introImage);
  }
  const textContainer = document.createElement('div');
  textContainer.className = 'article-text';
  const content = data.mainContent[language];
  const click_detail = click_instructions[language_id];
  content.forEach(item => {
    if (Array.isArray(item.header)){
      const headerSize = item.header[0] || 2;
      const headerText = item.header[1]
      const header = document.createElement('h1');
      header.className = `text-${headerSize}xl font-bold tracking-tight text-gray-900 mb-4`;
      header.textContent = headerText;
      textContainer.appendChild(header);
    }
    if (item.listData){
      const listContent = item.listData;
      const listedContent = createOrderedListElement(listContent);
      const spacing = document.createElement('br');
      const spacing2 = document.createElement('br');
      if (listedContent){textContainer.appendChild(listedContent);}
      if(item.space){textContainer.append(spacing); if(item.space == 2){textContainer.append(spacing2)}};
    }
    if (item.text) {
      const p = document.createElement('p');
      const spacing = document.createElement('br');
      const spacing2 = document.createElement('br');
      p.textContent = item.text;
      textContainer.appendChild(p);
      if(item.space){textContainer.append(spacing); if(item.space == 2){textContainer.append(spacing2)}};
    } else if (item.image) {
if (Array.isArray(item.image) && item.image.length === 2) {
    const container = document.createElement('div');
    container.className = 'flex flex-wrap gap-4 w-full mb-4';
    item.image.forEach(src => {
      const figure = document.createElement('figure');
      figure.className = 'flex-1 article-figure';

      const a = document.createElement('a');
      a.href = src;
      a.setAttribute('data-lightbox', 'article-gallery');
      a.setAttribute('data-title', 'Zoomed image with caption');

      const img = document.createElement('img');
      img.src = src;
      img.alt = "Side-by-side image";
      img.className = 'w-full h-auto rounded shadow';

      a.appendChild(img);
      figure.appendChild(a);

      const caption = document.createElement('figcaption');
      caption.textContent = click_detail;
      caption.className = 'text-sm text-gray-500 mt-2';
      figure.appendChild(caption);

      container.appendChild(figure);
    });

    textContainer.appendChild(container);
  } else {
    const figure = document.createElement('figure');
    figure.className = 'article-figure';

    const a = document.createElement('a');
    a.href = item.image;
    a.setAttribute('data-lightbox', 'article-gallery');
    a.setAttribute('data-title', 'Zoomed image with caption');

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = "Demo image";
    img.className = 'w-full h-auto rounded shadow';

    a.appendChild(img);
    figure.appendChild(a);

    const caption = document.createElement('figcaption');
    caption.textContent = click_detail;
    caption.className = 'text-sm text-gray-500 mt-2';
    figure.appendChild(caption);

    textContainer.appendChild(figure);
  }
}
  });
  body.appendChild(textContainer);
  articleContainer.appendChild(title);
  articleContainer.appendChild(byline);
  articleContainer.appendChild(dateTag);
  articleContainer.appendChild(body);
}
const languageBar = (index_id=1)=>{
  const point = document.getElementById('languageBar');
  const structure = `
        <div class="language">
          <div onclick="changeLanguage(1);" class="languageOption ${index_id == 1 ? 'selectedLanguage' : ''}">
            <div class="languageFlag">🇺🇸</div>
            <div class="languageName">EN</div>
          </div>
          <div onclick="changeLanguage(2);" class="languageOption ${index_id == 2 ? 'selectedLanguage' : ''}">
            <div class="languageFlag">🇺🇿</div>
            <div class="languageName">UZ</div>
          </div>
          <div onclick="changeLanguage(3);" class="languageOption ${index_id == 3 ? 'selectedLanguage' : ''}">
            <div class="languageFlag">🇷🇺</div>
            <div class="languageName">RU</div>
          </div>
        </div>
    `;
  if(point){point.innerHTML = structure};
  if ((index_id == 1) || (index_id == 2)){
    tranlationNote(false);
    return renderArticle(index_id, data);
  }
  tranlationNote();
};
const changeLanguage = (language_id)=>{
  if(!(language_id == current_language)){
    languageBar(language_id);
    current_language = language_id;
  };
};
languageBar(current_language);
</script>
<script>
  const setClickEvent = (callback, pointID)=>{
    const point = document.getElementById(pointID);
    if (point){point.addEventListener('click', callback)}
  };
  const getCookie = (callback)=>{
    const layer = document.getElementById('popupLayer');
    const structure = `
      <div class="cookie-body slowShow">
          <div class="cookie-container">
            <div class="cookie-icon">
              <img src="./assets/img/cookie.png"></img>              
            </div>
            <br/>
            <h1 class="note-h1">Notice of Intended Use</h1>
            <p>
              This platform has been created to present documented cases, personal testimonies, and procedural concerns submitted by students who believe they have been unfairly treated, dismissed, or otherwise harmed by the actions of Webster University Tashkent.
            </p>
            <p>
              It's intended for formal review by the Higher Learning Commission (HLC) and the Ministry of Higher Education of the Republic of Uzbekistan.
            </p>
            <br/>
            <p class="note">
              By clicking "I Agree", you acknowledge that this content is intended for official, academic, and institutional review purposes only.
            </p>
            <button id="cookieClose" class="agreeButton">I agree!</button>
          </div>
      </div
    `;
    setTimeout(() => {
      setClickEvent(callback, 'cookieClose');
    }, 499);
    return structure;
  };
  function getLoading(){
    const dataShow = `<div class="loaderWrapper"><div class="loader"></div></div>`;
    return dataShow;
  };

  const enablePanel = (dataSource = null, waitingTime = 0, blur = false, autoClose = 0) => {
    const panel = document.getElementById('popupLayer');
    if (panel) {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
      }

      panel.classList.remove('invisible');
      if (blur) {
        panel.classList.add('blurred');
      } else {
        panel.classList.remove('blurred');
      }

      const closeIt = () => {
        panel.classList.add('slowRemove');
        localStorage.setItem('reader-agreed', 1)
        closeTimeout = setTimeout(() => {
          panel.innerHTML = '';
          panel.classList.add('invisible');
          panel.classList.remove('slowRemove');
        }, 899);
      };

      const showIt = () => {
        panel.innerHTML = getLoading();
        setTimeout(() => {
          panel.innerHTML = dataSource ? dataSource(closeIt) : '';
        }, waitingTime);
      };

      if (dataSource) {
        showIt();
      }

      if (autoClose > 0) {
        closeTimeout = setTimeout(() => {
          closeIt();
        }, autoClose);
      }
    }
  };

  function HandleSubmission(){
    const triggerPoint = document.getElementById('submissionTrigger');
    triggerPoint.addEventListener('submit', function(event) {
      event.preventDefault();
      enablePanel(submissionSuccess, 3000, true, 3999)
    });
  };
  const SubmissionPanel = (callback)=>{
    const structure = `
        <div class="modal">
          <div class="modal-header">
            <button id="closeFileTrigger" class="btn-close">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="var(--c-text-secondary)"/></svg>
            </button>
          </div>
          <div class="submission-title">
            <div>
              <h1 class="text-4xl md:text-4xl font-extrabold tracking-tight text-gray-600">
                Hi <span class="text-yellow-500 text-3xl">✋</span>
              </h1>
            </div>
            <div>
              <p>
                Were you mistreated or unfairly dismissed by Webster University in Tashkent? Then submit your case. Submission will be reviewed carefully.
              </p>
            </div>
          </div>
          <div style="height:10px;"></div>
          <form id="submissionTrigger">
          <div style="width:90%; margin:auto">
             <input
                placeholder="Your Name"
                class="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100 hover:border-gray-400 dark:hover:border-gray-500 shadow-sm"
                name="student-name"
                type="text"
                required
              />
              <div style="height:10px;"></div>
              <input
                placeholder="Telegram username or link"
                class="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100 hover:border-gray-400 dark:hover:border-gray-500 shadow-sm"
                name="student-contact"
                type="text"
                required
              />
          </div>
          <div class="modal-body">
              <div class="modal-logo">
                  <span class="logo-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="419.116" viewBox="0 0 512 419.116">
                      <defs>
                        <clipPath id="clip-folder-new">
                          <rect width="512" height="419.116" />
                        </clipPath>
                      </defs>
                      <g id="folder-new" clip-path="url(#clip-folder-new)">
                        <path id="Union_1" data-name="Union 1" d="M16.991,419.116A16.989,16.989,0,0,1,0,402.125V16.991A16.989,16.989,0,0,1,16.991,0H146.124a17,17,0,0,1,10.342,3.513L227.217,57.77H437.805A16.989,16.989,0,0,1,454.8,74.761v53.244h40.213A16.992,16.992,0,0,1,511.6,148.657L454.966,405.222a17,17,0,0,1-16.6,13.332H410.053v.562ZM63.06,384.573H424.722L473.86,161.988H112.2Z" fill="var(--c-action-primary)" stroke="" stroke-width="1" />
                      </g>
                    </svg>
                  </span>
              </div>
              <p class="modal-description">Attach the case below (ideally PDF)</p>
                  <div class="relative">
                    <input id="fileUpload" type="file" class="hidden" />
                    <button 
                      type="button"
                      onclick="document.getElementById('fileUpload').click()" 
                      class="upload-area flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-blue-500 transition duration-200"
                    >
                      <span class="upload-area-icon mb-4">
                        <!-- Your SVG icon here -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#3b82f6" viewBox="0 0 24 24">
                          <path d="M12 0l8 8h-6v8h-4v-8h-6l8-8zm-8 20v2h16v-2h-16z"/>
                        </svg>
                      </span>
                      <span class="upload-area-title text-xl font-bold text-gray-700">Drag file(s) here to upload.</span>
                      <span class="upload-area-description text-sm text-gray-500 mt-2 text-center">
                        Alternatively, you can select a file by <br />
                        <strong class="text-blue-600 underline">clicking here</strong>
                      </span>
                    </button>
                  </div>
          </div>
          <p style="color:red; margin-left: 20px">Case will not be published without your consent!</p>
          <div class="modal-footer">
            <button id="cancelClicker" class="btn-secondary">Cancel</button>
            <button id="submissionTrigger" class="btn-primary">Submit</button>
          </div>
          </form>
      </div>
    `;
    setTimeout(() => {
        setClickEvent(callback, 'closeFileTrigger');
        setClickEvent(callback, 'cancelClicker');
        HandleSubmission();
    }, 499);
    return structure;
  };
  const submissionSuccess = ()=>{
    const structure = `
        <div class="slowShow" style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;">
          <h1 class="text-5xl md:text-6xl tracking-tight text-gray-900">
            Contacting Soon!
          </h1>   
        </div>  
      `;
      return structure;
  };
const showSubmissionPanel = ()=>enablePanel(SubmissionPanel, 499, true);
const handleAgreement = ()=>{
  const previous_interaction = localStorage.getItem('reader-agreed');
  if(!(previous_interaction == 1)){enablePanel(getCookie, 0, true)};
};
handleAgreement();
