import React, { Component } from 'react';
import './MyComment.css';
import { FacebookProvider, Comments, EmbeddedPost, Like } from 'react-facebook';


class MyComment extends Component {

    render() {
        return (
            <div className="HozzaszolasEgesz">
                <div className="FaceFelso">
{/*       <FacebookProvider  appId="483066125703881">
                            <Like href="https://www.facebook.com/Nikolicsmilanhu-108139094109626/?modal=admin_todo_tour" colorScheme="dark" showFaces share />
                </FacebookProvider>  

                </div>
                 <div className="Hozzaszolas">
                 <FacebookProvider appId="483066125703881">
                            <Comments  ></Comments>
                        </FacebookProvider> 
  */}

                        <FacebookProvider  appId="620383108811127">
                            <Like href="https://www.facebook.com/Elek-Teszt-Oldala-104415887976723/settings/?tab=admin_roles&ref=page_edit" colorScheme="dark" showFaces share />
                         </FacebookProvider>  
      
         
                </div>
                 <div className="Hozzaszolas">
                 <FacebookProvider appId="620383108811127">
                            <Comments  ></Comments>
                        </FacebookProvider> 

                 </div>

                                       
          
            </div>
        );
    }

}

export default MyComment;