import { Injectable } from '@angular/core';
import { Heros } from 'src/app/models/heros';


@Injectable({
  providedIn: 'root'
})
export class HerosService {


// On crée un tableau avec les instances de Heros
  listeHeros = [
    new Heros(1, 'Héraclès', 'Fils de Zeus et d\'Alcmène', 'Les douzes Travaux qui portent son nom: Il a tué l\'hydre de Lerne, le lion de Némée, capturé le sanglier d\'Erymanthe, vaincu la biche de Cérynie, tué les oiseaux du lac Stymphale, capturé le taureau de Minos, dompté les juments de Diomède, ramené la ceinture d\'or d\'Hippolyte, nettoyé les écuries d\'Augias (en détournant un fleuve...), volé les oeufs de Géryon ainsi que les pommes d\'or du jradin des Hespérides et sorti Cerbère des Enfers ', 'heracles.jpg'),

    new Heros(2, 'Circé', 'Fille d\'Hélios et de l\'océanide Perséis', 'Elle a transformé l\'équipage d\'Ulysse et les a transformé en animaux', 'circe.jpg'),

    new Heros(3, 'Thésée', 'Fils du roi Egée et d\'Ethra ', 'Il a vaincu le Minotaure qui terrorisait la Crête', 'thesee.jpg'),

    new Heros(4, 'Persée', 'Fils de Danaé(fille du roi d\'Argos)', 'Il a vaincu la gorgone Méduse en lui tranchant la tête. Le sang qui se retrouva sur le sol donna naissance au cheval ailé Pégase. Il a également sauvé Andromède, en proie à un heros marin envoyé par Poséidon', 'persee.jpg'),

    new Heros(5, 'Ulysse', 'Fils de Laërte et d\'Anticlée', 'Roi d\'Ithaque, il est le héros de l\'Odyssée. Il a avaincu le cyclope Polyphème, résisté aux sirènes, il a affronté Circé et est même allé aux Enfers avant de rentrer et reprendre son trône', 'ulysse.jpg'),

    new Heros(6, 'Achille', 'Fils de Pélée (roi de Phthie) et de le néréide Thétis', 'Sa mère le trempa dans le Styx en le tenant par le talon, afin de le rendre invincible. Il fut cependant tué d\'une flèche dans le talon par Pâris durant la guerre de Troie', 'achille.jpg'),

    new Heros(7, 'Atalante', 'Fille d\'Iasos (roi du Péloponnèse) et de Clymène (fille de Minyas)', 'Chasseuse redoutable, elle a abattu le sanglier de Calydon, ainsi que deux centaures qui teantaient d\abuser d\'elle. Elle fut la seule femme à faire partie des Argonautes', 'atalante.jpg'),

    new Heros(8, 'Œdipe', 'Fils de Laïos et de Jocaste (roi et reine de Thèbes)', 'Un oracle ayant predit qu\'il tuerait son père avant d\'épouser sa mère, il est caché de ses parents très tôt. Il finira par vaincre le terrible Sphinx avant d\'accomplir l\'oracle en devenant roi de Thèbes à son tour. Il est le père d\'Antigone', 'oedipe.jpg' ),

    new Heros(9, 'Bellérophon', 'Fils de Glaucos(donc petit-fils de Sisyphe) et de Eurynomé', 'Chassé de chez lui après avoir involontairement tué son frère lors d\'un lancer de disque (oui), il chevauchera Pégase pour tuer la chimère, en lui jetant une lance à la pointe de plomb dans la gueule, qui fit fondre ses entrailles', 'bellerophon.png')
  ];

  constructor() { }

  // on déclare un fonction qui return la liste de héros , pour qu'elle soit accessible dans le component qui appelle la fonction
  getAllHeros(): Heros[] {
    return this.listeHeros
  }

  getHerosByID (id: number): Heros {
    return this.listeHeros.filter(heros => heros.id == id)[0]
  }

  addHeros(heros: Heros) : void {
    this.listeHeros.push(heros)
  }

  deleteHeros(herosToDelete: Heros): Heros[] {
    this.listeHeros = this.listeHeros.filter(heros => herosToDelete !== heros);
    return this.listeHeros;
    }
}
