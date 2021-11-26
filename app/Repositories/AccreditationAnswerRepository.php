<?php


namespace App\Repositories;

use App\Contracts\AccreditationAnswerContract;

use App\Models\AccreditationQuestionAnswers;
use Illuminate\Support\Facades\Auth;


class AccreditationAnswerRepository implements AccreditationAnswerContract
{


    /**
     * @var AccreditationQuestionAnswers
     */

    protected $answer;


    /**
     * @param AccreditationQuestionAnswers $answer
     */

    public function __construct(AccreditationQuestionAnswers  $answer)
    {
        $this->answer = $answer;
    }

    /**
     * @return mixed
     */

    public function getAll()
    {
        return $this->answer->get();
    }

    /**
     * @param $id
     * @return mixed
     */

    public function getById($id)
    {
        return $this->answer
            ->where('id', $id)
            ->first();
    }



    /**
     * @param $data
     * @return mixed
     */

    public function save($data)
    {
        $answer = new $this->answer;


        $answer->user_id = Auth::user()->id;
        $answer->organization_id = $data['organization_id'];
        $answer->question_id = $data['question_id'];
        $answer->value_id = $data['value_id'];

        $answer->save();

        return $answer->fresh();
    }

    /**
     * @param $data
     * @param $id
     * @return mixed
     */

    public function update($data, $id)
    {

        if(!empty($id))
        {
            $answer = $this->answer->find($id);
            $answer->user_id = $data['user_id'];
            $answer->organization_id = $data['organization_id'];
            $answer->question_id = $data['question_id'];
            $answer->value_id = $data['value_id'];

            $answer->update();
        }

        return $answer;
    }

    /**
     * @param $id
     * @return mixed
     */

    public function delete($id)
    {

        $answer = $this->answer->find($id);
        $answer->delete();
        return $answer;
    }



}
