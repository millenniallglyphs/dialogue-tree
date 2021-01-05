import Head from 'next/head'
import { useState, useEffect } from 'react'
import { css, cx } from '@emotion/css'


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
            {d: "Hello. 🌱"},
            {d: "My name's Calvin."},
            {d: 'Welcome to my website. This my space to showcase my work.'},
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

  const startTree = { dia:
  [ 
    {d: "Hello. 🐌"},
    {d: "My name's Calvin."},
    {d: 'Welcome to my website. This my space to showcase my work.'},
    {d: 'Please, look around. And feel free to ask me a question.'},
  ]
}
  
  
  const current_step = dialogue[line].dialogue;
  const current_question = dialogue[line].questions;

  const [trees, setTrees] = useState([startTree]);

  // the plan is to render from the concattonated array of the 

  

  //concatonates a a
  const setconcat = (va, q) => {
    const temp = dialogue[va].dialogue
    const tempq = current_question[q]
    const a = { dia:
                  temp,
                  qu:
                  tempq
    }
    setTrees(trees => trees.concat(a))
    console.log(trees)
  }



  const renderQuestions = () => {
    return current_question.map(({ q, next }, index) => (
      <button onClick={() => {
          setLine(next);
          setRealq(q);
          setconcat(next, index);
        }} key={index}
        className={css`
          padding: 0.5em;
          color: #B8D4FF;
          background: #204EF0;
          border-radius: 0.5em;
          border: none;
          outline: none;
          font-size: 1em;
          animation-delay: ${((current_step.length*1.5) + 2) + 's'};
          animation-name: appear;
          animation-duration: 0.5s;
          animation-fill-mode: backwards;
          font-weight: 600;
          margin-left: 1em;
        `}
        >
        {q}
      </button>
    ));
  };

  useEffect(() => {
    window.addEventListener('load', () => {
      console.log(trees);
    });
  });

  const renderTree = () => {
    return trees.map(({dia, qu}, index) => (
      <div key={index}>
        { qu ? ( 
          <div style={testStyle}>
          <h2>
            <span style={qSpan}>
              {qu.q}
            </span>
          </h2>
        </div>
        ) : ( 
          null
        )}
        { dia ? (
          dia.map(({ d }, index) => (
          <div className="dhold" key={index}>
            <h2 className={css`
                opacity: 1;
                display: box;
                height: 0px;
                margin: 3em;
                animation-name: appear;
                animation-duration: 3s;
                animation-delay: ${1.5*index + 's'};
                animation-fill-mode: backwards;
              `}>
              <span className={css`
              padding: 0.5em;
              background: #E7EAEE;
              border-radius: 0.5em;
              color: #39435B;
              `}
              >
                {d}
              </span>
            </h2>
          </div>
          ))
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

        .dhold {
          width: 100%;
        }
        
        .chatHold {
          height: 300px;
          display: flex;
          flex-flow: column;
          width: 100%;
        }

        .chat {
          flex: 1 1 auto;
          display: flex;
          flex-direction: column-reverse;
          background: white;
          overflow-y: scroll; /* or overflow-y: auto */
          width: 100%;
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
