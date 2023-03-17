let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText);

    let ReactionMarks = document.getElementById("reaction__marks");
    let MemoryMarks = document.getElementById("memory__marks");
    let VerbalMarks = document.getElementById("verbal__marks");
    let VisualMarks = document.getElementById("visual__marks");
    ReactionMarks.innerHTML = data[0].score;
    MemoryMarks.innerHTML = data[1].score;
    VerbalMarks.innerHTML = data[2].score;
    VisualMarks.innerHTML = data[3].score;
  }
};
xhttp.open("GET", "data.json", true);
xhttp.send();
