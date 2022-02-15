

/* Rekursive Funktion zur Berechnung der Fakultät. 
   z.B. 5! (n=5): 5*4*3*2 = 120 */
function fakultaet (n)
{
	// Es muss  nur bis minimal 2 reduziert werden. Abbruchkriterium der Rekursion.
	if (n <= 2) 
	{ 
		return n; // Der letzte Aufruf der Rekursion liefert 2.
	}
	// Solange n noch nicht 2 ist, wird in die Rekursion hinabgestiegen mit n-1.
	return n* fakultaet(n-1);
	
}


// Hier wird die Fakultätberechnung mit einer Ausgabe gekoppelt.
function outFakultaet (n)
{
	window.alert(fakultaet(n));
}


// Eingabe von Text über Prompt.
function myPrompt() {
  var person = prompt("Please enter your name.", "Unbekannt");	// hier wird prompt benutzt
  
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
  }
}


// Eingabe von Text in Variable.
function myPrompt2() {
  var eingabe = prompt("Eingabe machen.", 5);
  return eingabe;
}