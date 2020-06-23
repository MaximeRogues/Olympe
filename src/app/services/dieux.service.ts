import { Injectable } from '@angular/core';
import { Dieu } from 'src/app/models/dieu';


@Injectable({
  providedIn: 'root'
})
export class DieuxService {

  // On crée un tableau avec les instances de Dieu
  listeDieux = [
    new Dieu(1, 'Zeus', 'Le Foudre, l\'aigle', 'Les cieux, il est le roi de l\'Olympe', 'Il est le père de nombreux héros après s\'être mêlé à des humaines', 'zeus.jpg'),

    new Dieu(2, 'Héra', 'Le diadème, le sceptre', 'Le mariage, les femmes, les familles, les rois et les empires', 'Femme de Zeus, elle règne avec lui sur l\'Olympe', 'hera.jpg'),

    new Dieu(3, 'Hadès', 'La fourche, la kunée (un casque qui rend son porteur invisible), Cerbère', 'Le monde souterrain, les enfers, les richesses cachées de la terre', 'Il règne sur les Enfers où il accueille l\'âme des morts', 'hades.jpg'),

    new Dieu(4, 'Poséidon', 'Le trident, la conque', 'Les océans, les navigateurs, les tremblements de terre', 'Il règne sur les mers et les océans, sur son char tiré par des hippocampes', 'poseidon.jpg'),

    new Dieu(5, 'Arès', 'Le glaive, le bouclier, la lance...', 'Les guerres, la violence, la destruction', 'Dieu colérique, il déclencha des guerres à plusieurs reprises', 'ares.jpg'),

    new Dieu(6, 'Athéna', 'L\'Egide, la chouette, l\'olivier', 'L\'intelligence, la stratégie, l\'artisanat', 'Sortie du front de Zeus, elle est la gardienne de la ville d\'Athènes', 'athena.jpg'),

    new Dieu(7, 'Aphrodite', 'Le collier d\'or, la colombe, la ceinture magique', 'La fertilité, l\'amour, la séduction', 'On lui voue un culte basé sur la sexualité, elle est cependant surtout la déesse des activités des jeunes filles en général', 'aphrodite.jpg'),

    new Dieu(8, 'Hermès', 'Le caducée, le chapeau et les chaussures ailés', 'Les voyageurs, les routes et carrefours, le commerce, les messagers', 'Il est le messager des dieux et conduit les âmes aux Enfers', 'hermes.jpg'),

    new Dieu(9, 'Apollon', 'La lyre, la flûte, le laurier, l\'arc', 'La poésie, la musique, et les arts en général', 'Associé au Soleil, il est le frère d\'Artémis, et un des principaux dieux capables de divination, qu\'il exerce en rendant ses oracles à travers la Pythie de Delphes', 'apollon.jpg'),

    new Dieu(10, 'Artémis', 'L\'arc et les flèches d\'argent, la biche, le cerf', 'La nature, la chasse, les accouchements', 'Associée à la Lune, elle est la soeur d\'Apollon, elle a le pouvoir de déclencher les épidémies mais aussi de les arrêter', 'artemis.jpg'),

    new Dieu(11, 'Dionysos', 'Le raisin, les feuilles de vigne', 'La vigne, le vin et ses excès', 'Fils de Zeus et d\'une mortelle, il se mêle souvent aux humains lors de fêtes et d\'orgies', 'dionysos.jpg'),

    new Dieu(12, 'Héphaïstos', 'Le marteau, l\'enclume, le bouton d\'or', 'La forge, la fabrication d\'armes et d\'arumres', 'Fils de Zeus et d\Héra, c\'est lui qui fabriqua les armes et armures de nombreaux héros et dieux. C\'est aussi qui fabriqua Pandore, la première femme', 'hephaistos.jpg'),

    new Dieu(13, 'Déméter', 'Les gerbes de blé, la faucille, le flambeau', 'L\'agriculture, les moissons', 'Elle est la mère de Perséphone, c\'est en allant chercher cette dernière aux Enfers que l\'hiver fut créé, sa fille passera chaque hiver aux Enfers en compagnie d\Hadès', 'demeter.jpg'),

    new Dieu(14, 'Hestia', 'Le feu sacré, le foyer, la torche', 'Le foyer public et familial, la famille', 'Elle est la seule déesse à rester en permanence sur l\'Olympe, elle est décrite comme une déesse vierge et immuable. Elle est la première-née du Titan Cronos', 'hestia.jpg')
  ];

  constructor() { }

  // on déclare un fonction qui return la liste de dieux , pour qu'elle soit accessible dans le component qui appelle la fonction
  getAllDieux() : Dieu[] {
    return this.listeDieux
  }
  

  //Fonction pour retourver un dieu par son nom
  getDieuByID (id: number): Dieu {
    return this.listeDieux.filter(dieu => dieu.id == id)[0]
  }

  // fonction pour ajouter un dieu au tableau listeDieux
  addDieu(dieu: Dieu): void {
    this.listeDieux.push(dieu);
  }

  deleteDieu(dieuToDelete: Dieu): Dieu[] {
  this.listeDieux = this.listeDieux.filter(dieu => dieuToDelete !== dieu);
  return this.listeDieux;
  }
}
