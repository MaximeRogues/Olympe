<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\MonsterRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;


/**
 * @ApiResource(normalizationContext={"groups"={"getMonsterWithPantheon", "getMonsterWithGender"}}) 
 * @ORM\Entity(repositoryClass=MonsterRepository::class)
 */
class Monster
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"getMonsterWithPantheon", "getMonsterWithGender"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"getMonsterWithPantheon", "getMonsterWithGender"})
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"getMonsterWithPantheon", "getMonsterWithGender"})
     */
    private $title;

    /**
     * @ORM\ManyToOne(targetEntity=Pantheon::class, inversedBy="monsters")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"getMonsterWithPantheon"})
     */
    private $pantheon;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"getMonsterWithPantheon", "getMonsterWithGender"})
     */
    private $place;

    /**
     * @ORM\Column(type="string", length=500)
     * @Groups({"getMonsterWithPantheon", "getMonsterWithGender"})
     */
    private $history;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"getMonsterWithPantheon", "getMonsterWithGender"})
     */
    private $picture;

    /**
     * @ORM\ManyToOne(targetEntity=Gender::class, inversedBy="monsters")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"getMonsterWithGender"})
     */
    private $gender;

    /**
     * @ORM\ManyToMany(targetEntity=User::class, mappedBy="favoriteMonsters")
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
            $user->addFavoriteMonster($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->users->contains($user)) {
            $this->users->removeElement($user);
            $user->removeFavoriteMonster($this);
        }

        return $this;
    }

}
