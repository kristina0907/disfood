<?php


namespace App\Services;




use App\Models\Setings;
use Exception;
use InvalidArgumentException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class AltaSoftApiService
{
    protected $url="https://www.alta.ru/rail_tracking/rail_trf/";
    protected $ApiKey;
    protected $encoding = "utf-8";
    protected $owner="0";

    /**
     *
     */

    public function __construct()
    {
        $api = Setings::where('slug','alta_soft_api_key')->first();
        if(!empty($api))
        {
            $this->ApiKey = $api->value;
        }
        else
        {
            $this->ApiKey = "069E4E99072FEEF8657DD7493B51ABF7";
        }
    }

    /**
     * @param string $type
     * @param string $index
     * @return mixed
     */

    public function getRailwayStation(string $type,string $index)
    {
       $url = $this->url ."?type=".$type."&index=".mb_strtolower($index,$this->encoding)."&encoding=".$this->encoding."&api_key=". $this->ApiKey;

       $ch = curl_init($url);
       curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
       $output = curl_exec($ch);

       curl_close($ch);

       $output = $this->parseXmlToArray($output);
        //dd($output);
       return $output;
    }

    /**
     * @param string $type
     * @param string $index
     * @param string $corr
     * @return mixed
     */

   public function getProductCode(string $type,string $index, string $corr = 'yes')
   {
       $url = $this->url ."?type=".$type."&index=".mb_strtolower($index,$this->encoding)."&encoding=".$this->encoding."&corr=".$corr."&api_key=". $this->ApiKey;
       $ch = curl_init($url);
       curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
       $output = curl_exec($ch);

       curl_close($ch);
       $output = $this->parseXmlToArray($output);

       return $output;
   }

    /**
     * @param string $type
     * @param string $fst
     * @param string $tst
     * @param string $fre
     * @param string $frg
     * @param int $weight
     * @param int $gp
     * @param int $owner
     * @param int $empt
     * @param int $return
     * @return mixed
     */

    public function getDeliveryCalc(string $type,string $fst,string $tst,string $fre,string $frg,int $weight,int $gp=66,int $owner=0,int $empt=0,int $return=0)
    {
        $url = $this->url ."?type=".$type."&encoding=".$this->encoding."&fst=".$fst."&tst=".$tst."&fre=".$fre."&frg=".$frg."&w=".$weight."&gp=".$gp."&owner=".$owner."&empt=".$empt."&return=".$return."&van=200"."&api_key=". $this->ApiKey;
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $output = curl_exec($ch);

        curl_close($ch);
        $output = $this->parseXmlToArray($output);

        return $output;
    }


    /**
     * @param $data
     * @return mixed
     */

    private function parseXmlToArray($data)
    {

        // Convert xml string into an object
        $new = simplexml_load_string($data);

        //dd($new);
        $output = array();
        $count = 0;
        foreach ($new->station as  $n)
        {
            $indx = json_encode($n['index']);
            //$indx = json_decode($indx);
            //dd($indx);
            $output[$count] = array(
                'index' => $n['index'][0],
                'name'  => $n['name'][0],
                'roadname'=>$n['roadname'][0]
            );
           /* $output[$count][] = $n->attributes()->name;
            $output[$count][] = $n->attributes()->roadname;*/
            //$output[$count] = json_encode($output[$count]);
            $count++;
        }

        // Convert into json
        //$con = json_encode($output);

        // Convert into associative array
        $newArr = $output;

        return $newArr;
    }
}
