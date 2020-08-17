const { readdirSync } = require('fs');
const { resolve } = require('path');

// Thanks to copy-pasta from https://stackoverflow.com/a/45130990.
function* getComponentsDocs(dir = resolve(__dirname, '../docs/components')) {
  const entries = readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const path = resolve(dir, entry.name);

    if (entry.isDirectory()) {
      yield* getComponentsDocs(path);
    } else {
      yield path;
    }
  }
}

const toTitleCase = (str) => str
  .toLowerCase()
  .replace(/(?:^|-)\w/g, (match) => match.toUpperCase())
  .replace(/-/g, '')
  .replace('Ui', 'UI');

const getComponentsSideBarItems = () => {
  const sidebarItems = [];

  for (const file of getComponentsDocs()) {
    const path = /((?:core|providers|ui|plugins).+)/.exec(file)[1];
  
    let pointer = sidebarItems;
    let hierarchy = path.replace('/readme.md', '')
    hierarchy = hierarchy.substr(0, hierarchy.lastIndexOf('/')).split('/').reverse();
  
    while (hierarchy.length) {
      const subcategoryId = hierarchy.pop();
      const label = toTitleCase(subcategoryId);
      
      let subcategory = pointer.find(c => c.label === label);
      if (subcategory === undefined) {
        subcategory = {
          type: 'category',
          label,
          items: []
        };
  
        pointer.push(subcategory);
      }
  
      pointer = subcategory.items;
    }
  
    const id = 'components/' + path.replace('.md', '');
    pointer.push(id);
  }

  return sidebarItems;
}

module.exports = {
  toTitleCase,
  getComponentsDocs,
  getComponentsSideBarItems,
};
