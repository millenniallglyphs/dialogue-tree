const Dialogue = {
    start: {
      dialogue:
        [ 
          {d: "Hi. My Name's Calvin"},
          {d: "cc"},
          {d: "I work on projects like these"},
          {d: "da"},
          {d: "db"},
          {d: "dc"},
          {d: "dd"},
        ],
      questions: 
        [
          {q: "What's your skill-set?", next: "ability"},
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
          {q: "What do you do outside of design?", next: "hobby"}
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
      ],
      questions:
      [
        {q: "What's your experience?", next: "experience"}
      ]
    },
    hobby: {
      dialogue: [
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
        {d: "6. Front end dev"}
      ],
      questions:
      [
        
      ]
    },
    dev: {
      dialogue:
      [
        {d: "I have front end experience, mainly working in React frameworks"},
        {d: "This includes building component libraries, and webapp development."},
      ],
      questions:
      [
        
      ]
    },
    end: {
      dialogue: [
        {d: "hello@calvin.ooo"}
      ],
      questions: [
        
      ]
    },
    finish: {
      dialogue: [
        {d: "Thanks for chatting."},
        {d: "I hope to talk again soon."}
      ],
      questions: [
        
      ]
    }
  }

  

export default Dialogue;