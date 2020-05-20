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
                      <EmbeddedPost href="https://www.facebook.com/108139094109626/photos/a.145262253730643/145266793730189/?type=3&__tn__=-R" width="500" /> 
                    </FacebookProvider>                  
                </div>
            </div>
        );
    }

}

export default EmbeddedComment;