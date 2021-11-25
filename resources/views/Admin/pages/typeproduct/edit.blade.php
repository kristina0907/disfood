@extends('Admin.master')

@section('content')

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Редактирование типа товара
                    </h2>
                </div>
                <div class="body">
                    <form action="/superadmin/types/update" method="POST" enctype="multipart/form-data">
                        @csrf
                        <input type="hidden" name="id" value="{{$category->id}}">
                        <label for="name">Изображение типа товара</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input name="image" type="file" value="{{old('image',$category->image)}}"/>
                            </div>
                        </div>
                        <label for="name">Название типа товара</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" id="name" class="form-control" name="name"  value="{{old('name',$category->name)}}" placeholder="Введите название категории...">
                            </div>
                        </div>
                        @if(!empty($categories))
                            <select class="form-control" name="category_id">
                                @foreach($categories as $cat)
                                    <option value="{{$cat->id}}"
                                            @if($cat->id == $category->category_id) selected @endif
                                    >{{$cat->name}}</option>
                                @endforeach
                            </select>
                        @endif
                        <br/>
                        <label for="name">код груза ЕТСНГ</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" id="fre" list="etsn-value" class="form-control" name="fre"  value="{{old('name',$category->fre)}}" placeholder="код груза ЕТСНГ...">
                                <datalist id="etsn-value">

                                </datalist>
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
