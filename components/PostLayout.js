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
            `}>
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
          <p className={css`
                  margin-top: 0em;
                  font-size: 0.8em;
                  font-weight: 800;
                  text-transform: uppercase;
                  padding-bottom: 1em;
                `}>My Roles</p>
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
              <p className={css`
                font-size: 0.8em;
                font-weight: 800;
                text-transform: uppercase;
                padding-top: 1em;
                padding-bottom: 1em;
              `}>Deliverables</p>
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
           display: grid;
            grid-template-columns: 475px 1fr;
           width: 100%;
           padding-left: 1em;
           padding-right: 1em;
          @media (max-width: 1000px) {
              grid-template-columns: 1fr;
              grid-template-rows: auto 1fr;
            }
          `}>
            <div />
            <div className={css`
                  
                  padding-bottom: 1em;
                  padding-left: 2em;
                  padding-top: 84px;

                  max-width: 750px;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  z-index: 3;
                  @media (max-width: 1000px) {
                    margin-top: 0px;
                    max-width: 100%;
                  }
  
              `}>
                
              <div>
                <h1 className={css`
                    font-weight: 800;
                    font-size: 3.2em;
                    line-height: 1em;
                    padding-left: 0rem !important; 
                    color: #04082B;
                    margin: 0;
                    padding-left: 2rem;
                    @media (max-width: 1000px) {
                      margin: 0;
                      padding-left: 0em;
                    }
                `}>{title}</h1>
              </div>
          
             
              </div> 
  
          </div>
      
          {/*
          <div className={css`
           display: grid;
           z-index: 4;
           background-image:  url(${image});
            background-size: cover;
            background-repeat: no-repeat;
            background-position: top;
            position: relative;
            background-color: #fff;
           width: 100%;
           height: 500px;
          
          @media (max-width: 1000px) {
              grid-template-columns: 1fr;
              grid-template-rows: auto 1fr;
              height: 400px;
            }
          `}>
          
            
          
  
          </div>
          */}
          <div className={css`
                  position: -webkit-sticky;
                  position: sticky;
                  top: 0px;
                  height: auto;
                  width: 100%;
                  margin-top: -100px;
                  top: 0px;
                  display: flex;
                  align-items: center;
                  @media (max-width: 1000px) {
                    display: none;
                  }
              `}>
                <div className={css`
                  display: grid;
                  grid-template-columns: 475px 1fr;
                  width: 100%;
                  `}>
                    <div>

                    </div>
                    <div className={css`
                      padding-top: 2em;
                      padding-left: 3em;
                      padding-bottom: 2em;
                      background: #F4F4F4;
                      z-index: 1;
                      width: 100%;
                    `}>
                    <p className={css`
                      margin: 0;
                      font-weight: 800;
                      font-size: 0.8em;
                      text-transform: uppercase;
                    `}>{title}</p>
                    </div>
                 
                 </div>
              </div>
        <div className={css`
           display: grid;
           grid-template-columns: 475px auto 1fr;
           @media (max-width: 1000px) {
              grid-template-columns: 1fr;
              grid-template-rows: auto 1fr;
            }
          `}>
          <div className={css`
                  display: grid;
                  grid-template-columns: 1fr;
                  grid-gap: 1em;
                  padding-left: 1em;
                  padding-top: 1em;
                  align-content: start;
                  position: -webkit-sticky;
                  position: sticky;
                  top: 0px;
                  height: 400px;
                  text-align: right;
                  align-content: space-between;
                  width: 100%;
                  background-color: #F4F4F4; 
                  margin-top: 0px;
                  top: 0px;
                  @media (max-width: 1000px) {
                    margin-top: -100px;
                    height: auto;
                    top: 0px;
                    padding-top: 48px;
                    padding-left: 0em;
                    padding-right: 0em;
                    text-align: left;
                  }
              `}>
                <div className={css`
                
                display: none;
                background-color: #F4F4F4; 
                padding: 1em;
                z-index: 1;
                @media (max-width: 1000px) {
                  display: block;
                }
                `}>
                  <div className={css`
                    display: flex;
                    align-items: center;
                    gap: 1em;
                  `}>
                  
                  <div>
                  <div>
                { !isOpen ? (  
                        <button onClick={() => setIsOpen(true)} className="none">
                            <div className="svghold">
                            <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.3 0.392276C14.0476 0.141416 13.7062 0.000610352 13.3504 0.000610352C12.9946 0.000610352 12.6532 0.141416 12.4008 0.392276L7.56551 5.16026L2.79752 0.392276C2.54516 0.141416 2.20379 0.000610352 1.84796 0.000610352C1.49214 0.000610352 1.15076 0.141416 0.898407 0.392276C0.772166 0.517486 0.671965 0.666454 0.603585 0.830585C0.535205 0.994716 0.5 1.17076 0.5 1.34857C0.5 1.52637 0.535205 1.70242 0.603585 1.86655C0.671965 2.03068 0.772166 2.17965 0.898407 2.30486L6.60922 8.01567C6.73443 8.14191 6.88339 8.24211 7.04753 8.31049C7.21166 8.37887 7.3877 8.41408 7.56551 8.41408C7.74331 8.41408 7.91936 8.37887 8.08349 8.31049C8.24762 8.24211 8.39659 8.14191 8.5218 8.01567L14.3 2.30486C14.4262 2.17965 14.5264 2.03068 14.5948 1.86655C14.6632 1.70242 14.6984 1.52637 14.6984 1.34857C14.6984 1.17076 14.6632 0.994716 14.5948 0.830585C14.5264 0.666454 14.4262 0.517486 14.3 0.392276Z" fill="#04082B"/>
</svg>
                            </div>
                        </button>
                    ) : ( 
                        <button onClick={() => setIsOpen(false)} className="none">
                            <div className="svgrotate">
                            <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.3 0.392276C14.0476 0.141416 13.7062 0.000610352 13.3504 0.000610352C12.9946 0.000610352 12.6532 0.141416 12.4008 0.392276L7.56551 5.16026L2.79752 0.392276C2.54516 0.141416 2.20379 0.000610352 1.84796 0.000610352C1.49214 0.000610352 1.15076 0.141416 0.898407 0.392276C0.772166 0.517486 0.671965 0.666454 0.603585 0.830585C0.535205 0.994716 0.5 1.17076 0.5 1.34857C0.5 1.52637 0.535205 1.70242 0.603585 1.86655C0.671965 2.03068 0.772166 2.17965 0.898407 2.30486L6.60922 8.01567C6.73443 8.14191 6.88339 8.24211 7.04753 8.31049C7.21166 8.37887 7.3877 8.41408 7.56551 8.41408C7.74331 8.41408 7.91936 8.37887 8.08349 8.31049C8.24762 8.24211 8.39659 8.14191 8.5218 8.01567L14.3 2.30486C14.4262 2.17965 14.5264 2.03068 14.5948 1.86655C14.6632 1.70242 14.6984 1.52637 14.6984 1.34857C14.6984 1.17076 14.6632 0.994716 14.5948 0.830585C14.5264 0.666454 14.4262 0.517486 14.3 0.392276Z" fill="#04082B"/>
</svg>
                            </div>
                        </button>
                    )}
                    </div>
                    </div>
                    <div>
                    <p className={css`
                      color: #04082B;
                      padding: 0;
                      margin: 0;
                      font-weight: 800;
                    `}>
                      {title}
                    </p>
                  </div>
                  </div> 

                  <div className={ !isOpen ? ("hidden") : ("nothidden")}>
                  {renderAll()}
                  </div>
                </div>
                <div className={css`
                  padding-right: 1em;
                  display: block;
                  margin-top: 1em; @media (max-width: 1000px) {
                    display: none;
                  }
                `}>
                
              {renderAll()}
            
              </div>
          </div>
          
            <div className={css`
             max-width: 100%;
             @media (max-width: 1000px) {
               max-width: 100%;
             }
            `}>
              <div className={css`
                  margin-top: 0px;
                  padding: 1em;
                  padding-left: 1em;
                  @media (max-width: 1000px) {
                    padding-left: 1em;
                  }
              `}>
                 {children}
                 <Footer></Footer>
              </div>  
              </div>
            
        </div>
       
        </>  
    )
}