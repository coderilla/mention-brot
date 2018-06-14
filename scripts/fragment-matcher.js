const fetch = require('cross-fetch');
const fs = require('fs');
const path = require('path');

fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  },
  body: JSON.stringify({
    query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `,
  }),
})
  .then(result => result.json())
  .then(result => {
    // here we're filtering out any type information unrelated to unions or interfaces
    const filteredData = result.data.__schema.types.filter(type => type.possibleTypes !== null);
    result.data.__schema.types = filteredData;
    fs.writeFile(path.resolve(__dirname, '../schema-fragments.json'), JSON.stringify(result.data, null, 2), err => {
      if (err) {
        console.error('Error writing fragmentTypes file', err);
      }
      console.log('Fragment types successfully extracted!');
    });
  });
