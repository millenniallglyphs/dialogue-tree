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
    const temp = Dialogue[newq].questions
    setQuiz(quiz.filter((_, i2) => i2 !== i))
    setQuiz(quiz => quiz.concat(temp))
    
  }

  
  
const endq = () => {
    setLine("finish");
    setconcat("finish");
    scrollDown();
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
       <p>
         test
         </p>
      )
    ));
  };

  useEffect(() => {
    window.addEventListener('load', () => {
      
    });
  });


  const renderLabel = () => {

    const beep = current_step.length

    return (
      quiz ? (

        <div className={css`
        color: #9D9A9A;
        display: flex;
        width: 100%;
        margin-right: 1em;
        font-size: 1em;
        justify-content: flex-end;
        animation-delay: ${(beep + 0.5) + 's'};
        animation-name: buttonappear;
        animation-duration: 0.5s;
        animation-fill-mode: backwards;
      `}>
        Ask me a question
      </div>
      ) : (
       <p>
         test
         </p>
      )
    );
  };

  useEffect(() => {
    window.addEventListener('load', () => {
      
    });
  });



 

 const treewatch = () => {
  const timer = setTimeout(() => {
   console.log(trees.length)
   if (trees.length === 8) {
    console.log("good bye")
    endq();
  }
}, 4000);
return () => clearTimeout(timer);
 }
  
useEffect(() => {
 
  window.addEventListener('click', treewatch);
  return () => window.removeEventListener('click', treewatch);
  
}, [treewatch]);

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
          color: #F8F8F8;
          font-size: 1.8em;
          @media (max-width: 600px) {
            animation-name: appearb;
            animation-duration: 0.5s;
            animation-fill-mode: both;
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
            
            </div>
            <div className={css`
              display: flex;
              flex-wrap: wrap;
              width: 100%;
              align-items: center;
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
            padding-bottom: ${hidden ? ("0px") : ("3vh")};
            position: absolute;
            left: 0;
            transition: left 0.5s;
            overflow: hidden;
            position: relative;
            z-index: 3;
        `}
        >
          
        <div className={css`
          padding: 0px;
          margin: auto;
          display: grid;
          height: 700px;
          max-width: 1200px;
          border-radius: 8px;
          background: #1A3448;
          grid-template-rows: 1fr 180px;
          padding-bottom: 0.5em;
          z-index: 3;
          @media (max-width: 1200px) {
            max-width: 100vw;
            margin: 1em;

          }
          @media (max-width: 600px) {
            height: 70vh;
            max-width: 100vw;
            grid-template-rows: 1fr 160px;
            padding-bottom: 1em;
          }
        `}>
          <div className="chatHold">
            <div className={css`
                flex: 1 1 auto;
                display: flex;
                flex-direction: column-reverse;
                background: none;
                height: 100%;
                padding: 0em 1em;
                overflow: scroll !important;
                @media (max-width: 1000px) {
                  padding: 1em;
                }
            `} id="reverseflow">
              <div className={css`
              width: 100%;
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
            min-height: 90px;
            gap: 0.5rem;
            padding: 1em 0.85rem 0em 0.85em;
            width: 100%;
            margin: auto;
            position: relative;
            z-index: 3;
            box-shadow: 0px 0px 8px 8px ##FAFAFA;
            @media (max-width: 1000px) {
              margin: 0em;
              width: 100%;
              padding-top: 0em;
            }
          `}>
            <div className={css`
              color: #0D6AB1;
              display: flex;
              width: 100%;
              justify-content: flex-end;
            `}>
              {renderLabel()}
            </div>
            {renderQuestions()}
          </div>
        </div>
      </div>
    )
}