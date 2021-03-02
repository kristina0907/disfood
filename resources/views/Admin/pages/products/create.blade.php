@extends('Admin.master')

@section('content')

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Создание товара
                    </h2>
                </div>
                <div class="body">
                    <form action="/superadmin/products/create" method="POST" enctype="multipart/form-data">
                        @csrf

                        <label for="name">Изображение товара</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input name="image" type="file" />
                            </div>
                        </div>

                        <label for="name">Название товара</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" id="name" class="form-control" name="name" placeholder="Введите название товара...">
                            </div>
                        </div>

                        <label for="description">Описание товара</label>
                        <div class="form-group">
                            <div class="form-line">
                                <textarea name="description" rows="4" class="form-control no-resize" placeholder="Описание товара..."></textarea>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-6">
                                    @if(!empty($categories))
                                        <label for="category_id">Категория товара</label>
                                        <select class="form-control" name="category_id">
                                            @foreach($categories as $category)
                                                <option value="{{$category->id}}">{{$category->name}}</option>
                                            @endforeach
                                        </select>
                                    @endif
                                </div>
                               <div class="col-md-6">
                                   @if(!empty($types))
                                       <label for="type_id">Тип товара</label>
                                       <select class="form-control" name="type_id">
                                           @foreach($types as $type)
                                               <option value="{{$type->id}}">{{$type->name}}</option>
                                           @endforeach
                                       </select>
                                   @endif
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
