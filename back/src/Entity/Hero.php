<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\HeroRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;


/**
 * @ApiResource(normalizationContext={"groups"={"getHeroWithPantheon", "getHeroWithGender"}})
 * @ORM\Entity(repositoryClass=HeroRepository::class)
 */
class Hero
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups("getHeroWithPantheon")
     * @Groups("getHeroWithGender")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("getHeroWithPantheon")
     * @Groups("getHeroWithGender")
     */
    private $name;

    /**
     * @ORM\ManyToOne(targetEntity=Pantheon::class, inversedBy="heroes")
     * @ORM\JoinColumn(nullable=false)
     * @Groups("getHeroWithPantheon")
     */
    private $pantheon;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("getHeroWithPantheon")
     * @Groups("getHeroWithGender")
     */
    private $origin;

    /**
     * @ORM\Column(type="string", length=500)
     * @Groups("getHeroWithPantheon")
     * @Groups("getHeroWithGender")
     */
    private $exploits;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("getHeroWithPantheon")
     * @Groups("getHeroWithGender")
     */
    private $picture;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("getHeroWithPantheon")
     * @Groups("getHeroWithGender")
     */
    private $title;

    /**
     * @ORM\ManyToOne(targetEntity=Gender::class, inversedBy="heroes")
     * @ORM\JoinColumn(nullable=false)
     * @Groups("getHeroWithGender")
     */
    private $gender;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getPantheon(): ?Pantheon
    {
        return $this->pantheon;
    }

    public function setPantheon(?Pantheon $pantheon): self
    {
        $this->pantheon = $pantheon;

        return $this;
    }

    public function getOrigin(): ?string
    {
        return $this->origin;
    }

    public function setOrigin(string $origin): self
    {
        $this->origin = $origin;

        return $this;
    }

    public function getExploits(): ?string
    {
        return $this->exploits;
    }

    public function setExploits(string $exploits): self
    {
        $this->exploits = $exploits;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getGender(): ?Gender
    {
        return $this->gender;
    }

    public function setGender(?Gender $gender): self
    {
        $this->gender = $gender;

        return $this;
    }

}
