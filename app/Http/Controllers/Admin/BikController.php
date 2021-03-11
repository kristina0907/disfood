<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\BikService;
use App\Services\ParserBikService;
use Illuminate\Http\Request;

class BikController extends Controller
{

    /**
     * @var BikService
     */
    protected $bikService,
              $bikParserService;

    /**
     * BikController constructor.
     * @param BikService $bikService
     * @param ParserBikService $bikParserService
     */

    public function __construct(BikService $bikService, ParserBikService $bikParserService)
    {
        $this->bikService = $bikService;
        $this->bikParserService = $bikParserService;
    }

    public function parse()
    {
        $biks = $this->bikParserService->init();
        if(!empty($biks) && count($biks) > 0 )
        {
            foreach ($biks['bik'] as $bank)
            {
               $this->bikParserService->saveBikData($bank['@attributes']);
            }
        }
        return true;
    }
}
