const gameboard = {
  resize: function () {
    const baseGameBoardWidth = 1200;
    const baseGameBoardSectionWidth = 210;
    const baseGameBoardSectionHeight = 210;
    const gamePlayAreaWidth =
      document.getElementById("game_play_area").clientWidth;

    const correctionRatio =
      gamePlayAreaWidth < baseGameBoardWidth
        ? gamePlayAreaWidth / baseGameBoardWidth
        : 1;

    const gameboardSections = document.querySelectorAll("#gameboard_section");
    for (const section of gameboardSections) {
      section.setAttribute(
        "width",
        `${baseGameBoardSectionWidth * correctionRatio}pt`
      );
      section.setAttribute(
        "height",
        `${baseGameBoardSectionHeight * correctionRatio}pt`
      );
    }
  },
};
