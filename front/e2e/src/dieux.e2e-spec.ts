import {browser, element, logging, by} from 'protractor';
import {DieuxPage} from './dieux.po';

describe('test des dieux', () => {
    // Variable contenant notre dieuxPage
    let page: DieuxPage;
    // variable que l’on utilisera pour compter le nombre de dieu
    let nbDieux: number;
    // Avant de commencer les tests, nous demandons à notre navigateur de se rendre à l’URL suivante
        
    beforeEach(() => {
    page = new DieuxPage();
    browser.get('/dieux');
    });
    
    it( 'en tant qu\'utilisateur, je peux voir la liste des dieux et cliquer sur un bouton pour en ajouter un', () => {
        element.all(by.css('.card')).then(listeDieux => {
            nbDieux = listeDieux.length;
            page.sleep();
            element(by.css('#addDieuxLink')).click();
            page.sleep();
            expect(browser.driver.getCurrentUrl()).toContain('dieux/add');
        });
    });

    it( 'en tant qu\'utilisateur, je peux renseigner le formulaire d\'ajout pour créer un dieu. Un dieu apparait.', () => {
        browser.get('/dieux/add');
            // je remplis le formulaire avec les infos de dieux.po.ts 
            page.completeForm();
            page.sleep();
            element.all(by.id('submitDieux')).click().then(listeDIeux => {
                expect(browser.driver.getCurrentUrl()).toContain('dieux');
            });
    });

    it('j\'ai un dieu de plus dans ma liste', () => {
        page.sleep()
        element.all(by.css('.card')).then(listeDieux => {
            // je compare la listeDieux avant et après l'ajout d'un nouveau Dieu
            expect(listeDieux.length).toBeGreaterThan(nbDieux);
        })    
    })
    
    afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
    level: logging.Level.SEVERE,
    } as logging.Entry));
    });
});