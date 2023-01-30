const fs = require('fs');
const path = require('path');

const players = [];

module.exports = class Player {
    constructor(title) {
        this.title = title
    }

    save() {
        const p = path.join(path.dirname(require.main.filename), "data", "players.json")
        fs.readFile(p, (err, fileContent) => {
            let players = [];
            if (!err) {
                players = JSON.parse(fileContent);
            }
            players.push(this);
            fs.writeFile(p, JSON.stringify(players), (err) => {
              console.log(err);
            });
          });
    }

    static fetchAll() {
        const p = path.join(
            path.dirname(require.main.filename),
            "data",
            "players.json"
          );
        fs.readFile(p, (err, fileContent) => {
          if (err) {
            return [];
          }

          console.log("File content ", JSON.parse(fileContent))
    
          return JSON.parse(fileContent);
        });
        return players;
      }
}