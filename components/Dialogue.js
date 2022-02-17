const Dialogue = {
    start: {
      dialogue:
        [ 
          {d: "Hello."},
          {d: "My Name's Calvin."},
          {d: "I help teams discover emergent possibility, act with empathy, and deliver products that people want to use."},
          {d: 'Choose a question to learn more.'},
        ],
      questions: 
        [
          {q: "What's your experience?", next: "experience"},
          {q: "What's your skill set?", next: "ability"},
        ]
    },
    experience: {
      dialogue:
        [ 
          {d: "I've held roles ranging from:"},
          {d: "1. Creative Technologist"},
          {d: "2. Product Designer"},
          {d: "I've freelanced with an open-source tech org, start-ups, and design studios, including."},
          {d: "Selman"},
          {d: "XXIX"},
        ],
      questions: 
        [
          {q: "What's your skill set?", next: "ability"},
          {q: "What's your process?", next: "challenge"},
        ]
    },
    challenge: {
      dialogue: [
        {d: "I start by finding the right people to talk to."},
        {d: "From this I outline what needs solving. "},
        {d: "Research usually comes next."},
        {d: "Sketching, conversation, and brainstorming grow from this."},
        {d: "High fidelity prototypes are defined."},
        {d: "Before production, I write up my thought process."},
        {d: "This lets me document, and ensures I haven't missed something."},
        {d: "Often these steps can take multiple attempts to get right."}
      ],
      questions:
      [
        {q: "What are your design abilities?", next: "ability"},
      ]
    },
    ability: {
      dialogue:
      [
        {d: "I work across the product skill tree, taking on roles that include:"},
        {d: "1. Facilitation"},
        {d: "2. User Research"},
        {d: "3. UX Design"},
        {d: "4. UI Design"},
        {d: "5. Prototyping"},
        {d: "6. Dev Handoff"}
      ],
      questions:
      [
        {q: "What ideas make you excited?", next: "excited"},
      ]
    },
    excited: {
      dialogue: [
        {d: "I'm interested in commons governance, "},
        {d: "defi,"},
        {d: "Free software"},
        {d: "ecology,"},
        {d: "permaculture, "},
        {d: "and localizing power systems."}
      ],
      questions: [
        {q: "So, what's next?", next: "end"},
      ]
    },
    passion: {
      dialogue:
        [ 
          {d: "Shaping systems means shaping outcomes. "},
          {d: "In a world where power is increasingly defined by systems, I believe design plays a critical role. "},
        ],
      questions: 
        [
          {q: "What experience do you have?", next: "experience"},
        ]
    },
    test: {
      dialogue:
      [
        {d: 'test'},
      ],
      questions:
      [
        {q: "test", next: "live"}
      ]
    },
    end: {
      dialogue: [
        {d: "If you want to talk,"},
        {d: "if you're interested in collaborating, "},
        {d: "or, if you want to share a project you're excited about"},
        {d: "please, email me at hello@calvin.ooo"},
      ],
      questions: [
        
      ]
    }
  }

export default Dialogue;