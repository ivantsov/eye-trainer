// eslint-disable-next-line global-require, import/no-dynamic-require
module.exports = (env = 'dev') => require(`./webpack/${env}`);
