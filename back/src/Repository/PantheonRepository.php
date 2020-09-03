<?php

namespace App\Repository;

use App\Entity\Pantheon;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Pantheon|null find($id, $lockMode = null, $lockVersion = null)
 * @method Pantheon|null findOneBy(array $criteria, array $orderBy = null)
 * @method Pantheon[]    findAll()
 * @method Pantheon[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PantheonRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Pantheon::class);
    }

    // /**
    //  * @return Pantheon[] Returns an array of Pantheon objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Pantheon
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
