@extends('Admin.master')

@section('content')

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Создание Вопроса
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
                    <form action="/superadmin/quizquestions/create" method="POST">
                        @csrf
                        <label for="question_title">Название</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" id="question_title" class="form-control" name="question_title" placeholder="Введите название..." required>
                            </div>
                        </div>
                        <label for="question_body">Описание</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" id="question_body" class="form-control" name="question_body" placeholder="Введите описание..." required>
                            </div>
                        </div>
                        <label for="accreditation_quiz_id">Опрос</label>
                        @if(!empty($quizes))
                            <select class="form-control" name="accreditation_quiz_id" required>
                                @foreach($quizes as $org)
                                    <option value="{{$org->id}}">{{$org->name}}</option>
                                @endforeach
                            </select>
                        @endif
                        <label for="accreditation_quiz_id">Тип поля</label>
                        <select class="form-control" name="type" required>
                            <option value="select">Селект</option>
                            <option value="radio">Радио</option>
                            <option value="checkbox">Чекбокс</option>
                            <option value="input">Инпут</option>
                            <option value="slider">Слайдер</option>
                        </select>
                        <br/>
                        <br/>
                        <div class="switch">
                            Активно:
                            <label>
                                Нет
                                <input name="status" type="checkbox" >
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
                </div>
            </div>
        </div>
    </div>
@endsection
