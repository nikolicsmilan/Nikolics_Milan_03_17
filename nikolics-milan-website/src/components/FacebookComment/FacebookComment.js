import React, { Component } from 'react';
import './FacebookComment.css';
import { FacebookProvider, Comments, EmbeddedPost } from 'react-facebook';


class EmbeddedComment extends Component {

    render() {
        return (
            <div className="HozzaszolasEgesz">
                <div className="Hozzaszolas">
                    <FacebookProvider appId="483066125703881">
                      {/*  <EmbeddedPost href="https://www.facebook.com/permalink.php?story_fbid=145182077071994&id=108139094109626&__tn__=-R" width="500" /> */}
                        <Comments numposts="5"></Comments>
                    </FacebookProvider>
                  
                </div>
            </div>
        );
    }

}

export default EmbeddedComment;