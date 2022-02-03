 const tout = document.querySelector('.quicontientout');
const btn = document.querySelector('.boutton');

btn.addEventListener( 'click', () => {

    tout.classList.toggle('active') 
/*cette fonction me permet de rajouter une autre class quand je clic sur button*/ 

})
const rubrique = document.querySelector('.btnrubrique');
const btnr = document.querySelector('.menurubrique');

btnr.addEventListener( 'click', () => {

    rubrique.classList.toggle('active') 
/*cette fonction me permet de rajouter une autre class quand je clic sur button*/ 

})
const rubrique1 = document.querySelector('.btnrubrique1');
const btnr1 = document.querySelector('.menurubrique1');

btnr1.addEventListener( 'click', () => {

    rubrique1.classList.toggle('active') 
 

})
const rubrique2 = document.querySelector('.btnrubrique2');
const btnr2 = document.querySelector('.menurubrique2');

btnr2.addEventListener( 'click', () => {

    rubrique2.classList.toggle('active') 


})
const txtanim1 = document.querySelector(' .jstxt1 ');
/* Les differentes fonctions que j'ai utilisé pour générer l'ecréture automatique  dans la page a propos de moi*/
new Typewriter(txtanim1, {
    deletespeed:40,
    loop: true
})
.changeDelay(40)
.typeString('Motivé')
.pauseFor(1000)
.deleteChars(6)
.typeString('Sociable')
.pauseFor(1000)
.deleteChars(8)
.pauseFor(1000)
.typeString('Curieux')
.pauseFor(2000)
.start()
