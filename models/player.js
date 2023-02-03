const fs = require("fs");
const path = require("path");

let players = [];

module.exports = class Player {
  constructor(title, urlImage) {
    this.title = title;
    this.urlImage = urlImage
  }

  save() {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "players.json"
    );

    fs.readFile(p, (err, fileContent) => {
      if (!err) {
        players =  JSON.parse(fileContent);
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

      players = JSON.parse(fileContent)
    });
    return players
  }

};