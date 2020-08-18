const { buildComponentsSideBarItems } = require('./helpers/components');

module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['introduction']
    },
    {
      type: 'category',
      label: 'Components',
      items: buildComponentsSideBarItems(),
      collapsed: false
    },
  ],
};
