

function superbowlWin(array) {
    function iteratorFunc(array) {
      return (array.result === "W");
  }
    return ((array.find(iteratorFunc)) ? (array.find(iteratorFunc).year) : undefined);
  }
  