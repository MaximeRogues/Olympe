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
        // Grec

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

        // Egyptien

        $ammout = new God();
        $ammout->setName('Ammout');
        $ammout->setTitle("La dévoreuse des morts");
        $ammout->setDomain("Salle du jugement des deux vérités");
        $ammout->setAttributes("Une tête de crocodile, un corps d'hippopotame et des pattes avant de lion");
        $ammout->setHistory("Ammout est la déesse qui, lors de la pesée du cœur, dévore les âmes des humains jugés indignes de continuer à vivre dans l'au-delà.

        On la trouve attendant aux côtés de Thot et d'Osiris, dans la salle du jugement des deux vérités, le verdict de la cérémonie de la pesée du cœur, où le cœur du défunt est déposé dans une balance dont le contre-poids est la plume de la vérité (symbole de Maât). 
        Si le cœur du défunt est plus lourd que la plume de Maât, c'est qu'il est chargé de trop de péchés, et Âmmout est chargée de dévorer son cœur, empêchant ainsi l'âme du coupable de retrouver son corps pour ressusciter dans le monde des morts");
        $ammout->setPicture("ammout.png");
        $ammout->setGender($this->genderRepository->findOneBy(['name' => 'Féminin']));
        $ammout->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Égyptien']));
        $manager->persist($ammout);

        $amon = new God();
        $amon->setName('Amon');
        $amon->setTitle("Aux multiples noms");
        $amon->setDomain("Dieu de Thèbes");
        $amon->setAttributes("L'oie, le serpent (en les quels il peut se changer), le pschent surmonté de deux plumes");
        $amon->setHistory("Sous la forme d'une oie, l’un de ses animaux symboliques, il pondit l'œuf primordial d'où sortit la vie. Sous la forme d'un serpent, il fertilisa l'œuf cosmique façonné dans les Eaux primordiales.
        Les textes des pyramides le mentionnent parmi les divinités protectrices du roi défunt et, au Moyen Empire, il prend une place prépondérante dans la région de Thèbes ");
        $amon->setPicture("amon.jpg");
        $amon->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $amon->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Égyptien']));
        $manager->persist($amon);

        $anubis = new God();
        $anubis->setName('Anubis');
        $anubis->setTitle("Le dieu funéraire");
        $anubis->setDomain("Les rites funéraires, les nécropoles, il est le protecteur des embaumeurs");
        $anubis->setAttributes("Tête de chacal et corps d'homme");
        $anubis->setHistory("Anubis  est un dieu funéraire de l'Égypte antique, maître des nécropoles et protecteur des embaumeurs, représenté comme un grand canidé noir couché sur le ventre, sans doute un chacal ou un chien sauvage, ou comme un homme à tête de canidé");
        $anubis->setPicture("anubis.jpg");
        $anubis->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $anubis->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Égyptien']));
        $manager->persist($anubis);

        $apis = new God();
        $apis->setName('Apis');
        $apis->setTitle("Le taureau sacré");
        $apis->setDomain("La fertilité, puissance sexuelle et force physique");
        $apis->setAttributes("Un taureau noir coiffé d'un disque solaire");
        $apis->setHistory("Apis est le nom grec d'un taureau sacré de la mythologie égyptienne vénéré dès l'époque préhistorique. Les premières traces de son culte sont représentées sur des gravures rupestres, il est ensuite mentionné dans les textes des pyramides de l'Ancien Empire et son culte perdura jusqu'à l'époque romaine. On pouvait aussi le trouver avec un uraeus et certaines particularités comme un croissant sur le front ou un vautour sur le dos. 
        Apis n'était jamais représenté avec un corps humain");
        $apis->setPicture("apis.jpg");
        $apis->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $apis->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Égyptien']));
        $manager->persist($apis);

        $apophis = new God();
        $apophis->setName('Apophis');
        $apophis->setTitle("Le serpent du Chaos");
        $apophis->setDomain("Le chaos, la fin du monde");
        $apophis->setAttributes("Un énorme serpent souvent représenté battu ou tué");
        $apophis->setHistory("Apophis est un dieu de la mythologie égyptienne des forces mauvaises et de la nuit, personnification du chaos, du mal, de l'obscurité, cherchant à anéantir la création divine. 
        Son nom Aapep ou Aapef (en égyptien ancien) signifiait « géant » ou « serpent géant ». Apophis est représenté comme un grand serpent, le plus souvent avec une taille gigantesque surnaturelle. 
        Dans la plupart des représentations il est soumis, battu ou tué, pour représenter le triomphe du bien. Une des représentations les plus courantes est celle que l'on peut trouver dans le Livre des Morts");
        $apophis->setPicture("apophis.jfif");
        $apophis->setGender($this->genderRepository->findOneBy(['name' => 'Non défini']));
        $apophis->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Égyptien']));
        $manager->persist($apophis);

        $ra = new God();
        $ra->setName('Râ');
        $ra->setTitle("Le dieu solaire");
        $ra->setDomain("Le soleil, créateur de l'univers");
        $ra->setAttributes("Tête de faucon et corps d'homme, le disque solaire sur la tête");
        $ra->setHistory("Rê (ou Râ) est un dieu solaire dans la mythologie égyptienne, créateur de l'univers. 
        Il peut apparaître sous plusieurs autres formes, celle de Khépri, le scarabée bousier : symbolisant la naissance ou la renaissance ou encore Atoum, l'être achevé (le clergé égyptien expliquait que l'astre solaire pouvait revêtir des formes différentes lors de sa course dans le ciel : Khépri était le soleil levant tandis que Rê était le soleil à son zénith et Atoum, le soleil couchant). Au fil du temps, Atoum (le soleil couchant), est assimilé progressivement par les théologiens égyptiens à la forme de Rê (le soleil à son zénith), de sorte que l'on parle de Rê-Atoum, le dieu créateur, qui préside la Grande Ennéade constituée des neuf dieux principaux. 
        Par la suite, Rê a également été associé à plusieurs autres dieux comme Amon pour devenir Amon-Rê");
        $ra->setPicture("ra.jpg");
        $ra->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $ra->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Égyptien']));
        $manager->persist($ra);

        $bastet = new God();
        $bastet->setName('Bastet');
        $bastet->setTitle("La déesse féline");
        $bastet->setDomain("La chaleur du foyer et du soleil, la maternité");
        $bastet->setAttributes("Tête de chat et corps de femme");
        $bastet->setHistory("Bastet (de l'égyptien Bast) est la déesse égyptienne de la joie du foyer, de la chaleur du soleil, de la maternité , et aussi la déesse protectrice des femmes enceintes et des enfants. Déesse aux traits félins dont le centre religieux se trouvait dans la ville de Bubastis (Égypte)");
        $bastet->setPicture("bastet.png");
        $bastet->setGender($this->genderRepository->findOneBy(['name' => 'Féminin']));
        $bastet->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Égyptien']));
        $manager->persist($bastet);

        $geb = new God();
        $geb->setName('Geb');
        $geb->setTitle("Le dieu de la terre");
        $geb->setDomain("Dieu de la terre et de la royauté");
        $geb->setAttributes("Homme à la peau verte ou noire, entouré de minéraux et de plantes");
        $geb->setHistory("Geb est le dieu de la Terre dans la mythologie égyptienne qui fait partie de la grande Ennéade d'Héliopolis. Il est le fils de Shou (dieu de l'air) et de Tefnout (déesse de l'eau), mais aussi le frère et l'époux de Nout (la déesse du ciel).
        Geb et Nout furent si proches que rien ne pouvait s'interposer entre eux. Geb fut séparé de Nout par leur père Shou, mais grâce à un stratagème de Nout ils réussirent à s'unir et enfantèrent Osiris, Seth, Isis et Nephtys. Une symbolique veut que Geb et Nout s'unissaient dans le secret de la nuit pour être séparés par Shou au matin");
        $geb->setPicture("geb.png");
        $geb->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $geb->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Égyptien']));
        $manager->persist($geb);

        $horus = new God();
        $horus->setName('Horus');
        $horus->setTitle("Le protecteur");
        $horus->setDomain("Dieu des dynasties");
        $horus->setAttributes("Tête de faucon, avec l'oeil oudjat");
        $horus->setHistory("Horus (de l'égyptien Hor / Horou) est l'une des plus anciennes divinités égyptiennes. 
        Les représentations les plus communes le dépeignent comme un faucon couronné du pschent ou comme un homme hiéracocéphale. Son nom signifie « le Lointain » en référence au vol majestueux du rapace. Son culte remonte à la préhistoire égyptienne. La plus ancienne cité à s'être placée sous son patronage semble être Nekhen, la « Ville du Faucon » (Hiérakonpolis). Dès les origines, Horus se trouve étroitement associé à la monarchie pharaonique en tant que dieu protecteur et dynastique. 
        Les Suivants d’Horus sont ainsi les premiers souverains à s'être placés sous son obédience. Aux débuts de l’époque historique, le faucon sacré figure sur la palette du roi Narmer et, dès lors, sera constamment associé au pouvoir royal");
        $horus->setPicture("horus.png");
        $horus->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $horus->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Égyptien']));
        $manager->persist($horus);

        $isis = new God();
        $isis->setName('Isis');
        $isis->setTitle("La grande magicienne");
        $isis->setDomain("Les rites funéraires, la guérison des malades");
        $isis->setAttributes("Le trône, le disque solaire entre deux cornes de vache");
        $isis->setHistory("L'astucieuse Isis est l'une des divinités de l'Ennéade d'Héliopolis. Elle est la sœur et l'épouse du roi Osiris, un être généreux qui plaça son règne sous le signe de l'harmonie cosmique. 
        Ce temps heureux prend subitement fin avec l'assassinat d'Osiris lors d'un complot organisé par son frère Seth, un dieu violent et jaloux. Isis retrouve le corps d'Osiris et le cache dans les marécages de Chemnis. Lors d'une partie de chasse, Seth trouve le cadavre et, fou de colère, le dépèce en plusieurs lambeaux. Durant une longue quête, Isis, secondée par Nephtys, Thot et Anubis, retrouve les membres disjoints et reconstitue le corps d'Osiris en le momifiant. 
        Après avoir revivifié Osiris, Isis fait de lui le souverain éternel de la Douât, un monde paradisiaque peuplé d'esprits immortels. Pour assurer sa protection, elle le place sous la garde attentive du dieu canin Anubis, son fils adoptif");
        $isis->setPicture("isis.png");
        $isis->setGender($this->genderRepository->findOneBy(['name' => 'Féminin']));
        $isis->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Égyptien']));
        $manager->persist($isis);

        $khepri = new God();
        $khepri->setName('Khépri');
        $khepri->setTitle("Le soleil levant");
        $khepri->setDomain("La renaissance, le soleil levant");
        $khepri->setAttributes("Représenté avec une tête de scarabée, ou comme un scarabée poussant le soleil devant lui");
        $khepri->setHistory("Khépri (Le soleil en devenir) est une entité de la mythologie égyptienne associée au soleil et symbole de la renaissance.
        Il est représenté par un homme à tête de scarabée ou comme un scarabée poussant devant lui le disque solaire. Il renaît chaque matin avant de devenir Rê, le soleil à son zénith, puis Atoum, le soleil couchant.
        Khépri, dont le nom signifie celui qui vient à l'existence, était adoré à Héliopolis. Aux côtés de Rê et d'Atoum, il forme la triade d'Héliopolis
        ");
        $khepri->setPicture("khepri.png");
        $khepri->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $khepri->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Égyptien']));
        $manager->persist($khepri);

        $neith = new God();
        $neith->setName('Neith');
        $neith->setTitle("La déesse chasseuse");
        $neith->setDomain("La guerre et la chasse");
        $neith->setAttributes("L'arc et les flèches");
        $neith->setHistory("Dans un tout autre registre, elle est également une déesse primordiale et créatrice asexuée ou androgyne faisant ainsi partie du cercle très restreint des démiurges du panthéon égyptien. Dans ce rôle, elle est fécondée par le Verbe et engendre le Soleil. Elle tisse le monde et en fixe les limites avec sept tissus, puis elle crée les sept paroles justes qui la font maîtresse de l'univers. Elle est mère de Sobek qui engendre Rê au matin et le dévore au soir. Pour faire un parallèle a la mythologie grec elle est l'équivalent d’Athéna");
        $neith->setPicture("neith.png");
        $neith->setGender($this->genderRepository->findOneBy(['name' => 'Féminin']));
        $neith->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Égyptien']));
        $manager->persist($neith);

        $osiris = new God();
        $osiris->setName('Osiris');
        $osiris->setTitle("Le juge des âmes");
        $osiris->setDomain("Le jugement des âmes, la religion");
        $osiris->setAttributes("Représenté comme un homme momifié avec un sceptre et une couronne");
        $osiris->setHistory("Osiris (du grec ancien Ὄσιρις) est un dieu du panthéon égyptien et un roi mythique de l'Égypte antique. Inventeur de l'agriculture et de la religion, son règne est bienfaisant et civilisateur. Il meurt noyé dans le Nil, assassiné dans un complot organisé par Seth, son frère cadet. Malgré le démembrement de son corps, il retrouve la vie par la puissance magique de ses sœurs Isis et Nephtys. Le martyre d'Osiris lui vaut de gagner le monde de l'au-delà dont il devient le souverain et le juge suprême des lois de Maât");
        $osiris->setPicture("osiris.png");
        $osiris->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $osiris->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Égyptien']));
        $manager->persist($osiris);

        $seth = new God();
        $seth->setName('Seth');
        $seth->setTitle("Le dieu du désordre");
        $seth->setDomain("Le tonnerre, la foudre, la confusion");
        $seth->setAttributes("Tête d'animal au museau effilé et oreilles dressées");
        $seth->setHistory("Maître du tonnerre et de la foudre, il exerce sa puissance sur les marges de l'Égypte que sont les contrées désertiques, les zones arides et les pays étrangers à la plaine du Nil. Seth est un dieu complexe. 
        Sa nature brutale se manifeste plus particulièrement dans un comportement sexuel agressif, tant homosexuel avec Horus qu'hétérosexuel avec de belles déesses qu'il poursuit de ses assiduités. Sa puissance désordonnée contribue néanmoins à l'équilibre cosmique. Selon la vision égyptienne, les forces destructrices sont en lutte perpétuelle contre les forces positives. En cela, Seth s'oppose à son frère Osiris, symbole de la terre fertile et nourricière. Dès les Textes des pyramides, Seth est l'éternel rival d'Horus. 
        Au cours d'une lutte, il arrache l'œil de son adversaire qui en retour le blesse aux testicules. L'antagonisme des deux dieux illustre la double nature de Pharaon qui unit en sa personne ces deux forces contraires mais complémentaires. Si Horus est le dieu de l'ordre pharaonique, la puissance irraisonnée de Seth participe à la symbolique royale en tant qu'image de la force violente et déchaînée que le roi déploie contre ses ennemis. Protecteur de Rê, Seth combat le serpent Apophis et participe donc à la bonne marche du monde. Bien qu'inquiétant et lié à des forces aveuglément destructrices, Seth est cependant plus un dérangeant fripon qu'un démon maléfique, du moins dans les mythes anciens");
        $seth->setPicture("seth.png");
        $seth->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $seth->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Égyptien']));
        $manager->persist($seth);

        $sobek = new God();
        $sobek->setName('Sobek');
        $sobek->setTitle("Le maître des marais");
        $sobek->setDomain("L'eau, la fertilité");
        $sobek->setAttributes("Tête de crocodile, ");
        $sobek->setHistory("La présence de crocodiles dans le Nil était pour les Égyptiens l’annonce d'une crue favorable aux récoltes : les crocodiles étaient donc des animaux sacrés à cette époque. Maître des eaux, il est le dieu qui irrigue les champs. Vers la Basse époque, les Égyptiens cherchent à gagner ses faveurs afin d’en avoir moins peur en lui offrant des figurines représentant l’animal portant le disque solaire orné du cobra protecteur. Il deviendra rapidement un dieu important dans le panthéon sous la forme syncrétique de Sobek-Rê.
        Il est parfois représenté sur la barque solaire en train de terrasser le serpent géant Apophis, personnification du chaos, monstre essayant d'engloutir le Soleil. Ce rôle de protecteur de la barque solaire est aussi attribué à la déesse Sekhmet ou bien encore au dieu Seth. Il est localement considéré comme un dieu primordial.");
        $sobek->setPicture("sobek.jpg");
        $sobek->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $sobek->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Égyptien']));
        $manager->persist($sobek);

        $thot = new God();
        $thot->setName('Thot');
        $thot->setTitle("Le dieu lunaire");
        $thot->setDomain("La lune, le savoir, les écrits");
        $thot->setAttributes("Représenté sous forme d'ibis ou de babouin");
        $thot->setHistory("Représenté comme un ibis au plumage blanc et noir ou comme un babouin hamadryas, Thot capte la lumière de la Lune, dont il régit les cycles, à tel point qu'il fut surnommé « le seigneur du temps ».");
        $thot->setPicture("thot.png");
        $thot->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $thot->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Égyptien']));
        $manager->persist($thot);

        // Nordique 

        $baldr = new God();
        $baldr->setName('Baldr');
        $baldr->setTitle("Dieu de la lumière");
        $baldr->setDomain("La lumière, la beauté, la jeunesse, l'amour");
        $baldr->setAttributes("Représenté comme un homme rayonnant, souvent avec une lance");
        $baldr->setHistory("Il est le fils d'Odin et de Frigg. Son épouse est Nanna, et leur fils Forseti. Son domaine est Breidablik, qui est dans les cieux (ou en Suède, selon la Ynglinga Saga), dans une contrée d'où le mal est banni. 
        Par jalousie, le dieu Loki cause sa mort. Baldr est alors envoyé dans le monde des morts et Loki est puni pour ses méfaits, car il empêche Baldr de revenir de Hel, précipitant l'arrivée de la bataille prophétique du Ragnarök où la majorité des dieux périront. Néanmoins Baldr en sera épargné et avec quelques autres survivants il prendra part au renouveau.");
        $baldr->setPicture("baldr.jpg");
        $baldr->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $baldr->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Nordique']));
        $manager->persist($baldr);

        $frigg = new God();
        $frigg->setName('Frigg');
        $frigg->setTitle("La reine des ases");
        $frigg->setDomain("L'amour, le mariage et la fraternité");
        $frigg->setAttributes("Souvent représentée avec un rouet");
        $frigg->setHistory("Dans la mythologie nordique, Frigg était l’épouse d’Odin et par conséquent la reine des Ases. Mère de Baldr et Höd, elle était la seule femme autorisée à s’asseoir sur Hlidskjalf (« tour de guet ») d’où elle conseillait son mari sur les questions importantes. Dans sa demeure à Ásgard, nommée Fensalir (« salle des marécages »), elle occupait ses journées à filer les nuages. D’ailleurs, elle est souvent représentée avec un rouet. Elle était la patronne des sibylles, des devineresses et des fées");
        $frigg->setPicture("frigg.jpg");
        $frigg->setGender($this->genderRepository->findOneBy(['name' => 'Féminin']));
        $frigg->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Nordique']));
        $manager->persist($frigg);

        $odin = new God();
        $odin->setName('Odin');
        $odin->setTitle("Le père de toutes choses");
        $odin->setDomain("Dieu du savoir, roi des ases");
        $odin->setAttributes("La lance Gungnir, l'anneau Draupnir");
        $odin->setHistory("Son rôle, comme pour la plupart des dieux nordiques, est complexe, étant donné que ses fonctions sont multiples : il est le dieu des morts, de la victoire, et du savoir. 
        Dans une moindre mesure, il est également considéré comme le patron de la magie, de la poésie, des prophéties, de la guerre et de la chasse. Il est considéré comme étant le principal membre des Ases. 
        Odin partage la fête de Yule, qui est célébrée le 21 décembre.
        Le lieu de résidence d'Odin est le palais de Valaskjálf, situé en Ásgard, où se trouve également son trône, appelé Hlidskjalf, d'où il peut observer les neuf mondes de la cosmologie nordique. Il possède plusieurs objets fabuleux, sa lance Gungnir et son anneau Draupnir, et monte son cheval à huit jambes nommé Sleipnir. Son domaine n'est pas accessible aux mortels et est relié à la terre par un arc-en-ciel que seuls les dieux et quelques créatures les servant peuvent apercevoir");
        $odin->setPicture("odin.jpg");
        $odin->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $odin->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Nordique']));
        $manager->persist($odin);

        $heimdall = new God();
        $heimdall->setName('Heimdall');
        $heimdall->setTitle("Le gardien du Bifröst");
        $heimdall->setDomain("La lumière de la lune, le pont Bifröst");
        $heimdall->setAttributes("La corne Gjallarhorn");
        $heimdall->setHistory("Il est le gardien du pont Bifröst (l'arc-en-ciel qui sépare Ásgard des mondes inférieurs) et a pour charge de souffler dans Gjallarhorn lorsque viendra le Ragnarök. Pendant le Ragnarök, Heimdall est destiné à tuer Loki et à être tué par lui. Il est également le dieu de la lumière et de la lune.
        Heimdall est probablement originellement un dieu du feu et « un dieu de la colonne du monde, c'est-à-dire le dieu du centre du monde et de l'ordre sacré ». Il assume la fonction typique d'un « Feu gardien », veilleur des dieux, gardien du pont des Ases face aux géants");
        $heimdall->setPicture("heimdall.jpg");
        $heimdall->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $heimdall->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Nordique']));
        $manager->persist($heimdall);

        $thor = new God();
        $thor->setName('Thor');
        $thor->setTitle("Le dieu de la foudre");
        $thor->setDomain("Le tonnerre, la foudre, la guerre");
        $thor->setAttributes("Le marteu Mjöllnir");
        $thor->setHistory("Thor est le plus puissant des dieux guerriers. Symbolisant la force, la valeur, l'agilité et la victoire, il utilise la foudre et apaise ou excite les tempêtes2. Ses pouvoirs sont ainsi liés au ciel. 
        Il possède un char tiré par deux boucs qui lui permet de traverser les mondes. Son attribut le plus célèbre est son marteau Mjöllnir, avec lequel il crée la foudre, et qui lui permet surtout d'être le protecteur des dieux et des hommes face aux forces du chaos, comme les géants, qu'il abat régulièrement et dont il est le pire ennemi. En tant que dieu de l'orage, il apporte la pluie, ce qui fait également de lui une divinité liée à la fertilité. 
        Il est le fils d'Odin et de Jörd, et a pour épouse la déesse aux cheveux d'or Sif.");
        $thor->setPicture("thor.png");
        $thor->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $thor->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Nordique']));
        $manager->persist($thor);

        $Loki = new God();
        $Loki->setName('Loki');
        $Loki->setTitle("Le dieu de la malice");
        $Loki->setDomain("La discorde, les illusions");
        $Loki->setAttributes("Le feu et le vent");
        $Loki->setHistory("Loki, aussi appelé Loptr ou Hveðrungr (et Loge dans la tétralogie de Wagner), est le dieu de la malice, de la discorde et des illusions dans la mythologie nordique. Il est le fils du géant Farbauti et de Laufey. Loki est le père de plusieurs monstres : le serpent Jörmungand, le loup Fenrir et la déesse du monde des morts Hel. Il est également la mère du cheval d'Odin à huit jambes Sleipnir. Malgré ses origines, il est accueilli dans le panthéon divin des Ases par Odin.
        Loki est capable de métamorphose ; il est aussi impulsif et irresponsable que malin et rusé. Les Ases ont souvent recours à lui pour régler des problèmes dont il est bien souvent lui-même la cause. De nature fondamentalement négative et traître, sa jalousie l'amène à causer la mort du dieu Baldr. Furieux, les Ases le punissent en l'attachant avec les entrailles d'un de ses fils sous un serpent dont le venin goutte sur son visage. 
        Il en sera ainsi jusqu'à la fin prophétique du monde, le Ragnarök, où Loki se libèrera et mènera les géants à l'assaut contre les dieux et les hommes. Loki et son dieu opposé, Heimdall, s'entretueront pendant la bataille.");
        $Loki->setPicture("Loki.png");
        $Loki->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        $Loki->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Nordique']));
        $manager->persist($Loki);

        // $zeus = new God();
        // $zeus->setName('Zeus');
        // $zeus->setTitle("");
        // $zeus->setDomain("");
        // $zeus->setAttributes("");
        // $zeus->setHistory("");
        // $zeus->setPicture("zeus.jpg");
        // $zeus->setGender($this->genderRepository->findOneBy(['name' => 'Masculin']));
        // $zeus->setPantheon($this->pantheonRepository->findOneBy(['name' => 'Nordique']));
        // $manager->persist($zeus);

        $manager->flush();
    }
}
