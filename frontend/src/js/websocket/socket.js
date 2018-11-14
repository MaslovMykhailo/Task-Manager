import { openWs, closeWs } from '../actions';
import { WS_SERVER } from '../constants/Client';


class Socket {
  constructor() {
    this.ws = new WebSocket(WS_SERVER);
  }
  
  send(data) {
    this.ws.send(JSON.stringify(data))
  }
  
  addDispatcher(dispatch) {
    this.ws.onopen = () => {
      dispatch(openWs());
    };
  
    this.ws.onclose = () => {
      dispatch(closeWs());
    };
  }
}

export default new Socket();
