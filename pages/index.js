import Head from 'next/head'
import { useState, useEffect } from 'react'
import { css } from '@emotion/css'
import Meta from '../components/Meta'
import Project from '../components/Project'
import Hold from '../components/Hold'


export default function Home() {

  const testStyle = {
    width: '100%',
    textAlign: 'right',
  }

  const qSpan = {
    padding: '0.5em',
    borderRadius: '0.5em',
    color: '#204EF0',
    margin: '1em',
    animationName: 'appear',
    animationDuration: '0.5s',
    fontWeight: '400'
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
    {d: "Hello."},
    {d: "My name's Calvin."},
    {d: 'I design products that fit the complexity of peoples’ lives.'},
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
          color: #fff;
          background: #204EF0;
          border-radius: 0.5em;
          border: none;
          outline: none;
          font-size: 1em;
          animation-delay: ${((current_step.length*1.5) + 2) + 's'};
          animation-name: appear;
          animation-duration: 0.5s;
          animation-fill-mode: backwards;
          font-weight: 400;
          margin-left: 0.5em;
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
                margin-top: 2em;
                margin-bottom: 2em;
                animation-name: appear;
                animation-duration: 3s;
                animation-delay: ${1.5*index + 's'};
                animation-fill-mode: backwards;
              `}>
              <span className={css`
              padding-top: 0.5em;
              padding-bottom: 0.5em;
              border-radius: 0.5em;
              color: #39435B;
              font-weight: 400;
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
      <Meta />
      <main>
        <Hold>
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
        </Hold>
      </main>
      <Hold>
        <Project 
          image="botshot.gif"
          date="2020" 
          name="Epiphyte" 
          description="test"  
          options={[
              { value: 'test ', label: 'Read the casestudy' },
              { value: 'test', label: 'See the code' }
          ]} 
        />
      </Hold>
      <Hold>
      </Hold>
      
    </div>
  )
}
