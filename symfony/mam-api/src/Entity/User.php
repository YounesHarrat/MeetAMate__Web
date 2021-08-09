<?php

namespace App\Entity;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 */
#[ApiResource]
class User
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nom;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $prenom;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $age;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $mail;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $pseudo;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $avatar;

    /**
     * @ORM\OneToOne(targetEntity=AuthProfile::class, inversedBy="user", cascade={"persist", "remove"})
     */
    private $authProfile;

    /**
     * @ORM\OneToMany(targetEntity=Game::class, mappedBy="linked_to")
     */
    private $games;

    /**
     * @ORM\ManyToMany(targetEntity=Game::class, inversedBy="users")
     */
    private $followedGames;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $favorite;

    /**
     * @ORM\ManyToMany(targetEntity=User::class, inversedBy="friends")
     */
    private $friends;

    // /**
    //  * @ORM\ManyToMany(targetEntity=SocialNetworkData::class)
    //  */
    // private $socialNetworks;

    /**
     * @ORM\ManyToMany(targetEntity=SocialNetworkData::class)
     */
    private $communityList;

    public function __construct()
    {
        $this->games = new ArrayCollection();
        $this->followedGames = new ArrayCollection();
        $this->friends = new ArrayCollection();
        $this->socialNetworks = new ArrayCollection();
        $this->communityList = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(string $prenom): self
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getAge(): ?string
    {
        return $this->age;
    }

    public function setAge(string $age): self
    {
        $this->age = $age;

        return $this;
    }

    public function getMail(): ?string
    {
        return $this->mail;
    }

    public function setMail(string $mail): self
    {
        $this->mail = $mail;

        return $this;
    }

    public function getPseudo(): ?string
    {
        return $this->pseudo;
    }

    public function setPseudo(?string $pseudo): self
    {
        $this->pseudo = $pseudo;

        return $this;
    }

    public function getAvatar(): ?string
    {
        return $this->avatar;
    }

    public function setAvatar(?string $avatar): self
    {
        $this->avatar = $avatar;

        return $this;
    }

    public function getAuthProfile(): ?AuthProfile
    {
        return $this->authProfile;
    }

    public function setAuthProfile(?AuthProfile $authProfile): self
    {
        $this->authProfile = $authProfile;

        return $this;
    }

    /**
     * @return Collection|Game[]
     */
    public function getGames(): Collection
    {
        return $this->games;
    }

    public function addGame(Game $game): self
    {
        if (!$this->games->contains($game)) {
            $this->games[] = $game;
            $game->setLinkedTo($this);
        }

        return $this;
    }

    public function removeGame(Game $game): self
    {
        if ($this->games->removeElement($game)) {
            // set the owning side to null (unless already changed)
            if ($game->getLinkedTo() === $this) {
                $game->setLinkedTo(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Game[]
     */
    public function getFollowedGames(): Collection
    {
        return $this->followedGames;
    }

    public function addFollowedGame(Game $followedGame): self
    {
        if (!$this->followedGames->contains($followedGame)) {
            $this->followedGames[] = $followedGame;
        }

        return $this;
    }

    public function removeFollowedGame(Game $followedGame): self
    {
        $this->followedGames->removeElement($followedGame);

        return $this;
    }

    public function getFavorite(): ?string
    {
        return $this->favorite;
    }

    public function setFavorite(?string $favorite): self
    {
        $this->favorite = $favorite;

        return $this;
    }

    /**
     * @return Collection|self[]
     */
    public function getFriends(): Collection
    {
        return $this->friends;
    }

    public function addFriend(self $friend): self
    {
        if (!$this->friends->contains($friend)) {
            $this->friends[] = $friend;
        }

        return $this;
    }

    public function removeFriend(self $friend): self
    {
        $this->friends->removeElement($friend);

        return $this;
    }

    // /**
    //  * @return Collection|SocialNetworkData[]
    //  */
    // public function getSocialNetworks(): Collection
    // {
    //     return $this->socialNetworks;
    // }

    // public function addSocialNetwork(SocialNetworkData $socialNetwork): self
    // {
    //     if (!$this->socialNetworks->contains($socialNetwork)) {
    //         $this->socialNetworks[] = $socialNetwork;
    //     }

    //     return $this;
    // }

    // public function removeSocialNetwork(SocialNetworkData $socialNetwork): self
    // {
    //     $this->socialNetworks->removeElement($socialNetwork);

    //     return $this;
    // }

    /**
     * @return Collection|SocialNetworkData[]
     */
    public function getCommunityList(): Collection
    {
        return $this->communityList;
    }

    public function addCommunityList(SocialNetworkData $communityList): self
    {
        if (!$this->communityList->contains($communityList)) {
            $this->communityList[] = $communityList;
        }

        return $this;
    }

    public function removeCommunityList(SocialNetworkData $communityList): self
    {
        $this->communityList->removeElement($communityList);

        return $this;
    }
}
