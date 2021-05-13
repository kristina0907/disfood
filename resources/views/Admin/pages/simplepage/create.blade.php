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
                    <form action="/superadmin/simplepages/store" method="POST" enctype="multipart/form-data">
                        @csrf
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="title">Заголовок</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input type="text" id="title" class="form-control" name="title" placeholder="Введите заголовок страницы..." required>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label for="description">description</label>
                                    <div class="form-group">
                                         <textarea id="ckeditor"></textarea>
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
