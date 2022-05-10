const Dialogue = {
    start: {
      dialogue:
        [ 
          {d: "Hello."},
          {d: "My Name's Calvin."},
          {d: "I'm a designer accelerating into the future."},
          {d: "currently"},
          {d: 'Try asking a  question to learn more.'},
        ],
      questions: 
        [
          {q: "Can I see your work?", next: "work"},
          {q: "What's your experience?", next: "experience"},
          {q: "Can I hire you?", next: "end"},
        ]
    },
    work: {
      dialogue: 
      [
        {d: "Here are a few of my case-studies I think you'd be interested in."},
        {d: "db"},
        {d: "dc"},
      ],
      questions:
      [
        {q: "What's your skill-set?", next: "ability"}
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
          {q: "Do you write about design?", next: "writing"},
        ]
    },
    writing: {
      dialogue: [
        {d: "Yes! Writing is an important part of my practice. Check out these pieces:"},
        {d: "cf"},
        {d: "daw"},
        {d: "cc"},
      ],
      questions:
      [
        {q: "What do you do outside of design?", next: "hobby"}
      ]
    },
    dog: {
      dialogue: [
        {d: "dog-pic"},
        {d: "Yes! Here is my boy Cobol. 🐩"},
      ],
      questions:
      [
        
      ]
    },
    hobby: {
      dialogue: [
        {d: "trunnel-pic"},
        {d: "I'm into carpentry, running, cycling and gardening."},
      ],
      questions:
      [
        
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
        {q: "Do you have a dog?", next: "dog"},
      ]
    },
   
    
    end: {
      dialogue: [
        {d: "Do you have more questions?"},
        {d: "Are you interested in collaborating?"},
        {d: "Want to hire me?"},
        {d: "Please, shoot me an email:"},
        {d: "hello@calvin.ooo"}
      ],
      questions: [
        
      ]
    }
  }

export default Dialogue;