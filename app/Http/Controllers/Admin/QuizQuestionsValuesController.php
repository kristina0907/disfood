<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Repositories\QuizQuestionsValuesRepository;
use App\Services\QuizQuestionService;
use App\Services\QuizQuestionsValuesService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class QuizQuestionsValuesController extends Controller
{

    /**
     * @var QuizQuestionsValuesService
     */

    protected $valueService;

    /**
     * @var QuizQuestionService
     */

    protected $questionService;

    /**
     * @param QuizQuestionsValuesService $valueService
     * @param QuizQuestionService $questionService
     */

    public function __construct(QuizQuestionsValuesService $valueService, QuizQuestionService $questionService)
    {
        $this->valueService = $valueService;
        $this->questionService = $questionService;
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|void
     */

    public function show()
    {
        if(Gate::allows('view',Auth::user()))
        {
            $values = $this->valueService->getAll();
            return view('Admin.pages.quizquestionvalues.show',['values'=>$values]);
        }
        abort(403,'Access Denied');
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|void
     */

    public function create()
    {
        if(Gate::allows('create',Auth::user()))
        {
            $questions = $this->questionService->getAll();
            return view('Admin.pages.quizquestionvalues.create',['questions'=>$questions]);
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector|void
     */

    public function store(Request $request)
    {
        if(Gate::allows('create',Auth::user()))
        {
            $this->valueService->save($request);
            return redirect('/superadmin/quizquestionsvalues');
        }
        abort(403,'Access Denied');
    }

    /**
     * @param $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|void
     */

    public function edit($id)
    {
        if(Gate::allows('create',Auth::user()))
        {
            if(!empty($id))
            {
                $value = $this->valueService->getById($id);
                $questions = $this->questionService->getAll();
                if(!empty($value))
                {
                    return view('Admin.pages.quizquestionvalues.edit',[
                        'value' => $value,
                        'questions'=>$questions
                    ]);
                }
            }
        }
        abort(403,'Access Denied');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector|void
     */

    public function update(Request $request)
    {
        if(Gate::allows('update',Auth::user()))
        {
            if(!empty($request->id))
            {
                $this->valueService->update($request, $request->id);

                return redirect('/superadmin/quizquestionsvalues');
            }
        }
        abort(403,'Access Denied');
    }

    /**
     * @param $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector|void
     */

    public function delete($id)
    {
        if(Gate::allows('delete',Auth::user()))
        {
            $this->valueService->deleteById($id);
            return redirect('/superadmin/quizquestionsvalues');
        }
        abort(403,'Access Denied');
    }
}
