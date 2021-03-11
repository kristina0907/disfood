<?php

namespace App\Services;



use App\Repositories\BikRepository;
use Exception;
use InvalidArgumentException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ParserBikService
{

    /**
     * @var BikRepository
     */

    protected $bikRepository;

    protected $url = 'https://bik-info.ru/base/base.xml';

    /**
     * BikService constructor.
     * @param BikRepository $bikRepository
     */

    public function __construct(BikRepository  $bikRepository)
    {
        $this->bikRepository = $bikRepository;

    }


    public function init()
    {
        $ch = curl_init($this->url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $output = curl_exec($ch);

        curl_close($ch);

        $output = $this->parseXmlToArray($output);
        return $output;

    }

    private function parseXmlToArray($data)
    {
        // Convert xml string into an object
        $new = simplexml_load_string($data);

        // Convert into json
        $con = json_encode($new);

        // Convert into associative array
        $newArr = json_decode($con, true);

        return $newArr;
    }

    public function saveBikData($data)
    {
        //dd($data);
        $result = $this->bikRepository->save($data);

        return $result;

    }


}
