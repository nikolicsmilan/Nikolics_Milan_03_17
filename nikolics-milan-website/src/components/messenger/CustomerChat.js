import React, { Component } from './node_modules/react';
import MessengerCustomerChat from './node_modules/react-messenger-customer-chat';

class CustomerChat extends Component {

    render() {
        return (
            <div>
                <MessengerCustomerChat
                    pageId="103977671134965"
                    appId="108139094109626"
                    shouldShowDialog={true}
                    loggedInGreeting="Szia! Miben segíthetünk?"
                    loggedOutGreeting="Szia! Miben segíthetünk?"
                ></MessengerCustomerChat>
            </div>
        );
    }

}

export default CustomerChat;