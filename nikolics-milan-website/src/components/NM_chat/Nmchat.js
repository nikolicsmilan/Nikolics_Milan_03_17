import React, { Component} from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';
/*import MessengerCustomerChat from './node_modules/react-messenger-customer-chat';*/
 
export default class Nmchat extends Component {
  render() {
    return (

      <FacebookProvider appId="483066125703881" chatSupport>
        <CustomChat pageId="108139094109626" minimized={false}/>
      </FacebookProvider>  

      
      /*
      <FacebookProvider appId="108139094109626" chatSupport>
        <CustomChat pageId="103977671134965" minimized={false}/>
      </FacebookProvider>    
    */

    /*
   <div>
      <MessengerCustomerChat
        pageId="108139094109626"
        appId="483066125703881"
      />
    </div>
   */
    );
  }
}
