<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\HeroRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;


/**
 * @ApiResource(normalizationContext={"groups"={"getHeroWithPantheon", "getHeroWithGender"}}, attributes={"order"={"name": "ASC"}})
 * @ORM\Entity(repositoryClass=HeroRepository::class)
 */
class Hero
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"getHeroWithPantheon", "getHeroWithGender"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"getHeroWithPantheon", "getHeroWithGender"})
     */
    private $name;

    /**
     * @ORM\ManyToOne(targetEntity=Pantheon::class, inversedBy="heroes")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"getHeroWithPantheon"})
     */
    private $pantheon;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"getHeroWithPantheon", "getHeroWithGender"})
     */
    private $origin;

    /**
     * @ORM\Column(type="string", length=2000)
     * @Groups({"getHeroWithPantheon", "getHeroWithGender"})
     */
    private $exploits;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"getHeroWithPantheon", "getHeroWithGender"})
     */
    private $picture;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"getHeroWithPantheon", "getHeroWithGender"})
     */
    private $title;

    /**
     * @ORM\ManyToOne(targetEntity=Gender::class, inversedBy="heroes")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"getHeroWithGender"})
     */
    private $gender;

    /**
     * @ORM\ManyToMany(targetEntity=User::class, mappedBy="favoriteHeroes")
     */
    private $users;

    public function __construct()
    {
        $this->users = new ArrayCollection();
    }

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

    /**
     * @return Collection|User[]
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): self
    {
        if (!$this->users->contains($user)) {
            $this->users[] = $user;
            $user->addFavoriteHero($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->users->contains($user)) {
            $this->users->removeElement($user);
            $user->removeFavoriteHero($this);
        }

        return $this;
    }

}
