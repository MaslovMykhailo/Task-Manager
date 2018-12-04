export default string => Math.round(Math.random() * 1000) + '-' +
    string.replace(/[\/.]/g, '').toLowerCase().split(' ').join('-') +
    '-' + new Date().getDate() + '-' + new Date().getSeconds();
