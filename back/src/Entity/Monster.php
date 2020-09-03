<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\MonsterRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;


/**
 * @ApiResource(normalizationContext={"groups"={"getMonsterWithPantheon", "getMonsterWithGender"}},) 
 * @ORM\Entity(repositoryClass=MonsterRepository::class)
 */
class Monster
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups("getMonsterWithPantheon")
     * @Groups("getMonsterWithGender")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("getMonsterWithPantheon")
     * @Groups("getMonsterWithGender")
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("getMonsterWithPantheon")
     * @Groups("getMonsterWithGender")
     */
    private $title;

    /**
     * @ORM\ManyToOne(targetEntity=Pantheon::class, inversedBy="monsters")
     * @ORM\JoinColumn(nullable=false)
     * @Groups("getMonsterWithPantheon")
     */
    private $pantheon;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("getMonsterWithPantheon")
     * @Groups("getMonsterWithGender")
     */
    private $place;

    /**
     * @ORM\Column(type="string", length=500)
     * @Groups("getMonsterWithPantheon")
     * @Groups("getMonsterWithGender")
     */
    private $history;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("getMonsterWithPantheon")
     * @Groups("getMonsterWithGender")
     */
    private $picture;

    /**
     * @ORM\ManyToOne(targetEntity=Gender::class, inversedBy="monsters")
     * @ORM\JoinColumn(nullable=false)
     * @Groups("getMonsterWithGender")
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

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

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

    public function getPlace(): ?string
    {
        return $this->place;
    }

    public function setPlace(string $place): self
    {
        $this->place = $place;

        return $this;
    }

    public function getHistory(): ?string
    {
        return $this->history;
    }

    public function setHistory(string $history): self
    {
        $this->history = $history;

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
