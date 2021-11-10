@extends('Admin.master')

@section('content')

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Редактирование категории
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
                    @if(!empty($country))
                        <form action="/superadmin/countries/update" method="POST">
                            @csrf
                            <input type="hidden" name="id" value="{{$country->id}}">
                            <label for="name">Название страны</label>
                            <div class="form-group">
                                <div class="form-line">
                                    <input type="text" id="name" class="form-control" name="name" placeholder="Введите название категории..." value="{{old('name',$country->title_ru)}}">
                                </div>
                            </div>
                            <label for="slug">Код</label>
                            <div class="form-group">
                                <div class="form-line">
                                    <input type="text" id="code" class="form-control" name="code" placeholder="Код..." value="{{old('slug',$country->code)}}">
                                </div>
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
