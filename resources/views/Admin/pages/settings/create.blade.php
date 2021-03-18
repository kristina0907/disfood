@extends('Admin.master')

@section('content')

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Создание настройки
                    </h2>
                </div>
                <div class="body">
                    <form action="/superadmin/settings/store" method="POST" enctype="multipart/form-data">
                        @csrf
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="name">Название настройки</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input type="text" id="name" class="form-control" name="name" placeholder="Введите название настройки...">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label for="slug">Slug</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input type="text" id="slug" class="form-control" name="slug" placeholder="Введите slug..">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <label for="value">Значение</label>
                            <div class="form-group">
                                <div class="form-line">
                                   <input type="text" id="value" class="form-control" name="value" placeholder="Введите value..">
                                </div>
                            </div>
                        </div>
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
