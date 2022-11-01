import React from "react";

function newMessage (message){
    return (
        <div>
            <article className="msg-container msg-self">
                <div className="msg-box">
                    <div className="flr">
                        <div className="messages">
                            <p className="msg" id="msg-1">
                                {message}
                            </p>
                        </div>
                        <span className="timestamp"><span className="username">Name</span>&bull;<span className="posttime">2 minutes ago</span></span>
                    </div>
                    <img className="user-img" id="user-0" src="//gravatar.com/avatar/56234674574535734573000000000001?d=retro" />
                </div>
            </article>
        </div>
    )
}

export default newMessage;