@extends('Admin.master')

@section('content')

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Создание Опроса
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
                    @if(!empty($quiz))
                        <form action="/superadmin/quiz/update" method="POST">
                        @csrf
                        <input type="hidden" name="id" value="{{$quiz->id}}">
                        <label for="name">Название</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" id="name" class="form-control" name="name" value="{{$quiz->name}}" placeholder="Введите название..." required>
                            </div>
                        </div>
                        <div class="switch">
                            Активно:
                            <label>
                                Нет
                                <input name="status" type="checkbox" @if($quiz->status) checked @endif>
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
