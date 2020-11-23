/**
 * customized response messages
 */
function buildMessage(entity, action) {
  switch(action) {
    case 'list':
      return `${entity}s ${action}`
    case 'create':
      return `${entity} ${action}d`
  }
}

module.exports = buildMessage