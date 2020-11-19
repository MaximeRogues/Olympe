<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

use App\Entity\Pantheon;

class PantheonFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $greek = new Pantheon();
        $greek->setName('Grec');
        $manager->persist($greek);

        $egyptian = new Pantheon();
        $egyptian->setName('Égyptien');
        $manager->persist($egyptian);

        $nordic = new Pantheon();
        $nordic->setName('Nordique');
        $manager->persist($nordic);

        $manager->flush();
    }
}
