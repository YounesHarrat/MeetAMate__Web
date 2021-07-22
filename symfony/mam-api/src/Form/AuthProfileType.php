<?php

namespace App\Form;

use App\Entity\AuthProfile;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AuthProfileType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('nickname')
            ->add('name')
            ->add('picture')
            ->add('updated_at')
            ->add('email')
            ->add('email_verified')
            ->add('sub')
            ->add('user')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => AuthProfile::class,
        ]);
    }
}
