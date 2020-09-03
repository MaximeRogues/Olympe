<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\GenderRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;


/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=GenderRepository::class)
 */
class Gender
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups("getGodWithGender")
     * @Groups("getHeroWithGender")
     * @Groups("getMonsterWithGender")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("getGodWithGender")
     * @Groups("getHeroWithGender")
     * @Groups("getMonsterWithGender")
     */
    private $name;

    /**
     * @ORM\OneToMany(targetEntity=God::class, mappedBy="gender")
     */
    private $gods;

    /**
     * @ORM\OneToMany(targetEntity=Hero::class, mappedBy="gender")
     */
    private $heroes;

    /**
     * @ORM\OneToMany(targetEntity=Monster::class, mappedBy="gender")
     */
    private $monsters;

    public function __construct()
    {
        $this->gods = new ArrayCollection();
        $this->heroes = new ArrayCollection();
        $this->monsters = new ArrayCollection();
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

    /**
     * @return Collection|God[]
     */
    public function getGods(): Collection
    {
        return $this->gods;
    }

    public function addGod(God $god): self
    {
        if (!$this->gods->contains($god)) {
            $this->gods[] = $god;
            $god->setGender($this);
        }

        return $this;
    }

    public function removeGod(God $god): self
    {
        if ($this->gods->contains($god)) {
            $this->gods->removeElement($god);
            // set the owning side to null (unless already changed)
            if ($god->getGender() === $this) {
                $god->setGender(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Hero[]
     */
    public function getHeroes(): Collection
    {
        return $this->heroes;
    }

    public function addHero(Hero $hero): self
    {
        if (!$this->heroes->contains($hero)) {
            $this->heroes[] = $hero;
            $hero->setGender($this);
        }

        return $this;
    }

    public function removeHero(Hero $hero): self
    {
        if ($this->heroes->contains($hero)) {
            $this->heroes->removeElement($hero);
            // set the owning side to null (unless already changed)
            if ($hero->getGender() === $this) {
                $hero->setGender(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Monster[]
     */
    public function getMonsters(): Collection
    {
        return $this->monsters;
    }

    public function addMonster(Monster $monster): self
    {
        if (!$this->monsters->contains($monster)) {
            $this->monsters[] = $monster;
            $monster->setGender($this);
        }

        return $this;
    }

    public function removeMonster(Monster $monster): self
    {
        if ($this->monsters->contains($monster)) {
            $this->monsters->removeElement($monster);
            // set the owning side to null (unless already changed)
            if ($monster->getGender() === $this) {
                $monster->setGender(null);
            }
        }

        return $this;
    }
}
