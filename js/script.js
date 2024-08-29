/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede (allego qualche immagine per darvi ispirazione
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
*/


/* 
MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.

Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
Scott Estrada |	Developer            |	scott-estrada-developer.jpg
Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg 
*/

const ourTeam = [
    {name:'Waine Barnett', rules:'Founder & CEO',img:'wayne-barnett-founder-ceo.jpg'},
    {name:'Angela Caroll', rules:'Chief Editor',img:'wangela-caroll-chief-editor.jpg'},
    {name:'Walter Gordon', rules:'Office Manager',img:'walter-gordon-office-manager.jpg'},
    {name:'Angela Lopez', rules:'Social Media Manager',img:'angela-lopez-social-media-manager.jpg'},
    {name:'Scott Estrada', rules:'Developer',img:'scott-estrada-developer.jpg'},
    {name:'Barbara Ramos', rules:'Graphic Designer ',img:'barbara-ramos-graphic-designer.jpg '},

]

//MILESTONE 1:Stampare su console le informazioni di nome, ruolo e la stringa della foto

for (let person of ourTeam){
    console.log(person)
}