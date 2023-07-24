import { css } from '@emotion/css'
import FileBlock from './FileBlock';
import Footer from './Footer';
import React from 'react';
import { useState } from 'react';


export default function PostLayout({tags, features, team, title, date, image, bgcolor, children, kind}) {

  const [open, setOpen] = React.useState(false);

  const openSet = () => {
    setOpen(true)
  }

  const closeSet = () => {
    setOpen(false)
  }

    const renderOptions = () => {
        return tags.map(({ target, label, }, index) => (
            <div className={css`
                padding: 0.5em;
                border-radius: 8px;
                color: #494949;
                background: #ECEAEA;
                font-size: 0.8em;
            `} key={index}>
                {label}
            </div>
        ));
      };
    
    
    const renderTeam = () => {
      return team.map(({name, target, pic, role}, index) => (
                <div key={index} className={css`
                  display: flex;
                  align-items: center;
                  gap: 0.5em;
                  margin-left: ${ index != 0 ? ( open ? ("0px") :("-24px")) : ("0px")}
                `}>
                  <div className={css`
                    background: url(${pic});
                    width: 36px;
                    height: 36px;
                    background-size: cover;
                    border-radius: 36px;
                  `}></div>
                  <div className={css`
                    opacity: ${ open ? ("1") : ("0")};
                    width: ${ open ? ("auto") : ("0px")}
                  `}>
                      <a href={target} className={css`
                        &::after {
                          content: " ↗";
                        }
                      `}>{name}</a>
                    </div>
                    <div className={css`
                     color: #494949;
                     font-size: 0.8em;
                     opacity: ${ open ? ("1") : ("0")};
                    width: ${ open ? ("auto") : ("0px")}
                    `}>
                      {role}
                    </div>
                </div>

      ));
    }

    const renderAll = () => {
      return(
        <div> 
          <div className={css`
            display: flex;
            width: 100%;
            justify-content: space-between;
          `}>
            <div className={css`
                display: flex;
                flex-wrap: wrap;
                gap: 0.5em;
                color: #fff;
                @media (max-width: 1000px) {
                  justify-content: flex-start;
                }
                `}>
                  { tags ? (
                    renderOptions()
                  ) : (
                    null
                  )
                  }
              </div>
              <div>
              <div>
                  <a href={features[0].target} target="_blank" className={css`
                  color:  #04082B;
                  border-bottom: 0px solid #04082B;
                  transition: border-bottom 1s;
                  font-weight: 400;
                  &:hover {
                    border-bottom: 2px solid #04082B;
                  }
                  &::after {
                    content: " ↗";
                  }
                  `}>{features[0].title}</a>
                  </div>
              </div>
          </div>
                  
        { team ? (
                <>
                <div className={css`
          background: #ECEAEA;
          padding: 0.5em;
          border-radius: 8px;
          margin-top: 1em;
        `}>
          <div className={css`
            display: flex;
            width: 100%;
            justify-content: space-between;
            margin: 0;
            padding: 0;
          `}>
        <div className={css`
                position: relative;
                z-index: 2;
                background: #ECEAEA;
                `}>
                <div className={css`
                  overflow: hidden;
                  max-height: ${open ? ("400px") : ("36px")};
                  transition: max-height 1s, padding 1s, opacity 1.5s, margin-top 1s;
                  border-radius: 8px;
                  background: #ECEAEA;
                  padding: ${open ? ("0.5em 0em") : ("0px")};
                  padding-right: 1em;
                  position: relative;
                  z-index: 3;
                  display: flex;
                  flex-direction: ${open ? ("column") : ("row")};
                  gap: ${open ? ("0.5em") : ("-16px")};

                `}>
                   {renderTeam()}

                </div>
         
        </div>
        <div className={css`
                    transform: ${ !open ? ('rotate(0deg)') : ('rotate(180deg)')};
                    transition: transform 1s, background 1s;
                    height: 34px;
                    width: 34px;
                    padding: 5px;
                    border-radius: 24px;
                    cursor: pointer;
                    :hover {
                      background: #F6F6F0;
                    }
                  `}
                  onClick={() => {
                    !open ? (
                      openSet()
                    ) : (
                      closeSet()
                    )
                  }}
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 14L8 10H16L12 14Z" fill="#4D4D4D"/>
</svg>
                  </div>
                  </div>
                  

        </div>
              </>
         ) : (
                null
          )}
              
          </div>
      )
    }

    return(
        <>
        <div className={css`
           z-index: 4;
           position: relative;
           width: 1000px;
           margin: auto;
          @media (max-width: 1000px) {
            width: 100%;
            }
          `}>
            <div />
            <div className={css`
                  
                
                  padding-top: 84px;

                  max-width: 1000px;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  z-index: 3;
                  @media (max-width: 1000px) {
                    margin-top: 0px;
                  }
  
              `}>
                
              <div>
                {renderAll()}
                <h1 className={css`
                    font-weight: 600;
                    font-size: 3.8em;
                    line-height: 1em;
                    font-family: 'garamond' !important;
                    padding-left: 0rem !important; 
                    color: #04082B;
                    margin: 0;
                    margin-top: 1em;
                    padding-left: 2rem;
                    @media (max-width: 1000px) {
                      margin: 0;
                      padding-left: 0rem;
                    }
                `}>{title}</h1>
              </div>
          
             
              </div> 
  
          </div>
      
          
      
        <div className={css`
           width: 1000px;
           margin: auto;
           @media (max-width: 1000px) {
              grid-template-columns: 1fr;
              grid-template-rows: auto 1fr;
              width: 100%;
            }
          `}>
          
          
            <div className={css`
             max-width: 100%;
             @media (max-width: 1000px) {
               max-width: 100%;
             }
            `}>
              <div className={css`
                  margin-top: 0px;
                  @media (max-width: 1000px) {
                    padding-left: 0em;
                    padding-right: 0em;
                  }
              `}>
                 {children}
              </div>  
              </div>
            
        </div>
       
        </>  
    )
}