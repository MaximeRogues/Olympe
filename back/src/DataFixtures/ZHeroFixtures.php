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
        // Grec

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

        // Nordique 

        $arngrim = new Hero();
        $arngrim->setName('Arngrim');
        $arngrim->setTitle("Le berserker");
        $arngrim->setOrigin("Inconnue");
        $arngrim->setExploits("Selon les versions H et U de la saga, le guerrier Arngrim partit pour un raid de pillage dans la région de Garðaríki (aujourd'hui la région de Novgorod en Russie). Le roi de Garðaríki, Svafrlami, qui possédait l'épée magique Tyrfing, lutta contre lui. Durant le combat, l'épée Tyrfing transperça le bouclier d'Arngrim et se planta dans le sol. Aussitôt, Arngrim trancha la main de Svafrlami, saisit l'épée Tyrfing, puis tua le roi avec sa propre épée. Après sa victoire sur Svafrlami, Arngrim enleva sa fille Eyfura et l'épousa de force.

        La version R de la saga est différente. Dans cette version Arngrim fut engagé comme chef de guerre par le vieux roi Sigrlami. Il gagna de nombreuses batailles et conquit pour son roi de vastes territoires et de nombreux sujets. En récompense, Sigrlami lui accorda une place éminente dans son royaume, la main de sa fille Eyfura et l'épée magique Tyrfing.
        
        Dans toutes les versions de la saga, Arngrim retourna vivre chez lui avec son épouse Eyfura. Dans les versions H et U il s'agit de l'île de Bolm au Hålogaland (aujourd'hui en Norvège). Dans la version R il s'agit de l'île de Bolmsö au Småland (aujourd'hui en Suède). Ils eurent douze fils, qui tous suivirent l'exemple de leur père et devinrent berserk. Leurs noms varient selon les versions :
        
        version H : Angantyr, Hjorvard, Hervard, Hrani, Brami, Barri, Reifnir, Tind, Saeming, Bui et les deux Haddings.
        version U : Angantyr, Hjörvard, Hervard, Hrani, Barri, Tyrfing, Tind, les deux Haddings, Bui, Bild et Toki.
        version R, seuls six fils sont nommés : Angantyr, Hjörvard, Hervard, Hrani et les deux Haddings.");
        $arngrim->setPicture("arngrim.jpg");
        $arngrim->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $arngrim->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Nordique']));
        $manager->persist($arngrim);

        $beowulf = new Hero();
        $beowulf->setName('Beowulf');
        $beowulf->setTitle("Le tueur de monstres");
        $beowulf->setOrigin("Inconnue");
        $beowulf->setExploits("Beowulf est un poème d’exception dans le corpus de la littérature anglo-saxonne. Plutôt que de choisir un sujet chrétien, le poème retrace les hauts faits du héros éponyme, et ses trois principaux combats : Beowulf est un puissant guerrier goth (« Geat », une peuplade au sud de la Suède) qui voyage au Danemark pour débarrasser la cour du roi Hrothgar d’un terrible monstre mangeur d’hommes nommé Grendel. Après l’avoir vaincu, Beowulf double la mise en tuant la mère de Grendel, puis retourne dans les pays des Goths pour se mettre au service de son peuple et de son roi, Hygelac. Bien plus tard, après avoir succédé au monarque, il meurt lors d’un ultime combat contre un dragon cracheur de feu");
        $beowulf->setPicture("beowulf.jpg");
        $beowulf->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $beowulf->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Nordique']));
        $manager->persist($beowulf);

        $siegfried = new Hero();
        $siegfried->setName('Siegfried');
        $siegfried->setTitle("Le prince guerrier");
        $siegfried->setOrigin("Inconnue");
        $siegfried->setExploits("Sigurd-Siegfried est un prince guerrier d'une puissance supérieure, responsable de nombreux exploits, comme le meurtre d'un dragon (Fáfnir dans la mythologie nordique). Certaines traditions rapportent qu'il est devenu invulnérable, notamment en se baignant dans le sang du monstre, sauf dans un endroit précis du dos qui n'était pas trempé, et il est tué tragiquement à cause de cette faiblesse, ce qui lui a valu des comparaisons avec d'autres personnages mythiques, en particulier Achille.");
        $siegfried->setPicture("siegfried.jpg");
        $siegfried->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $siegfried->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Nordique']));
        $manager->persist($siegfried);


        $manager->flush();
    }
}