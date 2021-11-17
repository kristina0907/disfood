<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\QuizQuestionService;
use App\Services\QuizService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class QuizQuestionsController extends Controller
{

    /**
     * @var QuizQuestionService
     */

    protected $questionService;

    /**
     * @var QuizService
     */

    protected $quizService;

    /**
     * @param QuizQuestionService $questionService
     * @param QuizService $quizService
     */

    public function __construct(QuizQuestionService $questionService,QuizService $quizService)
    {
        $this->questionService = $questionService;
        $this->quizService = $quizService;
    }


    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|void
     */

    public function show()
    {
        if(Gate::allows('view',Auth::user()))
        {
            $questions = $this->questionService->getAll();
            return view('Admin.pages.quizquestions.show',['questions'=>$questions]);
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
            $quizes = $this->quizService->getAll();
            return view('Admin.pages.quizquestions.create',['quizes'=>$quizes]);
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
            $this->questionService->save($request);
            return redirect('/superadmin/quizquestions');
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
                $quiz = $this->quizService->getAll();
                $question = $this->questionService->getById($id);
                //dd($question);
                if(!empty($quiz))
                {
                    return view('Admin.pages.quizquestions.edit',[
                        'quizes' => $quiz,
                        'question' => $question
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
                $this->questionService->update($request, $request->id);

                return redirect('/superadmin/quizquestions');
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
            $this->questionService->deleteById($id);
            return redirect('/superadmin/quizquestions');
        }
        abort(403,'Access Denied');
    }
}
