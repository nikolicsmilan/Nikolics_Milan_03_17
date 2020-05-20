import React, { Component } from 'react';
import './FacebookComment.css';
import { FacebookProvider, Comments, EmbeddedPost } from 'react-facebook';


class EmbeddedComment extends Component {

    render() {
        return (
            <div className="HozzaszolasEgesz">
                <div className="Hozzaszolas">
                    <FacebookProvider appId="483066125703881">
                          <Comments ></Comments>
                    </FacebookProvider>                  
                </div>
                <div className="Hozzaszolas">
                    <FacebookProvider appId="483066125703881">
                      <EmbeddedPost href="https://www.facebook.com/pg/Nikolicsmilanhu-108139094109626/posts/?ref=page_internal" width="500" /> 
                    </FacebookProvider>                  
                </div>
            </div>
        );
    }

}

export default EmbeddedComment;