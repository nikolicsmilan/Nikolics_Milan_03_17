import React, { Component } from 'react';
import './FacebookComment.css';
import { FacebookProvider, Comments, EmbeddedPost, Like } from 'react-facebook';


class EmbeddedComment extends Component {

    render() {
        return (
            <div className="HozzaszolasEgesz">
                 <FacebookProvider width="auto" appId="483066125703881">
                            <Like href="https://www.facebook.com/Nikolicsmilanhu-108139094109626/?modal=admin_todo_tour" colorScheme="dark" showFaces share />
                        </FacebookProvider>   

                        <FacebookProvider width="auto"  appId="483066125703881">
                            <Comments width="auto" ></Comments>
                        </FacebookProvider>  
                   izéééééééééééééééééééé
                   <div class="fb-comments" data-href="https://testx7.hu" data-numposts="5" data-width="50%"></div>
          
            </div>
        );
    }

}

export default EmbeddedComment;