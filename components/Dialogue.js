const Dialogue = {
    start: {
      dialogue:
        [ 
          {d: "Hello."},
          {d: "My name's Calvin."},
          {d: 'I design products for the complexity of real life.'},
          {d: 'What can I tell you about my practice?'},
        ],
      questions: 
        [
          {q: "What experience do you have?", next: "experience"},
          {q: "What makes you passionate?", next: "passion"},
        ]
    },
    experience: {
      dialogue:
        [ 
          {d: "From freelance,"},
          {d: "to start ups,"},
          {d: "to an Open Source tech org,"},
          {d: "I've worked in many different environments."},
          {d: "I've held titles ranging from product designer "},
          {d: "to creative technologist."}
        ],
      questions: 
        [
          {q: "How do you tackle a design challenge?", next: "challenge"},
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
        {d: "I'm a full stack designer."},
        {d: "I can think through UX problems"},
        {d: "I can develop UI solution"},
        {d: "I can construct pixel perfect prototypes"},
        {d: "And I can build production ready React components."}
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