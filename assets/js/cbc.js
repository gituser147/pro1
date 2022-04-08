function rbc() {
  let red = document.getElementById("RBC").value;
  let status = "";
  if (red < 4.35) {
    status = "you may have anemia";
  } else if (red <= 5.65 && red >= 4.35) {
    status = "your rbc is normal";
  } else if (red > 5.65) {
    status = "you may have polycythemia vera or heart disease.";
  }
  document.getElementsByClassName("comment")[0].innerHTML = status;
}

function wbc() {
  let white = document.getElementById("WBC").value;
  let status1 = "";

  if (white < 3.4) {
    status1 =
      "you may have autoimmune disorder that destroys white blood cells, bone marrow problems or cancer.";
  } else if (white <= 9.6 && white >= 3.4) {
    status1 = "your wbc is normal";
  } else if (white > 9.6) {
    status1 =
      "you may have an infection or inflammation. Or, it could indicate that you have an immune system disorder or a bone marrow disease. it can also be a reaction to medication.";
  }
  document.getElementsByClassName("comment1")[0].innerHTML = status1;
}

function hemo() {
  let hemog = document.getElementById("hemo").value;
  let status2 = "";

  if (hemog < 132) {
    status2 = "you may have anemia.";
  } else if (hemog <= 166 && hemog >= 132) {
    status2 = "your Hemoglobin is normal";
  } else if (hemog > 166) {
    status2 = "you may have polycythemia vera or heart disease.";
  }
  document.getElementsByClassName("comment2")[0].innerHTML = status2;
}

function hemat() {
  let hemat = document.getElementById("hemat").value;
  let status3 = "";

  if (hemat < 38.3) {
    status3 = "you may have anemia.";
  } else if (hemat <= 48.6 && hemat >= 38.3) {
    status3 = "your Hematocrit is normal";
  } else if (hemat > 48.6) {
    status3 = "you may have polycythemia vera or heart disease.";
  }
  document.getElementsByClassName("comment3")[0].innerHTML = status3;
}

function plat() {
  let plat = document.getElementById("plat").value;
  let status4 = "";

  if (plat < 135) {
    status4 =
      "It may be a sign of an underlying medical condition, or it may be a side effect from medication. you'll likely need additional tests to diagnose the cause.";
  } else if (plat <= 317 && plat >= 135) {
    status4 = "your Platelet is normal";
  } else if (plat > 317) {
    status4 =
      "It may be a sign of an underlying medical condition, or it may be a side effect from medication. you'll likely need additional tests to diagnose the cause.";
  }
  document.getElementsByClassName("comment4")[0].innerHTML = status4;
}
