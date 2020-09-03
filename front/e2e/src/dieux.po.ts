import { browser, by, element } from 'protractor';

export class DieuxPage {
sleep(){
browser.driver.sleep(5000);
}


completeForm() {
    let nom = element.all(by.id('nom'));
    let titre = element.all(by.id('titre'));
    let attributs = element.all(by.id('attributs'));
    let domaine = element.all(by.id('domaine'));
    let cara = element.all(by.id('cara')); 
    let image = element.all(by.id('image')); 


nom.sendKeys('oulala');
titre.sendKeys('essai');
attributs.sendKeys('test');
domaine.sendKeys('les tests');
cara.sendKeys('test');
image.sendKeys('zeus.jpg');

}
}