import React, { Component } from 'react';
import './MyComment.css';
import { FacebookProvider, Comments, EmbeddedPost, Like } from 'react-facebook';


class MyComment extends Component {

    render() {
        return (
            <div className="HozzaszolasEgesz">
                 <FacebookProvider  appId="483066125703881">
                            <Like href="https://www.facebook.com/Nikolicsmilanhu-108139094109626/?modal=admin_todo_tour" colorScheme="dark" showFaces share />
                        </FacebookProvider>   

                        <FacebookProvider appId="483066125703881">
                            <Comments  ></Comments>
                        </FacebookProvider>                  
          
            </div>
        );
    }

}

export default MyComment;