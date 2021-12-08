/* f.poirrier */
document.getElementById("ing").addEventListener("input",findInp);
document.getElementById("gr").addEventListener("input",findInp);
document.getElementById("ml").addEventListener("input",findInp);
document.getElementById("raz").addEventListener("click",findInp);



//définition des variables globales
var id;
var valeur;
var ingr;
var pos;
var grml;
var gram;
var vol;
var borneGr;
var borneMl;

/* définition du tableau 'conv' à 2 dimensions avec la varriable de bloc conv*/
let conv = new Array();
conv[0] = new Array
('Amande en poudre','Amaretto','Assaisonnement pour salade','Avoine en flocons','Bénédictine','Beurre','Bière','Blé en farine type T55','Café liquide','Café lyophilisé','Cannelle en poudre','Chapelure de pain séché','Chocolat en poudre','Cointreau','Confiture de fruits','Copeaux de noix de coco','Crème (alcool)','Crème épaisse','Crème légère','Eau','Fromage emmental râpé','Gelée de fruits','Graisses animales','Grand Marnier','Huile','Jus de fruits','Lait babeurre','Lait chocolaté écrémé','Lait concentré','Lait de chèvre entier','Lait de vache entier','Lait en poudre','Lait fermenté','Lait liquide UHT','Lait type Milk shake','Lait type petit-lait','Lentilles vertes','Limonade','Liqueur (alcool)','Maïs en farine','Mais en fécule non tassée (Maïzena)','Maïs en grains','Maïs en semoule (polenta)','Margarine','Mayonnaise légère','Mayonnaise traditionnelle','Miel','Nectar de fruit','Noix de coco rapée','Nutella','Pommes de terre en flocons','Porto','Riz','Riz sauvage','Saindoux','Sarrasin en farine','Seigle en farine','Sirop de fruit','Sirop de fruit','Sirop érable','Soda','Spiritueux  40 % à 45%','Sucre cristallisé','Sucre en poudre','Sucre glace','Thé noir en feuille','Thé ou tisane liquide','Vermouth','Vin blanc doux','Vin blanc sec','Vin blanc vendange tardive','Vin rouge','Vinaigre','Xérès','Yaourt');
conv[1] = new Array
(250,91,91,250,96,110,100,182,100,400,179,222,192,96,70,164,88,101,99,100,294,80,143,96,109,95,98,94,93,93,96,179,99,97,100,179,112,98,90,161,185,139,156,104,100,110,70,98,284,79,476,98,125,143,109,152,149,75,85,76,97,105,143,179,221,208,100,98,98,100,97,101,99,98,95
);

function testValue(value) {
  if ((isNaN(value) == true) || (value == -1)){
    id = "raz";
  }
}

function round(value, step) {
  step || (step = 1.0);
  inv = 1.0 / step;
  return Math.round(value * inv) / inv;
}

function findInp(e) {
  //e = event de l'input  
  id = e.target.id;
   
  if(id == "ing") {
    ingr = (e.target.value);
    pos = conv[0].indexOf(ingr);
    testValue (pos);
    grml = conv[1][pos];
        
    } else if (id == "gr") {
      gram = parseFloat(e.target.value);
      testValue (gram);
      borneGr= "gr";
      if (borneMl == "ml"){
        id = "raz";
      }
            
    } else if (id == "ml"){
      vol = parseFloat(e.target.value);
      testValue (vol);
      borneMl = "ml";
       if (borneGr == "gr"){
        id = "raz";
      }
    }
   
  if ((typeof ingr == 'string') && (borneGr == "gr")){
  ml.value = round(gram * grml / 100, 5.0);
  }
  
  if ((typeof ingr === 'string') && (borneMl == "ml")){
  gr.value = round(100 * vol / grml, 5.0);
  }
  
  if(id == "raz") {
      document.getElementById("myForm").reset();
      ingr = NaN;
      borneGr = "";
      borneMl = "";
  }
}
