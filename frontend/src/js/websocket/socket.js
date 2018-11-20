import { openWs, closeWs, getRemoteCards } from '../actions';
import { WS_SERVER } from '../constants/Client';
import * as receiveTypes from '../constants/ReceiveMessageTypes';

const doNothing = () => {};

class Socket {
  constructor() {
    this.ws = new WebSocket(WS_SERVER);
  }
  
  send(data) {
    doNothing(data);
  }
  
  addDispatcher(dispatch) {
    this.ws.onopen = () => {
      this.send = (data) => { this.ws.send(JSON.stringify(data)) };
      dispatch(openWs());
    };
  
    this.ws.onclose = () => {
      this.send = doNothing;
      dispatch(closeWs());
    };
    
    this.ws.onmessage = event => {
      const message = JSON.parse(event.data);
      
      switch (message.type) {
        case receiveTypes.CARDS_LIST:
        case receiveTypes.CHANGE_CARDS: {
          dispatch(getRemoteCards(message.cards));
        }
      }
    }
  }
}

export default new Socket();
