<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

use App\Entity\CharacterType;

class CharacterTypeFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $god = new CharacterType();
        $god->setName('Dieux');
        $manager->persist($god);

        $hero = new CharacterType();
        $hero->setName('Héros');
        $manager->persist($hero);

        $monster = new CharacterType();
        $monster->setName('Monstres');
        $manager->persist($monster);

        $manager->flush();
    }
}
