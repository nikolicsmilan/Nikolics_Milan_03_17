import React, { Component } from 'react';
import './FacebookComment.css';
import { FacebookProvider, Comments, EmbeddedPost } from 'react-facebook';


class EmbeddedComment extends Component {

    render() {
        return (
            <div className="HozzaszolasEgesz">
                {/*
                <div className="FaceFelso">
                    <div className="Hozzaszolas">
                        <FacebookProvider appId="483066125703881">
                            <Comments ></Comments>
                        </FacebookProvider>                  
                </div>*/}
                    {/*
                    <div className="Hozzaszolas2">
                        <FacebookProvider appId="483066125703881">
                        <EmbeddedPost href="https://www.facebook.com/permalink.php?story_fbid=145274667062735&id=108139094109626" /> 
                        </FacebookProvider>                  
                    </div>*/}
             { /*  </div>*/}
{/*
                <div className="FaceFelso">
                    <div className="Hozzaszolas">
                        <FacebookProvider appId="483066125703881">
                            <Comments ></Comments>
                        </FacebookProvider>                  
                    </div>
                    <div className="Hozzaszolas2">
                        <FacebookProvider appId="483066125703881">
                        <EmbeddedPost href="https://www.facebook.com/Nikolicsmilanhu-108139094109626/?modal=admin_todo_tour" /> 
                        </FacebookProvider>                  
                    </div>

                    <div className="FaceFelso">
                    <div className="Hozzaszolas">
                        <FacebookProvider appId="483066125703881">
                            <Comments ></Comments>
                        </FacebookProvider>                  
                    </div>
                    <div className="Hozzaszolas2">
                        <FacebookProvider appId="483066125703881">
                        <EmbeddedPost href="https://www.facebook.com/Nikolicsmilanhu-108139094109626/?modal=admin_todo_tour" /> 
                        </FacebookProvider>                  
                    </div>
                </div>
</div>*/}
            </div>
        );
    }

}

export default EmbeddedComment;