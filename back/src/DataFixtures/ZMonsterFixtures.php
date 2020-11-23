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
        // Grec

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
        $chimere->setPicture("chimere.jpg");
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

        // Egyptien

        $acephale = new Monster();
        $acephale->setName('Acéphale');
        $acephale->setTitle("Le monstre sans tête");
        $acephale->setPlace("Partout");
        $acephale->setHistory("L'une des premières représentations d'acéphales (trois chevaux sans tête) se trouve dans la grotte ornée dite grotte de Fronsac à Vieux-Mareuil (Dordogne) datée du magdalénien récent.
        Le cheval maléfique sans tête est présent dans le folklore celtique et français. Dans les campagnes françaises, il invite le piéton voyageur isolé à monter sur son dos, pour le noyer dans un étang. En Bretagne, il tire le char de la Mort, et en Irlande, le conducteur du char est lui-même sans tête.
        L'acéphale peut également être un corps humain ou un revenant");
        $acephale->setPicture("acephale.jpg");
        $acephale->setGender($this->genderRepository->findOneBy(['name' => 'Non défini']));
        $acephale->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Égyptien']));
        $manager->persist($acephale);

        $criosphinx = new Monster();
        $criosphinx->setName("Criosphinx");
        $criosphinx->setTitle("Le monstre à tête de bélier");
        $criosphinx->setPlace("Partout");
        $criosphinx->setHistory("Le criosphinx ou sphinx criocéphale se caractérise par un corps de lion accroupi ou couché aux longues pattes et une tête de bélier aux cornes recourbées. Il fait référence au dieu Amon-Rê et symbolise à la fois la puissance physique et l'énergie fécondante. Ainsi l’animal réunit en lui la force du lion et l’ardeur du bélier, ce qui en fait un être exceptionnel.

        On peut en voir notamment le long du dromos du temple d'Amon à Karnak ou encore le long du dromos du temple d'Amon à Napata où les criosphinx étaient représentés couchés, les pattes avant repliées et le pelage du corps figuré.");
        $criosphinx->setPicture("criosphinx.jpg");
        $criosphinx->setGender($this->genderRepository->findOneBy(['name' => 'Non défini']));
        $criosphinx->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Égyptien']));
        $manager->persist($criosphinx);
        
        $griffon = new Monster();
        $griffon->setName("Griffon");
        $griffon->setTitle("La créature à tête d'aigle");
        $griffon->setPlace("Partout");
        $griffon->setHistory("Le griffon ou grype est une créature légendaire présente dans plusieurs cultures anciennes. Il est imaginé et représenté avec le corps d'un aigle (tête, ailes et serres) greffé sur l'arrière d'un lion (abdomen, pattes et queue), et muni d'oreilles de cheval. Avec quelquefois des variantes, le griffon gardera de tout temps la particularité reconnaissable d'être hiéracocéphale.
        Le griffon se voit souvent associé aux divinités et héros locaux (Gilgamesh, Seth, rois égyptiens, Apollon, Dionysos, Éros ou encore Némésis)");
        $griffon->setPicture("griffon.png");
        $griffon->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $griffon->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Égyptien']));
        $manager->persist($griffon);
        
        $serpopard = new Monster();
        $serpopard->setName("Serpopard");
        $serpopard->setTitle("La chimère antique");
        $serpopard->setPlace("Egypte et Mésopotamie");
        $serpopard->setHistory("Serpopard est un terme moderne qui désigne un animal mythique, une chimère connue en Égypte ancienne et en Mésopotamie. C'est un mot-valise constitué d'une partie du mot « serpent » et du mot « léopard ». Il utilise la combinaison de deux animaux, l'un étant le corps d'un léopard, l'autre le long cou et la tête d'un serpent. Cependant, on peut interpréter le terme comme étant un lion à cou de serpent. Il n'y a pas de nom connu dans les textes anciens pour une telle créature.
        Il a été suggéré que dans l'art de l'Égypte antique les serpopards représentent « un symbole du chaos qui régnait le long des frontières de l'Égypte », situation que le roi devait dominer. Ils sont normalement exhibés comme conquis ou enchaînés, comme sur la palette de Narmer ou attaquant d'autres animaux. Mais dans l'art de Mésopotamie, ils sont représentés par paires, avec des cous entrelacés.");
        $serpopard->setPicture("serpopard.jpg");
        $serpopard->setGender($this->genderRepository->findOneBy(['name' => 'Non défini']));
        $serpopard->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Égyptien']));
        $manager->persist($serpopard);

        // Nordique

        $elfe = new Monster();
        $elfe->setName("Les elfes");
        $elfe->setTitle("Les habitants d'Alfheim");
        $elfe->setPlace("Alfheim");
        $elfe->setHistory("Dit pour habiter le royaume d'Alfheim, sous la domination de la déesse Freyr, les Elfes étaient de grands et minces demi-dieux à la peau et aux cheveux clairs, qui étaient plus beaux que le soleil.
        Dans l'ensemble, les Elfes se tenaient à l'écart des affaires des humains, n'apparaissant qu'occasionnellement pour causer ou guérir des maladies, selon leurs caprices. Il s'agissait d'une race très fluide et qui ne souscrivait pas aux rôles sexuels normaux des humains. Les elfes étaient souvent dépeints comme moralement ambivalents.

        Certaines sources distinguent les Elfes en deux groupes différents - Dökkkálfar et Ljósálfar - les Elfes Noirs qui sont 'plus noirs que le pitch' et les Elfes Légers qui sont 'plus clairs que le soleil'.");
        $elfe->setPicture("elfe.jpg");
        $elfe->setGender($this->genderRepository->findOneBy(['name' => 'Non défini']));
        $elfe->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Nordique']));
        $manager->persist($elfe);

        $nains = new Monster();
        $nains->setName("Les nains");
        $nains->setTitle("Les forgerons");
        $nains->setPlace("Svartalfheim");
        $nains->setHistory("Contrairement à nos représentations modernes, il n'y a aucune preuve que les Nains étaient des êtres courts et robustes. Au lieu de cela, ils sont considérés comme des êtres 'inférieurs' et certains peuvent donc les avoir déformés en 'courts'.
        Les nains habitent dans la terre, et Svartalfheim est souvent considéré comme un complexe souterrain labyrinthique de mines et de forges. Smithing - faire des choses - c'est ce à quoi nous pensons le mieux quand il s'agit de nains.

        Parmi les incroyables objets forgés par les Nains figurent Mjollnir - le marteau de Thor - Skidbladnir - un navire appartenant à Freyr qui a toujours un vent favorable - et Draupnir et Gungnir - l'anneau et l'épée de Odin.");
        $nains->setPicture("nains.jpg");
        $nains->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $nains->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Nordique']));
        $manager->persist($nains);

        $jotnar = new Monster();
        $jotnar->setName("Les Jötnar");
        $jotnar->setTitle("Les géants nordiques");
        $jotnar->setPlace("Jötunheim");
        $jotnar->setHistory("Les Jötnar (singulier Jötunn) sont un groupe étrange et difficile à définir. Bien qu'ils soient généralement traduits par 'géants', ils ont généralement la même taille que les humains.
        On dit souvent qu'ils sont en guerre avec les dieux de l'Æsir et du Vanir, mais beaucoup de dieux nordiques eux-mêmes sont nés d'un ou plusieurs Jötunn. Il vaut peut-être mieux les considérer comme des 'dévoreurs', des esprits chaotiques de la nuit, des ténèbres et de l'hiver.

        Nous reviendrons sur quelques Jötunn spécifiques plus loin dans cet article mais ils incluent Hel - la déesse/géante du monde souterrain et Ymir qui est une entité hermaphrodite qui est le premier être dans le mythe de création nordique.
        Les trolls sont un sous-ensemble du Jötnar.");
        $jotnar->setPicture("jotnar.jpg");
        $jotnar->setGender($this->genderRepository->findOneBy(['name' => 'Non défini']));
        $jotnar->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Nordique']));
        $manager->persist($jotnar);

        $valkyrie = new Monster();
        $valkyrie->setName("Les valkyries");
        $valkyrie->setTitle("Guides des âmes");
        $valkyrie->setPlace("Valhalla");
        $valkyrie->setHistory("Ce sont les femmes d'Odin qui aident les esprits qui sont dépeintes comme d'élégantes demoiselles qui transportent les morts au Valhalla. Une bonne histoire mais, comme toujours, ce n'est pas si simple !

        Il est certainement vrai que les Valkyries ont porté les morts au combat, mais leur nom - Choosers of the Slain - fait allusion à leur côté le plus sinistre. Ils ne choisissent pas seulement qui entre dans le Valhalla, ils choisissent aussi qui vit et meurt au combat !");
        $valkyrie->setPicture("valkyrie.jpg");
        $valkyrie->setGender($this->genderRepository->findOneBy(['name' => 'Féminin']));
        $valkyrie->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Nordique']));
        $manager->persist($valkyrie);

        $jormungandr = new Monster();
        $jormungandr->setName("Jörmungandr");
        $jormungandr->setTitle("Le serpent de Midgard");
        $jormungandr->setPlace("Midgard");
        $jormungandr->setHistory("Selon l’Edda de Snorri, Il est le fils du dieu malin Loki et de la géante Angrboda, et le frère du loup Fenrir ainsi que de la déesse du monde des morts Hel. Peu après sa naissance, le dieu Odin jette Jörmungand dans la mer qui encercle Midgard, puisque les prophéties racontent qu'il causera de grands dégâts chez les dieux. Mais ce dernier grandit tellement qu'il finit par entourer le monde et se mordre la queue, d'où son autre nom, Midgardsorm (Miðgarðsormr), « serpent de Midgard ».

        Dans plusieurs mythes, Jörmungand apparaît comme le rival du dieu Thor qu’il rencontre notamment lors d'une fameuse partie de pêche, décrite dans six textes et reproduite picturalement sur quatre pierres runiques connues. À la fin du monde prophétique, le Ragnarök, Jörmungand provoquera des raz-de-marée en surgissant des mers pour combattre les dieux aux côtés des géants. Il sera finalement tué par Thor, mais le dieu succombera à son tour après neuf pas, empoisonné par le venin du serpent.");
        $jormungandr->setPicture("jormungandr.jpg");
        $jormungandr->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $jormungandr->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Nordique']));
        $manager->persist($jormungandr);

        $fenrir = new Monster();
        $fenrir->setName("Fenrir");
        $fenrir->setTitle("Le loup géant");
        $fenrir->setPlace("Asgard");
        $fenrir->setHistory("Dans la mythologie nordique, Fenrir (« habitant des marais ») ou Fenrisúlfr (« loup de Fenrir ») ou Fenris est un loup gigantesque, fils du dieu Loki1 et de la géante Angrboda2, messagère du malheur. Il a pour frère Jörmungandr, le serpent de Midgard, et pour sœur Hel, qui règne sur le monde des morts3. Considéré trop puissant et dangereux par les dieux, Fenrir est enchaîné par ruse et se libérera pour la bataille prophétique du Ragnarök durant laquelle il avalera Odin puis sera abattu violemment par Vidar, un des fils du dieu");
        $fenrir->setPicture("fenrir.jpg");
        $fenrir->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $fenrir->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Nordique']));
        $manager->persist($fenrir);

        $sleipnir = new Monster();
        $sleipnir->setName("Sleipnir");
        $sleipnir->setTitle("Le cheval aux huit pattes");
        $sleipnir->setPlace("Asgard");
        $sleipnir->setHistory("Sleipnir est, dans la mythologie nordique, un cheval fabuleux à huit jambes capable de se déplacer au-dessus de la mer comme dans les airs, monture habituelle du dieu Odin. Il est mentionné dans l’Edda poétique, série de textes compilés au xiiie siècle à partir de sources plus anciennes, et dans l’Edda en prose, rédigée par Snorri Sturluson. Selon ces deux sources, Sleipnir est le fils du dieu Loki et d'un puissant étalon, Svaðilfari. Décrit comme le plus rapide et « le meilleur de tous les chevaux », il devient la monture d'Odin qui le chevauche jusque dans la région de Hel ; toutefois, le dieu s'en sert surtout pour traverser le pont Bifröst afin de se rendre à la troisième racine d'Yggdrasil, où se tient le conseil des dieux. L'Edda en prose donne de nombreux détails sur les circonstances de la naissance de Sleipnir, précisant entre autres sa couleur grise.");
        $sleipnir->setPicture("sleipnir.jpg");
        $sleipnir->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $sleipnir->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Nordique']));
        $manager->persist($sleipnir);

        $corbeaux = new Monster();
        $corbeaux->setName("Huginn & Muninn");
        $corbeaux->setTitle("Les corbeaux qui voient tout");
        $corbeaux->setPlace("Asgard");
        $corbeaux->setHistory("Huginn, du vieux Norrois pour 'pensée', et Muninn, du vieux Norrois pour 'esprit', sont deux corbeaux qui volent autour de Midgard et apportent des nouvelles des affaires des hommes à Odin. Grâce à leurs voyages quotidiens, Odin pouvait garder un œil sur ses hommes et devenir sage.

        Certains ont lié les deux corbeaux à une métaphore d'Odin qui chassait ses pensées et son esprit dans une pratique de transe, et il était connu pour craindre qu'un jour ils ne reviennent pas.");
        $corbeaux->setPicture("corbeaux.jpg");
        $corbeaux->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $corbeaux->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Nordique']));
        $manager->persist($corbeaux);

        $ratatoskr = new Monster();
        $ratatoskr->setName("Ratatoskr");
        $ratatoskr->setTitle("L'écureuil messager");
        $ratatoskr->setPlace("Yggdrasil");
        $ratatoskr->setHistory("Ratatatoskr, dent de forage ou dent de forage, est un écureuil qui court de haut en bas d'Yggdrasil, l'arbre du monde, transportant des messages entre l'aigle Veðrfölnir, qui se perche sur Yggdrasil, et le serpent Níðhöggr, vivant sous une des trois racines de l'arbre.
        La plupart des théories pensent qu'il s'agit d'attiser les hostilités entre les deux, en répandant des calomnies et des ragots. À leur tour, les deux attaquent l'arbre, menant à un cycle de décomposition et de renaissance qui rafraîchit l'arbre");
        $ratatoskr->setPicture("ratatoskr.jpg");
        $ratatoskr->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $ratatoskr->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Nordique']));
        $manager->persist($ratatoskr);

        $kraken = new Monster();
        $kraken->setName("Le Kraken");
        $kraken->setTitle("La terreur des marins");
        $kraken->setPlace("La mer");
        $kraken->setHistory("Généralement dépeint comme un calmar géant ou une pieuvre - mais parfois plus comme un crabe - le Kraken est la grande bête de la mer du folklore. On dit qu'il mesure plus d'un mille, son corps est si énorme que lorsqu'en surface, on peut le confondre avec une île.

        Etendu à l'affût dans les eaux profondes, le Kraken se lève lorsqu'il est dérangé par les bateaux qui le surplombent. Quand les marins voient sa taille énorme, ils la prennent pour la côte, croyant qu'elle est le rivage, pour ensuite être attirée vers le bas jusqu'à leur perte.
        
        Le Kraken peut s'inspirer de l'existence du calmar géant qui, à 18m de long, est un véritable monstre des eaux. Heureusement, cependant, les humains voient rarement la réalité, préférant de loin les profondeurs sombres et profondes de la mer.
        
        Comme vous pouvez le constater, la mythologie nordique abrite un grand nombre de créatures, certaines plus redoutables que d'autres. Je suis sûr que vous conviendrez, cependant, qu'il n'y en a pas beaucoup que vous voudriez rencontrer par une nuit sombre !");
        $kraken->setPicture("kraken.jpg");
        $kraken->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $kraken->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Nordique']));
        $manager->persist($kraken);

        // $acephale = new Monster();
        // $acephale->setName("acephale");
        // $acephale->setTitle("");
        // $acephale->setPlace("");
        // $acephale->setHistory("");
        // $acephale->setPicture("acephale.jpg");
        // $acephale->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        // $acephale->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Nordique']));
        // $manager->persist($acephale);

        $manager->flush();
    }
}


