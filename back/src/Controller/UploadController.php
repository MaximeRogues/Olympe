<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

class UploadController extends AbstractController
{
    /**
     * @Route("store-images")
     */
    public function storeImages(Request $request) {
        $data = $request->files->get('file');

        // if ($data->guessExtension() === 'jpeg') {
        //     $extension = '.jpg';
        // }
        $fileName = $data->getClientOriginalName();
        $data->move($this->getParameter('resourcesDirectory'), $fileName);

        return new Response($fileName);
    }
}
