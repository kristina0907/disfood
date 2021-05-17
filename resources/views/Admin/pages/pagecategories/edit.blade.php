@extends('Admin.master')

@section('content')

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Создание категории страниц
                    </h2>
                </div>
                <div class="body">
                    <form action="/superadmin/pagecategories/update" method="POST" enctype="multipart/form-data">
                        @csrf
                        <input type="hidden" name="id" value="{{$categories->id}}">
                        <label for="name">Название категории</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" id="name" class="form-control" name="name" value="{{old('name',$categories->name)}}" placeholder="Введите название категории..." required>
                            </div>
                        </div>
                        <input type="checkbox" id="active" name="active" @if($categories->active) checked @endif class="filled-in">
                        <label for="active">Включено</label>
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
