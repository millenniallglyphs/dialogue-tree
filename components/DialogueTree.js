import { useState, useEffect } from 'react'
import { css } from '@emotion/css'
import Dialogue from './Dialogue'
import Button from './Button'
import StyleSelect from '../lib/StyleSelect';
import { useContext } from 'react';
import DialogueText from '../components/DialogueText'




export default function DialogueTree() {

    const color = useContext(StyleSelect)

    const testStyle = {
        width: '100%',
        textAlign: 'right',
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
        margin: 'auto'
      }
    
    
    
    
      const startTree = { dia: Dialogue.start.dialogue}

    const [line, setLine] = useState("start");
    const [realq, setRealq] = useState("");

    const current_step = Dialogue[line].dialogue;
    const current_question = Dialogue[line].questions;
    const [trees, setTrees] = useState([startTree]);

  const setconcat = (va, q) => {
    const temp = Dialogue[va].dialogue
    const tempq = current_question[q]
    const a = { dia:
                  temp,
                  qu:
                  tempq
    }
    setTrees(trees => trees.concat(a))
  }



  const renderQuestions = () => {
    return current_question.map(({ q, next }, index) => (
      q ? (
      <Button
      check={() => {
        setLine(next);
        setRealq(q);
        setconcat(next, index);
      }} 
      key={index}
      step={current_step}
      >
          {q}
        </Button>
      ) : (
        null
      )
    ));
  };

  useEffect(() => {
    window.addEventListener('load', () => {
      console.log(trees);
    });
  });

  const renderTree = () => {
    return trees.map(({dia, qu}, index) => (
      <div key={index}
        className={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.5em;
        `}
      >
        { qu ? ( 
          <div style={testStyle}>
          <div className={css`
          display: inline-block;
          padding: 0.5em 1em 0.5em 1em;
          border-radius: 0.75em 0.75em 0.12em 0.75em;
          color: ${ color.styled==="light" ? ('#fff') : ('#39435B')};
          font-weight: 400;
          background: #000;
          animation-name: appear;
          animation-duration: 0.5s;
          animation-fill-mode: backwards;
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
          dia.map(({ d }, index) => (
          <DialogueText key={index} index={index}>
                {d}
            </DialogueText>  
          ))
        ) : (
          null
        )}
      </div>
     
    ));
  }

    return (
        <div className={css`
            padding-top: 0;
            padding-bottom: 1em;
            width: 100%;
            background: ${ color.styled==="light" ? ('#F4F4F4') : ('#161616')};
        `}
        >
        <div style={noMarg}>
          <div className="chatHold">
            <div className={css`
                flex: 1 1 auto;
                display: flex;
                flex-direction: column-reverse;
                background: none;
                overflow-y: scroll; /* or overflow-y: auto */
                width: 100%;
            `}>
              <div>
              {renderTree()}
              </div>
            </div>
          </div>
          <div className="questionHold">
            {renderQuestions()}
          </div>
        </div>
      </div>
    )
}