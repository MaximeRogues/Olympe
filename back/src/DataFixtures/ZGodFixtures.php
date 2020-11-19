<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Repository\PantheonRepository;
use App\Repository\GenderRepository;

use App\Entity\Gender;
use App\Entity\Pantheon;
use App\Entity\God;

class ZGodFixtures extends Fixture
{
    private $genderRepository;
    private $pantheonRepository;

    public function __construct(PantheonRepository $pantheonRepository, GenderRepository $genderRepository)
    {
        $this->pantheonRepository = $pantheonRepository;
        $this->genderRepository = $genderRepository;
    }

    public function getDependencies()
    {
        return [
            GenderFixtures::class,
            PantheonFixtures::class
        ];
    }
    
    public function load(ObjectManager $manager)
    {
        $zeus = new God();
        $zeus->setName('Zeus');
        $zeus->setTitle('Le roi des dieux');
        $zeus->setDomain("Les cieux, il est le roi de l'Olympe");
        $zeus->setAttributes("Le foudre, l'aigle, l'égide");
        $zeus->setHistory("C'est lui qui libéra ses frères et soeurs de Cronos et enferma la plupart des Titans dans le Tartare. Il est le père de nombreux héros après s'être mêlé à des humaines");
        $zeus->setPicture("zeus.jpg");
        $zeus->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $zeus->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($zeus);

        $hera = new God();
        $hera->setName('Héra');
        $hera->setTitle('La reine des dieux');
        $hera->setDomain("Le mariage, les femmes, les familles, les rois et les empires");
        $hera->setAttributes("Le diadème, le sceptre, le paon");
        $hera->setHistory("Femme de Zeus, elle règne avec lui sur l'Olympe et persécute les partenaires extraconjugales de son mari. C'est elle qui a organisé la folie meurtrière de Héraclès, qui tire son nom de Héra, car ses travaux doivent servir la gloire de la reine des dieux. Elle a posé les cent yeux du géant Argos sur le paon qui est son animal favori");
        $hera->setPicture("hera.jpg");
        $hera->setGender($this->genderRepository->findOneBy(['name' => 'Féminin']));
        $hera->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($hera);

        $hades = new God();
        $hades->setName('Hadès');
        $hades->setTitle("Le dieu des Enfers");
        $hades->setDomain("Le monde souterrain, les enfers, les richesses cachées de la terre");
        $hades->setAttributes("Le bident (fourche à deux dents), la kunée (un casque qui rend son porteur invisible), Cerbère le chien à trois têtes");
        $hades->setHistory("Il règne sur les Enfers où il accueille l'âme des morts. Il a enlevé Perséphone pour qu'elle reste avec lui aux Enfers mais l'autorisa à sortir 6 mois par an pour rejoindre sa mère Déméter");
        $hades->setPicture("hades.jpg");
        $hades->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $hades->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($hades);

        $poseidon = new God();
        $poseidon->setName('Poséidon');
        $poseidon->setTitle("Le dieu des océans");
        $poseidon->setDomain("Les océans, les navigateurs, les tremblements de terre");
        $poseidon->setAttributes("Le trident, la conque");
        $poseidon->setHistory("Il règne sur les mers et les océans, sur son char tiré par des hippocampes. Il empêche Ulysse de rentrer chez lui après qu'il ait crevé l'oeil de son fils, le cyclope Polyphème");
        $poseidon->setPicture("poseidon.jpg");
        $poseidon->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $poseidon->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($poseidon);

        $ares = new God();
        $ares->setName('Arès');
        $ares->setTitle("Le dieu de la guerre");
        $ares->setDomain("Les guerres, la violence, la destruction");
        $ares->setAttributes("Le glaive, le bouclier, la lance...");
        $ares->setHistory("Dieu colérique, il déclencha des guerres à plusieurs reprises. Il a une relation adultère avec Aphrodite, qui est mariée à Héphaïstos");
        $ares->setPicture("ares.jpg");
        $ares->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $ares->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($ares);

        $athena = new God();
        $athena->setName('Athéna');
        $athena->setTitle("La déesse de la sagesse");
        $athena->setDomain("L'intelligence, la stratégie, l'artisanat");
        $athena->setAttributes("L'égide, la chouette, l'olivier");
        $athena->setHistory("Sortie du front de Zeus déjà entièrement armée, elle est la gardienne de la ville d'Athènes après s'être confronté à Poséidon pour la possession de l'Attique");
        $athena->setPicture("athena.jpg");
        $athena->setGender($this->genderRepository->findOneBy(['name' => 'Féminin']));
        $athena->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($athena);

        $hermes = new God();
        $hermes->setName('Hermès');
        $hermes->setTitle("Le dieu messager");
        $hermes->setDomain("Les voyageurs, les routes et carrefours, le commerce, les messagers");
        $hermes->setAttributes("Le caducée, le chapeau et les chaussures ailés");
        $hermes->setHistory("Il est le messager des dieux et conduit les âmes aux Enfers. Il est le dieu le plus proche des humains et le plus bienveillant à leur égard, comme lorsqu'il a donné la parole à Pandore avant de la présenter aux hommes");
        $hermes->setPicture("hermes.jpg");
        $hermes->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $hermes->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($hermes);

        $aphrodite = new God();
        $aphrodite->setName('Aphrodite');
        $aphrodite->setTitle("La déesse de l'amour");
        $aphrodite->setDomain("La fertilité, l'amour, la séduction");
        $aphrodite->setAttributes("Le collier d'or, la colombe, la ceinture magique");
        $aphrodite->setHistory("On lui voue un culte basé sur la sexualité, elle est cependant surtout la déesse des activités des jeunes filles en général");
        $aphrodite->setPicture("aphrodite.jpg");
        $aphrodite->setGender($this->genderRepository->findOneBy(['name' => 'Féminin']));
        $aphrodite->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($aphrodite);

        $apollon = new God();
        $apollon->setName('Apollon');
        $apollon->setTitle("Le dieu des arts");
        $apollon->setDomain("La poésie, la musique, et les arts en général");
        $apollon->setAttributes("La lyre, la flûte, le laurier, l'arc");
        $apollon->setHistory("Associé au Soleil, il est le frère d'Artémis, et un des principaux dieux capables de divination, qu'il exerce en rendant ses oracles à travers la Pythie de Delphes");
        $apollon->setPicture("apollon.jpg");
        $apollon->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $apollon->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($apollon);

        $artemis = new God();
        $artemis->setName('Artémis');
        $artemis->setTitle("La déesse de la chasse");
        $artemis->setDomain("La nature, la chasse, les accouchements");
        $artemis->setAttributes("L'arc et les flèches d'argent, la biche, le cerf");
        $artemis->setHistory("Associée à la Lune, elle est la sœur d'Apollon, elle a le pouvoir de déclencher les épidémies mais aussi de les arrêter");
        $artemis->setPicture("artemis.jpg");
        $artemis->setGender($this->genderRepository->findOneBy(['name' => 'Féminin']));
        $artemis->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($artemis);

        $Dionysos = new God();
        $Dionysos->setName('Dionysos');
        $Dionysos->setTitle("Le dieu du vin");
        $Dionysos->setDomain("La vigne, le vin, la fête et ses excès");
        $Dionysos->setAttributes("Le raisin, les feuilles de vigne");
        $Dionysos->setHistory("Fils de Zeus et d'une mortelle, il se mêle souvent aux humains lors de fêtes et d'orgies");
        $Dionysos->setPicture("Dionysos.jpg");
        $Dionysos->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $Dionysos->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($Dionysos);

        $hephaistos = new God();
        $hephaistos->setName('Héphaïstos');
        $hephaistos->setTitle("Le dieu forgeron");
        $hephaistos->setDomain("La forge, la fabrication d'armes et d'armures");
        $hephaistos->setAttributes("Le marteau, l'enclume, le bouton d'or");
        $hephaistos->setHistory("Fils de Zeus et d'Héra, c'est lui qui fabriqua les armes et armures de nombreux héros et dieux. C'est aussi qui fabriqua Pandore, la première femme");
        $hephaistos->setPicture("hephaistos.jpg");
        $hephaistos->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $hephaistos->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($hephaistos);

        $demeter = new God();
        $demeter->setName('Déméter');
        $demeter->setTitle("La déesse des moissons");
        $demeter->setDomain("L'agriculture, les moissons");
        $demeter->setAttributes("Les gerbes de blé, la faucille, le flambeau");
        $demeter->setHistory("Elle est la mère de Perséphone, c'est en allant chercher cette dernière aux Enfers que l'hiver fut créé, sa fille passera chaque hiver aux Enfers en compagnie d'Hadès");
        $demeter->setPicture("demeter.jpg");
        $demeter->setGender($this->genderRepository->findOneBy(['name' => 'Féminin']));
        $demeter->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($demeter);

        $hestia = new God();
        $hestia->setName('hestia');
        $hestia->setTitle("La déesse du foyer");
        $hestia->setDomain("Le foyer public et familial, la famille");
        $hestia->setAttributes("Le feu sacré, le foyer, la torche");
        $hestia->setHistory("Elle est la seule déesse à rester en permanence sur l'Olympe, elle est décrite comme une déesse vierge et immuable. Elle est la première-née du Titan Cronos");
        $hestia->setPicture("hestia.jpg");
        $hestia->setGender($this->genderRepository->findOneBy(['name' => 'Féminin']));
        $hestia->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($hestia);

        // $zeus = new God();
        // $zeus->setName('Zeus');
        // $zeus->setTitle("");
        // $zeus->setDomain("");
        // $zeus->setAttributes("");
        // $zeus->setHistory("");
        // $zeus->setPicture("zeus.jpg");
        // $zeus->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        // $zeus->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        // $manager->persist($zeus);

        // $zeus = new God();
        // $zeus->setName('Zeus');
        // $zeus->setTitle("");
        // $zeus->setDomain("");
        // $zeus->setAttributes("");
        // $zeus->setHistory("");
        // $zeus->setPicture("zeus.jpg");
        // $zeus->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        // $zeus->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        // $manager->persist($zeus);

        $manager->flush();
    }
}
