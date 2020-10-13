<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;

use Lexik\Bundle\JWTAuthenticationBundle\Security\User\JWTUser;
use Lexik\Bundle\JWTAuthenticationBundle\Security\User\JWTUserInterface;

/** 
 * @ApiResource()
 * @ORM\Entity(repositoryClass=UserRepository::class)
 */
class User implements UserInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     */
    private $username;

    /**
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     */
    private $password;

    /**
     * @ORM\ManyToMany(targetEntity=God::class, inversedBy="users")
     */
    private $favoriteGods;

    /**
     * @ORM\ManyToMany(targetEntity=Hero::class, inversedBy="users")
     */
    private $favoriteHeroes;

    /**
     * @ORM\ManyToMany(targetEntity=Monster::class, inversedBy="users")
     */
    private $favoriteMonsters;

    public function __construct()
    {
        $this->favoriteGods = new ArrayCollection();
        $this->favoriteHeroes = new ArrayCollection();
        $this->favoriteMonsters = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    /**
     * @return Collection|God[]
     */
    public function getFavoriteGods(): Collection
    {
        return $this->favoriteGods;
    }

    public function addFavoriteGod(God $favoriteGod): self
    {
        if (!$this->favoriteGods->contains($favoriteGod)) {
            $this->favoriteGods[] = $favoriteGod;
        }

        return $this;
    }

    public function removeFavoriteGod(God $favoriteGod): self
    {
        if ($this->favoriteGods->contains($favoriteGod)) {
            $this->favoriteGods->removeElement($favoriteGod);
        }

        return $this;
    }

    /**
     * @return Collection|Hero[]
     */
    public function getFavoriteHeroes(): Collection
    {
        return $this->favoriteHeroes;
    }

    public function addFavoriteHero(Hero $favoriteHero): self
    {
        if (!$this->favoriteHeroes->contains($favoriteHero)) {
            $this->favoriteHeroes[] = $favoriteHero;
        }

        return $this;
    }

    public function removeFavoriteHero(Hero $favoriteHero): self
    {
        if ($this->favoriteHeroes->contains($favoriteHero)) {
            $this->favoriteHeroes->removeElement($favoriteHero);
        }

        return $this;
    }

    /**
     * @return Collection|Monster[]
     */
    public function getFavoriteMonsters(): Collection
    {
        return $this->favoriteMonsters;
    }

    public function addFavoriteMonster(Monster $favoriteMonster): self
    {
        if (!$this->favoriteMonsters->contains($favoriteMonster)) {
            $this->favoriteMonsters[] = $favoriteMonster;
        }

        return $this;
    }

    public function removeFavoriteMonster(Monster $favoriteMonster): self
    {
        if ($this->favoriteMonsters->contains($favoriteMonster)) {
            $this->favoriteMonsters->removeElement($favoriteMonster);
        }

        return $this;
    }
}
