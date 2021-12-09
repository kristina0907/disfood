<?php

namespace App\Services;




use App\Contracts\DadataContract;
use Dadata\DadataClient;
use Exception;
use Illuminate\Support\Facades\Lang;
use InvalidArgumentException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use MoveMoveIo\DaData\Enums\BranchType;
use MoveMoveIo\DaData\Enums\CompanyStatus;
use MoveMoveIo\DaData\Enums\CompanyType;
use MoveMoveIo\DaData\Enums\Language;
use MoveMoveIo\DaData\Facades\DaDataAddress;
use MoveMoveIo\DaData\Facades\DaDataCompany;
use MoveMoveIo\DaData\Facades\DaDataName;
use MoveMoveIo\DaData\Facades\DaDataPhone;




class DadataService implements DadataContract
{


    /**
     * @var mixed
     */

    protected $token;

    /**
     * @var mixed
     */

    protected $secret;

    /**
     *
     */

    protected $dadata;

    /**
     *
     */

    public function __construct()
    {
        $this->token = env('DADATA_TOKEN');
        $this->secret = env('DADATA_SECRET');
        $this->dadata = new DadataClient($this->token,$this->secret);
    }


    /**
     * @param $data
     * @return mixed|\MoveMoveIo\DaData\DaDataName
     */

    public function getUserByName($data)
    {
        return  DaDataName::standardization($data);
    }

    /**
     * @param $data
     * @param $count
     * @return mixed|\MoveMoveIo\DaData\DaDataCompany
     */

    public function getCompanyByInn($data,$count)
    {
       /* $stream = new DadataClient($this->token,$this->secret);
        $dadata = $stream->findById("party", $data, $count);*/

        //$dadata = DaDataCompany::id($data, 1, null, 1, 1);
        $dadata =  $this->dadata->findById("party",$data,$count);
        //dd($dadata);

        return $dadata;
       //return DaDataCompany::id($data,$count);
    }

    /**
     * @param $data
     * @param int $count
     * @return mixed|\MoveMoveIo\DaData\DaDataAddress
     */

    public function getCityByName($data,$count=20)
    {
        return DaDataAddress::prompt((string) $data, (integer) $count, Language::RU);
    }

    /**
     * @param $data
     * @return mixed|\MoveMoveIo\DaData\DaDataPhone
     */

    public function getPhoneByString($data)
    {
        return DaDataPhone::standardization((string) $data);
    }

    /**
     * @param $data
     * @return mixed|string
     */

    public function getTypeUserByInn($data)
    {
        $org = $this->getCompanyByInn($data,20);
        if (!empty($org) && !empty($org['suggestions'][0]['data']['type']))
        {
            return $org['suggestions'][0]['data']['type'];
        }
        return 'ИНН не найден';

    }

    /**
     * @param $data
     */

    public function getOrganizationByName($data)
    {
        return DaDataCompany::prompt($data, 10, [CompanyStatus::ACTIVE], CompanyType::LEGAL);
    }

}
