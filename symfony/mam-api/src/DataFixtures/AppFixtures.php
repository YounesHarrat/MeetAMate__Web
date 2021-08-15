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
        $game1->setNom("Apex Legend");
        $game1->setPicture("https://media.rawg.io/media/crop/600/400/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg");
        $game1->setBackgroundPicture("https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/8df707a948fac1b4a0f97aa554886ec8.png");
        $game1->setPlateforme("PC");
        $manager->persist($game1);

        $game2 = new Game();
        $game2->setNom("Rocket League ");
        $game2->setPicture("https://media.rawg.io/media/crop/600/400/games/88c/88c5b4d7c80276c03ff62aebb1a99ad4.jpg");
        $game2->setBackgroundPicture("https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/e6da32eef072f987685b6eddca072d4f.jpg");
        $game2->setPlateforme("PC");
        $manager->persist($game2);

        $game3 = new Game();
        $game3->setNom("Fortnite");
        $game3->setPicture("https://media.rawg.io/media/crop/600/400/games/dcb/dcbb67f371a9a28ea38ffd73ee0f53f3.jpg");
        $game3->setBackgroundPicture("https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/0ce98f53e3aa229aa2f31b16e5dcbb4b.png");
        $game3->setPlateforme("PC");
        $manager->persist($game3);

        $game4 = new Game();
        $game4->setNom("Counter-Strike: Global Offensive");
        $game4->setPicture("https://media.rawg.io/media/crop/600/400/games/736/73619bd336c894d6941d926bfd563946.jpg");
        $game4->setBackgroundPicture("https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/b305c4982512d2529ad05ee542a18133.png");
        $game4->setPlateforme("PC");
        $manager->persist($game4);

        $game5 = new Game();
        $game5->setNom("Grand Theft Auto V");
        $game5->setPicture("https://media.rawg.io/media/crop/600/400/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg");
        $game5->setBackgroundPicture("https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/5c645cc19a53ac1dfb155840d886050c.png");
        $game5->setPlateforme("PC");
        $manager->persist($game5);

        $game6 = new Game();
        $game6->setNom("Red Dead Redemption 2");
        $game6->setPicture("https://media.rawg.io/media/crop/600/400/games/511/5118aff5091cb3efec399c808f8c598f.jpg");
        $game6->setBackgroundPicture("https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/d756d3d2b9dac72449a6a6926534558a.png");
        $game6->setPlateforme("PC");
        $manager->persist($game6);

        $game7 = new Game();
        $game7->setNom("Destiny 2");
        $game7->setPicture("https://media.rawg.io/media/crop/600/400/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg");
        $game7->setBackgroundPicture("https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/e9412ee564384b987d086df32d4ce6b7.jpg");
        $game7->setPlateforme("PC");
        $manager->persist($game7);

        $game8 = new Game();
        $game8->setNom("Dota 2");
        $game8->setPicture("https://media.rawg.io/media/crop/600/400/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg");
        $game8->setBackgroundPicture("https://cdn2.steamgriddb.com/file/sgdb-cdn/hero_thumb/0fcbc61acd0479dc77e3cccc0f5ffca7.jpg");
        $game8->setPlateforme("PC");
        $manager->persist($game8);

        $game9 = new Game();
        $game9->setNom("Warframe");
        $game9->setPicture("https://media.rawg.io/media/crop/600/400/games/f87/f87457e8347484033cb34cde6101d08d.jpg");
        $game9->setBackgroundPicture("https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/5352696a9ca3397beb79f116f3a33991.png");
        $game9->setPlateforme("PC");
        $manager->persist($game9);

        $game10 = new Game();
        $game10->setNom("Terraria");
        $game10->setPicture("https://media.rawg.io/media/crop/600/400/games/91c/91c4f377c1e09755b60a0102c5252843.jpg");
        $game10->setBackgroundPicture("https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/32e8e6c03f3fa46eb672dc5680bff7da.png");
        $game10->setPlateforme("PC");
        $manager->persist($game10);

        $game11 = new Game();
        $game11->setNom("League of Legends");
        $game11->setPicture("https://media.rawg.io/media/crop/600/400/games/78b/78bc81e247fc7e77af700cbd632a9297.jpg");
        $game11->setBackgroundPicture("https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/d69116f8b0140cdeb1f99a4d5096ffe4.png");
        $game11->setPlateforme("PC");
        $manager->persist($game11);

        $game12 = new Game();
        $game12->setNom("Overwatch");
        $game12->setPicture("https://media.rawg.io/media/crop/600/400/games/4ea/4ea507ceebeabb43edbc09468f5aaac6.jpg");
        $game12->setBackgroundPicture("https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/44968aece94f667e4095002d140b5896.png");
        $game12->setPlateforme("PC");
        $manager->persist($game12);

        $game13 = new Game();
        $game13->setNom("Valorant");
        $game13->setPicture("https://media.rawg.io/media/crop/600/400/games/b11/b11127b9ee3c3701bd15b9af3286d20e.jpg");
        $game13->setBackgroundPicture("https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/de66dbc30377a1f7908db45298324aa3.png");
        $game13->setPlateforme("PC");
        $manager->persist($game13);

        $game14 = new Game();
        $game14->setNom("Minecraft");
        $game14->setPicture("https://media.rawg.io/media/crop/600/400/games/b4e/b4e4c73d5aa4ec66bbf75375c4847a2b.jpg");
        $game14->setBackgroundPicture("https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/01882513d5fa7c329e940dda99b12147.jpg");
        $game14->setPlateforme("PC");
        $manager->persist($game14);

        $game15 = new Game();
        $game15->setNom("Call of Duty: Warzone");
        $game15->setPicture("https://media.rawg.io/media/crop/600/400/games/7e3/7e327a055bedb9b6d1be86593bef473d.jpg");
        $game15->setBackgroundPicture("https://cdn2.steamgriddb.com/file/sgdb-cdn/hero/e82c4b19b8151ddc25d4d93baf7b908f.jpg");
        $game15->setPlateforme("PC");
        $manager->persist($game15);

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
