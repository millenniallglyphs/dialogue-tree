import { css } from '@emotion/css'
import FileBlock from './FileBlock';
import Footer from './Footer';
import React from 'react';


export default function PostLayout({tags, features, team, title, date, image, bgcolor, children, kind}) {

  const [isOpen, setIsOpen] = React.useState(false);

    const renderOptions = () => {
        return tags.map(({ target, label, }, index) => (
            <div className={css`
                padding: 0.5em;
                border-radius: 8px;
                color: #04082B;
                background: #fff;
                font-size: 0.8em;
                box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.14);
            `} key={index}>
                {label}
            </div>
        ));
      };
    
    const renderFeatures = () => {
      return features.map(({title, target}, index) => (
        <div>
        <a href={target} key={index} target="_blank" className={css`
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
        `}>{title}</a>
        </div>
      ));
    }  
    
    const renderTeam = () => {
      return team.map(({name, target}, index) => (
        <a href={target} key={index}>{name}</a>
      ));
    }

    const renderAll = () => {
      return(
        <div> 
          { tags ? (
          <p className={css`
                  margin-top: 0em;
                  font-size: 0.8em;
                  font-weight: 800;
                  text-transform: uppercase;
                  padding-bottom: 1em;
                `}>My Roles</p>
          ) :( null ) }
                  <div className={css`
                        display: flex;
                        justify-content: flex-end;
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
        { team ? (
                <>
                <p>Team</p>
                {renderTeam()}
              </>
         ) : (
                null
          )}
          { features ? (
              <p className={css`
                font-size: 0.8em;
                font-weight: 800;
                text-transform: uppercase;
                padding-top: 1em;
                padding-bottom: 1em;
              `}>Deliverables</p>
          ) : ( null ) }
              <div className={css`
                  display: grid;
                  grid-template-columns: 1fr;
                  grid-gap: 1em;
                  justify-content: end;
                  @media (max-width: 1000px) {
                    justify-content: start;
                  }
                  `}>
                    { features ? (
                      renderFeatures()
                    ) : (
                      null
                    )
                    }
                </div>
          </div>
      )
    }

    return(
        <>
        <div className={css`
           z-index: 4;
           background: #F4F4F4;
           position: relative;
           width: 1000px;
           margin: auto;
          @media (max-width: 1000px) {
            width: 100%;
            }
          `}>
            <div />
            <div className={css`
                  
                  padding-bottom: 1em;
                  padding-left: 1em;
                  padding-top: 84px;

                  max-width: 750px;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  z-index: 3;
                  @media (max-width: 1000px) {
                    margin-top: 0px;
                  }
  
              `}>
                
              <div>
                <h1 className={css`
                    font-weight: 600;
                    font-size: 3.2em;
                    line-height: 1em;
                    padding-left: 0rem !important; 
                    color: #04082B;
                    margin: 0;
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