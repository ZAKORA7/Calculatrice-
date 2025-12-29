let ClrButton = document.getElementById("clear"); 
let EffButton = document.getElementById("effacer");
let Equal = document.getElementById("equal");
let Text = document.getElementById("text");

let Valeur = "0";
Text.textContent = Valeur;

document.querySelectorAll(".nums").forEach(btn => {
  btn.onclick = () => {
    Valeur = (Valeur === "0") ? btn.value : Valeur + btn.value;
    Text.textContent = Valeur;
  };
});

document.querySelectorAll(".operations").forEach(btn => {
  btn.onclick = () => {
    Valeur += btn.value;
    Text.textContent = Valeur;
  };
});

ClrButton.onclick = () => {
    Numbers = [];
    Opertions = [];

    Valeur = "0";
    Text.textContent = Valeur;
}

EffButton.onclick = () => {
  Valeur = Valeur.length <= 1 ? "0" : Valeur.slice(0, -1);
  Text.textContent = Valeur;
};









Equal.onclick = () => {
  try {
    if (Valeur.includes("/0")) throw "Math Error";
    Valeur = eval(Valeur).toString();
  } catch {
    Valeur = "Math Error";
  }
  Text.textContent = Valeur;
};


