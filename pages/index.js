import Head from 'next/head'
import { useState, useEffect } from 'react';


export default function Home() {

  const testStyle = {
    width: '100%',
    textAlign: 'right',
  }

  const qSpan = {
    padding: '0.5em',
    background: '#B8D4FF',
    borderRadius: '0.5em',
    color: '#204EF0',
    margin: '1em',
    animationName: 'appear',
    animationDuration: '0.5s'
  }

  const dSpan ={
    padding: '0.5em',
    background: '#E7EAEE',
    borderRadius: '0.5em',
    color: '#39435B',
    margin: '1em',
    animationName: 'appear',
    animationDuration: '4s',
    animationDelay: '2s'
  }

  const dialogue = 
    {
      start: {
        dialogue:
          [ 
            {d: "Hello."},
            {d: "My name's Calvin"},
            {d: 'Welcome to my website. This my space to showcase my work'},
            {d: 'Please, look around. And feel free to ask me a question.'},
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
  
  const [line, setLine] = useState("start");
  const [realq, setRealq] = useState("");
  

  //setTimeout(() => setconcat(), 130);
  
  
  const current_step = dialogue[line].dialogue;
  const current_question = dialogue[line].questions;

  const [tree, setTree] = useState(dialogue[line].dialogue);

  // the plan is to render from the concattonated array of the 

  //concatonates a 
  const setconcat = (va, q) => {
    const temp = dialogue[va].dialogue
    const tempq = current_question[q]
    setTree(tree => tree.concat(tempq))
    setTree(tree => tree.concat(temp))
    console.log(tree)
  }



  const renderQuestions = () => {
    return current_question.map(({ q, next }, index) => (
      <button onClick={() => {
          setLine(next);
          setRealq(q);
          setconcat(next, index);
        }} key={index}>
        {q}
      </button>
    ));
  };

  useEffect(() => {
    window.addEventListener('load', () => {
      console.log(tree);
    });
  });

  const renderTree = () => {
    return tree.map(({ d, q }, index) => (
    <div key={index}>
      { q ? ( 
        <div style={testStyle}>
        <h2>
          <span style={qSpan}>
            {q}
          </span>
        </h2>
      </div>
      ) : ( 
        null
      )}
      { d ? (
        <div className="dhold">
          <h2>
            <span className="dSpan">
            {d}
            </span>
          </h2>
        </div>
      ) : (
        null
      )}
    </div>
    ));
  }


  /*
      if (undefined !== current_step.next) {
        current_line = find_label(current_step.next);
      } else {
        current_line = current_line + 1;
      }
*/
/*
    } else if (undefined !== current_step.question) {

      // display the question: current_step.question
      // display the answers: current_step.answers
      // choose an answer
      // and change current_line accordingly

    }
    */


  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="chatHold">
          <div className="chat">
            <div>
              {renderTree()}
            </div>
          </div>
        </div>
        <div className="questionHold">
          {renderQuestions()}
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
        }

        h1 {
          text-align: right;
        }


        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .qhold {
          width: 80%;
          text-align: right;
          background: red;
        }
        
        .chatHold {
          height: 300px;
          display: flex;
          flex-flow: column;
        }

        .chat {
          flex: 1 1 auto;
          display: flex;
          flex-direction: column-reverse;
          background: white;
          overflow-y: scroll; /* or overflow-y: auto */
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
