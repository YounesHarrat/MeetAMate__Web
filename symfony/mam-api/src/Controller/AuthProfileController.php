<?php

namespace App\Controller;

use App\Entity\AuthProfile;
use App\Form\AuthProfileType;
use App\Repository\AuthProfileRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/auth/profile')]
class AuthProfileController extends AbstractController
{
    #[Route('/', name: 'auth_profile_index', methods: ['GET'])]
    public function index(AuthProfileRepository $authProfileRepository): Response
    {
        return $this->render('auth_profile/index.html.twig', [
            'auth_profiles' => $authProfileRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'auth_profile_new', methods: ['GET', 'POST'])]
    public function new(Request $request): Response
    {
        $authProfile = new AuthProfile();
        $form = $this->createForm(AuthProfileType::class, $authProfile);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($authProfile);
            $entityManager->flush();

            return $this->redirectToRoute('auth_profile_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('auth_profile/new.html.twig', [
            'auth_profile' => $authProfile,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'auth_profile_show', methods: ['GET'])]
    public function show(AuthProfile $authProfile): Response
    {
        return $this->render('auth_profile/show.html.twig', [
            'auth_profile' => $authProfile,
        ]);
    }

    #[Route('/{id}/edit', name: 'auth_profile_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, AuthProfile $authProfile): Response
    {
        $form = $this->createForm(AuthProfileType::class, $authProfile);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('auth_profile_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('auth_profile/edit.html.twig', [
            'auth_profile' => $authProfile,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'auth_profile_delete', methods: ['POST'])]
    public function delete(Request $request, AuthProfile $authProfile): Response
    {
        if ($this->isCsrfTokenValid('delete'.$authProfile->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($authProfile);
            $entityManager->flush();
        }

        return $this->redirectToRoute('auth_profile_index', [], Response::HTTP_SEE_OTHER);
    }
}
