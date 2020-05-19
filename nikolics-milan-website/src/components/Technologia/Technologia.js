import React, {useState} from 'react';
import './Technologia.css';
import '../form/MyForm';


const Technologia = props => { 

      const [toogleState, setToogleState] = useState({
  
            toogles: [
               { number1: 'piros'},
                            
            ],
            valtas: [
              { number1: "lila"},
            ]
        });   
        
      const [toogleState2, setToogleState2] = useState({
  
            toogles: [
               { number1: 'piros'},
                            
            ],
            valtas: [
              { number1: "lila"},
            ]
        });   

        const [toogleState3, setToogleState3] = useState({
  
            toogles: [
               { number1: 'piros'},
                            
            ],
            valtas: [
              { number1: "lila"},
            ]
        });   


        const toogleHandlerV = () => {   

            setToogleState ({
                  toogles: [
                  { number1: zold},
                                          
            ] ,
            valtas: [
                  { number1: kek},
                                          
            ],
            }); 
            };


            const toogleHandler77 = () => {          
                  setToogleState ({
                   toogles: [
                   { number1: sarga},                                                      
                        ] ,

                   valtas: [
                  { number1: lila},
                                                
                  ],
                 

                  }); 
                  };


                  const toogleHandlerV2 = () => {       
                        var x = document.getElementById("mySelect").value;
                        console.log('akarmi: '+x);

                        if(x == 1){                       
                              setToogleState3 ({

                              toogles: [
                              { number1: sarga},                                                      
                              ],      
                              valtas: [
                              { number1: lila},                                                      
                              ],  

                              });  
                              console.log('Érték: '+toogleState3.toogles[0].number1);
                        } else if (x == 2) {
                              setToogleState3 ({
                              toogles: [
                              { number1: kek},                                                      
                              ],      
                              valtas: [
                              { number1: lila},                                                      
                              ],             
                              
                             });

                        };
                  
                   console.log('Érték: '+toogleState3.toogles[0].number1);
                  } 
              

                  /*toogles piros */
        let valami = toogleState.toogles[0].number1;

                  /*valtas lila */
        let valami2 = toogleState.valtas[0].number1;
        
        let zold= "zold";
        let lila= "lila";       
        let kek = "kek";
        let sarga = 'sarga'
        let button = "button";
        let valami3 = toogleState3.toogles[0].number1;
      
      return (
                <div  className='TechnologiaEgesz'>  
           <h1>Itt technológiával kapcsolatos dolgok lesznek</h1>
           <div className={valami}>
                  <h1>REACT</h1>
           </div>

           <div className={valami2}>
                  <h1>REACT</h1>
           </div>

                  <button className={button} onClick= {toogleHandlerV}> Váltás</button>
                  <button className={button} onClick= {toogleHandler77}> Váltás 2</button>


            <div className="options">
              <select  id="mySelect" onChange= {toogleHandlerV2}>
                  <option value="Luke Skywalker">
                 Stílus váltás
                  </option>
                  <option value="1">sárga</option>
                  <option value="2">kék</option>
              </select>
            </div>

            <div>

                  <h1 className={valami3}>Opció stílus tesztelő</h1>
            </div>
           </div>



      )

}
export default Technologia;