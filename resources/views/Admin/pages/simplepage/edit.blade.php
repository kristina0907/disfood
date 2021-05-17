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
                    <form action="/superadmin/simplepages/update" method="POST" enctype="multipart/form-data">
                        @csrf
                        <input type="hidden" name="id" id="id" value="{{$page->id}}"/>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="title">Заголовок</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input type="text" id="title" class="form-control" name="title" value="{{$page->title}}" placeholder="Введите заголовок страницы..." required>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label for="category_id">Категория страницы</label>
                                    <select class="form-control " name="category_id">
                                        @if(!empty($categories))
                                            @foreach($categories as $cat)
                                                <option value="{{$cat->id}}" @if($cat->id == $page->category_id) selected @endif>{{$cat->name}}</option>
                                            @endforeach
                                        @endif
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">

                                </div>
                                <div class="col-md-6">

                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <label for="description">Описание</label>
                            <div class="form-group">
                                <div class="form-group">
                                    <div class="form-line">
                                        <textarea rows="4" id="desc" name="description"  class="form-control no-resize" placeholder="Введите краткое описание статьи...">{{$page->description}}</textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <label for="description">Текст</label>
                            <div class="form-group">
                                <textarea id="ckeditor" name="body" rows="20" class="form-control">{{$page->body}}</textarea>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="image">Фото для превью</label>
                                    <input type="file" id="image" name="image" />
                                </div>
                                <div class="col-md-6">
                                    <input type="checkbox" id="active" name="active" @if($page->public) checked @endif class="filled-in">
                                    <label for="active">Включено</label>
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
    <script src="https://cdn.ckeditor.com/ckeditor5/27.1.0/classic/ckeditor.js"></script>
    <script>
        ClassicEditor
            .create( document.querySelector( '#ckeditor' ) )
            .catch( error => {
                console.error( error );
            } );
    </script>
@endsection
