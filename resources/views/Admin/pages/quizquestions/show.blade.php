@extends('Admin.master')

@section('content')

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Вопросы для опросника
                        <a href="/superadmin/quizquestions/create" class="btn btn-success btn-circle waves-effect waves-circle waves-float">
                            <i class="material-icons">add</i>
                        </a>
                    </h2>
                </div>
                <div class="body">
                    <!-- Tab panes -->
                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane fade in active" id="home_only_icon_title">
                            <div class="row clearfix">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="table-responsive">
                                        <table class="table table-bordered table-striped table-hover dataTable js-exportable">
                                            <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Название вопроса</th>
                                                <th>Описание вопроса</th>
                                                <th>Тип поля</th>
                                                <th>Опрос</th>
                                                <th>Статус</th>
                                                <th>Действия</th>
                                            </tr>
                                            </thead>
                                            <tfoot>
                                            <tr>
                                                <th>ID</th>
                                                <th>Название вопроса</th>
                                                <th>Описание вопроса</th>
                                                <th>Тип поля</th>
                                                <th>Опрос</th>
                                                <th>Статус</th>
                                                <th>Действия</th>
                                            </tr>
                                            </tfoot>
                                            <tbody>
                                            @if(!empty($questions))
                                                @foreach($questions as $q)
                                                    <tr role="row" class="odd">
                                                        <td>{{$q->id}}</td>
                                                        <td>{{$q->question_title}}</td>
                                                        <td>{{$q->question_body}}</td>
                                                        <td>{{$q->type}}</td>
                                                        <td>{{$q->quiz->name}}</td>
                                                        <td>
                                                            @if($q->status)
                                                                <span class="badge bg-green">Активно</span>
                                                            @else
                                                                <span class="badge bg-red">Не Активно</span>
                                                            @endif
                                                        </td>
                                                        <td>
                                                            <a href="/superadmin/quizquestions/edit/{{$q->id}}" class="btn btn-success btn-circle waves-effect waves-circle waves-float"><i class="material-icons">edit</i></a>
                                                            <a href="/superadmin/quizquestions/delete/{{$q->id}}" class="btn btn-danger btn-circle waves-effect waves-circle waves-float"><i class="material-icons">delete</i></a>
                                                        </td>
                                                    </tr>
                                                @endforeach
                                            @endif
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
