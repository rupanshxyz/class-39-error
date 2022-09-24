class Player {
  constructor() {
    this.index = null;
    this.name = null;
    this.positionX = 0;
    this.positionY = 0;
  }
  getcount() {
    var PlayerCountRef = database.ref("PlayerCount");
    PlayerCountRef.on("value", (data) => {
      myplayercount = data.val();
    });
  }

  addplayers() {
    var playerindex = "players/player" + this.index;

    if (this.index === 1) {
      this.positionX = width / 2 - 100;
    } else {
      this.positionY = width / 2 + 100;
    }
    database.ref(playerindex).set({
      name: this.name,
      index: this.index,
      positionX: this.positionX,
      positionY: this.positionY,
    });
  }

  updatecount(countnumber) {
    database.ref("/").update({
      PlayerCount: countnumber,
    });
  }
}
