@extends('Admin.master')

@section('content')

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Создание типа товара
                    </h2>
                </div>
                <div class="body">
                    <form action="/superadmin/types/create" method="POST" enctype="multipart/form-data">
                        @csrf

                        <label for="name">Изображение типа товара</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input name="image" type="file" />
                            </div>
                        </div>

                        <label for="name">Название типа товара</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" id="name" class="form-control" name="name" placeholder="Введите название категории...">
                            </div>
                        </div>
                        @if(!empty($categories))
                            <select class="form-control" name="category_id">
                                @foreach($categories as $category)
                                    <option value="{{$category->id}}">{{$category->name}}</option>
                                @endforeach
                            </select>
                        @endif
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
