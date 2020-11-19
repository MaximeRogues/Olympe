<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Repository\PantheonRepository;
use App\Repository\GenderRepository;

use App\Entity\Gender;
use App\Entity\Pantheon;
use App\Entity\Monster;

class ZMonsterFixtures extends Fixture
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
        $cerbere = new Monster();
        $cerbere->setName('Cerbère');
        $cerbere->setTitle("Le gardien des Enfers");
        $cerbere->setPlace("Les Enfers");
        $cerbere->setHistory("Enorme chien à trois têtes, il est le gardien des Enfers, empêchant les vivants d'entrer et les morts de sortir. Il se tient aux côtés d'Hadès mais sera capturé vivant par Héraclès lors de son douzième travail");
        $cerbere->setPicture("cerbere.jpg");
        $cerbere->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $cerbere->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($cerbere);

        $charybde = new Monster();
        $charybde->setName('Charybde');
        $charybde->setTitle("Le gouffre sans fond");
        $charybde->setPlace("Détroit de Messine");
        $charybde->setHistory("A l'origine une jeune fille, Charybde fut changée en gouffre marin par Zeus pour la punir d'avoir volé une partie du troupeau de Géryon. Avec Scylla, elle faillit engloutir le navire de Jason durant sa quête pour la toison d'or");
        $charybde->setPicture("charybde.jpg");
        $charybde->setGender($this->genderRepository->findOneBy(['name' => 'Féminin']));
        $charybde->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($charybde);

        $scylla = new Monster();
        $scylla->setName('Scylla');
        $scylla->setTitle("Le monstre aux six têtes");
        $scylla->setPlace("Détroit de Messine");
        $scylla->setHistory("Une nymphe changée en monstre marin par Circé après avoir repoussé le dieu Glaucos. Elle tua six marins de l'équipage d'Ulysse à l'aide de ses six têtes pourvues de trois rangées de dents");
        $scylla->setPicture("scylla.jpg");
        $scylla->setGender($this->genderRepository->findOneBy(['name' => 'Féminin']));
        $scylla->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($scylla);

        $lion = new Monster();
        $lion->setName('Lion de Némée');
        $lion->setTitle("A la peau invincible");
        $lion->setPlace("Région de Némée");
        $lion->setHistory("Un immense lion à la peau impénétrable, que Héraclès devait tuer pour son premier travail, il y parviendra en étouffant la bête à mains nues");
        $lion->setPicture("lion.jpg");
        $lion->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $lion->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($lion);

        $hydre = new Monster();
        $hydre->setName('Hydre de Lerne');
        $hydre->setTitle("Le monstre des marais");
        $hydre->setPlace("Marais de Lerne");
        $hydre->setHistory("Un monstre à plusieurs têtes au souffle toxique qui repoussent den double quand on les tranche. Elle sera tuée lors du deuxième travail de Héraclès, qui brûlait les plaies au fur et à mesure qu'il tranchait ses têtes");
        $hydre->setPicture("hydre.jpg");
        $hydre->setGender($this->genderRepository->findOneBy(['name' => 'Féminin']));
        $hydre->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($hydre);

        $chimere = new Monster();
        $chimere->setName('Chimère');
        $chimere->setTitle("La bête mélangée");
        $chimere->setPlace("Région de Lycie");
        $chimere->setHistory("Créature au corps de lion, avec une tête de chèvre cracheuse de feu sur le dos et une queue à tête de serpent. Elle fut tuée par Bellérophon chevauchant Pégase");
        $chimere->setPicture("chimere.jfif");
        $chimere->setGender($this->genderRepository->findOneBy(['name' => 'Non défini']));
        $chimere->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($chimere);

        $gorgones = new Monster();
        $gorgones->setName('Gorgones');
        $gorgones->setTitle("Les sœurs serpents");
        $gorgones->setPlace("Mont Hélicon");
        $gorgones->setHistory("Elles étaient trois soeurs, des monstres aux cheveux de serpents, et dont le regard changeait en pierre. La plus célèbre, Méduse, fut tuée par Persée, il offrit la tête à Athéna, qui la posa sur son bouclier (l'égide), afin qu'il pétrifie ses adversaires");
        $gorgones->setPicture("gorgones.jpg");
        $gorgones->setGender($this->genderRepository->findOneBy(['name' => 'Féminin']));
        $gorgones->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($gorgones);

        $minotaure = new Monster();
        $minotaure->setName('Minotaure');
        $minotaure->setTitle("L'homme-taureau");
        $minotaure->setPlace("Un labyrinthe au centre de la Crête");
        $minotaure->setHistory("Fils de l'épouse du roi Minos et d'un taureau blanc envoyé par Poséidon, on lui livrait tous les neuf ans sept filles et sept garçons pour qu'il s'en nourrisse. Il sera tué par Thésée qui ira dans le labyrinthe avec une pelote de fil afin de retrouver son chemin");
        $minotaure->setPicture("minotaure.jpg");
        $minotaure->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $minotaure->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($minotaure);

        $sirenes = new Monster();
        $sirenes->setName('Sirènes');
        $sirenes->setTitle("Mi-femmes mi-oiseaux");
        $sirenes->setPlace("Détroit de Messine");
        $sirenes->setHistory("Créatures mi-femmes mi-oiseaux, elles séduisaient les navigateurs afin de les faire s'échouer et pouvoir dévorer leur corps. Ulysse résista à leur chant en se faisant attacher au mât de son navire et en faisant couler de la cire dans les oreilles de ses hommes");
        $sirenes->setPicture("sirenes.jpg");
        $sirenes->setGender($this->genderRepository->findOneBy(['name' => 'Féminin']));
        $sirenes->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($sirenes);

        $sphinx = new Monster();
        $sphinx->setName('sphinx');
        $sphinx->setTitle("Le poseur d'énigmes");
        $sphinx->setPlace("Thèbes");
        $sphinx->setHistory("Créature au visage de femme mais au corps de lion et aux ailes d'aigles, il terrorisait Thèbes en tuant quiconque était incapable de résoudre son énigme. C'est Œdipe qui le vaincra en trouvant la réponse, ce qui fera de lui le nouveau roi de Thèbes");
        $sphinx->setPicture("sphinx.jpg");
        $sphinx->setGender($this->genderRepository->findOneBy(['name' => 'Non défini']));
        $sphinx->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($sphinx);

        $polypheme = new Monster();
        $polypheme->setName('Polyphème');
        $polypheme->setTitle("Le cyclope bavard");
        $polypheme->setPlace("Pays des Cyclopes en Sicile");
        $polypheme->setHistory("Il enferma Ulysse et ses hommes dans sa grotte après qu'ils aient mangé sa nourriture sans se poser de question. Il mangea plusieurs hommes avant de se faire crever l'œil par Ulysse, qui réussit à s'échapper en s'accrochant sous les moutons du cyclope lorsqu'il les mène au pâturage");
        $polypheme->setPicture("polypheme.jpg");
        $polypheme->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $polypheme->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Grec']));
        $manager->persist($polypheme);

        $manager->flush();
    }
}


