@extends('Admin.master')

@section('content')

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Редактирование Ответа
                    </h2>
                    <ul class="header-dropdown m-r--5">
                        <li class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                <i class="material-icons">more_vert</i>
                            </a>
                            <ul class="dropdown-menu pull-right">
                                <li><a href="javascript:void(0);">Action</a></li>
                                <li><a href="javascript:void(0);">Another action</a></li>
                                <li><a href="javascript:void(0);">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="body">
                    @if(!empty($value))
                        <form action="/superadmin/quizquestionsvalues/update" method="POST">
                        @csrf
                        <input type="hidden" name="id" value="{{$value->id}}">
                        <label for="question_title">Значение</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" id="value_name" class="form-control" name="value_name" value="{{$value->value_name}}" placeholder="Введите название..." required>
                            </div>
                        </div>
                        <label for="accreditation_quiz_id">Вопрос</label>
                        @if(!empty($questions))
                            <select class="form-control" name="question_id" required>
                                @foreach($questions as $org)
                                    <option value="{{$org->id}}" @if($org->id == $value->question_id) selected @endif>{{$org->question_title}}</option>
                                @endforeach
                            </select>
                        @endif
                        <br/>
                        <br/>
                        <div class="switch">
                            Активно:
                            <label>
                                Нет
                                <input name="active" type="checkbox" @if($value->active) checked @endif>
                                <span class="lever">

                                </span>Да
                            </label>
                        </div>
                        <br/>
                        @include('Admin.layouts.errors')
                        <button type="submit" class="btn btn-primary m-t-15 waves-effect">
                            Сохранить
                        </button>
                    </form>
                    @endif
                </div>
            </div>
        </div>
    </div>
@endsection
