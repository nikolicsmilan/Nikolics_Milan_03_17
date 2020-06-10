import React, { Component } from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

class CustomerChat extends Component {

    render() {
        return (
            <div>
                <MessengerCustomerChat
                   /* pageId="103977671134965"
                    appId="108139094109626"
                    shouldShowDialog={true}
                    loggedInGreeting="Szia! Miben segíthetünk?"
        loggedOutGreeting="Szia! Miben segíthetünk?"*/

            pageId="104415887976723"
            appId="620383108811127"
            shouldShowDialog={true}
             loggedInGreeting="Szia! Miben segíthetünk?"
             loggedOutGreeting="Szia! Miben segíthetünk?"
                ></MessengerCustomerChat>
            </div>
        );
    }

}

export default CustomerChat;