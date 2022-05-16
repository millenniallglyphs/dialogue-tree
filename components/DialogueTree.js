import { useState, useEffect, useCallback, eventListener } from 'react'
import { css } from '@emotion/css'
import Dialogue from './Dialogue'
import Button from './Button'
import StyleSelect from '../lib/StyleSelect';
import { useContext } from 'react';
import DialogueText from '../components/DialogueText'
import SimpleFooter from './SimpleFooter';




export default function DialogueTree({hidden}) {

    const color = useContext(StyleSelect)


    const scrollDown = () => {
      const e = document.getElementById("reverseflow");
      e.scrollTo(0, 0);
    }

    const testStyle = {
        width: '100%',
        textAlign: 'right',
        marginTop: '0.5em'
      }
    
      const qSpan = {
        padding: '0.5em',
        borderRadius: '0.5em',
        color: '#204EF0',
        animationName: 'appear',
        animationDuration: '0.5s',
        animationFillMode: 'backwards',
        fontWeight: '400',
      }
    
      const noMarg = {
        maxWidth: '900px',
        padding: '0px',
        margin: 'auto',
        display: 'grid',
        height: '100vh',
        gridTemplateRows: '1fr 65px'
      }
    
    
    
    
      const startTree = { dia: Dialogue.start.dialogue}

    const [line, setLine] = useState("start");
    const [realq, setRealq] = useState("");

    const current_step = Dialogue[line].dialogue;
    const current_question = Dialogue[line].questions;
    const [trees, setTrees] = useState([startTree]);

  const setconcat = (va, q) => {
    const temp = Dialogue[va].dialogue
    const tempq = quiz[q]
    const a = { dia:
                  temp,
                  qu:
                  tempq
    }
    setTrees(trees => trees.concat(a))
  }

  const [quiz, setQuiz] = useState(current_question)

  const setquizconcat = (i, newq) => {
    console.log(quiz.length)
    const temp = Dialogue[newq].questions
    setQuiz(quiz.filter((_, i2) => i2 !== i))
    setQuiz(quiz => quiz.concat(temp))
    
  }

  const eventListner = useCallback(() => {
    console.log(quiz); // use the stateful variable in event listener
  }, [quiz]);
 

  
const endq = () => {
  console.log(quiz)
  if (quiz.length > 0) {
    console.log("questions")
  } else {
    console.log("no more questions")
    setLine("finish");
    setconcat("finish");
    scrollDown();
  }
}
    
 


  const renderQuestions = () => {
    return quiz.map(({ q, next }, index) => (
      q ? (
        <div className={css`
          display: flex;
          justify-content: flex-end;
        `}>
        <Button
        check={() => {
          setLine(next);
          setRealq(q);
          setconcat(next, index);
          scrollDown();
          setquizconcat(index, next);
        }} 
        key={index}
        step={current_step}
        >
            {q}
          </Button>
        </div>
      ) : (
       null
      )
    ));
  };

  useEffect(() => {
    window.addEventListener('load', () => {
      
    });
  });

  const renderTree = () => {
    return trees.map(({dia, qu}, index) => (
      <div key={index}
        className={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.75em;
        `}
      >
        { qu ? ( 
          <div style={testStyle}>
          <div className={css`
          display: inline-block;
          padding: 0.5em 1em 0.5em 1em;
          border-radius: 0.75em 0.75em 0.12em 0.75em;
          font-weight: 400;
          animation-name: appear;
          animation-duration: 0.5s;
          animation-fill-mode: both;
          color: #2F20D6;
          @media (max-width: 1000px) {
            animation-name: appearb;
            animation-duration: 0.5s;
            animation-fill-mode: both;
            font-size: 1.2em;
          }
          `}>
            <p className={css`
              margin: 0;
            `}>
              {qu.q}
            </p>
          </div>
        </div>
        ) : ( 
          null
        )}
        { dia ? (
          <div className={css`
              display: flex;
              width: 100%;          
          `}>
            <div>
            <div className={css`
                            height: 3em;
                            width: 3em;
                            background-image: url('/headshot.jpg');
                            background-size: cover;
                            background-position: center;
                            border-radius: 2em;
                            margin-right: 1em;
                            isolation: isolate;
                            @media (max-width: 1000px) {
                              margin-right: 0em;
                            }
                        `}></div>
            </div>
            <div className={css`
              display: flex;
              flex-direction: column;
              width: 100%;
            `}>
          {dia.map(({ d }, index) => (
          <DialogueText key={index} index={index}>
                {d}
          </DialogueText>  
          ))}
          </div>
          </div>
        ) : (
          null
        )}
      </div>
     
    ));
  }

    return (
        <div className={css`
            padding-top: 0;
            width: 100%;
            position: absolute;
            left: ${hidden ? ("-200vw") : ("0")};
            transition: left 0.5s;
        `}
        >
        <div className={css`
          padding: 0px;
          margin: auto;
          display: grid;
          height: 100vh;
          width: 100vw;
          padding-bottom: 1em;
          grid-template-rows: 1fr 155px 60px;
          @media (max-width: 1000px) {
            height: 100vh;
            width: 100vw;
            grid-template-rows: 1fr 130px 33px;
            padding-bottom: 0em;
          }
        `}>
          <div className="chatHold">
            <div className={css`
                flex: 1 1 auto;
                display: flex;
                flex-direction: column-reverse;
                background: none;
                height: 100%;
                
                overflow-y: scroll;
                padding: 1em;
                @media (max-width: 1000px) {
                  padding: 1em;
                }
            `} id="reverseflow">
              <div className={css`
              width: 1000px;
              margin-left: auto;
              margin-right: auto;
              @media (max-width: 1000px) {
                width: 100%;
              }

              `}>
              {renderTree()}
              </div>
            </div>
          </div>
          <div className={css`
            display: flex;
            justify-content: flex-end;
            flex-direction: column; 
            min-height: 130px;
            gap: 0.5rem;
            padding: 1em 0.85rem 1em 0.85em;
            width: 1000px;
            margin: auto;
            position: relative;
            z-index: 3;
            box-shadow: 0px 0px 8px 8px #F5F5F5;
            @media (max-width: 1000px) {
              margin-left: 0em;
              margin-right: 0em;
              border-radius: 0em;
              width: 100%;
            }
          `}>
            {renderQuestions()}
          </div>
          <SimpleFooter/>
        </div>
      </div>
    )
}