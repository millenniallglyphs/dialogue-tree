const Dialogue = {
    start: {
      dialogue:
        [ 
          {d: "Hello. 🌱"},
          {d: "My name's Calvin."},
          {d: 'I design products that fit the complexity of real life.'},
          {d: 'Please, ask me a question.'},
        ],
      questions: 
      //need to update the structure to handle the questions so that they can be passed to the concat function
        [
          {q: "What is design for the animate?", next: "animate"},
          {q: "Where do you live?", next: "live"}
        ]
    },
    animate: {
      dialogue:
      [ 
        {d: "Design for the animate is xyz"},
        {d: "another line"},
      ],
      questions: 
      [
        {q: "test", next: "test"},
        {q: "alt test", next: "testb"}
      ]
    },
    live: {
      dialogue:
      [ 
        {d: "I live on Orcas Island"},
      ],
      questions: 
      [
        {q: "test", next: "test"},
        {q: "alt test", next: "testb"}
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
    }
  }

export default Dialogue;