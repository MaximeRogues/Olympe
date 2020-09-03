<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\GodRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;


/**
 * @ApiResource(normalizationContext={"groups"={"getGodWithPantheon", "getGodWithGender"}},) 
 * @ORM\Entity(repositoryClass=GodRepository::class)
 */
class God
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups("getGodWithPantheon")
     * @Groups("getGodWithGender")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("getGodWithPantheon")
     * @Groups("getGodWithGender")
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("getGodWithPantheon")
     * @Groups("getGodWithGender")
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("getGodWithPantheon")
     * @Groups("getGodWithGender")
     */
    private $domain;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("getGodWithPantheon")
     * @Groups("getGodWithGender")
     */
    private $picture;

    /**
     * @ORM\ManyToOne(targetEntity=Pantheon::class, inversedBy="gods")
     * @ORM\JoinColumn(nullable=false)
     * @Groups("getGodWithPantheon")
     */
    private $pantheon;

    /**
     * @ORM\ManyToOne(targetEntity=Gender::class, inversedBy="gods")
     * @ORM\JoinColumn(nullable=false)
     * @Groups("getGodWithGender")
     */
    private $gender;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("getGodWithPantheon")
     * @Groups("getGodWithGender")
     */
    private $attributes;

    /**
     * @ORM\Column(type="string", length=500)
     * @Groups("getGodWithPantheon")
     * @Groups("getGodWithGender")
     */
    private $history;

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

    public function getDomain(): ?string
    {
        return $this->domain;
    }

    public function setDomain(string $domain): self
    {
        $this->domain = $domain;

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

    public function getPantheon(): ?Pantheon
    {
        return $this->pantheon;
    }

    public function setPantheon(?Pantheon $pantheon): self
    {
        $this->pantheon = $pantheon;

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

    public function getAttributes(): ?string
    {
        return $this->attributes;
    }

    public function setAttributes(string $attributes): self
    {
        $this->attributes = $attributes;

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
}
