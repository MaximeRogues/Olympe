<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

use App\Entity\Gender;

class GenderFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $male = new Gender();
        $male->setName('Masculin');
        $manager->persist($male);

        $female = new Gender();
        $female->setName('Féminin');
        $manager->persist($female);

        $else = new Gender();
        $else->setName('Non défini');
        $manager->persist($else);

        $manager->flush();
    }
}
