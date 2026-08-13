function verify()
{
var d = document.forms.quiz;
var name1 = d.name.value;
var surname1 = d.surname.value;
var email1  = d.email.value;
var birthdate1 = d.birthdate.value;

var d1 = /^\D{2,13}$/;
var d2 = /^\D{2,32}$/;
var d3 = /^\S{1,24}[@]\S{1,16}[.][a-z]{2,3}$/;
var d4 = /^[0-9]{2}[-.][0-9]{2}[-.][0-9]{4}$/;

var c1 = d1.test(name1);
var c2 = d2.test(surname1);
var c3 = d3.test(email1);
var c4 = d4.test(birthdate1);

var infoverify = c1 && c2 && c3 && c4;
var point = 0;

if (infoverify == true)
{alert("Przetwarzanie wyników, kliknij OK.");}
else 
{alert("Błąd! Wpisane dane osobowe nie są poprawne.");
exit;}


for (var i=0; i<d.elements.length; i++)
    {if ((d.elements[i].checked)&&(d.elements[i].value == "tru"))
        point++; 
        else if ((d.elements[i].type == "checkbox")&&(d.elements[i].checked)&&(d.elements[i].value !== "tru"))
        point--; }
    
if (point == 17)
alert("Gratulacje! Dostałeś największą możliwą ilość punktów :)")
else if (point<7)
alert("Niestety, test nie został zaliczony. Dostałeś jedynie " + point + " punktów na 17 możliwych.")
else 
alert("Test zaliczony. Dostałeś " + point + " punktów na 17 możliwych.")
}

