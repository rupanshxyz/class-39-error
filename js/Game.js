class Game {
  constructor() {}

  start() {
    myform = new Form();
    myform.display();

    myplayer = new Player();
    myplayer.getcount();

    car1 = createSprite(width / 2 - 100, height - 100);
    car1.addImage("car1", car1Image);
    car1.scale = 0.07;

    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", car2Image);
    car2.scale = 0.07;

    cars = [car1, car2];
  }

  getstate() {
    var gamestateRef = database.ref("gamestate");
    gamestateRef.on("value", (data) => {
      mygamestate = data.val();
    });
  }

  updatestate(statenumber) {
    database.ref("/").update({
      gamestate: statenumber,
    });
  }
  handleElement() {
    myform.title.position(40, 50);
    myform.title.class("resetTitle");
  }

  play() {
    myform.hide();
    drawSprites();
    this.handleElement()
  }

  end() {}
}
