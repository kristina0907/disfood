@extends('Admin.master')

@section('content')

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Редактирование статуса заказа
                    </h2>
                </div>
                <div class="body">
                    <form action="/superadmin/orderstatuses/update" method="POST" enctype="multipart/form-data">
                        @csrf
                        <input type="hidden" name="id" value="{{$status->id}}">
                        <label for="name">Название статуса заказа</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" id="name" class="form-control" name="name" value="{{old('name',$status->name)}}" placeholder="Введите название статуса заказа...">
                            </div>
                        </div>
                        <label for="slug">Slug статуса заказа</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" id="slug" class="form-control" name="slug" value="{{old('slug',$status->slug)}}" placeholder="Введите slug статуса заказа...">
                            </div>
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
