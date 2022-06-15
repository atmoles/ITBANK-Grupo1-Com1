async function getDolarData() {
  const response = await fetch(
    "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
  );
  // console.log(response);
  const date = new Date();
  const data = await response.json();
  const dolarOficial = data[0]["casa"];
  const dolarBlue = data[1]["casa"];
  const dolarSoja = data[2]["casa"];
  const dolarCont = data[3]["casa"];
  const dolarBolsa = data[4]["casa"];
  const bitcoin = data[5]["casa"];
  const dolarTurista = data[6]["casa"];

  // DOLAR OFICIAL 

  const doc = document.getElementById("doc");
  const dov = document.getElementById("dov");
  const vardo = document.getElementById("vardo");
  const actdo = document.getElementById("actdo");

  
  doc.innerHTML += dolarOficial["compra"];
  dov.innerHTML += dolarOficial["venta"];
  vardo.innerHTML += dolarOficial["variacion"] + '%';
  actdo.innerHTML +=
  date.getDate() +
  "/" +
  date.getMonth() +
  "/" +
  date.getFullYear() +
  "  " +
  date.getHours() +
  ":" +
  date.getMinutes();

  // DOLAR BLUE
  
  const dbc = document.getElementById("dbc");
  const dbv = document.getElementById("dbv");
  const vardb = document.getElementById("vardb");
  const actdb = document.getElementById("actdb");

  dbc.innerHTML += dolarBlue["compra"];
  dbv.innerHTML += dolarBlue["venta"];
  vardb.innerHTML += dolarBlue["variacion"] + '%';
  actdb.innerHTML +=
  date.getDate() +
  "/" +
  date.getMonth() +
  "/" +
  date.getFullYear() +
  "  " +
  date.getHours() +
  ":" +
  date.getMinutes();
  

    // DOLAR LIQUI 

    const refdl = document.getElementById("refdl");
    const vardl = document.getElementById("vardl");
    const actdl = document.getElementById("actdl");
  
    
    refdl.innerHTML += dolarCont["referencia"];
    vardo.innerHTML += dolarOficial["variacion"] + '%';
    actdo.innerHTML +=
    date.getDate() +
    "/" +
    date.getMonth() +
    "/" +
    date.getFullYear() +
    "  " +
    date.getHours() +
    ":" +
    date.getMinutes();

}

getDolarData();
