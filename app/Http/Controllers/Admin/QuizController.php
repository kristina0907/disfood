<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\QuizService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class QuizController extends Controller
{
    /**
     * @var QuizService
     */

    protected $quizService;

    /**
     * @param QuizService $quizService
     */

    public function __construct(QuizService $quizService)
    {
        $this->quizService = $quizService;
    }

    /**
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|void
     */

    public function show()
    {
        if(Gate::allows('view',Auth::user()))
        {
            $quizes = $this->quizService->getAll();
            return view('Admin.pages.quizes.show',['quizes'=>$quizes]);
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

            return view('Admin.pages.quizes.create');
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
            $this->quizService->save($request);
            return redirect('/superadmin/quiz');
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
                $quiz = $this->quizService->getById($id);
                if(!empty($quiz))
                {
                    return view('Admin.pages.quizes.edit',[
                        'quiz' => $quiz,
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
                $this->quizService->update($request, $request->id);

                return redirect('/superadmin/quiz');
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
            $this->quizService->deleteById($id);
            return redirect('/superadmin/quiz');
        }
        abort(403,'Access Denied');
    }
}
