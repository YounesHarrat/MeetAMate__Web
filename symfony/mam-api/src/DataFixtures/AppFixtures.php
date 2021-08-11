<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Game;
use App\Entity\User;
use App\Entity\AuthProfile;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        // $product = new Product();
        // $manager->persist($product);

        $game1 = new Game();
        $game1->setNom("GTA5");
        $game1->setPicture("https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg");
        $game1->setPlateforme("PC");
        $game1->setDescription("La description");
        $manager->persist($game1);

        $game2 = new Game();
        $game2->setNom("The Witcher 3 ");
        $game2->setPicture("https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg");
        $game2->setPlateforme("PC");
        $game2->setDescription("La description");
        $manager->persist($game2);

        $game3 = new Game();
        $game3->setNom("Portal 2");
        $game3->setPicture("https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg");
        $game3->setPlateforme("PC");
        $game3->setDescription("La description");
        $manager->persist($game3);

        $auth1 = new AuthProfile();
        $auth1->setNickname("melenchon.guillaume");
        $auth1->setName("Guillaume .M");
        $auth1->setPicture("http://www.nretnil.com/avatar/cry-1.jpg");
        $auth1->setEmail("Guillaume@gmail.com");
        $auth1->setEmailVerified(0);
        $manager->persist($auth1);
        $auth2 = new AuthProfile();
        $auth2->setNickname("tournon.kilian");
        $auth2->setName("Kilian .T");
        $auth2->setPicture("http://www.nretnil.com/avatar/LawrenceEzekielAmos.png");
        $auth2->setEmail("Kilien@gmail.com");
        $auth2->setEmailVerified(0);
        $manager->persist($auth2);
        $auth3 = new AuthProfile();
        $auth3->setNickname("harrat.younes");
        $auth3->setName("Younes .H");
        $auth3->setPicture("http://www.nretnil.com/avatar/kirk.jpg");
        $auth3->setEmail("Younes@gmail.com");
        $auth3->setEmailVerified(0);
        $manager->persist($auth3);


        $user1 = new User();
        $user1->setNom("MELENCHON");
        $user1->setPrenom("Guillaume");
        $user1->setAge("21");
        $user1->setMail("mail@gmail.com");
        $user1->setPseudo("SeeRak");
        $user1->setAvatar("http://www.nretnil.com/avatar/cry-1.jpg");
        $user1->setAuthProfile($auth1);
        $manager->persist($user1);
        $user2 = new User();
        $user2->setNom("TOURNON");
        $user2->setPrenom("Kilian");
        $user2->setAge("54");
        $user2->setMail("mail@gmail.com");
        $user2->setPseudo("Kiks");
        $user2->setAvatar("http://www.nretnil.com/avatar/LawrenceEzekielAmos.png");
        $user2->setAuthProfile($auth2);
        $manager->persist($user2);
        $user3 = new User();
        $user3->setNom("HARRAT");
        $user3->setPrenom("Younes");
        $user3->setAge("79");
        $user3->setMail("mail@gmail.com");
        $user3->setPseudo("Nejirato 999 LND");
        $user3->setAvatar("http://www.nretnil.com/avatar/kirk.jpg");
        $user3->setAuthProfile($auth3);
        $manager->persist($user3);


        $manager->flush();
    }
}
