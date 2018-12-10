const Logable = (c, ...ignoreMethods) => {
  return class extends c {
    constructor(...args) {
      super(...args);
      
      const ignore = ignoreMethods.concat('constructor');
      const keys = Object.keys(this);
      
      Object.getOwnPropertyNames(c.prototype).forEach(method => {
        if (ignoreMethods.indexOf(method) === -1) {
          this[method] = function (...methodArgs) {
            
            const result = c.prototype[method].apply(this, methodArgs);
            console.log('Call method: ', method, ' in ', c.prototype);
            console.log('----------------------------------------------');
            
            console.log('Object state:');
            keys.forEach(key => {
              let type = typeof this[key];
              if (type === 'object' || type === 'function') {
                console.log(key, ':', type)
              } else {
                console.log(key, ':', this[key])
              }
            });
            console.log('==============================================');
            
            return result;
          }
        }
      });
    }
  }
};

module.exports = Logable;