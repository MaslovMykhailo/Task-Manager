import { openWs, closeWs } from '../actions';
import { WS_SERVER } from '../constants/Client';

const doNothing = () => {};

class Socket {
  constructor() {
    this.ws = new WebSocket(WS_SERVER);
  }
  
  send(data) {
    doNothing();
  }
  
  addDispatcher(dispatch) {
    this.ws.onopen = () => {
      dispatch(openWs());
      this.send = (data) => { this.ws.send(JSON.stringify(data)) };
    };
  
    this.ws.onclose = () => {
      this.send = doNothing;
      dispatch(closeWs());
    };
  }
}

export default new Socket();
