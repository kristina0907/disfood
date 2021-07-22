@extends('Admin.master')

@section('content')

    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2>
                        Редактирование Документа для ордера
                    </h2>
                </div>
                <div class="body">
                    <form action="/superadmin/orderdocuments/update" method="POST" enctype="multipart/form-data">
                        @csrf
                        <input type="hidden" name="id" value="{{$document->id}}"/>
                        <label for="name">Название документа</label>
                        <div class="form-group">
                            <div class="form-line">
                                <input type="text" id="name" class="form-control" name="name" value="{{$document->name}}" placeholder="Введите название документа...">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-12">
                                    <label for="price">Цена</label>
                                    <div class="form-group">
                                        <div class="form-line">
                                            <input type="number" id="price" class="form-control" value="{{$document->price}}" name="price" placeholder="Введите цену...">
                                        </div>
                                    </div>
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
