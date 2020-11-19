<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Repository\PantheonRepository;
use App\Repository\GenderRepository;

use App\Entity\Gender;
use App\Entity\Pantheon;
use App\Entity\Hero;

class ZHeroFixtures extends Fixture
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
        $heracles = new Hero();
        $heracles->setName('Héraclès');
        $heracles->setTitle("La gloire d'Héra");
        $heracles->setOrigin("Fils de Zeus et d'Alcmène");
        $heracles->setExploits("Les douzes Travaux qui portent son nom: Il a tué l'hydre de Lerne, le lion de Némée, capturé le sanglier d'Erymanthe, vaincu la biche de Cérynie, tué les oiseaux du lac Stymphale, capturé le taureau de Minos, dompté les juments de Diomède, ramené la ceinture d'or d'Hippolyte, nettoyé les écuries d'Augias (en détournant un fleuve...), volé les oeufs de Géryon ainsi que les pommes d'or du jardin des Hespérides et sorti Cerbère des Enfers ");
        $heracles->setPicture("heracles.jpg");
        $heracles->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $heracles->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($heracles);

        $circe = new Hero();
        $circe->setName('Circé');
        $circe->setTitle("La magicienne");
        $circe->setOrigin("Fille du dieu Hélios et de l'océanide Perséis");
        $circe->setExploits("Experte en potions et en poisons, elle a accueilli l'équipage d'Ulysse et les a transformé en animaux. Elle hébergea Ulysse pendant un an sur son île et l'aida à préparer la suite de son voyage");
        $circe->setPicture("circe.jpg");
        $circe->setGender($this->genderRepository->findOneBy(['name' => 'Féminin']));
        $circe->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($circe);

        $thesee = new Hero();
        $thesee->setName('Thésée');
        $thesee->setTitle("Le roi mythique d'Athènes");
        $thesee->setOrigin("Fils du roi Egée et d'Ethra");
        $thesee->setExploits("Il a vaincu le Minotaure qui terrorisait la Crête à l'aide d'une pelote de fil confiée par Ariane pour qu'il puisse se retrouver dans le labyrinthe. Il devient le roi d'Athènes après cet exploit");
        $thesee->setPicture("thesee.jpg");
        $thesee->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $thesee->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($thesee);

        $persee = new Hero();
        $persee->setName('Persée');
        $persee->setTitle("Le tueur de gorgone");
        $persee->setOrigin("Fils de Zeus et de Danaé (la fille du roi d'Argos)");
        $persee->setExploits("Il a vaincu la gorgone Méduse en lui tranchant la tête. Le sang qui se retrouva sur le sol donna naissance au cheval ailé Pégase. Il a également sauvé Andromède, en proie à un monstre marin envoyé par Poséidon");
        $persee->setPicture("persee.jpg");
        $persee->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $persee->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($persee);

        $ulysse = new Hero();
        $ulysse->setName('Ulysse');
        $ulysse->setTitle("Le roi d'Ithaque");
        $ulysse->setOrigin("Fils de Laërte et d'Anticlée");
        $ulysse->setExploits("Roi d'Ithaque, il est le héros de l'Odyssée. Il a vaincu le cyclope Polyphème, résisté aux sirènes, il a affronté Circé et est même allé aux Enfers avant de rentrer et reprendre son trône");
        $ulysse->setPicture("ulysse.jpg");
        $ulysse->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $ulysse->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($ulysse);

        $achille = new Hero();
        $achille->setName('Achille');
        $achille->setTitle("Le héros de la guerre de Troie");
        $achille->setOrigin("Fils de Pélée (le roi de Phthie) et de le néréide Thétis");
        $achille->setExploits("Sa mère le trempa dans le Styx en le tenant par le talon, afin de le rendre invincible. Il fut cependant tué d'une flèche dans le talon par Pâris durant la guerre de Troie");
        $achille->setPicture("achille.jpg");
        $achille->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $achille->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($achille);

        $atalante = new Hero();
        $atalante->setName('Atalante');
        $atalante->setTitle("La redoutable chasseuse");
        $atalante->setOrigin("Fille d'Iasos (le roi du Péloponnèse) et de Clymène (la fille de Minyas)");
        $atalante->setExploits("Chasseuse redoutable, elle a abattu le sanglier de Calydon, ainsi que deux centaures qui tentaient d'abuser d'elle. Elle fut la seule femme à faire partie des Argonautes");
        $atalante->setPicture("atalante.jpg");
        $atalante->setGender($this->genderRepository->findOneBy(['name' => 'Féminin']));
        $atalante->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($atalante);

        $oedipe = new Hero();
        $oedipe->setName('Œdipe');
        $oedipe->setTitle("Le héros parricide");
        $oedipe->setOrigin("Fils de Laïos et de Jocaste (les roi et reine de Thèbes)");
        $oedipe->setExploits("Un oracle ayant prédit qu'il tuerait son père avant d'épouser sa mère, il est caché de ses parents à la naissance. Il finira par vaincre le terrible Sphinx et accomplir l'oracle en tuant son père et en devenant roi de Thèbes à son tour. Il est le père d'Antigone");
        $oedipe->setPicture("oedipe.jpg");
        $oedipe->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $oedipe->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($oedipe);

        $bellerophon = new Hero();
        $bellerophon->setName('Bellérophon');
        $bellerophon->setTitle("Qui chevaucha Pégase");
        $bellerophon->setOrigin("Fils de Glaucos (donc petit-fils de Sisyphe) et d'Eurynomé");
        $bellerophon->setExploits("Chassé de chez lui après avoir involontairement tué son frère lors d'un lancer de disque (oui), il chevauchera Pégase pour tuer la chimère, en lui jetant une lance à la pointe de plomb dans la gueule, qui fit fondre ses entrailles");
        $bellerophon->setPicture("bellerophon.png");
        $bellerophon->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $bellerophon->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($bellerophon);

        $orphee = new Hero();
        $orphee->setName('Orphée');
        $orphee->setTitle("Le héros musicien");
        $orphee->setOrigin("Fils du roi Œagre et de la muse Calliope");
        $orphee->setExploits("Après que sa fiancée Eurydice soit descendue aux Enfers après s'être fait mordre par un serpent, Orphée part la chercher en endormant Cerbère à l'aide de sa musique et convainc Hadès de lui rendre Eurydice, à la condition qu'il ne la regarde pas avant d'être ressorti, Orphée ne résiste pas à la tentation et se retourne pour la voir, de peur qu'elle ait disparu, et la perd pour toujours");
        $orphee->setPicture("orphee.jpg");
        $orphee->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $orphee->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($orphee);

        $jason = new Hero();
        $jason->setName('Jason');
        $jason->setTitle("Le premier argonaute");
        $jason->setOrigin("Fils d'Éson (le roi d'Iolcos) et de Médée");
        $jason->setExploits("Elevé par le centaure Chiron, il se lança dans la quête de la toison d'or avec un équipage de fiers guerriers, après de rudes épreuves, il déroba la toison au dragon qui la gardait avec l'aide de la magicienne Médée");
        $jason->setPicture("jason.jpg");
        $jason->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $jason->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($jason);

        $medee = new Hero();
        $medee->setName('Médée');
        $medee->setTitle("La savante");
        $medee->setOrigin("Fille d'Eétès (roi de Colchide) et de l'océanide Idyie, elle est la nièce de Circé");
        $medee->setExploits("Magicienne aux grands pouvoirs, elle fournit une pommade à Jason pour le rendre invincible et qu'il puisse réussir les épreuves que le roi lui a imposé pour obtenir la toison d'or. Elle tend un piège aux filles du roi d'Iolcos qui le tueront par mégarde, permettant à Jason de reprendre le trône");
        $medee->setPicture("medee.jpg");
        $medee->setGender($this->genderRepository->findOneBy(['name' => 'Féminin']));
        $medee->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($medee);

        $manager->flush();
    }
}